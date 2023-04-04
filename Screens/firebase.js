// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjm-qTl641qtoAnnZJyMOppVY00nPufKo",
  authDomain: "foodapp-14df9.firebaseapp.com",
  projectId: "foodapp-14df9",
  storageBucket: "foodapp-14df9.appspot.com",
  messagingSenderId: "529251370791",
  appId: "1:529251370791:web:86678527b57e15197f8b02",
  measurementId: "G-H28BC1QW34",
  databaseURL: "https://foodapp-14df9-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
//const analytics = getAnalytics(app);

export {app, auth };   // Export the app and auth to use it in other files