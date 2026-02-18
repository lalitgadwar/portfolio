export interface Service {
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: "Full Stack Development",
    description: "End-to-end web application development using React, TypeScript, and Spring Boot with modern best practices.",
    icon: "💻"
  },
  {
    title: "API Development",
    description: "RESTful API design and implementation with Spring Boot, JWT authentication, and role-based access control.",
    icon: "🔌"
  },
  {
    title: "LMS Development",
    description: "Learning Management System development with video streaming, course management, and user progress tracking.",
    icon: "📚"
  },
  {
    title: "Deployment & DevOps",
    description: "Docker containerization, CI/CD pipeline setup, and cloud deployment using CloudPanel and GitHub Actions.",
    icon: "🚀"
  }
];
