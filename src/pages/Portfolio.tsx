
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Portfolio = () => {
  // Project categories for filtering
  const categories = [
    "All",
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "Cloud Solutions"
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  // Portfolio projects
  const projects = [
    {
      id: 1,
      title: "FinTech Dashboard",
      category: "Web Development",
      description: "A comprehensive financial management dashboard with real-time analytics.",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      image: (
        <svg viewBox="0 0 400 300" className="w-full h-auto">
          <rect width="400" height="300" fill="#2563EB" fillOpacity="0.1" />
          <rect x="30" y="40" width="340" height="60" rx="4" fill="#2563EB" fillOpacity="0.3" />
          <rect x="30" y="120" width="160" height="140" rx="4" fill="#2563EB" fillOpacity="0.2" />
          <rect x="210" y="120" width="160" height="60" rx="4" fill="#2563EB" fillOpacity="0.2" />
          <rect x="210" y="200" width="160" height="60" rx="4" fill="#2563EB" fillOpacity="0.2" />
          <circle cx="60" cy="70" r="10" fill="#2563EB" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Health Tracker App",
      category: "Mobile Apps",
      description: "A feature-rich mobile application for tracking health metrics and workout routines.",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      image: (
        <svg viewBox="0 0 400 300" className="w-full h-auto">
          <rect width="400" height="300" fill="#7C3AED" fillOpacity="0.1" />
          <rect x="125" y="20" width="150" height="260" rx="15" stroke="#7C3AED" strokeWidth="4" fill="none" />
          <rect x="145" y="50" width="110" height="170" rx="5" fill="#7C3AED" fillOpacity="0.2" />
          <circle cx="200" cy="250" r="10" stroke="#7C3AED" strokeWidth="2" fill="none" />
        </svg>
      )
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A scalable e-commerce solution with advanced product filtering and payment processing.",
      technologies: ["Next.js", "Tailwind CSS", "Stripe", "PostgreSQL"],
      image: (
        <svg viewBox="0 0 400 300" className="w-full h-auto">
          <rect width="400" height="300" fill="#10B981" fillOpacity="0.1" />
          <rect x="40" y="40" width="320" height="60" rx="4" fill="#10B981" fillOpacity="0.2" />
          <rect x="40" y="120" width="100" height="140" rx="4" fill="#10B981" fillOpacity="0.2" />
          <rect x="150" y="120" width="100" height="140" rx="4" fill="#10B981" fillOpacity="0.2" />
          <rect x="260" y="120" width="100" height="140" rx="4" fill="#10B981" fillOpacity="0.2" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Smart Home Control System",
      category: "UI/UX Design",
      description: "An intuitive interface for managing connected home devices with customizable dashboards.",
      technologies: ["Figma", "Sketch", "Adobe XD", "Principle"],
      image: (
        <svg viewBox="0 0 400 300" className="w-full h-auto">
          <rect width="400" height="300" fill="#F59E0B" fillOpacity="0.1" />
          <rect x="120" y="40" width="160" height="220" rx="10" fill="#F59E0B" fillOpacity="0.2" />
          <circle cx="200" cy="80" r="20" fill="#F59E0B" fillOpacity="0.3" />
          <rect x="140" y="120" width="120" height="20" rx="4" fill="#F59E0B" fillOpacity="0.3" />
          <rect x="140" y="150" width="120" height="20" rx="4" fill="#F59E0B" fillOpacity="0.3" />
          <rect x="140" y="180" width="120" height="20" rx="4" fill="#F59E0B" fillOpacity="0.3" />
          <rect x="140" y="210" width="120" height="20" rx="4" fill="#F59E0B" fillOpacity="0.3" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Logistics Management System",
      category: "Cloud Solutions",
      description: "A cloud-based platform for optimizing supply chain operations and fleet management.",
      technologies: ["AWS", "Docker", "Kubernetes", "Python"],
      image: (
        <svg viewBox="0 0 400 300" className="w-full h-auto">
          <rect width="400" height="300" fill="#EF4444" fillOpacity="0.1" />
          <path d="M100,150 Q200,50 300,150 Q200,250 100,150 Z" fill="#EF4444" fillOpacity="0.2" />
          <circle cx="150" cy="150" r="20" fill="#EF4444" fillOpacity="0.3" />
          <circle cx="250" cy="150" r="20" fill="#EF4444" fillOpacity="0.3" />
          <circle cx="200" cy="100" r="20" fill="#EF4444" fillOpacity="0.3" />
          <circle cx="200" cy="200" r="20" fill="#EF4444" fillOpacity="0.3" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Travel Companion App",
      category: "Mobile Apps",
      description: "A mobile app for travelers with itinerary planning, local recommendations, and offline maps.",
      technologies: ["Flutter", "Firebase", "Google Maps API", "GraphQL"],
      image: (
        <svg viewBox="0 0 400 300" className="w-full h-auto">
          <rect width="400" height="300" fill="#3B82F6" fillOpacity="0.1" />
          <rect x="125" y="20" width="150" height="260" rx="15" stroke="#3B82F6" strokeWidth="4" fill="none" />
          <circle cx="160" cy="60" r="15" fill="#3B82F6" fillOpacity="0.3" />
          <rect x="145" y="90" width="110" height="10" rx="5" fill="#3B82F6" fillOpacity="0.2" />
          <rect x="145" y="110" width="110" height="40" rx="5" fill="#3B82F6" fillOpacity="0.2" />
          <rect x="145" y="160" width="50" height="50" rx="5" fill="#3B82F6" fillOpacity="0.2" />
          <rect x="205" y="160" width="50" height="50" rx="5" fill="#3B82F6" fillOpacity="0.2" />
          <rect x="145" y="220" width="110" height="20" rx="5" fill="#3B82F6" fillOpacity="0.2" />
        </svg>
      )
    },
    {
      id: 7,
      title: "Enterprise CRM System",
      category: "Cloud Solutions",
      description: "A comprehensive customer relationship management system built for scalability.",
      technologies: ["Angular", "Java Spring", "AWS", "Elasticsearch"],
      image: (
        <svg viewBox="0 0 400 300" className="w-full h-auto">
          <rect width="400" height="300" fill="#8B5CF6" fillOpacity="0.1" />
          <rect x="50" y="50" width="300" height="200" rx="8" fill="#8B5CF6" fillOpacity="0.1" stroke="#8B5CF6" strokeWidth="2" />
          <rect x="70" y="80" width="260" height="40" rx="4" fill="#8B5CF6" fillOpacity="0.2" />
          <rect x="70" y="140" width="120" height="80" rx="4" fill="#8B5CF6" fillOpacity="0.2" />
          <rect x="210" y="140" width="120" height="80" rx="4" fill="#8B5CF6" fillOpacity="0.2" />
        </svg>
      )
    },
    {
      id: 8,
      title: "Creative Agency Website",
      category: "UI/UX Design",
      description: "A visually stunning website design for a creative agency with interactive elements.",
      technologies: ["Figma", "GSAP", "Three.js", "WebGL"],
      image: (
        <svg viewBox="0 0 400 300" className="w-full h-auto">
          <rect width="400" height="300" fill="#10B981" fillOpacity="0.1" />
          <rect x="50" y="70" width="300" height="160" rx="8" fill="#10B981" fillOpacity="0.2" />
          <circle cx="100" cy="120" r="30" fill="#10B981" fillOpacity="0.3" />
          <rect x="150" y="100" width="170" height="10" rx="5" fill="#10B981" fillOpacity="0.3" />
          <rect x="150" y="120" width="130" height="10" rx="5" fill="#10B981" fillOpacity="0.3" />
          <rect x="150" y="140" width="150" height="10" rx="5" fill="#10B981" fillOpacity="0.3" />
          <rect x="150" y="170" width="80" height="30" rx="5" fill="#10B981" fillOpacity="0.3" />
        </svg>
      )
    }
  ];

  // Filter projects based on selected category
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gratech-dark relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 100 100">
              <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="4" cy="4" r="1" fill="white" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
              <p className="text-xl text-gray-300 mb-8">
                Explore our collection of innovative projects that showcase our expertise and creative approach.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Gallery */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full transition-all ${
                    activeCategory === category 
                      ? "bg-blue-600 text-white" 
                      : "bg-white/5 hover:bg-white/10 border border-white/10"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map(project => (
                <div 
                  key={project.id} 
                  className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="aspect-video overflow-hidden bg-gradient-to-br from-blue-900/30 to-purple-900/30">
                    <div className="transform group-hover:scale-105 transition-transform duration-500">
                      {project.image}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <span className="text-xs px-2 py-1 bg-blue-900/30 rounded-full text-blue-400">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="text-xs px-2 py-1 bg-white/5 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full border-white/20 hover:bg-white/5">
                      View Project
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Start Your Project with Us</h2>
              <p className="text-xl text-blue-100 mb-8">
                Ready to transform your business with cutting-edge technology? Let's create something amazing together.
              </p>
              <Button className="bg-white text-blue-600 hover:bg-blue-50">
                Get in Touch
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
