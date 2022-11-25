// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyD5npEErbuBo4mtLWxgfLIljS6zaly60z0",
   authDomain: "mobosell-a12.firebaseapp.com",
   projectId: "mobosell-a12",
   storageBucket: "mobosell-a12.appspot.com",
   messagingSenderId: "1044811482813",
   appId: "1:1044811482813:web:0f6bac0dea3cf8ef1f59d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app