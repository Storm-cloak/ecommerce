import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDQKGOZK7uiCANyk15JIfPfkm0_wRUPzpg",
  authDomain: "ecommerce-15f00.firebaseapp.com",
  databaseURL: "https://ecommerce-15f00.firebaseio.com",
  projectId: "ecommerce-15f00",
  storageBucket: "ecommerce-15f00.appspot.com",
  messagingSenderId: "789069816052",
  appId: "1:789069816052:web:0eed1902b6e0be022d3ea1",
  measurementId: "G-GDKBTCCXJR",
};
firebase.initializeApp(config);
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
