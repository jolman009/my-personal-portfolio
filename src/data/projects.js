export const projects = [
  {
    id: 1,
    title: "ShelfQuest",
    subtitle: "Digital Library & Reading Companion",
    description:
      "A production-ready, cross-platform reading app that helps users organize their EPUB/PDF collection, read offline with a clean Material Design 3 reader, and stay motivated with goals, streaks, and achievements.",
    longDescription:
      "Built in 3 months as a self-taught developer, ShelfQuest is a modern digital library featuring offline reading, AI-powered insights, cross-device sync, and a PWA-enabled experience. Currently live on Windows Store with Google Play and Apple App Store launches in progress.",
    image: "/projects/shelfquest.png",
    tags: [
      "React 19",
      "Node.js",
      "Python",
      "Supabase",
      "Google Gemini AI",
      "PWA",
      "Material Design 3",
    ],
    demoUrl: "https://shelfquest.org",
    githubUrl: null, // Private repo
    featured: true,
    metrics: {
      buildTime: "3 months",
      status: "Live on Windows Store",
      techStack: "10+ technologies integrated",
    },
    challenges: [
      "Implemented cross-platform builds for Windows, Android, and iOS",
      "Integrated AI-powered summaries using Google Gemini",
      "Built offline-first PWA with epub.js and PDF.js",
      "Designed real-time sync with Supabase",
    ],
    features: [
      "EPUB/PDF reader with offline support",
      "AI-powered summaries and insights",
      "Reading goals, streaks, and achievements",
      "Cross-device sync and secure backup",
      "Material Design 3 UI with dark mode",
      "Session timer and reading analytics",
      "Highlights and notes capture",
    ],
  },
  {
    id: 2,
    title: "Personal Portfolio",
    subtitle: "Modern React Portfolio",
    description:
      "Responsive portfolio website with custom animations, theme switching, and interactive components. Built from scratch using React 19 and Tailwind CSS.",
    image: "/projects/portfolio.png",
    tags: ["React", "Vite", "Tailwind CSS", "shadcn/ui"],
    demoUrl: "https://jolman.netlify.app",
    githubUrl: "https://github.com/jolman009/my-personal-portfolio",
    featured: false,
  },
  {
    id: 3,
    title: "Ministry Website (2002)",
    subtitle: "Where It All Started",
    description:
      "My first coding project - a church website built with HTML, CSS, and JavaScript learned from books at Waldenbooks. This sparked a 20-year journey back to code.",
    image: "/projects/legacy.png",
    tags: ["HTML", "CSS", "JavaScript", "Flash"],
    demoUrl: null,
    githubUrl: null,
    featured: false,
    legacy: true,
  },
];

// Helper to get featured projects
export const getFeaturedProjects = () => 
  projects.filter(p => p.featured);

// Helper to get all active projects (not legacy)
export const getActiveProjects = () => 
  projects.filter(p => !p.legacy);
