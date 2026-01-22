import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "holy-echoes",
    name: "Holy Echoes",
    summary:
      "Holy Echoes is a prayer and devotional mobile app for iOS and Android that allows users to browse, search, and save prayers organized by category.",
    description: [
      "I built Holy Echoes as a personal project to create a simple, beautiful way to access prayers on mobile devices. The app features category-based browsing, a favorites system, and an admin portal for content management.",
    ],
    links: [
      {
        href: "https://github.com/joeboylson/holy-echoes",
        label: "View the code",
        text: "Github Project",
        external: true,
      },
    ],
    tags: [
      "React",
      "Typescript",
      "Capacitor",
      "iOS & Android",
      "InstantDB",
      "TailwindCSS",
      "Radix UI",
      "Codemagic CI/CD",
    ],
    isOther: false,
  },
  {
    id: "placelift",
    name: "PlaceLift",
    summary:
      "PlaceLift is a mobile application and service that assists clients in their home improvement projects from start to finish. PlaceLift provides these services through a mobile app and excellent customer service.",
    description: [
      'As CTO of PlaceLift I perform all development tasks on our mobile application and an internal tool called "PlaceLift Connector". This includes turning our mobile app mockups into code, managing our CI/CD to build and deploy to the to App Store (iOS) and Google Play Store (Android), and handling all new releases.',
    ],
    note: "As of September 1st, 2024, the PlaceLift team is taking a hiatus. We're proud of the progress we've made since our launch in the spring of 2024, but we need to take this pause to allow us to reassess our needs in terms of time and investment.",
    links: [
      {
        href: "https://placelift.app",
        label: "Check out our website",
        text: "PlaceLift Website",
        external: true,
      },
    ],
    tags: [
      "Design-to-code",
      "Flutter",
      "React",
      "Typescript",
      "MUI Components",
      "Express.js",
      "CI/CD",
      "Codemagic",
      "Supabase Realtime Database",
      "Hubspot integration",
      "Mobile Push Notifications",
    ],
    isOther: false,
  },
  {
    id: "rcmndr",
    name: "RCMNDR",
    summary:
      "RCMNDR is an application that leverages the Spotify API to generatate a playlist of 50 songs based off of a few of the user's favorite songs.",
    description: [
      "RCMNDR uses Spotify for authentication, track search, track recommendations, and playlist creation. Upon logging in, the user selects up to 3 tracks that the recommendations will be based off of. There is a second step where the user can adjust the search parameters based off of Spotify's track characteristics. Finally, a list of recommendations is generated and the user can save this list to a playlist.",
    ],
    links: [
      {
        href: "https://rcmndr.up.railway.app",
        label: "Try RCMNDR",
        text: "Live site",
        external: true,
      },
      {
        href: "https://github.com/joeboylson/rcmndr",
        label: "View the code",
        text: "Github Project",
        external: true,
      },
    ],
    tags: [
      "React",
      "Typescript",
      "Custom CSS",
      "Express.js",
      "Spotify API integration",
    ],
    isOther: false,
  },
  {
    id: "streamify-demo",
    name: "Streamify Demo",
    summary:
      "Streamify Demo is a project built in 6 hours to demonstrate my ability with Frontend Technologies.",
    description: [
      "While job searching, I discovered a prompt for a demo project where the developer was tasked with creating a music streaming dashboard, complete with 3 types of graphs and a table with sorting and filtering. As mentioned above, this project was completed on a Sunday afternoon in a little over 6 hours.",
    ],
    links: [
      {
        href: "https://streamify-demo.vercel.app",
        label: "Open Streamify Demo",
        text: "Live site",
        external: true,
      },
      {
        href: "https://github.com/joeboylson/streamify-demo",
        label: "View the code",
        text: "Github Project",
        external: true,
      },
    ],
    tags: [
      "React",
      "Typescript",
      "Custom CSS",
      "Data Visualization",
      "Vercel",
    ],
    isOther: false,
  },
  {
    id: "project-x",
    name: "Project X",
    summary:
      "Project X is a custom-built content management system for a medical technology company that provides a fast and secure way for our clients to upload and share documents, 3D models, and 3D experiences to other users within the company, or external users outside of the company.",
    description: [
      "This project is very unique due to its content. Most of the content used was .zip files, containing whole applications and experiences that are used for training and informing medical professionals. The challenge of this application centered around security and speed.",
      "To give a sense of what type of content Project X manages, go to Project J. Project J is an experience I developed that was uploaded and shared from Project X.",
    ],
    related: {
      label: "Jump to Project J",
      text: "→ Project J",
      href: "/projects#:~:text=Azure%20Blob%20Storage-,Project%20J,-Project%20J%20is",
      external: false,
    },
    tags: [
      "Graphic Design",
      "React",
      "Typescript",
      "GraphQL",
      "Flask",
      "Functional Programming",
      "SSO Authentication",
      "PostgreSQL",
      "Docker Compose",
      "API metrics",
      "Azure",
      "Azure Blob Storage",
    ],
    isOther: true,
  },
  {
    id: "project-t",
    name: "Project T",
    summary:
      "Project T is an application built for a consumer goods company in order to scaffold and perform studies on new consumer goods.",
    description: [
      "The focus of this application was data management and integrity in order to provide useful and accurate data for an external analysis team.",
    ],
    tags: [
      "React",
      "Typescript",
      "Custom CSS",
      "Ruby on Rails",
      "MySQL",
      "SSO Authentication",
      "Azure App Service",
      "Azure Blob Storage",
    ],
    isOther: true,
  },
  {
    id: "project-j",
    name: "Project J",
    summary:
      "Project J is an experience that overlays navigation and information onto a 3D experience.",
    description: [
      'Project J was a blast to work on and one of my favorites. It integrated Matterport, a 3D space-capture platform, and a fairly sophisticated SDK integration. The goal was to provide a journey (hence "J") through a 3D space and to show tailored marketing material at each stop in the tour.',
    ],
    related: {
      label: "Check out Matterport",
      text: "→ Matterport Website",
      href: "https://matterport.com/",
      external: true,
    },
    tags: [
      "Graphic Design",
      "React",
      "Typescript",
      "Matterport SDK",
      "Custom Webkit Config",
    ],
    isOther: true,
  },
];
