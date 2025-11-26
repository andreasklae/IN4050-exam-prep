import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { topics } from '../data/curriculum';
import { CheckCircle, XCircle, ArrowLeft, ArrowRight, Home, Save } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import './Quiz.css';

function Quiz({ mode, progress, updateProgress }) {
  const { topicId } = useParams();
  const navigate = useNavigate();
  
  // State
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [quizComplete, setQuizComplete] = useState(false);
  const [startTime] = useState(Date.now());
  const [quizTopic, setQuizTopic] = useState(null);

  // Initialize quiz based on mode
  useEffect(() => {
    if (mode === 'random') {
      // Random Quiz: Select 15 random questions from all topics
      const allQuestions = topics.flatMap(t => t.questions.map(q => ({ ...q, topicId: t.id })));
      const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
      setQuestions(shuffled.slice(0, 15));
      setQuizTopic({
        title: "Random Quiz",
        icon: "🎲",
        color: "#10b981"
      });
    } else if (mode === 'mistakes') {
      // Mistakes Review: Load incorrect questions
      const incorrectIds = progress.incorrectQuestions || [];
      
      if (incorrectIds.length === 0) {
        setQuestions([]); // Will trigger empty state
      } else {
        const mistakesList = [];
        // Find question objects for the stored IDs
        incorrectIds.forEach(item => {
          const topic = topics.find(t => t.id === item.topicId);
          if (topic) {
            const question = topic.questions.find(q => q.id === item.questionId);
            if (question) {
              mistakesList.push({ ...question, topicId: topic.id });
            }
          }
        });
        setQuestions(mistakesList);
      }
      
      setQuizTopic({
        title: "Mistakes Review",
        icon: "⚠️",
        color: "#f97316"
      });
    } else {
      // Normal Topic Quiz
      const topic = topics.find(t => t.id === parseInt(topicId));
      if (topic) {
        setQuestions(topic.questions.map(q => ({ ...q, topicId: topic.id })));
        setQuizTopic(topic);
      }
    }
  }, [mode, topicId, progress.incorrectQuestions]);

  // Helper function to render text with LaTeX formulas
  const renderMathText = (text) => {
    if (!text) return null;
    
    const parts = [];
    let remaining = text;
    let key = 0;
    
    while (remaining.length > 0) {
      const blockMatch = remaining.match(/^\$\$([\s\S]+?)\$\$/);
      if (blockMatch) {
        parts.push(<BlockMath key={key++} math={blockMatch[1].trim()} />);
        remaining = remaining.slice(blockMatch[0].length);
        continue;
      }
      
      const inlineMatch = remaining.match(/^\$([^$]+?)\$/);
      if (inlineMatch) {
        parts.push(<InlineMath key={key++} math={inlineMatch[1]} />);
        remaining = remaining.slice(inlineMatch[0].length);
        continue;
      }
      
      const nextDollar = remaining.search(/\$/);
      const textEnd = nextDollar === -1 ? remaining.length : nextDollar;
      if (textEnd > 0) {
        const textPart = remaining.slice(0, textEnd);
        textPart.split('\n').forEach((line, i) => {
          if (i > 0) parts.push(<br key={`br-${key++}`} />);
          if (line) parts.push(<span key={key++}>{line}</span>);
        });
        remaining = remaining.slice(textEnd);
      } else {
        break;
      }
    }
    
    return <>{parts}</>;
  };

  if (!quizTopic) return <div>Loading...</div>;

  // Handle empty state for mistakes mode
  if (questions.length === 0 && mode === 'mistakes') {
    return (
      <div className="quiz-complete">
        <div className="complete-content">
          <div className="complete-header">
            <div className="complete-icon">🎉</div>
            <h1>Great Job!</h1>
            <p>You have no incorrect questions to review.</p>
          </div>
          <button onClick={() => navigate('/')} className="btn-primary">
            <Home size={20} />
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  if (questions.length === 0) return <div>Topic not found</div>;

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleAnswerSelect = (index) => {
    if (showExplanation) return;
    setSelectedAnswer(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    setShowExplanation(true);
    const isCorrect = selectedAnswer === currentQuestion.correct;
    setAnswers([...answers, { questionId: currentQuestion.id, correct: isCorrect }]);

    // Update incorrect questions list immediately
    let newIncorrect = [...(progress.incorrectQuestions || [])];
    const questionRef = { topicId: currentQuestion.topicId, questionId: currentQuestion.id };
    
    if (!isCorrect) {
      // Add to mistakes if not already there
      if (!newIncorrect.some(q => q.questionId === questionRef.questionId)) {
        newIncorrect.push(questionRef);
      }
    } else {
      // Remove from mistakes if correct
      newIncorrect = newIncorrect.filter(q => q.questionId !== questionRef.questionId);
    }

    // Update progress immediately for this question result
    updateProgress({
      incorrectQuestions: newIncorrect
    });
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

  const handleExit = () => {
    // Save any progress made so far is already handled by handleSubmitAnswer
    navigate('/');
  };

  const completeQuiz = () => {
    const correctCount = answers.filter(a => a.correct).length + 
                        (selectedAnswer === currentQuestion.correct ? 1 : 0);
    const totalQuestions = questions.length;
    const scorePercentage = Math.round((correctCount / totalQuestions) * 100);
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    
    // Calculate points
    const basePoints = correctCount * 10;
    const bonusPoints = scorePercentage >= 80 ? 20 : scorePercentage >= 60 ? 10 : 0;
    const speedBonus = timeSpent < 120 ? 15 : 0;
    const totalPoints = basePoints + bonusPoints + speedBonus;
    
    // Streak logic
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
    
    // Achievements logic
    const newAchievements = [...progress.achievements];
    if (progress.quizzesCompleted === 0 && !newAchievements.includes('first_quiz')) newAchievements.push('first_quiz');
    if (scorePercentage === 100 && !newAchievements.includes('topic_master')) newAchievements.push('topic_master');
    if (timeSpent < 120 && !newAchievements.includes('speed_demon')) newAchievements.push('speed_demon');
    if (newStreak >= 3 && !newAchievements.includes('dedicated_learner')) newAchievements.push('dedicated_learner');
    
    // Only update topic completion/scores for normal quizzes
    const newCompletedTopics = { ...progress.completedTopics };
    const newTopicScores = { ...progress.topicScores };

    if (!mode) {
      newCompletedTopics[quizTopic.id] = true;
      newTopicScores[quizTopic.id] = Math.max(newTopicScores[quizTopic.id] || 0, scorePercentage);
      
      if (Object.keys(newCompletedTopics).length === topics.length && !newAchievements.includes('knowledge_seeker')) {
        newAchievements.push('knowledge_seeker');
      }
      if (topics.every(t => (newTopicScores[t.id] || 0) >= 80) && !newAchievements.includes('exam_ready')) {
        newAchievements.push('exam_ready');
      }
      if (Object.values(newTopicScores).filter(s => s === 100).length >= 3 && !newAchievements.includes('perfectionist')) {
        newAchievements.push('perfectionist');
      }
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
            <p className="topic-name">{quizTopic.title}</p>
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
    <div className="quiz" style={{ '--topic-color': quizTopic.color }}>
      <div className="quiz-header">
        <button onClick={handleExit} className="back-btn" title="Exit and save progress">
          <ArrowLeft size={20} />
          Exit
        </button>
        <div className="quiz-progress">
          <div className="progress-text">
            Question {currentQuestionIndex + 1} of {questions.length}
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="quiz-content">
        <div className="topic-badge" style={{ backgroundColor: quizTopic.color }}>
          <span className="topic-icon">{quizTopic.icon}</span>
          <span>{quizTopic.title}</span>
        </div>

        <h2 className="question-text">{renderMathText(currentQuestion.question)}</h2>

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
                <span className="option-text">{renderMathText(option)}</span>
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
