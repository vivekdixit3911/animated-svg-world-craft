import React, { FormEvent, ChangeEvent } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock, Instagram, Linkedin, Facebook } from "lucide-react";
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const contactInfo = [
  {
    icon: <Phone className="w-7 h-7 text-blue-400" />,
    label: 'Phone',
    value: '9129999362, 9044632203',
    href: 'tel:9129999362',
  },
  {
    icon: <Mail className="w-7 h-7 text-purple-400" />,
    label: 'Email',
    value: 'nucleasitsolutions@gmail.com',
    href: 'mailto:nucleasitsolutions@gmail.com',
  },
  {
    icon: <MapPin className="w-7 h-7 text-pink-400" />,
    label: 'Address',
    value: 'Noida Sector 62, India',
    href: 'https://goo.gl/maps/4w6vQw6vQw6vQw6v8',
  },
];

const socialLinks = [
  {
    icon: <Instagram className="w-7 h-7" />,
    label: 'Instagram',
    href: 'https://www.instagram.com/nucleasitsolutions/',
    color: 'bg-gradient-to-tr from-pink-500 to-yellow-400',
  },
  {
    icon: <Linkedin className="w-7 h-7" />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nucleas-it-solutions-solutions-353125364/',
    color: 'bg-gradient-to-tr from-blue-500 to-blue-300',
  },
  {
    icon: <Facebook className="w-7 h-7" />,
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61575910441814',
    color: 'bg-gradient-to-tr from-blue-700 to-blue-400',
  },
  {
    icon: <FaWhatsapp className="w-7 h-7" />,
    label: 'WhatsApp',
    href: 'https://wa.me/919129999362?text=Hi%2C%20there%20is%20a%20query',
    color: 'bg-gradient-to-tr from-green-500 to-green-400',
  },
];

const Contact = () => {
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Your message has been sent! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  // FAQ items for the contact page
  const faqs = [
    {
      question: "How quickly can you start working on my project?",
      answer: "We typically begin new projects within 1-2 weeks of signing the contract. For urgent requirements, we can sometimes accommodate faster timelines."
    },
    {
      question: "What information do you need to provide a project estimate?",
      answer: "To provide an accurate estimate, we need to understand your project goals, technical requirements, desired features, timeline expectations, and budget range."
    },
    {
      question: "Do you offer ongoing maintenance and support?",
      answer: "Yes, we offer various maintenance and support plans to ensure your digital products remain up-to-date, secure, and performing optimally."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | Nucleas IT - Get in Touch</title>
        <meta name="description" content="Contact Nucleas IT for software development, cloud solutions, and digital transformation services." />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-nucleas-dark text-white">
        <Navbar />
        <main className="flex-1 relative overflow-hidden">
          {/* Futuristic background SVGs with animation */}
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] opacity-30 pointer-events-none z-0 animate-float">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path fill="#6366f1" d="M44.8,-67.2C58.2,-59.2,68.7,-48.2,74.2,-34.9C79.7,-21.6,80.2,-6,75.7,7.7C71.2,21.4,61.7,33.2,51.1,44.2C40.5,55.2,28.8,65.4,14.7,70.2C0.6,75,-15.8,74.4,-29.2,68.2C-42.6,62,-53,50.2,-60.2,37.1C-67.4,24,-71.4,9.6,-70.2,-4.2C-69,-18,-62.6,-31.1,-53.2,-41.2C-43.8,-51.3,-31.4,-58.4,-18.1,-65.2C-4.8,-72,9.4,-78.5,22.7,-77.2C36,-75.9,48.2,-66.2,44.8,-67.2Z" transform="translate(100 100)" /></svg>
          </div>
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] opacity-20 pointer-events-none z-0 animate-float-reverse">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path fill="#f472b6" d="M44.8,-67.2C58.2,-59.2,68.7,-48.2,74.2,-34.9C79.7,-21.6,80.2,-6,75.7,7.7C71.2,21.4,61.7,33.2,51.1,44.2C40.5,55.2,28.8,65.4,14.7,70.2C0.6,75,-15.8,74.4,-29.2,68.2C-42.6,62,-53,50.2,-60.2,37.1C-67.4,24,-71.4,9.6,-70.2,-4.2C-69,-18,-62.6,-31.1,-53.2,-41.2C-43.8,-51.3,-31.4,-58.4,-18.1,-65.2C-4.8,-72,9.4,-78.5,22.7,-77.2C36,-75.9,48.2,-66.2,44.8,-67.2Z" transform="translate(100 100)" /></svg>
          </div>
          {/* Hero Section */}
          <section className="py-20 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Contact Us</h1>
              <p className="text-lg md:text-xl mb-6 text-white/80 max-w-2xl mx-auto">Let's connect and build the future together. Reach out to us for collaborations, queries, or just to say hi!</p>
            </motion.div>
          </section>
          {/* Contact Info Cards */}
          <section className="py-8">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.label === 'Address' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white/10 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center backdrop-blur-md hover:bg-white/20 transition-all duration-300 border border-white/10"
                >
                  <div className="mb-4">{info.icon}</div>
                  <div className="font-bold text-lg mb-1 text-white/90">{info.label}</div>
                  <div className="text-white/80 text-base md:text-lg break-words">{info.value}</div>
                </motion.a>
              ))}
            </div>
          </section>
          {/* Social Links */}
          <section className="py-8">
            <div className="container mx-auto px-4 flex flex-col items-center">
              <div className="text-xl font-semibold mb-4 text-white/80">Connect with us</div>
              <div className="flex gap-6">
                {socialLinks.map((s, i) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`rounded-full p-4 shadow-lg hover:scale-110 transition-transform duration-300 ${s.color}`}
                    title={s.label}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </section>
          {/* Contact Form Section */}
          <section className="py-12 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12 w-full max-w-2xl border border-white/10"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white/90">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="bg-white/10 border-white/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="bg-white/10 border-white/20"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number (Optional)</label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 9129999362"
                      className="bg-white/10 border-white/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      required
                      className="bg-white/10 border-white/20"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or question..."
                    rows={6}
                    required
                    className="bg-white/10 border-white/20"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg font-bold py-3 mt-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </motion.div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
