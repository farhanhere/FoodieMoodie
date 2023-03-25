// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA90EezjUSv51hS3qehCn7e-nUPZRocK_g",
  authDomain: "farhan-28412.firebaseapp.com",
  projectId: "farhan-28412",
  storageBucket: "farhan-28412.appspot.com",
  messagingSenderId: "117323215584",
  appId: "1:117323215584:web:c73e9adb4d7a9d9b8ed685",
  measurementId: "G-FKNNSZ1YE5",
  databaseURL:"https://farhan-28412-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default app;