import { combineReducers } from "redux";
import cardReducer from "../../components/cardDashboard/cardReducer";
import sidebarReducer from "../../components/cardDashboard/sidebarReducer";
import testReducer from "../../pages/sandbox/testReducer";


const rootReducer = combineReducers({
    test:testReducer,
    card:cardReducer,
    filtertab: sidebarReducer,
})

export default rootReducer