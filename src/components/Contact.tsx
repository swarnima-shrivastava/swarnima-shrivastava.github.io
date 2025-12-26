import { Mail, MapPin, Linkedin, Github, Instagram } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/swarnima-shrivastava/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/swarnima-shrivastava/", label: "GitHub" },
    { icon: Instagram, href: "https://www.instagram.com/swarnima1901", label: "Instagram" }
  ];

  return (
    <section id="contact" className="py-32 relative">
      {/* Background elements */}
      <div className="absolute left-1/4 top-1/2 w-96 h-96 bg-gold/10 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-body text-gold text-sm tracking-widest uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
            Let's connect to<br />
            <span className="text-gradient">Build and Grow Together.</span>
          </h2>
          <p className="font-body text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            I’m always open to discussing new projects, creative ideas, and opportunities to 
            bring product visions to life—while mentoring engineers and product leaders along the way.
          </p>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
            <a 
              href="mailto:swarnima1901@gmail.com" 
              className="flex items-center gap-3 text-foreground hover:text-gold transition-colors group"
            >
              <div className="p-3 rounded-xl bg-secondary border border-border group-hover:border-gold/30 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-body">swarnima1901@gmail.com</span>
            </a>
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="p-3 rounded-xl bg-secondary border border-border">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="font-body">San Francisco Bay Area, CA</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button variant="gold" size="xl" asChild className="mb-16">
            <a href="mailto:swarnima1901@gmail.com">
              Start a Conversation
            </a>
          </Button>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="p-4 rounded-xl bg-secondary border border-border text-muted-foreground hover:text-gold hover:border-gold/30 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
