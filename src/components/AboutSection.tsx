import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import profileImage from "@/assets/images/profile/avatarprofile.jpg";

const AboutSection = () => {
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
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 font-worksans">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
          <div className="md:w-1/3 animate-on-scroll relative">
            <div className="rounded-full overflow-hidden border-4 border-primary/20 w-40 h-40 md:w-48 md:h-48 mx-auto relative z-10">
              <img
                src={profileImage}
                alt="Phuong Nam"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Separated thought bubbles */}
            <div className="absolute top-2 right-12 md:right-10 thought-bubble thought-bubble-1"></div>
            <div className="absolute top-0 right-0 md:right-[-5px] thought-bubble thought-bubble-2"></div>
            <div className="absolute top-[-10px] right-[-20px] md:right-[-25px] thought-bubble thought-bubble-3"></div>
          </div>

          <div
            className="md:w-2/3 animate-on-scroll"
            style={{ animationDelay: "0.2s" }}
          >
            <Card className="rounded-xl overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 font-worksans">
                  Phuong Nam
                </h3>
                <p className="text-muted-foreground mb-2 font-worksans">
                  B.S. Information Technology
                </p>
                <p className="text-muted-foreground mb-4 font-worksans">
                  FPT University
                </p>

                <div className="space-y-3 font-worksans">
                  <p>
                    👋 Hi, I’m Phuong Nam I’m a recent graduate in Software
                    Engineering from FPT University. I have a strong interest in
                    both coding and UI/UX design, and enjoy creating intuitive,
                    user-friendly applications.
                  </p>
                  <p>
                    💡 I’m not just focused on code—I’m passionate about
                    analyzing requirements, reading technical docs, and thinking
                    through real user needs. I also enjoy using Figma and
                    collaborating with teams using Jira and Agile methods.
                  </p>
                  <p>
                    🚀 My goal is to become a full-stack developer who not only
                    builds software, but also understands the bigger picture.
                    I’m eager to learn new technologies and grow in both
                    development and product thinking.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
