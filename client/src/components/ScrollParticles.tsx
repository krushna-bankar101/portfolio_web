import { useEffect, useRef } from "react";

export default function ScrollParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };

    resizeCanvas();

    interface Particle {
      x: number;
      y: number;
      baseY: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      speed: number;
    }

    const particles: Particle[] = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      const y = Math.random() * canvas.height;
      particles.push({
        x: Math.random() * canvas.width,
        y: y,
        baseY: y,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        color: Math.random() > 0.5 ? "rgba(0, 217, 255, 0.6)" : "rgba(176, 38, 255, 0.6)",
        speed: Math.random() * 0.5 + 0.1,
      });
    }

    let scrollProgress = 0;
    let animationId: number;

    const updateScrollProgress = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress = window.scrollY / maxScroll;
    };

    const animate = () => {
      ctx.fillStyle = "rgba(10, 15, 30, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        const scrollInfluence = scrollProgress * 100;
        
        particle.x += particle.vx + scrollInfluence * particle.speed * 0.1;
        particle.y += particle.vy + Math.sin(Date.now() * 0.001 + i) * 0.5;

        const distanceFromBase = Math.abs(particle.y - particle.baseY);
        if (distanceFromBase > 200) {
          particle.y += (particle.baseY - particle.y) * 0.01;
        }

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        const opacity = 0.3 + scrollProgress * 0.4;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        );
        gradient.addColorStop(0, particle.color.replace('0.6', String(opacity)));
        gradient.addColorStop(1, particle.color.replace('0.6', '0'));
        
        ctx.fillStyle = gradient;
        ctx.fill();

        particles.forEach((otherParticle, j) => {
          if (i === j) return;
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          const maxDistance = 150 - scrollProgress * 50;
          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            
            const lineOpacity = (0.15 + scrollProgress * 0.2) * (1 - distance / maxDistance);
            ctx.strokeStyle = particle.color.replace('0.6', String(lineOpacity));
            ctx.lineWidth = 0.5 + scrollProgress;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleScroll = () => {
      updateScrollProgress();
    };

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    updateScrollProgress();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full pointer-events-none z-0"
      style={{ 
        mixBlendMode: "screen",
        opacity: 0.4,
      }}
    />
  );
}
