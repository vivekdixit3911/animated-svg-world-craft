
import React from 'react';
import { Card } from '@/components/ui/card';
import CartoonAvatar from '../icons/CartoonAvatar';

const testimonials = [
  {
    id: 1,
    name: 'Michael Brown',
    role: 'CEO, TechStart',
    content: 'Working with Gratech completely transformed our business. Their team delivered a solution that not only met but exceeded our expectations.',
    seed: 'michael-brown'
  },
  {
    id: 2,
    name: 'Jennifer Lee',
    role: 'CTO, InnovateCorp',
    content: 'The mobile app developed by Gratech has increased our user engagement by 200%. Their attention to detail and technical expertise is unmatched.',
    seed: 'jennifer-lee'
  },
  {
    id: 3,
    name: 'Robert Garcia',
    role: 'Founder, DataSphere',
    content: 'Gratech helped us implement a complex data analytics system that gave us invaluable insights into our business operations. Highly recommend!',
    seed: 'robert-garcia'
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-200 uppercase font-medium mb-2 block">Testimonials</span>
          <h2 className="text-3xl font-bold mb-4 text-white">Clients Review</h2>
          <div className="w-20 h-1 bg-white mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-4">
                  <CartoonAvatar className="w-12 h-12 rounded-full" seed={testimonial.seed} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">"{testimonial.content}"</p>
              <div className="flex items-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
