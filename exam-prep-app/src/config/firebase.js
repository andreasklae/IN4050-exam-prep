// Firebase configuration
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, enableNetwork, disableNetwork } from 'firebase/firestore';

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

// Initialize Firebase (only if not already initialized)
let app;
let db;

try {
  // Check if Firebase is already initialized (prevents duplicate app error during hot reload)
  const existingApps = getApps();
  if (existingApps.length === 0) {
    app = initializeApp(firebaseConfig);
  } else {
    app = existingApps[0];
  }
  
  db = getFirestore(app);
  console.log('✅ Firebase initialized successfully');
} catch (error) {
  console.warn('Firebase initialization error:', error);
  console.warn('Using localStorage only.');
  db = null;
}

export { db };
export default app;

