
import React from 'react';
import { WebDevIcon, MobileAppIcon, UiUxIcon, CloudServiceIcon } from '../icons/TechIcons';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Custom websites and web applications with cutting-edge technologies.',
    icon: WebDevIcon
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: MobileAppIcon
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'User-centered design that creates engaging digital experiences.',
    icon: UiUxIcon
  },
  {
    id: 4,
    title: 'Cloud Services',
    description: 'Scalable cloud solutions for modern business requirements.',
    icon: CloudServiceIcon
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gratech-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Software Development Services</h2>
          <div className="w-20 h-1 bg-gratech-blue mx-auto rounded"></div>
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
              <Button variant="link" className="text-gratech-blue p-0">Learn more →</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
