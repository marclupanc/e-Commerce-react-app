import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyCW9_Qmh-TO86aezcg8qtIbLmAag32t5ug",
  authDomain: "clothing-shop-50eec.firebaseapp.com",
  projectId: "clothing-shop-50eec",
  storageBucket: "clothing-shop-50eec.appspot.com",
  messagingSenderId: "511524490711",
  appId: "1:511524490711:web:a4440c250b86c3ed0acf92"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();


  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  'login_hint': 'user@example.com'
});

export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);

export default firebase;