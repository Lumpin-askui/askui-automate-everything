import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Tag, Calendar, User } from "lucide-react";
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

  // Convert markdown-like content to HTML (basic implementation)
  const formatContent = (content: string) => {
    return content
      .split("\n\n")
      .map((paragraph, index) => {
        if (paragraph.startsWith("## ")) {
          return `<h2 class="text-2xl font-bold mt-8 mb-4">${paragraph.replace("## ", "")}</h2>`;
        }
        if (paragraph.startsWith("### ")) {
          return `<h3 class="text-xl font-semibold mt-6 mb-3">${paragraph.replace("### ", "")}</h3>`;
        }
        if (paragraph.startsWith("- ")) {
          const items = paragraph.split("\n").filter(item => item.startsWith("- "));
          const listItems = items.map(item => `<li class="ml-4">${item.replace("- ", "")}</li>`).join("");
          return `<ul class="list-disc space-y-2 my-4">${listItems}</ul>`;
        }
        if (paragraph.startsWith("```")) {
          return `<pre class="bg-muted p-4 rounded-lg overflow-x-auto my-4"><code>${paragraph.replace(/```[\w]*\n?/g, "")}</code></pre>`;
        }
        return `<p class="mb-4 leading-relaxed">${paragraph}</p>`;
      })
      .join("");
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" className="mb-6 text-white hover:text-white hover:bg-white/10" asChild>
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>

            <div className="flex items-center gap-3 text-white/80 text-sm mb-4">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-white/10 text-white font-medium">
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

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>

            <p className="text-xl text-white/90 mb-6">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-4 text-white/80">
              <User className="h-5 w-5" />
              <div>
                <div className="font-semibold text-white">{post.author}</div>
                {post.authorRole && (
                  <div className="text-sm">{post.authorRole}</div>
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
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <div 
              className="prose-headings:font-bold prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-li:text-foreground"
              dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
            />
          </article>
        </div>
      </section>

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <section className="py-8 border-t border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground"
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
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cms.getBlogPostsByCategory(post.category)
                .filter(p => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="block p-6 rounded-lg border border-border hover:shadow-lg transition-all"
                  >
                    <h3 className="font-semibold mb-2 hover:text-accent transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
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

