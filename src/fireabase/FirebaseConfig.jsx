// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqqFnowcUE28zjSzcacprjtYRk_rii1XI",
  authDomain: "finalyear-bde48.firebaseapp.com",
  projectId: "finalyear-bde48",
  storageBucket: "finalyear-bde48.firebasestorage.app",
  messagingSenderId: "139791423734",
  appId: "1:139791423734:web:b68268a54d7623aa77b4d7",
  measurementId: "G-T6X6BSGMMC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}
