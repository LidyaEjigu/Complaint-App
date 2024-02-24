import { combineReducers } from "redux";
import announcements from "./announcements";
import complaints from "./complaint";
import auth from "./auth";
const reducers= combineReducers({announcements,complaints,auth})
export default reducers
