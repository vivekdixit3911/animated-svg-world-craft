import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const categories = ['All', 'Web Apps', 'Mobile Apps', 'UI/UX', 'Cloud'];

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Apps',
    image: '/projects/ecommerce.jpg',
    description: 'Modern e-commerce platform with real-time inventory management.',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
    gradient: 'from-blue-600 to-blue-400'
  },
  {
    id: 2,
    title: 'Healthcare Mobile App',
    category: 'Mobile Apps',
    image: '/projects/healthcare.jpg',
    description: 'Patient management and telemedicine application.',
    technologies: ['React Native', 'Firebase', 'WebRTC'],
    gradient: 'from-purple-600 to-purple-400'
  },
  {
    id: 3,
    title: 'Financial Dashboard',
    category: 'UI/UX',
    image: '/projects/finance.jpg',
    description: 'Intuitive financial analytics and reporting dashboard.',
    technologies: ['Figma', 'Adobe XD', 'Protopie'],
    gradient: 'from-emerald-600 to-emerald-400'
  },
  {
    id: 4,
    title: 'Cloud Migration',
    category: 'Cloud',
    image: '/projects/cloud.jpg',
    description: 'Enterprise-scale cloud infrastructure migration.',
    technologies: ['AWS', 'Terraform', 'Docker', 'Kubernetes'],
    gradient: 'from-orange-600 to-orange-400'
  },
  {
    id: 5,
    title: 'Social Network',
    category: 'Web Apps',
    image: '/projects/social.jpg',
    description: 'Community platform with real-time features.',
    technologies: ['Next.js', 'GraphQL', 'PostgreSQL'],
    gradient: 'from-pink-600 to-pink-400'
  },
  {
    id: 6,
    title: 'Delivery App',
    category: 'Mobile Apps',
    image: '/projects/delivery.jpg',
    description: 'On-demand delivery service application.',
    technologies: ['Flutter', 'Node.js', 'MongoDB'],
    gradient: 'from-teal-600 to-teal-400'
  }
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-nucleas-dark text-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{ 
              backgroundImage: 'radial-gradient(circle at 25px 25px, white 2%, transparent 0%)',
              backgroundSize: '50px 50px'
            }} />
          </div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
              <p className="text-xl text-gray-300 mb-8">
                Explore our latest projects and see how we've helped businesses transform their digital presence.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`${
                    selectedCategory === category
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "border-white/20 hover:bg-white/5"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="group relative bg-white/5 border border-white/10 rounded-xl overflow-hidden"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Project Image */}
                  <div className="aspect-video relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="text-sm px-3 py-1 rounded-full bg-white/10 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 w-full`}>
                      View Project
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-blue-600/20 to-purple-600/20 border-y border-white/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's create something amazing together. Get in touch with our team today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500">
                  Start a Project
                </Button>
                <Button variant="outline" className="border-white/20 hover:bg-white/5">
                  View More Work
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
