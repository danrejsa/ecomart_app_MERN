import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_SUCCESS
} from "../actions/types";
import axios from "axios";
import {returnErrors} from './errorAction'

export const loadUser = () => (dispatch, getState) => {
dispatch({type:USER_LOADING});
//token from localstorage


axios.get("/api/auth/user", tokenConfig(getState) ).then(resp =>
  dispatch({
    type: USER_LOADED,
    payload: resp.data.user
  })
)
.catch(err =>{
  dispatch(returnErrors(err.response.data,err.response.status));
  dispatch({   
    type:AUTH_ERROR
})
})
};

export const register = ({name, email, password}) => dispatch => {
//headers
const config = {
  headers: {
      "Content-Type":"application/json"
  }
}

const body  = JSON.stringify({name,email, password})

axios.post('/api/users', body, config)
.then( resp => {
dispatch({
  type:REGISTER_SUCCESS,
  payload:resp.data
})
})
.catch(err => {
dispatch(returnErrors(err.response.data,err.response.status, 'REGISTER_FAIL'));
dispatch({
  type:REGISTER_FAIL
})
})

}

export const login = ({email, password}) => dispatch => {
//headers
const config = {
  headers: {
      "Content-Type":"application/json"
  }
}
const body  = JSON.stringify({email, password})

axios.post('/api/auth', body, config)
.then( resp => {
dispatch({
  type:LOGIN_SUCCESS,
  payload:resp.data
})
})
.catch(err => {
dispatch(returnErrors(err.response.data,err.response.status, 'LOGIN_FAIL'));
dispatch({
  type:LOGIN_FAIL
})
})
}

export const logout = () => {
return {
  type:LOGOUT_SUCCESS
}
}
//config,header & token

export const tokenConfig = (getState) => {
const token = getState().auth.token;

//headers
const config = {
  headers: {
    "Content-Type":"application/json"
  }
}
  //if token, add to headers
if(token){
  config.headers['x-auth-token'] = token;
}
return config;
}