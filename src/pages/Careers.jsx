// src/pages/Careers.jsx
import React from 'react';

const Careers = () => {
  const jobOpenings = [
    {
      title: "Full Stack Developer",
      department: "Technology",
      location: "Nairobi, Kenya",
      type: "Full-time",
      description: "We are looking for a skilled Full Stack Developer to join our technology team and help build innovative solutions for African farmers."
    },
    {
      title: "Agricultural Field Officer",
      department: "Operations",
      location: "Multiple Locations",
      type: "Full-time",
      description: "Join our field operations team to help farmers implement our technology solutions and provide on-ground support."
    },
    {
      title: "Sales Representative",
      department: "Sales",
      location: "Nairobi, Kenya",
      type: "Full-time",
      description: "Help us expand our reach by connecting with farmers and agricultural organizations across Africa."
    },
    {
      title: "Customer Support Specialist",
      department: "Support",
      location: "Remote",
      type: "Full-time",
      description: "Provide exceptional support to our farmers and help them get the most out of our products and services."
    }
  ];

  const benefits = [
    {
      title: "Competitive Salary",
      description: "We offer competitive compensation packages with performance bonuses"
    },
    {
      title: "Health Insurance",
      description: "Comprehensive medical coverage for you and your family"
    },
    {
      title: "Flexible Work",
      description: "Remote work options and flexible working hours"
    },
    {
      title: "Learning & Development",
      description: "Continuous learning opportunities and skill development programs"
    },
    {
      title: "Impactful Work",
      description: "Make a real difference in the lives of African farmers"
    },
    {
      title: "Great Team",
      description: "Work with passionate and talented professionals"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Join Our Mission</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Help us transform agriculture in Africa through technology and innovation
          </p>
        </div>

        {/* Current Openings */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Current Openings</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span>{job.department}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <button className="mt-4 md:mt-0 btn-primary">
                    Apply Now
                  </button>
                </div>
                <p className="text-gray-600">{job.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why Work With Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-green-600 text-white rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Don't See the Perfect Role?</h2>
            <p className="mb-6 opacity-90">
              We're always looking for talented people to join our team. Send us your resume and we'll contact you when a suitable position opens up.
            </p>
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300 font-semibold">
              Submit Your Resume
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Careers;