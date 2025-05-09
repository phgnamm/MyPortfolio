import { useEffect } from "react";
import { Briefcase, Calendar } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { CardContent } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Backend C# Developer Intern",
      company: "FPT SOFTWARE",
      period: "Feb 2023 - Feb 2024",
      location: "Saigon Hi-Tech Park",
      description: [
        "Collaborated in an Agile team to analyze requirements and participate in system design discussions.",
        "Implemented backend features using C#, ASP.NET Core, and Entity Framework.",
        "Gained hands-on experience in unit testing to ensure code quality and catch bugs early.",
        "Participated in code reviews, learned to follow best practices and improve coding standards.",
        "Improved teamwork and communication skills through pair programming and daily sync meetings.",
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("shown");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((item) => {
      observer.observe(item);
    });

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="experience" className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl font-bold text-center mb-8">Work Experience</h2>

        <div className="relative">
          {/* Vertical line - adjusted to start from left side */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/30"></div>

          {/* Experience items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative animate-on-scroll ml-12"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 -translate-x-16 -translate-y-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10 border-4 border-background">
                  <Briefcase size={16} className="text-primary-foreground" />
                </div>

                {/* Content card */}
                <div className="bg-card rounded-lg shadow p-5 relative">
                  <div className="mb-2">
                    <h3 className="font-semibold text-lg">{exp.title}</h3>
                    <p className="text-muted-foreground flex items-center gap-2">
                      {exp.company}
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/FPT_logo_2010.svg/2560px-FPT_logo_2010.svg.png"
                        alt="FPT Logo"
                        className="h-4 w-auto opacity-80"
                      />
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {exp.location}
                    </p>
                    <div className="flex items-center text-sm text-primary mt-1">
                      <Calendar size={14} className="mr-1" />
                      {exp.period}
                    </div>
                  </div>

                  <Separator className="my-3" />

                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      {exp.description.map((desc, index) => (
                        <li key={index} className="text-sm">
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
