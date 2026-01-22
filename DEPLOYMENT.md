# Deployment Guide for Urban Home Heroes Website

## Option 1: Vercel (Recommended - Best for Next.js)

Vercel is made by the creators of Next.js and offers the best free hosting for Next.js applications.

### Steps:

1. **Create a GitHub Account** (if you don't have one)
   - Go to https://github.com
   - Sign up for a free account

2. **Create a New Repository on GitHub**
   - Click the "+" icon in the top right
   - Select "New repository"
   - Name it: `urban-home-heroes`
   - Make it **Public** (required for free Vercel)
   - Don't initialize with README (we'll push existing code)
   - Click "Create repository"

3. **Initialize Git and Push to GitHub** (run these commands in your terminal):

```bash
cd "/Users/sheldonsteele/Zaila AI Designs/UrbanHomeHeroes"

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit - Urban Home Heroes website"

# Add GitHub repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/urban-home-heroes.git

# Push to GitHub
git branch -M main
git push -u origin main
```

4. **Deploy to Vercel**
   - Go to https://vercel.com
   - Sign up with your GitHub account (free)
   - Click "Add New Project"
   - Select your `urban-home-heroes` repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"
   - Wait 2-3 minutes for deployment
   - Your site will be live at: `https://urban-home-heroes.vercel.app`

### Vercel Free Tier Includes:
- ✅ Unlimited deployments
- ✅ Custom domain support
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic builds on git push
- ✅ Preview deployments for pull requests

---

## Option 2: Netlify (Alternative)

1. **Push to GitHub** (same steps as above)

2. **Deploy to Netlify**
   - Go to https://www.netlify.com
   - Sign up with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

---

## Option 3: Railway (Alternative)

1. **Push to GitHub** (same steps as above)

2. **Deploy to Railway**
   - Go to https://railway.app
   - Sign up with GitHub
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
   - Railway will auto-detect Next.js
   - Deploy!

---

## Quick Start Commands

If you need to set up git from scratch:

```bash
# Navigate to project
cd "/Users/sheldonsteele/Zaila AI Designs/UrbanHomeHeroes"

# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit"

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/urban-home-heroes.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## Important Notes:

1. **Environment Variables**: If you add any API keys or secrets later, add them in Vercel's dashboard under "Settings" → "Environment Variables"

2. **Custom Domain**: You can add a custom domain in Vercel settings (e.g., `urbanhomeheroes.com`)

3. **Automatic Updates**: Every time you push to GitHub, Vercel will automatically rebuild and deploy your site

4. **Preview URLs**: Vercel creates preview URLs for every commit, so you can test before merging

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment
