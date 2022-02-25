import { sampleData } from "../../store_data_api/sampleData";
import { CREATE_CARD, DELETE_CARD, FILTER_CARD, UPDATE_CARD } from "./cardConstants";

const initialState={
    cardsall:sampleData
}

export default function cardReducer(state=initialState,{type,payload}){
    switch (type) {
        case CREATE_CARD:
            return{
                ...state,
                cardsall:[...state.cardsall,payload]
            }

        case UPDATE_CARD:
            return {
                ...state,
                cardsall:[...state.cardsall.filter(evt => evt.id !==payload.id),payload]
            }
            
        case DELETE_CARD:
            return{
                ...state,
                cardsall:[...state.cardsall.filter(evt => evt.id !==payload)]
            }  
        
    
        default:
            return state;
    }
}