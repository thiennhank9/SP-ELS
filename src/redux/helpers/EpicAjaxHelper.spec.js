import { of } from 'rxjs';
import { awaitEpic } from './EpicAjaxHelper';
import { getMockStoreWithConfig } from '../../../config/test/mocks/ReduxStoreMock';
import ReduxActionTypes from '../../../config/test/mocks/ReduxActionTypes';

const { AWAIT } = ReduxActionTypes;

describe('EpicAjaxHelper', () => {
  it('awaitEpic should work correctly with local ajax', () => {
    const testObservable = () => of({ type: 'OUTPUT_ACTION' });
    const testEpic = (action$, store) => awaitEpic(action$, store, 'TEST_ACTION', testObservable);
    const testAction = { type: 'TEST_ACTION', payload: { localAjax: true } };
    const store = getMockStoreWithConfig({ epic: testEpic });
    store.clearActions();
    store.dispatch(testAction);
    const expectActions = store.getActions().filter(action => action.type === testAction.type || action.type === 'OUTPUT_ACTION');

    expect(expectActions[0].type).toEqual(testAction.type);
    expect(expectActions[1].payload.isLoading).toEqual(true);
    expect(expectActions[1].payload.localAjax).toEqual(true);
    expect(expectActions[1].payload.isHandled).toEqual(true);
    expect(expectActions[2].type).toEqual('OUTPUT_ACTION');
    expect(expectActions[3].payload.isLoading).toEqual(false);
    expect(expectActions[3].payload.localAjax).toEqual(true);
    expect(expectActions[3].payload.isHandled).toEqual(true);
  });
  it('awaitEpic should work correctly with global ajax', () => {
    const testObservable = () => of({ type: 'OUTPUT_ACTION' });
    const testEpic = (action$, store) => awaitEpic(action$, store, 'TEST_ACTION', testObservable);
    const testAction = { type: 'TEST_ACTION', meta: { callback: () => {} } };
    const store = getMockStoreWithConfig({ epic: testEpic });
    store.clearActions();
    store.dispatch(testAction);
    const expectActions = store.getActions();

    expect(expectActions[0].type).toEqual(testAction.type);
    expect(expectActions[1].type).toEqual(AWAIT);
    expect(expectActions[1].payload.isLoading).toEqual(true);
    expect(expectActions[2].type).toEqual('OUTPUT_ACTION');
    expect(expectActions[3].type).toEqual(AWAIT);
    expect(expectActions[3].payload.isLoading).toEqual(false);
    expect(expectActions[4].type).toEqual('CALLBACK');
  });
});
