import React from 'react';
import { X, Calendar, User, Tag, Clock, ArrowRight, MessageCircle, ShieldCheck, Share2 } from 'lucide-react';

export default function ArticleModal({ article, onClose, onOpenBooking }) {
  if (!article) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="article-modal-content glass-card" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose} aria-label="إغلاق">
          <X size={20} />
        </button>

        {/* Article Header Image */}
        <div className="article-hero-img-wrapper">
          <img src={article.image} alt={article.title} className="article-hero-img" />
          <div className="article-badge-category">{article.category}</div>
        </div>

        {/* Article Content */}
        <div className="article-body-wrapper">
          <div className="article-meta-row">
            <span><Calendar size={14} /> {article.date}</span>
            <span><User size={14} /> بقلم: خبير خدمات الرياض</span>
            <span><Clock size={14} /> قراءة في {article.readTime}</span>
          </div>

          <h2 className="article-full-title">{article.title}</h2>

          <div className="article-paragraphs">
            {article.paragraphs.map((p, idx) => (
              <div key={idx} className="article-paragraph-box">
                {p.heading && <h3 className="p-heading">{p.heading}</h3>}
                <p className="p-text">{p.text}</p>
              </div>
            ))}
          </div>

          {/* Key Takeaway Box */}
          <div className="key-takeaway-box">
            <ShieldCheck size={26} color="var(--primary)" />
            <div>
              <strong>نصيحة الخبراء بالرياض:</strong>
              <p>ينصح بغسيل مكيفات السبليت وتنظيف أفران الغاز مرتين سنوياً على الأقل لضمان أعلى أداء وتوفير استهلاك الكهرباء والغاز وتفادي الأعطال المكلفة.</p>
            </div>
          </div>

          {/* Action Callout inside Article */}
          <div className="article-cta-box">
            <h4>هل ترغب في طلب خدمة تنظيف احترافية بالرياض؟</h4>
            <p>احصل على خصم 30% وفني متخصص يصلك في أقل من 45 دقيقة!</p>
            <div className="btn-group">
              <button className="btn btn-primary" onClick={() => { onClose(); onOpenBooking(); }}>
                احجز خدمتك الآن
              </button>
              <a 
                href={`https://wa.me/966550001122?text=${encodeURIComponent(`استفسار عن مقالة: ${article.title}`)}`}
                target="_blank" 
                rel="noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle size={18} />
                تواصل واتساب
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .article-modal-content {
          position: relative;
          width: 100%;
          max-width: 820px;
          max-height: 90vh;
          overflow-y: auto;
          padding: 0;
          background: var(--bg-surface);
          border: 1px solid var(--border-active);
          border-radius: var(--radius-xl);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
        }

        .article-hero-img-wrapper {
          position: relative;
          height: 300px;
          width: 100%;
          overflow: hidden;
        }

        .article-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .article-badge-category {
          position: absolute;
          bottom: 1.25rem;
          right: 1.25rem;
          padding: 0.4rem 1rem;
          background: rgba(2, 132, 199, 0.85);
          backdrop-filter: blur(10px);
          color: #fff;
          font-size: 0.85rem;
          font-weight: 700;
          border-radius: 999px;
        }

        .article-body-wrapper {
          padding: 2.25rem;
        }

        .article-meta-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          font-size: 0.825rem;
          color: var(--text-dim);
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .article-meta-row span {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .article-full-title {
          font-size: 1.85rem;
          font-weight: 900;
          color: var(--text-light);
          line-height: 1.3;
          margin-bottom: 1.75rem;
        }

        .article-paragraphs {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .p-heading {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--primary);
          margin-bottom: 0.5rem;
        }

        .p-text {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.8;
        }

        .key-takeaway-box {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          background: rgba(2, 132, 199, 0.08);
          border: 1px solid rgba(2, 132, 199, 0.25);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          margin-bottom: 2rem;
        }

        .key-takeaway-box strong {
          display: block;
          color: var(--primary);
          font-size: 0.95rem;
          margin-bottom: 0.25rem;
        }

        .key-takeaway-box p {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .article-cta-box {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 1.75rem;
          text-align: center;
        }

        .article-cta-box h4 {
          font-size: 1.2rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          color: var(--text-light);
        }

        .article-cta-box p {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 1.25rem;
        }

        .article-cta-box .btn-group {
          justify-content: center;
        }
      `}</style>
    </div>
  );
}
