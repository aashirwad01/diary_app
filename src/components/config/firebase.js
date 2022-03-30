import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/database'
import 'firebase/compat/auth'
import 'firebase/compat/storage'




const firebaseConfig ={
    apiKey: "AIzaSyCsoMJ2kWB1HKkCHsaFaE_urbvX-dJ_Fkk",
    authDomain: "diary-app-c9f7e.firebaseapp.com",
    projectId: "diary-app-c9f7e",
    storageBucket: "diary-app-c9f7e.appspot.com",
    messagingSenderId: "171167893684",
    appId: "1:171167893684:web:9eb593d19e19d1d017efe1"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebase;