import { useEffect } from "react";
import { Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import polapyoverview from "@/assets/images/projects/polapyoverview.png";
import podoverview from "@/assets/images/projects/podoverview.png";
import cap1 from "@/assets/images/projects/cap1.jpg";

const projects = [
  {
    id: "personal-finance-manager",
    title: "POD Booking Platform – Workspace Reservation App",
    description:
      "A web application that enables users to book hourly working pods, manage bookings and payments via VNPAY, and access personalized dashboards for customers, staff, managers, and admins — all in one seamless platform for flexible workspaces.",
    image: podoverview,
    technologies: ["ReactJS", ".NET", "SQL Server", "Firebase"],
    github: "https://github.com/phgnamm/PODBooking",
  },
  {
    id: "weather-dashboard",
    title: "Polaby - Comprehensive Platform for Expectant Mothers",
    description:
      "A specialized platform providing comprehensive support, resources, and community for expectant mothers throughout their pregnancy journey.",
    image: polapyoverview,
    technologies: [
      "ReactJS",
      "Flutter",
      ".NET",
      "SQL Server",
      "PayOS",
      "Firebase",
    ],
    github: "https://github.com/phgnamm/Polaby-App",
  },
  {
    id: "task-management-system",
    title: "Chillde – On-Demand Handmade Creations Platform",
    description:
      "Chillde is a full-stack web platform that connects customers with artisans for custom handmade products...",
    image: cap1,
    technologies: [
      "Next.js",
      "TypeScript",
      "ASP.NET Core",
      "PostgreSQL",
      "SignalR",
      "Redis",
      "Elasticsearch",
      "OpenAI",
      "Cloudinary",
      "Supabase",
    ],
    github: "https://github.com/phgnamm/Polaby-App",
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
