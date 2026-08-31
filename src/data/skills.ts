export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools';
}

export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'NextJs', level: 85, category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' },
  { name: 'Material UI', level: 80, category: 'frontend' },
  { name: 'Ant Design', level: 75, category: 'frontend' },
  { name: 'Angular', level: 70, category: 'frontend' },
  { name: 'HTML5/CSS3', level: 95, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  
  // Backend
  { name: 'Java', level: 90, category: 'backend' },
  { name: 'Spring Boot', level: 90, category: 'backend' },
  { name: 'Spring Security', level: 85, category: 'backend' },
  { name: 'Spring Data JPA', level: 85, category: 'backend' },
  { name: 'Hibernate', level: 80, category: 'backend' },
  { name: 'Node.js', level: 75, category: 'backend' },
  { name: 'Express.js', level: 75, category: 'backend' },
  
  // Database
  { name: 'MySQL', level: 90, category: 'database' },
  { name: 'MongoDB', level: 75, category: 'database' },
  { name: 'Oracle', level: 70, category: 'database' },
  { name: 'PostgreSQL', level: 70, category: 'database' },
  { name: 'H2', level: 80, category: 'database' },
  
  // DevOps & Tools
  { name: 'Docker', level: 85, category: 'devops' },
  { name: 'CloudPanel', level: 80, category: 'devops' },
  { name: 'AWS', level: 75, category: 'devops' },
  { name: 'GitHub CI/CD', level: 80, category: 'devops' },
  { name: 'Jenkins', level: 80, category: 'devops' },
  { name: 'Jira', level: 85, category: 'tools' },
  { name: 'Postman', level: 90, category: 'tools' },
  { name: 'Swagger', level: 90, category: 'tools' },
  { name: 'IntelliJ', level: 90, category: 'tools' },
  { name: 'VS Code', level: 95, category: 'tools' },
  { name: 'Figma', level: 70, category: 'tools' },
];
