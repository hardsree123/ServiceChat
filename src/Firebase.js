
import * as firebase from 'firebase';

const firebaseConfig = {
    //add your firebase configuration here
	apiKey: "AIzaSyB_1sKfgS10GM_5YJhrAUGxzfv6y3oDmbE",
    authDomain: "servicelogger-30cb4.firebaseapp.com",
    databaseURL: "https://servicelogger-30cb4.firebaseio.com",
    projectId: "servicelogger-30cb4",
    storageBucket: "servicelogger-30cb4.appspot.com",
    messagingSenderId: "413003127997",
    appId: "1:413003127997:web:92e1c513f474fea8bc2bd4"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// database 
const db = firebase.firestore();

export default db;
