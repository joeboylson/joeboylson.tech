import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "holy-echoes",
    name: "Holy Echoes",
    summary:
      "Holy Echoes is a prayer and devotional mobile app for iOS and Android that allows users to browse, search, and save prayers organized by category.",
    description: [
      "A personal project providing a simple, beautiful way to access prayers on mobile devices. Features category-based browsing, a favorites system, and an admin portal for content management.",
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
      "PlaceLift is a mobile app that provides homeowners with a one-stop-shop for home improvement projects, with a dedicated project manager handling everything behind the scenes.",
    description: [
      "The complete platform built from the ground up — a Flutter mobile app for iOS and Android, a React admin portal, and all backend systems. Successfully launched to both app stores in 2024.",
    ],
    note: "PlaceLift stopped operations in 2024.",
    links: [
      {
        href: "https://github.com/joeboylson/placelift",
        label: "View the code",
        text: "Github Project",
        external: true,
      },
    ],
    tags: [
      "Flutter",
      "React",
      "Typescript",
      "Express.js",
      "Supabase",
      "Codemagic CI/CD",
      "iOS & Android",
    ],
    isOther: false,
  },
  {
    id: "rcmndr",
    name: "RCMNDR",
    summary:
      "RCMNDR generates Spotify playlists based on a few of your favorite songs using the Spotify API.",
    description: [
      "Users log in with Spotify, select up to 3 seed tracks, adjust recommendation parameters, and save the generated playlist directly to their account.",
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
      "Express.js",
      "Spotify API",
    ],
    isOther: false,
  },
  {
    id: "streamify-demo",
    name: "Streamify Demo",
    summary:
      "A music streaming analytics dashboard built in 6 hours to demonstrate frontend skills.",
    description: [
      "Built as a one-day challenge: a dashboard with 3 types of graphs and a sortable/filterable data table. Completed on a Sunday afternoon.",
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
      {
        href: "https://www.linkedin.com/posts/joeboylson_i-would-like-to-share-a-project-i-started-activity-7238677061073018881-lRW1",
        label: "Read the LinkedIn post",
        text: "LinkedIn Post",
        external: true,
      },
    ],
    tags: [
      "React",
      "Typescript",
      "Data Visualization",
      "Vercel",
    ],
    isOther: false,
  },
  {
    id: "vssl",
    name: "VSSL",
    summary:
      "A web app for generating customizable 3D-printable storage containers with configurable compartments.",
    description: [
      "Users configure slot dimensions, grid layout, wall thickness, and lid options. The app generates and previews the 3D model in real-time, then exports it as an STL file for 3D printing.",
    ],
    links: [
      {
        href: "https://github.com/joeboylson/vssl",
        label: "View the code",
        text: "Github Project",
        external: true,
      },
      {
        href: "https://www.linkedin.com/posts/joeboylson_back-again-with-another-app-this-one-is-activity-7244032804240388098-Vl_1",
        label: "Read the LinkedIn post",
        text: "LinkedIn Post",
        external: true,
      },
    ],
    tags: [
      "React",
      "Typescript",
      "Three.js",
      "Python",
      "STL Generation",
      "Supabase",
    ],
    isOther: false,
  },
  {
    id: "project-x",
    name: "Project X",
    summary:
      "A content management system for a medical technology company to securely share documents, 3D models, and interactive experiences.",
    description: [
      "Built with a focus on security and performance for handling large files and applications used to train medical professionals.",
    ],
    related: {
      label: "View Kinetic Vision experience",
      text: "→ Kinetic Vision",
      href: "/experience#kinetic-vision",
      external: false,
    },
    tags: [
      "React",
      "Typescript",
      "GraphQL",
      "Flask",
      "PostgreSQL",
      "Docker",
      "Azure",
    ],
    isOther: true,
  },
  {
    id: "project-t",
    name: "Project T",
    summary:
      "A study management application for a consumer goods company to scaffold and run product studies.",
    description: [
      "Focused on data integrity to provide accurate, reliable data for external analysis teams.",
    ],
    related: {
      label: "View Kinetic Vision experience",
      text: "→ Kinetic Vision",
      href: "/experience#kinetic-vision",
      external: false,
    },
    tags: [
      "React",
      "Typescript",
      "Ruby on Rails",
      "MySQL",
      "Azure",
    ],
    isOther: true,
  },
  {
    id: "project-j",
    name: "Project J",
    summary:
      "An interactive 3D tour experience with navigation and marketing content overlaid on a Matterport space.",
    description: [
      "Integrated the Matterport SDK to guide users through a 3D-captured space with tailored content at each stop.",
    ],
    links: [
      {
        href: "https://matterport.com/",
        label: "Check out Matterport",
        text: "Matterport Website",
        external: true,
      },
    ],
    related: {
      label: "View Kinetic Vision experience",
      text: "→ Kinetic Vision",
      href: "/experience#kinetic-vision",
      external: false,
    },
    tags: [
      "React",
      "Typescript",
      "Matterport SDK",
      "3D Integration",
    ],
    isOther: true,
  },
];
