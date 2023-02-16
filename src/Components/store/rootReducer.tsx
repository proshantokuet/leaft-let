import { combineReducers } from "redux";
import CakeReducer from "./reducer";

const rootReducer = combineReducers({
  cake: CakeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
