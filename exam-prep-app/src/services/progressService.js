// Progress service - handles sync between localStorage and Firestore
import { db } from '../config/firebase';
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';

// Helper function to cap topicScores at 100%
const capTopicScores = (progress) => {
  if (!progress || !progress.topicScores) return progress;
  const cappedScores = {};
  for (const [topicId, score] of Object.entries(progress.topicScores)) {
    cappedScores[topicId] = typeof score === 'number' && score > 100 ? 100 : score;
  }
  return { ...progress, topicScores: cappedScores };
};

// Get progress from Firestore or localStorage
export const getProgress = async (user) => {
  const defaultProgress = {
    completedTopics: {},
    totalPoints: 0,
    level: 1,
    streak: 0,
    lastStudyDate: null,
    quizzesCompleted: 0,
    achievements: [],
    topicScores: {},
    incorrectQuestions: [], // Array of { topicId, questionId }
    activeQuizzes: {} // Map of topicId -> { currentQuestionIndex, answers, questionsOrder }
  };

  // Try Firestore first
  if (db) {
    try {
      const userDocRef = doc(db, 'users', user);
      const userDoc = await getDoc(userDocRef);
      
      if (userDoc.exists()) {
        const firestoreData = userDoc.data();
        // Merge with any local data (localStorage takes precedence for conflicts)
        const localData = getLocalProgress(user);
        const merged = { ...defaultProgress, ...firestoreData, ...localData };
        // Cap scores at 100% before returning
        return capTopicScores(merged);
      }
    } catch (error) {
      // Only log if it's not an offline error or quota exceeded
      if (error.code !== 'unavailable' && error.code !== 'failed-precondition' && error.code !== 'resource-exhausted') {
        console.warn('Error reading from Firestore:', error);
      }
      if (error.code === 'resource-exhausted') {
        console.log('Firestore daily quota exceeded. Using local storage only.');
      }
      // Silently fall back to localStorage
    }
  }

  // Fallback to localStorage
  const localProgress = getLocalProgress(user) || defaultProgress;
  return capTopicScores(localProgress);
};

// Save progress to both Firestore and localStorage
export const saveProgress = async (user, progress) => {
  // Save to localStorage immediately (fast, works offline)
  saveLocalProgress(user, progress);

  // Save to Firestore (syncs across devices)
  if (db) {
    try {
      const userDocRef = doc(db, 'users', user);
      await setDoc(userDocRef, {
        ...progress,
        lastUpdated: new Date().toISOString()
      }, { merge: true });
    } catch (error) {
      // Only log if it's not an offline error or quota exceeded
      if (error.code !== 'unavailable' && error.code !== 'failed-precondition' && error.code !== 'resource-exhausted') {
        console.warn('Error saving to Firestore:', error);
      }
      // Continue anyway - localStorage is saved
    }
  }
};

// Subscribe to real-time updates from Firestore
export const subscribeToProgress = (user, callback) => {
  if (!db) {
    return () => {}; // Return no-op unsubscribe function
  }

  try {
    const userDocRef = doc(db, 'users', user);
    return onSnapshot(userDocRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        // Merge with localStorage (localStorage takes precedence)
        const localData = getLocalProgress(user);
        const merged = { ...data, ...localData };
        // Cap scores at 100% before saving/returning
        const capped = capTopicScores(merged);
        // Update localStorage with Firestore data (with capped scores)
        saveLocalProgress(user, capped);
        callback(capped);
      }
    }, (error) => {
      // Ignore offline/quota errors
      if (error.code !== 'unavailable' && error.code !== 'resource-exhausted') {
        console.warn('Error listening to Firestore:', error);
      }
    });
  } catch (error) {
    console.warn('Error setting up Firestore listener:', error);
    return () => {};
  }
};

// Local storage helpers (fallback)
const getLocalProgress = (user) => {
  try {
    const key = `examPrepProgress_${user}`;
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : null;
  } catch (error) {
    console.warn('Error reading from localStorage:', error);
    return null;
  }
};

const saveLocalProgress = (user, progress) => {
  try {
    const key = `examPrepProgress_${user}`;
    localStorage.setItem(key, JSON.stringify(progress));
  } catch (error) {
    console.warn('Error saving to localStorage:', error);
  }
};

