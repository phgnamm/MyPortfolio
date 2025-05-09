import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-16 bg-background">
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in font-worksans">
            Phuong Nam
          </h1>
          <p
            className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in font-worksans"
            style={{ animationDelay: "0.2s" }}
          >
            Information Technology Student
          </p>
          <div
            className="max-w-2xl text-center mb-10 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <p className="text-lg font-worksans">
              "Success is not the absence of obstacles, but the courage to push
              through them, fueled by a passion for what you believe in and a
              relentless commitment to your dreams."
            </p>
          </div>
          <div
            className="flex flex-wrap gap-4 justify-center animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <Button asChild size="lg">
              <a
                href="https://www.figma.com/design/3uAW3IpGkoq5psVaeGD4AC/Resume-Phuong-Nam?node-id=0-1&p=f&t=Ss0QhZ7wI3ahn1j0-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Figma/Resume
              </a>
            </Button>
            <Button variant="outline" asChild size="lg">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 w-full flex justify-center animate-pulse-slow">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="text-primary" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
