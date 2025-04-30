import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1ZW_R0suysJABZJDD-xh8GNrBqoBAGiI",
  authDomain: "clubreview-5475e.firebaseapp.com",
  projectId: "clubreview-5475e",
  storageBucket: "clubreview-5475e.firebasestorage.app",
  messagingSenderId: "732982991918",
  appId: "1:732982991918:web:a9fb97d211a9c788f493bf",
  measurementId: "G-REW3P4W5MH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app); 

export { db };
