// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "cinemate-64fa0.firebaseapp.com",
  projectId: "cinemate-64fa0",
  storageBucket: "cinemate-64fa0.firebasestorage.app",
  messagingSenderId: "243065560324",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: "G-FFTXSK1B9B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const auth = getAuth();
