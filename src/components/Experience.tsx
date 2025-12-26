const experiences = [
  {
    period: "June 2022 — July 2025",
    role: "Staff Software Engineer",
    company: "Intel Corporation",
    description: "Founding team member for Intel Tiber AI Cloud, driving early feature roadmaps and architecture across AI cloud services while aligning cross-functional efforts to accelerate delivery and enhance platform scalability and reliability.",
    highlights: ["AI Cloud", "Team Leadership", "Product Strategy", "Data Engineering", "Scalable Architecture", "Cross-Functional Collaboration"]
  },
  {
    period: "March 2021 — June 2022",
    role: "AI Software Engineer",
    company: "Amazon",
    description: "Worked in AWS AI (Personalize), partnering with AI/ML scientists and engineering teams to design and deliver scalable, high-performance features that power real-time recommendations.",
    highlights: ["AWS Security Guardian", "Document Bar Raiser", "AI Based Recommendation Systems", "User Research", "A/B Testing", "Scalable Systems", "Cross-Functional Collaboration", 
      "Cloud-Native Architecture", "Microservices", "Project Management", "Launch Strategies", "Technical Documentation"
    ]
  },
  {
    period: "January 2018 — February 2021",
    role: "Software Engineer",
    company: "Amazon",
    description: "Owned performance and scalability initiatives for AWS Elastic Block Store, collaborating with engineering and product teams to enhance customer experience. At Alexa, drove platform improvements in the routine automation framework, increasing extensibility and adoption among skill developers.",
    highlights: ["Performance", "Scalability", "User Research", "Feature Roadmap", "Distributed System Design", "Cross-Functional Collaboration", "Automation Framework" , "Developer Experience", "Microservices"]
  },
  {
    period: "April 2015 — August 2016",
    role: "Release Management Engineer",
    company: "Oracle",
    description: "Owned release planning and execution for complex, multi-service platforms, coordinating across engineering, QA, security, and operations to deliver reliable, on-time product releases. Focused on balancing delivery velocity with quality and risk management, ensuring releases aligned with product priorities, customer expectations, and operational readiness.",
    highlights: ["Release Management", "Launch Execution", "Process Improvement", "Product Analytics", "Cross-Functional Collaboration", "KPI Definition & Analysis", "Risk Management", ]
  },
  {
    period: "July 2013 — April 2015",
    role: "Software Engineer",
    company: "Verizon",
    description: "Defined and delivered core financial platform features, collaborating with product, legal, and operations teams to translate requirements into scalable, customer-facing solutions. Prioritized and executed billing and tax services, driving compliance, cost savings, and improved user experience.",
    highlights: ["Business Requirements Analysis", "Feature Development", "Cost Optimization","Microservices Architecture", "Data-Driven Decision Making"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative">
      {/* Background accent */}
      <div className="absolute right-0 top-1/4 w-1/3 h-96 bg-gold/5 blur-3xl rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <p className="font-body text-gold text-sm tracking-widest uppercase mb-4 text-center">
            Career Journey
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
            Work <span className="text-gradient">Experience</span>
          </h2>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-16 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-gold rounded-full md:-translate-x-1/2 -translate-x-1/2 shadow-gold glow-gold" />

                {/* Content */}
                <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <span className="font-body text-gold text-sm tracking-wide">
                    {exp.period}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-foreground mt-2">
                    {exp.role}
                  </h3>
                  <p className="font-display text-lg text-muted-foreground mb-4">
                    {exp.company}
                  </p>
                  <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {exp.highlights.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 text-xs font-body rounded-full bg-secondary text-secondary-foreground border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
