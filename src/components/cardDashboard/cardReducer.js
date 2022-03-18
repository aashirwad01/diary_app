import { sampleData } from "../../store_data_api/sampleData";
import { CREATE_CARD, DELETE_CARD, FETCH_CARDS, FILTER_CARD, UPDATE_CARD } from "./cardConstants";

const initialState={
    cardsall:[],
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
        
        case FETCH_CARDS:
            return{
                ...state,
                cardsall:payload
            }
        
    
        default:
            return state;
    }
}