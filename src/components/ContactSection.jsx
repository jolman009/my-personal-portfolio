import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { bio } from "@/data/bio";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// TODO: Replace with your Formspree form ID from https://formspree.io
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { ref, isVisible } = useScrollReveal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.target);
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        e.target.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch {
      toast({
        title: "Oops!",
        description: "Something went wrong. Please email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={cn(
        "py-24 px-4 relative bg-secondary/30",
        isVisible ? "animate-reveal" : "opacity-0"
      )}
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Let's <span className="text-primary">Connect</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm actively seeking opportunities as a full-stack developer.
          Whether you're hiring, want to collaborate, or just want to chat
          about tech—I'd love to hear from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a
                    href={`mailto:${bio.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {bio.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <a
                    href={`tel:${bio.phone.replace(/\D/g, '')}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {bio.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-muted-foreground">{bio.location}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Open to remote opportunities
                  </p>
                </div>
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                <h4 className="font-medium">Currently Available</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                {bio.availability.status}
              </p>
              <div className="flex flex-wrap gap-2">
                {bio.availability.preferences.map((pref, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                  >
                    {pref}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a
                  href={bio.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary hover:bg-primary/10 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                {bio.social.linkedin && (
                  <a
                    href={bio.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-secondary hover:bg-primary/10 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}
                {!bio.social.linkedin && (
                  <div className="text-xs text-muted-foreground self-center">
                    LinkedIn coming soon
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all"
                  placeholder="Hi Joel, I'd love to discuss..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  isSubmitting && "opacity-50 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>

              <p className="text-xs text-muted-foreground text-center">
                Or email me directly at{" "}
                <a href={`mailto:${bio.email}`} className="text-primary hover:underline">
                  {bio.email}
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
