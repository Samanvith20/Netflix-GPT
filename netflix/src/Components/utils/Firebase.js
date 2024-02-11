// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3VCbD1vhKr8tIFYPRfTF_vC94JfG0tls",
  authDomain: "netflix-gpt-8efe5.firebaseapp.com",
  projectId: "netflix-gpt-8efe5",
  storageBucket: "netflix-gpt-8efe5.appspot.com",
  messagingSenderId: "532467868353",
  appId: "1:532467868353:web:370c6b85914bf9547d2a40",
  measurementId: "G-4T5SVL7G3V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();