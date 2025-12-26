import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} Swarnima Shrivastava. All rights reserved.
          </p>
          <p className="font-body text-sm text-muted-foreground">
            <p className="flex items-center gap-2">
              Built with 
              <span className="text-gold inline-flex items-center">
                <Github className="w-4 h-4" />
              </span>
            </p>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
