import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'What services does Nucleas IT offer?',
    answer: 'Nucleas IT offers a comprehensive range of software development services including web development, mobile app development, UI/UX design, cloud services, digital transformation consulting, and custom software solutions.'
  },
  {
    id: 2,
    question: 'How long does it typically take to develop a custom software solution?',
    answer: 'The timeline varies based on the complexity and scope of the project. Simple applications may take 2-3 months, while complex enterprise solutions might require 6-12 months. We provide detailed timelines during the project planning phase.'
  },
  {
    id: 3,
    question: 'Do you provide ongoing maintenance and support?',
    answer: 'Yes, we offer comprehensive maintenance and support packages to ensure your software remains secure, up-to-date, and optimally performing. Our support team is available to address any issues that may arise post-deployment.'
  },
];

const FaqSection = () => {
  const [openId, setOpenId] = useState<number | null>(1); // First FAQ is open by default

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">How can we help you?</h2>
            <p className="text-gray-600 mb-8">
              Find answers to commonly asked questions about our services and processes.
              If you can't find what you're looking for, feel free to contact us directly.
            </p>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <div 
                  key={faq.id}
                  className="border border-gray-200 rounded-lg overflow-hidden bg-white"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown 
                      className={`transition-transform duration-200 ${openId === faq.id ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      openId === faq.id ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="p-4 pt-0 text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Have Other Questions?</h3>
            <div className="bg-blue-600 rounded-lg p-6 text-white">
              <p className="mb-4">
                Our team is ready to answer any other questions you might have about our services.
              </p>
              <form>
                <div className="mb-4">
                  <label className="block mb-2 text-sm">Your Question</label>
                  <textarea 
                    className="w-full p-3 border border-blue-400 rounded-lg bg-blue-700 text-white placeholder-blue-300" 
                    rows={4}
                    placeholder="Type your question here..."
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm">Email Address</label>
                  <input 
                    type="email"
                    className="w-full p-3 border border-blue-400 rounded-lg bg-blue-700 text-white placeholder-blue-300"
                    placeholder="your@email.com"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-white text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Submit Question
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
