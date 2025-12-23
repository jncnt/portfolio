# Jincent Caritan - Professional Portfolio Website

A modern, fully responsive, and feature-rich personal portfolio website built with React 19, TypeScript, Tailwind CSS 4, Vite, and Framer Motion.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-blue?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-7.2-blue?logo=vite)

## ✨ Features

### 🎨 Design & UX
- **Dark Mode by Default** - Professional dark theme with modern gradient accents
- **Fully Responsive** - Mobile-first design, optimized for all devices (320px - 4K)
- **Smooth Animations** - Framer Motion animations with scroll-triggered effects
- **Modern UI Components** - Reusable, typed React components with Tailwind CSS
- **Accessibility** - WCAG compliant with semantic HTML and ARIA labels
- **Performance Optimized** - Lazy loading, tree-shaking, optimized bundle size

### 📄 Sections

1. **Hero Section** - Eye-catching introduction with CTA buttons
2. **About Me** - Professional bio with key focus areas and stats cards
3. **Skills** - Organized tech stack by category with badges
4. **Projects** - Showcase with images, descriptions, tech stacks, and action buttons (no overlay)
5. **Certifications** - Interactive gallery with modal/lightbox for viewing images
6. **Experience & Education** - Beautiful timeline component
7. **Contact Form** - Integrated with EmailJS for direct messaging
8. **Footer** - Social links and copyright information

### 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI framework |
| **TypeScript** | Type-safe development |
| **Tailwind CSS 4** | Utility-first styling |
| **Vite 7** | Fast build tool & dev server |
| **Framer Motion** | Animation library |
| **Lucide React** | Icon library |
| **EmailJS** | Email service integration |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation & Setup

1. **Clone the repository:**
```bash
git clone <repository-url>
cd portfolio
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```
The site will open at `http://localhost:5173`

4. **Build for production:**
```bash
npm run build
```

5. **Preview production build:**
```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── common/              # Reusable components
│   │   │   ├── Button.tsx       # Styled button component
│   │   │   ├── Card.tsx         # Card wrapper with animations
│   │   │   └── Section.tsx      # Section layout wrapper
│   │   ├── modals/
│   │   │   └── ImageModal.tsx   # Image lightbox component
│   │   └── sections/            # Page sections
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Skills.tsx
│   │       ├── Projects.tsx
│   │       ├── Certifications.tsx
│   │       ├── Experience.tsx
│   │       ├── Contact.tsx
│   │       └── Footer.tsx
│   ├── data/                    # Typed data files
│   │   ├── projects.ts
│   │   ├── certifications.ts
│   │   ├── skills.ts
│   │   ├── experiences.ts
│   │   └── contact.ts
│   ├── types/
│   │   └── index.ts            # TypeScript interfaces
│   ├── assets/
│   │   └── images/             # Project & cert images
│   ├── App.tsx                 # Main component
│   ├── App.css                 # Global styles
│   ├── main.tsx                # Entry point
│   └── index.css               # Tailwind directives
├── public/
│   ├── vite.svg
│   └── images/                 # Placeholder images
├── dist/                       # Production build (generated)
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
└── index.html
```

## 🎯 Customization Guide

### 1. Update Personal Information

Edit the data files in `src/data/`:

**[src/data/contact.ts](src/data/contact.ts)** - Update contact info and social links:
```typescript
export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/YOUR_USERNAME',
    icon: 'Github'
  },
  // Add more links...
];

export const contactEmail = 'your.email@example.com';
```

**[src/data/skills.ts](src/data/skills.ts)** - Customize your skill categories:
```typescript
export const skills: Skill[] = [
  {
    category: 'Frontend Development',
    items: ['React', 'TypeScript', 'Tailwind CSS', '...']
  },
  // Add more categories...
];
```

**[src/data/projects.ts](src/data/projects.ts)** - Add your projects:
```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: 'Project Title',
    description: 'Project description',
    image: '/images/project-1.jpg',
    technologies: ['React', 'Node.js'],
    github: 'https://github.com/...',
    caseStudy: '/case-studies/...' // optional
  },
  // Add more projects...
];
```

### 2. Replace Placeholder Images

