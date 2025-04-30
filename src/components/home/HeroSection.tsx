
import { Button } from '@/components/ui/button';
import { AnimatedBlob, AnimatedWaves, HeroIconGrid } from '../icons/TechIcons';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-32">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 w-full h-1/2">
          <AnimatedWaves className="w-full h-full" />
        </div>
        <div className="absolute top-16 right-16 w-56 h-56 opacity-30 hidden md:block">
          <AnimatedBlob className="w-full h-full" />
        </div>
        <div className="absolute bottom-16 left-16 w-40 h-40 opacity-20 hidden md:block">
          <AnimatedBlob className="w-full h-full" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Advancing <span className="text-gratech-blue">Software</span> and Digital <span className="text-gratech-blue">Innovation</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              We build cutting-edge digital solutions that transform businesses 
              and create exceptional user experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-gratech-blue hover:bg-gratech-blue/90 text-white px-8 py-6">
                Get Started
              </Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/5 text-white px-8 py-6">
                Our Services
              </Button>
            </div>
          </div>

          {/* Technology Icons Grid */}
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <HeroIconGrid className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
