
import { useEffect, useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teamMembers = [
  {
    name: "Bigira Kajura Johnny",
    position: "CEO & Founder",
    image: "/lovable-uploads/b15b3809-3f2d-4d91-81f0-9c7e7aa86e71.png",
    bio: "With 15+ years in tech leadership, Johnny drives our vision and strategy to deliver exceptional technology solutions in Uganda.",
  },
  {
    name: "Bwengye Junior",
    position: "CTO",
    image: "/lovable-uploads/5538eba1-0b55-4fe0-b4df-aa4b5664b549.png",
    bio: "Bwengye leads our technical innovations with expertise in cloud architecture and AI implementation across Uganda and East Africa.",
  },
  {
    name: "David Okafor",
    position: "Head of Operations",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1374&auto=format&fit=crop",
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
            Passionate experts committed to delivering exceptional technology solutions in Uganda.
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
                <div className="flex items-center gap-4 mb-3">
                  <Avatar className="h-10 w-10 border-2 border-primary">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary">{member.position}</p>
                  </div>
                </div>
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
