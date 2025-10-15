// src/pages/Projects.jsx
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Smallholder Farmer Empowerment",
      location: "Central Kenya",
      farmers: "5,000+",
      impact: "Increased yields by 45%",
      description: "Empowering smallholder farmers with smart greenhouse technology and market access.",
      image: "/project1.jpg"
    },
    {
      title: "Climate Resilience Program",
      location: "Eastern Kenya",
      farmers: "3,200+",
      impact: "Reduced water usage by 60%",
      description: "Helping farmers adapt to climate change through drip irrigation and water management.",
      image: "/project2.jpg"
    },
    {
      title: "Women in Agriculture",
      location: "Rift Valley",
      farmers: "2,800+",
      impact: "85% women participation",
      description: "Special program focusing on empowering women farmers with technology and training.",
      image: "/project3.jpg"
    },
    {
      title: "Youth Agripreneurs",
      location: "Nairobi & Surrounding",
      farmers: "1,500+",
      impact: "Youth employment created",
      description: "Engaging youth in modern agriculture through technology and business training.",
      image: "/project4.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Projects</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transforming agriculture across Africa through innovative technology solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="h-48 bg-green-200 relative">
                <div className="absolute inset-0 bg-green-600 opacity-20"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.location}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{project.farmers}</div>
                    <div className="text-sm text-gray-500">Farmers Reached</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{project.impact}</div>
                    <div className="text-sm text-gray-500">Impact</div>
                  </div>
                </div>
                <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300">
                  Learn More About This Project
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-green-50 rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Partner With Us</h2>
            <p className="text-gray-600 mb-6">
              Are you an organization looking to implement agricultural technology solutions? 
              Let's work together to create impactful projects.
            </p>
            <button className="btn-primary">
              Become a Partner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;