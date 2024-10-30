
import firebase from "firebase/app"
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmfErCPmm3Qe4oWfJpyTXjnz5Fm9xQ-aU",
  authDomain: "triple-v-5fff8.firebaseapp.com",
  projectId: "triple-v-5fff8",
  storageBucket: "triple-v-5fff8.appspot.com",
  messagingSenderId: "154969147867",
  appId: "1:154969147867:web:fdbb519fbdfd5c848ebffe"
};

firebase.initializeApp(firebaseConfig)


let db = firebase.firestore()
let timestamp = firebase.firestore.FieldValue.serverTimestamp



export { db, timestamp }