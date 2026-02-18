# Quick Start Guide

Get your portfolio up and running in minutes!

## ⚡ Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📝 First Steps

1. **Update Your Information**
   - Edit `src/data/personalInfo.ts`:
     - Update email, LinkedIn, GitHub URLs
     - Verify resume PDF path
   
2. **Add Your Resume PDF**
   - Place your resume PDF in the `public/` folder
   - Update the filename in `src/data/personalInfo.ts` if different

3. **Customize Content**
   - `src/data/projects.ts` - Add/modify projects
   - `src/data/experience.ts` - Update work experience
   - `src/data/skills.ts` - Adjust skill levels
   - `src/data/services.ts` - Modify services offered

4. **Customize Colors** (Optional)
   - Edit `tailwind.config.js` to change primary colors
   - Modify theme colors in component files

## 🎨 Customization Tips

### Change Primary Color
Edit `tailwind.config.js`:
```js
colors: {
  primary: {
    // Change these values
    600: '#your-color',
  }
}
```

### Modify Typography
- Change font in `index.html` (Google Fonts link)
- Update font family in `tailwind.config.js`

### Add New Sections
1. Create component in `src/components/sections/`
2. Import and add to `src/App.tsx`
3. Add navigation link in `src/components/layout/Navbar.tsx`

## 🚀 Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

## 📦 Deploy

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

**Quick Deploy to Vercel:**
```bash
npm i -g vercel
vercel
```

## 🐛 Common Issues

**Port already in use:**
```bash
# Kill process on port 5173 (Windows)
netstat -ano | findstr :5173
taskkill /PID <PID> /F
```

**Dependencies not installing:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors:**
```bash
# Check for errors
npm run build
```

## 📚 Learn More

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## 💡 Tips

- Use `npm run dev` for development with hot reload
- Use `npm run build` to test production build locally
- Use `npm run preview` to preview production build
- Check browser console for any errors
- Use React DevTools for debugging
