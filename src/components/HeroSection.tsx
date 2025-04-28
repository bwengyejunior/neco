
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Empowering Businesses Through Innovative Technology Solutions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Expert IT consulting, software development, and cloud integration to accelerate your growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Get Started
              </a>
              <a href="#services" className="btn-secondary">
                Learn More
              </a>
            </div>
          </div>
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-lg transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1740&auto=format&fit=crop"
                alt="Black business professionals collaborating"
                className="rounded-lg shadow-lg w-full h-auto relative z-10 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
