import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import Quiz from './components/Quiz';
import Progress from './components/Progress';
import Achievements from './components/Achievements';
import UserSelector from './components/UserSelector';
import './App.css';

function App() {
  // Get current user from localStorage
  const [currentUser, setCurrentUser] = useState(() => {
    return localStorage.getItem('examPrepUser') || null;
  });

  // Load progress for current user from localStorage or initialize
  const getProgressKey = (user) => `examPrepProgress_${user}`;
  
  const [progress, setProgress] = useState(() => {
    if (!currentUser) return null;
    const saved = localStorage.getItem(getProgressKey(currentUser));
    return saved ? JSON.parse(saved) : {
      completedTopics: {},
      totalPoints: 0,
      level: 1,
      streak: 0,
      lastStudyDate: null,
      quizzesCompleted: 0,
      achievements: [],
      topicScores: {}
    };
  });

  // Update progress when user changes
  useEffect(() => {
    if (!currentUser) {
      setProgress(null);
      return;
    }
    const saved = localStorage.getItem(getProgressKey(currentUser));
    setProgress(saved ? JSON.parse(saved) : {
      completedTopics: {},
      totalPoints: 0,
      level: 1,
      streak: 0,
      lastStudyDate: null,
      quizzesCompleted: 0,
      achievements: [],
      topicScores: {}
    });
  }, [currentUser]);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (currentUser && progress) {
      localStorage.setItem(getProgressKey(currentUser), JSON.stringify(progress));
    }
  }, [progress, currentUser]);

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

  if (!currentUser || !progress) {
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
