// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import "firebase/storage";
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';




// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCUj5VpK_dX4rWkPcA4-qaQmFS1F-vgNhg",
//   authDomain: "facebook-2-51e84.firebaseapp.com",
//   projectId: "facebook-2-51e84",
//   storageBucket: "facebook-2-51e84.appspot.com",
//   messagingSenderId: "1085557366175",
//   appId: "1:1085557366175:web:ebf8d67812ac893a6771aa"
// };

// // Initialize Firebase
// // const app = !firebase.length ? initializeApp(firebaseConfig) : firebase.app();
// const app = initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const storage = firebase.storage();

// export { db, storage };

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCUj5VpK_dX4rWkPcA4-qaQmFS1F-vgNhg",
    authDomain: "facebook-2-51e84.firebaseapp.com",
    projectId: "facebook-2-51e84",
    storageBucket: "facebook-2-51e84.appspot.com",
    messagingSenderId: "1085557366175",
    appId: "1:1085557366175:web:ebf8d67812ac893a6771aa"
  }; 

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const storage = firebase.storage();


export { db, storage };