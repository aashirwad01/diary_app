import { useRef } from "react"
import { currentAppUser } from "../firestore/firebaseServices"


export default function useHandleUserCard(){
    const user = useRef( currentAppUser())
    console.log(user)
    return user.current
  }
  