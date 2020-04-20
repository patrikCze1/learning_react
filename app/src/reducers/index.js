import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import cityReducer from "./cityReducer";

export default combineReducers({ cityReducer, profileReducer });
