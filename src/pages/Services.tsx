import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { 
  Megaphone, 
  Code2, 
  MessageSquare, 
  Mic, 
  ArrowRight,
  BarChart3,
  Globe,
  Smartphone,
  Bot,
  MessageCircle,
  Palette,
  Layout,
  SmartphoneIcon,
  Webhook,
  Layers,
  Wrench
} from 'lucide-react';
import { Helmet } from 'react-helmet';

// Gradients for card backgrounds
const cardGradients = [
  'linear-gradient(135deg, #60a5fa 0%, #38bdf8 100%)', // Advertising
  'linear-gradient(135deg, #f472b6 0%, #c084fc 100%)', // Design
  'linear-gradient(135deg, #a78bfa 0%, #818cf8 100%)', // Mobile
  'linear-gradient(135deg, #6ee7b7 0%, #3b82f6 100%)', // Web
  'linear-gradient(135deg, #67e8f9 0%, #06b6d4 100%)', // Bot
  'linear-gradient(135deg, #fbbf24 0%, #f59e42 100%)', // ONDC
];

const services = [
  {
    category: "Advertising Services",
    icon: <Megaphone className="w-8 h-8 md:w-10 md:h-10 text-white/80" />,
    bg: cardGradients[0],
    headline: "Boost Your Brand",
    offer: "Digital Marketing & Ads",
    description: "Maximize your reach with targeted campaigns and data-driven strategies.",
    features: [
      "Digital Marketing",
      "Social Media Ads",
      "Mobile Advertising",
      "Brand Awareness Campaigns",
      "Performance Analytics",
      "Influencer Marketing"
    ]
  },
  {
    category: "Design Services",
    icon: <Palette className="w-8 h-8 md:w-10 md:h-10 text-white/80" />,
    bg: cardGradients[1],
    headline: "Stunning Visuals",
    offer: "UI/UX & Website Design",
    description: "Captivate your audience with modern, user-centered design.",
    features: [
      "UI/UX Design",
      "Website Design",
      "Brand Identity",
      "Design Systems",
      "Prototyping & Wireframing",
      "Logo & Graphic Design"
    ]
  },
  {
    category: "Mobile Applications",
    icon: <SmartphoneIcon className="w-8 h-8 md:w-10 md:h-10 text-white/80" />,
    bg: cardGradients[2],
    headline: "Go Mobile First",
    offer: "iOS & Android Apps",
    description: "Native and cross-platform mobile solutions for every business.",
    features: [
      "iOS Development",
      "Android Development",
      "Cross-Platform",
      "App Store Optimization",
      "Mobile UI/UX",
      "Push Notifications"
    ]
  },
  {
    category: "Web Development",
    icon: <Code2 className="w-8 h-8 md:w-10 md:h-10 text-white/80" />,
    bg: cardGradients[3],
    headline: "Modern Web Apps",
    offer: "Custom Websites & Platforms",
    description: "Robust, scalable, and beautiful web solutions for your needs.",
    features: [
      "Custom Websites",
      "E-commerce",
      "Web Applications",
      "API Integration",
      "Content Management Systems",
      "Performance Optimization"
    ]
  },
  {
    category: "Bot Services",
    icon: <Bot className="w-8 h-8 md:w-10 md:h-10 text-white/80" />,
    bg: cardGradients[4],
    headline: "Automate & Engage",
    offer: "Chat & Voice Bots",
    description: "AI-powered bots for customer support and automation.",
    features: [
      "Chat Bots",
      "Voice Bots",
      "Virtual Assistants",
      "WhatsApp/Telegram Bots",
      "Bot Analytics",
      "Custom Integrations"
    ]
  },
  {
    category: "ONDC Onboarding & Maintenance",
    icon: <Wrench className="w-8 h-8 md:w-10 md:h-10 text-white/80" />,
    bg: cardGradients[5],
    headline: "ONDC Experts",
    offer: "Onboarding & Support",
    description: "Seamless onboarding and ongoing maintenance for ONDC sellers and partners.",
    features: [
      "Seller Onboarding",
      "Catalog Management",
      "Ongoing Support",
      "Order Management",
      "Compliance Assistance",
      "Training & Documentation"
    ]
  }
];

// Notched (ticket/coupon) style using CSS clip-path
const notchStyle = {
  clipPath:
    'polygon(0% 10px, 10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px))',
};

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services | Nucleas IT - Web, Mobile, SaaS, Cloud, AI</title>
        <meta name="description" content="Explore our web development, mobile app, SaaS, cloud, and AI services designed to drive business growth." />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-nucleas-dark text-white">
        <Navbar />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mx-auto"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Our Services
                </h1>
                <p className="text-gray-300 text-lg mb-8">
                  Discover our comprehensive range of digital solutions designed to elevate your business
                </p>
              </motion.div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-20">
            <div className="container mx-auto px-2 sm:px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={service.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative rounded-3xl shadow-2xl overflow-hidden flex flex-col justify-between min-h-[320px] md:min-h-[400px] p-2 md:p-4"
                    style={{ background: service.bg, ...notchStyle }}
                  >
                    <div className="absolute inset-0 opacity-10" />
                    <div className="relative z-10 flex flex-col h-full justify-between p-6 md:p-10">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          {service.icon}
                          <span className="font-semibold text-lg md:text-xl text-white/90">{service.category}</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-1 text-white leading-tight">{service.headline}</h2>
                        <div className="text-2xl md:text-3xl font-bold mb-2 text-white/80">{service.offer}</div>
                        <p className="text-white/80 mb-4 text-lg md:text-xl">{service.description}</p>
                        <ul className="mb-4 space-y-2">
                          {service.features.map((f) => (
                            <li key={f} className="text-white/90 text-base md:text-lg flex items-center gap-2">
                              <span className="inline-block w-2 h-2 rounded-full bg-white/80" /> {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button
                        asChild
                        className="w-full bg-white/90 text-nucleas-dark font-bold text-lg md:text-xl py-4 md:py-5 mt-2"
                      >
                        <Link to="/contact" className="flex items-center justify-center gap-2">
                          Get Started <ArrowRight className="w-5 h-5" />
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
            <div className="container mx-auto px-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl mx-auto"
              >
                <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
                <p className="text-gray-300 mb-8">
                  Let's discuss how our services can help you achieve your goals
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Link to="/contact">Contact Us Today</Link>
                </Button>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Services;