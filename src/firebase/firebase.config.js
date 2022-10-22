// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBeV-RForzeXTNBYqg5kd84ySVQPqpyKpk",
    authDomain: "daily-news-portal-bf9c6.firebaseapp.com",
    projectId: "daily-news-portal-bf9c6",
    storageBucket: "daily-news-portal-bf9c6.appspot.com",
    messagingSenderId: "427391700091",
    appId: "1:427391700091:web:d174e7815710106e0e26de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;