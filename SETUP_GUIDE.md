# Jincent Caritan - Professional Portfolio

A modern, responsive, and feature-rich personal portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Dark Mode by Default** - Professional dark theme with smooth animations
- **Fully Responsive** - Mobile-first design that works on all devices
- **Smooth Animations** - Framer Motion animations and scroll effects
- **Modern Components** - Reusable, typed React components
- **Project Showcase** - Display projects with images, tech stack, and links
- **Certifications Gallery** - Interactive modal/lightbox for certificates
- **Experience Timeline** - Beautiful timeline for work experience and education
- **Contact Form** - Integrated with EmailJS for direct messaging
- **SEO Optimized** - Meta tags, semantic HTML, and performance optimization
- **Accessibility** - WCAG compliant with proper ARIA labels

## 📁 Project Structure

```
src/
├── components/
│   ├── common/           # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Section.tsx
│   ├── modals/          # Modal components
│   │   └── ImageModal.tsx
│   └── sections/        # Page sections
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Projects.tsx
│       ├── Certifications.tsx
│       ├── Experience.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── data/                # Typed data files
│   ├── projects.ts
│   ├── certifications.ts
│   ├── skills.ts
│   ├── experiences.ts
│   └── contact.ts
├── types/               # TypeScript interfaces
│   └── index.ts
├── assets/              # Images and media
│   └── images/
├── App.tsx              # Main App component
├── App.css              # Global styles
├── main.tsx             # React entry point
└── index.css            # Tailwind directives
```

## 🛠️ Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS
- **Vite** - Fast build tool
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **EmailJS** - Email service integration

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
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

4. Build for production:
```bash
npm run build
```

## 📋 Configuration

### EmailJS Setup (Contact Form)

To enable the contact form:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Get your `Service ID`, `Template ID`, and `Public Key`
3. Update the configuration in [`src/components/sections/Contact.tsx`](src/components/sections/Contact.tsx):

```typescript
// Replace these values
emailjs.init('YOUR_PUBLIC_KEY_HERE');

// In the handleSubmit function, update:
await emailjs.send(
  'YOUR_SERVICE_ID_HERE',
  'YOUR_TEMPLATE_ID_HERE',
  // ...
);
```

### Personal Information

Update your personal info in the data files:

- **Basic Info**: [`src/data/contact.ts`](src/data/contact.ts)
- **Skills**: [`src/data/skills.ts`](src/data/skills.ts)
- **Projects**: [`src/data/projects.ts`](src/data/projects.ts)
- **Certifications**: [`src/data/certifications.ts`](src/data/certifications.ts)
- **Experience**: [`src/data/experiences.ts`](src/data/experiences.ts)

### Images

Add your project and certification images to `src/assets/images/`:

```
src/assets/images/
├── project-1.jpg
├── project-2.jpg
├── project-3.jpg
├── cert-istqb.jpg
├── cert-react.jpg
└── cert-webdev.jpg
```

Update the image paths in the data files accordingly.

## 🎨 Customization

### Colors

Modify the Tailwind theme in [`tailwind.config.js`](tailwind.config.js):

```javascript
theme: {
  extend: {
    colors: {
      primary: '#3b82f6',
      secondary: '#a855f7',
      // ...
    }
  }
}
```

### Fonts

Update fonts in [`src/index.css`](src/index.css) and [`tailwind.config.js`](tailwind.config.js).

### Sections

To hide or reorder sections, edit [`src/App.tsx`](src/App.tsx):

```tsx
<main className="...">
  <Hero />
  <About />
  {/* Hide sections by commenting them out */}
  {/* <Skills /> */}
  <Projects />
  {/* ... */}
</main>
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: 320px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up
- **Large Desktop**: 1280px and up

## 🌐 Deployment

### Netlify (Recommended)

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Add environment variables if needed (EmailJS keys)

### Other Platforms

- **Vercel**: Similar setup to Netlify
- **GitHub Pages**: Configure in `vite.config.ts`
- **Traditional Hosting**: Upload the `dist` folder

## 🔍 SEO

The portfolio includes:
- Meta tags for social sharing
- Semantic HTML structure
- Proper heading hierarchy
- Open Graph tags
- Mobile-friendly viewport settings
- Performance optimization through Vite

## ⚡ Performance Tips

1. Optimize images with tools like [TinyPNG](https://tinypng.com/)
2. Use WebP format for images
3. Lazy load images and components
4. Minimize bundle size with tree-shaking
5. Use production build: `npm run build`

## 📝 License

This portfolio template is free to use and modify for personal use.

## 🤝 Support

For issues or suggestions, please create an issue in the repository.

---

**Built with ❤️ by Jincent Caritan**
