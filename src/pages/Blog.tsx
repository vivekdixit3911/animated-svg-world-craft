
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Blog categories
  const categories = [
    { name: "All", count: 12 },
    { name: "Technology", count: 5 },
    { name: "Business", count: 3 },
    { name: "Cloud", count: 2 },
    { name: "Design", count: 2 }
  ];
  
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Featured post
  const featuredPost = {
    id: 1,
    title: "The Future of AI in Software Development",
    date: "April 22, 2025",
    category: "Technology",
    excerpt: "Explore how artificial intelligence is revolutionizing the way we build and deploy software applications.",
    author: "Sarah Chen",
    image: (
      <svg viewBox="0 0 800 400" className="w-full h-auto">
        <rect width="800" height="400" fill="#7C3AED" />
        <path d="M100,300 Q400,100 700,300" stroke="#FFF" strokeWidth="6" fill="none" />
        <circle cx="100" cy="300" r="20" fill="#FFF" />
        <circle cx="250" cy="200" r="20" fill="#FFF" />
        <circle cx="400" cy="150" r="20" fill="#FFF" />
        <circle cx="550" cy="200" r="20" fill="#FFF" />
        <circle cx="700" cy="300" r="20" fill="#FFF" />
      </svg>
    )
  };

  // Blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Why Every Business Needs a Digital Transformation Strategy",
      date: "April 15, 2025",
      category: "Business",
      excerpt: "Discover the essential components of a successful digital transformation and why it's crucial for modern businesses.",
      author: "Michael Roberts",
      image: (
        <svg viewBox="0 0 400 200" className="w-full h-auto">
          <rect width="400" height="200" fill="#2563EB" />
          <circle cx="100" cy="100" r="50" fill="#60A5FA" />
          <circle cx="150" cy="100" r="50" fill="#7C3AED" />
          <circle cx="200" cy="100" r="50" fill="#F59E0B" />
          <circle cx="250" cy="100" r="50" fill="#10B981" />
          <circle cx="300" cy="100" r="50" fill="#EF4444" />
        </svg>
      )
    },
    {
      id: 2,
      title: "The Future of AI in Software Development",
      date: "April 22, 2025",
      category: "Technology",
      excerpt: "Explore how artificial intelligence is revolutionizing the way we build and deploy software applications.",
      author: "Sarah Chen",
      image: (
        <svg viewBox="0 0 400 200" className="w-full h-auto">
          <rect width="400" height="200" fill="#7C3AED" />
          <path d="M50,150 Q200,50 350,150" stroke="#FFF" strokeWidth="3" fill="none" />
          <circle cx="50" cy="150" r="10" fill="#FFF" />
          <circle cx="125" cy="100" r="10" fill="#FFF" />
          <circle cx="200" cy="75" r="10" fill="#FFF" />
          <circle cx="275" cy="100" r="10" fill="#FFF" />
          <circle cx="350" cy="150" r="10" fill="#FFF" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Cloud Computing: Benefits for Small and Medium Businesses",
      date: "April 28, 2025",
      category: "Cloud",
      excerpt: "Learn how small and medium-sized businesses can leverage cloud computing to scale operations and reduce costs.",
      author: "Daniel Patel",
      image: (
        <svg viewBox="0 0 400 200" className="w-full h-auto">
          <rect width="400" height="200" fill="#10B981" />
          <circle cx="150" cy="100" r="60" fill="white" fillOpacity="0.6" />
          <circle cx="200" cy="80" r="40" fill="white" fillOpacity="0.6" />
          <circle cx="250" cy="100" r="50" fill="white" fillOpacity="0.6" />
          <rect x="120" y="110" width="160" height="40" fill="white" fillOpacity="0.6" />
        </svg>
      )
    },
    {
      id: 4,
      title: "5 UI/UX Trends to Watch in 2025",
      date: "May 5, 2025",
      category: "Design",
      excerpt: "Stay ahead of the curve with these emerging trends in user interface and experience design.",
      author: "Jessica Williams",
      image: (
        <svg viewBox="0 0 400 200" className="w-full h-auto">
          <rect width="400" height="200" fill="#F59E0B" />
          <rect x="50" y="50" width="300" height="100" rx="10" fill="white" fillOpacity="0.6" />
          <circle cx="100" cy="100" r="30" fill="#F59E0B" fillOpacity="0.8" />
          <rect x="150" y="80" width="180" height="10" rx="5" fill="#F59E0B" fillOpacity="0.8" />
          <rect x="150" y="100" width="140" height="10" rx="5" fill="#F59E0B" fillOpacity="0.8" />
          <rect x="150" y="120" width="160" height="10" rx="5" fill="#F59E0B" fillOpacity="0.8" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Securing Your Cloud Infrastructure: Best Practices",
      date: "May 12, 2025",
      category: "Cloud",
      excerpt: "Essential security measures to protect your cloud-based applications and data from threats.",
      author: "Alex Johnson",
      image: (
        <svg viewBox="0 0 400 200" className="w-full h-auto">
          <rect width="400" height="200" fill="#3B82F6" />
          <circle cx="200" cy="100" r="70" fill="white" fillOpacity="0.2" />
          <rect x="180" y="70" width="40" height="60" fill="white" fillOpacity="0.6" />
          <circle cx="200" cy="60" r="10" fill="white" fillOpacity="0.6" />
        </svg>
      )
    },
    {
      id: 6,
      title: "The Role of Machine Learning in Predictive Analytics",
      date: "May 18, 2025",
      category: "Technology",
      excerpt: "How businesses are using machine learning algorithms to predict trends and make data-driven decisions.",
      author: "David Chen",
      image: (
        <svg viewBox="0 0 400 200" className="w-full h-auto">
          <rect width="400" height="200" fill="#8B5CF6" />
          <line x1="50" y1="150" x2="100" y2="100" stroke="white" strokeWidth="2" />
          <line x1="100" y1="100" x2="150" y2="120" stroke="white" strokeWidth="2" />
          <line x1="150" y1="120" x2="200" y2="80" stroke="white" strokeWidth="2" />
          <line x1="200" y1="80" x2="250" y2="130" stroke="white" strokeWidth="2" />
          <line x1="250" y1="130" x2="300" y2="60" stroke="white" strokeWidth="2" />
          <line x1="300" y1="60" x2="350" y2="110" stroke="white" strokeWidth="2" />
          <circle cx="50" cy="150" r="6" fill="white" />
          <circle cx="100" cy="100" r="6" fill="white" />
          <circle cx="150" cy="120" r="6" fill="white" />
          <circle cx="200" cy="80" r="6" fill="white" />
          <circle cx="250" cy="130" r="6" fill="white" />
          <circle cx="300" cy="60" r="6" fill="white" />
          <circle cx="350" cy="110" r="6" fill="white" />
        </svg>
      )
    }
  ];

  // Filter posts based on selected category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gratech-dark relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Insights</h1>
              <p className="text-xl text-gray-300 mb-8">
                Discover the latest trends, insights, and thought leadership in technology and digital innovation.
              </p>
              <div className="max-w-md mx-auto relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 bg-white/5 border-white/10 focus:border-blue-500 text-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 sticky top-24">
                  <h3 className="text-xl font-semibold mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      <li key={category.name}>
                        <button
                          className={`flex justify-between w-full py-2 px-3 rounded-lg transition-colors ${
                            selectedCategory === category.name
                              ? "bg-blue-600 text-white"
                              : "hover:bg-white/5"
                          }`}
                          onClick={() => setSelectedCategory(category.name)}
                        >
                          <span>{category.name}</span>
                          <span className="bg-white/10 text-xs rounded-full px-2 py-1">
                            {category.count}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className="text-xl font-semibold mt-8 mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <div key={`recent-${post.id}`} className="flex gap-3 items-start">
                        <div className="w-16 h-16 flex-shrink-0 rounded overflow-hidden">
                          {post.image}
                        </div>
                        <div>
                          <h4 className="text-sm font-medium hover:text-blue-400 cursor-pointer transition-colors">
                            {post.title}
                          </h4>
                          <p className="text-xs text-gray-400">{post.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="lg:col-span-3">
                {/* Featured Post */}
                <div className="mb-12 bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    {featuredPost.image}
                  </div>
                  <div className="p-8">
                    <div className="flex items-center mb-3">
                      <span className="text-sm text-gray-400">{featuredPost.date}</span>
                      <span className="mx-2 text-gray-500">•</span>
                      <span className="text-sm text-blue-500">{featuredPost.category}</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-3">{featuredPost.title}</h2>
                    <p className="text-gray-300 mb-5">{featuredPost.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">By {featuredPost.author}</span>
                      <Button variant="outline" className="border-white/20 hover:bg-white/5">
                        Read Article
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Blog Grid */}
                {filteredPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredPosts.map((post) => (
                      <div 
                        key={post.id}
                        className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
                      >
                        <div className="aspect-video overflow-hidden">
                          {post.image}
                        </div>
                        <div className="p-6">
                          <div className="flex items-center mb-3">
                            <span className="text-sm text-gray-400">{post.date}</span>
                            <span className="mx-2 text-gray-500">•</span>
                            <span className="text-sm text-blue-500">{post.category}</span>
                          </div>
                          <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                          <p className="text-gray-400 mb-4">{post.excerpt}</p>
                          <Button variant="link" className="p-0 text-blue-400">
                            Read More →
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 bg-white/5 border border-white/10 rounded-xl">
                    <h3 className="text-xl mb-2">No articles found</h3>
                    <p className="text-gray-400 mb-4">Try a different search term or category</p>
                    <Button 
                      variant="outline" 
                      className="border-white/20 hover:bg-white/5"
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory("All");
                      }}
                    >
                      Reset Filters
                    </Button>
                  </div>
                )}
                
                {/* Pagination */}
                {filteredPosts.length > 0 && (
                  <div className="flex justify-center mt-12">
                    <div className="flex space-x-2">
                      <Button variant="outline" className="border-white/20 hover:bg-white/5" disabled>
                        Previous
                      </Button>
                      <Button className="bg-blue-600">1</Button>
                      <Button variant="outline" className="border-white/20 hover:bg-white/5">2</Button>
                      <Button variant="outline" className="border-white/20 hover:bg-white/5">3</Button>
                      <Button variant="outline" className="border-white/20 hover:bg-white/5">Next</Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="py-16 bg-blue-900/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
              <p className="text-xl text-gray-300 mb-8">
                Stay updated with our latest articles, insights, and industry trends.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white max-w-xs md:min-w-[300px]"
                />
                <Button className="blue-gradient">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
