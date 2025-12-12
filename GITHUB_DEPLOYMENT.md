# Quick Guide: Deploy Your Portfolio to GitHub Pages

## Prerequisites
- GitHub account ([github.com](https://github.com))
- Git installed on your computer ([git-scm.com](https://git-scm.com/download/win))

## Quick Steps

### 1. Create GitHub Repository
- Go to GitHub.com → Click "+" → "New repository"
- Name it: `yourusername.github.io` (for custom domain) OR any name
- Make it **Public**
- Click "Create repository"

### 2. Open PowerShell in Your Project Folder
Right-click in your project folder → "Open in Terminal" or "Open PowerShell window here"

### 3. Run These Commands (Copy & Paste)

```powershell
# Initialize Git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial portfolio commit"

# Connect to GitHub (replace YOUR_USERNAME and YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

**When prompted:**
- Username: Your GitHub username
- Password: Use a Personal Access Token (see below)

### 4. Create Personal Access Token
1. GitHub → Your Profile → Settings
2. Developer settings → Personal access tokens → Tokens (classic)
3. Generate new token (classic)
4. Name: "Portfolio"
5. Check `repo` checkbox
6. Generate → **Copy the token** (use this as password)

### 5. Enable GitHub Pages
1. Go to your repository on GitHub
2. Settings → Pages (left sidebar)
3. Source: "Deploy from a branch"
4. Branch: `main`, Folder: `/ (root)`
5. Save

### 6. Access Your Site
Wait 2-5 minutes, then visit:
- `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`
- OR if named `username.github.io`: `https://YOUR_USERNAME.github.io`

## Updating Your Site

After making changes:

```powershell
git add .
git commit -m "Updated portfolio"
git push
```

Site updates automatically in a few minutes!

## Need Help?
- Check the full README.md for detailed instructions
- GitHub Docs: https://docs.github.com

