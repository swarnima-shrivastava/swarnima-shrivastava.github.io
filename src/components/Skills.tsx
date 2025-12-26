const skillCategories = [
  {
    title: "Product Design",
    skills: [
      "Product Roadmapping & Strategy",
      "Feature Prioritization",
      "User-Centered Design",
      "User Research & Feedback Analysis",
      "Data-Driven Product Decisions"
    ]
  },
  {
    title: "Software Development",
    skills: [
      "Cloud-Native Architecture",
      "Microservices & API Design",
      "AI/ML Integration",
      "Python, Go, Java"
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      "Kubernetes & Docker",
      "CI/CD (Jenkins, GitHub Actions)",
      "Observability (Prometheus, Grafana, ELK)",
      "OpenTelemetry & Monitoring"
    ]
  },
  {
    title: "Leadership & Strategy",
    skills: [
      "Cross-Functional Leadership",
      "Mentorship & Coaching",
      "Technical & Product Strategy",
      "Data-Driven Decision Making",
      "Stakeholder Communication & Collaboration"
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <p className="font-body text-gold text-sm tracking-widest uppercase mb-4 text-center">
          Expertise
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
          Skills & <span className="text-gradient">Technologies</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={category.title}
              className="p-8 rounded-2xl bg-gradient-card border border-border hover:border-gold/30 transition-all duration-500 shadow-card group"
            >
              <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gold group-hover:shadow-gold transition-shadow" />
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                    className="font-body text-muted-foreground hover:text-foreground transition-colors cursor-default flex items-center gap-3"
                    style={{ animationDelay: `${(catIndex * 6 + skillIndex) * 50}ms` }}
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/50" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "12+", label: "Years Experience" },
            { number: "100+", label: "Features Delivered" },
            { number: "20+", label: "Engineers Mentored" },
            { number: "30+", label: "Product & Technical Documents" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-5xl md:text-6xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="font-body text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
