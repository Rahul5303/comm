import * as types from "./actionTypes";
import axios from "axios";


// for get all data from users
export const getProducts=(params)=>(dispatch)=>{
    dispatch({type:types.GET_DATA_PRODUCTS_REQUEST});
    return axios.get(`http://localhost:8001/products`,params)
    .then((res)=>{
        // console.log(res.data.results);
        dispatch({type:types.GET_DATA_PRODUCTS_SUCCESS,payload:res.data});
    })
    .catch((err)=>{
        dispatch({type:types.GET_DATA_PRODUCTS_FAILURE,payload:err});
    })

}

// for add data =>post data from users
export const addProducts=(params)=>(dispatch)=>{
    dispatch({type:types.ADD_DATA_PRODUCTS_REQUEST});
    return axios.post(`http://localhost:8001/products`,params)
    .then((res)=>{
        console.log(res);
        dispatch({type:types.ADD_DATA_PRODUCTS_SUCCESS,payload:res.data});
    })
    .catch((err)=>{
        dispatch({type:types.ADD_DATA_PRODUCTS_FAILURE,payload:err});
    })

}

// for single user data products

export const singleProducts=(_id)=>(dispatch)=>{
    dispatch({type:types.SINGLE_DATA_PRODUCTS_REQUEST});
    return axios.get(`http://localhost:8001/products/${_id}`)
    .then((res)=>{
        dispatch({type:types.SINGLE_DATA_PRODUCTS_SUCCESS,payload:res.data});
    })
    .catch((err)=>{
        dispatch({type:types.SINGLE_DATA_PRODUCTS_FAILURE,payload:err});
    })

}


// for delte the prodcut from users
export const deleteProducts=(_id)=>(dispatch)=>{
    dispatch({type:types.DELETE_DATA_PRODUCTS_REQUEST});
    return axios.delete(`http://localhost:8001/products/${_id}`)
    .then((res)=>{
        dispatch({type:types.DELETE_DATA_PRODUCTS_SUCCESS,payload:res.data});
    })
    .catch((err)=>{
        dispatch({type:types.DELETE_DATA_PRODUCTS_FAILURE,payload:err});
    })

}


// cart

export const addToCart = (product) => {
    return async (dispatch) => {
      try {
        const response = await axios.put(`http://localhost:8001/products/${product._id}/add-to-cart`);
        const updatedProduct = response.data;
        dispatch({ type:types.ADD_TO_CART_REQUEST, payload: updatedProduct });
      } catch (error) {
        console.error('Error adding to cart:', error);
      }
    };
  };
  
  export const removeFromCart = (product) => {
    return async (dispatch) => {
      try {
        const response = await axios.delete(`/products/${product._id}/remove-from-cart`);
        const updatedProduct = response.data;
        dispatch({ type:types.REMOVE_TO_CART_REQUEST, payload: updatedProduct });
      } catch (error) {
        console.error('Error removing from cart:', error);
      }
    };
  };
  

  // actions.js

export const getCartItems = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get('http://localhost:8001/cart');
        const cartItems = response.data;
        dispatch({ type:types.GET_CART, payload: cartItems });
      } catch (error) {
        console.error('Error getting cart items:', error);
      }
    };
  };
  

