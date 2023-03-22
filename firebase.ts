import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwum0S24elAgfiFZHrEQLB9kPDo5eG_N0",
  authDomain: "solvardo-chat-gpt.firebaseapp.com",
  projectId: "solvardo-chat-gpt",
  storageBucket: "solvardo-chat-gpt.appspot.com",
  messagingSenderId: "1014965903209",
  appId: "1:1014965903209:web:1efa08376136972447a7f8"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }
