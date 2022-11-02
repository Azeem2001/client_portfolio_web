import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc, getDoc, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCvWSn2YCUXLySXLwyN_u-D42Ar18UKbw",
  authDomain: "auth-yt-64e8d.firebaseapp.com",
  projectId: "auth-yt-64e8d",
  storageBucket: "auth-yt-64e8d.appspot.com",
  messagingSenderId: "1067827248744",
  appId: "1:1067827248744:web:349a0944b3b97839bf45dd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {
  doc,
  setDoc,
  getDoc,
  getDocs,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  auth,
  db,
};
