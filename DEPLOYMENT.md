# 🚀 Deployment Guide - GitHub Pages

This guide explains how to deploy the IN4050 Exam Prep app to GitHub Pages.

## 📋 Prerequisites

1. A GitHub account
2. Git installed on your computer
3. Your repository pushed to GitHub

## 🔧 Setup (One-Time)

### Step 1: Push to GitHub

If you haven't already, initialize git and push to GitHub:

```bash
# Navigate to the root directory
cd "/Users/andreas/Documents/Dokumenter – MacBook Air/UIO/master/IN4050/IN4050-exam-prep"

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: IN4050 Exam Prep App"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/IN4050-exam-prep.git

# Push to GitHub
git push -u origin main
```

**Note:** Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 2: Enable GitHub Pages

1. Go to your GitHub repository
2. Click on **Settings** (top right)
3. In the left sidebar, click **Pages**
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### Step 3: Update Vite Config (Already Done)

The `vite.config.js` has been configured with the correct base path:

```javascript
base: '/IN4050-exam-prep/'
```

**Important:** If your repository name is different, update this line to match:
- Repository: `my-exam-app` → `base: '/my-exam-app/'`
- Repository: `exam-prep` → `base: '/exam-prep/'`

## 🚀 Automatic Deployment (Recommended)

The app is configured to deploy automatically via GitHub Actions.

### How it Works

1. **Trigger:** Every push to `main` or `master` branch
2. **Process:** GitHub Actions automatically builds and deploys
3. **Result:** App is live at `https://YOUR_USERNAME.github.io/IN4050-exam-prep/`

### Workflow File

The deployment workflow is defined in `.github/workflows/deploy.yml`:

- ✅ Checks out the code
- ✅ Sets up Node.js 20
- ✅ Installs dependencies
- ✅ Builds the app
- ✅ Deploys to GitHub Pages

### Deploying

Simply push your changes:

```bash
git add .
git commit -m "Update exam prep app"
git push
```

GitHub Actions will automatically:
1. Build the app
2. Deploy to GitHub Pages
3. Make it live within 1-2 minutes

### Checking Deployment Status

1. Go to your GitHub repository
2. Click the **Actions** tab
3. See the latest workflow run
4. Green checkmark ✅ = Successfully deployed
5. Red X ❌ = Build failed (check logs for errors)

## 🔄 Manual Deployment (Alternative)

If you prefer manual deployment using gh-pages package:

### Install gh-pages

```bash
cd exam-prep-app
npm install --save-dev gh-pages
```

### Deploy Manually

```bash
cd exam-prep-app
npm run deploy
```

This will build and deploy to the `gh-pages` branch.

## 🌐 Accessing Your Deployed App

Once deployed, your app will be available at:

```
https://YOUR_USERNAME.github.io/IN4050-exam-prep/
```

Replace `YOUR_USERNAME` with your GitHub username.

## 🛠️ Troubleshooting

### Issue: 404 Error / Blank Page

**Solution 1:** Check the base path in `vite.config.js`
- It must match your repository name
- Example: If repo is `exam-prep`, use `base: '/exam-prep/'`

**Solution 2:** Ensure GitHub Pages source is set to "GitHub Actions"

### Issue: Build Fails in GitHub Actions

**Check:**
1. Look at the Actions tab for error messages
2. Ensure all dependencies are in `package.json`
3. Test the build locally: `cd exam-prep-app && npm run build`

### Issue: Changes Not Showing

**Solution:**
1. Hard refresh your browser (Ctrl+F5 or Cmd+Shift+R)
2. Clear browser cache
3. Wait 1-2 minutes for GitHub Pages to update

### Issue: Repository Name Changed

If you rename your repository:

1. Update `vite.config.js`:
   ```javascript
   base: '/NEW-REPO-NAME/'
   ```

2. Push the changes:
   ```bash
   git add vite.config.js
   git commit -m "Update base path for new repo name"
   git push
   ```

## 🔒 Environment Variables

This app doesn't use environment variables. All data is stored in:
- The curriculum data file (`src/data/curriculum.js`)
- Browser localStorage (user progress)

## 📊 Monitoring

### View Build Logs
- Go to **Actions** tab in GitHub
- Click on latest workflow run
- Click on job steps to see detailed logs

### Analytics
To add analytics:
1. Add Google Analytics or similar
2. Update `index.html` with tracking code
3. Push changes (will auto-deploy)

## 🔄 Updating the App

### Adding New Questions

1. Edit `exam-prep-app/src/data/curriculum.js`
2. Add questions to the appropriate topic
3. Commit and push:
   ```bash
   git add .
   git commit -m "Add new questions"
   git push
   ```
4. GitHub Actions will automatically redeploy

### Updating Styles

1. Edit the CSS files in `exam-prep-app/src/components/`
2. Commit and push
3. Auto-deployment will update the live site

## 🎯 Custom Domain (Optional)

To use a custom domain like `exam-prep.yourdomain.com`:

1. Add a file `exam-prep-app/public/CNAME` with your domain
2. Configure DNS records with your domain provider
3. In GitHub Settings > Pages, add your custom domain
4. Push changes - will auto-deploy

## 📝 Deployment Checklist

Before deploying:

- [ ] All tests pass locally
- [ ] App runs correctly with `npm run dev`
- [ ] Build succeeds with `npm run build`
- [ ] `vite.config.js` base path matches repository name
- [ ] All dependencies are in `package.json`
- [ ] GitHub Pages source set to "GitHub Actions"
- [ ] Repository is public (or you have GitHub Pro for private repos)

## 🚦 Production vs Development

### Development (Local)
```bash
cd exam-prep-app
npm run dev
```
- Runs on `localhost:5173`
- Hot reload enabled
- Detailed error messages

### Production (GitHub Pages)
```bash
git push
```
- Automatically deployed
- Optimized and minified
- Available worldwide

## 💡 Best Practices

1. **Test Locally First:** Always run `npm run build` locally before pushing
2. **Commit Messages:** Use clear commit messages for tracking changes
3. **Branch Strategy:** Use feature branches for major changes
4. **Monitor Actions:** Check the Actions tab after pushing
5. **Cache Issues:** If changes don't appear, clear browser cache

## 🎉 Success!

Once deployed, share your exam prep app with classmates:

```
https://YOUR_USERNAME.github.io/IN4050-exam-prep/
```

They can use it to study too! 📚

---

**Questions?** Check GitHub Actions logs or the repository's Issues tab.

