import { createStore } from "redux";
import testReducer from "../../pages/sandbox/testReducer";
import {composeWithDevTools, devToolsEnhancer} from 'redux-devtools-extension'
import rootReducer from "./rootReducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";


export function configureStore(){
    return createStore(rootReducer,composeWithDevTools( applyMiddleware( thunk ) ))
}