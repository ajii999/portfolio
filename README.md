# Personal Portfolio Website

A modern, responsive personal portfolio website featuring Home, About, Contact Info, and Photos pages.

## Features

- 🏠 **Home Page** - Welcome section with hero content and feature highlights
- 👤 **About Page** - Personal information, skills, and journey timeline
- 📧 **Contact Page** - Contact information and message form
- 📸 **Photos Page** - Interactive photo gallery with filtering

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- JavaScript (Vanilla JS)
- Responsive Design

## Getting Started

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! No build process required.

## File Structure

```
portfolio/
├── index.html      # Home page
├── about.html      # About page
├── contact.html    # Contact page
├── photos.html     # Photos page
├── styles.css      # All styling
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Customization

### Update Personal Information

1. **About Page** (`about.html`):
   - Replace `[Your Name]` with your actual name
   - Update the bio and skills sections
   - Modify the timeline with your own journey

2. **Contact Page** (`contact.html`):
   - Update email, phone, location
   - Add your LinkedIn and GitHub profile links

3. **Home Page** (`index.html`):
   - Customize the hero section text
   - Update the feature cards to match your skills

4. **Photos Page** (`photos.html`):
   - Replace photo placeholders with your actual images
   - Update photo titles and descriptions

### Add Your Photos

To add your own photos to the Photos page:

1. Create an `images` folder in your project directory
2. Add your image files to the `images` folder
3. In `photos.html`, replace the photo placeholders with:
   ```html
   <img src="images/your-photo.jpg" alt="Description">
   ```

### Change Colors

Edit the CSS variables in `styles.css` at the top of the file:

```css
:root {
    --primary-color: #6366f1;    /* Change this */
    --secondary-color: #8b5cf6;  /* Change this */
    --accent-color: #ec4899;     /* Change this */
}
```

## Deployment to GitHub Pages

Follow the instructions below to deploy your portfolio to GitHub Pages.

---

# How to Push Your Portfolio to GitHub

## Step 1: Create a GitHub Account

If you don't have a GitHub account:
1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Follow the registration process

## Step 2: Create a New Repository

1. Log in to GitHub
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `my-portfolio` or `username.github.io`)
   - **Important**: If you want your site at `username.github.io`, name the repo exactly `username.github.io`
5. Make it **Public** (required for free GitHub Pages)
6. **DO NOT** initialize with README, .gitignore, or license (we already have files)
7. Click "Create repository"

## Step 3: Install Git (if not already installed)

1. Download Git from [git-scm.com](https://git-scm.com/download/win)
2. Install it with default settings
3. Restart your terminal/command prompt after installation

## Step 4: Initialize Git in Your Project Folder

Open PowerShell or Command Prompt in your project folder and run:

```bash
# Navigate to your project folder (if not already there)
cd "C:\Users\rosal\OneDrive\Desktop\ajilon final project"

# Initialize Git repository
git init

# Add all files to Git
git add .

# Create your first commit
git commit -m "Initial commit: Portfolio website"
```

## Step 5: Connect to GitHub and Push

1. Go back to your GitHub repository page
2. Copy the repository URL (it will look like: `https://github.com/yourusername/your-repo-name.git`)

3. In your terminal, run:

```bash
# Add GitHub as remote (replace with your actual repository URL)
git remote add origin https://github.com/yourusername/your-repo-name.git

# Rename your branch to 'main' (GitHub's default)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

4. You'll be prompted for your GitHub username and password
   - **Note**: Use a Personal Access Token instead of password
   - See below for how to create one

## Step 6: Create a Personal Access Token (if needed)

If GitHub asks for authentication:

1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name (e.g., "Portfolio Upload")
4. Select expiration (or "No expiration" for convenience)
5. Check the `repo` scope
6. Click "Generate token"
7. **Copy the token immediately** (you won't see it again!)
8. Use this token as your password when pushing

## Step 7: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"
7. Wait a few minutes, then visit: `https://yourusername.github.io/repository-name`

## Step 8: Future Updates

Whenever you make changes to your portfolio:

```bash
# Add all changes
git add .

# Commit with a message
git commit -m "Updated portfolio with new photos"

# Push to GitHub
git push
```

Your site will automatically update within a few minutes!

## Troubleshooting

### "Repository not found" error
- Make sure you've created the repository on GitHub first
- Check that the repository URL is correct
- Verify your GitHub username is correct

### "Authentication failed" error
- Use a Personal Access Token instead of password
- Make sure the token has `repo` permissions

### Site not loading
- Wait 5-10 minutes after enabling GitHub Pages
- Check the repository Settings → Pages to ensure it's enabled
- Make sure your repository is Public
- Verify `index.html` is in the root folder

### Need help?
- GitHub Docs: [docs.github.com](https://docs.github.com)
- GitHub Pages Guide: [pages.github.com](https://pages.github.com)

## License

This project is open source and available for personal use.

---

**Happy coding! 🚀**

