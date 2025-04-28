
import { useEffect, useRef, useState } from "react";

const teamMembers = [
  {
    name: "Anika Johnson",
    position: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop",
    bio: "With 15+ years in tech leadership, Anika drives our vision and strategy.",
  },
  {
    name: "Marcus Chen",
    position: "CTO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop",
    bio: "Marcus leads our technical innovations with expertise in cloud architecture and AI.",
  },
  {
    name: "Leila Washington",
    position: "Head of Operations",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1461&auto=format&fit=crop",
    bio: "Leila ensures our processes deliver exceptional results for every client.",
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
    <section className="section-spacing bg-secondary/30" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
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
              className={`bg-background rounded-lg overflow-hidden shadow-md border border-border transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div className="aspect-w-1 aspect-h-1 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-72 object-cover object-center"
                />
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
