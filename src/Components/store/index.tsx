import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { devToolsEnhancer } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootStore = createStore(rootReducer, applyMiddleware(thunk));
export default rootStore;
