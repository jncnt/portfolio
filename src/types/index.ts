export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  caseStudy?: string;
}

export interface Certification {
  id: number;
  title: string;
  organization: string;
  year: number;
  image: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  type: 'work' | 'education';
}

export interface SkillItem {
  name: string;
  image?: string;
}

export interface Skill {
  category: string;
  items: (string | SkillItem)[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
