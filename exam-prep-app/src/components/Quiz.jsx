import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { topics } from '../data/curriculum';
import { CheckCircle, XCircle, ArrowLeft, ArrowRight, Home } from 'lucide-react';
import './Quiz.css';

function Quiz({ progress, updateProgress }) {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const topic = topics.find(t => t.id === parseInt(topicId));
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [quizComplete, setQuizComplete] = useState(false);
  const [startTime] = useState(Date.now());

  if (!topic) {
    return <div>Topic not found</div>;
  }

  const currentQuestion = topic.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === topic.questions.length - 1;

  const handleAnswerSelect = (index) => {
    if (showExplanation) return; // Prevent changing answer after submission
    setSelectedAnswer(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    setShowExplanation(true);
    const isCorrect = selectedAnswer === currentQuestion.correct;
    setAnswers([...answers, { questionId: currentQuestion.id, correct: isCorrect }]);
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      completeQuiz();
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const completeQuiz = () => {
    const correctCount = answers.filter(a => a.correct).length + 
                        (selectedAnswer === currentQuestion.correct ? 1 : 0);
    const totalQuestions = topic.questions.length;
    const scorePercentage = Math.round((correctCount / totalQuestions) * 100);
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    
    // Calculate points: base points + bonus for high score
    const basePoints = correctCount * 10;
    const bonusPoints = scorePercentage >= 80 ? 20 : scorePercentage >= 60 ? 10 : 0;
    const speedBonus = timeSpent < 120 ? 15 : 0;
    const totalPoints = basePoints + bonusPoints + speedBonus;
    
    // Update streak
    const today = new Date().toDateString();
    const lastDate = progress.lastStudyDate;
    let newStreak = progress.streak;
    
    if (lastDate !== today) {
      if (lastDate) {
        const last = new Date(lastDate);
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (last.toDateString() === yesterday.toDateString()) {
          newStreak += 1;
        } else {
          newStreak = 1;
        }
      } else {
        newStreak = 1;
      }
    }
    
    // Check for achievements
    const newAchievements = [...progress.achievements];
    
    // First quiz achievement
    if (progress.quizzesCompleted === 0 && !newAchievements.includes('first_quiz')) {
      newAchievements.push('first_quiz');
    }
    
    // Perfect score achievement
    if (scorePercentage === 100 && !newAchievements.includes('topic_master')) {
      newAchievements.push('topic_master');
    }
    
    // Speed demon
    if (timeSpent < 120 && !newAchievements.includes('speed_demon')) {
      newAchievements.push('speed_demon');
    }
    
    // Streak achievement
    if (newStreak >= 3 && !newAchievements.includes('dedicated_learner')) {
      newAchievements.push('dedicated_learner');
    }
    
    // Update progress
    const newCompletedTopics = { ...progress.completedTopics };
    newCompletedTopics[topic.id] = true;
    
    const newTopicScores = { ...progress.topicScores };
    newTopicScores[topic.id] = Math.max(newTopicScores[topic.id] || 0, scorePercentage);
    
    // Check if all topics completed
    if (Object.keys(newCompletedTopics).length === topics.length && 
        !newAchievements.includes('knowledge_seeker')) {
      newAchievements.push('knowledge_seeker');
    }
    
    // Check if all topics 80%+
    const allTopics80Plus = topics.every(t => (newTopicScores[t.id] || 0) >= 80);
    if (allTopics80Plus && !newAchievements.includes('exam_ready')) {
      newAchievements.push('exam_ready');
    }
    
    // Count perfect scores
    const perfectScores = Object.values(newTopicScores).filter(s => s === 100).length;
    if (perfectScores >= 3 && !newAchievements.includes('perfectionist')) {
      newAchievements.push('perfectionist');
    }
    
    updateProgress({
      completedTopics: newCompletedTopics,
      totalPoints: progress.totalPoints + totalPoints,
      streak: newStreak,
      lastStudyDate: today,
      quizzesCompleted: progress.quizzesCompleted + 1,
      achievements: newAchievements,
      topicScores: newTopicScores
    });
    
    setQuizComplete({ 
      score: scorePercentage, 
      correct: correctCount, 
      total: totalQuestions,
      points: totalPoints,
      timeSpent,
      newAchievements: newAchievements.filter(a => !progress.achievements.includes(a))
    });
  };

  if (quizComplete) {
    return (
      <div className="quiz-complete">
        <div className="complete-content">
          <div className="complete-header">
            <div className="complete-icon">
              {quizComplete.score >= 80 ? '🎉' : quizComplete.score >= 60 ? '👍' : '💪'}
            </div>
            <h1>Quiz Complete!</h1>
            <p className="topic-name">{topic.title}</p>
          </div>
          
          <div className="score-display">
            <div className="score-circle">
              <div className="score-value">{quizComplete.score}%</div>
              <div className="score-label">
                {quizComplete.correct} / {quizComplete.total} correct
              </div>
            </div>
          </div>
          
          <div className="quiz-stats">
            <div className="quiz-stat">
              <div className="stat-icon">⭐</div>
              <div className="stat-info">
                <div className="stat-value">+{quizComplete.points}</div>
                <div className="stat-label">Points Earned</div>
              </div>
            </div>
            <div className="quiz-stat">
              <div className="stat-icon">⏱️</div>
              <div className="stat-info">
                <div className="stat-value">{Math.floor(quizComplete.timeSpent / 60)}:{(quizComplete.timeSpent % 60).toString().padStart(2, '0')}</div>
                <div className="stat-label">Time</div>
              </div>
            </div>
          </div>
          
          {quizComplete.newAchievements.length > 0 && (
            <div className="new-achievements">
              <h3>🏆 New Achievements!</h3>
              <div className="achievement-list">
                {quizComplete.newAchievements.map(achId => {
                  const ach = require('../data/curriculum').achievements.find(a => a.id === achId);
                  return (
                    <div key={achId} className="achievement-item">
                      <span className="achievement-icon">{ach.icon}</span>
                      <span className="achievement-name">{ach.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          
          <div className="complete-actions">
            <button onClick={() => navigate('/')} className="btn-primary">
              <Home size={20} />
              Back to Dashboard
            </button>
            <button 
              onClick={() => window.location.reload()} 
              className="btn-secondary"
            >
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz" style={{ '--topic-color': topic.color }}>
      <div className="quiz-header">
        <button onClick={() => navigate('/')} className="back-btn">
          <ArrowLeft size={20} />
          Back
        </button>
        <div className="quiz-progress">
          <div className="progress-text">
            Question {currentQuestionIndex + 1} of {topic.questions.length}
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${((currentQuestionIndex + 1) / topic.questions.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="quiz-content">
        <div className="topic-badge" style={{ backgroundColor: topic.color }}>
          <span className="topic-icon">{topic.icon}</span>
          <span>{topic.title}</span>
        </div>

        <h2 className="question-text">{currentQuestion.question}</h2>

        <div className="options-list">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === currentQuestion.correct;
            const showStatus = showExplanation;
            
            let optionClass = 'option';
            if (isSelected) optionClass += ' selected';
            if (showStatus && isCorrect) optionClass += ' correct';
            if (showStatus && isSelected && !isCorrect) optionClass += ' incorrect';
            
            return (
              <button
                key={index}
                className={optionClass}
                onClick={() => handleAnswerSelect(index)}
                disabled={showExplanation}
              >
                <span className="option-letter">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="option-text">{option}</span>
                {showStatus && isCorrect && (
                  <CheckCircle className="option-icon" size={24} />
                )}
                {showStatus && isSelected && !isCorrect && (
                  <XCircle className="option-icon" size={24} />
                )}
              </button>
            );
          })}
        </div>

        {showExplanation && (
          <div className={`explanation ${selectedAnswer === currentQuestion.correct ? 'correct' : 'incorrect'}`}>
            <div className="explanation-header">
              {selectedAnswer === currentQuestion.correct ? (
                <>
                  <CheckCircle size={24} />
                  <span>Correct!</span>
                </>
              ) : (
                <>
                  <XCircle size={24} />
                  <span>Incorrect</span>
                </>
              )}
            </div>
            <p className="explanation-text">{currentQuestion.explanation}</p>
          </div>
        )}

        <div className="quiz-actions">
          {!showExplanation ? (
            <button 
              className="btn-primary"
              onClick={handleSubmitAnswer}
              disabled={selectedAnswer === null}
            >
              Submit Answer
            </button>
          ) : (
            <button 
              className="btn-primary"
              onClick={handleNextQuestion}
            >
              {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
              {!isLastQuestion && <ArrowRight size={20} />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quiz;

