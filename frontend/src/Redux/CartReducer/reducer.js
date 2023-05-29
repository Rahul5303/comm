// import { CART_REQUEST, DECREMENT, INCREMENT } from "./actionTypes"


// const InitialState = {
//     cart: [],

// }
// export const reducer = (state = InitialState, { type, payload }) => {
//     switch (type) {
//         case CART_REQUEST: {
//             return {
//                 ...state,
//                 cart: [...state.cart, payload],
//             }

//         }
//         case INCREMENT: {
//             let array = state.cart.map((el) => {
//                 if (el.id == payload) {
//                     return { ...el, count: el.count + 1 }
//                 } else {
//                     return el;
//                 }
//             })
//             return {
//                 ...state,
//                 cart: [...array]
//             }
//         }
//         case DECREMENT: {
//             let array = state.cart.map((el) => {
//                 if (el.id == payload) {
//                     return { ...el, count: el.count - 1 }
//                 } else {
//                     return el;
//                 }
//             })
//             return {
//                 ...state,
//                 cart: [...array]
//             }
//         }
//         default: {
//             return state
//         }
//     }
// }

// import { CART_REQUEST, DECREMENT, INCREMENT,REMOVE_FROM_CART } from "./actionTypes";

// const initialState = {
//   cart: [],
// };

// // Retrieve cart data from local storage
// const savedCart = localStorage.getItem("cart");
// if (savedCart) {
//   initialState.cart = JSON.parse(savedCart);
// }

// export const reducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case CART_REQUEST: {
//       const updatedCart = [...state.cart, payload];

//       // Save updated cart data to local storage
//       localStorage.setItem("cart", JSON.stringify(updatedCart));

//       return {
//         ...state,
//         cart: updatedCart,
//       };
//     }
//     case INCREMENT: {
//       const updatedCart = state.cart.map((el) =>
//         el.id === payload ? { ...el, count: el.count + 1 } : el
//       );

//       // Save updated cart data to local storage
//       localStorage.setItem("cart", JSON.stringify(updatedCart));

//       return {
//         ...state,
//         cart: updatedCart,
//       };
//     }
//     case DECREMENT: {
//       const updatedCart = state.cart.map((el) =>
//         el.id === payload ? { ...el, count: el.count - 1 } : el
//       );

//       // Save updated cart data to local storage
//       localStorage.setItem("cart", JSON.stringify(updatedCart));

//       return {
//         ...state,
//         cart: updatedCart,
//       };
//     }
//     case REMOVE_FROM_CART: {
//         const updatedCart = state.cart.filter((el) => el.id !== payload);
//         localStorage.setItem("cart", JSON.stringify(updatedCart));
//         return {
//           ...state,
//           cart: updatedCart,
//         };
//       }
//     default: {
//       return state;
//     }
//   }
// };

import { CART_REQUEST, DECREMENT, INCREMENT, REMOVE_FROM_CART } from "./actionTypes";

const initialState = {
  cart: [],
};

const savedCart = localStorage.getItem("cart");
if (savedCart) {
  initialState.cart = JSON.parse(savedCart);
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CART_REQUEST: {
      const updatedCart = [...state.cart, payload];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return {
        ...state,
        cart: updatedCart,
      };
    }
    // case INCREMENT: {
    //   const updatedCart = state.cart.map((el) =>
    //     el.id === payload ? { ...el, count: el.count + 1 } : el
    //   );
    //   localStorage.setItem("cart", JSON.stringify(updatedCart));
    //   return {
    //     ...state,
    //     cart: updatedCart,
    //   };
    // }
    // case DECREMENT: {
    //   const updatedCart = state.cart.map((el) =>
    //     el.id === payload ? { ...el, count: el.count - 1 } : el
    //   );
    //   localStorage.setItem("cart", JSON.stringify(updatedCart));
    //   return {
    //     ...state,
    //     cart: updatedCart,
    //   };
    // }
    case INCREMENT: {
      const updatedCart = state.cart.map((el) =>
        el.id === payload ? { ...el, count: el.count + 1, price: el.price + (el.price / el.count) } : el
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return {
        ...state,
        cart: updatedCart,
      };
    }
    
    case DECREMENT: {
      const updatedCart = state.cart.map((el) =>
        el.id === payload ? { ...el, count: el.count - 1, price: el.price - (el.price / el.count) } : el
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return {
        ...state,
        cart: updatedCart,
      };
    }
    
    case REMOVE_FROM_CART: {
      const updatedCart = state.cart.filter((el) => el.id !== payload);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return {
        ...state,
        cart: updatedCart,
      };
    }
    default: {
      return state;
    }
  }
};
