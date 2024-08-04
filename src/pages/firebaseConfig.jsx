
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

import { getFirestore } from "firebase/firestore"; 
import { getDownloadURL } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCAfG__gbDjpSN18Qbq0wMLjMa6SW3BJBY",
    authDomain: "e-commerce-b0a4a.firebaseapp.com",
    projectId: "e-commerce-b0a4a",
    storageBucket: "e-commerce-b0a4a.appspot.com",
    messagingSenderId: "113480666377",
    appId: "1:113480666377:web:86f08fe4d847f119b217d8",
    measurementId: "G-YZXWVC77D0"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
