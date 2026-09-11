import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="text-center z-10 px-4 max-w-4xl">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Parth Patel
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-4 font-light">
            Software Engineer (React)
          </p>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Software Developer with 4.5+ years of experience in designing and developing scalable full-stack web applications. 
            Passionate about building high-performance, user-centric applications that drive business value.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/parth-pat" className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/parth-patel-a5466a215" className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:dholuparth2211@gmail.com" className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-blue-300" />
      </button>
    </section>
  );
};

export default Hero;