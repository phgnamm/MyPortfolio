import { useEffect } from "react";
import { Calendar, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import coursera from "@/assets/images/educations/coursera_certification.png";

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "FPT University",
      period: "2021 – 2025",
      description:
        "Specializing in software development with coursework in web technologies, databases, and software architecture. Currently maintaining a GPA of 3.0/4.0.",
    },
  ];

  const certifications = [
    {
      name: "User Experience Researchand Design",
      issuer: "Coursera",
      date: "March 2024",
      expires: "June 2024",
      icon: coursera,
    },
    {
      name: "Software Development Lifecycle",
      issuer: "Coursera",
      date: "March 2023",
      expires: "July 2023",
      icon: coursera,
    },
    // {
    //   name: "Microsoft Azure Fundamentals (AZ-900)",
    //   issuer: "Microsoft",
    //   date: "August 2023",
    //   expires: "N/A",
    //   icon: coursera,
    // },
    // {
    //   name: "Responsive Web Design",
    //   issuer: "freeCodeCamp",
    //   date: "June 2021",
    //   expires: "N/A",
    //   icon: "Null",
    // },
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
    <section id="education" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-2xl font-bold text-center mb-8">
          Education & Certificates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4 animate-on-scroll">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <Calendar className="mr-2 text-primary" size={20} /> Education
            </h3>

            {education.map((item, index) => (
              <Card key={index} className="border-t-4 border-t-primary/70">
                <CardHeader>
                  <CardTitle className="text-lg">{item.degree}</CardTitle>
                  <p className="text-muted-foreground">{item.institution}</p>
                  <p className="text-sm font-medium text-primary">
                    {item.period}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div
            className="space-y-4 animate-on-scroll"
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <Award className="mr-2 text-primary" size={20} /> Certifications
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="flex flex-col h-full">
                  <CardHeader className="pb-2 flex flex-row items-center space-x-4">
                    <div className="w-12 h-12 overflow-hidden flex-shrink-0">
                      <img
                        src={cert.icon}
                        alt={cert.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-base">{cert.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 mt-auto">
                    <div className="flex justify-between text-xs">
                      <span>Issued: {cert.date}</span>
                      <span>Expires: {cert.expires}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
