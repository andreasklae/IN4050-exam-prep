import { useNavigate } from 'react-router-dom';
import { topics } from '../data/curriculum';
import { ArrowLeft, TrendingUp, Target, Award, User, LogOut } from 'lucide-react';
import './Progress.css';

function Progress({ progress, currentUser, onUserSwitch }) {
  const navigate = useNavigate();
  const userName = currentUser === 'john' ? 'John' : 'Andreas';
  
  const completedCount = Object.keys(progress.completedTopics).length;
  const totalQuestions = topics.reduce((sum, topic) => sum + topic.questions.length, 0);
  const averageScore = Object.keys(progress.topicScores).length > 0
    ? Math.round(Object.values(progress.topicScores).reduce((a, b) => a + b, 0) / Object.keys(progress.topicScores).length)
    : 0;

  // Categorize topics by performance
  const strongTopics = topics.filter(t => (progress.topicScores[t.id] || 0) >= 80);
  const mediumTopics = topics.filter(t => {
    const score = progress.topicScores[t.id] || 0;
    return score >= 60 && score < 80;
  });
  const weakTopics = topics.filter(t => {
    const score = progress.topicScores[t.id];
    return score !== undefined && score < 60;
  });
  const unstartedTopics = topics.filter(t => progress.topicScores[t.id] === undefined);

  return (
    <div className="progress-page">
      <header className="page-header">
        <button onClick={() => navigate('/')} className="back-btn">
          <ArrowLeft size={20} />
          Back
        </button>
        <h1>{userName}'s Progress</h1>
        <button onClick={onUserSwitch} className="switch-user-btn-header" title="Switch user">
          <User size={18} />
          <span>Switch</span>
        </button>
      </header>

      <div className="progress-content">
        <div className="stats-overview">
          <div className="stat-box">
            <div className="stat-icon" style={{ backgroundColor: '#6366f1' }}>
              <Target size={32} />
            </div>
            <div className="stat-details">
              <div className="stat-value">{completedCount}/{topics.length}</div>
              <div className="stat-label">Topics Completed</div>
            </div>
          </div>

          <div className="stat-box">
            <div className="stat-icon" style={{ backgroundColor: '#ec4899' }}>
              <TrendingUp size={32} />
            </div>
            <div className="stat-details">
              <div className="stat-value">{averageScore}%</div>
              <div className="stat-label">Average Score</div>
            </div>
          </div>

          <div className="stat-box">
            <div className="stat-icon" style={{ backgroundColor: '#10b981' }}>
              <Award size={32} />
            </div>
            <div className="stat-details">
              <div className="stat-value">{progress.quizzesCompleted}</div>
              <div className="stat-label">Quizzes Taken</div>
            </div>
          </div>

          <div className="stat-box">
            <div className="stat-icon" style={{ backgroundColor: '#f59e0b' }}>
              <span style={{ fontSize: '32px' }}>📝</span>
            </div>
            <div className="stat-details">
              <div className="stat-value">{totalQuestions}</div>
              <div className="stat-label">Total Questions</div>
            </div>
          </div>
        </div>

        <div className="topic-breakdown">
          <h2>Topic Performance</h2>
          <div className="topic-list">
            {topics.map(topic => {
              const score = progress.topicScores[topic.id];
              const isCompleted = progress.completedTopics[topic.id];
              
              return (
                <div key={topic.id} className="topic-progress-item">
                  <div className="topic-info">
                    <span className="topic-icon-small">{topic.icon}</span>
                    <div className="topic-text">
                      <div className="topic-name">{topic.title}</div>
                      <div className="topic-questions">{topic.questions.length} questions</div>
                    </div>
                  </div>
                  <div className="topic-score-info">
                    {score !== undefined ? (
                      <>
                        <div className={`score-badge ${score >= 80 ? 'high' : score >= 60 ? 'medium' : 'low'}`}>
                          {score}%
                        </div>
                        {isCompleted && <span className="completed-check">✓</span>}
                      </>
                    ) : (
                      <div className="not-attempted">Not attempted</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="study-insights">
          <h2>Study Insights</h2>
          <div className="insights-grid">
            <div className="insight-card">
              <div className="insight-icon">🔥</div>
              <div className="insight-content">
                <div className="insight-value">{progress.streak} days</div>
                <div className="insight-label">Current Streak</div>
                <div className="insight-tip">Keep studying daily to maintain your streak!</div>
              </div>
            </div>

            <div className="insight-card">
              <div className="insight-icon">⭐</div>
              <div className="insight-content">
                <div className="insight-value">{progress.totalPoints}</div>
                <div className="insight-label">Total Points</div>
                <div className="insight-tip">
                  {progress.level < 5 ? 'Keep going to level up!' : 'You\'re doing great!'}
                </div>
              </div>
            </div>

            <div className="insight-card">
              <div className="insight-icon">🎯</div>
              <div className="insight-content">
                <div className="insight-value">Level {progress.level}</div>
                <div className="insight-label">Current Level</div>
                <div className="insight-tip">
                  {progress.totalPoints % 100} points until next level
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Knowledge Overview */}
        <div className="knowledge-overview">
          <h2>What You Know vs. Don't Know</h2>
          
          <div className="knowledge-grid">
            {/* Strong Topics */}
            <div className="knowledge-section strong-section">
              <div className="knowledge-header">
                <span className="knowledge-icon">✅</span>
                <h3>Mastered ({strongTopics.length})</h3>
              </div>
              <div className="knowledge-desc">80%+ Score - You know this well!</div>
              <div className="topic-chips">
                {strongTopics.length > 0 ? strongTopics.map(topic => (
                  <div key={topic.id} className="topic-chip strong-chip">
                    <span>{topic.icon}</span>
                    <span>{topic.title}</span>
                    <span className="chip-score">{progress.topicScores[topic.id]}%</span>
                  </div>
                )) : (
                  <div className="empty-state">No topics mastered yet. Aim for 80%+!</div>
                )}
              </div>
            </div>

            {/* Medium Topics */}
            <div className="knowledge-section medium-section">
              <div className="knowledge-header">
                <span className="knowledge-icon">📚</span>
                <h3>Learning ({mediumTopics.length})</h3>
              </div>
              <div className="knowledge-desc">60-79% Score - Getting there!</div>
              <div className="topic-chips">
                {mediumTopics.length > 0 ? mediumTopics.map(topic => (
                  <div key={topic.id} className="topic-chip medium-chip">
                    <span>{topic.icon}</span>
                    <span>{topic.title}</span>
                    <span className="chip-score">{progress.topicScores[topic.id]}%</span>
                  </div>
                )) : (
                  <div className="empty-state">No topics in progress</div>
                )}
              </div>
            </div>

            {/* Weak Topics */}
            <div className="knowledge-section weak-section">
              <div className="knowledge-header">
                <span className="knowledge-icon">⚠️</span>
                <h3>Needs Work ({weakTopics.length})</h3>
              </div>
              <div className="knowledge-desc">Below 60% - Focus here!</div>
              <div className="topic-chips">
                {weakTopics.length > 0 ? weakTopics.map(topic => (
                  <div key={topic.id} className="topic-chip weak-chip" onClick={() => navigate(`/quiz/${topic.id}`)}>
                    <span>{topic.icon}</span>
                    <span>{topic.title}</span>
                    <span className="chip-score">{progress.topicScores[topic.id]}%</span>
                  </div>
                )) : (
                  <div className="empty-state">Great! No weak topics</div>
                )}
              </div>
            </div>

            {/* Unstarted Topics */}
            <div className="knowledge-section unstarted-section">
              <div className="knowledge-header">
                <span className="knowledge-icon">🎯</span>
                <h3>Not Started ({unstartedTopics.length})</h3>
              </div>
              <div className="knowledge-desc">Begin your journey!</div>
              <div className="topic-chips">
                {unstartedTopics.length > 0 ? unstartedTopics.map(topic => (
                  <div key={topic.id} className="topic-chip unstarted-chip" onClick={() => navigate(`/quiz/${topic.id}`)}>
                    <span>{topic.icon}</span>
                    <span>{topic.title}</span>
                    <span className="chip-new">NEW</span>
                  </div>
                )) : (
                  <div className="empty-state">All topics started!</div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="recommendations">
          <h2>Recommendations</h2>
          <div className="recommendation-list">
            {topics
              .filter(t => !progress.topicScores[t.id] || progress.topicScores[t.id] < 80)
              .slice(0, 3)
              .map(topic => (
                <div key={topic.id} className="recommendation-item">
                  <span className="rec-icon">{topic.icon}</span>
                  <div className="rec-content">
                    <div className="rec-title">{topic.title}</div>
                    <div className="rec-reason">
                      {!progress.topicScores[topic.id] 
                        ? 'Not yet attempted - give it a try!'
                        : `Score: ${progress.topicScores[topic.id]}% - try again to improve!`}
                    </div>
                  </div>
                  <button 
                    onClick={() => navigate(`/quiz/${topic.id}`)}
                    className="rec-button"
                  >
                    Start
                  </button>
                </div>
              ))}
            {topics.every(t => progress.topicScores[t.id] >= 80) && (
              <div className="all-mastered">
                <span className="mastered-icon">🎓</span>
                <p>Amazing! You've mastered all topics!</p>
                <p>Consider reviewing topics to maintain your knowledge.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress;

