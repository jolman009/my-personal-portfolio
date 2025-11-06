import { ArrowDown, Download } from "lucide-react";
import { bio } from "@/data/bio";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* Headline with staggered animation */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              {bio.name.split(" ")[0]}
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              {bio.name.split(" ")[1]}
            </span>
          </h1>

          {/* Compelling subtitle */}
          <p className="text-xl md:text-2xl font-semibold text-primary opacity-0 animate-fade-in-delay-3">
            {bio.subtitle}
          </p>

          {/* Main tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in-delay-4 leading-relaxed">
            {bio.tagline}
          </p>

          {/* Key achievements badges */}
          <div className="flex flex-wrap justify-center gap-4 pt-4 opacity-0 animate-fade-in-delay-4">
            <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm font-medium">
                🚀 Built ShelfQuest in 90 Days
              </span>
            </div>
            <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm font-medium">
                📱 Live on Windows Store
              </span>
            </div>
            <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm font-medium">
                🎓 Former Teacher & Coach
              </span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center opacity-0 animate-fade-in-delay-4">
            <a href="#shelfquest" className="cosmic-button">
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
