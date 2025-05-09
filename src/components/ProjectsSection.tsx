import { useEffect } from "react";
import { Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: "personal-finance-manager",
    title: "Personal Finance Manager",
    description:
      "A full-stack web application for tracking personal expenses, creating budgets, and visualizing spending patterns with interactive charts.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
    github: "#",
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description:
      "A responsive weather application that provides current conditions and forecasts for any location with interactive maps.",
    image:
      "https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?q=80&w=1974&auto=format&fit=crop",
    technologies: ["JavaScript", "API Integration", "CSS3", "HTML5"],
    github: "#",
  },
  {
    id: "task-management-system",
    title: "Task Manager App",
    description:
      "A productivity application that helps users organize their tasks, set priorities, and track progress with customizable features.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop",
    technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
    github: "#",
  },
];

const ProjectsSection = () => {
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
    <section id="projects" className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl font-bold text-center mb-8">My Projects</h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } 
                gap-6 animate-on-scroll`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="md:w-5/12 overflow-hidden rounded-lg">
                <Link to={`/project/${project.id}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-60 object-cover transition-transform hover:scale-105"
                  />
                </Link>
              </div>

              <div className="md:w-7/12 flex flex-col justify-center">
                <Link to={`/project/${project.id}`} className="group">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border border-border"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border border-border"
                    asChild
                  >
                    <Link to={`/project/${project.id}`}>View Details</Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border border-border"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
