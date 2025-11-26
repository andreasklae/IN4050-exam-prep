#!/bin/bash

# IN4050 Exam Prep - Setup and Deploy Script
# This script helps you quickly set up git and deploy to GitHub Pages

echo "🎓 IN4050 Exam Prep - Deployment Setup"
echo "======================================"
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install git first."
    exit 1
fi

# Check if we're in the right directory
if [ ! -d "exam-prep-app" ]; then
    echo "❌ Error: exam-prep-app directory not found."
    echo "Please run this script from the IN4050-exam-prep root directory."
    exit 1
fi

echo "📝 This script will help you:"
echo "  1. Initialize git repository"
echo "  2. Add and commit all files"
echo "  3. Set up GitHub remote"
echo "  4. Push to GitHub"
echo ""

# Get GitHub username
read -p "Enter your GitHub username: " github_username

if [ -z "$github_username" ]; then
    echo "❌ GitHub username cannot be empty"
    exit 1
fi

# Get repository name
read -p "Enter repository name (default: IN4050-exam-prep): " repo_name
repo_name=${repo_name:-IN4050-exam-prep}

echo ""
echo "📋 Configuration:"
echo "  GitHub Username: $github_username"
echo "  Repository Name: $repo_name"
echo "  URL: https://github.com/$github_username/$repo_name"
echo ""

read -p "Is this correct? (y/n): " confirm

if [ "$confirm" != "y" ] && [ "$confirm" != "Y" ]; then
    echo "❌ Setup cancelled"
    exit 0
fi

echo ""
echo "🔧 Setting up git repository..."

# Initialize git if not already done
if [ ! -d ".git" ]; then
    git init
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already exists"
fi

# Update vite.config.js if repo name is different
if [ "$repo_name" != "IN4050-exam-prep" ]; then
    echo "📝 Updating vite.config.js with correct base path..."
    sed -i.bak "s|base: '/IN4050-exam-prep/'|base: '/$repo_name/'|g" exam-prep-app/vite.config.js
    rm -f exam-prep-app/vite.config.js.bak
    echo "✅ Updated base path to: /$repo_name/"
fi

# Add all files
echo "📦 Adding files to git..."
git add .

# Commit
echo "💾 Creating initial commit..."
git commit -m "Initial commit: IN4050 Exam Prep App with GitHub Pages deployment"

# Set branch to main
git branch -M main

# Add remote
echo "🔗 Adding GitHub remote..."
git remote remove origin 2>/dev/null || true
git remote add origin "https://github.com/$github_username/$repo_name.git"

echo ""
echo "✅ Setup complete!"
echo ""
echo "📤 Now push to GitHub with:"
echo "   git push -u origin main"
echo ""
echo "🌐 After pushing:"
echo "   1. Go to: https://github.com/$github_username/$repo_name"
echo "   2. Click Settings → Pages"
echo "   3. Under Source, select 'GitHub Actions'"
echo "   4. Your app will be live at:"
echo "      https://$github_username.github.io/$repo_name/"
echo ""
read -p "Would you like to push now? (y/n): " push_now

if [ "$push_now" = "y" ] || [ "$push_now" = "Y" ]; then
    echo ""
    echo "📤 Pushing to GitHub..."
    if git push -u origin main; then
        echo ""
        echo "🎉 Success! Your code is on GitHub!"
        echo ""
        echo "📋 Next steps:"
        echo "   1. Go to: https://github.com/$github_username/$repo_name/settings/pages"
        echo "   2. Under 'Source', select 'GitHub Actions'"
        echo "   3. Wait 1-2 minutes for deployment"
        echo "   4. Your app will be live at:"
        echo "      https://$github_username.github.io/$repo_name/"
        echo ""
        echo "👀 Check deployment status:"
        echo "   https://github.com/$github_username/$repo_name/actions"
        echo ""
    else
        echo ""
        echo "⚠️  Push failed. This usually means:"
        echo "   1. Repository doesn't exist on GitHub yet"
        echo "   2. You need to authenticate with GitHub"
        echo ""
        echo "📝 To fix:"
        echo "   1. Create repository on GitHub: https://github.com/new"
        echo "   2. Make sure it's named: $repo_name"
        echo "   3. Run: git push -u origin main"
        echo ""
    fi
else
    echo ""
    echo "📝 No problem! Push manually when ready:"
    echo "   git push -u origin main"
    echo ""
fi

echo "📚 For more help, see:"
echo "   - DEPLOY_QUICKSTART.md (quick guide)"
echo "   - DEPLOYMENT.md (full documentation)"
echo ""
echo "Good luck with your exam! 🎓"

