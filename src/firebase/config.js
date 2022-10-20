import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB_lYMnaBuTXWNLtfHCkBxlosuOw49crVs",
    authDomain: "majaudio-jaime.firebaseapp.com",
    projectId: "majaudio-jaime",
    storageBucket: "majaudio-jaime.appspot.com",
    messagingSenderId: "375003548727",
    appId: "1:375003548727:web:1bb7d2a2d5aade7b9c83b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);