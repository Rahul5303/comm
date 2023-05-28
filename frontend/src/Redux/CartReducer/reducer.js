import { CART_REQUEST, DECREMENT, INCREMENT } from "./actionTypes"


const InitialState = {
    cart: [],

}
export const reducer = (state = InitialState, { type, payload }) => {
    switch (type) {
        case CART_REQUEST: {
            return {
                ...state,
                cart: [...state.cart, payload],
            }

        }
        case INCREMENT: {
            let array = state.cart.map((el) => {
                if (el.id == payload) {
                    return { ...el, count: el.count + 1 }
                } else {
                    return el;
                }
            })
            return {
                ...state,
                cart: [...array]
            }
        }
        case DECREMENT: {
            let array = state.cart.map((el) => {
                if (el.id == payload) {
                    return { ...el, count: el.count - 1 }
                } else {
                    return el;
                }
            })
            return {
                ...state,
                cart: [...array]
            }
        }
        default: {
            return state
        }
    }
}