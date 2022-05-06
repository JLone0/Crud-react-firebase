
import { initializeApp } from "firebase/app";



import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCxFsdOrNQvToNe5FpYz183mRu9ZZU50ko",
  authDomain: "react-crud-v2.firebaseapp.com",
  projectId: "react-crud-v2",
  storageBucket: "react-crud-v2.appspot.com",
  messagingSenderId: "75421860986",
  appId: "1:75421860986:web:acaecf909c46773d7827c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}