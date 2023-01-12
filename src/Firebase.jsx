// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAD9yVIDvA8fy_5KqK_rK5X4RHznvQRLCo",
  authDomain: "signin-12f0b.firebaseapp.com",
  projectId: "signin-12f0b",
  storageBucket: "signin-12f0b.appspot.com",
  messagingSenderId: "993753054320",
  appId: "1:993753054320:web:a78be395b57d9cb25ac8b5",
  measurementId: "G-D1BPMLHZ1J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth,provider};
