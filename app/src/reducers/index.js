import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import cityReducer from "./cityReducer";
import musicReducer from "./musicReducer";
import quizReducer from "./quizReducer";

export default combineReducers({
  cityReducer,
  profileReducer,
  musicReducer,
  quizReducer,
});
