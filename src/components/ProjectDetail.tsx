import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<any>(null);

  // Project data (in a real app, this would come from an API or database)
  const projectsData = [
    {
      id: "personal-finance-manager",
      title:
        "POD Booking Platform – Không Gian Làm Việc Linh Hoạt Cho Thế Hệ Mới",
      description:
        "A full-stack web application for tracking personal expenses, creating budgets, and visualizing spending patterns with interactive charts.",
      fullDescription: `Trong thời đại làm việc linh hoạt và tự do, nhu cầu về các không gian làm việc theo giờ đang trở nên phổ biến hơn bao giờ hết. Với mục tiêu giải quyết bài toán này, nhóm chúng tôi đã phát triển POD Booking Platform – một nền tảng web cho phép người dùng dễ dàng đặt chỗ làm việc (POD) theo giờ tại nhiều địa điểm khác nhau.

🎯 Mục tiêu dự án
Dự án hướng đến việc mang lại sự tiện lợi tối đa cho người dùng là freelancer, sinh viên, nhóm startup nhỏ… trong việc tìm kiếm, đặt chỗ và sử dụng các không gian làm việc hiện đại, riêng tư. Đồng thời, nền tảng cũng hỗ trợ nhà quản lý dễ dàng vận hành hệ thống PODs hiệu quả.

🔍 Các tính năng nổi bật
Đặt chỗ nhanh chóng: Người dùng có thể tìm kiếm, chọn và đặt chỗ làm việc theo thời gian thực, kèm dịch vụ bổ sung như nước uống, máy in, v.v.

Thanh toán trực tuyến: Tích hợp cổng thanh toán VNPAY giúp giao dịch an toàn, tiện lợi.

Quản lý tài khoản: Người dùng có thể chỉnh sửa hồ sơ cá nhân, theo dõi lịch sử đặt chỗ, gửi phản hồi sau khi sử dụng dịch vụ.

Hệ thống quản trị: Admin, Manager và Nhân viên được cung cấp công cụ quản lý lịch đặt, báo cáo doanh thu và phân tích dữ liệu sử dụng.

Phân quyền rõ ràng: Hệ thống phân chia vai trò giúp đảm bảo hiệu quả quản lý và bảo mật thông tin.

🛠️ Công nghệ sử dụng
Frontend: ReactJS

Backend: .NET Core

Cơ sở dữ liệu: PostgreSQL

Thanh toán: Tích hợp VNPAY

Quản lý công việc: Jira (theo mô hình Scrum)

Thiết kế UI: Figma

📌 Những gì tôi đã thực hiện
Trong dự án này, tôi đảm nhiệm vai trò Backend Developer, với các nhiệm vụ cụ thể như:

Thiết kế và xây dựng cơ sở dữ liệu

Triển khai các tính năng core như đặt chỗ, quản lý người dùng, quản lý dịch vụ đi kèm

Tích hợp thanh toán qua VNPAY

Viết unit test cho các chức năng chính

Hỗ trợ viết tài liệu SRS và báo cáo system test

Hỗ trợ triển khai dashboard cho admin quản lý doanh thu`,
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      github: "https://github.com/username/finance-manager",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1554224155-8d04cb21eb6c?q=80&w=1936&auto=format&fit=crop",
          caption: "Dashboard view showing monthly expense breakdown",
        },
        {
          url: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=1740&auto=format&fit=crop",
          caption: "Budget creation interface with category selection",
        },
        {
          url: "https://images.unsplash.com/photo-1563986768711-b3bde86b7053?q=80&w=1740&auto=format&fit=crop",
          caption: "Interactive charts displaying spending patterns over time",
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
      title: "Weather Dashboard",
      description:
        "A responsive weather application that provides current conditions and forecasts for any location with interactive maps.",
      fullDescription:
        "The Weather Dashboard application offers comprehensive weather information from around the world. Users can check current conditions, hourly and daily forecasts, and view interactive weather maps with various data layers. The application emphasizes clean design and intuitive user experience.",
      technologies: ["JavaScript", "API Integration", "CSS3", "HTML5"],
      github: "https://github.com/username/weather-app",
      image:
        "https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?q=80&w=1974&auto=format&fit=crop",
      images: [
        {
          url: "https://images.unsplash.com/photo-1580193769210-b8d1c049a7ef?q=80&w=1974&auto=format&fit=crop",
          caption:
            "Main dashboard showing current conditions and forecast overview",
        },
        {
          url: "https://images.unsplash.com/photo-1532978379173-523e16400f91?q=80&w=1740&auto=format&fit=crop",
          caption: "Interactive weather map with temperature overlay",
        },
        {
          url: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?q=80&w=1974&auto=format&fit=crop",
          caption: "Detailed forecast view with humidity and wind information",
        },
      ],
      features: [
        "Real-time weather data from multiple sources",
        "Location-based automatic weather detection",
        "Interactive weather maps with multiple layers",
        "7-day and hourly forecasts",
        "Severe weather alerts and notifications",
        "Weather history and trends",
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
