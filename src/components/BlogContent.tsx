import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useMemo } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface BlogContentProps {
  content: string;
}

const BlogContent = ({ content }: BlogContentProps) => {
  if (!content) {
    return null;
  }

  // Process content to handle HTML divs with markdown inside
  const processedContent = useMemo(() => {
    // Replace HTML div wrappers with markdown-friendly format
    // This allows ReactMarkdown to parse the markdown table inside
    let processed = content;
    
    // Remove the div wrapper around tables but keep the table markdown
    processed = processed.replace(
      /<div data-rt-embed-type=['"]true['"]>\s*\n?\s*/g,
      ''
    );
    processed = processed.replace(/\s*<\/div>\s*$/gm, '');
    
    return processed;
  }, [content]);

  return (
    <div className="blog-content prose prose-lg dark:prose-invert max-w-none
                    prose-headings:font-bold prose-headings:text-foreground
                    prose-p:text-foreground prose-strong:text-foreground prose-li:text-foreground
                    prose-a:text-[#962C5D] prose-a:underline hover:prose-a:text-[#962C5D]/80
                    prose-ul:list-disc prose-ul:pl-5 prose-ul:space-y-2
                    prose-ol:list-decimal prose-ol:pl-5 prose-ol:space-y-2
                    prose-li:marker:text-[#962C5D]
                    prose-blockquote:border-l-4 prose-blockquote:border-[#962C5D] prose-blockquote:pl-4 prose-blockquote:italic
                    prose-code:bg-muted prose-code:p-1 prose-code:rounded prose-code:text-sm
                    prose-img:rounded-lg prose-img:shadow-md prose-img:mx-auto prose-img:my-8
                    prose-table:w-full prose-table:border-collapse prose-table:my-8
                    prose-th:bg-muted prose-th:p-3 prose-th:text-left prose-th:font-semibold prose-th:border-b
                    prose-td:p-3 prose-td:border-b prose-td:border-border
                    prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-4 prose-h1:mt-8
                    prose-h2:text-3xl prose-h2:font-semibold prose-h2:mb-3 prose-h2:mt-8 prose-h2:border-b prose-h2:border-border prose-h2:pb-2
                    prose-h3:text-2xl prose-h3:font-semibold prose-h3:mb-2 prose-h3:mt-6
                    prose-h4:text-xl prose-h4:font-semibold prose-h4:mb-2 prose-h4:mt-4
                    prose-p:mb-4 prose-p:leading-relaxed
                    prose-ul:mb-4 prose-ol:mb-4
                    prose-li:mb-2
                    prose-blockquote:my-4 prose-blockquote:bg-muted/50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r
                    prose-hr:my-8 prose-hr:border-border
                    ">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Custom code block rendering with syntax highlighting
          pre: ({ children }: any) => <>{children}</>,
          code({node, inline, className, children, ...props}: any) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <div className="not-prose rounded-md overflow-hidden my-6 shadow-md border border-border/50">
                <SyntaxHighlighter
                  {...props}
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
                  customStyle={{ margin: 0, padding: '1.5rem', fontSize: '0.9rem' }}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              </div>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
          // Custom heading components to ensure proper rendering
          h1: ({ children, ...props }: any) => (
            <h1 className="text-4xl font-bold mb-4 mt-8 text-foreground first:mt-0" {...props}>
              {children}
            </h1>
          ),
          h2: ({ children, ...props }: any) => (
            <h2 className="text-3xl font-semibold mb-3 mt-8 text-foreground border-b border-border pb-2 first:mt-0" {...props}>
              {children}
            </h2>
          ),
          h3: ({ children, ...props }: any) => (
            <h3 className="text-2xl font-semibold mb-2 mt-6 text-foreground" {...props}>
              {children}
            </h3>
          ),
          h4: ({ children, ...props }: any) => (
            <h4 className="text-xl font-semibold mb-2 mt-4 text-foreground" {...props}>
              {children}
            </h4>
          ),
          // Custom table styling
          table: ({ children, ...props }: any) => (
            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse border border-border" {...props}>
                {children}
              </table>
            </div>
          ),
          th: ({ children, ...props }: any) => (
            <th className="bg-muted p-3 text-left font-semibold border-b border-border" {...props}>
              {children}
            </th>
          ),
          td: ({ children, ...props }: any) => (
            <td className="p-3 border-b border-border" {...props}>
              {children}
            </td>
          ),
        }}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  );
};

export default BlogContent;
