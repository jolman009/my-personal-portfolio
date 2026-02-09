import {
  ExternalLink,
  Github,
  Smartphone,
  Zap,
  Lock,
  Cloud,
  BookOpen,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";
import { projects } from "@/data/projects";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const ShelfQuestSection = () => {
  const shelfquest = projects.find(p => p.featured);
  const { ref, isVisible } = useScrollReveal();

  if (!shelfquest) return null;

  const featureIcons = {
    0: BookOpen,
    1: Sparkles,
    2: Zap,
    3: Cloud,
    4: Smartphone,
    5: Lock,
  };

  return (
    <section
      id="shelfquest"
      ref={ref}
      className={cn(
        "py-24 px-4 relative bg-secondary/30",
        isVisible ? "animate-reveal" : "opacity-0"
      )}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm font-medium text-primary">Featured Project</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {shelfquest.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {shelfquest.subtitle}
          </p>
        </div>
        <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl border border-border">
          <img
            src="/projects/heroshot_shelfquest.png"
            alt="ShelfQuest app screenshot"
            className="w-full h-auto object-cover aspect-video"
          />
        </div>

        {/* Project Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Main Description */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">The Challenge</h3>
              <p className="text-muted-foreground leading-relaxed">
                As a former English teacher, I saw firsthand how digital distractions 
                make it harder for people to build consistent reading habits. I wanted 
                to create a reading app that was offline-first, privacy-focused, and 
                actually helped people read more—not just manage their library.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">The Solution</h3>
              <p className="text-muted-foreground leading-relaxed">
                {shelfquest.longDescription}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">What I Learned</h3>
              <p className="text-muted-foreground leading-relaxed">
                Building ShelfQuest taught me how to architect a production application 
                from scratch—from database schema design and API architecture to 
                cross-platform builds and CI/CD pipelines. The biggest lesson? Start 
                with user needs, then choose the technology stack to solve those needs.
              </p>
            </div>
          </div>

          {/* Metrics & Links */}
          <div className="space-y-6">
            {/* Key Metrics */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <h4 className="font-semibold mb-4">Project Stats</h4>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Build Time</div>
                  <div className="text-2xl font-bold text-primary">
                    {shelfquest.metrics.buildTime}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Status</div>
                  <div className="font-semibold">{shelfquest.metrics.status}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Tech Stack</div>
                  <div className="font-semibold">{shelfquest.metrics.techStack}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Coming Soon</div>
                  <div className="font-semibold">Google Play & App Store</div>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="space-y-3">
              <a
                href={shelfquest.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-button w-full flex items-center justify-center gap-2"
              >
                <ExternalLink size={18} />
                Visit ShelfQuest.org
              </a>
              
              {shelfquest.githubUrl && (
                <a
                  href={shelfquest.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Github size={18} />
                  View Code
                </a>
              )}

              {!shelfquest.githubUrl && (
                <div className="text-center text-sm text-muted-foreground py-2">
                  <Lock className="inline h-4 w-4 mr-1" />
                  Private repository
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shelfquest.features.map((feature, index) => {
              const Icon = featureIcons[index] || BookOpen;
              return (
                <div 
                  key={index}
                  className="bg-card rounded-lg p-6 border border-border card-hover"
                >
                  <Icon className="h-8 w-8 text-primary mb-3" />
                  <p className="font-medium">{feature}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {shelfquest.tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm font-medium border rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Technical Challenges */}
        <div className="bg-card rounded-lg p-8 border border-border">
          <h3 className="text-2xl font-semibold mb-6">Technical Challenges Solved</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {shelfquest.challenges.map((challenge, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">{index + 1}</span>
                  </div>
                </div>
                <p className="text-muted-foreground">{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
