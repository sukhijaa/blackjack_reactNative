export const actionTypeCreator = action => ({
  TRIGGER: `${action}_TRIGGER`,
  LOADING: `${action}_LOADING`,
  SUCCESS: `${action}_SUCCESS`,
  FAILURE: `${action}_FAILURE`,
  RESET: `${action}_RESET`,
});

export const actionCreator = (actionType) => ({
  Trigger: reqData => ({ reqData, type: actionType.TRIGGER }),
  Loading: () => ({ type: actionType.LOADING }),
  Success: resData => ({ resData, type: actionType.SUCCESS }),
  Failure: error => ({ error, type: actionType.FAILURE }),
  Reset: () => ({ type: actionType.RESET }),
});
