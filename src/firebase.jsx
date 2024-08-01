// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbnP9zFyPxO4cChtE4GKsHviv1LzGWnPA",
  authDomain: "farafina-70db4.firebaseapp.com",
  projectId: "farafina-70db4",
  storageBucket: "farafina-70db4.appspot.com",
  messagingSenderId: "809440389605",
appId: "1:809440389605:web:9546fcd6d6ae685240270c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

// const docRef = collection(db, "products");
// const docSnap = await getDoc(docRef);
