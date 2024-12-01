import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAghL2k8O6A479ELamb_WS1i3IZhXNYXXw",
  authDomain: "user-b4f82.firebaseapp.com",
  projectId: "user-b4f82",
  storageBucket: "user-b4f82.firebasestorage.app",
  messagingSenderId: "663466094612",
  appId: "1:663466094612:web:7cbe829402108186887701"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



