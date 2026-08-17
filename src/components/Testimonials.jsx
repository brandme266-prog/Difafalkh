import React from 'react';
import { Star, MapPin, Quote, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'أحمد محمود',
      location: 'مستثمر في مشروع فيستيفال مطروح',
      service: 'وحدة تجارية',
      text: 'التعامل مع شركة ضفاف الخليج كان مميزاً من البداية. الالتزام بالجدول الزمني للحفر والإنشاءات يعكس مدى احترافيتهم. أنا متفائل جداً بالعائد الاستثماري لهذا المشروع.',
      rating: 5,
      date: 'منذ أسبوعين'
    },
    {
      name: 'م. خالد الشمري',
      location: 'مستثمر سعودي',
      service: 'شراكة استراتيجية',
      text: 'شراكتنا مع ضفاف الخليج أثبتت نجاحها. فريق الإدارة محترف والسوق المصري واعد جداً. مشروع سانتوريني باي سيكون علامة فارقة في الساحل.',
      rating: 5,
      date: 'منذ شهر'
    },
    {
      name: 'أمير عبد الله',
      location: 'عميل في فندق عروس البحر',
      service: 'إقامة فندقية',
      text: 'منذ أن تولت ضفاف الخليج إدارة الفندق، لاحظنا تغييراً جذرياً في مستوى الخدمة والضيافة. المكان أصبح أكثر راحة ورقياً. تجربة ممتازة.',
      rating: 5,
      date: 'منذ 5 أيام'
    }
  ];

  return (
    <section className="section-padding testimonials-section">
      <div className="container">
        <div className="text-center-head">
          <div className="section-tag">
            <Quote size={16} />
            <span>ثقة عملاؤنا</span>
          </div>
          <h2 className="section-title">
            ماذا يقول <span className="title-gradient">مستثمرونا وعملاؤنا؟</span>
          </h2>
          <p className="section-subtitle">
            آراء وانطباعات حقيقية من شركاء النجاح بعد التعامل مع شركة ضفاف الخليج.
          </p>
        </div>

        <div className="reviews-grid">
          {reviews.map((rev, index) => (
            <div key={index} className="review-card glass-card">
              <div className="review-header">
                <div className="stars-row">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="var(--secondary)" color="var(--secondary)" />
                  ))}
                </div>
                <span className="rev-date">{rev.date}</span>
              </div>

              <p className="rev-text">"{rev.text}"</p>

              <div className="rev-footer">
                <div className="user-info">
                  <strong>{rev.name}</strong>
                  <span className="user-loc">
                    <MapPin size={12} />
                    {rev.location}
                  </span>
                </div>

                <div className="verified-badge">
                  <CheckCircle2 size={14} color="#10b981" />
                  <span>عميل مؤكد</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-section {
          background: #f8fafc;
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .review-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .review-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .stars-row {
          display: flex;
          gap: 0.25rem;
        }

        .rev-date {
          font-size: 0.75rem;
          color: var(--text-dim);
        }

        .rev-text {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.8;
          margin-bottom: 1.75rem;
          font-style: italic;
        }

        .rev-footer {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding-top: 1rem;
          border-top: 1px solid var(--border);
        }

        .user-info strong {
          display: block;
          font-size: 1rem;
          color: var(--text-light);
        }

        .user-loc {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.775rem;
          color: var(--primary);
          margin-top: 0.2rem;
        }

        .verified-badge {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          color: #10b981;
          background: rgba(16, 185, 129, 0.1);
          padding: 0.25rem 0.65rem;
          border-radius: 999px;
        }
      `}</style>
    </section>
  );
}
