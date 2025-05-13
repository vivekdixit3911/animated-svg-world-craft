import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './SolutionsSection.module.css';

// Create SVG abstract graphics for the solution cards
const abstractGraphics = [
  // E-Commerce Platform - Shopping Cart
  <svg key="ecommerce" viewBox="0 0 200 200" className="w-full h-auto rounded-xl overflow-hidden">
    <defs>
      <linearGradient id="cartGradient" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
        <stop stopColor="#60A5FA"/>
        <stop offset="1" stopColor="#6366F1"/>
      </linearGradient>
      <filter id="cartShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#60A5FA" floodOpacity="0.18"/>
      </filter>
    </defs>
    <rect width="200" height="200" rx="32" fill="#10182A" />
    <g filter="url(#cartShadow)">
      <rect x="50" y="80" width="100" height="60" rx="18" fill="url(#cartGradient)"/>
      <rect x="60" y="70" width="80" height="20" rx="10" fill="#fff" fillOpacity="0.15"/>
      <circle cx="75" cy="150" r="10" fill="#fff" fillOpacity="0.7"/>
      <circle cx="125" cy="150" r="10" fill="#fff" fillOpacity="0.7"/>
    </g>
  </svg>,
  
  // Financial App - Upward Graph
  <svg key="finance" viewBox="0 0 200 200" className="w-full h-auto rounded-xl overflow-hidden">
    <defs>
      <linearGradient id="graphGradient" x1="0" y1="200" x2="200" y2="0" gradientUnits="userSpaceOnUse">
        <stop stopColor="#34D399"/>
        <stop offset="1" stopColor="#60A5FA"/>
      </linearGradient>
      <filter id="graphShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#34D399" floodOpacity="0.18"/>
      </filter>
    </defs>
    <rect width="200" height="200" rx="32" fill="#10182A" />
    <g filter="url(#graphShadow)">
      <polyline points="40,140 80,100 120,120 160,60" fill="none" stroke="url(#graphGradient)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="40" cy="140" r="8" fill="#34D399"/>
      <circle cx="80" cy="100" r="8" fill="#34D399"/>
      <circle cx="120" cy="120" r="8" fill="#34D399"/>
      <circle cx="160" cy="60" r="8" fill="#34D399"/>
    </g>
  </svg>,
  
  // Healthcare Portal - Heart
  <svg key="healthcare" viewBox="0 0 200 200" className="w-full h-auto rounded-xl overflow-hidden">
    <defs>
      <linearGradient id="heartGradient" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F472B6"/>
        <stop offset="1" stopColor="#60A5FA"/>
      </linearGradient>
      <filter id="heartShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#F472B6" floodOpacity="0.18"/>
      </filter>
    </defs>
    <rect width="200" height="200" rx="32" fill="#10182A" />
    <g filter="url(#heartShadow)">
      <path d="M100 150s-40-30-40-60a24 24 0 0 1 48 0 24 24 0 0 1 48 0c0 30-40 60-40 60z" fill="url(#heartGradient)"/>
      <circle cx="80" cy="90" r="6" fill="#fff" fillOpacity="0.7"/>
      <circle cx="120" cy="90" r="6" fill="#fff" fillOpacity="0.7"/>
    </g>
  </svg>,
  
  // AI Research Platform - Brain
  <svg key="ai" viewBox="0 0 200 200" className="w-full h-auto rounded-xl overflow-hidden">
    <defs>
      <linearGradient id="brainGradient" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A78BFA"/>
        <stop offset="1" stopColor="#60A5FA"/>
      </linearGradient>
      <filter id="brainShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#A78BFA" floodOpacity="0.18"/>
      </filter>
    </defs>
    <rect width="200" height="200" rx="32" fill="#10182A" />
    <g filter="url(#brainShadow)">
      <ellipse cx="100" cy="110" rx="50" ry="40" fill="url(#brainGradient)"/>
      <path d="M80,110 Q90,90 100,110 Q110,130 120,110" stroke="#fff" strokeWidth="3" fill="none"/>
      <circle cx="100" cy="110" r="8" fill="#fff" fillOpacity="0.7"/>
    </g>
  </svg>,
  
  // IoT Dashboard - Cloud with Nodes
  <svg key="iot" viewBox="0 0 200 200" className="w-full h-auto rounded-xl overflow-hidden">
    <defs>
      <linearGradient id="iotGradient" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
        <stop stopColor="#60A5FA"/>
        <stop offset="1" stopColor="#34D399"/>
      </linearGradient>
      <filter id="iotShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#60A5FA" floodOpacity="0.18"/>
      </filter>
    </defs>
    <rect width="200" height="200" rx="32" fill="#10182A" />
    <g filter="url(#iotShadow)">
      <ellipse cx="110" cy="120" rx="50" ry="30" fill="url(#iotGradient)"/>
      <ellipse cx="80" cy="110" rx="20" ry="12" fill="#fff" fillOpacity="0.15"/>
      <circle cx="70" cy="120" r="7" fill="#34D399"/>
      <circle cx="150" cy="120" r="7" fill="#34D399"/>
      <circle cx="110" cy="100" r="7" fill="#34D399"/>
      <line x1="70" y1="120" x2="110" y2="100" stroke="#34D399" strokeWidth="2"/>
      <line x1="150" y1="120" x2="110" y2="100" stroke="#34D399" strokeWidth="2"/>
    </g>
  </svg>,
  
  // Educational Platform - Graduation Cap
  <svg key="education" viewBox="0 0 200 200" className="w-full h-auto rounded-xl overflow-hidden">
    <defs>
      <linearGradient id="eduGradient" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FBBF24"/>
        <stop offset="1" stopColor="#60A5FA"/>
      </linearGradient>
      <filter id="eduShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#FBBF24" floodOpacity="0.18"/>
      </filter>
    </defs>
    <rect width="200" height="200" rx="32" fill="#10182A" />
    <g filter="url(#eduShadow)">
      <polygon points="100,70 160,100 100,130 40,100" fill="url(#eduGradient)"/>
      <rect x="85" y="130" width="30" height="12" rx="4" fill="#fff" fillOpacity="0.15"/>
      <circle cx="100" cy="100" r="7" fill="#FBBF24"/>
    </g>
  </svg>
];

