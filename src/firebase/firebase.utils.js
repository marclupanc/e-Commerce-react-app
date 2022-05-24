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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  'login_hint': 'user@example.com'
});

export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);

export default firebase;