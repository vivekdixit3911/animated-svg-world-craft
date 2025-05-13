import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import CartoonAvatar from "@/components/icons/CartoonAvatar";
import { motion } from 'framer-motion';
import { User, MapPin, Award, TrendingUp, Brain, Users } from 'lucide-react';
import { Helmet } from 'react-helmet';

const founders = [
  {
    name: 'Vivek Kr. Dixit',
    role: 'Co-Founder & AI/ML Expert',
    bio: '6+ years in corporate, 5+ years in startups, AI/ML specialist, passionate about building scalable tech.',
    avatar: 'https://ui-avatars.com/api/?name=Vivek+Dixit&background=0D8ABC&color=fff',
  },
  {
    name: 'Priya Majhwar',
    role: 'Co-Founder & AI/ML Expert',
    bio: '6+ years in corporate, 5+ years in startups, AI/ML leader, driving innovation and growth.',
    avatar: 'https://ui-avatars.com/api/?name=Priya+Majhwar&background=F472B6&color=fff',
  },
];

const timeline = [
  {
    year: '2017',
    title: 'Corporate Experience',
    desc: 'Both founders excelled in top corporate roles, building expertise in AI/ML and digital transformation.',
    icon: <Award className="w-7 h-7 text-blue-400" />,
  },
  {
    year: '2018',
    title: 'Startup Journey',
    desc: 'Ventured into the startup world, solving real-world problems with innovative tech.',
    icon: <TrendingUp className="w-7 h-7 text-purple-400" />,
  },
  {
    year: '2019',
    title: 'Founded in India',
    desc: 'Company established in India, with a vision to empower businesses using AI/ML.',
    icon: <MapPin className="w-7 h-7 text-pink-400" />,
  },
  {
    year: '2020',
    title: 'Office in Noida 62',
    desc: "Set up a modern office in Noida Sector 62, the heart of India's tech innovation.",
    icon: <MapPin className="w-7 h-7 text-green-400" />,
  },
  {
    year: '2023',
    title: '6 Years of Success',
    desc: 'Successfully running and growing the business, delivering value to clients worldwide.',
    icon: <TrendingUp className="w-7 h-7 text-yellow-400" />,
  },
];

const values = [
  {
    icon: <Brain className="w-8 h-8 text-blue-400" />, title: 'AI/ML Expertise', desc: 'Deep knowledge in artificial intelligence and machine learning.'
  },
  {
    icon: <Users className="w-8 h-8 text-purple-400" />, title: 'Client Focus', desc: 'We put our clients first and build lasting partnerships.'
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-green-400" />, title: 'Growth & Innovation', desc: 'Constantly evolving and innovating for business success.'
  },
];

const quickStats = [
  { label: 'Years in Business', value: '6+' },
  { label: 'AI/ML Projects', value: '40+' },
  { label: 'Clients Served', value: '30+' },
  { label: 'AI Models Deployed', value: '20+' },
];

const mission = {
  icon: <Brain className="w-10 h-10 text-blue-400" />,
  text: 'Empowering India and the world with innovative AI/ML solutions, one business at a time.'
};

