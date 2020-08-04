
import * as firebase from 'firebase';

const firebaseConfig = {
    //add your firebase configuration here
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// database 
const db = firebase.firestore();

export default db;
