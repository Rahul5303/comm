import { CART_REQUEST, DECREMENT, INCREMENT, REMOVE_FROM_CART } from "./actionTypes";






export const AddCart = (productId) => ({ type: CART_REQUEST, payload: productId });
export const Increament = (productId) => ({ type: INCREMENT, payload: productId});
export const Decreament = (productId) => ({ type: DECREMENT, payload: productId});
export const removeFromCart = (productId) => ({ type: REMOVE_FROM_CART, payload: productId});
