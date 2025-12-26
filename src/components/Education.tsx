const education = [
  {
    period: "2025 — 2026(expected)",
    degree: "Berkeley Executive Leadership Program",
    institution: "University of California, Berkeley, Haas School of Business, CA, USA",
    highlights: ["In progress", "Artificial Intelligence & Machine Learning", "Product Management", "The Berkeley Executive Leadership Program", "Financial Data Analysis for Leaders"]
  },
  {
    period: "2016 — 2017",
    degree: "Master of Science in Computer Science",
    institution: "State University of New York at Stony Brook, NY, USA",
    highlights: ["Asynchronous Systems", "Network Security", "Modern Cryptography", "Operating Systems", "Data Visualization", "Compiler Design"]
  },
  {
    period: "2009 — 2013",
    degree: "Bachelor of Technology in Computer Science & Engineering",
    institution: "National Institute of Technology, Bhopal, India",
    highlights: ["Data Structures and Algorithms","Computer Architecture", "Operating Systems", "Database Management Systems", "Software Engineering", "Computer Networks" , "Artificial Intelligence", "Machine Learning", "Communication Skills", "Technical Writing"]
  }
];

const Education = () => {
  return (
    <section id="education" className="py-32 relative bg-secondary/30">
      {/* Background accent */}
      <div className="absolute left-0 top-1/3 w-1/4 h-80 bg-gold/5 blur-3xl rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <p className="font-body text-gold text-sm tracking-widest uppercase mb-4 text-center">
            Academic Background
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
            Education & <span className="text-gradient">Certifications</span>
          </h2>

          {/* Education Cards */}
          <div className="space-y-8 mb-16">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:border-gold/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="font-display text-lg text-gold mt-1">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="font-body text-muted-foreground text-sm tracking-wide whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>
                {/* <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                  {edu.description}
                </p> */}
                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-xs font-body rounded-full bg-gold/10 text-gold border border-gold/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
