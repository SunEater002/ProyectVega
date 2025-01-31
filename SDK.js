// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhxZ0DwOef_3TUb6Gxk_iQRrNb6Qms3P0",
  authDomain: "firtsproyect-2d4bc.firebaseapp.com",
  projectId: "firtsproyect-2d4bc",
  storageBucket: "firtsproyect-2d4bc.firebasestorage.app",
  messagingSenderId: "484162311763",
  appId: "1:484162311763:web:6838b32ab64fc4d93d58a6",
  measurementId: "G-4L1RHVSVKQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);