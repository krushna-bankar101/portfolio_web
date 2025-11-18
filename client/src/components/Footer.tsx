import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/krushna-bankar101",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/krushna-bankar-901514319",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:krushnabankar101@gmail.com",
      label: "Email",
    },
  ];

  const quickLinks = [
    { label: "Home", href: "home" },
    { label: "About", href: "about" },
    { label: "Skills", href: "skills" },
    { label: "Projects", href: "projects" },
    { label: "Achievements", href: "achievements" },
    { label: "Contact", href: "contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-border/20 mt-32" data-testid="footer-main">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="font-mono text-2xl font-bold text-gradient" data-testid="text-footer-brand">
              &lt;KB /&gt;
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed" data-testid="text-footer-tagline">
              Building innovative solutions with code. 
              Computer Engineering student passionate about web development and data science.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg" data-testid="text-footer-links-title">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    data-testid={`link-footer-${link.href}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg" data-testid="text-footer-connect-title">
              Connect With Me
            </h4>
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  size="icon"
                  variant="outline"
                  onClick={() => window.open(social.href, "_blank")}
                  data-testid={`button-footer-${social.label.toLowerCase()}`}
                  className="hover-elevate active-elevate-2"
                >
                  <social.icon className="h-4 w-4" />
                </Button>
              ))}
            </div>
            <p className="text-sm text-muted-foreground" data-testid="text-footer-email">
              krushnabankar101@gmail.com
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p data-testid="text-footer-copyright">
              © {currentYear} Krushna Bankar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
