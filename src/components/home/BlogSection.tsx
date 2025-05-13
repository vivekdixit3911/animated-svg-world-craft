import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Create abstract SVG images for blog posts
const blogImages = [
  // Team Collaboration
  <svg key="team" viewBox="0 0 400 200" className="w-full h-auto">
    <rect width="400" height="200" fill="#2563EB" />
    <circle cx="100" cy="100" r="50" fill="#60A5FA" />
    <circle cx="150" cy="100" r="50" fill="#7C3AED" />
    <circle cx="200" cy="100" r="50" fill="#F59E0B" />
    <circle cx="250" cy="100" r="50" fill="#10B981" />
    <circle cx="300" cy="100" r="50" fill="#EF4444" />
  </svg>,
  
  // Future of AI
  <svg key="ai" viewBox="0 0 400 200" className="w-full h-auto">
    <rect width="400" height="200" fill="#7C3AED" />
    <path d="M50,150 Q200,50 350,150" stroke="#FFF" strokeWidth="3" fill="none" />
    <circle cx="50" cy="150" r="10" fill="#FFF" />
    <circle cx="125" cy="100" r="10" fill="#FFF" />
    <circle cx="200" cy="75" r="10" fill="#FFF" />
    <circle cx="275" cy="100" r="10" fill="#FFF" />
    <circle cx="350" cy="150" r="10" fill="#FFF" />
  </svg>,
  
  // Cloud Computing
  <svg key="cloud" viewBox="0 0 400 200" className="w-full h-auto">
    <rect width="400" height="200" fill="#10B981" />
    <circle cx="150" cy="100" r="60" fill="white" fillOpacity="0.6" />
    <circle cx="200" cy="80" r="40" fill="white" fillOpacity="0.6" />
    <circle cx="250" cy="100" r="50" fill="white" fillOpacity="0.6" />
    <rect x="120" y="110" width="160" height="40" fill="white" fillOpacity="0.6" />
  </svg>
];

const blogPosts = [
  {
    id: 1,
    title: 'Why Every Business Needs a Digital Transformation Strategy',
    date: 'April 15, 2025',
    category: 'Business Strategy',
    excerpt: "Discover the essential components of a successful digital transformation and why it's crucial for modern businesses.",
    image: blogImages[0]
  },
  {
    id: 2,
    title: 'The Future of AI in Software Development',
    date: 'April 22, 2025',
    category: 'Technology',
    excerpt: "Explore how artificial intelligence is revolutionizing the way we build and deploy software applications.",
    image: blogImages[1]
  },
  {
    id: 3,
    title: 'Cloud Computing: Benefits for Small and Medium Businesses',
    date: 'April 28, 2025',
    category: 'Cloud Technology',
    excerpt: "Learn how small and medium-sized businesses can leverage cloud computing to scale operations and reduce costs.",
    image: blogImages[2]
  }
];

const BlogSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activePost, setActivePost] = useState(0);

  useEffect(() => {
    // Animate in when component mounts
    setIsVisible(true);
    
    // Auto-cycle through posts for hover effect
    const interval = setInterval(() => {
      setActivePost(prev => (prev + 1) % blogPosts.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div className={`transform transition-all duration-700 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Explore Blogs and News</h2>
            <div className="w-20 h-1 bg-blue-600 rounded"></div>
          </div>
          <Link to="/blog">
            <Button 
              variant="outline" 
              className={`mt-4 md:mt-0 text-blue-600 border-blue-600 hover:bg-blue-50 transform transition-all duration-700 delay-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              View All Posts
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={post.id}
              className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              } ${activePost === index ? "scale-105 shadow-lg" : "scale-100"}`}
              style={{ transitionDelay: `${300 + (index * 200)}ms` }}
              onMouseEnter={() => setActivePost(index)}
            >
              <div className="aspect-video overflow-hidden bg-gradient-to-br from-blue-900/30 to-purple-900/30">
                <div className="transform hover:scale-105 transition-transform duration-700">
                  {post.image}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-blue-600">{post.category}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`}>
                  <Button variant="link" className="p-0 text-blue-600 group">
                    Read More{" "}
                    <span className="transform transition-transform duration-300 inline-block group-hover:translate-x-1">→</span>
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Newsletter Subscription */}
        <div className={`mt-16 p-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-white shadow-xl transform transition-all duration-700 delay-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
          <div className="grid md:grid-cols-5 gap-6 items-center">
            <div className="md:col-span-3">
              <h3 className="text-xl font-bold mb-2">Stay Updated with Our Newsletter</h3>
              <p className="text-blue-100">Get the latest insights, tips, and news delivered directly to your inbox.</p>
            </div>
            <div className="md:col-span-2 flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-2 rounded-lg border border-blue-400 bg-white/10 backdrop-blur-sm text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-blue-600 hover:bg-blue-50">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
