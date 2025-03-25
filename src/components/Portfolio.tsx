import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  link: string;
}

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      image: 'https://picsum.photos/seed/ecommerce/600/400',
      description: 'A fully responsive e-commerce platform with cart functionality and payment integration.',
      technologies: ['React', 'Redux', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'app',
      image: 'https://picsum.photos/seed/task/600/400',
      description: 'A productivity application to manage daily tasks with drag-and-drop functionality.',
      technologies: ['React Native', 'Firebase', 'TypeScript'],
      link: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      category: 'web',
      image: 'https://picsum.photos/seed/weather/600/400',
      description: 'Real-time weather dashboard with location-based forecasts and interactive maps.',
      technologies: ['JavaScript', 'Weather API', 'Chart.js'],
      link: '#'
    },
    {
      id: 4,
      title: 'Social Media UI',
      category: 'ui',
      image: 'https://picsum.photos/seed/social/600/400',
      description: 'Modern user interface design for a social media platform focused on photography.',
      technologies: ['Figma', 'Adobe XD', 'Prototype'],
      link: '#'
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      category: 'app',
      image: 'https://picsum.photos/seed/fitness/600/400',
      description: 'Mobile application to track workouts, progress, and nutrition with data visualization.',
      technologies: ['Flutter', 'Firebase', 'Google Fit API'],
      link: '#'
    },
    {
      id: 6,
      title: 'Corporate Website',
      category: 'web',
      image: 'https://picsum.photos/seed/corporate/600/400',
      description: 'Modern corporate website with animated sections and contact form integration.',
      technologies: ['React', 'GSAP', 'Tailwind CSS'],
      link: '#'
    }
  ];

  const categories = ['all', 'web', 'app', 'ui'];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          My <span className="text-blue-600">Portfolio</span>
        </h2>
        
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm md:text-base transition-colors duration-300 ${
                  activeFilter === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <a 
                    href={project.link} 
                    className="bg-white text-blue-600 font-bold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;