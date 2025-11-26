import { useNavigate } from 'react-router-dom';
import { achievements } from '../data/curriculum';
import { ArrowLeft, Lock } from 'lucide-react';
import './Achievements.css';

function Achievements({ progress }) {
  const navigate = useNavigate();
  
  const unlockedCount = progress.achievements.length;
  const totalCount = achievements.length;

  return (
    <div className="achievements-page">
      <header className="page-header">
        <button onClick={() => navigate('/')} className="back-btn">
          <ArrowLeft size={20} />
          Back
        </button>
        <h1>Achievements</h1>
      </header>

      <div className="achievements-content">
        <div className="achievements-header">
          <div className="achievement-progress">
            <div className="achievement-count">
              {unlockedCount} / {totalCount}
            </div>
            <div className="achievement-label">Achievements Unlocked</div>
          </div>
          <div className="achievement-progress-bar">
            <div 
              className="achievement-progress-fill"
              style={{ width: `${(unlockedCount / totalCount) * 100}%` }}
            />
          </div>
        </div>

        <div className="achievements-grid">
          {achievements.map(achievement => {
            const isUnlocked = progress.achievements.includes(achievement.id);
            
            return (
              <div 
                key={achievement.id} 
                className={`achievement-card ${isUnlocked ? 'unlocked' : 'locked'}`}
              >
                <div className="achievement-icon-wrapper">
                  {isUnlocked ? (
                    <div className="achievement-icon-unlocked">
                      {achievement.icon}
                    </div>
                  ) : (
                    <div className="achievement-icon-locked">
                      <Lock size={32} />
                    </div>
                  )}
                </div>
                <div className="achievement-info">
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <p className="achievement-description">{achievement.description}</p>
                  {!isUnlocked && (
                    <div className="achievement-requirement">
                      {getRequirementText(achievement.requirement, progress)}
                    </div>
                  )}
                </div>
                {isUnlocked && (
                  <div className="achievement-unlocked-badge">
                    <span>✓</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {unlockedCount === totalCount && (
          <div className="all-achievements-unlocked">
            <div className="celebration-icon">🎊</div>
            <h2>Congratulations!</h2>
            <p>You've unlocked all achievements! You're truly ready for the exam!</p>
          </div>
        )}
      </div>
    </div>
  );
}

function getRequirementText(requirement, progress) {
  switch (requirement.type) {
    case 'quizzes_completed':
      return `Complete ${requirement.value} quiz${requirement.value > 1 ? 'zes' : ''}`;
    case 'perfect_score':
      return `Get ${requirement.value} perfect score${requirement.value > 1 ? 's' : ''}`;
    case 'streak':
      return `Study for ${requirement.value} days in a row`;
    case 'topics_completed':
      return `Complete all ${requirement.value} topics`;
    case 'fast_quiz':
      return `Complete a quiz in under ${requirement.value / 60} minutes`;
    case 'all_topics_80':
      return 'Score 80%+ on all topics';
    default:
      return 'Complete the requirement';
  }
}

export default Achievements;

