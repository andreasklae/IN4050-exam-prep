# 🔥 Firebase Setup Guide - Cross-Device Progress Sync

This guide will help you set up Firebase Firestore so your progress syncs across all devices and browsers.

## Why Firebase?

- ✅ **Free tier** - Generous free quota (50K reads/day, 20K writes/day)
- ✅ **Real-time sync** - Changes appear instantly on all devices
- ✅ **No backend code** - Everything runs client-side
- ✅ **Secure** - Built-in security rules
- ✅ **Simple setup** - 5 minutes to configure

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add project"** or **"Create a project"**
3. Enter project name: `in4050-exam-prep` (or any name you like)
4. Click **Continue**
5. **Disable Google Analytics** (optional, not needed for this)
6. Click **Create project**
7. Wait for project creation, then click **Continue**

## Step 2: Create Firestore Database

1. In your Firebase project, click **Firestore Database** in the left menu
2. Click **"Create database"**
3. Select **"Start in test mode"** (we'll secure it later)
4. Choose a **location** (pick closest to you, e.g., `europe-west` or `us-central`)
5. Click **Enable**

## Step 3: Get Your Config

1. Click the **gear icon** ⚙️ next to "Project Overview"
2. Select **"Project settings"**
3. Scroll down to **"Your apps"** section
4. Click the **Web icon** `</>`
5. Register app:
   - App nickname: `Exam Prep App` (or any name)
   - **Don't check** "Also set up Firebase Hosting"
   - Click **Register app**
6. Copy the `firebaseConfig` object that appears

It will look like this:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

## Step 4: Add Config to Your App

1. Open `exam-prep-app/src/config/firebase.js`
2. Replace the placeholder values with your actual config:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_ACTUAL_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

3. Save the file

## Step 5: Set Up Security Rules (Important!)

1. In Firebase Console, go to **Firestore Database**
2. Click on **"Rules"** tab
3. Replace the rules with this:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read/write access to users collection
    match /users/{userId} {
      allow read, write: if true; // Public access for simplicity
    }
  }
}
```

4. Click **Publish**

**Note:** These rules allow public read/write. For production, you'd want to add authentication, but for a simple two-user app, this is fine.

## Step 6: Test It!

1. Build and deploy your app:
   ```bash
   cd exam-prep-app
   npm run build
   git add .
   git commit -m "Add Firebase sync"
   git push
   ```

2. Open your app on two different devices/browsers
3. Select the same user (John or Andreas) on both
4. Complete a quiz on one device
5. Refresh the other device - progress should sync! ✨

## How It Works

### Data Flow:
1. **Local First**: Progress saves to localStorage immediately (fast, works offline)
2. **Cloud Sync**: Progress also saves to Firestore (syncs across devices)
3. **Real-time Updates**: When you open the app, it listens for changes from other devices
4. **Merge Strategy**: If there's a conflict, localStorage takes precedence (most recent local changes win)

### Storage Structure:
```
Firestore Collection: "users"
  ├── Document: "john"
  │   └── Fields: completedTopics, totalPoints, level, streak, etc.
  └── Document: "andreas"
      └── Fields: completedTopics, totalPoints, level, streak, etc.
```

## Troubleshooting

### Progress Not Syncing?

1. **Check Firebase Config**
   - Make sure all values in `firebase.js` are correct
   - No quotes around placeholder text

2. **Check Browser Console**
   - Open DevTools (F12)
   - Look for Firebase errors
   - Check Network tab for Firestore requests

3. **Check Firestore Rules**
   - Rules should allow read/write
   - Make sure you clicked "Publish"

4. **Check Internet Connection**
   - Firestore requires internet
   - App works offline with localStorage, but won't sync

### Still Not Working?

- **Fallback Mode**: If Firebase isn't configured, the app automatically falls back to localStorage only
- **Check Console**: Look for warnings like "Firebase not configured"
- **Test Locally**: Run `npm run dev` and check console for errors

## Free Tier Limits

Firebase Free Tier includes:
- **50,000 reads/day** - More than enough for two users
- **20,000 writes/day** - Plenty for quiz completions
- **1 GB storage** - Way more than needed

You won't hit these limits with normal usage!

## Security Note

The current setup allows public read/write. For a private app with just two users, this is fine. If you want to add authentication later:

1. Enable Firebase Authentication
2. Update security rules to require auth
3. Update the app to sign in users

But for now, the simple public access works perfectly!

## Next Steps

Once set up:
- ✅ Progress syncs automatically
- ✅ Works across all devices
- ✅ Real-time updates
- ✅ Offline support (localStorage fallback)

**You're all set!** Your progress will now sync across all your devices! 🎉

