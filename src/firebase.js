// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBx0y4EBiRexWM16Da7dY72gIgUEGez5sc",
  authDomain: "transcribe-75312.firebaseapp.com",
  projectId: "transcribe-75312",
  storageBucket: "transcribe-75312.appspot.com",
  messagingSenderId: "1000948059274",
  appId: "1:1000948059274:web:ed54fff7f079a9404e7173"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app)

// Initialize Cloud Firestore and get a reference to the service

export default db;