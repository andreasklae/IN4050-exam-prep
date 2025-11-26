# ⚡ Quick Firebase Setup (5 Minutes)

## 1. Create Firebase Project
- Go to https://console.firebase.google.com/
- Click "Add project"
- Name it `in4050-exam-prep`
- Skip analytics (optional)

## 2. Create Firestore Database
- Click "Firestore Database" in left menu
- Click "Create database"
- Select "Start in test mode"
- Choose location (e.g., `europe-west`)
- Click "Enable"

## 3. Get Your Config
- Click gear icon ⚙️ → "Project settings"
- Scroll to "Your apps"
- Click Web icon `</>`
- Register app (name: "Exam Prep")
- Copy the `firebaseConfig` object

## 4. Add to App
Open `src/config/firebase.js` and replace:

```javascript
const firebaseConfig = {
  apiKey: "PASTE_YOUR_API_KEY",
  authDomain: "PASTE_YOUR_AUTH_DOMAIN",
  projectId: "PASTE_YOUR_PROJECT_ID",
  storageBucket: "PASTE_YOUR_STORAGE_BUCKET",
  messagingSenderId: "PASTE_YOUR_SENDER_ID",
  appId: "PASTE_YOUR_APP_ID"
};
```

## 5. Set Security Rules
- Go to Firestore → Rules tab
- Paste this:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if true;
    }
  }
}
```
- Click "Publish"

## 6. Deploy
```bash
git add .
git commit -m "Add Firebase sync"
git push
```

**Done!** Progress now syncs across all devices! 🎉

For detailed instructions, see [FIREBASE_SETUP.md](FIREBASE_SETUP.md)

