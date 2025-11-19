import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import AnimatedRoles from "./AnimatedRoles";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.fillStyle = "rgba(10, 15, 30, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 217, 255, 0.5)`;
        ctx.fill();

        particles.forEach((otherParticle, j) => {
          if (i === j) return;
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(0, 217, 255, ${0.2 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 -z-10"
        style={{ background: "radial-gradient(ellipse at center, rgba(20, 30, 60, 1) 0%, rgba(10, 15, 30, 1) 100%)" }}
      />

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="font-mono text-primary text-lg" data-testid="text-greeting">
              Hi, I am
            </p>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-gradient"
              data-testid="text-name"
            >
              Krushna Bankar
            </h1>
            <AnimatedRoles />
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto md:hidden" data-testid="text-role">
              Computer Engineering Student | Web Developer | Aspiring Full-Stack & Data Science Enthusiast
            </p>
          </div>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed" data-testid="text-bio">
            Passionate about building innovative web applications and exploring the intersection of full-stack development and data science. 
            Currently studying at GCOERC, Nashik with an SGPA of 8.7.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <Button
              size="lg"
              className="neon-glow"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              data-testid="button-view-projects"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              data-testid="button-contact"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="neon-glow"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/resume.pdf';
                link.download = 'Krushna_Bankar_Resume.pdf';
                link.click();
              }}
              data-testid="button-download-resume"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 pt-8">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => window.open("https://github.com/krushna-bankar101", "_blank")}
              data-testid="button-github"
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => window.open("https://linkedin.com/in/krushna-bankar-901514319", "_blank")}
              data-testid="button-linkedin"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => window.open("mailto:krushnabankar101@gmail.com")}
              data-testid="button-email"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
