import React, { Suspense } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import { Helmet } from 'react-helmet';
const BusinessSection = React.lazy(() => import('@/components/home/BusinessSection'));
const SolutionsSection = React.lazy(() => import('@/components/home/SolutionsSection'));
const StatsSection = React.lazy(() => import('@/components/home/StatsSection'));
const FaqSection = React.lazy(() => import('@/components/home/FaqSection'));

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-nucleas-dark text-white">
      <Helmet>
        <title>Nucleas IT | Custom Software Development & Cloud Solutions</title>
        <meta name="description" content="Nucleas IT offers custom software development, cloud solutions, SaaS, and AI-powered business solutions for modern enterprises." />
        <link rel="icon" href="/NucleasIT_logo.ico" type="image/x-icon" />
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <Suspense fallback={null}>
          <BusinessSection />
          <SolutionsSection />
          <StatsSection />
          <FaqSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Home; 