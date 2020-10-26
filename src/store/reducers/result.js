import * as actionTypes from "../actions/actionsTypes";

const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat(action.result),
      };
    case actionTypes.DELETE_RESULT:
      const id = action.resultElId;
      const newResults = state.results.filter((result, index) => {
        return index !== id;
      });
      return {
        ...state,
        results: newResults,
      };
    default:
      return state;
  }
};

export default reducer;
