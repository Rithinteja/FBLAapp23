// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnSg7OQIGxFBjscjkfEAgeHzqP0PRqsX8",
  authDomain: "mainfblaapp-7994c.firebaseapp.com",
  projectId: "mainfblaapp-7994c",
  storageBucket: "mainfblaapp-7994c.appspot.com",
  messagingSenderId: "582134357951",
  appId: "1:582134357951:web:843a1a7c0029263bda0b0a"
};

// Initialize Firebase
let app;
if (firebase.app.length === 0){
    app = initializeApp(firebaseConfig);
}
else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };
