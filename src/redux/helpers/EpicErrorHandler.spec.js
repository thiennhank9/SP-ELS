import { EpicErrorHandler } from './EpicErrorHandler';

describe('EpicErrorHandler', () => {
  it('should return correctly', () => {
    const handleErrorSpy = jest.spyOn(EpicErrorHandler, 'handleError');
    const error = { response: { status: 400 } };
    const errorActions = EpicErrorHandler.handleError(error);
    expect(errorActions.length).toEqual(0);
    expect(handleErrorSpy).toHaveBeenCalled();
  });
  it('should return correctly with 401', () => {
    const error = { response: { status: 401 } };
    const errorActions = EpicErrorHandler.handleError(error);
    expect(errorActions).toEqual([
      {
        type: 'USER_UNAUTHORIZED',
        payload: {}
      }
    ]);
  });

  it('should return correctly with 403', () => {
    const error = { response: { status: 403 } };
    const errorActions = EpicErrorHandler.handleError(error);
    expect(errorActions).toEqual([
      {
        type: 'FORBIDDEN',
        payload: {}
      }
    ]);
  });
});
