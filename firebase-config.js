import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "NUEVO_API_KEY",
  authDomain: "firstproyect.firebaseapp.com",
  projectId: "firstproyect",
  storageBucket: "firstproyect.appspot.com",
  messagingSenderId: "NUEVO_MESSAGING_SENDER_ID",
  appId: "NUEVO_APP_ID",
  measurementId: "NUEVO_MEASUREMENT_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);