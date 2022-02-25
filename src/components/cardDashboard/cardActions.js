import { CREATE_CARD, DELETE_CARD, FILTER_CARD, UPDATE_CARD } from "./cardConstants";

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



