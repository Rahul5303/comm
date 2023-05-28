import * as types from "./actionTypes";
import axios from "axios";


// for add data =>post data from users
export const addCheckout=(params)=>(dispatch)=>{
    dispatch({type:types.ADD_DATA_CHECKOUT_REQUEST});
    return axios.post(`http://localhost:8001/checkout`,params)
    .then((res)=>{
        console.log(res);
        dispatch({type:types.ADD_DATA_CHECKOUT_SUCCESS,payload:res.data});
    })
    .catch((err)=>{
        dispatch({type:types.ADD_DATA_CHECKOUT_FAILURE,payload:err});
    })

}