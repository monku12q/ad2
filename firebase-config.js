// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyCl4QDWQR6oxdM9D0lbh9RIcszry9kqSdc",
    authDomain: "check2-9bf65.firebaseapp.com",
    databaseURL: "https://check2-9bf65-default-rtdb.firebaseio.com",
    projectId: "check2-9bf65",
    storageBucket: "check2-9bf65.firebasestorage.app",
    messagingSenderId: "187420872104",
    appId: "1:187420872104:web:8c46fad59886bf1697e19d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Optional: global database reference
const database = firebase.database();
