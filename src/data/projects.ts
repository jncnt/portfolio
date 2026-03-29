import type { Project } from '../types/index';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Web-Based Evacuation Mapping System',
    description: 'A web-based evacuation mapping system that manage evacuation centers, notification, and user to sent an alerts to the users the nearest evacuation center',
    image: '/images/alerto.png',
    technologies: ['Laravel', 'Javascript', 'TailwindCSS', 'MySql'],
    github: 'https://github.com/jncnt/WebAlerto',

  },
  {
    id: 2,
    title: 'Mobile Application Evacuation Mapping System',
    description: 'A mobile application that shows the nearest route of the evacuation center and notify the users with the alerts of the disaster ',
    image: '/images/alerto-mobile.png',
    technologies: ['Firebase', 'Tailwind CSS','MySql','Ionic Capacitor'],
    github: 'https://github.com/LaserEx07/MobileAlerto'
  },
];
