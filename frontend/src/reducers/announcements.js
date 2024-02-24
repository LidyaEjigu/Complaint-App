
import { FETCH_ALL, CREATE, UPDATE, DELETE, FETCHID } from "../constants/index.js";
const announcements=(state = {announcements:[]}, action) => {
   switch (action.type) {
    case FETCH_ALL:
      return {...state,announcements:action?.payload};
      case FETCHID:
        return {...state,announcement:action.payload}
    case CREATE:
      return {...state,announcements:[...state.announcements,action.payload]};
    
    case UPDATE:
        return {...state,announcements:state.announcements.map((post) => (post._id === action.payload._id ? action.payload : state))};
    
    case DELETE:
      return {...state,announcements:state.announcements.filter(post=>post._id !== action.payload)};
    default:
       return state;
  }
}
export default announcements
