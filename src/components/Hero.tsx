import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-yellow-400">Alex Johnson</span>
          </h1>
          <h2 className="text-xl md:text-2xl mb-6">Frontend Developer & UI Designer</h2>
          <p className="text-lg mb-8 text-gray-200 max-w-lg">
            I create beautiful, responsive web applications with a focus on user experience and modern technologies.
          </p>
          <div className="flex space-x-4">
            <a href="#contact" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-6 rounded-lg transition duration-300">
              Contact Me
            </a>
            <a href="#portfolio" className="bg-transparent hover:bg-white hover:bg-opacity-10 border-2 border-white py-2 px-6 rounded-lg transition duration-300">
              View My Work
            </a>
          </div>
          <div className="flex mt-8 space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition duration-300">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition duration-300">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="https://picsum.photos/seed/profile/400/400" 
            alt="Profile" 
            className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-yellow-400 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;