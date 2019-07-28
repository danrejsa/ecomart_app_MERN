import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING   } from "../actions/types";


const initialState = { 
  cars: [],  
  loading:false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS: return {
        ...state,
        cars: action.payload,
        loading:false
      };
      case DELETE_ITEM:
      return {
        ...state,
        cars:state.cars.filter( c => c._id !== action.payload)
      };
      case ADD_ITEM:
        return {
          ...state,
          cars:[action.payload,...state.cars]
        };
        case ITEMS_LOADING:
        return {
          ...state,
          loading:true
        };
    default:
      return state;
  }
}


