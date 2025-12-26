import { Compass, Layers, TrendingUp } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Compass,
      title: "Navigating Ambiguity",
      description: "Making sense of unclear problem spaces and turning them into actionable product direction."
    },
    {
      icon: Layers,
      title: "Systems Thinking",
      description: "Looking beyond individual features to understand how decisions shape the whole system over time."
    },
    {
      icon: TrendingUp,
      title: "Feature Prioritization & Scalable Design",
      description: "Making intentional tradeoffs and designing systems that scale with both the product and its users."
    }
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div>
            <p className="font-body text-gold text-sm tracking-widest uppercase mb-4">
              About Me
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
              Shaping Ideas into UX,<br />
              <span className="text-gradient">One Feature at a Time</span>
            </h2>
            <div className="space-y-6 font-body text-lg text-muted-foreground leading-relaxed">
              <p>
                I’m a technology professional with over 12 years of experience building and scaling cloud-native platforms,
                microservices, and AI-driven systems across companies like AWS, Intel, Oracle, and Verizon. I enjoy working at
                the intersection of product and engineering—turning complex technical problems into clear, user-centered solutions
                grounded in long-term thinking.
              </p>
              <p>
                Over the years, I’ve partnered closely with engineering, design, and data teams to shape roadmaps, guide technical
                decisions, and improve platform performance, while also mentoring engineers and encouraging thoughtful, sustainable
                practices.
              </p>
              <p>
                I’m deeply interested in how Applied AI can be used responsibly and pragmatically, and I’m currently focused on
                shaping product strategy that balances innovation with real-world impact.
              </p>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div 
                key={item.title}
                className="group p-8 rounded-2xl bg-gradient-card border border-border hover:border-gold/30 transition-all duration-500 shadow-card hover:shadow-gold"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-gold/10 text-gold group-hover:bg-gold group-hover:text-primary-foreground transition-all duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
