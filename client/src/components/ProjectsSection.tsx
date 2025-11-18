import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import amazonImage from "@assets/generated_images/Amazon_clone_homepage_82d55de9.png";
import socialiseImage from "@assets/generated_images/Socialise_social_media_app_cda06aa4.png";
import rentalImage from "@assets/generated_images/Rental_agreement_platform_514c680f.png";
import hackathonImage from "@assets/generated_images/Tech-Guru_hackathon_project_cd97e632.png";
import gameImage from "@assets/generated_images/Web-based_mini_game_1cd7760c.png";

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Amazon Clone",
      description: "Built a responsive clone of Amazon's homepage with UI components, product cards, and interactive hover effects.",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "Web Development",
      image: amazonImage,
    },
    {
      title: "Socialise - Social Media App",
      description: "Developed a full-featured social media application with user profiles, posting functionality, and real-time interactions.",
      tech: ["JavaScript", "React", "Node.js"],
      category: "Full Stack",
      image: socialiseImage,
    },
    {
      title: "Rental Agreement Transparency Platform",
      description: "Created a digital platform for transparent and secure rental agreement management with document verification.",
      tech: ["JavaScript", "Full Stack", "Security"],
      category: "Web Application",
      image: rentalImage,
    },
    {
      title: "Tech-Guru Hackathon Project",
      description: "Built a functional prototype within tight time constraints during a college hackathon, focusing on innovative problem-solving.",
      tech: ["JavaScript", "Rapid Development"],
      category: "Hackathon",
      image: hackathonImage,
    },
    {
      title: "Web-based Mini Game",
      description: "Designed an interactive browser-based mini-game using DOM manipulation and event handling.",
      tech: ["JavaScript", "DOM", "Game Logic"],
      category: "Game Development",
      image: gameImage,
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      data-testid="section-projects"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="font-mono text-primary mb-2" data-testid="text-projects-prefix">
            &gt;_ What I've built
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient" data-testid="text-projects-title">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`glass border-primary/20 hover-elevate active-elevate-2 group transition-all duration-700 hover:scale-105 perspective-1000 overflow-hidden ${
                isVisible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-10 rotate-3"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
              data-testid={`card-project-${index}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-testid={`img-project-${index}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>
              <CardHeader className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="font-mono text-lg" data-testid={`text-project-title-${index}`}>
                    {project.title}
                  </CardTitle>
                  <Badge variant="outline" className="text-xs whitespace-nowrap" data-testid={`badge-category-${index}`}>
                    {project.category}
                  </Badge>
                </div>
                <CardDescription className="text-sm leading-relaxed" data-testid={`text-project-desc-${index}`}>
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs"
                      data-testid={`badge-tech-${index}-${techIndex}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    onClick={() => console.log(`View ${project.title}`)}
                    data-testid={`button-view-${index}`}
                  >
                    <ExternalLink className="mr-2 h-3 w-3" />
                    View
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => console.log(`GitHub for ${project.title}`)}
                    data-testid={`button-github-${index}`}
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open("https://github.com/krushna-bankar101", "_blank")}
            data-testid="button-view-all-projects"
          >
            <Github className="mr-2 h-4 w-4" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
