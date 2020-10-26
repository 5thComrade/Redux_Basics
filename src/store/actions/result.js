import * as actionTypes from "./actionsTypes";

export const saveResult = (res) => {
  return {
    type: actionTypes.STORE_RESULT,
    result: res,
  };
};

export const storeResult = (result) => {
  return (dispatch, getState) => {
    console.log(getState);
    setTimeout(() => {
      dispatch(saveResult(result));
    }, 2000);
  };
};

export const deleteResult = (resultId) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId: resultId,
  };
};
