import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/firebase-auth'


const firebaseConfig = {
  apiKey: "AIzaSyA6sCPqiGSG3djN9BM4MY4GgxAzaYlOrF8",
  authDomain: "multistep-form-747a6.firebaseapp.com",
  projectId: "multistep-form-747a6",
  storageBucket: "multistep-form-747a6.appspot.com",
  messagingSenderId: "534685930437",
  appId: "1:534685930437:web:d75f87ae8dacfaa5bc31ac",
  measurementId: "G-KSPG7VJ3GV"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth }