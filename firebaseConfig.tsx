"use client";
// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATvfkiL-fbG0rQqi1Lmt5du2qUGXrtP5A",
  authDomain: "ocomni-30132.firebaseapp.com",
  projectId: "ocomni-30132",
  storageBucket: "ocomni-30132.appspot.com",
  messagingSenderId: "449648961353",
  appId: "1:449648961353:web:26e36c336449e0dc7f9c98",
  measurementId: "G-GNYX31XRGZ",
};

// Initialize Firebase for SSR
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase services
const firestore = getFirestore(app);
const auth = getAuth(app);

// Initialize Firebase
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export { app, firestore, auth };
