import { Button } from '@/components/ui/button';
import { WebDevIcon, MobileAppIcon, UiUxIcon, CloudServiceIcon } from '../icons/TechIcons';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Custom software development and web applications for modern businesses, including SaaS platforms and secure web solutions.',
    icon: WebDevIcon
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile app development for iOS and Android, including business automation tools and startup MVPs.',
    icon: MobileAppIcon
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'UI/UX design agency services for digital product design, intuitive interfaces, and engaging user experiences.',
    icon: UiUxIcon
  },
  {
    id: 4,
    title: 'Cloud Services',
    description: 'Cloud solutions provider for scalable cloud infrastructure, digital transformation, and enterprise software solutions.',
    icon: CloudServiceIcon
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-nucleas-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Software Development Services</h2>
          <div className="w-20 h-1 bg-nucleas-blue mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 card-gradient card-hover-gradient"
            >
              <service.icon className="w-16 h-16 mb-5" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <Link to="/services">
                <Button variant="link" className="text-nucleas-blue p-0">Learn more →</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
