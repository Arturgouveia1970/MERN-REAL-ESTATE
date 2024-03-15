// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.mete,
  authDomain: "mern-estate-24b88.firebaseapp.com",
  projectId: "mern-estate-24b88",
  storageBucket: "mern-estate-24b88.appspot.com",
  messagingSenderId: "561817284183",
  appId: "1:561817284183:web:69e3603fc80ee53236bd12"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);