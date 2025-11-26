import { useNavigate } from 'react-router-dom';
import { topics } from '../data/curriculum';
import { ArrowLeft, Trophy, TrendingUp, Target, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import './Comparison.css';

function Comparison({ currentUser, onUserSwitch }) {
  const navigate = useNavigate();
  const [johnProgress, setJohnProgress] = useState(null);
  const [andreasProgress, setAndreasProgress] = useState(null);

  useEffect(() => {
    // Load both users' progress from localStorage
    const johnData = localStorage.getItem('examPrepProgress_john');
    const andreasData = localStorage.getItem('examPrepProgress_andreas');
    
    setJohnProgress(johnData ? JSON.parse(johnData) : {
      completedTopics: {},
      totalPoints: 0,
      level: 1,
      streak: 0,
      quizzesCompleted: 0,
      achievements: [],
      topicScores: {}
    });
    
    setAndreasProgress(andreasData ? JSON.parse(andreasData) : {
      completedTopics: {},
      totalPoints: 0,
      level: 1,
      streak: 0,
      quizzesCompleted: 0,
      achievements: [],
      topicScores: {}
    });
  }, []);

  if (!johnProgress || !andreasProgress) {
    return <div className="comparison-page">Loading...</div>;
  }

  const johnAverage = Object.keys(johnProgress.topicScores).length > 0
    ? Math.round(Object.values(johnProgress.topicScores).reduce((a, b) => a + b, 0) / Object.keys(johnProgress.topicScores).length)
    : 0;

  const andreasAverage = Object.keys(andreasProgress.topicScores).length > 0
    ? Math.round(Object.values(andreasProgress.topicScores).reduce((a, b) => a + b, 0) / Object.keys(andreasProgress.topicScores).length)
    : 0;

  const johnCompleted = Object.keys(johnProgress.completedTopics).length;
  const andreasCompleted = Object.keys(andreasProgress.completedTopics).length;

  // Determine leader
  const pointsLeader = johnProgress.totalPoints > andreasProgress.totalPoints ? 'john' 
    : andreasProgress.totalPoints > johnProgress.totalPoints ? 'andreas' : 'tie';
  
  const averageLeader = johnAverage > andreasAverage ? 'john' 
    : andreasAverage > johnAverage ? 'andreas' : 'tie';
  
  const streakLeader = johnProgress.streak > andreasProgress.streak ? 'john'
    : andreasProgress.streak > johnProgress.streak ? 'andreas' : 'tie';

  return (
    <div className="comparison-page">
      <header className="page-header">
        <button onClick={() => navigate('/')} className="back-btn">
          <ArrowLeft size={20} />
          Back
        </button>
        <h1>Competition Leaderboard</h1>
        <button onClick={onUserSwitch} className="switch-user-btn-header" title="Switch user">
          Switch User
        </button>
      </header>

      <div className="comparison-content">
        {/* Overall Winner Banner */}
        <div className="winner-banner">
          <Trophy size={48} />
          <div>
            <div className="winner-label">Current Leader</div>
            <div className="winner-name">
              {pointsLeader === 'tie' ? "It's a Tie!" : pointsLeader === 'john' ? '👤 John' : '👤 Andreas'}
            </div>
            {pointsLeader !== 'tie' && (
              <div className="winner-points">
                {pointsLeader === 'john' ? johnProgress.totalPoints : andreasProgress.totalPoints} points
              </div>
            )}
          </div>
        </div>

        {/* Head-to-Head Stats */}
        <div className="head-to-head">
          <h2>Head-to-Head Comparison</h2>
          
          {/* Points */}
          <div className="stat-comparison">
            <div className={`user-stat ${pointsLeader === 'john' ? 'leader' : ''}`}>
              <div className="stat-user">👤 John</div>
              <div className="stat-value">{johnProgress.totalPoints}</div>
              {pointsLeader === 'john' && <div className="leader-badge">🏆</div>}
            </div>
            <div className="stat-label">
              <Target size={20} />
              <span>Total Points</span>
            </div>
            <div className={`user-stat ${pointsLeader === 'andreas' ? 'leader' : ''}`}>
              <div className="stat-user">👤 Andreas</div>
              <div className="stat-value">{andreasProgress.totalPoints}</div>
              {pointsLeader === 'andreas' && <div className="leader-badge">🏆</div>}
            </div>
          </div>

          {/* Average Score */}
          <div className="stat-comparison">
            <div className={`user-stat ${averageLeader === 'john' ? 'leader' : ''}`}>
              <div className="stat-user">👤 John</div>
              <div className="stat-value">{johnAverage}%</div>
              {averageLeader === 'john' && <div className="leader-badge">🏆</div>}
            </div>
            <div className="stat-label">
              <TrendingUp size={20} />
              <span>Average Score</span>
            </div>
            <div className={`user-stat ${averageLeader === 'andreas' ? 'leader' : ''}`}>
              <div className="stat-user">👤 Andreas</div>
              <div className="stat-value">{andreasAverage}%</div>
              {averageLeader === 'andreas' && <div className="leader-badge">🏆</div>}
            </div>
          </div>

          {/* Streak */}
          <div className="stat-comparison">
            <div className={`user-stat ${streakLeader === 'john' ? 'leader' : ''}`}>
              <div className="stat-user">👤 John</div>
              <div className="stat-value">{johnProgress.streak} days</div>
              {streakLeader === 'john' && <div className="leader-badge">🏆</div>}
            </div>
            <div className="stat-label">
              <Zap size={20} />
              <span>Study Streak</span>
            </div>
            <div className={`user-stat ${streakLeader === 'andreas' ? 'leader' : ''}`}>
              <div className="stat-user">👤 Andreas</div>
              <div className="stat-value">{andreasProgress.streak} days</div>
              {streakLeader === 'andreas' && <div className="leader-badge">🏆</div>}
            </div>
          </div>

          {/* Topics Completed */}
          <div className="stat-comparison">
            <div className={`user-stat ${johnCompleted > andreasCompleted ? 'leader' : ''}`}>
              <div className="stat-user">👤 John</div>
              <div className="stat-value">{johnCompleted}/{topics.length}</div>
              {johnCompleted > andreasCompleted && <div className="leader-badge">🏆</div>}
            </div>
            <div className="stat-label">
              <span>📚</span>
              <span>Topics Completed</span>
            </div>
            <div className={`user-stat ${andreasCompleted > johnCompleted ? 'leader' : ''}`}>
              <div className="stat-user">👤 Andreas</div>
              <div className="stat-value">{andreasCompleted}/{topics.length}</div>
              {andreasCompleted > johnCompleted && <div className="leader-badge">🏆</div>}
            </div>
          </div>

          {/* Achievements */}
          <div className="stat-comparison">
            <div className={`user-stat ${johnProgress.achievements.length > andreasProgress.achievements.length ? 'leader' : ''}`}>
              <div className="stat-user">👤 John</div>
              <div className="stat-value">{johnProgress.achievements.length}/7</div>
              {johnProgress.achievements.length > andreasProgress.achievements.length && <div className="leader-badge">🏆</div>}
            </div>
            <div className="stat-label">
              <span>🏅</span>
              <span>Achievements</span>
            </div>
            <div className={`user-stat ${andreasProgress.achievements.length > johnProgress.achievements.length ? 'leader' : ''}`}>
              <div className="stat-user">👤 Andreas</div>
              <div className="stat-value">{andreasProgress.achievements.length}/7</div>
              {andreasProgress.achievements.length > johnProgress.achievements.length && <div className="leader-badge">🏆</div>}
            </div>
          </div>
        </div>

        {/* Topic Breakdown */}
        <div className="topic-comparison">
          <h2>Topic-by-Topic Breakdown</h2>
          <div className="topic-comparison-grid">
            {topics.map(topic => {
              const johnScore = johnProgress.topicScores[topic.id] || 0;
              const andreasScore = andreasProgress.topicScores[topic.id] || 0;
              const leader = johnScore > andreasScore ? 'john' : andreasScore > johnScore ? 'andreas' : 'tie';
              
              return (
                <div key={topic.id} className="topic-comparison-card">
                  <div className="topic-header">
                    <span className="topic-icon-small">{topic.icon}</span>
                    <span className="topic-title-small">{topic.title}</span>
                  </div>
                  <div className="score-bars">
                    <div className="score-bar-row">
                      <span className="score-user">John</span>
                      <div className="score-bar-container">
                        <div 
                          className={`score-bar ${leader === 'john' ? 'leader-bar' : ''}`}
                          style={{ width: `${johnScore}%` }}
                        />
                      </div>
                      <span className="score-value">{johnScore}%</span>
                    </div>
                    <div className="score-bar-row">
                      <span className="score-user">Andreas</span>
                      <div className="score-bar-container">
                        <div 
                          className={`score-bar ${leader === 'andreas' ? 'leader-bar' : ''}`}
                          style={{ width: `${andreasScore}%` }}
                        />
                      </div>
                      <span className="score-value">{andreasScore}%</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Motivational Message */}
        <div className="motivation-box">
          <div className="motivation-icon">🎯</div>
          <div className="motivation-content">
            <h3>Keep Pushing!</h3>
            <p>
              {currentUser === 'john' 
                ? johnProgress.totalPoints >= andreasProgress.totalPoints
                  ? "You're in the lead! Keep studying to maintain your position!"
                  : `You're ${andreasProgress.totalPoints - johnProgress.totalPoints} points behind. You can catch up!`
                : andreasProgress.totalPoints >= johnProgress.totalPoints
                  ? "You're in the lead! Keep studying to maintain your position!"
                  : `You're ${johnProgress.totalPoints - andreasProgress.totalPoints} points behind. You can catch up!`
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comparison;

