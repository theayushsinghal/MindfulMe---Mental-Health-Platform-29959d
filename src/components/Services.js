import React, { useState } from "react";
import ServiceCard from "./ServiceCard";
import { servicesData } from "../data/servicesData";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const categories = [
    { id: "all", name: "All Services" },
    { id: "therapy", name: "Therapy" },
    { id: "wellness", name: "Wellness" },
    { id: "community", name: "Community" },
    { id: "resources", name: "Resources" }
  ];
  
  const filteredServices = activeCategory === "all" 
    ? servicesData 
    : servicesData.filter(service => service.category === activeCategory);

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Mental Health Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover personalized support for your mental wellbeing through our comprehensive range of services.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-purple-600 text-white shadow-md" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Featured Service */}
        {activeCategory === "all" && (
          <div className="mb-12">
            <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl overflow-hidden shadow-xl">
              <div className="md:flex">
                <div className="md:w-1/2 p-8 md:p-12 text-white">
                  <div className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-semibold mb-6">
                    Featured Service
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Personalized Therapy Sessions</h3>
                  <p className="mb-6">
                    Connect with licensed therapists who specialize in various mental health areas. Get personalized support through secure video sessions from the comfort of your home.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <span className="mr-2 text-purple-200">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><polyline points="88 136 112 160 168 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                      </span>
                      <span>Licensed, experienced therapists</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-purple-200">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><polyline points="88 136 112 160 168 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                      </span>
                      <span>Secure video sessions</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2 text-purple-200">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><polyline points="88 136 112 160 168 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                      </span>
                      <span>Flexible scheduling</span>
                    </li>
                  </ul>
                  <a 
                    href="#contact" 
                    className="inline-flex items-center px-6 py-3 bg-white text-purple-600 font-medium rounded-lg hover:bg-purple-50 transition duration-300"
                  >
                    Schedule a Session
                    <span className="ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><rect x="40" y="40" width="176" height="176" rx="8" transform="translate(0 256) rotate(-90)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="96 112 96 160 144 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="160" y1="96" x2="96" y2="160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                    </span>
                  </a>
                </div>
                <div className="md:w-1/2 relative">
                  <div className="h-64 md:h-full">
                    <img src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxUaGVyYXBpc3QlMkJoYXZpbmclMkJhJTJCY29udmVyc2F0aW9uJTJCd2l0aCUyQmElMkJjbGllbnR8ZW58MHx8fHwxNzQ3NzQzMTc3fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Therapist having a conversation with a client" />
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg p-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><rect x="40" y="40" width="176" height="176" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="176" y1="24" x2="176" y2="52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="80" y1="24" x2="80" y2="52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="40" y1="88" x2="216" y2="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="84 132 100 124 100 180" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M138.14,132a16,16,0,1,1,26.64,17.63L136,180h32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-xs text-gray-500">First Session</p>
                        <p className="text-sm font-bold text-gray-800">50% Off</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => {
            // Find the SVG icon based on service type
            let serviceIcon;
            switch (service.iconType) {
              case "therapy":
                serviceIcon = (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><circle cx="104" cy="120" r="16"/><circle cx="152" cy="120" r="16"/><path d="M105.07,192l16,28a8,8,0,0,0,13.9,0l16-28H216a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V184a8,8,0,0,0,8,8Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                );
                break;
              case "meditation":
                serviceIcon = (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><polyline points="68 100 92 156 116 100" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><rect x="12" y="56" width="232" height="144" rx="72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M148,140h20a20,20,0,0,0,0-40H148v56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="188" y1="156" x2="175.53" y2="138.54" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                );
                break;
              case "workshop":
                serviceIcon = (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><rect x="40" y="40" width="176" height="176" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="176" y1="24" x2="176" y2="52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="80" y1="24" x2="80" y2="52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="40" y1="88" x2="216" y2="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="84 132 100 124 100 180" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M138.14,132a16,16,0,1,1,26.64,17.63L136,180h32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                );
                break;
              case "community":
                serviceIcon = (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><circle cx="80" cy="172" r="28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="80" cy="60" r="28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="176" cy="172" r="28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="176" cy="60" r="28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M32,224a60,60,0,0,1,96,0,60,60,0,0,1,96,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M32,112a60,60,0,0,1,96,0h0a60,60,0,0,1,96,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                );
                break;
              case "assessment":
                serviceIcon = (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><path d="M160,40h40a8,8,0,0,1,8,8V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M88,72V64a40,40,0,0,1,80,0v8Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                );
                break;
              case "resources":
                serviceIcon = (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><path d="M128,88a32,32,0,0,1,32-32h72V200H160a32,32,0,0,0-32,32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M24,200H96a32,32,0,0,1,32,32V88A32,32,0,0,0,96,56H24Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                );
                break;
              default:
                serviceIcon = (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><path d="M84.27,171.73l-55.09-20.3a7.92,7.92,0,0,1,0-14.86l55.09-20.3,20.3-55.09a7.92,7.92,0,0,1,14.86,0l20.3,55.09,55.09,20.3a7.92,7.92,0,0,1,0,14.86l-55.09,20.3-20.3,55.09a7.92,7.92,0,0,1-14.86,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="176" y1="16" x2="176" y2="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="224" y1="72" x2="224" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="152" y1="40" x2="200" y2="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="208" y1="88" x2="240" y2="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                );
            }

            return (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={serviceIcon}
                features={service.features}
                ctaLink={service.ctaLink}
                highlighted={service.highlighted}
              />
            );
          })}
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border-2 border-purple-600 text-purple-600 font-medium rounded-lg hover:bg-purple-50 transition-colors"
          >
            View All Services
            <span className="ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><rect x="40" y="40" width="176" height="176" rx="8" transform="translate(0 256) rotate(-90)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="96 112 96 160 144 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="160" y1="96" x2="96" y2="160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;