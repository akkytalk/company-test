import * as actionType from "../actions/ActionTypes";

const initialState = {
  result: [],
  error: false,
  editResult: [],
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.RESULT_SET_DATA:
      return {
        ...state,
        result: action.result,
        isLoading: false,
        error: false,
      };

    case actionType.RESULT_FAIL_DATA:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        result: [],
      };
    case actionType.RESULT_LOADING:
      return {
        ...state,
        isLoading: true,
        error: false,
        result: [],
        editResult: [],
      };

    case actionType.POST_RESULT_DATA_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case actionType.RESULT_EDIT_SET_DATA:
      return {
        ...state,
        isLoading: false,
        error: false,
        editResult: action.editResult,
      };
    case actionType.RESULT_EDIT_FAIL_DATA:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        editResult: [],
      };
    case actionType.UPDATE_RESULT_DATA_START:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;
