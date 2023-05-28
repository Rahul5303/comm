import { CART_REQUEST, DECREMENT, INCREMENT } from "./actionTypes";






export const AddCart = (data) => ({ type: CART_REQUEST, payload: data });
export const Increament = (data) => ({ type: INCREMENT, payload: data });
export const Decreament = (data) => ({ type: DECREMENT, payload: data });