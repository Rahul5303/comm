import * as types from "./actionTypes";

const initialState = {
  products: [],
  product: {},
  cart:[],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_DATA_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_DATA_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: payload,
        isError: false,
      };
    case types.GET_DATA_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        products: [],
      };
    case types.ADD_DATA_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.ADD_DATA_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case types.ADD_DATA_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
      case types.DELETE_DATA_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.DELETE_DATA_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case types.DELETE_DATA_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.SINGLE_DATA_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.SINGLE_DATA_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        product: payload,
        isError: false,
      };
    case types.SINGLE_DATA_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        product: {},
      };
      case types.GET_CART:
        return {
          ...state,
          cart: payload,
        };
      // cart add
     case types. ADD_TO_CART_REQUEST:
      return {
        ...state,
        cart: [...state.cart, payload],
      };
      // cart remove
      case types.REMOVE_TO_CART_REQUEST:
        return {
          ...state,
          cart: state.cart.filter((item) => item._id !== payload),
        };
    default:
      return state;
  }
};
