import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import React from 'react';

const categories = ['All', 'Web Apps', 'Mobile Apps', 'UI/UX', 'Cloud'];

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Apps',
    image: '/projects/ecommerce.jpg',
    description: 'A modern e-commerce platform featuring real-time inventory management, secure payment integration, and a seamless user experience. Built with React, Node.js, MongoDB, and AWS, this solution enables businesses to manage products, orders, and customers efficiently while scaling effortlessly in the cloud.',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
    gradient: 'from-blue-600 to-blue-400',
    logo: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="6" y="16" width="36" height="20" rx="6" fill="url(#cartG)"/>
        <rect x="12" y="12" width="24" height="8" rx="4" fill="#fff" fillOpacity="0.18"/>
        <circle cx="16" cy="38" r="3" fill="#fff" fillOpacity="0.7"/>
        <circle cx="32" cy="38" r="3" fill="#fff" fillOpacity="0.7"/>
        <defs>
          <linearGradient id="cartG" x1="6" y1="16" x2="42" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="#60A5FA"/>
            <stop offset="1" stopColor="#6366F1"/>
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    id: 2,
    title: 'Healthcare Mobile App',
    category: 'Mobile Apps',
    image: '/projects/healthcare.jpg',
    description: 'A comprehensive patient management and telemedicine application designed for healthcare providers. This app supports appointment scheduling, video consultations, and secure patient data management. Developed using React Native, Firebase, and WebRTC, it ensures HIPAA compliance and a smooth mobile experience.',
    technologies: ['React Native', 'Firebase', 'WebRTC'],
    gradient: 'from-purple-600 to-purple-400',
    logo: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M24 40s-12-9-12-18a7 7 0 0 1 14 0 7 7 0 0 1 14 0c0 9-12 18-12 18z" fill="url(#heartG)"/>
        <circle cx="18" cy="20" r="2" fill="#fff" fillOpacity="0.7"/>
        <circle cx="30" cy="20" r="2" fill="#fff" fillOpacity="0.7"/>
        <defs>
          <linearGradient id="heartG" x1="12" y1="22" x2="36" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F472B6"/>
            <stop offset="1" stopColor="#60A5FA"/>
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    id: 3,
    title: 'Financial Dashboard',
    category: 'UI/UX',
    image: '/projects/finance.jpg',
    description: 'An intuitive financial analytics and reporting dashboard for businesses and finance teams. The dashboard provides real-time data visualization, KPI tracking, and customizable reports. Designed with Figma and Adobe XD, it offers a clean UI and integrates with various financial data sources.',
    technologies: ['Figma', 'Adobe XD', 'Protopie'],
    gradient: 'from-emerald-600 to-emerald-400',
    logo: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <polyline points="10,36 18,24 28,32 38,14" fill="none" stroke="url(#graphG)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="10" cy="36" r="2" fill="#34D399"/>
        <circle cx="18" cy="24" r="2" fill="#34D399"/>
        <circle cx="28" cy="32" r="2" fill="#34D399"/>
        <circle cx="38" cy="14" r="2" fill="#34D399"/>
        <defs>
          <linearGradient id="graphG" x1="10" y1="36" x2="38" y2="14" gradientUnits="userSpaceOnUse">
            <stop stopColor="#34D399"/>
            <stop offset="1" stopColor="#60A5FA"/>
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    id: 4,
    title: 'Cloud Migration',
    category: 'Cloud',
    image: '/projects/cloud.jpg',
    description: 'Enterprise-scale cloud infrastructure migration services, moving legacy systems to AWS using Terraform, Docker, and Kubernetes. This project involved planning, execution, and optimization for high availability, security, and cost efficiency, enabling clients to leverage the full power of cloud computing.',
    technologies: ['AWS', 'Terraform', 'Docker', 'Kubernetes'],
    gradient: 'from-orange-600 to-orange-400',
    logo: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <ellipse cx="28" cy="32" rx="14" ry="8" fill="url(#cloudG)"/>
        <ellipse cx="18" cy="28" rx="6" ry="3" fill="#fff" fillOpacity="0.15"/>
        <defs>
          <linearGradient id="cloudG" x1="14" y1="24" x2="42" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FBBF24"/>
            <stop offset="1" stopColor="#60A5FA"/>
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    id: 5,
    title: 'Social Network',
    category: 'Web Apps',
    image: '/projects/social.jpg',
    description: 'A feature-rich community platform with real-time messaging, user profiles, and content sharing. Built with Next.js, GraphQL, and PostgreSQL, this social network supports scalable interactions and robust data security, fostering vibrant online communities.',
    technologies: ['Next.js', 'GraphQL', 'PostgreSQL'],
    gradient: 'from-pink-600 to-pink-400',
    logo: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="18" fill="url(#socialG)"/>
        <circle cx="16" cy="20" r="3" fill="#fff" fillOpacity="0.7"/>
        <circle cx="32" cy="20" r="3" fill="#fff" fillOpacity="0.7"/>
        <ellipse cx="24" cy="30" rx="7" ry="3" fill="#fff" fillOpacity="0.18"/>
        <defs>
          <linearGradient id="socialG" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F472B6"/>
            <stop offset="1" stopColor="#60A5FA"/>
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    id: 6,
    title: 'Delivery App',
    category: 'Mobile Apps',
    image: '/projects/delivery.jpg',
    description: 'An on-demand delivery service application for businesses in the logistics sector. The app includes real-time order tracking, driver management, and customer notifications. Developed with Flutter, Node.js, and MongoDB, it delivers a fast, reliable, and user-friendly experience for both customers and drivers.',
    technologies: ['Flutter', 'Node.js', 'MongoDB'],
    gradient: 'from-teal-600 to-teal-400',
    logo: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="10" y="28" width="28" height="10" rx="5" fill="url(#delivG)"/>
        <rect x="14" y="18" width="20" height="10" rx="5" fill="#fff" fillOpacity="0.15"/>
        <circle cx="16" cy="38" r="2" fill="#fff" fillOpacity="0.7"/>
        <circle cx="32" cy="38" r="2" fill="#fff" fillOpacity="0.7"/>
        <defs>
          <linearGradient id="delivG" x1="10" y1="28" x2="38" y2="38" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2dd4bf"/>
            <stop offset="1" stopColor="#60A5FA"/>
          </linearGradient>
        </defs>
      </svg>
    )
  }
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  // Scroll to contact form if hash is present
  React.useEffect(() => {
    if (window.location.hash === '#start-project') {
      setTimeout(() => {
        const form = document.getElementById('contact-form');
        if (form) form.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Portfolio | Nucleas IT - Custom Software, Cloud, Mobile & UI/UX Projects</title>
        <meta name="description" content="See Nucleas IT's portfolio: custom software, cloud, mobile, and UI/UX projects for e-commerce, healthcare, finance, and logistics." />
        {/* Schema.org Portfolio Structured Data */}
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Nucleas IT Portfolio",
          "description": "Explore our portfolio of custom software, cloud, mobile, and UI/UX projects.",
          "url": "https://www.nucleasit.tech/portfolio",
          "hasPart": [
            {
              "@type": "CreativeWork",
              "name": "E-Commerce Platform",
              "description": "A modern e-commerce platform with real-time inventory, secure payments, and cloud scalability.",
              "keywords": "e-commerce, cloud, React, Node.js, AWS, MongoDB"
            },
            {
              "@type": "CreativeWork",
              "name": "Healthcare Mobile App",
              "description": "Telemedicine and patient management app for healthcare providers.",
              "keywords": "healthcare, mobile app, telemedicine, React Native, Firebase"
            },
            {
              "@type": "CreativeWork",
              "name": "Financial Dashboard",
              "description": "Financial analytics dashboard with real-time data visualization.",
              "keywords": "finance, dashboard, analytics, UI/UX, Figma"
            },
            {
              "@type": "CreativeWork",
              "name": "Cloud Migration",
              "description": "Enterprise cloud migration using AWS, Docker, Kubernetes.",
              "keywords": "cloud migration, AWS, Docker, Kubernetes, Terraform"
            },
            {
              "@type": "CreativeWork",
              "name": "Social Network",
              "description": "Community platform with real-time messaging and content sharing.",
              "keywords": "social network, Next.js, GraphQL, PostgreSQL"
            },
            {
              "@type": "CreativeWork",
              "name": "Delivery App",
              "description": "On-demand delivery app with real-time tracking.",
              "keywords": "delivery app, logistics, Flutter, Node.js, MongoDB"
            }
          ]
        }
        `}</script>
        {/* Schema.org FAQ Structured Data */}
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What industries do you serve?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We deliver solutions for e-commerce, healthcare, finance, logistics, and social platforms."
              }
            },
            {
              "@type": "Question",
              "name": "What technologies do you use?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We use React, Node.js, AWS, Flutter, Figma, and more for scalable, modern solutions."
              }
            },
            {
              "@type": "Question",
              "name": "Can I see live demos?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! Contact us for live demos of our portfolio projects."
              }
            }
          ]
        }
        `}</script>
      </Helmet>
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
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio: Custom Software, Cloud, Mobile, and UI/UX Solutions</h1>
                <p className="text-xl text-gray-300 mb-8">
                  At Nucleas IT, we specialize in delivering innovative software solutions for businesses of all sizes. Our portfolio showcases a diverse range of projects, including e-commerce platforms, healthcare mobile apps, financial dashboards, cloud migration, social networks, and on-demand delivery applications. Each project is crafted with cutting-edge technologies such as React, Node.js, AWS, Flutter, and more. Explore our work to see how we empower clients with scalable, secure, and user-friendly digital products.
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
                    {/* Project Image/Icon */}
                    <div className="aspect-video relative overflow-hidden flex items-center justify-center">
                      {project.logo && (
                        <div className="z-10 flex items-center justify-center w-full h-full">
                          <div style={{ width: 72, height: 72, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {React.cloneElement(project.logo as React.ReactElement, { width: 72, height: 72 })}
                          </div>
                        </div>
                      )}
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
                      <Button
                        className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 w-full`}
                        onClick={() => setSelectedProject(project)}
                      >
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
                  <Button
                    asChild
                    className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500"
                  >
                    <a href="/contact#start-project">Start a Project</a>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/20 hover:bg-white/5"
                    onClick={() => setShowModal(true)}
                  >
                    View More Work
                  </Button>
                </div>
              </div>
            </div>
            {/* Modal */}
            {showModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                <div className="bg-nucleas-dark rounded-2xl shadow-2xl p-8 max-w-md w-full text-center border border-white/10">
                  <h3 className="text-2xl font-bold mb-4 text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Welcome!</h3>
                  <p className="text-lg text-white/90 mb-6">We'll make something amazing together. We respect your ideas and will work with you on your project.</p>
                  <Button className="w-full bg-blue-600" onClick={() => setShowModal(false)}>
                    Close
                  </Button>
                </div>
              </div>
            )}
          </section>

          {/* FAQ Section for SEO and users */}
          <section className="py-16 bg-nucleas-dark/90">
            <div className="container mx-auto px-4 max-w-3xl">
              <h2 className="text-2xl font-bold mb-6">Portfolio FAQ</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold">What industries do you serve?</h3>
                  <p>We deliver solutions for <strong>e-commerce</strong>, <strong>healthcare</strong>, <strong>finance</strong>, <strong>logistics</strong>, and <strong>social platforms</strong>.</p>
                </div>
                <div>
                  <h3 className="font-semibold">What technologies do you use?</h3>
                  <p>We use <strong>React</strong>, <strong>Node.js</strong>, <strong>AWS</strong>, <strong>Flutter</strong>, <strong>Figma</strong>, and more for scalable, modern solutions.</p>
                </div>
                <div>
                  <h3 className="font-semibold">Can I see live demos?</h3>
                  <p>Yes! <a href="/contact" className="text-blue-400 underline">Contact us</a> for live demos of our portfolio projects.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
      {/* Modal for Project Details */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-nucleas-dark rounded-2xl shadow-2xl p-8 max-w-lg w-full border border-white/10 relative">
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl font-bold"
              onClick={() => setSelectedProject(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="flex flex-col items-center mb-6">
              <div style={{ width: 96, height: 96, marginBottom: 16 }}>
                {React.cloneElement(selectedProject.logo as React.ReactElement, { width: 96, height: 96 })}
              </div>
              <h2 className="text-2xl font-bold mb-2 text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center">{selectedProject.title}</h2>
              <p className="text-white/80 text-center mb-4">{selectedProject.description}</p>
            </div>
            <div className="mb-4">
              <div className="font-semibold text-white mb-2">Technologies Used:</div>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, idx) => (
                  <span key={idx} className="text-sm px-3 py-1 rounded-full bg-white/10 text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {/* Show any other details if available */}
            {selectedProject.category && (
              <div className="mb-2 text-white/80"><span className="font-semibold">Category:</span> {selectedProject.category}</div>
            )}
            {/* Add more fields here if your project object has them, e.g. users, working, etc. */}
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
