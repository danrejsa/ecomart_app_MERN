import { GET_ERRORS, CLEAR_ERRORS } from "../actions/types";

const initialState = {
  id: null,
  msg: {},
  status: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.status,
        id: action.payload.id
      };
    case CLEAR_ERRORS:
      return {
        id: null,
        msg: {},
        status: null 
      };
 
    default:
      return state;
  }
}
