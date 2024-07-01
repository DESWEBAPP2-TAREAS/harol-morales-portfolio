// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBG1IZTHp-wsUtiV1_GYr8kKEk1qGqYAN8",
  authDomain: "portafolio-harol-morales.firebaseapp.com",
  projectId: "portafolio-harol-morales",
  storageBucket: "portafolio-harol-morales.appspot.com",
  messagingSenderId: "255928548777",
  appId: "1:255928548777:web:cb293be325d6d73de998b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
