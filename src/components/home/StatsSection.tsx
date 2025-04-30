import { AnimatedBlob } from '../icons/TechIcons';

const stats = [
  {
    id: 1,
    value: '10k+',
    label: 'Users Worldwide'
  },
  {
    id: 2,
    value: '22k+',
    label: 'Projects Completed'
  },
  {
    id: 3,
    value: '12+',
    label: 'Years Experience'
  },
  {
    id: 4,
    value: '45+',
    label: 'Tech Experts'
  }
];

const StatsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20"></div>
        
        {/* Animated blob */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96">
          <AnimatedBlob className="w-full h-full" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose Nucleas IT</h2>
          <div className="w-20 h-1 bg-nucleas-blue mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div 
              key={stat.id}
              className="text-center p-6 backdrop-blur-sm bg-white/5 border border-white/20 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-nucleas-blue mb-2">{stat.value}</h3>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
