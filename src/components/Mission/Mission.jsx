import React from 'react';
import { Users, TrendingUp, Target, Leaf, Wifi, Cloud, ArrowRight, CheckCircle2, Sprout } from 'lucide-react';

const Mission = () => {
  const stats = [
    { value: '21,000+', label: 'Farmers Empowered', icon: Users },
    { value: '1M', label: 'Target by 2030', icon: Target },
    { value: '100%', label: 'Climate Smart', icon: Leaf },
  ];

  const steps = [
    {
      icon: Sprout,
      title: 'Install Greenhouses',
      description: 'Set up optimized greenhouses for crops or drying processes',
    },
    {
      icon: Wifi,
      title: 'Deploy FarmShield™ IoT',
      description: 'Smart sensors to monitor and optimize growing conditions',
    },
    {
      icon: Cloud,
      title: 'Connect to FarmCloud™',
      description: 'Track harvests and link directly to profitable markets',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-green-50/30 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/40 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100/40 rounded-full blur-3xl -z-0" />
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 lg:mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg shadow-green-600/5 border border-green-100/50 hover:shadow-xl hover:shadow-green-600/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-green-100 rounded-lg">
                  <stat.icon className="w-5 h-5 text-green-600" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              <Target className="w-4 h-4" />
              Our Mission
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Empowering African <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">Farmers</span>
            </h2>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-600 text-lg leading-relaxed">
                  Today, over <span className="font-semibold text-gray-900">21,000 farmers</span> across Africa use our solutions to lower climate risks, 
                  eliminate guesswork in farming and earn better. We believe that farming should not 
                  be risky and complicated. <span className="font-semibold text-gray-900">It should be simple.</span>
                </p>
              </div>
              
              <div className="flex gap-3">
                <TrendingUp className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-600 text-lg leading-relaxed">
                  That's why we have partnered with leading organisations and funders to ensure we 
                  bring modern farming solutions to <span className="font-semibold text-gray-900">1,000,000 smallholder farmers</span> across Africa.
                </p>
              </div>
            </div>
            
            <button className="group flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-4 rounded-xl hover:shadow-xl hover:shadow-green-600/30 transition-all duration-300 font-semibold text-lg hover:scale-105">
              Explore Crat_Agri's Mission
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Content - How It Works */}
          <div className="bg-gradient-to-br from-green-600 to-green-500 p-8 lg:p-10 rounded-3xl shadow-2xl shadow-green-600/20 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white">How It Works</h3>
              </div>
              
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-lg mb-1">{step.title}</h4>
                      <p className="text-green-50 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-white/90 text-sm leading-relaxed">
                  Our integrated approach ensures farmers have everything they need to succeed - from infrastructure to technology to market access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;