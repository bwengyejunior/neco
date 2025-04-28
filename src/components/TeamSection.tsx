
import { useEffect, useRef, useState } from "react";

const teamMembers = [
  {
    name: "Bigira Kajura Johnny",
    position: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop",
    bio: "With 15+ years in tech leadership, Johnny drives our vision and strategy to deliver exceptional technology solutions.",
  },
  {
    name: "Amara Wilson",
    position: "CTO",
    image: "https://images.unsplash.com/photo-1539701938214-0d9736e1c16b?q=80&w=1374&auto=format&fit=crop",
    bio: "Amara leads our technical innovations with expertise in cloud architecture and AI implementation.",
  },
  {
    name: "David Okafor",
    position: "Head of Operations",
    image: "https://images.unsplash.com/photo-1578496781379-7dcfb995293d?q=80&w=1374&auto=format&fit=crop",
    bio: "David ensures our processes deliver exceptional results for every client through operational excellence.",
  },
];

const TeamSection = () => {
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
    <section className="section-spacing bg-gradient-to-br from-secondary/30 to-background" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Meet Our Team
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate experts committed to delivering exceptional technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`glass-card overflow-hidden transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-72 object-cover object-center transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-primary-foreground/90">{member.position}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary mb-3">{member.position}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
