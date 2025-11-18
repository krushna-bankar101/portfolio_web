import { useEffect, useState } from "react";

export default function AnimatedRoles() {
  const roles = [
    "Software Developer",
    "Data Science Learner",
    "Full Stack Developer"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseAfterComplete = 2000;
    const pauseAfterDelete = 500;

    if (!isDeleting && charIndex === currentRole.length) {
      setTimeout(() => setIsDeleting(true), pauseAfterComplete);
      return;
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      setTimeout(() => {}, pauseAfterDelete);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(currentRole.substring(0, charIndex));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentRoleIndex]);

  return (
    <div className="hidden md:flex items-center justify-center gap-4 mt-8">
      <div className="relative flex items-center gap-3">
        <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary to-primary animate-pulse" />
        
        <div className="relative h-12 flex items-center min-w-[320px]">
          <span 
            className="font-mono text-xl text-primary animate-glow"
            data-testid="text-animated-role"
          >
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        <div className="h-px w-12 bg-gradient-to-l from-transparent via-primary to-primary animate-pulse" />
      </div>
    </div>
  );
}
