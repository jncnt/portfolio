# Navigation Component Guide

## Overview

The Navigation component provides a sticky header with intelligent active section highlighting as you scroll through the portfolio.

## Features

- **Fixed Sticky Header** - Always visible at the top of the page
- **Active Section Highlighting** - Shows which section you're currently viewing
- **Smooth Scroll Navigation** - Click nav items to smoothly scroll to sections
- **Responsive Design** - Desktop menu with hamburger menu for mobile
- **Smooth Animations** - Framer Motion animations for indicators and menu transitions
- **Automatic Detection** - Automatically detects and highlights the current section during scroll

## Navigation Items

The navigation includes links to all major sections:

1. **Home** - Hero section
2. **About** - About me section
3. **Skills** - Skills showcase
4. **Projects** - Project portfolio
5. **Certifications** - Credentials and certifications
6. **Experience** - Work experience and education
7. **Contact** - Contact form and social links

## How It Works

### Scroll Detection

The component uses an `IntersectionObserver`-like scroll listener that:
1. Tracks scroll position
2. Calculates which section is in the viewport
3. Updates the active navigation item dynamically
4. Works smoothly across all breakpoints

### Active Indicator

The active navigation item is highlighted with:
- **Color Change** - Active item text becomes blue (#3b82f6)
- **Animated Underline** - A gradient blue-purple underline appears
- **Smooth Animation** - Spring animation for the underline transition

### Mobile Navigation

On mobile devices:
- Menu collapses into a hamburger icon
- Clicking hamburger opens/closes the mobile menu
- Active section shown with blue left border
- Menu closes automatically after clicking an item

## Customization

### Add New Sections

To add a new section to the navigation:

1. Add a new section in `src/components/sections/`
2. Update the `navItems` array in Navigation.tsx:

```typescript
const navItems: NavItem[] = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  // Add new section here:
  { label: 'Blog', id: 'blog' },
];
```

3. Make sure your section has the correct `id`:
```tsx
<section id="blog">
  {/* Your content */}
</section>
```

4. Add the component to `src/App.tsx`:
```tsx
<main>
  <Hero />
  <About />
  {/* Add your new section */}
  <Blog />
</main>
```

### Customize Colors

Edit the Tailwind classes in Navigation.tsx:

```typescript
// Active state color
activeSection === item.id
  ? 'text-blue-400'  // Change this color
  : 'text-gray-300 hover:text-white'
```

### Change Logo

Replace "JC" in the Navigation component with your own logo or brand:

```tsx
<a href="#hero" onClick={() => handleNavClick('hero')}>
  {/* Your logo or text here */}
</a>
```

## Styling

The navigation uses:
- **Background**: `bg-gray-950/95` with `backdrop-blur-sm`
- **Border**: `border-gray-800`
- **Text**: `text-white` with `text-gray-300` for inactive items
- **Active**: `text-blue-400` with gradient underline

To customize globally:
1. Update color classes in the component
2. Or use Tailwind's theme customization in `tailwind.config.js`

## Mobile Behavior

On screens smaller than 768px (md breakpoint):
- Desktop nav hidden
- Hamburger menu visible
- Clicking nav items closes the menu
- Full-width mobile menu dropdown

## Performance

The component uses:
- React hooks for state management
- Debounced scroll listener (implicit through event handling)
- Minimal re-renders with proper dependency arrays
- Framer Motion's layout animations for smooth transitions

## Accessibility

Features for accessibility:
- Semantic HTML (`<nav>`, `<button>`)
- Keyboard navigable
- Clear visual indicators for active state
- Sufficient color contrast
- Smooth focus states on buttons

## Troubleshooting

### Navigation not detecting sections correctly

Ensure all sections have correct IDs:
```tsx
<section id="your-section-id">
  {/* Content */}
</section>
```

And match them in the `navItems` array:
```typescript
{ label: 'Your Section', id: 'your-section-id' }
```

### Active indicator not updating

Make sure the section ID matches exactly (case-sensitive):
- `id="about"` should match `id: 'about'` in navItems

### Mobile menu not opening/closing

Check that the `Menu` and `X` icons from lucide-react are imported correctly.

## Examples

### Smooth scrolling to a specific section

The navigation automatically handles this, but you can also do it manually:

```typescript
const handleNavClick = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
```

### Highlight a section on page load

The component automatically detects the current section on page load and scroll events.

## Related Components

- **App.tsx** - Main app component that integrates Navigation
- **Hero.tsx** - First section with id="hero"
- **Section.tsx** - Reusable section wrapper with id prop
- **Button.tsx** - Button component used throughout

---

For more information, see [SETUP_GUIDE.md](../SETUP_GUIDE.md)
