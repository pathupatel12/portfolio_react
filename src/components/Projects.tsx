import React from "react";
import { ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  isShow?: boolean;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Pending Shipments",
      description:
        "Shipment tracking report with filtering, order tracking, and shipment status management.",
      longDescription:
        "Created a pending shipment report to track product shipments, search specific products using filters, track orders by order number, and update shipment status after delivery to customer or store location.",
      image: "https://i.ibb.co/rGwSVwt3/Screenshot-2025-08-04-123819.png",
      technologies: ["React", "JavaScript", ".NET", "RESTful APIs", "CSS3"],
      liveUrl: "https://example-shipments.com",
      githubUrl: "https://github.com/parth-pat/pending-shipments",
      featured: true,
    },
    {
      id: 2,
      title: "Venue Gallery",
      description:
        "Custom photo editor for business branding, banner images, and portfolio management.",
      longDescription:
        "Built a custom photo editor for editing photos and setting business logos as banner images for listing pages, receipts, and reminder emails. Also created portfolio image functionality to help businesses attract new clients.",
      image: "https://i.ibb.co/W4JyV9vP/uuid-2d32ef5d-2dd4-0867-1b4e-7ba9355af9c0.png",
      technologies: ["React", "JavaScript", "API", "HTML", "CSS3"],
      liveUrl: "https://example-venue-gallery.com",
      githubUrl: "https://github.com/parth-pat/venue-gallery",
      featured: true,
    },
    {
      id: 3,
      title: "Dashboard",
      description:
        "Responsive dashboard with authentication, user management, and invoice management.",
      longDescription:
        "A responsive dashboard with authentication, user and invoice management, dynamic search and filtering, server-side rendering, and modern UI design. Built using Next.js App Router, PostgreSQL, and Prisma ORM.",
      image: "https://i.ibb.co/V0vRKqNJ/Screenshot-2025-08-04-122856.png",
      technologies: ["React", "JavaScript", "API", "HTML", "CSS3"],
      liveUrl:
        "https://dashboard-nodejs-22i493fe1-parths-projects-0ab86a58.vercel.app/",
      githubUrl: "https://github.com/parth-pat/admin-dashboard",
      featured: true,
      isShow: true,
    },
    {
      id: 4,
      title: "Inventory Management System",
      description:
        "Product data management system with reusable detail templates for large catalogs.",
      longDescription:
        "Enhanced product data management by allowing reusable detail templates, simplifying updates across large product catalogs and improving catalog maintenance efficiency.",
      image:
        "https://images.pexels.com/photos/4483608/pexels-photo-4483608.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "JavaScript", "API", "HTML", "CSS3"],
      featured: false,
    },
    {
      id: 5,
      title: "Zendesk Ticket Sprints",
      description:
        "Live production issue resolution and customer support ticket management.",
      longDescription:
        "Worked on live production issues and resolved problems on the same day to ensure smooth business operations and quick customer issue resolution.",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "JavaScript", "API", "HTML", "CSS3","API"],
      featured: false,
    },
    {
      id: 6,
      title: "Customers IOU Track",
      description:
        "Customer IOU management system with update, delete, and activity history tracking.",
      longDescription:
        "Developed a customer IOU tracking system for customers unable to make payment on the appointment day. Added functionality to update and delete IOU entries while maintaining complete history of IOU activity.",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "JavaScript", "API", "HTML", "CSS3"],
      featured: false,
    },
    {
      id: 7,
      title: "Upsell",
      description:
        "Upsell recommendation popup to promote premium features based on user usage.",
      longDescription:
        "Implemented an upsell recommendation popup that intelligently prompts users to upgrade or enable additional features based on usage. The popup highlights premium feature benefits to improve productivity and business operations.",
      image:
        "https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "JavaScript", "API", "HTML", "CSS3"],
      featured: false,
    },
    {
      id: 8,
      title: "Tour Walk — Travel & Booking Web Application",
      description:
        "Travel booking web app with flights, buses, search, filtering, and booking flows.",
      longDescription:
        "Integrated multiple travel services such as flights and buses with clear navigation and filtering. Implemented search functionality, interactive forms, booking flows, client-side validation, responsive design, and API integration for travel listings, pricing, and booking details.",
      image:
        "https://images.pexels.com/photos/7412069/pexels-photo-7412069.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "JavaScript", "API", "HTML", "CSS3"],
      featured: false,
    },
    {
      id: 9,
      title: "Jewellery - Bullion",
      description:
        "Bullion trading and precious metals platform for gold and silver investment information.",
      longDescription:
        "Developed a bullion trading and precious metals platform that provides users with up-to-date market information and products related to gold and silver investments. Users can view live rates, explore bullion products, and make informed buying decisions.",
      image:
        "https://images.pexels.com/photos/8891957/pexels-photo-8891957.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "JavaScript", "API", "HTML", "CSS3"],
      featured: false,
    },
    {
      id: 10,
      title: "Ecommerce Website",
      description:
        "React Redux based eCommerce platform with product management and filtering.",
      longDescription:
        "Built an eCommerce platform with product management and filtering functionality using React and Redux.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "JavaScript", "API", "HTML", "CSS3"],
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-4" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work, featuring scalable web applications
            built with modern frontend technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.longDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.isShow && project.liveUrl && (
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Other Notable Projects
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {project.title}
                </h4>

                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}

                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {project.longDescription}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;