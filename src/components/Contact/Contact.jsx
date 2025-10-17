import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Building2,
  Send,
  Globe,
  MessageCircle
} from 'lucide-react';

const Contact = () => {
  const offices = [
    {
      country: "Rwanda",
      flag: "🇷🇼",
      gradient: "from-blue-500 to-cyan-600",
      physicalAddress: "Gisenyi, Rwanda",
      postalAddress: "P.O.BOX 1234, Gisenyi, Rwanda",
      phone: "+250 785 599 926",
      isPrimary: true
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "General Information",
      value: "jsongclaude21@gmail.com",
      link: "jsongclaude21@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone Number",
      value: "0785599926",
      link: "0785599926"
    },
    {
      icon: MessageCircle,
      label: "Customer Support",
      value: "jsongclaude21@gmail.com",
      link: "jsongclaude21@gmail.com"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <MapPin className="w-4 h-4" />
            Contact Us
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Pay us a{' '}
            <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              visit
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We're here to help you transform your farming journey
          </p>
        </div>
        
        {/* Office Cards */}
        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto mb-16">
          {offices.map((office, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl shadow-2xl shadow-green-600/10 overflow-hidden border border-gray-100 hover:shadow-green-600/20 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Office Header */}
              <div className={`bg-gradient-to-br ${office.gradient} p-8 lg:p-10 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-4xl">
                    {office.flag}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-1">
                      Crat_Agri, {office.country}
                    </h3>
                    {office.isPrimary && (
                      <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                        <Building2 className="w-3.5 h-3.5" />
                        Main Office
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Office Details */}
              <div className="p-8 lg:p-10">
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* Physical Address */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Physical Office Address</h4>
                      <p className="text-gray-600 leading-relaxed">{office.physicalAddress}</p>
                    </div>
                  </div>
                  
                  {/* Postal Address */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Postal Address</h4>
                      <p className="text-gray-600 leading-relaxed">{office.postalAddress}</p>
                    </div>
                  </div>
                </div>
                
                {/* Support Line */}
                <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <Phone className="w-7 h-7 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Support Line</h4>
                      <a 
                        href={`tel:${office.phone}`}
                        className="text-green-600 hover:text-green-700 font-bold text-xl transition-colors"
                      >
                        {office.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Working Hours */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Working Hours</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="font-bold text-gray-900 mb-1">Monday - Friday</p>
                <p className="text-green-600 font-semibold">8:00 AM - 5:00 PM</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="font-bold text-gray-900 mb-1">Saturday</p>
                <p className="text-green-600 font-semibold">9:00 AM - 1:00 PM</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="font-bold text-gray-900 mb-1">Sunday</p>
                <p className="text-red-500 font-semibold">Closed</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm text-center mt-4">
              <Globe className="w-4 h-4 inline mr-1" />
              Gisenyi Time (GMT+2)
            </p>
          </div>
        </div>
        
        {/* Contact Methods */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Get in Touch</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <a
                  key={index}
                  href={contact.link}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{contact.label}</h4>
                  <p className="text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                    {contact.value}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;