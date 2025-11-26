// Firebase configuration
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB_3v7-LvuAHksWi1mRIFEXdhVndaLI3bQ",
  authDomain: "in4050-exam-prep.firebaseapp.com",
  projectId: "in4050-exam-prep",
  storageBucket: "in4050-exam-prep.firebasestorage.app",
  messagingSenderId: "326569892270",
  appId: "1:326569892270:web:1f7461976690d00c25903f",
  measurementId: "G-YTNEJHDXZD"
};

// Initialize Firebase
let app;
let db;

try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  console.log('✅ Firebase initialized successfully');
} catch (error) {
  console.warn('Firebase initialization error:', error);
  console.warn('Using localStorage only.');
  db = null;
}

export { db };
export default app;

