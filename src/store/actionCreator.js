export const actionTypeCreator = action => ({
  TRIGGER: `${action}_TRIGGER`,
  LOADING: `${action}_LOADING`,
  SUCCESS: `${action}_SUCCESS`,
  FAILURE: `${action}_FAILURE`,
  RESET: `${action}_RESET`,
});

export const actionCreator = actionType => ({
  Trigger: payload => ({ payload, type: actionType.TRIGGER }),
  Loading: loading => ({ type: actionType.LOADING, loading }),
  Success: payload => ({ payload, type: actionType.SUCCESS }),
  Failure: error => ({ error, type: actionType.FAILURE }),
  Reset: () => ({ type: actionType.RESET }),
});
