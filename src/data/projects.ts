export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  features: string[];
  technologies: string[];
  image?: string;
}

export const projects: Project[] = [
  {
    id: "raos-bmc",
    title: "Rao's Business Marketing Company",
    description: "Comprehensive business platform with event management, membership subscriptions, and learning management system.",
    url: "https://raosbmc.com",
    features: [
      "Event management system",
      "Membership subscriptions",
      "Payment gateway integration",
      "Admin dashboards",
      "Learning Management System (LMS) - Currently implementing",
      "Video streaming with Bunny.net"
    ],
    technologies: ["React", "TypeScript", "Spring Boot", "MySQL", "Docker", "CloudPanel"]
  },
  {
  id: "quizfix",
  title: "QuizFix",
  description: "Online learning and quiz platform that connects students with mentors for academic support, question solving, and personalized learning.",
  url: "https://app.qizfix.com",
  features: [
    "Student & mentor management",
    "Question posting and academic support",
    "Quiz, subject & content management",
    "Secure authentication & role-based access",
    "Payment and subscription management",
    "REST APIs with AWS deployment"
  ],
  technologies: ["NextJs", "TypeScript", "Spring Boot", "Java", "MySQL", "AWS"]
},
  {
    id: "raos-edu",
    title: "Rao's Edu App",
    description: "Education platform with comprehensive role-based access and backend APIs.",
    url: "https://app.raosedu.com",
    features: [
      "Education platform",
      "Role-based access control",
      "Backend APIs with Spring Boot"
    ],
    technologies: ["React", "TypeScript", "Spring Boot", "MySQL"]
  },
  {
    id: "bnrda",
    title: "BNRDA",
    description: "Employee and department management platform with real-time communication features.",
    url: "https://bnrda.com",
    features: [
      "Employee & department management",
      "Real-time chat & alerts",
      "Dashboard & API integrations",
      "CI/CD using Docker & CloudPanel"
    ],
    technologies: ["React", "TypeScript", "Spring Boot", "MySQL", "Docker", "CloudPanel"]
  },
  {
    id: "mm-bnrda",
    title: "MM BNRDA",
    description: "Lead generation and order management system with review capabilities.",
    url: "https://mm.bnrda.com",
    features: [
      "Lead generation system",
      "Order management",
      "Review systems",
      "Full role-based CRUD operations"
    ],
    technologies: ["React", "TypeScript", "Spring Boot", "MySQL"]
  },
];

export const projectNote = "All these projects were developed by me and my colleague. Tech Used: NextJs, React (TypeScript), Java Spring Boot, MySQL. Deployment: CloudPanel, Docker, GitHub CI/CD, Jenkins, AWS";
