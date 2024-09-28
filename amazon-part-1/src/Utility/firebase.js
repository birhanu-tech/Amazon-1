// import firebase from "firebase/compat/app";
// // auth
// import { getAuth } from "firebase/auth";//for autentification
// import "firebase/compat/firestore"; // for database use

// import "firebase/compat/auth"; // for database use

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA-IQDPQrWwtapk60VSoSCuh7vEBWQrJgQ",
//   authDomain: "clone-38286.firebaseapp.com",
//   projectId: "clone-38286",
//   storageBucket: "clone-38286.appspot.com",
//   messagingSenderId: "947908360353",
//   appId: "1:947908360353:web:314e96ac93efd7ac72d8e0",
// };

// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = app.firestore();
// ******************************************

// // Import the functions you need from the SDKs you need
// // import { initializeApp } from "firebase/app";
// import firebase from "firebase/compat/app";
// // // auth
// import { getAuth } from "firebase/auth";//for autentification
// import "firebase/compat/firestore"; // for database use

// import "firebase/compat/auth"; // for database use

// // import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBWl9jMIys1YyY_TApQitcPQFlcONaYoKI",
//   authDomain: "n-418ea.firebaseapp.com",
//   projectId: "n-418ea",
//   storageBucket: "n-418ea.appspot.com",
//   messagingSenderId: "1012275154708",
//   appId: "1:1012275154708:web:e550a5c7dca57af5c9fc01",
//   measurementId: "G-QNS9Z1LZ39"
// };

// // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// export const auth = getAuth(app);
// export const db = app.firestore();
// ************************************************


// // Import the functions you need from the SDKs you need
// // import { initializeApp } from "firebase/app";
// import firebase from "firebase/compat/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// import "firebase/compat/firestore"; // for database use

// import "firebase/compat/auth"; // for database use

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBWl9jMIys1YyY_TApQitcPQFlcONaYoKI",
//   authDomain: "n-418ea.firebaseapp.com",
//   projectId: "n-418ea",
//   storageBucket: "n-418ea.appspot.com",
//   messagingSenderId: "1012275154708",
//   appId: "1:1012275154708:web:e550a5c7dca57af5c9fc01",
//   measurementId: "G-QNS9Z1LZ39"
// };

// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);

// // Initialize services
// export const auth = getAuth(app);
// export const db = getFirestore(app);

// **********************************************

// Import Firebase v8 compatibility mode
import firebase from "firebase/compat/app";
import "firebase/compat/auth"; // for authentication
import "firebase/compat/firestore"; // for Firestore
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWl9jMIys1YyY_TApQitcPQFlcONaYoKI",
  authDomain: "n-418ea.firebaseapp.com",
  projectId: "n-418ea",
  storageBucket: "n-418ea.appspot.com",
  messagingSenderId: "1012275154708",
  appId: "1:1012275154708:web:e550a5c7dca57af5c9fc01",
  measurementId: "G-QNS9Z1LZ39"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize services

// export const auth = firebase.auth();
export const auth = getAuth(app);
export const db = app.firestore();
// export const db = firebase.firestore();
