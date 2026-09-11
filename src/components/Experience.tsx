import { Building, Calendar, MapPin } from "lucide-react";

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
      location: "Ahmedabad, Gujarat, India",
      description:
        "Developed dynamic and responsive web applications using React.js and integrated RESTful APIs to deliver smooth user experiences.",
      achievements: [
        "Developed responsive web applications using React.js.",
        "Integrated RESTful APIs and improved frontend functionality.",
        "Worked on multiple client-side features, debugging, and performance improvements.",
        "Enhanced skills in Node.js, Express.js, and Next.js through practical projects.",
      ],
      technologies: [
        "React.js",
        "JavaScript",
        "TypeScript",
        "Node.js",
        "RESTful APIs",
        "HTML5",
        "CSS3",
      ],
    },
    {
      id: 2,
      company: "Starline Solution Pvt Ltd.",
      position: "Software Engineer (React)",
      duration: "July 2025 - Present",
      location: "Ahmedabad, Gujarat, India",
      description:
        "Developing responsive and scalable web applications using React.js and JavaScript based on client requirements. Collaborating with UI/UX designers and backend developers to implement user interfaces, integrate RESTful APIs, and deliver seamless user experiences.",
      achievements: [
        "Built dynamic and responsive web applications using React.js.",
        "Integrated and managed RESTful APIs developed with .NET.",
        "Contributed to feature development, debugging, and code optimization.",
      ],
      technologies: [
        "React.js",
        "JavaScript",
        "RESTful APIs",
        "HTML5",
        "CSS3",
        "Bootstrap"
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Experience
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-4" />

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey in frontend development, building scalable
            web applications and user-friendly digital products.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-emerald-500 h-full rounded-full" />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div key={exp.id} className="relative mb-12">
                <div
                  className={`absolute top-8 w-6 h-6 bg-white border-4 border-blue-500 rounded-full z-10
                    left-1 md:left-1/2 md:-translate-x-1/2`}
                />

                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    isLeft
                      ? "md:pr-12 md:mr-auto"
                      : "md:pl-12 md:ml-auto"
                  }`}
                >
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {exp.position}
                      </h3>

                      <div className="flex items-center text-blue-600 mb-2">
                        <Building className="w-4 h-4 mr-2" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{exp.duration}</span>
                        </div>

                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                        Key Achievements
                      </h4>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-gray-600 text-sm leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                        Technologies Used
                      </h4>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;