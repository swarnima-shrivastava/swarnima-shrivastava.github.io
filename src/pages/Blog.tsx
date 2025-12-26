import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight, FolderOpen, FileText, ChevronRight } from "lucide-react";
import { getAllPosts, getPostsByCategory } from "@/lib/blog";
import { useState } from "react";

const Blog = () => {
  const categories = getPostsByCategory();
  const allPosts = getAllPosts();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const displayedPosts = selectedCategory 
    ? allPosts.filter(post => post.category === selectedCategory)
    : allPosts;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute right-0 top-20 w-1/3 h-96 bg-gold/5 blur-3xl rounded-full" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <p className="font-body text-gold text-sm tracking-widest uppercase mb-4">
              Insights & Frameworks
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Inside <span className="text-gradient"> My Lattice</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Through these articles, I explore building systems, growing careers, and making decisions in motion. 
              They reflect the evolution of my thought process, learning, and experiences over time.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-body transition-all ${
                selectedCategory === null 
                  ? 'bg-gold text-white' 
                  : 'bg-secondary text-muted-foreground hover:text-foreground'
              }`}
            >
              All Posts ({allPosts.length})
            </button>
            {categories.map(category => (
              <button
                key={category.slug}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-full text-sm font-body transition-all ${
                  selectedCategory === category.name 
                    ? 'bg-gold text-white' 
                    : 'bg-secondary text-muted-foreground hover:text-foreground'
                }`}
              >
                {category.name} ({category.posts.length})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Structure Sidebar + Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Hierarchy Sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-card border border-border rounded-2xl p-6 sticky top-24">
                <h3 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <FolderOpen className="w-5 h-5 text-gold" />
                  Blog Structure
                </h3>
                <nav className="space-y-4">
                  {categories.map(category => (
                    <div key={category.slug}>
                      <button
                        onClick={() => setSelectedCategory(category.name)}
                        className={`flex items-center gap-2 font-body text-sm w-full text-left py-1 transition-colors ${
                          selectedCategory === category.name 
                            ? 'text-gold font-medium' 
                            : 'text-foreground hover:text-gold'
                        }`}
                      >
                        <ChevronRight className={`w-4 h-4 transition-transform ${
                          selectedCategory === category.name ? 'rotate-90' : ''
                        }`} />
                        <FolderOpen className="w-4 h-4" />
                        {category.name}
                      </button>
                      {(selectedCategory === category.name || selectedCategory === null) && (
                        <ul className="ml-6 mt-2 space-y-1 border-l border-border pl-4">
                          {category.posts.map(post => (
                            <li key={post.slug}>
                              <Link
                                to={`/blog/${post.slug}`}
                                className="flex items-center gap-2 font-body text-xs text-muted-foreground hover:text-gold transition-colors py-1"
                              >
                                <FileText className="w-3 h-3 flex-shrink-0" />
                                <span className="truncate">{post.title}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Blog Posts Grid */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-8">
                {displayedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 text-xs font-body rounded-full bg-gold/10 text-gold border border-gold/20 mb-4">
                        {post.category}
                      </span>
                      <h2 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-gold transition-colors">
                        {post.title}
                      </h2>
                      <p className="font-body text-muted-foreground text-sm mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {new Date(post.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readTime}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
