import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { posts } from '../../data/posts';
import SEO from '../../components/SEO';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Simple Markdown to HTML parser
  const parseMarkdown = (text) => {
    let html = text
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>');
    
    const parts = html.split('\n\n').filter(p => p.trim());
    return parts.map(p => {
      if (p.trim().startsWith('<h') || p.trim().startsWith('<img') || p.trim().startsWith('<blockquote')) {
        return p;
      }
      return `<p>${p}</p>`;
    }).join('\n');
  };

  return (
    <article className="post-page-container">
      <SEO 
        title={post.title}
        description={post.excerpt}
        url={`/blog/${post.slug}`}
      />
      
      <div className="container" style={{maxWidth: '800px', margin: '0 auto'}}>
        <Link to="/blog" className="back-link">
          <ArrowRight size={18} /> العودة للمدونة
        </Link>
        
        <header className="post-header">
          <h1 className="post-title">
            {post.title}
          </h1>
          <div className="post-meta-row">
            <div className="post-meta-item">
              <User size={16} />
              <span>{post.author}</span>
            </div>
            <div className="post-meta-item">
              <Calendar size={16} />
              <span>{post.date}</span>
            </div>
          </div>
        </header>

        {post.image && (
          <div className="post-hero-image-wrapper">
            <img src={post.image} alt={post.title} className="post-hero-image" />
          </div>
        )}

        <div className="post-content" dir="rtl" dangerouslySetInnerHTML={{ __html: parseMarkdown(post.content) }} />
        
        <div className="post-cta-box">
          <h3 className="cta-title">هل تبحث عن الاستثمار العقاري الأفضل؟</h3>
          <p className="cta-text">فريق ضفاف الخليج جاهز لمساعدتك في اختيار الشاليه أو الفيلا الأنسب لك في مرسى مطروح.</p>
          <a href="https://wa.me/201555111335" target="_blank" rel="noreferrer" className="btn-whatsapp-large">
            تواصل معنا عبر واتساب الآن
          </a>
        </div>
      </div>

      <style>{`
        .post-page-container {
          padding-top: 120px;
          padding-bottom: 80px;
          background: #ffffff;
          min-height: 100vh;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
          text-decoration: none;
          margin-bottom: 2.5rem;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .back-link:hover {
          color: var(--primary);
        }

        .post-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .post-title {
          font-size: 2.25rem;
          font-weight: 800;
          color: var(--text-main);
          line-height: 1.4;
          margin-bottom: 1.5rem;
        }

        .post-meta-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        .post-meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .post-hero-image-wrapper {
          width: 100%;
          border-radius: var(--radius-xl);
          overflow: hidden;
          margin-bottom: 3rem;
          box-shadow: var(--shadow-md);
        }

        .post-hero-image {
          width: 100%;
          max-height: 450px;
          object-fit: cover;
          display: block;
        }

        .post-content {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-main);
          margin-bottom: 4rem;
        }

        .post-content p {
          margin-bottom: 1.5rem;
        }

        .post-content h2, .post-content h3 {
          color: var(--secondary);
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .post-content h2 { font-size: 1.8rem; }
        .post-content h3 { font-size: 1.5rem; }

        .post-content strong {
          color: var(--text-main);
          font-weight: 700;
        }

        .post-content blockquote {
          background: #f8fafc;
          border-right: 4px solid var(--primary);
          padding: 1.25rem;
          margin: 2rem 0;
          font-style: italic;
          border-radius: var(--radius-sm);
        }

        .post-content img {
          max-width: 100%;
          border-radius: var(--radius-lg);
          margin: 2rem 0;
          box-shadow: var(--shadow-sm);
        }

        .post-cta-box {
          background: #f0f8ff;
          border: 1px solid #e0f0ff;
          border-radius: var(--radius-xl);
          padding: 2.5rem 2rem;
          text-align: center;
          margin-top: 4rem;
        }

        .cta-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--secondary);
          margin-bottom: 1rem;
        }

        .cta-text {
          font-size: 1.05rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
        }

        .btn-whatsapp-large {
          display: inline-block;
          background: #25d366;
          color: white;
          font-weight: 700;
          font-size: 1.1rem;
          padding: 1rem 2.5rem;
          border-radius: 999px;
          text-decoration: none;
          box-shadow: 0 10px 25px rgba(37, 211, 102, 0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .btn-whatsapp-large:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(37, 211, 102, 0.4);
        }

        @media (max-width: 768px) {
          .post-title { font-size: 1.75rem; }
          .post-page-container { padding-top: 100px; }
        }
      `}</style>
    </article>
  );
}
