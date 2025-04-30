
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const features = [
  "Custom Software Solutions",
  "Advanced Data Analytics",
  "Tech Consulting Services",
  "Digital Transformation",
  "Cloud Migration & Optimization"
];

const BusinessSection = () => {
  return (
    <section className="py-20 bg-gratech-dark overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Decorative Image */}
          <div className="relative rounded-3xl overflow-hidden order-2 md:order-1">
            <svg 
              viewBox="0 0 500 400" 
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
            >
              {/* Background shapes */}
              <circle cx="150" cy="200" r="150" fill="url(#circle-gradient)" />
              <circle cx="350" cy="150" r="120" fill="url(#circle-gradient2)" />
              
              {/* 3D-looking device */}
              <rect x="200" y="120" width="240" height="160" rx="10" fill="#1E293B" />
              <rect x="210" y="130" width="220" height="140" rx="5" fill="#0F172A" />
              <rect x="220" y="140" width="200" height="120" rx="2" fill="#000" />
              <circle cx="320" cy="270" r="5" fill="#64748B" />
              
              {/* VR headset */}
              <path d="M260 200 C260 170 380 170 380 200 L380 220 C380 250 260 250 260 220 Z" fill="#2563EB" opacity="0.8" />
              <rect x="270" y="185" width="100" height="50" rx="10" fill="#0F172A" />
              <rect x="290" y="195" width="60" height="30" rx="5" fill="#000" />
              <path d="M290 210 Q320 220 350 210" stroke="#2563EB" strokeWidth="2" />
              
              <defs>
                <linearGradient id="circle-gradient" x1="0" y1="0" x2="300" y2="300" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="circle-gradient2" x1="500" y1="0" x2="200" y2="300" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          {/* Text Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6">
              Empowering Businesses with Advanced <span className="text-gratech-blue">Technology</span>
            </h2>
            <p className="text-gray-300 mb-8">
              We help organizations leverage the latest technologies to streamline operations,
              enhance customer experiences, and drive business growth through innovative digital solutions.
            </p>
            
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="bg-gratech-blue/20 p-1 rounded-full">
                    <Check className="h-4 w-4 text-gratech-blue" />
                  </span>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button className="blue-gradient">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
