import { Link, useLocation, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight, ArrowLeft, FileText } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

interface CategoryConfig {
  title: string;
  description: string;
  slug: string;
}

const categoryConfigs: Record<string, CategoryConfig> = {
  essays: {
    title: "Essays",
    description: "Featured, reflective, and curated pieces exploring ideas in depth.",
    slug: "essays"
  },
  tech: {
    title: "Tech",
    description: "Technical writing, tutorials, and explorations of software development.",
    slug: "tech"
  },
  books: {
    title: "Books",
    description: "Reading notes, summaries, and reflections on books that shaped my thinking.",
    slug: "books"
  },
  travel: {
    title: "Travel",
    description: "Travel stories, reflections, and experiences from around the world.",
    slug: "travel"
  }
};

const BlogCategory = () => {
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const category = pathParts[pathParts.length - 1];
  
  if (!category || !categoryConfigs[category]) {
    return <Navigate to="/blog" replace />;
  }

  const config = categoryConfigs[category];
  const allPosts = getAllPosts();
  const categoryPosts = allPosts.filter(
    post => post.category.toLowerCase().replace(/\s+/g, '-') === category ||
            post.category.toLowerCase() === category
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute right-0 top-20 w-1/3 h-96 bg-gold/5 blur-3xl rounded-full" />
        
        <div className="container mx-auto px-6 relative z-10">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-body text-sm">Back to Blog</span>
          </Link>
          
          <div className="max-w-3xl">
            <p className="font-body text-gold text-sm tracking-widest uppercase mb-4">
              {config.slug}
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              {config.title}
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              {config.description}
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {categoryPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${category}/${post.slug}`}
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
          ) : (
            <div className="text-center py-16">
              <FileText className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                No posts yet
              </h3>
              <p className="font-body text-muted-foreground">
                Check back soon for new content in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogCategory;
