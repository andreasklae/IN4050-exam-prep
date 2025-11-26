# 👥 User System Guide

## Overview

The app now supports **two users: John and Andreas**. Each user has their own separate progress tracking stored locally in the browser.

## How It Works

### Simple Selection
- When you first open the app, you'll see a user selection screen
- Click on **John** or **Andreas** to select your profile
- Your choice is saved in the browser (localStorage)

### Separate Progress
- Each user has completely separate:
  - ✅ Quiz scores
  - ✅ Points and levels
  - ✅ Streaks
  - ✅ Achievements
  - ✅ Topic completions
  - ✅ All progress data

### Data Storage
- Progress is stored in browser localStorage
- Format: `examPrepProgress_john` and `examPrepProgress_andreas`
- No server needed - everything is local to your browser
- Works offline after first load

## Switching Users

### From Dashboard
- Click the **user badge** in the top right corner
- Click the **switch icon** (↩️) to switch users
- You'll return to the user selection screen

### From Other Pages
- Click the **"Switch"** button in the page header
- Returns to user selection screen

## Features

### ✅ What's Shared
- The curriculum and questions (same for everyone)
- The app interface and features

### ✅ What's Separate
- All progress data
- Scores and achievements
- Study streaks
- Points and levels

## Accessing from Different Devices

### Same Browser
- If you use the same browser on different devices, progress is separate per device
- Each browser stores its own localStorage

### Different Browsers
- Chrome, Firefox, Safari, etc. each have separate storage
- Progress in one browser doesn't affect another

### Private/Incognito Mode
- Progress is temporary and cleared when you close the window
- Use normal browsing mode for persistent progress

## How to Use

1. **First Time**
   - Open the app
   - Select "John" or "Andreas"
   - Start studying!

2. **Returning**
   - App remembers your last selection
   - Automatically loads your progress

3. **Switching**
   - Click switch button when needed
   - Select the other user
   - Their progress loads automatically

## Technical Details

### Storage Keys
- `examPrepUser` - Current selected user ("john" or "andreas")
- `examPrepProgress_john` - John's progress data
- `examPrepProgress_andreas` - Andreas's progress data

### Data Structure
Each user's progress includes:
```javascript
{
  completedTopics: {},
  totalPoints: 0,
  level: 1,
  streak: 0,
  lastStudyDate: null,
  quizzesCompleted: 0,
  achievements: [],
  topicScores: {}
}
```

## Tips

- ✅ **Consistent Device**: Use the same device/browser for best experience
- ✅ **Clear Names**: Easy to see who you are from the dashboard
- ✅ **Quick Switch**: Switch users anytime with one click
- ✅ **No Conflicts**: Each user's data is completely separate

## Troubleshooting

### Progress Not Showing
- Make sure you selected a user
- Check that you're using the same browser
- Clear browser cache if needed

### Want to Reset Progress
- Open browser DevTools (F12)
- Go to Application/Storage → Local Storage
- Delete the progress key for that user:
  - `examPrepProgress_john` or
  - `examPrepProgress_andreas`

### Switch Not Working
- Try refreshing the page
- Clear browser cache
- Check browser console for errors

---

**Simple, clean, and effective!** Each user can track their own learning journey independently. 🎓

