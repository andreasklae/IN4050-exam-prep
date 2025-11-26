# 🎓 IN4050 Exam Prep - AI & Machine Learning Study App

An engaging, gamified React application designed to help you master the IN4050 Introduction to Artificial Intelligence and Machine Learning curriculum and ace your exam!

## ✨ Features

### 📚 Comprehensive Curriculum Coverage
- **8 Topic Modules** covering all major course concepts:
  - Introduction to AI & Intelligence
  - Optimization & Search
  - Machine Learning Paradigms
  - Linear Models & Perceptron
  - Deep Learning & Neural Networks
  - Evolutionary Algorithms
  - Evaluation & Metrics
  - Unsupervised Learning

### 🎮 Gamification Elements
- **Points System**: Earn points for every correct answer
- **Level Progression**: Level up as you accumulate points (100 points per level)
- **Streak Tracking**: Maintain daily study streaks to stay motivated
- **Achievements**: Unlock 7 unique achievements by completing challenges

### 📊 Progress Tracking
- Real-time performance analytics
- Topic-by-topic score tracking
- Visual progress indicators
- Personalized study recommendations

### 🎯 Quiz Features
- **Multiple Choice Questions**: Exam-realistic question format
- **Instant Feedback**: Immediate explanations for every question
- **Score Bonuses**: Extra points for speed and accuracy
- **Progress Persistence**: Your progress is automatically saved locally

## 🚀 Getting Started

### 🌐 Online Access (Easiest)

The app is deployed to GitHub Pages and accessible at:
```
https://YOUR_USERNAME.github.io/IN4050-exam-prep/
```

No installation required - just open and start studying!

### 💻 Local Development

1. Navigate to the app directory:
```bash
cd exam-prep-app
```

2. Install dependencies (if not already done):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

### 🚀 Deployment

This app is configured for automatic deployment via GitHub Actions. Every push to the main/master branch will automatically deploy to GitHub Pages.

For deployment instructions, see [../DEPLOYMENT.md](../DEPLOYMENT.md)

## 🎨 How to Use

### Dashboard
- View your overall progress, level, points, and streak
- See all 8 topic modules with completion status
- Click on any topic to start a quiz

### Taking a Quiz
1. Select a topic from the dashboard
2. Read each question carefully
3. Choose your answer by clicking on an option
4. Click "Submit Answer" to see if you're correct
5. Read the explanation to reinforce your learning
6. Continue through all questions
7. View your results and earned points

### Progress Page
- View detailed statistics for all topics
- See your average score and completion rate
- Get personalized study recommendations
- Track your streak and level progress

### Achievements Page
- View all available achievements
- Track your unlocked achievements
- See requirements for locked achievements
- Aim to unlock all 7 achievements!

## 🏆 Achievements Guide

| Achievement | Requirement |
|------------|-------------|
| 🎯 **First Steps** | Complete your first quiz |
| 🏆 **Topic Master** | Get 100% on any topic |
| 🔥 **Dedicated Learner** | Study for 3 days in a row |
| 📚 **Knowledge Seeker** | Complete all 8 topics |
| ⚡ **Speed Demon** | Complete a quiz in under 2 minutes |
| 💎 **Perfectionist** | Get 3 perfect scores |
| 🎓 **Exam Ready** | Score 80%+ on all topics |

## 💡 Study Tips

1. **Start with topics you're least familiar with** - The app tracks which topics need improvement
2. **Maintain your streak** - Daily study habits lead to better retention
3. **Read all explanations** - Even for questions you get correct
4. **Aim for 80%+ on all topics** - This indicates exam readiness
5. **Retake quizzes** - Improve your scores and reinforce learning
6. **Use speed wisely** - While speed bonuses exist, understanding is more important

## 📱 Responsive Design

The app works great on:
- Desktop computers
- Tablets
- Mobile phones

## 🔒 Privacy & Data Storage

### Cross-Device Sync (Recommended)
The app supports **Firebase Firestore** for syncing progress across all devices and browsers. 

**Setup:** See [FIREBASE_SETUP.md](FIREBASE_SETUP.md) for 5-minute setup guide.

**Benefits:**
- ✅ Progress syncs across all devices
- ✅ Real-time updates
- ✅ Works offline (localStorage fallback)
- ✅ Free tier (50K reads/day, 20K writes/day)

### Local Storage Only (Fallback)
If Firebase isn't configured, the app automatically uses localStorage only. Progress will be stored per browser/device.

**Note:** To enable cross-device sync, you need to set up Firebase (see setup guide above).

## 🛠️ Tech Stack

- **React** - UI framework
- **Vite** - Build tool
- **React Router** - Navigation
- **Lucide React** - Icons
- **CSS3** - Styling with modern animations

## 📖 Curriculum Content

The app includes comprehensive questions covering:
- AI fundamentals and philosophy (Turing Test, Chinese Room, AGI)
- Optimization techniques (gradient descent, simulated annealing)
- Machine learning paradigms (supervised, unsupervised, reinforcement)
- Classification algorithms (perceptron, linear regression, logistic regression)
- Deep learning (CNNs, RNNs, backpropagation, embeddings)
- Evolutionary algorithms (genetic algorithms, selection, crossover)
- Evaluation metrics (precision, recall, F1, ROC curves)
- Unsupervised learning (clustering, PCA, autoencoders)

## 🎯 Exam Preparation Strategy

1. **Week 1-2**: Complete all topics at least once
2. **Week 3**: Focus on topics scoring below 70%
3. **Week 4**: Aim for 80%+ on all topics
4. **Final Week**: Retake all quizzes, maintain your streak, unlock all achievements

## 🐛 Troubleshooting

**Progress not saving?**
- Ensure your browser allows localStorage
- Don't use private/incognito mode

**App not loading?**
- Check that you're using a modern browser (Chrome, Firefox, Safari, Edge)
- Clear browser cache and reload

**Want to reset progress?**
- Open browser DevTools (F12)
- Go to Application/Storage tab
- Find localStorage
- Delete the 'examPrepProgress' key

## 📝 License

This educational tool is created for students of IN4050 at UiO. Feel free to use and modify for your studies.

## 🎉 Good Luck!

Remember: Consistent practice with this app, combined with your lecture notes and assignments, will set you up for success on the exam. You've got this! 💪

---

Made with ❤️ for IN4050 students
