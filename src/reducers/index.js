import { combineReducers } from "redux";
import { dragonListReducer } from "./dragonListReducer";
import { titleReducer } from "./titleReducer";

export const rootReducer = combineReducers({
  dragonListReducer,
  titleReducer,
});
