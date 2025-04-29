
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden relative">
      {/* Background gradient with enhanced effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left Side */}
          <div
            className={`transition-all duration-1200 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              {/* Enhanced decorative element */}
              <div className="absolute -left-8 -top-8 w-24 h-24 bg-gradient-to-br from-primary/40 to-blue-400/40 rounded-full blur-xl animate-pulse"></div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 relative">
                <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent animate-gradient">
                  Empowering Businesses
                </span>{" "}
                Through Innovative Technology Solutions
              </h1>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Expert IT consulting, software development, and cloud integration to accelerate your growth in Uganda and beyond.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="btn-primary shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </a>
              <a 
                href="#services" 
                className="btn-secondary border-primary/20 hover:border-primary/40 transform hover:scale-105 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
          
          {/* Image Content - Right Side */}
          <div
            className={`transition-all duration-1200 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            } order-first lg:order-last`}
          >
            <div className="relative">
              {/* Enhanced animated glowing orbs */}
              <div className="absolute -right-4 top-1/4 w-28 h-28 bg-blue-500/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute right-1/3 -bottom-4 w-36 h-36 bg-primary/30 rounded-full blur-xl animate-pulse" style={{animationDuration: '5s'}}></div>
              
              {/* Updated hero image with the new image */}
              <img
                src="/lovable-uploads/5f18ac1d-2364-49b7-a622-30eedacec7b9.png"
                alt="Professional in suit working on laptop"
                className="w-full h-auto max-w-md mx-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
