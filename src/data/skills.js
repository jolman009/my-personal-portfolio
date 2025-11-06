export const skills = [
  // Frontend - What you actually used in ShelfQuest
  { name: "React", level: 80, category: "frontend", icon: "⚛️" },
  { name: "JavaScript (ES6+)", level: 85, category: "frontend", icon: "📜" },
  { name: "Tailwind CSS", level: 80, category: "frontend", icon: "🎨" },
  { name: "Material Design 3", level: 75, category: "frontend", icon: "🎨" },
  { name: "HTML/CSS", level: 90, category: "frontend", icon: "🌐" },
  { name: "Vite", level: 75, category: "frontend", icon: "⚡" },
  { name: "PWA Development", level: 70, category: "frontend", icon: "📱" },

  // Backend - ShelfQuest backend stack
  { name: "Node.js", level: 75, category: "backend", icon: "🟢" },
  { name: "Express.js", level: 75, category: "backend", icon: "🚂" },
  { name: "Python", level: 65, category: "backend", icon: "🐍" },
  { name: "FastAPI", level: 60, category: "backend", icon: "⚡" },
  { name: "REST APIs", level: 75, category: "backend", icon: "🔌" },
  { name: "JWT Authentication", level: 70, category: "backend", icon: "🔐" },

  // Database & Services
  { name: "Supabase", level: 75, category: "database", icon: "🗄️" },
  { name: "PostgreSQL", level: 65, category: "database", icon: "🐘" },
  { name: "Google Gemini AI", level: 70, category: "database", icon: "🤖" },

  // Tools & DevOps - What you actually use
  { name: "Git/GitHub", level: 80, category: "tools", icon: "📚" },
  { name: "Docker", level: 65, category: "tools", icon: "🐳" },
  { name: "Playwright Testing", level: 60, category: "tools", icon: "🎭" },
  { name: "CI/CD", level: 60, category: "tools", icon: "🔄" },
  { name: "npm/Package Mgmt", level: 80, category: "tools", icon: "📦" },
  { name: "Chrome DevTools", level: 80, category: "tools", icon: "🔧" },

  // Mobile
  { name: "Android Development", level: 65, category: "mobile", icon: "📱" },
  { name: "Gradle", level: 60, category: "mobile", icon: "🔨" },
  { name: "Cross-Platform Build", level: 70, category: "mobile", icon: "🌍" },
];

export const categories = [
  "all",
  "frontend", 
  "backend", 
  "database",
  "mobile",
  "tools"
];

export const getCategoryLabel = (category) => {
  const labels = {
    all: "All Skills",
    frontend: "Frontend",
    backend: "Backend",
    database: "Database & AI",
    mobile: "Mobile",
    tools: "Tools & DevOps"
  };
  return labels[category] || category;
};
