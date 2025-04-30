
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { WebDevIcon, MobileAppIcon, UiUxIcon, CloudServiceIcon } from "@/components/icons/TechIcons";
import { Button } from "@/components/ui/button";

const serviceDetails = [
  {
    id: 1,
    title: 'Web Development',
    icon: WebDevIcon,
    description: 'We build responsive, fast, and secure websites and web applications using the latest technologies and best practices.',
    features: [
      'Custom Website Development',
      'Progressive Web Apps (PWA)',
      'E-commerce Solutions',
      'Content Management Systems',
      'API Development & Integration'
    ]
  },
  {
    id: 2,
    title: 'Mobile App Development',
    icon: MobileAppIcon,
    description: 'Our team develops native and cross-platform mobile applications that provide seamless user experiences across devices.',
    features: [
      'iOS App Development',
      'Android App Development',
      'Cross-platform Solutions',
      'App Maintenance & Support',
      'App Redesign & Optimization'
    ]
  },
  {
    id: 3,
    title: 'UI/UX Design',
    icon: UiUxIcon,
    description: 'We create intuitive, engaging, and accessible user interfaces that deliver exceptional user experiences.',
    features: [
      'User Research & Testing',
      'Wireframing & Prototyping',
      'Interactive Design',
      'Visual Design',
      'Design Systems'
    ]
  },
  {
    id: 4,
    title: 'Cloud Services',
    icon: CloudServiceIcon,
    description: 'Our cloud solutions enable businesses to scale efficiently, improve security, and reduce operational costs.',
    features: [
      'Cloud Migration',
      'Infrastructure as Code',
      'DevOps Implementation',
      'Cloud Security',
      'Serverless Applications'
    ]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="py-20 bg-gratech-dark relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-gray-300 mb-8">
                We offer a comprehensive range of software development and digital services to help businesses thrive in the digital age.
              </p>
              <Button className="blue-gradient">Get in Touch</Button>
            </div>
          </div>
        </section>

        {/* Services Details */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-20">
              {serviceDetails.map((service, index) => (
                <div key={service.id} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <service.icon className="w-20 h-20 mb-6" />
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-gray-300 mb-8">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <span className="bg-gratech-blue/20 p-1 rounded-full">
                            <svg className="h-4 w-4 text-gratech-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="mt-8 blue-gradient">Learn More</Button>
                  </div>
                  <div className={`${index % 2 === 1 ? 'md:order-1' : ''} bg-white/5 border border-white/10 rounded-xl p-8`}>
                    <svg 
                      viewBox="0 0 400 300" 
                      className="w-full h-auto" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="400" height="300" rx="12" fill="#2563EB" fillOpacity="0.1" />
                      <circle cx="200" cy="150" r="100" stroke="#2563EB" strokeWidth="4" strokeDasharray="20,10" />
                      <circle cx="200" cy="150" r="50" fill="#2563EB" fillOpacity="0.3" />
                      {/* Random decorative elements based on service id */}
                      {service.id === 1 && (
                        <>
                          <rect x="100" y="100" width="200" height="20" rx="4" fill="#2563EB" fillOpacity="0.5" />
                          <rect x="100" y="130" width="150" height="20" rx="4" fill="#2563EB" fillOpacity="0.4" />
                          <rect x="100" y="160" width="100" height="20" rx="4" fill="#2563EB" fillOpacity="0.3" />
                          <rect x="100" y="190" width="180" height="20" rx="4" fill="#2563EB" fillOpacity="0.2" />
                        </>
                      )}
                      {service.id === 2 && (
                        <>
                          <rect x="160" y="70" width="80" height="160" rx="10" stroke="#2563EB" strokeWidth="4" fill="none" />
                          <circle cx="200" cy="210" r="8" fill="#2563EB" />
                          <rect x="180" y="90" width="40" height="8" rx="4" fill="#2563EB" fillOpacity="0.7" />
                          <rect x="180" y="110" width="40" height="8" rx="4" fill="#2563EB" fillOpacity="0.7" />
                          <rect x="180" y="130" width="40" height="8" rx="4" fill="#2563EB" fillOpacity="0.7" />
                          <rect x="180" y="150" width="40" height="40" rx="4" fill="#2563EB" fillOpacity="0.3" />
                        </>
                      )}
                      {service.id === 3 && (
                        <>
                          <path d="M100,150 Q200,50 300,150" stroke="#2563EB" strokeWidth="4" fill="none" />
                          <circle cx="100" cy="150" r="10" fill="#2563EB" />
                          <circle cx="200" cy="50" r="10" fill="#2563EB" />
                          <circle cx="300" cy="150" r="10" fill="#2563EB" />
                          <rect x="150" y="170" width="100" height="60" rx="8" fill="#2563EB" fillOpacity="0.3" />
                        </>
                      )}
                      {service.id === 4 && (
                        <>
                          <path d="M150,100 C170,80 230,80 250,100 C270,120 270,180 250,200 C230,220 170,220 150,200 C130,180 130,120 150,100Z" fill="#2563EB" fillOpacity="0.2" stroke="#2563EB" strokeWidth="2" />
                          <path d="M180,140 L220,140 L220,180 L180,180 Z" fill="#2563EB" fillOpacity="0.5" />
                          <circle cx="200" cy="120" r="8" fill="#2563EB" />
                          <circle cx="200" cy="200" r="8" fill="#2563EB" />
                        </>
                      )}
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gratech-blue">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Start Your Project?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's discuss how we can help you achieve your business goals with our software development expertise.
              </p>
              <Button variant="outline" className="bg-white text-gratech-blue hover:bg-blue-50 border-white">
                Contact Us Today
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
