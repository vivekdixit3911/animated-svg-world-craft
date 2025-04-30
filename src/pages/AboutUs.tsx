import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import CartoonAvatar from "@/components/icons/CartoonAvatar";

const AboutUs = () => {
  // Company history milestones
  const milestones = [
    {
      year: 2018,
      title: "Founded",
      description: "Nucleas IT was established by a group of tech enthusiasts with a vision to transform digital experiences."
    },
    {
      year: 2020,
      title: "Expansion",
      description: "Growing our team to 50+ employees and opening our second office in Europe."
    },
    {
      year: 2022,
      title: "Innovation Hub",
      description: "Launched our innovation lab focused on emerging technologies like AI and blockchain."
    },
    {
      year: 2024,
      title: "Global Reach",
      description: "Expanded operations to serve clients across 20+ countries with innovative digital solutions."
    }
  ];

  // Company values
  const values = [
    {
      title: "Innovation",
      description: "We embrace new technologies and creative thinking to solve complex challenges.",
      icon: (
        <svg className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      )
    },
    {
      title: "Excellence",
      description: "We strive for the highest quality in everything we deliver, exceeding expectations.",
      icon: (
        <svg className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2 L15.09 8.26 L22 9.27 L17 14.14 L18.18 21.02 L12 17.77 L5.82 21.02 L7 14.14 L2 9.27 L8.91 8.26 L12 2" />
        </svg>
      )
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork, both internally and with our clients.",
      icon: (
        <svg className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="9" cy="7" r="4" />
          <circle cx="19" cy="7" r="4" />
          <circle cx="14" cy="17" r="4" />
          <line x1="9" y1="11" x2="11" y2="15" />
          <line x1="19" y1="11" x2="17" y2="15" />
        </svg>
      )
    },
    {
      title: "Client Focus",
      description: "We put our clients' needs at the center of everything we do.",
      icon: (
        <svg className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2 L2 22 L22 22 Z" />
          <circle cx="12" cy="13" r="3" />
        </svg>
      )
    }
  ];

  // Leadership team
  const leadership = [
    {
      name: "Michael Johnson",
      role: "CEO & Founder",
      bio: "With over 20 years of experience in technology leadership, Michael guides Nucleas IT's strategic vision.",
      seed: "michael-johnson"
    },
    {
      name: "Sarah Chen",
      role: "Chief Technology Officer",
      bio: "Sarah leads our technical innovation with expertise in AI, cloud architecture, and software engineering.",
      seed: "sarah-chen"
    },
    {
      name: "Daniel Patel",
      role: "Chief Operating Officer",
      bio: "Daniel ensures operational excellence across all projects and internal processes.",
      seed: "daniel-patel"
    },
    {
      name: "Jessica Williams",
      role: "Chief Creative Officer",
      bio: "Jessica brings creative vision to all our products, focusing on exceptional user experiences.",
      seed: "jessica-williams"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-nucleas-dark relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Nucleas IT</h1>
              <p className="text-xl text-gray-300 mb-8">
                Founded in 2018, Nucleas IT has evolved from a small startup to a leading digital innovation company. 
                We've helped hundreds of businesses transform their digital presence and create amazing experiences for their users.
              </p>
              <div className="flex justify-center space-x-4">
                <Button className="blue-gradient">Our Mission</Button>
                <Button variant="outline" className="border-white/20 hover:bg-white/5">Join Our Team</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-300">
                Nucleas IT was established by a group of tech enthusiasts with a vision to transform digital experiences. 
                We've helped hundreds of businesses transform their digital presence and create amazing experiences for their users.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-purple-600"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="relative">
                    <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      <div className="md:w-1/2"></div>
                      <div className="hidden md:flex justify-center items-center">
                        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center z-10">
                          <span className="text-white font-bold">{milestone.year}</span>
                        </div>
                      </div>
                      <div className="md:w-1/2 bg-white/5 p-6 rounded-lg border border-white/10 md:mt-0 mt-4">
                        <div className="md:hidden mb-2">
                          <span className="text-blue-600 font-bold">{milestone.year}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                        <p className="text-gray-400">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-nucleas-dark/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                These core principles guide our work and define our culture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Meet the visionaries who drive our company forward.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.map((leader) => (
                <div key={leader.name} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                  <div className="p-6 pb-4">
                    <div className="w-32 h-32 mx-auto mb-4 bg-blue-900/20 rounded-full overflow-hidden">
                      <CartoonAvatar
                        className="w-full h-full"
                        seed={leader.seed}
                        role={leader.role}
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-1 text-center">{leader.name}</h3>
                    <p className="text-blue-400 text-sm mb-3 text-center">{leader.role}</p>
                    <p className="text-gray-400 text-sm">{leader.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-600/20 border-y border-blue-500/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for talented individuals to join our team. Let's build the future of technology together.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="blue-gradient">View Career Opportunities</Button>
                <Button variant="outline" className="border-white/20 hover:bg-white/5">Contact Us</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
