
import React from 'react';
import { Button } from '@/components/ui/button';

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
    excerpt: 'Discover the essential components of a successful digital transformation and why it's crucial for modern businesses.',
    image: blogImages[0]
  },
  {
    id: 2,
    title: 'The Future of AI in Software Development',
    date: 'April 22, 2025',
    category: 'Technology',
    excerpt: 'Explore how artificial intelligence is revolutionizing the way we build and deploy software applications.',
    image: blogImages[1]
  },
  {
    id: 3,
    title: 'Cloud Computing: Benefits for Small and Medium Businesses',
    date: 'April 28, 2025',
    category: 'Cloud Technology',
    excerpt: 'Learn how small and medium-sized businesses can leverage cloud computing to scale operations and reduce costs.',
    image: blogImages[2]
  }
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Explore Blogs and News</h2>
            <div className="w-20 h-1 bg-blue-600 rounded"></div>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0 text-blue-600 border-blue-600 hover:bg-blue-50">
            View All Posts
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div 
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-video overflow-hidden">
                {post.image}
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-blue-600">{post.category}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Button variant="link" className="p-0 text-blue-600">
                  Read More →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
