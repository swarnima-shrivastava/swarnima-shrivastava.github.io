import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl animate-pulse-glow delay-500" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl">
          {/* Greeting */}
          <p className="font-body text-gold text-lg md:text-xl mb-6 opacity-0 animate-fade-up">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 opacity-0 animate-fade-up delay-100">
            Swarnima <span className="text-gradient">Shrivastava</span>
          </h1>

          {/* Title */}
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-8 opacity-0 animate-fade-up delay-200">
            Engineering & Product Strategy Lead
          </h2>

          {/* Description */}
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed opacity-0 animate-fade-up delay-300">
            Transforming complex challenges into user-centered products by bridging strategy, execution, and cross-functional collaboration.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up delay-400">
            {/* <Button variant="gold" size="xl" asChild>
              <a href="#experience">View My Journey</a>
            </Button>
            <Button variant="gold-outline" size="xl" asChild>
              <a href="#contact">Get In Touch</a>
            </Button> */}
            <Button
              variant="gold"
              size="xl"
              asChild
              onClick={() => {
                document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>View My Journey</span>
            </Button>

            <Button
              variant="gold-outline"
              size="xl"
              asChild
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>Get In Touch</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-700">
        <a 
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById("about");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-gold transition-colors cursor-pointer"
        >
          <span className="font-body text-sm tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-5 h-5 animate-float" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
