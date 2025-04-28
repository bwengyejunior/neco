
import { useEffect, useRef, useState } from "react";

const CtaSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="contact"
      className="relative section-spacing overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-500"></div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Elevate Your Business?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Let's build the future together.
          </p>
          <a
            href="#contact-form"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-8 py-3 text-sm font-medium text-primary ring-offset-background transition-all duration-300 hover:bg-white/90 hover:shadow-lg hover:shadow-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