1. Add your images to `public/images/`
2. Update image paths in data files:
   - Projects: `project-1.jpg`, `project-2.jpg`, etc.
   - Certifications: `cert-istqb.jpg`, `cert-react.jpg`, etc.

Recommended image sizes:
- **Projects**: 600×400px (16:9 aspect ratio)
- **Certifications**: 600×400px (16:9 aspect ratio)

### 3. Configure EmailJS (Contact Form)

Follow the [EMAILJS_SETUP.md](EMAILJS_SETUP.md) guide to:
1. Create an EmailJS account
2. Set up email service
3. Create email template
4. Get credentials (Service ID, Template ID, Public Key)
5. Update [src/components/sections/Contact.tsx](src/components/sections/Contact.tsx)

### 4. Customize Styling

**Colors & Theme** - Update [tailwind.config.js](tailwind.config.js):
```javascript
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#a855f7',
      },
    },
  },
};
```

**Global Styles** - Edit [src/App.css](src/App.css) for animations and utilities

### 5. Hide/Reorder Sections

Edit [src/App.tsx](src/App.tsx):
```tsx
<main className="...">
  <Hero />
  <About />
  {/* <Skills /> */}  {/* Comment out to hide */}
  <Projects />
  {/* Reorder by changing position */}
</main>
```

## 📱 Responsive Breakpoints

The portfolio is mobile-first and responsive at all breakpoints:
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1279px
- **Large**: 1280px+

All components adapt seamlessly across breakpoints using Tailwind's responsive utilities.

## 🌐 Deployment

### Netlify (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Add environment variables if needed (EmailJS keys)
6. Deploy!

### Vercel

1. Import your GitHub repository at [Vercel](https://vercel.com)
2. Build settings are auto-detected
3. Deploy with one click

### GitHub Pages

Update [vite.config.ts](vite.config.ts):
```typescript
export default {
  base: '/portfolio/', // your repo name
  // ...
};
```

### Traditional Hosting

1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting provider

## ⚡ Performance

### Optimization Features
- **Code Splitting** - Vite automatically splits code for lazy loading
- **Image Optimization** - Use WebP format and optimize sizes
- **Tree Shaking** - Unused code is removed during build
- **Minification** - CSS and JS are minified in production
- **CSS-in-JS** - Only necessary styles are included

### Build Sizes
- **HTML**: 1.14 kB (gzipped)
- **CSS**: 28.58 kB → 5.67 kB (gzipped)
- **JS**: 336.41 kB → 107.48 kB (gzipped)

### Performance Tips
1. Optimize images with [TinyPNG](https://tinypng.com/)
2. Use WebP format for better compression
3. Lazy load images and components
4. Minimize third-party scripts
5. Use production build for deployment

## 🔍 SEO

The portfolio includes:
- ✅ Meta tags for social sharing (Open Graph)
- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy (h1 → h2 → h3)
- ✅ Mobile-friendly viewport settings
- ✅ Performance optimizations for Lighthouse

## ♿ Accessibility

- ✅ WCAG 2.1 AA compliant
- ✅ Semantic HTML elements
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ Color contrast ratios

## 🛠️ Available Scripts

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build           # Build for production
npm run preview         # Preview production build

# Linting
npm run lint            # Run ESLint

# TypeScript
npm run tsc             # Check types
```

## 📚 Documentation

- [SETUP_GUIDE.md](SETUP_GUIDE.md) - Detailed setup and customization guide
- [EMAILJS_SETUP.md](EMAILJS_SETUP.md) - EmailJS configuration guide
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Vite Docs](https://vitejs.dev/)

## 🤝 Contributing

This is a personal portfolio template. Feel free to:
- Customize styles and components
- Add new sections
- Integrate additional services
- Deploy to your hosting provider

## 📝 License

This project is open source and free to use for personal portfolios.

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Vercel** for Tailwind CSS
- **Framer** for Motion animations
- **Icons** from Lucide React
- **Email Service** by EmailJS

## 📧 Support

For questions or issues:
1. Check the documentation files
2. Review the code comments
3. Check component prop types in TypeScript
4. Visit the official documentation for dependencies

---

**Built with ❤️ by Jincent Caritan**

Ready to deploy? Follow the [deployment guide](#-deployment) above!
