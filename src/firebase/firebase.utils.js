import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config =  {
        apiKey: "AIzaSyClCiW9TPaP0_P_8r82dShm7BytmnHUJ00",
        authDomain: "vbg-clothing.firebaseapp.com",
        databaseURL: "https://vbg-clothing.firebaseio.com",
        projectId: "vbg-clothing",
        storageBucket: "vbg-clothing.appspot.com",
        messagingSenderId: "88458999712",
        appId: "1:88458999712:web:76f806c478a4d9703d96c5"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
        if(!userAuth) return;
        
        const userRef = firestore.doc(`users/${userAuth.uid}`);
        const snapShot = await userRef.get();

        if(!snapShot.exists) {
                const {displayName, email} = userAuth;
                const createdAt = new Date();

                try{ 
                        await userRef.set({
                                displayName,
                                email,
                                createdAt,
                                ...additionalData
                        })
                } catch(error){
                        console.log("error creating user", error.message);
                }
        }
        return userRef;
        
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

