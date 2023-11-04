import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCM0DAlAd9x8bxNC5yOJsIiW5s-3ZuY9t4",
  authDomain: "chili-food.firebaseapp.com",
  projectId: "chili-food",
  storageBucket: "chili-food.appspot.com",
  messagingSenderId: "6146361898",
  appId: "1:6146361898:web:c5caa13d6491c589dbd153"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;