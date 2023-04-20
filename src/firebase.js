import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCJ2WLM8cC4YpDuTP1O0U9nQnLEj0qb9rA",
  authDomain: "todo-app-35935.firebaseapp.com",
  projectId: "todo-app-35935",
  storageBucket: "todo-app-35935.appspot.com",
  messagingSenderId: "705074733982",
  appId: "1:705074733982:web:73f91b3f0729efcf56ac8f",
  measurementId: "G-PVGH9CT6BG"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
