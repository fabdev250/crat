import React from 'react';
import { 
  BookOpen, 
  User, 
  Calendar, 
  ArrowRight,
  TrendingUp,
  Leaf,
  Sprout,
  Clock
} from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "Why you should farm Black Soldier Flies and make money",
      author: "Taita Ngetich",
      date: "October 1, 2025",
      excerpt: "Rising feed costs hurt Kenyan farmers. Crat_Agri enables affordable Black Soldier Fly farming with Screenhouses, FarmShield IoT sensors and Solar Dryers.",
      icon: TrendingUp,
      gradient: "from-amber-500 to-orange-600",
      readTime: "5 min read"
    },
    {
      title: "Understanding Carbon Credits and the Role Farming Plays in It",
      author: "Janet Machuka",
      date: "May 7, 2025",
      excerpt: "Carbon credits provide a financial incentive for reducing greenhouse gas emissions, and farming can play a vital role in this effort.",
      icon: Leaf,
      gradient: "from-green-500 to-emerald-600",
      readTime: "7 min read"
    },
    {
      title: "10 Types of Herbs to Farm in Kenya, Their Use and Value",
      author: "Janet Machuka and Taita Ngetich",
      date: "August 21, 2024",
      excerpt: "Growing herbs can be highly profitable and fun. It's really quite easy too. You'd be surprised how many herbs are available...",
      icon: Sprout,
      gradient: "from-lime-500 to-green-600",
      readTime: "6 min read"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-green-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <BookOpen className="w-4 h-4" />
            Our Blog
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Latest from Our{' '}
            <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              Blog
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Expert insights, farming tips, and industry trends to help you succeed
          </p>
        </div>
        
        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => {
            const IconComponent = post.icon;
            return (
              <article 
                key={index} 
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2"
              >
                {/* Image/Icon Header */}
                <div className={`h-56 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-500" />
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                  
                  {/* Centered Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  
                  {/* Read Time Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-semibold text-gray-700">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors duration-300 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="font-medium">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  {/* Read More Link */}
                  <button className="mt-6 w-full flex items-center justify-center gap-2 text-green-600 hover:text-green-700 font-semibold group/btn transition-all duration-300">
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <a 
            href="#all-posts"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-4 rounded-xl hover:shadow-xl hover:shadow-green-600/30 transition-all duration-300 font-semibold text-lg group hover:scale-105"
          >
            <BookOpen className="w-5 h-5" />
            View All Blog Posts
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;