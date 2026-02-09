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
    title: "Change180",
    subtitle: "Life Coaching Website",
    description:
      "Professional website built for Myra Z. Guzman, M.Ed. — a life coaching business.",
    image: "/projects/change180.png",
    tags: ["React", "Tailwind CSS", "Vite"],
    demoUrl: "https://change180.org",
    githubUrl: "https://github.com/jolman009/change180",
    featured: false,
  },
  {
    id: 3,
    title: "JotFlow",
    subtitle: "Journal + TODO with Google Calendar",
    description:
      "A journaling app with templates and TODO functionality that integrates with Google Calendar.",
    image: "/projects/jotflow.png",
    tags: ["React", "Supabase", "Google Calendar API"],
    demoUrl: "https://jotflow.me",
    githubUrl: "https://github.com/jolman009/online-journal",
    featured: false,
  },
];

// Helper to get featured projects
export const getFeaturedProjects = () =>
  projects.filter((p) => p.featured);

// Helper to get non-featured projects (Change180, JotFlow)
export const getNonFeaturedProjects = () =>
  projects.filter((p) => !p.featured);
