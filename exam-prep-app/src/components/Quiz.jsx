import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { topics, achievements } from '../data/curriculum';
import { CheckCircle, XCircle, ArrowLeft, ArrowRight, Home, Save } from 'lucide-react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import './Quiz.css';

// Helper to shuffle array
const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

function Quiz({ mode, progress, updateProgress }) {
  const { topicId } = useParams();
  const navigate = useNavigate();
  
  // Generate a unique ID for this quiz session context
  const quizContextId = mode || `topic_${topicId}`;

  // State
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [quizComplete, setQuizComplete] = useState(false);
  const [startTime] = useState(Date.now());
  const [quizTopic, setQuizTopic] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize or Resume Quiz
  useEffect(() => {
    const initializeQuiz = () => {
      let rawQuestions = [];
      let topicData = null;

      // 1. Determine Source Questions & Topic Data
      if (mode === 'random') {
        const allQuestions = topics.flatMap(t => t.questions.map(q => ({ ...q, topicId: t.id })));
        rawQuestions = shuffleArray(allQuestions).slice(0, 15);
        topicData = { title: "Random Quiz", icon: "🎲", color: "#10b981", id: "random" };
      } else if (mode === 'mistakes') {
        const incorrectIds = progress.incorrectQuestions || [];
        if (incorrectIds.length > 0) {
          incorrectIds.forEach(item => {
            const t = topics.find(top => top.id === item.topicId);
            if (t) {
              const q = t.questions.find(ques => ques.id === item.questionId);
              if (q) rawQuestions.push({ ...q, topicId: t.id });
            }
          });
        }
        topicData = { title: "Mistakes Review", icon: "⚠️", color: "#f97316", id: "mistakes" };
      } else {
        const t = topics.find(top => top.id === parseInt(topicId));
        if (t) {
          rawQuestions = [...t.questions].map(q => ({ ...q, topicId: t.id }));
          topicData = t;
        }
      }

      if (!topicData) {
        setIsLoading(false);
        return; 
      }
      setQuizTopic(topicData);

      // 2. Check for Active Session to Resume
      // Only resume if NOT mistakes mode (mistakes should probably be fresh/dynamic)
      // Actually, resuming mistakes is fine too.
      const savedSession = progress.activeQuizzes?.[quizContextId];

      if (savedSession && savedSession.questions && savedSession.questions.length > 0) {
        // Restore session
        setQuestions(savedSession.questions);
        setCurrentQuestionIndex(savedSession.currentQuestionIndex || 0);
        setAnswers(savedSession.answers || []);
      } else {
        // Start New Session
        if (rawQuestions.length > 0) {
          // Shuffle questions order (unless it's topic mode where user might expect order, but user requested random)
          // User asked for randomization of questions AND options.
          const shuffledQuestions = shuffleArray(rawQuestions).map(q => {
            // Create shuffled options with mapping to original index
            const optionsWithIndex = q.options.map((opt, idx) => ({ text: opt, originalIndex: idx }));
            const shuffledOptions = shuffleArray(optionsWithIndex);
            return {
              ...q,
              shuffledOptions // Store this structure to use for rendering
            };
          });
          setQuestions(shuffledQuestions);
        } else {
          setQuestions([]);
        }
        setCurrentQuestionIndex(0);
        setAnswers([]);
      }
      setIsLoading(false);
    };

    initializeQuiz();
  }, [quizContextId, mode, topicId, progress.activeQuizzes, progress.incorrectQuestions]);

  // Save state when leaving component (unmount) is tricky with React Router.
  // Instead, we update the active session in progress on every significant state change.
  useEffect(() => {
    if (!isLoading && questions.length > 0 && !quizComplete) {
      const activeQuizzes = { ...(progress.activeQuizzes || {}) };
      activeQuizzes[quizContextId] = {
        questions, // Stores the specific shuffled order and options
        currentQuestionIndex,
        answers,
        lastUpdated: Date.now()
      };
      
      // We need to be careful not to trigger infinite loops.
      // This effect runs when index or answers change.
      // We only call updateProgress if data actually changed significantly? 
      // Actually, updateProgress in App.jsx is state-based, so calling it is fine, 
      // but we should debounce or check if it's different.
      // For now, let's rely on the fact that user action triggers these changes.
      // BUT: We cannot call updateProgress inside render loop or simple effect easily without risk.
      // Best approach: Update progress only when handling user actions (answer, next).
    }
  }, [/* Intentionally empty to not auto-save on render */]);

  // Helper function to render text with LaTeX formulas
  const renderMathText = (text) => {
    if (!text) return null;
    
    const parts = [];
    let remaining = text.trim();
    let key = 0;
    
    while (remaining.length > 0) {
      // Try to match block math first ($$...$$)
      const blockMatch = remaining.match(/^\$\$([\s\S]+?)\$\$/);
      if (blockMatch) {
        parts.push(<BlockMath key={key++} math={blockMatch[1].trim()} />);
        remaining = remaining.slice(blockMatch[0].length).trim();
        continue;
      }
      
      // Try to match inline math ($...$)
      // Use a more permissive pattern that handles the entire string if it's just a formula
      const inlineMatch = remaining.match(/^\$([^$\n]+?)\$/);
      if (inlineMatch) {
        parts.push(<InlineMath key={key++} math={inlineMatch[1].trim()} />);
        remaining = remaining.slice(inlineMatch[0].length).trim();
        continue;
      }
      
      // If no math found, look for the next dollar sign or end of string
      const nextDollar = remaining.indexOf('$');
      if (nextDollar === -1) {
        // No more dollar signs, add remaining text
        if (remaining.length > 0) {
          remaining.split('\n').forEach((line, i) => {
            if (i > 0) parts.push(<br key={`br-${key++}`} />);
            if (line.trim()) parts.push(<span key={key++}>{line}</span>);
          });
        }
        break;
      } else if (nextDollar > 0) {
        // There's text before the next dollar sign
        const textPart = remaining.slice(0, nextDollar);
        textPart.split('\n').forEach((line, i) => {
          if (i > 0) parts.push(<br key={`br-${key++}`} />);
          if (line.trim()) parts.push(<span key={key++}>{line}</span>);
        });
        remaining = remaining.slice(nextDollar);
      } else {
        // Dollar sign at start but no match - skip it and continue
        parts.push(<span key={key++}>$</span>);
        remaining = remaining.slice(1);
      }
    }
    
    return <>{parts}</>;
  };

  if (isLoading) return <div>Loading quiz...</div>;
  if (!quizTopic) return <div>Topic not found</div>;

  // Empty state for mistakes
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

  if (questions.length === 0) return <div>No questions found.</div>;

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  // Save Progress Helper
  const saveCurrentProgress = (newAnswers = answers, newIndex = currentQuestionIndex) => {
    const activeQuizzes = { ...(progress.activeQuizzes || {}) };
    activeQuizzes[quizContextId] = {
      questions,
      currentQuestionIndex: newIndex,
      answers: newAnswers,
      lastUpdated: Date.now()
    };
    updateProgress({ activeQuizzes });
  };

  const clearActiveQuiz = () => {
    const activeQuizzes = { ...(progress.activeQuizzes || {}) };
    delete activeQuizzes[quizContextId];
    // We don't update progress here immediately to avoid race conditions with final stats,
    // but completeQuiz handles the final update.
    return activeQuizzes;
  };

  const handleAnswerSelect = (shuffledIndex) => {
    if (showExplanation) return;
    setSelectedAnswer(shuffledIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    setShowExplanation(true);
    // Map shuffled index back to original index to check correctness
    const selectedOptionObj = currentQuestion.shuffledOptions[selectedAnswer];
    const isCorrect = selectedOptionObj.originalIndex === currentQuestion.correct;
    
    const newAnswers = [...answers, { questionId: currentQuestion.id, correct: isCorrect }];
    setAnswers(newAnswers);

    // Update incorrect questions list immediately
    let newIncorrect = [...(progress.incorrectQuestions || [])];
    const questionRef = { topicId: currentQuestion.topicId, questionId: currentQuestion.id };
    
    if (!isCorrect) {
      if (!newIncorrect.some(q => q.questionId === questionRef.questionId)) {
        newIncorrect.push(questionRef);
      }
    } else {
      newIncorrect = newIncorrect.filter(q => q.questionId !== questionRef.questionId);
    }

    // Update progress immediately (persists active state + mistakes)
    const activeQuizzes = { ...(progress.activeQuizzes || {}) };
    activeQuizzes[quizContextId] = {
      questions,
      currentQuestionIndex,
      answers: newAnswers,
      lastUpdated: Date.now()
    };

    updateProgress({
      incorrectQuestions: newIncorrect,
      activeQuizzes
    });
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      completeQuiz();
    } else {
      const nextIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIndex);
      setSelectedAnswer(null);
      setShowExplanation(false);
      
      // Save progress (position update)
      saveCurrentProgress(answers, nextIndex);
    }
  };

  const handleExit = () => {
    // Progress is already saved on submit/next.
    navigate('/');
  };

  const completeQuiz = () => {
    // The last answer is already in the answers array from handleSubmitAnswer
    // So we just count from answers array - no need to double-count the current question
    const correctCount = answers.filter(a => a.correct).length;
    
    const totalQuestions = questions.length;
    const scorePercentage = Math.round((correctCount / totalQuestions) * 100);
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    
    // Points
    const basePoints = correctCount * 10;
    const bonusPoints = scorePercentage >= 80 ? 20 : scorePercentage >= 60 ? 10 : 0;
    const speedBonus = timeSpent < 120 ? 15 : 0;
    const totalPoints = basePoints + bonusPoints + speedBonus;
    
    // Streak
    const today = new Date().toDateString();
    const lastDate = progress.lastStudyDate;
    let newStreak = progress.streak;
    if (lastDate !== today) {
      if (lastDate) {
        const last = new Date(lastDate);
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        if (last.toDateString() === yesterday.toDateString()) newStreak += 1;
        else newStreak = 1;
      } else newStreak = 1;
    }
    
    // Achievements
    const newAchievements = [...progress.achievements];
    if (progress.quizzesCompleted === 0 && !newAchievements.includes('first_quiz')) newAchievements.push('first_quiz');
    if (scorePercentage === 100 && !newAchievements.includes('topic_master')) newAchievements.push('topic_master');
    if (timeSpent < 120 && !newAchievements.includes('speed_demon')) newAchievements.push('speed_demon');
    if (newStreak >= 3 && !newAchievements.includes('dedicated_learner')) newAchievements.push('dedicated_learner');
    
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
    
    // Clear active quiz from progress since it's done
    const activeQuizzes = { ...(progress.activeQuizzes || {}) };
    delete activeQuizzes[quizContextId];

    updateProgress({
      completedTopics: newCompletedTopics,
      totalPoints: progress.totalPoints + totalPoints,
      streak: newStreak,
      lastStudyDate: today,
      quizzesCompleted: progress.quizzesCompleted + 1,
      achievements: newAchievements,
      topicScores: newTopicScores,
      activeQuizzes // Saves the deletion
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
                  const ach = achievements.find(a => a.id === achId);
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
          {currentQuestion.shuffledOptions.map((optionObj, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = optionObj.originalIndex === currentQuestion.correct;
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
                <span className="option-text">{renderMathText(optionObj.text)}</span>
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
          <div className={`explanation ${
            currentQuestion.shuffledOptions[selectedAnswer].originalIndex === currentQuestion.correct ? 'correct' : 'incorrect'
          }`}>
            <div className="explanation-header">
              {currentQuestion.shuffledOptions[selectedAnswer].originalIndex === currentQuestion.correct ? (
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
