import { combineReducers } from "redux";
import asyncReducer from "../../components/async/asyncReducer";
import authReducer from "../../components/auth/authReducer";
import cardReducer from "../../components/cardDashboard/cardReducer";
import sidebarReducer from "../../components/cardDashboard/sidebarReducer";
import modalReducer from "../../components/modals/modalReducer";
import testReducer from "../../pages/sandbox/testReducer";


const rootReducer = combineReducers({
    test:testReducer,
    card:cardReducer,
    filtertab: sidebarReducer,
    modals:modalReducer,
    auth:authReducer,
    async : asyncReducer
})

export default rootReducer