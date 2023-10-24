// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkHOljgk9HN1TU_HM2D-8rkcNlmCYuLJc",
  authDomain: "hackathon-13844.firebaseapp.com",
  projectId: "hackathon-13844",
  storageBucket: "hackathon-13844.appspot.com",
  messagingSenderId: "97077204931",
  appId: "1:97077204931:web:4039c946da71cbec878f76",
  measurementId: "G-3PBX99X0NT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);