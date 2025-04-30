import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

// Create SVG abstract graphics for the solution cards
const abstractGraphics = [
  // E-Commerce
  <svg key="ecommerce" viewBox="0 0 200 200" className="w-full h-auto rounded-xl overflow-hidden">
    <rect width="200" height="200" fill="#111827" />
    <path d="M 40,40 C 60,20 140,20 160,40 C 180,60 180,140 160,160 C 140,180 60,180 40,160 C 20,140 20,60 40,40" 
          fill="#2563EB" fillOpacity="0.2" stroke="#2563EB" strokeWidth="3" />
    <circle cx="70" cy="80" r="20" fill="#F59E0B" fillOpacity="0.6" />
    <circle cx="130" cy="80" r="20" fill="#7C3AED" fillOpacity="0.6" />
    <circle cx="100" cy="130" r="20" fill="#EF4444" fillOpacity="0.6" />
  </svg>,
  
  // Finance App
  <svg key="finance" viewBox="0 0 200 200" className="w-full h-auto rounded-xl overflow-hidden">
    <rect width="200" height="200" fill="#111827" />
    <path d="M 40,160 L 70,100 L 100,130 L 130,70 L 160,40" 
          fill="none" stroke="#10B981" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="40" cy="160" r="8" fill="#10B981" />
    <circle cx="70" cy="100" r="8" fill="#10B981" />
    <circle cx="100" cy="130" r="8" fill="#10B981" />
    <circle cx="130" cy="70" r="8" fill="#10B981" />
    <circle cx="160" cy="40" r="8" fill="#10B981" />
  </svg>,
  
  // Healthcare Portal
  <svg key="healthcare" viewBox="0 0 200 200" className="w-full h-auto rounded-xl overflow-hidden">
    <rect width="200" height="200" fill="#111827" />
    <circle cx="100" cy="100" r="70" fill="#2563EB" fillOpacity="0.1" stroke="#2563EB" strokeWidth="2" />
    <path d="M 70,100 L 95,125 L 140,80" 
          fill="none" stroke="#60A5FA" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="100" cy="100" r="40" fill="none" stroke="#60A5FA" strokeWidth="2" strokeDasharray="5,5" />
  </svg>,
  
  // AI Platform
  <svg key="ai" viewBox="0 0 200 200" className="w-full h-auto rounded-xl overflow-hidden">
    <rect width="200" height="200" fill="#111827" />
    <path d="M100,40 L40,70 L40,130 L100,160 L160,130 L160,70 Z" 
          fill="#7C3AED" fillOpacity="0.2" stroke="#7C3AED" strokeWidth="2" />
    <path d="M100,40 L100,160" 
          fill="none" stroke="#7C3AED" strokeWidth="2" strokeDasharray="5,5" />
    <path d="M40,70 L160,130" 
          fill="none" stroke="#7C3AED" strokeWidth="2" strokeDasharray="5,5" />
    <path d="M40,130 L160,70" 
          fill="none" stroke="#7C3AED" strokeWidth="2" strokeDasharray="5,5" />
    <circle cx="100" cy="40" r="6" fill="#7C3AED" />
    <circle cx="40" cy="70" r="6" fill="#7C3AED" />
    <circle cx="40" cy="130" r="6" fill="#7C3AED" />
    <circle cx="100" cy="160" r="6" fill="#7C3AED" />
    <circle cx="160" cy="130" r="6" fill="#7C3AED" />
    <circle cx="160" cy="70" r="6" fill="#7C3AED" />
  </svg>,
  
  // IoT Dashboard
  <svg key="iot" viewBox="0 0 200 200" className="w-full h-auto rounded-xl overflow-hidden">
    <rect width="200" height="200" fill="#111827" />
    <rect x="50" y="50" width="40" height="40" rx="5" fill="#F59E0B" fillOpacity="0.7" />
    <rect x="110" y="50" width="40" height="40" rx="5" fill="#F59E0B" fillOpacity="0.7" />
    <rect x="50" y="110" width="40" height="40" rx="5" fill="#F59E0B" fillOpacity="0.7" />
    <rect x="110" y="110" width="40" height="40" rx="5" fill="#F59E0B" fillOpacity="0.7" />
    <line x1="70" y1="50" x2="70" y2="30" stroke="#F59E0B" strokeWidth="2" />
    <line x1="130" y1="50" x2="130" y2="30" stroke="#F59E0B" strokeWidth="2" />
    <line x1="70" y1="150" x2="70" y2="170" stroke="#F59E0B" strokeWidth="2" />
    <line x1="130" y1="150" x2="130" y2="170" stroke="#F59E0B" strokeWidth="2" />
    <circle cx="100" cy="100" r="10" fill="#F59E0B" />
    <path d="M 30,100 Q 50,70 70,70 T 100,100 T 130,70 T 170,100" 
          fill="none" stroke="#F59E0B" strokeWidth="2" />
  </svg>,
  
  // Educational Platform
  <svg key="education" viewBox="0 0 200 200" className="w-full h-auto rounded-xl overflow-hidden">
    <rect width="200" height="200" fill="#111827" />
    <path d="M 40,120 L 100,80 L 160,120 L 100,160 Z" 
          fill="#EF4444" fillOpacity="0.3" stroke="#EF4444" strokeWidth="2" />
    <path d="M 100,80 L 100,40" 
          fill="none" stroke="#EF4444" strokeWidth="2" />
    <circle cx="100" cy="40" r="10" fill="#EF4444" fillOpacity="0.7" />
    <path d="M 160,120 L 160,140" 
          fill="none" stroke="#EF4444" strokeWidth="2" />
    <rect x="155" y="140" width="10" height="20" fill="#EF4444" fillOpacity="0.7" />
  </svg>
];

