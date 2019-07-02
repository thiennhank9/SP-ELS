import { from, of, iif, concat } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { ELSCommonConfig } from '@els/meded-ui-common-react';
import { EpicErrorHandler } from './EpicErrorHandler';

const AWAIT = 'MEDED/AWAIT';

const awaitErrorHandler = (error, actionType, payloadHolder) =>
  from([
    payloadHolder && payloadHolder.localAjax
      ? {
          type: actionType,
          payload: { error, isLoading: false, localAjax: true, isHandled: true }
        }
      : {
          type: AWAIT,
          payload: { error, isLoading: false },
          error: true,
          meta: { actionType }
        },
    ...EpicErrorHandler.handleError(error)
  ]);

export const awaitEpic = (action$, store, actionType, observablePromiseFunction) => {
  ELSCommonConfig.getLogger().debug(`%cCalling epic with action type: ${actionType}`, 'color: green');
  let payloadHolder;

  return action$.pipe(
    ofType(actionType),
    mergeMap(({ payload, meta }) => {
      payloadHolder = payload;
      if (payload && payload.localAjax) {
        return payload.isHandled
          ? of()
          : concat(
              of({
                type: actionType,
                payload: { error: null, isLoading: true, localAjax: true, isHandled: true }
              }),
              observablePromiseFunction(store, Object.assign({}, payload, { localAjax: true, isHandled: true })),
              of({
                type: actionType,
                payload: { error: null, isLoading: false, localAjax: true, isHandled: true }
              })
            );
      }

      const now = Date.now();
      const callback = meta && meta.callback;
      let hasErrorInEpic = false;
      return concat(
        of({
          type: AWAIT,
          payload: { error: null, isLoading: true },
          meta: { id: now, actionType }
        }),
        observablePromiseFunction(store, payload).pipe(
          catchError(error => {
            hasErrorInEpic = true;
            return concat(awaitErrorHandler(error, actionType, payloadHolder), iif(() => !!callback, of({ type: 'CALLBACK', meta: { callback, error } })));
          })
        ),
        of({
          type: AWAIT,
          payload: { error: null, isLoading: false },
          meta: { id: now, actionType }
        }),
        iif(() => !hasErrorInEpic && !!callback, of({ type: 'CALLBACK', meta: { callback } }))
      );
    }),
    catchError(error => awaitErrorHandler(error, actionType, payloadHolder))
  );
};

export const registerEpicCallback = (action, callback) => Object.assign({}, action, { meta: { callback } });
