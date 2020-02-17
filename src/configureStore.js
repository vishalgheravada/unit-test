import {createStore, applyMiddleware} from "redux";
import ReduxThunk from "redux-thunk";
import rootReducers from "./reducers/index";

export const MiddleWares = [ReduxThunk];
const createStoreWithMiddleware = applyMiddleware(...MiddleWares)(createStore);

export default createStoreWithMiddleware(rootReducers);
