import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          About <span className="text-blue-600">Me</span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img 
              src="https://picsum.photos/seed/workspace/600/400" 
              alt="Workspace" 
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Who I Am</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a passionate frontend developer with 5 years of experience creating 
              interactive web applications. I specialize in React, TypeScript, and modern 
              CSS frameworks like Tailwind. My background in design helps me bridge the gap 
              between aesthetics and functionality.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">My Approach</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I believe in clean, maintainable code and intuitive user experiences. Every project 
              I undertake focuses on performance, accessibility, and responsive design to ensure the 
              best possible outcome for users across all devices.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-blue-600 mb-2">Education</h4>
                <p className="text-gray-600">B.S. Computer Science<br />University of Technology</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-bold text-blue-600 mb-2">Experience</h4>
                <p className="text-gray-600">5+ Years<br />Frontend Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;