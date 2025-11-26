import { Link } from 'react-router-dom';
import { topics } from '../data/curriculum';
import { Trophy, Target, Flame, TrendingUp } from 'lucide-react';
import './Dashboard.css';

function Dashboard({ progress }) {
  const completedCount = Object.keys(progress.completedTopics).length;
  const completionPercentage = Math.round((completedCount / topics.length) * 100);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-content">
          <h1 className="main-title">
            <span className="emoji">🎓</span>
            IN4050 Exam Prep
          </h1>
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
          <Link to="/achievements" className="quick-link">
            <Trophy size={20} />
            <span>View Achievements</span>
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

