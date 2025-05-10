import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import polaby1 from "@/assets/images/projects/polaby1.png";
import polaby2 from "@/assets/images/projects/polaby2.png";
import polaby3 from "@/assets/images/projects/polaby3.png";
import polaby4 from "@/assets/images/projects/polaby4.png";
import podbooking1 from "@/assets/images/projects/podbooking1.jpg";
import podbooking2 from "@/assets/images/projects/podbooking2.jpg";
import podbooking3 from "@/assets/images/projects/podbooking3.jpg";
import podbooking4 from "@/assets/images/projects/podbooking4.jpg";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<any>(null);

  // Project data (in a real app, this would come from an API or database)
  const projectsData = [
    {
      id: "personal-finance-manager",
      title: "POD Booking Platform – Book Your Workspace by the Hour",
      description:
        "POD Booking Platform is a web-based application that enables users to search and book private workspaces (PODs) by the hour. Designed for freelancers, students, and small teams, the platform offers a seamless and efficient booking experience with integrated payment, smart scheduling, and administrative tools for managing operations across multiple locations.",
      fullDescription: `POD Booking Platform – Book Your Workspace by the Hour
Overview:
POD Booking Platform is a web-based application that enables users to search and book private workspaces (PODs) by the hour. Designed for freelancers, students, and small teams, the platform offers a seamless and efficient booking experience with integrated payment, smart scheduling, and administrative tools for managing operations across multiple locations.

🔑 Key Features
🕐 Real-Time Booking: Users can check availability and book pods instantly.

💳 VNPAY Payment Integration: Secure online transactions through VNPAY.

👤 User Account Management: Update personal info, view booking history, and submit feedback.

📊 Role-Based Dashboards:

Admin: Full access to manage users, locations, services, and view reports.

Manager: Monitor specific locations and revenue performance.

Staff: Handle pods, services, and local operations.

Customer: Book rooms, pay, and manage their experience.

🔔 Notification System: Automatic reminders for bookings and feedback.

🔐 Authentication & Authorization: Login secured with JWT, user roles enforced.

⚙️ Background Services: Process periodic tasks like reminders and system events.

🛠️ Tech Stack
Frontend: ReactJS

Backend: ASP.NET Core Web API

Database: SQL Server

Authentication: JWT

Cloud Deployment: Microsoft Azure (App Service + Azure SQL)

Project Management: Jira, Scrum methodology

Design: Figma (screen flow & UI sketches)

👨‍💻 My Contributions
As the Team Leader and Fullstack Developer, I was responsible for:

📐 Designing the system architecture using the 3-tier model and SOLID principles

🧱 Building the relational database schema for bookings, users, services, and locations

🔧 Implementing core backend features: authentication, booking flow, payment, admin controls

🔁 Creating background services using hosted services for automatic task handling

💬 Integrating role-based access control and feedback handling

☁️ Deploying backend and database to Microsoft Azure

📋 Writing unit tests, reviewing code, and delivering SRS & test reports

🧩 Leading the team with Scrum practices, task planning via Jira, and daily standups`,
      technologies: ["ReactJS", ".NET", "SQL Server", "Firebase"],
      github: "https://github.com/phgnamm/PODBooking",
      image: podbooking1,
      images: [
        {
          url: podbooking2,
          caption: "Booking interface on tablet device",
        },
        {
          url: podbooking3,
          caption: "Pod selection and workspace overview",
        },
        {
          url: podbooking4,
          caption: "Admin dashboard and analytics",
        },
      ],
      features: [
        "Expense tracking with receipt image uploads",
        "Category-based budget management",
        "Interactive data visualizations",
        "Financial goal setting and tracking",
        "Recurring transaction management",
        "Export reports in PDF or Excel format",
      ],
    },
    {
      id: "task-management-system",
      title: "Task Management System",
      description:
        "A collaborative task management application with real-time updates, user authentication, and team management features.",
      fullDescription:
        "The Task Management System is designed to streamline team collaboration and project management. With features like real-time updates, comprehensive task organization, and team communication tools, it helps teams stay organized and productive regardless of their physical location.",
      technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
      github: "https://github.com/username/task-manager",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1540349220179-09d3866f2e74?q=80&w=1740&auto=format&fit=crop",
          caption: "Project dashboard with task overview and team progress",
        },
        {
          url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1740&auto=format&fit=crop",
          caption: "Task creation modal with priority and assignment options",
        },
        {
          url: "https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02?q=80&w=1740&auto=format&fit=crop",
          caption:
            "Real-time team collaboration interface with commenting system",
        },
      ],
      features: [
        "Drag-and-drop task organization",
        "Team member assignment and workload management",
        "Real-time updates and notifications",
        "Task commenting and file attachments",
        "Sprint planning and project milestone tracking",
        "Detailed analytics and reporting",
      ],
    },
    {
      id: "weather-dashboard",
      title: "Polaby - Comprehensive Platform for Expectant Mothers",
      description:
        "A specialized platform providing comprehensive support, resources, and community for expectant mothers throughout their pregnancy journey.",
      fullDescription: `📱 Polaby – Make the Best Mommy Adventure

Project Name & Logo Meaning:
Polaby stands for Polar Bear Baby – symbolizing warmth, protection, and the unconditional love of a mother. The logo features a baby polar bear embraced by its mother, using soft white and pink tones. White represents pure maternal affection, while pink reflects the target audience: women, especially expectant mothers.
Slogan: "Make the Best Mommy Adventure" – expressing the core value of supporting Vietnamese women on their motherhood journey.

💡 What Polaby Offers
Polaby is a mobile app designed to support and empower mothers during pregnancy and beyond through practical tools and emotional connection.

Key Features:

👤 Personal Profile Management: Allows users to create accounts and provide personal health data (age, height, weight, due date).

🩺 Health Tracking: Record and monitor pregnancy-related health data with scheduled updates and reminders.

🔔 Smart Notifications: Reminders for checkups, important milestones, and daily activities.

🥗 Nutrition Guidance: Personalized meal suggestions based on caloric needs, with lists of recommended and restricted foods, including supplement advice.

📚 Educational Resources: Articles, guides, and advice about pregnancy, childbirth, and postpartum care.

📅 Timeline & To-Do Lists: Highlights key pregnancy milestones and preparation tasks before and after delivery.

💬 Community Support: In-app forum for moms to share experiences, ask questions, and support one another.`,
      technologies: [
        "ReactJS",
        "Flutter",
        ".NET",
        "SQL Server",
        "PayOS",
        "Firebase",
      ],
      github: "https://github.com/phgnamm/Polaby-App",
      image: polaby1,
      images: [
        {
          url: polaby2,
          caption:
            "Main dashboard showing current conditions and forecast overview",
        },
        {
          url: polaby3,
          caption: "Interactive weather map with temperature overlay",
        },
        {
          url: polaby4,
          caption: "Detailed forecast view with humidity and wind information",
        },
      ],
    },
    {
      id: "ecommerce-store",
      title: "E-commerce Store",
      description:
        "A fully functional online store with product catalog, shopping cart, user profiles, and payment processing.",
      fullDescription:
        "This E-commerce platform provides businesses with everything needed to run an online store. The system includes comprehensive product management, an intuitive shopping experience, secure checkout processes, and detailed analytics for business owners.",
      technologies: [".NET Core", "SQL Server", "Angular", "Stripe API"],
      github: "https://github.com/username/ecommerce-platform",
      image:
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=1915&auto=format&fit=crop",
          caption: "Product catalog with filtering and sorting options",
        },
        {
          url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1770&auto=format&fit=crop",
          caption: "Shopping cart with discount code functionality",
        },
        {
          url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1770&auto=format&fit=crop",
          caption: "Secure checkout process with multiple payment options",
        },
      ],
      features: [
        "Comprehensive product catalog management",
        "User accounts with order history",
        "Secure payment processing",
        "Inventory management system",
        "Discount and promotion functionality",
        "Order tracking and shipping integration",
      ],
    },
  ];

  useEffect(() => {
    // Find the project with the matching ID
    const foundProject = projectsData.find((p) => p.id === id);
    if (foundProject) {
      setProject(foundProject);

      // Scroll to top when project loads
      window.scrollTo(0, 0);
    } else {
      // Redirect to projects section if no matching project
      navigate("/");
    }

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

    setTimeout(() => {
      document.querySelectorAll(".animate-on-scroll").forEach((item) => {
        observer.observe(item);
      });
    }, 100);

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, [id, navigate]);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        Loading project...
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Button
        onClick={() => navigate("/#projects")}
        variant="outline"
        size="sm"
        className="mb-6 flex items-center gap-2"
      >
        <ArrowLeft size={16} /> Back to Projects
      </Button>

      <div className="animate-on-scroll">
        <h1 className="text-3xl font-bold mb-3 font-worksans">
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech: string) => (
            <Badge
              key={tech}
              variant="secondary"
              className="border border-border"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Main hero image */}
        <div className="mb-8 overflow-hidden rounded-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Project gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {project.images.map((img: any, index: number) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <img
                src={img.url}
                alt={`${project.title} screenshot ${index + 1}`}
                className="w-full h-48 object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
          ))}
        </div>

        {/* Project content */}
        <div className="prose dark:prose-invert max-w-none mb-10 font-worksans">
          <div className="whitespace-pre-line">{project.fullDescription}</div>
        </div>

        <div className="flex justify-end mt-8">
          <Button asChild size="lg" className="px-8 border border-border">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github size={20} />
              View on GitHub
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
