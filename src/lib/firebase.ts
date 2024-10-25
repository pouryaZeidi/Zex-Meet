// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDZ-Cd7xHGzH11dFaXREG2QoFrfMhCjvAg",
  authDomain: "zex-meet.firebaseapp.com",
  projectId: "zex-meet",
  storageBucket: "zex-meet.appspot.com",
  messagingSenderId: "382204026034",
  appId: "1:382204026034:web:40959417e55da6f779fdab",
  measurementId: "G-6DK75QTBHS"
};

let app: any;
let auth: any;
let provider: any;

// This code will only run in the client-side
if (typeof window !== 'undefined') {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  provider = new GoogleAuthProvider();
}

export { auth, provider };
