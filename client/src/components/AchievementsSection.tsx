import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy, Users, Code } from "lucide-react";
import javaImage from "@assets/generated_images/Java_Virtual_Program_Certificate_a0e46ea2.png";
import frontendImage from "@assets/generated_images/Frontend_Development_Competition_Certificate_a66551fa.png";
import udemyImage from "@assets/generated_images/Udemy_Web_Development_Certificate_10f69818.png";
import googleImage from "@assets/generated_images/Google_IT_Automation_Certificate_c02702ba.png";

export default function AchievementsSection() {
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

  const achievements = [
    {
      icon: Trophy,
      title: "Smart India Hackathon (SIH)",
      description: "Participated in India's largest hackathon, competing with teams nationwide",
      year: "2024",
      type: "Competition",
    },
    {
      icon: Users,
      title: "Coding Club Treasurer",
      description: "Managing responsibilities, organizing events, and mentoring juniors at GCOERC",
      year: "Current",
      type: "Leadership",
    },
    {
      icon: Code,
      title: "Hackathon Mentor",
      description: "Guided and supported participants during college-level hackathons",
      year: "2024",
      type: "Mentorship",
    },
    {
      icon: Award,
      title: "Frontend Developer Internship",
      description: "Completed online internship focused on UI development and frontend technologies",
      year: "2024",
      type: "Experience",
    },
  ];

  const certifications = [
    { name: "Java Virtual Program", image: javaImage },
    { name: "Frontend Development Competition", image: frontendImage },
    { name: "Udemy Web Development", image: udemyImage },
    { name: "Google IT Automation", image: googleImage },
  ];

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      data-testid="section-achievements"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-secondary/5 to-background" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="font-mono text-primary mb-2" data-testid="text-achievements-prefix">
            &gt;_ Milestones & recognition
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient" data-testid="text-achievements-title">
            Achievements
          </h2>
        </div>

        <div className="space-y-6 mb-12">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className={`glass border-primary/20 p-6 hover-elevate active-elevate-2 transition-all duration-700 hover:scale-102 ${
                isVisible
                  ? index % 2 === 0
                    ? "opacity-100 translate-x-0"
                    : "opacity-100 translate-x-0"
                  : index % 2 === 0
                  ? "opacity-0 -translate-x-10"
                  : "opacity-0 translate-x-10"
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
              data-testid={`card-achievement-${index}`}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center neon-glow">
                    <achievement.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-xl font-bold" data-testid={`text-achievement-title-${index}`}>
                      {achievement.title}
                    </h3>
                    <div className="flex gap-2">
                      <Badge variant="outline" data-testid={`badge-year-${index}`}>
                        {achievement.year}
                      </Badge>
                      <Badge variant="secondary" data-testid={`badge-type-${index}`}>
                        {achievement.type}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground" data-testid={`text-achievement-desc-${index}`}>
                    {achievement.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div
          className={`transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="glass border-secondary/20 p-8" data-testid="card-certifications">
            <h3 className="text-2xl font-bold mb-6 font-mono" data-testid="text-certifications-title">
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-primary/20 hover-elevate active-elevate-2 group transition-all duration-300 hover:scale-105"
                  data-testid={`card-cert-${index}`}
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      data-testid={`img-cert-${index}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  </div>
                  <div className="p-4 text-center">
                    <Award className="h-6 w-6 text-primary mx-auto mb-2" />
                    <p className="text-sm font-medium" data-testid={`text-cert-${index}`}>
                      {cert.name}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
