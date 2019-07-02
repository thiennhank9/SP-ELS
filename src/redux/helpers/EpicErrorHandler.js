import { ELSCommonConfig, ELSCommonUIConstants } from '@els/meded-ui-common-react';

export const EpicErrorHandler = {
  handleError: error => {
    const errorActions = [];
    /* istanbul ignore else */
    if (error.response && error.response.status === ELSCommonUIConstants.httpStatus.UNAUTHORIZED) {
      errorActions.push({
        type: 'USER_UNAUTHORIZED',
        payload: {}
      });
    }
    /* istanbul ignore else */
    if (error.response && error.response.status === ELSCommonUIConstants.httpStatus.FORBIDDEN) {
      errorActions.push({
        type: 'FORBIDDEN',
        payload: {}
      });
    }

    ELSCommonConfig.getLogger().error(`Error: ${error}`, 'color: red');

    return errorActions;
  }
};
