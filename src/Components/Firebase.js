// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-librariesnp

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlCY2CxUMzrykeJZiNuKVEtLKxN9sMOpw",
  authDomain: "netflixgpt-f8557.firebaseapp.com",
  projectId: "netflixgpt-f8557",
  storageBucket: "netflixgpt-f8557.appspot.com",
  messagingSenderId: "6061121340",
  appId: "1:6061121340:web:2410318b7676b869a48839",
  measurementId: "G-SQ514NQJY7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();