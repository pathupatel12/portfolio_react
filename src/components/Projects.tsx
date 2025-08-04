import { ExternalLink } from 'lucide-react';
import React from 'react';
// import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  isShow?: boolean;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Pending Shipments",
      description: "A comprehensive shipment tracking system with advanced filtering and status management.",
      longDescription: "This project creates a report allowing you to keep track of all pending product shipments. You can use a variety of search filters to find a specific product, track an item by the order number, and change the status of shipments that have been successfully delivered to a customer's address or to the store's location.",
      image: "https://i.ibb.co/rGwSVwt3/Screenshot-2025-08-04-123819.png",
      technologies: ["React", "JavaScript", ".NET", "RESTful APIs", "CSS3"],
      liveUrl: "https://example-shipments.com",
      githubUrl: "https://github.com/parth-pat/pending-shipments",
      featured: true
    },
    {
      id: 2,
      title: "Venue Gallery",
      description: "Custom photo editor for business branding and portfolio management.",
      longDescription: "In this project, a custom photo editor is created for editing photos and setting business logos to be displayed as the banner image on your listing page, receipt, and reminder emails. Create portfolio images to attract new clients.",
      image: "https://i.ibb.co/W4JyV9vP/uuid-2d32ef5d-2dd4-0867-1b4e-7ba9355af9c0.png",
      technologies: ["React", "JavaScript", "Canvas API", ".NET", "CSS3"],
      liveUrl: "https://example-venue-gallery.com",
      githubUrl: "https://github.com/parth-pat/venue-gallery",
      featured: true
    },
    {
      id: 3,
      title: "Dashboard",
      description: "Responsive dashboard with authentication and user management.",
      longDescription: "A responsive dashboard with authentication, user and invoice management, dynamic search and filtering, server-side rendering, and modern UI design. Built using Next.js App Router, integrated with a PostgreSQL database via Prisma ORM.",
      image: "https://i.ibb.co/V0vRKqNJ/Screenshot-2025-08-04-122856.png",
      technologies: ["Next.js", "PostgreSQL", "Prisma", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://dashboard-nodejs-22i493fe1-parths-projects-0ab86a58.vercel.app/",
      githubUrl: "https://github.com/parth-pat/admin-dashboard",
      featured: true,
      isShow:true
    },
    {
      id: 4,
      title: "Smart Store",
      description: "Full-featured eCommerce platform with comprehensive functionality.",
      longDescription: "An eCommerce platform, offering comprehensive functionalities including product management and filtering, cart management, order processing, and secure payment integration.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript"],
      liveUrl: "https://example-smart-store.com",
      githubUrl: "https://github.com/parth-pat/smart-store",
      featured: false
    },
    {
      id: 5,
      title: "Customers IOU Track",
      description: "Customer IOU management system with tracking and history.",
      longDescription: "This project displays all customer IOU details. IOUs are issued to customers who are unable to make a payment on the day of their appointment. The report also includes functionalities to update and delete IOU entries, allowing users to manage records efficiently. All changes are tracked to maintain a complete history of IOU activity.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "JavaScript", ".NET", "RESTful APIs", "CSS3"],
      liveUrl: "https://example-iou-track.com",
      githubUrl: "https://github.com/parth-pat/iou-track",
      featured: false
    },
    {
      id: 6,
      title: "Zendesk Ticket Sprints",
      description: "Live production issue resolution and ticket management system.",
      longDescription: "I have worked on live production issues. If any problems are found, I solve them on the same day. I am working on these all modules to ensure smooth operation and quick resolution of customer issues.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "JavaScript", ".NET", "Zendesk API", "CSS3"],
      liveUrl: "https://example-zendesk-sprints.com",
      githubUrl: "https://github.com/parth-pat/zendesk-sprints",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work, featuring full-stack applications built with modern technologies.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.longDescription}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {project.isShow && <div className="flex space-x-4">
                  <a 
                    href={project.liveUrl}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                  {/* <a 
                    href={project.githubUrl}
                    className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a> */}
                </div>}
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Other Notable Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                {/* <div className="flex space-x-3">
                  <a href={project.liveUrl} className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    View Project →
                  </a>
                  <a href={project.githubUrl} className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                    GitHub
                  </a>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;