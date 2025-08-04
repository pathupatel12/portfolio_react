import { Building, Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      company: "Vagaro Technology Pvt Ltd.",
      position: "Software Engineer (React)",
      duration: "Sep 2021 - May 2025",
      location: "Ahmedabad",
      description: "Developing dynamic and responsive web applications using React and integrating .NET-based RESTful APIs.",
      achievements: [
        "Developed dynamic and responsive web applications using React, strengthening proficiency in managing RESTful APIs with .NET",
        "Built hands-on experience with React and .NET-based RESTful API integration across multiple projects",
        "Actively pursued self-learning in Node.js, Express.js, and Next.js, building full-stack applications",
        "Enhanced backend and server-side rendering skills through practical application development"
      ],
      technologies: ["React", "JavaScript", "TypeScript", ".NET", "RESTful APIs", "HTML5", "CSS3"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey spans across startups and enterprises, 
            building products that impact thousands of users daily.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-emerald-500 h-full rounded-full"></div>

          {experiences.map((exp, index) => (
            <div key={exp.id} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'}`}>
              {/* Timeline Dot */}
              <div className={`absolute w-6 h-6 bg-white border-4 border-blue-500 rounded-full ${
                index % 2 === 0 
                  ? 'left-1 md:right-0 md:left-auto md:transform md:translate-x-3' 
                  : 'left-1 md:left-0 md:transform md:-translate-x-3'
              } top-8`}></div>

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  {/* Header */}
                  <div className={`flex flex-wrap items-start gap-4 mb-6 ${index % 2 !== 0 ? 'md:justify-end md:text-right' : ''}`}>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.position}</h3>
                      <div className="flex items-center text-blue-600 mb-2">
                        <Building className="w-4 h-4 mr-2" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;