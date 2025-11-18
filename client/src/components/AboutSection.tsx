import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Code2, Database, Lightbulb, Trophy } from "lucide-react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    { icon: Code2, title: "Web Development", description: "Building responsive, modern web applications" },
    { icon: Database, title: "Data Science", description: "Exploring data-driven solutions" },
    { icon: Lightbulb, title: "Problem Solving", description: "Competitive programming & hackathons" },
    { icon: Trophy, title: "Leadership", description: "Treasurer of Coding Club" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      data-testid="section-about"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="font-mono text-primary mb-2" data-testid="text-about-prefix">
            &gt;_ Get to know me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient" data-testid="text-about-title">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <Card className="glass border-primary/20 p-8" data-testid="card-about-bio">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold font-mono" data-testid="text-about-subtitle">
                  Computer Engineering Student
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid="text-about-description">
                  I'm currently pursuing my B.E. in Computer Engineering at GCOERC, Nashik, maintaining an SGPA of 8.7. 
                  My passion lies in creating innovative web solutions and exploring the fascinating world of data science.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I've worked on diverse projects ranging from e-commerce platforms to social media applications, 
                  and I actively participate in hackathons including Smart India Hackathon (SIH). As the Treasurer of our Coding Club, 
                  I help organize events and mentor juniors in their coding journey.
                </p>
                <div className="pt-4 border-t border-border">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Email</p>
                      <p className="font-mono text-primary" data-testid="text-email">krushnabankar101@gmail.com</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Phone</p>
                      <p className="font-mono" data-testid="text-phone">9307460462</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="glass border-primary/20 p-6 hover-elevate active-elevate-2 transition-all duration-300 hover:scale-105"
                data-testid={`card-highlight-${index}`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold" data-testid={`text-highlight-title-${index}`}>
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground" data-testid={`text-highlight-desc-${index}`}>
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
