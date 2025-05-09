import { useEffect } from "react";
import { Database, Server, MonitorSmartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SkillsSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("shown");

            // Animate skill bars
            if (entry.target.classList.contains("skills-container")) {
              setTimeout(() => {
                const skillBars = document.querySelectorAll(".skill-progress");
                skillBars.forEach((bar) => {
                  const width = bar.getAttribute("data-width");
                  if (width) {
                    (bar as HTMLElement).style.width = width;
                  }
                });
              }, 300);
            }
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
    <section id="skills" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-2xl font-bold text-center mb-10">My Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            className="animate-on-scroll"
            style={{ animationDelay: "0.3s" }}
          >
            <CardHeader className="flex flex-row items-center space-x-2">
              <Server className="text-primary" size={22} />
              <CardTitle className="text-lg">Backend Development</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-2 gap-y-2">
                <li className="flex items-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                    className="w-5 h-5 mr-2 opacity-80"
                    alt="Java"
                  />
                  Java
                </li>
                <li className="flex items-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg"
                    className="w-5 h-5 mr-2 opacity-80"
                    alt=".NET Core"
                  />
                  .NET Core
                </li>
                <li className="flex items-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    className="w-5 h-5 mr-2 opacity-80"
                    alt="Node.js"
                  />
                  Node.js
                </li>
                <li className="flex items-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                    className="w-5 h-5 mr-2 opacity-80"
                    alt="Firebase"
                  />
                  Firebase
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card
            className="animate-on-scroll"
            style={{ animationDelay: "0.4s" }}
          >
            <CardHeader className="flex flex-row items-center space-x-2">
              <MonitorSmartphone className="text-primary" size={22} />
              <CardTitle className="text-lg">Frontend Development</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-2 gap-y-2">
                <li className="flex items-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    className="w-5 h-5 mr-2 opacity-80"
                    alt="React"
                  />
                  React
                </li>
                <li className="flex items-center">
                  <img
                    src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                    className="w-5 h-5 mr-2 opacity-80"
                    alt="Tailwind CSS"
                  />
                  Tailwind CSS
                </li>
                <li className="flex items-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                    className="w-5 h-5 mr-2 opacity-80"
                    alt="TypeScript"
                  />
                  TypeScript
                </li>
                <li className="flex items-center">
                  <img
                    src="https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg"
                    className="w-5 h-5 mr-2 opacity-80"
                    alt="Vercel"
                  />
                  Vercel
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card
            className="animate-on-scroll"
            style={{ animationDelay: "0.4s" }}
          >
            <CardHeader className="flex flex-row items-center space-x-2">
              <Database className="text-primary" size={22} />
              <CardTitle className="text-lg">Other Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-2 gap-y-2">
                <li className="flex items-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                    className="w-5 h-5 mr-2 opacity-80"
                    alt="PostgreSQL"
                  />
                  PostgreSQL
                </li>
                <li className="flex items-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"
                    className="w-5 h-5 mr-2 opacity-80"
                    alt="Redis"
                  />
                  Redis
                </li>
                <li className="flex items-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg"
                    className="w-5 h-5 mr-2 opacity-80"
                    alt="SQL Server"
                  />
                  SQL Server
                </li>
                <li className="flex items-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                    className="w-5 h-5 mr-2 opacity-80"
                    alt="Figma"
                  />
                  Figma
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
