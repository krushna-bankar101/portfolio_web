import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SkillsSection() {
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

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C++", "Java", "Python", "JavaScript"],
      color: "primary",
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "Full Stack", "React", "Node.js"],
      color: "secondary",
    },
    {
      title: "Data & Tools",
      skills: ["Data Science", "MS Excel", "PowerPoint", "Tally"],
      color: "primary",
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Leadership", "Team Collaboration", "Event Management"],
      color: "secondary",
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      data-testid="section-skills"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="font-mono text-primary mb-2" data-testid="text-skills-prefix">
            &gt;_ Technical expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient" data-testid="text-skills-title">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className={`glass border-${category.color}/20 p-8 transition-all duration-1000 hover-elevate active-elevate-2 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${categoryIndex * 200}ms`,
              }}
              data-testid={`card-skill-category-${categoryIndex}`}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className={`w-1 h-8 bg-${category.color} rounded-full`} />
                  <h3 className="text-xl font-bold font-mono" data-testid={`text-category-${categoryIndex}`}>
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className={`border-${category.color}/40 bg-${category.color}/10 hover:bg-${category.color}/20 transition-all duration-300`}
                      data-testid={`badge-skill-${categoryIndex}-${skillIndex}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div
          className={`mt-12 text-center transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="glass border-primary/20 p-6 inline-block" data-testid="card-learning">
            <p className="font-mono text-muted-foreground">
              <span className="text-primary">const</span> learningMode ={" "}
              <span className="text-secondary">true</span>; 
              <span className="text-muted-foreground ml-2">// Always learning & growing</span>
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
