/* eslint-disable consistent-return */
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBEsMqcV18ZhbxviXf03xXrP9oRPIEyfJ0',
  authDomain: 'arctic-db-87a73.firebaseapp.com',
  databaseURL: 'https://arctic-db-87a73.firebaseio.com',
  projectId: 'arctic-db-87a73',
  storageBucket: 'arctic-db-87a73.appspot.com',
  messagingSenderId: '689814725093',
  appId: '1:689814725093:web:cc4a472f3cd8620f290f0c',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

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
      console.log('There was an error in user creation', error.message);
    }
  }

  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
