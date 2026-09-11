import React from 'react';
import { Code, Coffee, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "Working effectively in cross-functional teams and mentoring others"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Passion",
      description: "Genuinely excited about creating exceptional user experiences"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-2xl flex items-center justify-center">
              <div className="text-8xl">👨‍💻</div>
            </div>
          </div>
          
          <div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Hi there! I'm Parth, a passionate software engineer with 4.5+ years of experience 
              building scalable web applications that users love. My journey started with React development 
              and has evolved into full-stack expertise with modern web technologies.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              I specialize in React.js, Javascript, Node.js , Express.js technologies, with hands-on experience 
              in building dynamic websites and integrating RESTful APIs. I'm passionate about solving 
              complex problems and continuously learning new technologies to enhance my full-stack development skills.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;