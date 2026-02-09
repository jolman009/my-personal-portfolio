import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { getNonFeaturedProjects } from "@/data/projects";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const ProjectsSection = () => {
  const projects = getNonFeaturedProjects();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="projects"
      ref={ref}
      className={cn(
        "py-24 px-4 relative",
        isVisible ? "animate-reveal" : "opacity-0"
      )}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Other <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Client websites, productivity tools, and full-stack applications —
          each built with modern React and shipped to production.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-sm card-hover border border-border"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-foreground/80">
                      {project.title}
                    </h3>
                  </div>
                )}
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
                  <p className="text-sm text-primary mb-2">
                    {project.subtitle}
                  </p>
                )}

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        aria-label={`View ${project.title} live demo`}
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
                        aria-label={`View ${project.title} source code`}
                      >
                        <Github size={20} />
                      </a>
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
