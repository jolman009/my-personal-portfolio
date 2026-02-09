import { Book, Rocket, Users, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { bio } from "@/data/bio";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const iconMap = {
  Book,
  Rocket,
  Users,
  Zap,
};

export const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="about"
      ref={ref}
      className={cn(
        "py-24 px-4 relative",
        isVisible ? "animate-reveal" : "opacity-0"
      )}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Story Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">
              The 20-Year Journey Back to Code
            </h3>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{bio.story.intro}</p>
              <p>{bio.story.comeback}</p>
              <p>{bio.story.journey}</p>
              <p className="font-medium text-foreground">{bio.story.shelfquest}</p>
              <p className="text-foreground">{bio.story.now}</p>
            </div>

            {/* Timeline highlight */}
            <div className="bg-secondary/30 rounded-lg p-6 border border-border">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <span className="text-xl" aria-hidden="true">📅</span> Journey Timeline
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">First code written</span>
                  <span className="font-medium">2002</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Teaching & coaching</span>
                  <span className="font-medium">2002-2022</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Returned to coding</span>
                  <span className="font-medium">Aug 2022</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Built ShelfQuest</span>
                  <span className="font-medium text-primary">Aug-Nov 2024</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="cosmic-button">
                Let's Connect
              </a>
              <a
                href="#shelfquest"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center"
              >
                See My Work
              </a>
            </div>
          </div>

          {/* Strengths Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">What I Bring</h3>

            <div className="grid grid-cols-1 gap-6">
              {bio.strengths.map((strength, index) => {
                const Icon = iconMap[strength.icon];
                return (
                  <div
                    key={index}
                    className="gradient-border p-6 card-hover bg-card"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold text-lg mb-2">
                          {strength.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {strength.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Key Stats */}
            <div className="bg-secondary/30 rounded-lg p-6 border border-border">
              <h4 className="font-semibold mb-4">Quick Facts</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-2xl font-bold text-primary">2.5</div>
                  <div className="text-muted-foreground">Years Modern Dev</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">90</div>
                  <div className="text-muted-foreground">Days to Build App</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-muted-foreground">Technologies Used</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">3</div>
                  <div className="text-muted-foreground">Platforms (Win/iOS/Android)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
