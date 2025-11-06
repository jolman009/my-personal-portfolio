import { ArrowRight, ExternalLink, Github, Lock } from "lucide-react";
import { getActiveProjects } from "@/data/projects";

export const ProjectsSection = () => {
  const projects = getActiveProjects();

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Other <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Beyond ShelfQuest, here are other projects that showcase my journey 
          from 2002 to today. Each one tells part of my story as a developer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-sm card-hover border border-border"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-muted-foreground text-sm">
                      📸 Add {project.title} screenshot
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      800x450px recommended
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title and Subtitle */}
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                {project.subtitle && (
                  <p className="text-sm text-primary mb-2">{project.subtitle}</p>
                )}

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Legacy badge if applicable */}
                {project.legacy && (
                  <div className="mb-4">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                      🕰️ Legacy Project (2002)
                    </span>
                  </div>
                )}

                {/* Links */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        aria-label="View live demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        aria-label="View source code"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {!project.githubUrl && !project.legacy && (
                      <span 
                        className="text-muted-foreground/50 flex items-center gap-1 text-xs"
                        title="Private repository"
                      >
                        <Lock size={16} />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to GitHub */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to see more of my work and contributions?
          </p>
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/jolman009"
          >
            Visit My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
