import { 
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING,
  POST_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL, } from "./types";
import axios from "axios";
import {tokenConfig} from './authAction';
import {returnErrors} from './errorAction';
import Alert from "reactstrap/lib/Alert";

export const getItems = () => dispatch => {
  dispatch(itemsLoading());
  axios.get("/api/items").then( resp =>
    dispatch({
      type: GET_ITEMS,
      payload: resp.data.items
    })
  ).catch(err => {
    dispatch(returnErrors(err.response.data,err.response.status));
  })
};

export const deleteItem = id => (dispatch, getState) => {
 axios.delete(`api/items/${id}`, tokenConfig(getState)).then(resp => 
    dispatch({
        type: DELETE_ITEM,
        payload:id
    })
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data,err.response.status));
    })
};

export const addItem = item => (dispatch, getState) => {
    axios
    .post('/api/items', item, tokenConfig(getState))
    .then( resp => {
      alert('successful')
      console.log(resp);
      dispatch({
        type:ADD_ITEM,
        payload: resp.data.item  
    })
    }).catch(err => {
      alert('failed to upload')
          dispatch(returnErrors(err.response.data,err.response.status));
         
        })
};




export const itemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
