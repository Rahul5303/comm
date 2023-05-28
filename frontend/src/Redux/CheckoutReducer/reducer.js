import * as types from "./actionTypes";

const initialState = {
  checkout: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_DATA_CHECKOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_DATA_CHECKOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        checkout: payload,
        isError: false,
      };
    case types.GET_DATA_CHECKOUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        checkout: [],
      };
    case types.ADD_DATA_CHECKOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.ADD_DATA_CHECKOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case types.ADD_DATA_CHECKOUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
     
    default:
      return state;
  }
};
