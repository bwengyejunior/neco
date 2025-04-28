
import { useEffect, useRef, useState } from "react";
import { Clock, Headphones, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Fast Delivery Times",
    description: "We prioritize efficient execution without compromising quality, ensuring your projects launch on schedule.",
    icon: Clock,
  },
  {
    title: "Dedicated Support Team",
    description: "Our responsive support team is always ready to assist, providing timely solutions to keep your business running smoothly.",
    icon: Headphones,
  },
  {
    title: "Scalable, Secure Solutions",
    description: "We build with growth in mind, delivering secure, adaptable solutions that evolve with your business needs.",
    icon: ShieldCheck,
  },
];

const FeaturesSection = () => {
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
    <section className="section-spacing bg-gradient-to-b from-secondary/30 to-background" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">
            Why Choose neco
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We combine technical excellence with a customer-first approach to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-animation">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center glass-card p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="feature-icon mx-auto">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
