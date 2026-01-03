import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="font-mono">
            Designed & Built with <Heart className="inline w-4 h-4 fill-primary text-primary" /> by{" "}
            <span className="text-primary hover:text-primary/80 transition-colors">
              Jyot Shah
            </span>
          </p>
          <p className="font-mono text-xs">
            // console.log("Thanks for checking out my portfolio!")
          </p>
        </div>
      </div>
    </footer>
  );
};
