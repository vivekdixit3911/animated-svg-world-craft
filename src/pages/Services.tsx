import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { WebDevIcon, MobileAppIcon, UiUxIcon, CloudServiceIcon } from '@/components/icons/TechIcons';

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Custom websites and web applications built with cutting-edge technologies.',
    features: ['React/Next.js Development', 'E-commerce Solutions', 'Progressive Web Apps', 'API Integration'],
    icon: WebDevIcon,
    gradient: 'from-blue-600 to-blue-400'
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    features: ['React Native Apps', 'Native iOS/Android', 'App Store Optimization', 'Push Notifications'],
    icon: MobileAppIcon,
    gradient: 'from-purple-600 to-purple-400'
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'User-centered design that creates engaging digital experiences.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    icon: UiUxIcon,
    gradient: 'from-pink-600 to-pink-400'
  },
  {
    id: 4,
    title: 'Cloud Services',
    description: 'Scalable cloud solutions for modern business requirements.',
    features: ['AWS/Azure Solutions', 'Cloud Migration', 'DevOps', 'Microservices'],
    icon: CloudServiceIcon,
    gradient: 'from-teal-600 to-teal-400'
  }
];

const Services = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-gray-300 mb-8">
                We deliver cutting-edge solutions that help businesses thrive in the digital age.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div 
                  key={service.id}
                  className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
                >
                  <div className="p-8">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-8 py-4 border-t border-white/10">
                    <Button className={`bg-gradient-to-r ${service.gradient} hover:opacity-90`}>
                      Learn More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-blue-600/20 to-purple-600/20 border-y border-white/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our services can help you achieve your digital goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500">
                  Get Started
                </Button>
                <Button variant="outline" className="border-white/20 hover:bg-white/5">
                  View Case Studies
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

export default Services;
