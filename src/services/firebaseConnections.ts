import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCoH5OTCJQYpdoO9g7gpphGZonYblj8QTM",
  authDomain: "reactlinks-32b81.firebaseapp.com",
  projectId: "reactlinks-32b81",
  storageBucket: "reactlinks-32b81.appspot.com",
  messagingSenderId: "74848573628",
  appId: "1:74848573628:web:af1922fa9db94cdf8c18b9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };