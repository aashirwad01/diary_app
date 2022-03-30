import firebase from '../config/firebase'

const db= firebase.firestore();

export function dataFromSnapshot(snapshot){
    if(!snapshot.exists) return undefined;
    const data = snapshot.data()

    for ( const prop in data) {
        if(data.hasOwnProperty(prop)){
            if(data[prop] instanceof firebase.firestore.Timestamp){
                data[prop] = data[prop].toDate();
            }
        }
    }

    return {
        ...data,
        id: snapshot.id
    }
}

export function listenToCardsFromFirestore(observer){
    return db.collection('cardsall').orderBy('todate');
}

export function listenToCardFromFirestore(cardallId){
   return db.collection('cardsall').doc(cardallId)

}

export function addCardToFirestore(cardall){
    var user= firebase.auth().currentUser
    console.log(user)
    console.log(cardall)
    return db.collection('cardsall').add({
        ...cardall,
        todate:cardall.todate,
        title: cardall.title,
        category: cardall.category,
        details: cardall.details,

        // cardOwner:user.currentUser.email
        
    })
}

export function updateCardInFirestore(cardall){
    return db.collection('cardsall').doc(cardall.id).update(cardall)
}

export function deleteCardinFirestore(cardallId){
    return db.collection('cardsall').doc(cardallId).delete();
}