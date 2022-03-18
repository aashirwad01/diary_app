import { fetchSampleData } from "../../store_data_api/mockApi";
import { asyncActionError, asyncActionFinish, asyncActionStart } from "../async/asyncReducer";
import { CREATE_CARD, DELETE_CARD, FETCH_CARDS, FILTER_CARD, UPDATE_CARD } from "./cardConstants";

export function loadCards(){
    return async function(dispatch ){
        dispatch( asyncActionStart() )
        try{

            const cardsall = await fetchSampleData();
            dispatch({type:FETCH_CARDS,payload:cardsall})
            dispatch(asyncActionFinish())

        }catch(error){
            dispatch(asyncActionError(error))

        }
    }
}

export function createCard(event){
    return{
        type:CREATE_CARD,
        payload:event
    }
}

export function updateCard(event){
    return{
        type:UPDATE_CARD,
        payload:event
    }
}

export function deleteCard(eventId){
    return{
        type:DELETE_CARD,
        payload:eventId
    }
}



