# 🚀 Quick Deployment Guide

Deploy your exam prep app to GitHub Pages in 3 steps!

## 🤖 Automated Setup (Easiest!)

Run the setup script that does everything for you:

```bash
cd "/Users/andreas/Documents/Dokumenter – MacBook Air/UIO/master/IN4050/IN4050-exam-prep"
./setup-and-deploy.sh
```

This script will:
- ✅ Initialize git
- ✅ Commit all files
- ✅ Set up GitHub remote
- ✅ Push to GitHub
- ✅ Update config if needed

Then just enable GitHub Pages (Step 2 below) and you're done!

---

## 📋 Manual Setup

If you prefer to do it manually:

## Step 1: Push to GitHub

```bash
# Navigate to project root
cd "/Users/andreas/Documents/Dokumenter – MacBook Air/UIO/master/IN4050/IN4050-exam-prep"

# Initialize git (if needed)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: IN4050 Exam Prep App with GitHub Pages deployment"

# Add your GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/IN4050-exam-prep.git

# Push to GitHub
git push -u origin main
```

If `main` doesn't work, try `master`:
```bash
git push -u origin master
```

## Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Source**, select **GitHub Actions**
5. Save

## Step 3: Wait & Access

GitHub Actions will automatically build and deploy your app (takes 1-2 minutes).

Your app will be live at:
```
https://YOUR_USERNAME.github.io/IN4050-exam-prep/
```

## ✅ Verification

1. Go to your repo's **Actions** tab
2. You should see a "Deploy to GitHub Pages" workflow
3. Green ✅ = Success! Your app is live
4. Red ❌ = Check logs for errors

## 🔄 Future Updates

Just push changes and GitHub Actions will auto-deploy:

```bash
git add .
git commit -m "Your changes"
git push
```

## ⚠️ Important Notes

**If your repository name is different:**
1. Open `exam-prep-app/vite.config.js`
2. Change `base: '/IN4050-exam-prep/'` to match your repo name
3. Example: repo `my-app` → `base: '/my-app/'`

**Repository must be public** (unless you have GitHub Pro)

## 📖 Full Documentation

See [DEPLOYMENT.md](DEPLOYMENT.md) for complete details, troubleshooting, and advanced options.

---

That's it! Your exam prep app will be deployed and accessible worldwide! 🎉

