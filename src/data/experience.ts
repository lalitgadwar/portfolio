export interface Experience {
  company: string;
  position: string;
  period: string;
  location?: string;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: "Webtrex Software Services",
    position: "Associate Software Engineer",
    period: "Jan 2025 – Present",
    location: "Hyderabad, India",
    description: [
      "Developed full-stack modules using React + Spring Boot + MySQL",
      "Implemented JWT-based authentication & role-based access control",
      "Built dashboards, event management & subscription systems",
      "Managed deployments using Docker & CloudPanel",
      "Worked in Agile/Scrum methodology"
    ],
    technologies: ["React", "TypeScript", "Spring Boot", "MySQL", "Docker", "CloudPanel", "JWT"]
  },
  {
    company: "Young Minds Technology Solutions",
    position: "Java Developer",
    period: "Oct 2023 – Jan 2025",
    location: "Tirupati, India",
    description: [
      "Built user/employee management systems",
      "Implemented live chat & notification systems",
      "Developed lead management & order systems",
      "Handled testing, debugging & Jira tracking"
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "React", "Jira"]
  }
];
