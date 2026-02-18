# Lalit Gadwar - Portfolio Website

A modern, professional portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- ✨ Modern and clean UI design
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive design
- 🎨 Smooth animations with Framer Motion
- ⚡ Fast performance with Vite
- 🎯 SEO-friendly meta tags
- 📄 Resume download functionality
- 🔍 Project filtering by technology
- 📊 Skills progress visualization
- 💼 Work experience timeline
- 🎓 Education and languages section
- 📧 Contact form

## 🛠 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Typing Animation**: react-typed

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗 Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

## 📝 Configuration

### Update Personal Information

Edit `src/data/personalInfo.ts` to update:
- Name, role, email
- LinkedIn and GitHub URLs
- Resume PDF path
- Summary and location

### Update Projects

Edit `src/data/projects.ts` to add or modify projects.

### Update Skills

Edit `src/data/skills.ts` to update your skills and proficiency levels.

### Update Experience

Edit `src/data/experience.ts` to update work experience.

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and configure the build settings
4. Click "Deploy"

### Deploy to Netlify

1. Push your code to GitHub
2. Import your repository in [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Click "Deploy site"

### Deploy to GitHub Pages

1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Run: `npm run deploy`

## 📁 Project Structure

```
portfolio/
├── public/
│   └── resume-lalit-18-06-v3.pdf
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Services.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Container.tsx
│   │       └── Section.tsx
│   ├── contexts/
│   │   └── ThemeContext.tsx
│   ├── data/
│   │   ├── personalInfo.ts
│   │   ├── skills.ts
│   │   ├── experience.ts
│   │   ├── projects.ts
│   │   ├── services.ts
│   │   └── education.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme. The primary color is set to blue, but you can change it to match your brand.

### Fonts

The project uses Inter font from Google Fonts. You can change it in `index.html` and update the font family in `tailwind.config.js`.

### Animations

Animations are handled by Framer Motion. You can customize them in individual component files.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Lalit Gadwar**
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]

---

Made with ❤️ using React, TypeScript, and Tailwind CSS