const AboutUs = () => (
  <>
    <Helmet>
      <title>About Us | Nucleas IT - Digital Transformation & AI Solutions</title>
      <meta name="description" content="Learn about Nucleas IT, our mission, team, and expertise in digital transformation, AI, and scalable software solutions." />
    </Helmet>
    <div className="min-h-screen flex flex-col bg-nucleas-dark text-white">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900/40 to-purple-900/30 text-center relative overflow-hidden">
          {/* Decorative SVG blob */}
          <div className="absolute -top-24 -left-24 w-96 h-96 opacity-20 pointer-events-none z-0">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path fill="#6366f1" d="M44.8,-67.2C58.2,-59.2,68.7,-48.2,74.2,-34.9C79.7,-21.6,80.2,-6,75.7,7.7C71.2,21.4,61.7,33.2,51.1,44.2C40.5,55.2,28.8,65.4,14.7,70.2C0.6,75,-15.8,74.4,-29.2,68.2C-42.6,62,-53,50.2,-60.2,37.1C-67.4,24,-71.4,9.6,-70.2,-4.2C-69,-18,-62.6,-31.1,-53.2,-41.2C-43.8,-51.3,-31.4,-58.4,-18.1,-65.2C-4.8,-72,9.4,-78.5,22.7,-77.2C36,-75.9,48.2,-66.2,44.8,-67.2Z" transform="translate(100 100)" /></svg>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Our Story</h1>
            <p className="text-lg md:text-xl mb-6 text-white/80 max-w-2xl mx-auto">Nucleas IT is a custom software development company, cloud solutions provider, and SaaS application developer. We empower businesses with AI-powered business solutions, digital transformation services, secure web and mobile app development, and scalable cloud infrastructure.</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white/80 text-base md:text-lg">
              <MapPin className="w-6 h-6 text-blue-400" /> Noida Sector 62, India
            </div>
          </motion.div>
        </section>
        {/* Mission Section */}
        <section className="py-10 bg-nucleas-dark/80 flex flex-col items-center">
          <div className="flex flex-col items-center bg-white/5 rounded-2xl shadow-lg px-8 py-6 max-w-2xl mx-auto">
            {mission.icon}
            <div className="text-xl md:text-2xl font-semibold mt-3 text-center text-white/90">{mission.text}</div>
          </div>
        </section>
        {/* Quick Stats Section */}
        <section className="py-8 bg-gradient-to-r from-blue-900/30 to-purple-900/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
              {quickStats.map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white/5 rounded-xl shadow p-6 flex flex-col items-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">{stat.value}</div>
                  <div className="text-white/80 text-base md:text-lg text-center">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Timeline Section - Modern Ladder */}
        <section className="py-16 md:py-24 bg-nucleas-dark/90 relative overflow-visible">
          {/* Decorative SVG right */}
          <div className="absolute -bottom-24 -right-24 w-96 h-96 opacity-20 pointer-events-none z-0">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path fill="#f472b6" d="M44.8,-67.2C58.2,-59.2,68.7,-48.2,74.2,-34.9C79.7,-21.6,80.2,-6,75.7,7.7C71.2,21.4,61.7,33.2,51.1,44.2C40.5,55.2,28.8,65.4,14.7,70.2C0.6,75,-15.8,74.4,-29.2,68.2C-42.6,62,-53,50.2,-60.2,37.1C-67.4,24,-71.4,9.6,-70.2,-4.2C-69,-18,-62.6,-31.1,-53.2,-41.2C-43.8,-51.3,-31.4,-58.4,-18.1,-65.2C-4.8,-72,9.4,-78.5,22.7,-77.2C36,-75.9,48.2,-66.2,44.8,-67.2Z" transform="translate(100 100)" /></svg>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Our Journey</h2>
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-2xl">
                {/* Vertical ladder line */}
                <div className="absolute left-6 md:left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full z-0" style={{ minHeight: timeline.length * 120 }} />
                <div className="space-y-12">
                  {timeline.map((item, idx) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className={`relative flex items-center gap-6 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} group`}
                    >
                      {/* Step icon */}
                      <div className="z-10 flex flex-col items-center">
                        <div className="bg-white/10 border-2 border-blue-400 rounded-full p-3 shadow-lg mb-2 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                        {idx !== timeline.length - 1 && <div className="h-24 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full" />}
                      </div>
                      {/* Card */}
                      <div className="bg-white/10 rounded-2xl shadow-xl p-6 md:p-8 w-full max-w-md">
                        <div className="font-bold text-lg md:text-xl text-blue-300">{item.year}</div>
                        <div className="font-semibold text-white text-lg mb-1">{item.title}</div>
                        <div className="text-white/80 text-base md:text-lg">{item.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Founders Section */}
        <section className="py-16 bg-gradient-to-br from-purple-900/20 to-blue-900/10">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Meet the Founders</h2>
            <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
              {founders.map((f, i) => (
                <motion.div key={f.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.2 }} className="bg-white/5 rounded-2xl shadow-lg p-8 flex flex-col items-center w-full md:w-1/2 max-w-md">
                  <img src={f.avatar} alt={f.name} className="w-24 h-24 rounded-full mb-4 border-4 border-blue-400 shadow" />
                  <div className="font-bold text-xl mb-1 text-white">{f.name}</div>
                  <div className="text-blue-400 font-semibold mb-2">{f.role}</div>
                  <div className="text-white/80 text-base text-center mb-2">{f.bio}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Values Section */}
        <section className="py-16 bg-nucleas-dark/90">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((v, i) => (
                <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white/5 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
                  {v.icon}
                  <div className="font-bold text-lg mt-4 mb-2 text-white">{v.title}</div>
                  <div className="text-white/80 text-base">{v.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  </>
);

export default AboutUs;
