import React from 'react';
import { ShieldCheck, Star, MapPin, Building, ArrowLeft, MessageCircle } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-grid">
        {/* Left Column: Text & Content */}
        <div className="hero-info">
          <div className="trust-pill">
            <span className="pill-dot"></span>
            <MapPin size={16} color="var(--primary)" />
            <span>شركة مصرية سعودية تعمل برأس مال 500 مليون جنيه مصري</span>
          </div>

          <h1 className="hero-main-title">
            <span className="title-highlight">ضفاف الخليج</span> للإعمار و<span className="title-cyan">الاستثمار العقاري</span>
          </h1>

          <p className="hero-lead">
            خبرة تفوق 50 عاماً في مجال المقاولات والتطوير العقاري. نقدم أرقى المشاريع السكنية والسياحية في محافظة مرسى مطروح، برؤية مستقبلية وشراكات استراتيجية لضمان أعلى معايير الجودة والرفاهية.
          </p>

          {/* Quick Badges Grid */}
          <div className="hero-features-list">
            <div className="hero-feat-item">
              <Building size={20} className="feat-icon" />
              <span>مشاريع سكنية وسياحية متكاملة (فيستيفال مطروح - سانتوريني باي)</span>
            </div>
            <div className="hero-feat-item">
              <ShieldCheck size={20} className="feat-icon" />
              <span>شراكات قوية مع البنك الأهلي وبنك مصر ومحافظة مطروح</span>
            </div>
            <div className="hero-feat-item">
              <Star size={20} className="feat-icon-gold" />
              <span>إدارة احترافية لفنادق كبرى مثل فندق عروس البحر</span>
            </div>
          </div>




        </div>

        <div className="hero-visual">
          <div className="image-frame glass-card">
            <img 
              src="/images/752854634_122104263573397745_1309253397501418774_n.jpg" 
              alt="ضفاف الخليج لالعمار والاستثمار العقاري - فيستيفال مطروح" 
              className="hero-img"
            />
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding-top: 8rem;
          padding-bottom: 5rem;
          position: relative;
          overflow: hidden;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 3.5rem;
          align-items: center;
        }

        .trust-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.45rem 1.1rem;
          background: rgba(30, 58, 138, 0.08);
          border: 1px solid rgba(30, 58, 138, 0.25);
          border-radius: 999px;
          color: var(--text-light);
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .pill-dot {
          width: 8px;
          height: 8px;
          background: var(--primary);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--primary);
        }

        .hero-main-title {
          font-size: 2.75rem;
          font-weight: 900;
          line-height: 1.25;
          margin-bottom: 1.25rem;
          color: var(--text-light);
        }

        .title-highlight {
          color: var(--secondary);
        }

        .title-cyan {
          color: var(--primary);
        }

        .hero-lead {
          font-size: 1.15rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
          line-height: 1.8;
        }

        .hero-features-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 2.25rem;
        }

        .hero-feat-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: var(--text-light);
          font-weight: 600;
        }

        .feat-icon { color: var(--primary); }
        .feat-icon-gold { color: var(--secondary); }

        .hero-buttons {
          margin-bottom: 2.5rem;
        }

        .btn-hero-main {
          padding: 1rem 2rem;
          font-size: 1.05rem;
        }

        .hero-metrics {
          display: flex;
          align-items: center;
          gap: 1.75rem;
          padding: 1.25rem 1.5rem;
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          backdrop-filter: blur(10px);
          color: #fff;
        }

        .metric-box {
          display: flex;
          flex-direction: column;
        }

        .metric-number {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--secondary);
        }

        .metric-label {
          font-size: 0.8rem;
          color: #e2e8f0;
        }

        .metric-divider {
          width: 1px;
          height: 36px;
          background: rgba(255,255,255,0.2);
        }

        /* Image frame styling */
        .image-frame {
          position: relative;
          border-radius: var(--radius-xl);
          padding: 0.75rem;
          background: var(--bg-card);
          box-shadow: var(--shadow-main);
        }

        .hero-img {
          width: 100%;
          height: 480px;
          object-fit: cover;
          border-radius: var(--radius-lg);
          display: block;
        }

        @media (max-width: 992px) {
          .hero-section { padding-top: 5rem; padding-bottom: 3rem; }
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .hero-main-title { font-size: 2.1rem; }
          .hero-visual { order: -1; }
          .hero-img { height: 300px; }
        }

        .hero-buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: fit-content;
          margin-top: 2rem;
        }
        
        .hero-buttons .btn {
          justify-content: center;
          padding: 0.8rem 1.5rem;
          font-size: 1.05rem;
        }

        .hero-buttons .btn-whatsapp {
          background: #25d366;
          color: white;
          border: none;
        }
        .hero-buttons .btn-whatsapp:hover {
          background: #20ba59;
          color: white;
        }

        @media (max-width: 600px) {
          .hero-section { padding-top: 4rem; padding-bottom: 2.5rem; }
          .hero-main-title { font-size: 1.7rem; }
          .hero-lead { font-size: 0.95rem; }
          .trust-pill { font-size: 0.75rem; padding: 0.35rem 0.75rem; }
          .trust-pill span { max-width: 220px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
          .hero-metrics { gap: 1rem; padding: 1rem; flex-wrap: wrap; justify-content: center; }
          .metric-divider { display: none; }

          .hero-buttons {
             width: 100%;
          }
          .hero-buttons .btn {
             font-size: 0.95rem;
          }

          .metric-box { text-align: center; }
          .hero-img { height: 240px; }
        }
      `}</style>
    </section>
  );
}
