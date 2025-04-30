
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
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
  
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: "hello@gratech.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 5pm"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      details: "1234 Innovation Street, Tech Valley, CA 90210",
      description: "Get directions on the map"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Working Hours",
      details: "Monday - Friday: 9:00 AM - 5:00 PM",
      description: "We're closed on weekends"
    }
  ];

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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gratech-dark relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
              <p className="text-xl text-gray-300 mb-8">
                Have a question or want to work together? Reach out to us and we'll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-12 bg-gratech-dark">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-900/50 text-blue-400 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300 mb-1">{item.details}</p>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
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
                        placeholder="+1 (555) 123-4567"
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
                    className="w-full blue-gradient"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
              
              {/* Map and Office Info */}
              <div className="flex flex-col space-y-8">
                <div className="rounded-xl overflow-hidden h-80 bg-white/5">
                  {/* Map SVG Placeholder */}
                  <svg width="100%" height="100%" viewBox="0 0 800 600" preserveAspectRatio="none">
                    <rect width="800" height="600" fill="#1E293B" />
                    <path d="M0,0 L800,600" stroke="#334155" strokeWidth="1" />
                    <path d="M800,0 L0,600" stroke="#334155" strokeWidth="1" />
                    <circle cx="400" cy="300" r="10" fill="#3B82F6" />
                    <circle cx="400" cy="300" r="40" fill="#3B82F6" fillOpacity="0.2" />
                    
                    {/* Roads */}
                    <path d="M0,200 L800,200" stroke="#475569" strokeWidth="8" />
                    <path d="M0,400 L800,400" stroke="#475569" strokeWidth="8" />
                    <path d="M200,0 L200,600" stroke="#475569" strokeWidth="8" />
                    <path d="M600,0 L600,600" stroke="#475569" strokeWidth="8" />
                    
                    {/* Buildings */}
                    <rect x="220" y="220" width="60" height="40" fill="#64748B" />
                    <rect x="300" y="250" width="40" height="30" fill="#64748B" />
                    <rect x="350" y="270" width="100" height="80" fill="#3B82F6" />
                    <rect x="500" y="230" width="70" height="50" fill="#64748B" />
                    <rect x="220" y="450" width="80" height="70" fill="#64748B" />
                    <rect x="330" y="420" width="50" height="60" fill="#64748B" />
                    <rect x="450" y="440" width="100" height="40" fill="#64748B" />
                    
                    {/* Location Pin Label */}
                    <rect x="370" y="250" width="60" height="20" rx="10" fill="#3B82F6" />
                    <text x="400" y="265" textAnchor="middle" fill="white" fontSize="10">Gratech</text>
                  </svg>
                </div>
                
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Our Main Office</h3>
                  <p className="text-gray-300 mb-6">
                    Located in the heart of Silicon Valley, our headquarters is home to our core engineering, design, and business teams.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-blue-500 mr-3" />
                      <span>1234 Innovation Street, Tech Valley, CA 90210</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-blue-500 mr-3" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-blue-500 mr-3" />
                      <span>hello@gratech.com</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-blue-500/20">
                  <h3 className="text-xl font-semibold mb-2">Working on a big project?</h3>
                  <p className="mb-4 text-gray-300">
                    Schedule a consultation with one of our experts to discuss your specific needs.
                  </p>
                  <Button variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20">
                    Book a Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-gratech-dark/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Find quick answers to common questions about working with us.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-300 mb-4">
                  Don't see your question here? Feel free to reach out to us directly.
                </p>
                <Button variant="outline" className="border-white/20 hover:bg-white/5">
                  View All FAQs
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
