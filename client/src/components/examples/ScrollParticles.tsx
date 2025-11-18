import ScrollParticles from '../ScrollParticles';

export default function ScrollParticlesExample() {
  return (
    <div className="h-[300vh] bg-background relative">
      <ScrollParticles />
      <div className="relative z-10 p-8">
        <h1 className="text-4xl font-bold text-gradient mb-4">Scroll to see particles react</h1>
        <p className="text-muted-foreground">The particles change behavior based on scroll position</p>
      </div>
    </div>
  );
}
