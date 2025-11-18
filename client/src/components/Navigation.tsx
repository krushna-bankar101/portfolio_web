import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "about", "skills", "projects", "achievements", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass border-b border-border/20" : "bg-transparent"
      }`}
      data-testid="nav-main"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("home")}
            className="font-mono text-xl font-bold text-gradient hover-elevate active-elevate-2 px-3 py-1 rounded-md"
            data-testid="button-logo"
          >
            &lt;KB /&gt;
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-md font-medium transition-all hover-elevate active-elevate-2 ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                data-testid={`link-nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open("mailto:krushnabankar101@gmail.com")}
              data-testid="button-contact-cta"
            >
              Get in Touch
            </Button>
          </div>

          <button
            className="md:hidden p-2 hover-elevate active-elevate-2 rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden glass border-t border-border/20" data-testid="menu-mobile">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-2 rounded-md hover-elevate active-elevate-2 ${
                  activeSection === item.id
                    ? "text-primary bg-primary/10"
                    : "text-foreground"
                }`}
                data-testid={`link-mobile-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="outline"
              className="w-full mt-4"
              onClick={() => window.open("mailto:krushnabankar101@gmail.com")}
              data-testid="button-mobile-contact"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
