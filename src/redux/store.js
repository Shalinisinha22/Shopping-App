import shopReducer from "./shopReducer";
import { legacy_createStore as createStore } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';

const store=createStore(shopReducer,composeWithDevTools());
export default store;