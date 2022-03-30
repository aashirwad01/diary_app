import { createStore } from "redux";
import testReducer from "../../pages/sandbox/testReducer";
import {composeWithDevTools, devToolsEnhancer} from 'redux-devtools-extension'
import rootReducer from "./rootReducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { verifyAuth } from "../../components/auth/authActions";


export function configureStore(){
    
    const store =  createStore(rootReducer,composeWithDevTools( applyMiddleware( thunk ) ))
    store.dispatch(verifyAuth())
    return store;
}
    