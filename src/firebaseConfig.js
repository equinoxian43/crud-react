
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAi1F-EnkQiqhbv47eQKf4TfcMDjdNm0q4",
  authDomain: "crud-bb62c.firebaseapp.com",
  projectId: "crud-bb62c",
  storageBucket: "crud-bb62c.appspot.com",
  messagingSenderId: "834307155890",
  appId: "1:834307155890:web:bde48eb48a614346f4e6ab"
};


const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);