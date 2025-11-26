import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { topics } from '../data/curriculum';
import { getProgress } from '../services/progressService';
import { Trophy, Target, Flame, TrendingUp, User, LogOut, Users, Shuffle, AlertCircle } from 'lucide-react';
import './Dashboard.css';

function Dashboard({ progress, currentUser, onUserSwitch }) {
  const completedCount = Object.keys(progress.completedTopics).length;
  const completionPercentage = Math.round((completedCount / topics.length) * 100);
  const userName = currentUser === 'john' ? 'John' : 'Andreas';

  // Get other user's data for competition teaser
  const otherUser = currentUser === 'john' ? 'andreas' : 'john';
  const [otherProgress, setOtherProgress] = useState(() => {
    const saved = localStorage.getItem(`examPrepProgress_${otherUser}`);
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    const loadOtherProgress = async () => {
      try {
        // Fetch fresh data from service (which checks Firebase)
        const freshData = await getProgress(otherUser);
        if (freshData) {
          setOtherProgress(freshData);
          // Update local storage to keep it cached
          localStorage.setItem(`examPrepProgress_${otherUser}`, JSON.stringify(freshData));
        }
      } catch (error) {
        console.error('Failed to load competitor progress:', error);
      }
    };

    loadOtherProgress();
  }, [otherUser]);
  
  // Calculate knowledge categories
  const strongTopics = topics.filter(t => (progress.topicScores[t.id] || 0) >= 80).length;
  const weakTopics = topics.filter(t => {
    const score = progress.topicScores[t.id];
    return score !== undefined && score < 60;
  }).length;
  const unstartedTopics = topics.filter(t => progress.topicScores[t.id] === undefined).length;

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-content">
          <div className="user-badge-container">
            <h1 className="main-title">
              <span className="emoji">🎓</span>
              IN4050 Exam Prep
            </h1>
            <div className="user-badge">
              <User size={18} />
              <span>{userName}</span>
              <button 
                className="switch-user-btn"
                onClick={onUserSwitch}
                title="Switch user"
              >
                <LogOut size={16} />
              </button>
            </div>
          </div>
          <p className="subtitle">Master AI & Machine Learning concepts</p>
        </div>
        
        <div className="header-stats">
          <div className="stat-card level-card">
            <Trophy size={24} />
            <div>
              <div className="stat-label">Level</div>
              <div className="stat-value">{progress.level}</div>
            </div>
          </div>
          <div className="stat-card points-card">
            <Target size={24} />
            <div>
              <div className="stat-label">Points</div>
              <div className="stat-value">{progress.totalPoints}</div>
            </div>
          </div>
          <div className="stat-card streak-card">
            <Flame size={24} />
            <div>
              <div className="stat-label">Streak</div>
              <div className="stat-value">{progress.streak} days</div>
            </div>
          </div>
        </div>
      </header>

      <div className="dashboard-content">
        {/* Competition Overview at Top */}
        {otherProgress && (
          <div className="competition-overview">
            <div className="competition-title">
              <Users size={28} />
              <h2>Competition</h2>
            </div>
            
            <div className="competition-stats">
              {/* John's Card */}
              <div className={`competitor-card ${currentUser === 'john' ? 'current-user' : ''} ${progress.totalPoints > otherProgress.totalPoints ? 'winner' : ''}`}>
                <div className="competitor-header">
                  <div className="competitor-avatar">👤</div>
                  <div className="competitor-info">
                    <div className="competitor-name">John</div>
                    {currentUser === 'john' && <span className="you-badge">You</span>}
                  </div>
                  {currentUser === 'john' ? progress.totalPoints > otherProgress.totalPoints && <Trophy size={24} className="winner-trophy" /> : otherProgress.totalPoints > progress.totalPoints && <Trophy size={24} className="winner-trophy" />}
                </div>
                <div className="competitor-stats">
                  <div className="comp-stat">
                    <div className="comp-stat-value">{currentUser === 'john' ? progress.totalPoints : otherProgress.totalPoints}</div>
                    <div className="comp-stat-label">Points</div>
                  </div>
                  <div className="comp-stat">
                    <div className="comp-stat-value">Lvl {currentUser === 'john' ? progress.level : otherProgress.level}</div>
                    <div className="comp-stat-label">Level</div>
                  </div>
                  <div className="comp-stat">
                    <div className="comp-stat-value">{currentUser === 'john' ? progress.streak : otherProgress.streak}🔥</div>
                    <div className="comp-stat-label">Streak</div>
                  </div>
                </div>
              </div>

              {/* VS Badge */}
              <div className="vs-badge">VS</div>

              {/* Andreas's Card */}
              <div className={`competitor-card ${currentUser === 'andreas' ? 'current-user' : ''} ${currentUser === 'andreas' ? progress.totalPoints > otherProgress.totalPoints && 'winner' : otherProgress.totalPoints > progress.totalPoints && 'winner'}`}>
                <div className="competitor-header">
                  <div className="competitor-avatar">👤</div>
                  <div className="competitor-info">
                    <div className="competitor-name">Andreas</div>
                    {currentUser === 'andreas' && <span className="you-badge">You</span>}
                  </div>
                  {currentUser === 'andreas' ? progress.totalPoints > otherProgress.totalPoints && <Trophy size={24} className="winner-trophy" /> : otherProgress.totalPoints > progress.totalPoints && <Trophy size={24} className="winner-trophy" />}
                </div>
                <div className="competitor-stats">
                  <div className="comp-stat">
                    <div className="comp-stat-value">{currentUser === 'andreas' ? progress.totalPoints : otherProgress.totalPoints}</div>
                    <div className="comp-stat-label">Points</div>
                  </div>
                  <div className="comp-stat">
                    <div className="comp-stat-value">Lvl {currentUser === 'andreas' ? progress.level : otherProgress.level}</div>
                    <div className="comp-stat-label">Level</div>
                  </div>
                  <div className="comp-stat">
                    <div className="comp-stat-value">{currentUser === 'andreas' ? progress.streak : otherProgress.streak}🔥</div>
                    <div className="comp-stat-label">Streak</div>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/comparison" className="view-full-comparison">
              View Full Comparison →
            </Link>
          </div>
        )}

        <div className="progress-overview">
          <div className="overview-header">
            <h2>Your Progress</h2>
            <Link to="/progress" className="view-details">
              <TrendingUp size={18} />
              View Details
            </Link>
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
            <div className="progress-text">
              {completedCount} of {topics.length} topics completed ({completionPercentage}%)
            </div>
          </div>
          
          {/* Quick Knowledge Summary */}
          <div className="knowledge-summary">
            <div className="summary-item strong-summary">
              <div className="summary-icon">✅</div>
              <div className="summary-text">
                <div className="summary-count">{strongTopics}</div>
                <div className="summary-label">Mastered</div>
              </div>
            </div>
            <div className="summary-item weak-summary">
              <div className="summary-icon">⚠️</div>
              <div className="summary-text">
                <div className="summary-count">{weakTopics}</div>
                <div className="summary-label">Need Work</div>
              </div>
            </div>
            <div className="summary-item unstarted-summary">
              <div className="summary-icon">🎯</div>
              <div className="summary-text">
                <div className="summary-count">{unstartedTopics}</div>
                <div className="summary-label">Not Started</div>
              </div>
            </div>
          </div>
        </div>

        {/* Competition Teaser */}
        {otherProgress && (
          <div className="competition-teaser">
            <div className="teaser-header">
              <Users size={24} />
              <h3>Competition Status</h3>
            </div>
            <div className="teaser-content">
              {progress.totalPoints > otherProgress.totalPoints ? (
                <div className="teaser-status winning">
                  <div className="teaser-icon">🏆</div>
                  <div className="teaser-text">
                    <div className="teaser-main">You're in the lead!</div>
                    <div className="teaser-sub">
                      {progress.totalPoints - otherProgress.totalPoints} points ahead of {otherUser === 'john' ? 'John' : 'Andreas'}
                    </div>
                  </div>
                </div>
              ) : progress.totalPoints < otherProgress.totalPoints ? (
                <div className="teaser-status losing">
                  <div className="teaser-icon">💪</div>
                  <div className="teaser-text">
                    <div className="teaser-main">You can catch up!</div>
                    <div className="teaser-sub">
                      {otherProgress.totalPoints - progress.totalPoints} points behind {otherUser === 'john' ? 'John' : 'Andreas'}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="teaser-status tied">
                  <div className="teaser-icon">🤝</div>
                  <div className="teaser-text">
                    <div className="teaser-main">It's a tie!</div>
                    <div className="teaser-sub">Both at {progress.totalPoints} points</div>
                  </div>
                </div>
              )}
              <Link to="/comparison" className="view-comparison-btn">
                View Full Comparison
              </Link>
            </div>
          </div>
        )}

        {/* Special Practice Modes */}
        <div className="practice-modes">
          <Link to="/random" className="mode-card random-mode">
            <div className="mode-icon">
              <Shuffle size={24} />
            </div>
            <div className="mode-content">
              <h3>Random Quiz</h3>
              <p>15 mixed questions from all topics</p>
            </div>
          </Link>
          
          <Link to="/mistakes" className="mode-card mistakes-mode">
            <div className="mode-icon">
              <AlertCircle size={24} />
            </div>
            <div className="mode-content">
              <h3>Review Mistakes</h3>
              <p>Practice questions you missed ({progress.incorrectQuestions?.length || 0})</p>
            </div>
          </Link>
        </div>

        <div className="topics-grid">
          {topics.map(topic => {
            const isCompleted = progress.completedTopics[topic.id];
            const score = progress.topicScores[topic.id];
            
            return (
              <Link 
                key={topic.id} 
                to={`/quiz/${topic.id}`}
                className="topic-card"
                style={{ '--topic-color': topic.color }}
              >
                <div className="topic-icon">{topic.icon}</div>
                <div className="topic-content">
                  <h3 className="topic-title">{topic.title}</h3>
                  <p className="topic-description">{topic.description}</p>
                  <div className="topic-meta">
                    <span className="question-count">
                      {topic.questions.length} questions
                    </span>
                    {score !== undefined && (
                      <span className={`topic-score ${score >= 80 ? 'high' : score >= 60 ? 'medium' : 'low'}`}>
                        {score}%
                      </span>
                    )}
                  </div>
                </div>
                {isCompleted && (
                  <div className="completion-badge">✓</div>
                )}
              </Link>
            );
          })}
        </div>

        <div className="quick-links">
          <Link to="/comparison" className="quick-link competition-link">
            <Users size={20} />
            <span>🏆 Competition</span>
          </Link>
          <Link to="/achievements" className="quick-link">
            <Trophy size={20} />
            <span>Achievements</span>
          </Link>
          <Link to="/progress" className="quick-link">
            <TrendingUp size={20} />
            <span>Detailed Progress</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

