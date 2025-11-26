import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Dashboard from './components/Dashboard';
import Quiz from './components/Quiz';
import Progress from './components/Progress';
import Achievements from './components/Achievements';
import UserSelector from './components/UserSelector';
import { getProgress, saveProgress, subscribeToProgress } from './services/progressService';
import './App.css';

function App() {
  // Get current user from localStorage
  const [currentUser, setCurrentUser] = useState(() => {
    return localStorage.getItem('examPrepUser') || null;
  });

  const [progress, setProgress] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const unsubscribeRef = useRef(null);

  // Load progress when user changes
  useEffect(() => {
    if (!currentUser) {
      setProgress(null);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    
    // Load initial progress from Firestore/localStorage
    getProgress(currentUser).then((loadedProgress) => {
      setProgress(loadedProgress);
      setIsLoading(false);
    });

    // Set up real-time sync
    unsubscribeRef.current = subscribeToProgress(currentUser, (syncedProgress) => {
      setProgress(syncedProgress);
    });

    // Cleanup subscription on unmount or user change
    return () => {
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
        unsubscribeRef.current = null;
      }
    };
  }, [currentUser]);

  // Save progress to Firestore whenever it changes
  useEffect(() => {
    if (currentUser && progress && !isLoading) {
      saveProgress(currentUser, progress);
    }
  }, [progress, currentUser, isLoading]);

  // Update streak when app loads
  useEffect(() => {
    if (!progress) return;
    const today = new Date().toDateString();
    const lastDate = progress.lastStudyDate;
    
    if (lastDate) {
      const last = new Date(lastDate);
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      
      if (lastDate === today) {
        // Already studied today
      } else if (last.toDateString() === yesterday.toDateString()) {
        // Studied yesterday, continue streak
      } else {
        // Streak broken
        setProgress(prev => ({ ...prev, streak: 0 }));
      }
    }
  }, [progress]);

  const updateProgress = (updates) => {
    setProgress(prev => {
      const newProgress = { ...prev, ...updates };
      
      // Update level based on points
      const newLevel = Math.floor(newProgress.totalPoints / 100) + 1;
      newProgress.level = newLevel;
      
      // Check for new achievements
      checkAchievements(newProgress);
      
      return newProgress;
    });
  };

  const checkAchievements = (currentProgress) => {
    // This will be implemented in the components
    // Achievements are checked and awarded when relevant actions occur
  };

  const handleUserSelect = (user) => {
    setCurrentUser(user);
    localStorage.setItem('examPrepUser', user);
  };

  const handleUserSwitch = () => {
    setCurrentUser(null);
    localStorage.removeItem('examPrepUser');
  };

  if (!currentUser || isLoading) {
    return (
      <div className="app">
        <UserSelector onUserSelect={handleUserSelect} />
        {isLoading && currentUser && (
          <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'var(--text)',
            fontSize: '18px'
          }}>
            Loading your progress...
          </div>
        )}
      </div>
    );
  }

  if (!progress) {
    return (
      <div className="app">
        <UserSelector onUserSelect={handleUserSelect} />
      </div>
    );
  }

  return (
    <Router>
      <div className="app">
        <UserSelector onUserSelect={handleUserSelect} />
        <Routes>
          <Route path="/" element={<Dashboard progress={progress} currentUser={currentUser} onUserSwitch={handleUserSwitch} />} />
          <Route path="/quiz/:topicId" element={<Quiz progress={progress} updateProgress={updateProgress} currentUser={currentUser} />} />
          <Route path="/progress" element={<Progress progress={progress} currentUser={currentUser} onUserSwitch={handleUserSwitch} />} />
          <Route path="/achievements" element={<Achievements progress={progress} currentUser={currentUser} onUserSwitch={handleUserSwitch} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
