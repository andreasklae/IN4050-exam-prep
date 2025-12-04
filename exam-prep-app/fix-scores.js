// Migration script to fix scores > 100% in Firebase
// Run with: node fix-scores.js
// Make sure to install firebase: npm install firebase

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, updateDoc } from 'firebase/firestore';

// Firebase configuration from your config file
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
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function fixScores() {
  try {
    console.log('🔧 Starting score fix migration...\n');
    
    // Get all users
    const usersRef = collection(db, 'users');
    const usersSnapshot = await getDocs(usersRef);
    
    let fixedCount = 0;
    let totalUsers = 0;
    let totalScoresFixed = 0;
    
    for (const userDoc of usersSnapshot.docs) {
      totalUsers++;
      const userData = userDoc.data();
      const userId = userDoc.id;
      
      // Check if topicScores exist
      if (userData.topicScores && typeof userData.topicScores === 'object') {
        let needsUpdate = false;
        const fixedScores = { ...userData.topicScores };
        
        // Fix any scores > 100%
        for (const [topicId, score] of Object.entries(fixedScores)) {
          if (typeof score === 'number' && score > 100) {
            console.log(`  Fixing user "${userId}", topic ${topicId}: ${score}% → 100%`);
            fixedScores[topicId] = 100;
            needsUpdate = true;
            totalScoresFixed++;
          }
        }
        
        // Update if any scores were fixed
        if (needsUpdate) {
          const userRef = doc(db, 'users', userId);
          await updateDoc(userRef, {
            topicScores: fixedScores
          });
          fixedCount++;
          console.log(`  ✓ Fixed scores for user: ${userId}\n`);
        }
      }
    }
    
    console.log('\n✅ Migration complete!');
    console.log(`   Total users checked: ${totalUsers}`);
    console.log(`   Users with fixed scores: ${fixedCount}`);
    console.log(`   Total scores fixed: ${totalScoresFixed}`);
    
  } catch (error) {
    console.error('❌ Error during migration:', error);
    process.exit(1);
  }
}

// Run the migration
fixScores().then(() => {
  console.log('\n✨ Done!');
  process.exit(0);
}).catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
