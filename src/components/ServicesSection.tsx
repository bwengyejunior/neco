
import { useEffect, useRef, useState } from "react";
import { Code, LineChart, Cloud } from "lucide-react";

const services = [
  {
    title: "Custom Software Development",
    description:
      "We design and build tailored software solutions that solve your unique business challenges. Our expert development team uses cutting-edge technology to deliver high-performance, scalable applications.",
    icon: Code,
  },
  {
    title: "Strategic IT Consulting",
    description:
      "Our experienced consultants analyze your business needs and provide strategic technology roadmaps. We help you make informed decisions to optimize operations and drive innovation.",
    icon: LineChart,
  },
  {
    title: "Cloud Migration & Management",
    description:
      "Seamlessly transition your infrastructure to the cloud with our comprehensive migration services. We ensure secure, efficient cloud environments with ongoing management and optimization.",
    icon: Cloud,
  },
];

const ServicesSection = () => {
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
    <section id="services" className="section-spacing bg-secondary/50" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We deliver comprehensive technology solutions designed to help businesses thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`service-card ${
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
              <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
