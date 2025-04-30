import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import TechStack from '@/components/home/TechStack';
import ServicesSection from '@/components/home/ServicesSection';
import BusinessSection from '@/components/home/BusinessSection';
import SolutionsSection from '@/components/home/SolutionsSection';
import TeamSection from '@/components/home/TeamSection';
import StatsSection from '@/components/home/StatsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FaqSection from '@/components/home/FaqSection';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-nucleas-dark text-white">
      <Navbar />
      <main>
        <HeroSection />
        <TechStack />
        <ServicesSection />
        <BusinessSection />
        <SolutionsSection />
        <TeamSection />
        <StatsSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home; 