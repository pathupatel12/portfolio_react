import React from 'react';

// interface Skill {
//   name: string;
//   level: number;
//   category: string;
// }

const Skills = () => {
  // const skills: Skill[] = [
  //   { name: "React.js", level: 95, category: "Frontend" },
  //   { name: "JavaScript", level: 90, category: "Frontend" },
  //   { name: "TypeScript", level: 85, category: "Frontend" },
  //   { name: "Next.js", level: 80, category: "Frontend" },
  //   { name: "HTML5", level: 95, category: "Frontend" },
  //   { name: "CSS3", level: 90, category: "Frontend" },
  //   { name: "Tailwind CSS", level: 85, category: "Frontend" },
  //   { name: "Redux", level: 80, category: "Frontend" },
  //   { name: "Node.js", level: 75, category: "Backend" },
  //   { name: "Express.js", level: 75, category: "Backend" },
  //   { name: ".NET", level: 80, category: "Backend" },
  //   { name: "MongoDB", level: 70, category: "Backend" },
  //   { name: "MySQL", level: 70, category: "Backend" },
  //   { name: "REST APIs", level: 85, category: "Backend" },
  //   { name: "Git", level: 90, category: "Tools" },
  //   { name: "Postman", level: 85, category: "Tools" }
  // ];

  // const categories = ["Frontend", "Backend", "DevOps", "Tools", "Design"];

  // const getSkillsByCategory = (category: string) => {
  //   return skills.filter(skill => skill.category === category);
  // };

  // const getCategoryColor = (category: string) => {
  //   const colors = {
  //     Frontend: "from-blue-500 to-blue-600",
  //     Backend: "from-green-500 to-green-600",
  //     DevOps: "from-purple-500 to-purple-600",
  //     Tools: "from-orange-500 to-orange-600",
  //     Design: "from-pink-500 to-pink-600"
  //   };
  //   return colors[category as keyof typeof colors] || "from-gray-500 to-gray-600";
  // };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across different domains.
          </p>
        </div>

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category} className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">{category}</h3>
              <div className="space-y-4">
                {getSkillsByCategory(category).map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${getCategoryColor(category)} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div> */}

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          {/* <h3 className="text-2xl font-semibold text-gray-900 mb-8">Additional Expertise</h3> */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "HTML5",
              "CSS",
              "JavaScript",
              "React.js",
              "React Hooks",
              "Redux",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Express.js",
              "MongoDB",
              "MySQL",
              "REST APIs",
              "Git",
              "Postman"
            ].map((skill) => (
              <span key={skill} className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-sm font-medium rounded-full hover:from-blue-100 hover:to-blue-200 hover:text-blue-700 transition-all duration-300">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;