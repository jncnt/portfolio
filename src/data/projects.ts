import type { Project } from '../types/index';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Web-Based Evacuation Mapping System',
    description: 'A full-stack e-commerce platform with product management, shopping cart, and payment integration.',
    image: '/images/alerto.png',
    technologies: ['Laravel', 'Javascript', 'TailwindCSS', 'MySql'],
    github: 'https://github.com/jincent',
    caseStudy: '/case-studies/ecommerce'
  },
  {
    id: 2,
    title: 'Mobile Application Evacuation Mapping System',
    description: 'A mobile application that shows the nearest route of the evacuation center and notify the users with the alerts of the disaster ',
    image: '/images/alerto-mobile.png',
    technologies: ['Angular', 'Firebase', 'Tailwind CSS','MySql','Ionic Capacitor'],
    github: 'https://github.com/jincent'
  },
  // {
  //   id: 3,
  //   title: 'Weather Dashboard',
  //   description: 'A responsive weather application with real-time data, location search, and forecasts.',
  //   image: '/images/project-3.svg',
  //   technologies: ['React', 'TypeScript', 'OpenWeatherMap API'],
  //   github: 'https://github.com/jincent'
  // }
];
