import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../../data/posts';
import SEO from '../../components/SEO';
import { Calendar, ChevronLeft } from 'lucide-react';

export default function BlogIndex() {
  return (
    <div className="blog-page-container">
      <SEO 
        title="مدونة ضفاف الخليج | نصائح الاستثمار العقاري في مرسى مطروح"
        description="اقرأ أحدث المقالات والنصائح حول الاستثمار العقاري، التصميم المعماري، واختيار أفضل الشاليهات والفيلات في مرسى مطروح مع شركة ضفاف الخليج."
        url="/blog"
      />
      <div className="container">
        <h1 className="blog-main-title">مدونة <span style={{color: 'var(--primary)'}}>ضفاف الخليج</span> العقارية</h1>
        
        <div className="blog-grid">
          {posts.map(post => (
            <article key={post.id} className="blog-card glass-card">
              <div className="blog-card-img-wrapper">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="blog-card-img" 
                />
              </div>
              <div className="blog-card-content">
                <div className="blog-card-meta">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                <h2 className="blog-card-title">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                <p className="blog-card-excerpt">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.slug}`} 
                  className="blog-read-more"
                >
                  اقرأ المزيد <ChevronLeft size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .blog-page-container {
          padding-top: 100px;
          padding-bottom: 80px;
          background: var(--bg-main);
          min-height: 100vh;
        }

        .blog-main-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 3rem;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
        }

        .blog-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }

        .blog-card-img-wrapper {
          width: 100%;
          height: 220px;
          overflow: hidden;
        }

        .blog-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .blog-card:hover .blog-card-img {
          transform: scale(1.05);
        }

        .blog-card-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .blog-card-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 0.75rem;
        }

        .blog-card-title {
          font-size: 1.25rem;
          font-weight: 700;
          line-height: 1.4;
          margin-bottom: 1rem;
        }

        .blog-card-title a {
          color: var(--text-main);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .blog-card-title a:hover {
          color: var(--primary);
        }

        .blog-card-excerpt {
          font-size: 0.95rem;
          color: var(--text-dim);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .blog-read-more {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          color: var(--primary);
          font-weight: 700;
          font-size: 0.95rem;
          text-decoration: none;
          transition: gap 0.3s ease;
        }

        .blog-read-more:hover {
          gap: 0.5rem;
        }
      `}</style>
    </div>
  );
}
