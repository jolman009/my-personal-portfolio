import { ArrowUp, Github, Heart } from "lucide-react";
import { bio } from "@/data/bio";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} {bio.name}. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Built with React, Vite, and Tailwind CSS
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            <a
              href={bio.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="#hero"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </a>
          </div>
        </div>

        {/* Attribution */}
        <div className="text-center mt-6 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
            Made with <Heart className="h-3 w-3 text-red-500 fill-current" /> by a self-taught developer
          </p>
        </div>
      </div>
    </footer>
  );
};
