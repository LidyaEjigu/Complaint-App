import { combineReducers } from "redux";
import complaints from "./complaint"
import announcements from "./announcements";
const reducers= combineReducers({complaints,announcements})
export default reducers
