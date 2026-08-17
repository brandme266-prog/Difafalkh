import React, { useState } from 'react';
import { Eye, Flame, Wind, Sparkles, CheckCircle } from 'lucide-react';

export default function BeforeAfter() {
  const [activeTab, setActiveTab] = useState('oven');

  const showcaseData = {
    oven: {
      title: 'تنظيف وتلميع فرن الغاز الإستانلس',
      beforeImg: '/images/gas_oven.webp',
      afterImg: '/images/hero.webp',
      details: [
        'إزالة دهون وزيوت الطبخ المتراكمة على مدار سنوات',
        'تلميع الشواية الداخلية والأطراف المعدنية بالكامل',
        'تسليك الفونيات لضمان توزيع حراري متساوي ونار زرقاء حارقة'
      ]
    },
    ac: {
      title: 'تنظيف وغسيل المكيف السبليت بضغط الماء',
      beforeImg: '/images/ac_cleaning.webp',
      afterImg: '/images/hero.webp',
      details: [
        'إزالة الأتربة والعفن الأسود من داخل الوحدة الداخلية',
        'تنظيف الفلاتر والمبخر وتطهير مجاري المياه بالمعقمات',
        'تحسين كفاءة التبريد بنسبة تصل إلى 40% وتوفير الكهرباء'
      ]
    }
  };

  const current = showcaseData[activeTab];

  return (
    <section id="before-after" className="section-padding before-after-section">
      <div className="container">
        <div className="text-center-head">
          <div className="section-tag">
            <Eye size={16} />
            <span>معرض نتائج العمل بالرياض</span>
          </div>
          <h2 className="section-title">
            شاهد الفرق <span className="title-gradient">قبل وبعد التنظيف والتلميع</span>
          </h2>
          <p className="section-subtitle">
            نتائج حقيقية ملموسة تبرز دقة وجودة خدماتنا في تنظيف أفران الغاز والمكيفات بأعلى معايير الإتقان.
          </p>
        </div>

        {/* Tabs */}
        <div className="tabs-bar">
          <button 
            className={`tab-btn ${activeTab === 'oven' ? 'active' : ''}`}
            onClick={() => setActiveTab('oven')}
          >
            <Flame size={18} />
            نتائج أفران الغاز
          </button>
          <button 
            className={`tab-btn ${activeTab === 'ac' ? 'active' : ''}`}
            onClick={() => setActiveTab('ac')}
          >
            <Wind size={18} />
            نتائج المكيفات السبليت
          </button>
        </div>

        {/* Comparison Showcase Container */}
        <div className="comparison-card glass-card">
          <div className="comparison-grid">
            {/* Visual Preview */}
            <div className="preview-container">
              <div className="image-side">
                <img src={current.beforeImg} alt="قبل التنظيف" className="showcase-img" />
                <div className="side-badge badge-before">النتيجة الاحترافية المعالجة</div>
              </div>
            </div>

            {/* Showcase Info */}
            <div className="showcase-info">
              <h3 className="showcase-title">{current.title}</h3>

              <div className="results-list">
                {current.details.map((item, idx) => (
                  <div key={idx} className="result-item">
                    <CheckCircle size={20} color="var(--accent)" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="guarantee-box">
                <Sparkles size={24} color="#ffb703" />
                <div>
                  <strong>ضمان النظافة التامة</strong>
                  <p>إذا لم تكن راضياً عن النتيجة 100% سنقوم بإعادة التنظيف فوراً مجاناً!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .before-after-section {
          background: rgba(14, 23, 42, 0.4);
        }

        .tabs-bar {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .tab-btn {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.85rem 1.75rem;
          border-radius: 999px;
          background: var(--bg-surface);
          border: 1px solid var(--border);
          color: var(--text-muted);
          font-family: var(--font-arabic);
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tab-btn:hover {
          color: var(--text-light);
          border-color: var(--primary);
        }

        .tab-btn.active {
          background: linear-gradient(135deg, rgba(0, 210, 255, 0.2) 0%, rgba(255, 183, 3, 0.2) 100%);
          border-color: var(--primary);
          color: var(--text-light);
          box-shadow: 0 8px 20px rgba(0, 210, 255, 0.2);
        }

        .comparison-card {
          padding: 2rem;
        }

        .comparison-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .preview-container {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-main);
        }

        .showcase-img {
          width: 100%;
          height: 380px;
          object-fit: cover;
          display: block;
          border-radius: var(--radius-lg);
        }

        .side-badge {
          position: absolute;
          bottom: 1.25rem;
          right: 1.25rem;
          padding: 0.5rem 1.1rem;
          border-radius: 999px;
          font-size: 0.85rem;
          font-weight: 700;
          backdrop-filter: blur(10px);
        }

        .badge-before {
          background: rgba(6, 11, 23, 0.85);
          color: var(--primary);
          border: 1px solid var(--primary-glow);
        }

        .showcase-title {
          font-size: 1.6rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          color: var(--text-light);
        }

        .results-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .result-item {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          font-size: 1rem;
          color: var(--text-light);
          background: var(--bg-surface);
          padding: 0.85rem 1.25rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border);
        }

        .guarantee-box {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
          background: rgba(255, 183, 3, 0.08);
          border: 1px solid rgba(255, 183, 3, 0.25);
          border-radius: var(--radius-md);
        }

        .guarantee-box strong {
          display: block;
          color: #ffb703;
          font-size: 0.95rem;
        }

        .guarantee-box p {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        @media (max-width: 992px) {
          .comparison-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
