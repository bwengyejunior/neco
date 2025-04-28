
import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
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
    <section id="about" className="section-spacing" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1469&auto=format&fit=crop"
              alt="neco workplace"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
            <p className="text-lg text-muted-foreground mb-6">
              At neco Technologies, we specialize in delivering tailored technology solutions that drive business success. With a team of experienced IT consultants, software engineers, and cloud specialists, we help companies embrace digital transformation with confidence.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Founded on the principle of innovation with purpose, we combine technical expertise with business acumen to create solutions that not only solve today's problems but prepare your organization for future growth.
            </p>
            <a href="#contact" className="btn-primary">
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
