# 🚀 Quick Deployment Guide - Make Your Portfolio Live!

## Option 1: Vercel CLI (Fastest - No GitHub Needed) ⚡

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```
(This will open your browser to login)

### Step 3: Deploy!
```bash
vercel
```
Follow the prompts:
- Set up and deploy? **Yes**
- Which scope? (Select your account)
- Link to existing project? **No**
- Project name? (Press Enter for default or type your name)
- Directory? (Press Enter - it's `./`)
- Override settings? **No**

### Step 4: Deploy to Production
```bash
vercel --prod
```

**Done!** You'll get a URL like: `https://your-portfolio.vercel.app`

---

## Option 2: Vercel via GitHub (Recommended - Auto Updates) 🌟

### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon → **New repository**
3. Name it: `portfolio` (or any name)
4. Make it **Public** (free hosting requires public repo)
5. Click **Create repository**

### Step 2: Push Your Code to GitHub

Run these commands in your terminal:

```bash
cd C:\Users\LENOVO\Desktop\resume\portfolio

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Portfolio website"

# Add your GitHub repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **Sign Up** (or Login if you have an account)
3. Click **Add New Project**
4. Click **Import Git Repository**
5. Select your GitHub repository (`portfolio`)
6. Click **Import**
7. Vercel will auto-detect settings:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
8. Click **Deploy**

**Done!** Your site will be live in 1-2 minutes at: `https://your-portfolio.vercel.app`

**Bonus:** Every time you push to GitHub, Vercel automatically updates your site!

---

## Option 3: Netlify (Alternative) 🌐

### Via Netlify CLI:
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

### Via Netlify Dashboard:
1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login
3. Click **Add new site** → **Import an existing project**
4. Connect GitHub and select your repo
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click **Deploy site**

---

## ✅ Before Deploying - Quick Checklist

1. **Update your contact info** in `src/data/personalInfo.ts`:
   - Your real email
   - Your LinkedIn URL
   - Your GitHub URL

2. **Test the build locally**:
   ```bash
   npm run build
   npm run preview
   ```

3. **Make sure resume PDF is in `public/` folder**

---

## 🎉 After Deployment

- Your site will be live at: `https://your-project.vercel.app`
- You can add a custom domain later (free on Vercel)
- Share your portfolio URL with employers!

---

## 🆘 Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
