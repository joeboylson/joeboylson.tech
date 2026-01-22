import { Experience } from "../types";

export const experiences: Experience[] = [
  {
    id: "quality-nanny-services",
    company: "Quality Nanny Services",
    position: "Full-Stack Developer",
    duration: ["Jul 2025 — Dec 2025 (6 months)"],
    skills: [
      "Next.js",
      "NestJS",
      "Payment Processing",
      "Background Check APIs",
      "Technical Leadership",
    ],
    synopsis:
      "Working with a non-technical business owner to rebuild their application. Coordinating with other developers and providing technical guidance to support business decisions. Revived a stalled project by restructuring the codebase, bringing a non-functional product to launch-ready state.",
  },
  {
    id: "spot-health",
    company: "Spot Health",
    position: "Software Engineer",
    duration: ["Dec 2024 — Jul 2025 (8 months)"],
    skills: [
      "Healthcare Platform",
      "Warehouse Tools",
      "Shipping Integrations",
      "Client Onboarding",
      "Lab Partner Integrations",
    ],
    synopsis:
      "Developed tools to support warehouse operations and maintained the healthcare platform. Improved internal warehouse tools, streamlining label printing and tracking workflows. Onboarded new clients and lab partners through integrations, expanding the platform's healthcare network.",
  },
  {
    id: "placelift",
    company: "PlaceLift",
    position: "Technical Lead",
    duration: ["May 2024 — Oct 2024 (6 months)"],
    skills: [
      "Flutter",
      "iOS & Android",
      "App Store Deployment",
      "Admin Portal",
      "Marketing Integrations",
      "CI/CD",
    ],
    synopsis:
      "Sole engineer at this startup, responsible for developing the complete platform — a mobile app for iOS and Android, an admin portal, and all backend systems. Successfully launched to both app stores.",
    related: {
      label: 'Go to "PlaceLift" in Projects',
      text: "→ PlaceLift",
      href: "/projects#placelift",
      external: false,
    },
  },
  {
    id: "kinetic-vision",
    company: "Kinetic Vision",
    position: "Software Engineer",
    duration: [
      "Co-op: May 2019 — May 2022 (3 years)",
      "Full-time: May 2022 — May 2024 (2 years)",
    ],
    skills: [
      "React & TypeScript",
      "Ruby on Rails",
      "Azure",
      "CI/CD",
      "Docker",
      "PostgreSQL",
      "MySQL",
      "Client Collaboration",
      "Mentorship",
    ],
    synopsis:
      "Developed web applications for various clients, working independently or with small teams. Managed development, deployment, and client communication. Led co-op team for a semester, providing mentorship through pair programming.",
  },
];
