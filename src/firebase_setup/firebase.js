// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDizYNilXVKRiCTlCJdxgnfGr-bVWcUy5E",

  authDomain: "my-project-11fbb.firebaseapp.com",

  databaseURL: "https://my-project-11fbb-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "my-project-11fbb",

  storageBucket: "my-project-11fbb.appspot.com",

  messagingSenderId: "624842790544",

  appId: "1:624842790544:web:6d182482cf8568c0bc6a15"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);