
import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    quote: "neco completely transformed our digital infrastructure, delivering a custom solution that exceeded our expectations. Their team's expertise and professionalism made the entire process seamless.",
    author: "Sarah Johnson",
    position: "CTO, Apex Innovations",
  },
  {
    quote: "Working with neco has been a game-changer for our company. Their strategic IT consulting helped us identify opportunities for improvement and implement solutions that have significantly increased our productivity.",
    author: "Michael Rodriguez",
    position: "Operations Director, Global Tech",
  },
  {
    quote: "The cloud migration handled by neco was flawless. Their attention to detail and commitment to security gave us complete confidence throughout the process. We now have a scalable infrastructure that supports our growing business.",
    author: "Jennifer Chen",
    position: "CEO, DataFlow Systems",
  },
  {
    quote: "neco's software development team delivered exactly what we needed - a custom application that streamlines our operations and improves customer experience. Their ongoing support has been equally impressive.",
    author: "David Washington",
    position: "Product Manager, EnterpriseNow",
  },
];

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const maxSlide = Math.ceil(testimonials.length / 2) - 1;

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

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide >= maxSlide ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide <= 0 ? maxSlide : prevSlide - 1));
  };

  return (
    <section id="testimonials" className="section-spacing" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from the businesses we've helped succeed.
          </p>
        </div>

        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative">
            <div
              className="overflow-hidden"
              style={{ padding: "1px" }} // Prevent margin collapse
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {Array(Math.ceil(testimonials.length / 2))
                  .fill(0)
                  .map((_, pageIndex) => (
                    <div
                      key={pageIndex}
                      className="min-w-full grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                      {testimonials
                        .slice(pageIndex * 2, pageIndex * 2 + 2)
                        .map((testimonial, index) => (
                          <div
                            key={index}
                            className="testimonial-card flex flex-col h-full"
                          >
                            <div className="mb-6">
                              {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-primary">
                                  ★
                                </span>
                              ))}
                            </div>
                            <p className="text-lg mb-6 flex-grow">
                              "{testimonial.quote}"
                            </p>
                            <div>
                              <h4 className="font-bold">
                                {testimonial.author}
                              </h4>
                              <p className="text-muted-foreground">
                                {testimonial.position}
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  ))}
              </div>
            </div>

            <div className="flex justify-center mt-8 gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Previous testimonial"
              >
                &larr;
              </button>
              <div className="flex space-x-2">
                {Array(maxSlide + 1)
                  .fill(0)
                  .map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full ${
                        currentSlide === index
                          ? "bg-primary"
                          : "bg-muted hover:bg-primary/50"
                      } transition-colors`}
                      aria-label={`Go to slide ${index + 1}`}
                    ></button>
                  ))}
              </div>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Next testimonial"
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
