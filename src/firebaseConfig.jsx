// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvq6u4c_uOM9LtvCPxBju1ZtwRjtix8Bk",
  authDomain: "sistema-c9163.firebaseapp.com",
  projectId: "sistema-c9163",
  storageBucket: "sistema-c9163.firebasestorage.app",
  messagingSenderId: "5144226032",
  appId: "1:5144226032:web:2bb84cc3a0021cbd53ba35",
  measurementId: "G-65BYXZKFLG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//iniciar proyect    firebase login       firebase init   firebase deploy  en consola
