import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import Quiz from './components/Quiz';
import Progress from './components/Progress';
import Achievements from './components/Achievements';
import './App.css';

function App() {
  // Load progress from localStorage or initialize
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('examPrepProgress');
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

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('examPrepProgress', JSON.stringify(progress));
  }, [progress]);

  // Update streak when app loads
  useEffect(() => {
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
  }, []);

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

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Dashboard progress={progress} />} />
          <Route path="/quiz/:topicId" element={<Quiz progress={progress} updateProgress={updateProgress} />} />
          <Route path="/progress" element={<Progress progress={progress} />} />
          <Route path="/achievements" element={<Achievements progress={progress} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
