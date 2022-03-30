import { SIGN_IN_USER ,SIGN_OUT_USER} from "./authConstants";
import firebase from '../config/firebase'
import { currentAppUser } from "../firestore/firebaseServices";
import { handleUserCard } from "../../pages/DashBoard";

export function signInUser(user){

    return {
        type:SIGN_IN_USER,
        payload: user
    }
    
    // return async function(dispatch){
    //     try{

    //         const result = await firebase
    //         .auth()
    //         .signInWithEmailAndPassword(creds.email,creds.password)
    //         dispatch({type:SIGN_IN_USER,payload: result.user})

    //     }catch(error){
    //         throw error
    //     }
    // }
    
    
    
    // return{
    //     type:SIGN_IN_USER,
    //     payload
    // }
}

export function verifyAuth(){
    return function(dispatch){
        return firebase.auth().onAuthStateChanged(user => {
            if(user){
                
                dispatch(signInUser(user))
            }
            else{
                dispatch( signOutUser() )
            }
        })
    }
}

export function signOutUser(){
    return{
        type:SIGN_OUT_USER
    }
}