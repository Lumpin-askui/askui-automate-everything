import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogContent from "@/components/BlogContent";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Tag, Calendar, User, ArrowRight } from "lucide-react";
import { cms } from "@/services/cms";
import NotFound from "./NotFound";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? cms.getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <NotFound />;
  }

  // Format date
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary/30 border-b border-border">
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" className="mb-6 text-muted-foreground hover:text-foreground hover:bg-secondary/50 -ml-4" asChild>
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>

            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-6">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                <Tag className="h-3 w-3" />
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {formattedDate}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-4 pt-6 border-t border-border/50">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground">
                <User className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold text-foreground">{post.author}</div>
                {post.authorRole && (
                  <div className="text-sm text-muted-foreground">{post.authorRole}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.image && (
        <section className="py-8">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-auto rounded-xl shadow-md border border-border"
              />
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      {post.content && (
        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <article className="max-w-3xl mx-auto prose prose-lg prose-slate dark:prose-invert prose-headings:font-bold prose-a:text-primary prose-img:rounded-xl">
              <BlogContent content={post.content} />
            </article>
          </div>
        </section>
      )}

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <section className="py-8 border-t border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-secondary text-sm text-secondary-foreground hover:bg-secondary/80 transition-colors cursor-default"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Posts */}
      <section className="py-16 bg-secondary/20 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-foreground">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cms.getBlogPostsByCategory(post.category)
                .filter(p => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog-posts/${relatedPost.slug}`}
                    className="block p-6 rounded-xl border border-border bg-background hover:shadow-lg hover:border-primary/20 transition-all group"
                  >
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <span className="px-2 py-0.5 rounded bg-secondary text-secondary-foreground font-medium">
                        {relatedPost.category}
                      </span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center text-sm font-medium text-primary group-hover:translate-x-1 transition-transform duration-200">
                      Read Article
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
