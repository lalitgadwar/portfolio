# Deployment Guide

This guide covers deploying your portfolio website to various platforms.

## 🚀 Quick Deploy Options

### Vercel (Recommended)

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy via CLI**:
   ```bash
   vercel
   ```

3. **Deploy via GitHub**:
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"

**Vercel automatically:**
- Detects Vite build configuration
- Sets build command: `npm run build`
- Sets output directory: `dist`
- Provides HTTPS and custom domains

### Netlify

1. **Via Netlify Dashboard**:
   - Push code to GitHub
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Configure:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

2. **Via Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify init
   netlify deploy --prod
   ```

### GitHub Pages

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://yourusername.github.io/portfolio"
   }
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select `gh-pages` branch
   - Save

### Cloudflare Pages

1. Push code to GitHub/GitLab
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Pages → Create a project
4. Connect repository
5. Configure:
   - Build command: `npm run build`
   - Build output directory: `dist`
6. Deploy

## 📝 Pre-Deployment Checklist

- [ ] Update `src/data/personalInfo.ts` with your actual:
  - Email address
  - LinkedIn URL
  - GitHub URL
  - Resume PDF path (ensure it's in `public/` folder)
- [ ] Test the build locally: `npm run build`
- [ ] Verify resume PDF is accessible
- [ ] Check all external links work
- [ ] Test dark/light mode toggle
- [ ] Verify responsive design on mobile
- [ ] Test contact form (if using email service)

## 🔧 Environment Variables

If you need environment variables (e.g., for contact form backend):

1. Create `.env` file:
   ```
   VITE_API_URL=your_api_url
   ```

2. Access in code:
   ```typescript
   import.meta.env.VITE_API_URL
   ```

3. Add to deployment platform's environment variables

## 📦 Build Optimization

The project is already optimized with:
- Code splitting (Vite handles this automatically)
- Tree shaking
- Minification
- Asset optimization

## 🌐 Custom Domain

### Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

### Netlify
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS

## 🔄 Continuous Deployment

Both Vercel and Netlify support automatic deployments:
- Every push to `main` branch triggers a new deployment
- Pull requests get preview deployments

## 📊 Performance Tips

1. **Optimize Images**: Use WebP format, compress images
2. **Lazy Loading**: Already implemented for components
3. **CDN**: Vercel/Netlify provide CDN automatically
4. **Caching**: Configure cache headers if needed

## 🐛 Troubleshooting

### Build Fails
- Check Node.js version (should be 18+)
- Run `npm install` to ensure dependencies are installed
- Check for TypeScript errors: `npm run build`

### Resume PDF Not Loading
- Ensure PDF is in `public/` folder
- Check file name matches `personalInfo.ts`
- Verify path starts with `/` (e.g., `/resume.pdf`)

### Styles Not Loading
- Ensure Tailwind CSS is properly configured
- Check `tailwind.config.js` content paths
- Verify `postcss.config.js` exists

### Dark Mode Not Working
- Check `ThemeContext` is wrapping App
- Verify localStorage is enabled
- Check browser console for errors
