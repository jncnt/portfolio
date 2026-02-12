import type { Skill } from '../types/index';

export const skills: Skill[] = [
  {
    category: 'Frontend Development',
    items: [
      { name: 'HTML5', image: '/images/html.png' },
      { name: 'CSS', image: '/images/css.png' },
      { name: 'JavaScript', image: '/images/java-script.png' },
      { name: 'Tailwind CSS', image: '/images/tailwind.png' },
      { name: 'Ionic Capacitor', image: '/images/ionic.png' },
    ]
  },
  {
    category: 'Backend Development',
    items: [
      
      { name: 'PHP', image: '/images/php.png' },
      { name: 'MySQL', image: '/images/mysql.png' },
      { name: 'Laravel', image: '/images/laravel.png' },
      
    ]
  },
  {
    category: 'QA & Testing',
    items: ['Bug Reporting', 'Defect Tracking','Web Testing','Mobile Testing']
  },
  {
    category: 'Tools & Platforms',
    items: [
      { name: 'GitHub', image: '/images/github.png' },
      { name: 'Figma', image: '/images/figma.png' },
      { name: 'Git', image: '/images/git.png' },
      { name: 'VS Code', image: '/images/vs-code.png' },
      { name: 'Firebase', image: '/images/firebase.png' },
    ]
  }
];
