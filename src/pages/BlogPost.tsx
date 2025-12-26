import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getPostBySlug } from "@/lib/blog";
import ReactMarkdown from "react-markdown";

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-6 py-32 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button variant="gold">Back to Blog</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-8">
        <div className="container mx-auto px-6">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-body text-sm">Back to Blog</span>
          </Link>
          
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-xs font-body rounded-full bg-gold/10 text-gold border border-gold/20 mb-4">
              {post.category}
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <button className="flex items-center gap-2 hover:text-gold transition-colors">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <article className="max-w-3xl mx-auto">
            <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none
              prose-headings:font-display prose-headings:text-foreground prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:font-body prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-li:font-body prose-li:text-muted-foreground
              prose-strong:text-foreground prose-strong:font-semibold
              prose-ul:list-disc prose-ul:list-inside
              prose-ol:list-decimal prose-ol:list-inside
            ">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center bg-secondary/30 rounded-2xl p-12">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Enjoyed this article?
            </h3>
            <p className="text-muted-foreground mb-6">
              Get more insights delivered straight to your inbox.
            </p>
            <Link to="/#contact">
              <Button variant="gold">Get in Touch</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