const solutions = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Scalable online shopping solution with secure payment processing, inventory management, and e-commerce platform development.',
    graphic: abstractGraphics[0],
  },
  {
    id: 2,
    title: 'Financial App',
    description: 'Fintech software development for secure banking, real-time transactions, and personal finance management tools.',
    graphic: abstractGraphics[1],
  },
  {
    id: 3,
    title: 'Healthcare Portal',
    description: 'Healthcare software solutions for patient management, appointment scheduling, and medical record integration.',
    graphic: abstractGraphics[2],
  },
  {
    id: 4,
    title: 'AI Research Platform',
    description: 'Advanced machine learning solutions and AI-powered business analytics for data-driven decision making.',
    graphic: abstractGraphics[3],
  },
  {
    id: 5,
    title: 'IoT Dashboard',
    description: 'IoT application development for real-time monitoring, connected devices, and business automation tools.',
    graphic: abstractGraphics[4],
  },
  {
    id: 6,
    title: 'Educational Platform',
    description: 'Interactive learning management system for digital product design, student tracking, and scalable cloud infrastructure.',
    graphic: abstractGraphics[5],
  }
];

const SolutionsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedSolutions = showAll ? solutions : solutions.slice(0, 3);

  return (
    <section className={styles.solutionsSection}>
      <div className="container mx-auto px-4">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Software Solutions</h2>
          <div className={styles.divider}></div>
          <div className={styles.sectionSubtitle}>Explore our modular, scalable, and innovative software solutions designed for modern businesses, including AI-powered business solutions, fintech software development, healthcare software solutions, IoT application development, and more.</div>
        </div>
        <div className={styles.grid}>
          {displayedSolutions.map((solution) => (
            <div 
              key={solution.id}
              className={styles.card}
            >
              <div className={styles.cardImage}>
                {solution.graphic}
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{solution.title}</h3>
                <p className={styles.cardDesc}>{solution.description}</p>
                <Link to="/portfolio" className={styles.cardButton}>
                  <Button variant="link" className="text-nucleas-blue p-0">View Details →</Button>
                </Link>
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
