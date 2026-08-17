import React from 'react';
import { MapPin, Navigation, Clock, ShieldCheck, ArrowLeft, Zap, MessageCircle } from 'lucide-react';

export default function DistrictsSection({ onOpenBooking }) {
  const regions = [
    {
      name: 'أحياء شمال الرياض',
      badge: 'سرعة وصول 35 دقيقة',
      color: '#0284c7',
      districts: ['حي الصحافة', 'حي الملقا', 'حي النرجس', 'حي الياسمين', 'حي العارض', 'حي حطين', 'حي الوادي', 'حي الغدير']
    },
    {
      name: 'أحياء شرق الرياض',
      badge: 'سرعة وصول 40 دقيقة',
      color: '#d97706',
      districts: ['حي الروضة', 'حي الحمراء', 'حي إشبيلية', 'حي المونسية', 'حي القرنفل', 'حي اليرموك', 'حي الخليج', 'حي النهضة']
    },
    {
      name: 'أحياء وسط وغرب الرياض',
      badge: 'سرعة وصول 45 دقيقة',
      color: '#059669',
      districts: ['حي السليمانية', 'حي العليا', 'حي المربع', 'حي السويدي', 'حي العريجاء', 'حي البديعة', 'حي المعذر', 'حي المحمدية']
    },
    {
      name: 'أحياء جنوب الرياض',
      badge: 'سرعة وصول 45 دقيقة',
      color: '#a855f7',
      districts: ['حي العزيزية', 'حي الشفاء', 'حي الدار البيضاء', 'حي المنصورة', 'حي غبيرة', 'حي الحائر']
    }
  ];

  return (
    <section id="districts" className="section-padding districts-section">
      <div className="container">
        <div className="text-center-head">
          <div className="section-tag">
            <Navigation size={16} />
            <span>نغطي كافة أحياء ومناطق الرياض</span>
          </div>
          <h2 className="section-title">
            تغطية شاسعة وسريعة <span className="title-gradient">لجميع أحياء مدينة الرياض</span>
          </h2>
          <p className="section-subtitle">
            أسطول سيارات خدمة مجهز بالكامل يضم فنيين متخصصين جاهزون للوصول إلى منزلك في وقت قياسي.
          </p>
        </div>

        {/* Regions Grid */}
        <div className="regions-grid">
          {regions.map((reg, idx) => (
            <div key={idx} className="region-card glass-card">
              <div className="region-header">
                <div className="reg-icon-box">
                  <MapPin size={22} color={reg.color} />
                </div>
                <div>
                  <h3 className="reg-title">{reg.name}</h3>
                  <span className="reg-badge">{reg.badge}</span>
                </div>
              </div>

              <div className="districts-tags-wrap">
                {reg.districts.map((dist, dIdx) => (
                  <span key={dIdx} className="district-chip">
                    {dist}
                  </span>
                ))}
              </div>

              <div className="region-footer">
                <button className="btn btn-outline w-full" onClick={onOpenBooking}>
                  <span>طلب فني إلى {reg.name}</span>
                  <ArrowLeft size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Call Box */}
        <div className="emergency-banner glass-card">
          <div className="emergency-info">
            <div className="flex-align">
              <Zap size={24} color="#ffb703" />
              <div>
                <h3>هل تحتاج إلى فني طوارئ لـ أفران الغاز أو التكييف بالرياض؟</h3>
                <p>خدمة صيانة وتنظيف سريعة 24 ساعة طوال أيام الأسبوع بما فيها العطلات والجمع.</p>
              </div>
            </div>
          </div>
          <div className="emergency-actions">
            <a href="tel:0550001122" className="btn btn-primary">
              <Clock size={18} />
              اتصال طوارئ 0550001122
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .districts-section {
          background: rgba(6, 11, 23, 0.5);
        }

        .regions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.75rem;
          margin-bottom: 3.5rem;
        }

        .region-card {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .region-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .reg-icon-box {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background: rgba(2, 132, 199, 0.1);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .reg-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--text-light);
        }

        .reg-badge {
          font-size: 0.75rem;
          color: var(--primary);
          font-weight: 600;
        }

        .districts-tags-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.75rem;
        }

        .district-chip {
          padding: 0.35rem 0.75rem;
          background: var(--bg-surface);
          border: 1px solid var(--border);
          border-radius: 999px;
          font-size: 0.8rem;
          color: var(--text-muted);
          transition: all 0.2s;
        }

        .district-chip:hover {
          border-color: var(--primary);
          color: var(--primary);
        }

        .emergency-banner {
          padding: 2.25rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
          background: linear-gradient(135deg, rgba(2, 132, 199, 0.12) 0%, rgba(217, 119, 6, 0.12) 100%);
          border: 1px solid var(--border-active);
        }

        .flex-align {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .emergency-info h3 {
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--text-light);
          margin-bottom: 0.25rem;
        }

        .emergency-info p {
          font-size: 0.9rem;
          color: var(--text-muted);
        }
      `}</style>
    </section>
  );
}
