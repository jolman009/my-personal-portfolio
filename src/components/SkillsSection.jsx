import { useState } from "react";
import { cn } from "@/lib/utils";
import { skills, categories, getCategoryLabel } from "@/data/skills";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const { ref, isVisible } = useScrollReveal();

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      ref={ref}
      className={cn(
        "py-24 px-4 relative bg-secondary/30",
        isVisible ? "animate-reveal" : "opacity-0"
      )}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Tech Stack</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Technologies I've mastered while building ShelfQuest and other projects.
          Skill levels reflect practical, production experience.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" role="tablist" aria-label="Filter skills by category">
          {categories.map((category) => (
            <button
              key={category}
              role="tab"
              aria-selected={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize text-sm font-medium",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-secondary/70 text-foreground hover:bg-secondary hover:scale-105"
              )}
            >
              {getCategoryLabel(category)}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-sm card-hover border border-border"
            >
              {/* Skill Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  {skill.icon && <span className="text-xl" aria-hidden="true">{skill.icon}</span>}
                  {skill.name}
                </h3>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left transition-all duration-1000 ease-out"
                  role="progressbar"
                  aria-valuenow={skill.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${skill.name} proficiency`}
                  style={{
                    width: `${skill.level}%`,
                    animation: "grow 1.5s ease-out",
                  }}
                />
              </div>

              {/* Level Indicator */}
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-muted-foreground capitalize">
                  {skill.category}
                </span>
                <span className="text-sm font-medium text-primary">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Note */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-card rounded-lg p-6 border border-border max-w-2xl">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">
                Continuous Learner:
              </span>{" "}
              I mastered these technologies through freeCodeCamp, Microsoft Learn,
              YouTube tutorials, documentation, and most importantly—building real
              projects. Always expanding my toolkit as needs arise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