const solutions = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Scalable online shopping solution with secure payment processing and inventory management.',
    graphic: abstractGraphics[0],
  },
  {
    id: 2,
    title: 'Financial App',
    description: 'Secure banking application with real-time transactions and personal finance management tools.',
    graphic: abstractGraphics[1],
  },
  {
    id: 3,
    title: 'Healthcare Portal',
    description: 'Patient management system with appointment scheduling and medical record integration.',
    graphic: abstractGraphics[2],
  },
  {
    id: 4,
    title: 'AI Research Platform',
    description: 'Advanced machine learning platform for data analysis and predictive modeling.',
    graphic: abstractGraphics[3],
  },
  {
    id: 5,
    title: 'IoT Dashboard',
    description: 'Real-time monitoring dashboard for connected devices and sensors.',
    graphic: abstractGraphics[4],
  },
  {
    id: 6,
    title: 'Educational Platform',
    description: 'Interactive learning management system with course creation and student tracking.',
    graphic: abstractGraphics[5],
  }
];

const SolutionsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedSolutions = showAll ? solutions : solutions.slice(0, 3);

  return (
    <section className="py-20 bg-nucleas-dark/80">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Software Solutions</h2>
            <div className="w-20 h-1 bg-nucleas-blue rounded"></div>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0">
            View All Projects
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {displayedSolutions.map((solution) => (
            <div 
              key={solution.id}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="mb-4 aspect-video group-hover:scale-105 transition-transform duration-500">
                {solution.graphic}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                <p className="text-gray-400 mb-4">{solution.description}</p>
                <Button variant="link" className="text-nucleas-blue p-0">View Details →</Button>
              </div>
            </div>
          ))}
        </div>

        {solutions.length > 3 && (
          <div className="text-center mt-8">
            <Button 
              variant="ghost" 
              className="text-gray-400 hover:text-white" 
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Less' : 'Show More'} 
              <ChevronDown className={`ml-2 h-5 w-5 transition-transform ${showAll ? 'rotate-180' : ''}`} />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SolutionsSection;
