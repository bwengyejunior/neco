
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start by understanding your business objectives and technical requirements through in-depth consultation.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Our experts develop a comprehensive roadmap tailored to your specific needs and challenges.",
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "Using agile methodologies, we bring your solution to life with regular updates and transparent communication.",
  },
  {
    number: "04",
    title: "Support",
    description:
      "We provide ongoing maintenance, optimization, and responsive support to ensure long-term success.",
  },
];

const ProcessSection = () => {
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
    <section className="section-spacing" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that delivers consistent results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`relative ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionProperty: "all",
                transitionDuration: "700ms",
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div className="mb-4">
                <span className="text-4xl font-bold text-primary/20">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent transform -translate-x-8"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
