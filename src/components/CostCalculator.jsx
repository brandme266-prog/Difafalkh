import React, { useState } from 'react';
import { Calculator, Building, Calendar, Plus, Minus, Tag, MessageCircle, ArrowLeft } from 'lucide-react';

export default function CostCalculator({ onOpenBooking }) {
  const [propertyPrice, setPropertyPrice] = useState(1500000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [years, setYears] = useState(5);

  const downPaymentAmount = Math.round((propertyPrice * downPaymentPercent) / 100);
  const remainingAmount = propertyPrice - downPaymentAmount;
  const months = years * 12;
  const monthlyInstallment = Math.round(remainingAmount / months);

  const handleWhatsAppOrder = () => {
    const message = `مرحباً، أرغب في حجز وحدة عقارية بناءً على حاسبة الأقساط:
- سعر الوحدة: ${propertyPrice.toLocaleString()} جنيه
- الدفعة المقدمة: ${downPaymentPercent}% (${downPaymentAmount.toLocaleString()} جنيه)
- فترة التقسيط: ${years} سنوات
- القسط الشهري: ${monthlyInstallment.toLocaleString()} جنيه`;
    window.open(`https://wa.me/201555111335?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="calculator" className="section-padding calculator-section">
      <div className="container">
        <div className="text-center-head">
          <div className="section-tag">
            <Calculator size={16} />
            <span>حاسبة الأقساط العقارية</span>
          </div>
          <h2 className="section-title">
            خطط لاستثمارك مع <span className="title-gradient">حاسبة الأقساط</span> المرنة
          </h2>
          <p className="section-subtitle">
            اختر سعر الوحدة ونسبة المقدم وفترة التقسيط التي تناسبك لتحصل على القسط الشهري المتوقع.
          </p>
        </div>

        <div className="calculator-box glass-card">
          <div className="calculator-grid">
            {/* Left Controls */}
            <div className="calc-controls">
              
              {/* Property Price */}
              <div className="calc-group">
                <div className="group-title">
                  <Building color="var(--primary)" size={20} />
                  <span>1. سعر الوحدة العقارية المتوقع (جنيه مصري)</span>
                </div>
                
                <div className="range-container">
                  <div className="range-header">
                    <span>500 ألف</span>
                    <span className="current-val-highlight">{propertyPrice.toLocaleString()} جنيه</span>
                    <span>10 مليون</span>
                  </div>
                  <input 
                    type="range" 
                    min="500000" 
                    max="10000000" 
                    step="100000" 
                    value={propertyPrice} 
                    onChange={(e) => setPropertyPrice(Number(e.target.value))}
                    className="custom-range"
                  />
                </div>
              </div>

              {/* Down Payment */}
              <div className="calc-group">
                <div className="group-title">
                  <Tag color="var(--secondary)" size={20} />
                  <span>2. نسبة الدفعة المقدمة</span>
                </div>

                <div className="type-selector">
                  {[10, 15, 20, 25, 30].map(percent => (
                    <button 
                      key={percent}
                      className={`type-btn ${downPaymentPercent === percent ? 'active' : ''}`}
                      onClick={() => setDownPaymentPercent(percent)}
                    >
                      {percent}%
                    </button>
                  ))}
                </div>
              </div>

              {/* Years */}
              <div className="calc-group">
                <div className="group-title">
                  <Calendar color="var(--primary)" size={20} />
                  <span>3. فترة التقسيط (بالسنوات)</span>
                </div>

                <div className="type-selector">
                  {[3, 4, 5, 6, 7, 10].map(year => (
                    <button 
                      key={year}
                      className={`type-btn ${years === year ? 'active' : ''}`}
                      onClick={() => setYears(year)}
                    >
                      {year} سنوات
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Summary */}
            <div className="calc-summary">
              <div className="summary-card">
                <div className="discount-badge">
                  <Tag size={16} />
                  <span>خطط دفع بدون فوائد</span>
                </div>

                <h3 className="summary-header">ملخص خطة الدفع</h3>

                <div className="summary-breakdown">
                  <div className="summary-line">
                    <span>إجمالي سعر الوحدة:</span>
                    <span>{propertyPrice.toLocaleString()} ج.م</span>
                  </div>
                  <div className="summary-line">
                    <span>الدفعة المقدمة ({downPaymentPercent}%):</span>
                    <span>{downPaymentAmount.toLocaleString()} ج.م</span>
                  </div>
                  <div className="summary-line">
                    <span>المبلغ المتبقي:</span>
                    <span>{remainingAmount.toLocaleString()} ج.م</span>
                  </div>
                  <div className="summary-line text-muted-line">
                    <span>عدد الأشهر:</span>
                    <span>{months} شهر</span>
                  </div>
                </div>

                <div className="final-price-box">
                  <span className="final-label">القسط الشهري التقديري</span>
                  <div className="final-val">
                    <span>{monthlyInstallment.toLocaleString()}</span>
                    <small>ج.م</small>
                  </div>
                  <span className="vat-note">* تخضع هذه الأرقام للمراجعة حسب شروط التعاقد وتوافر الوحدات</span>
                </div>

                <div className="summary-actions">
                  <button className="btn btn-whatsapp w-full" onClick={handleWhatsAppOrder}>
                    <MessageCircle size={18} />
                    إرسال الخطة والتواصل واتساب
                  </button>
                  <button className="btn btn-outline w-full" onClick={onOpenBooking}>
                    طلب معاينة
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .calculator-box {
          padding: 2.5rem;
          background: var(--bg-card);
        }

        .calculator-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 3rem;
        }

        .calc-group {
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border);
        }

        .calc-group:last-child {
          border-bottom: none;
          margin-bottom: 0;
        }

        .group-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-light);
        }

        .range-container {
          padding: 1rem 0;
        }

        .range-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .current-val-highlight {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--primary);
        }

        .custom-range {
          width: 100%;
          accent-color: var(--primary);
        }

        .type-selector {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 1.25rem;
        }

        .type-btn {
          flex: 1;
          min-width: 80px;
          padding: 0.8rem 1.1rem;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border);
          color: var(--text-muted);
          font-family: var(--font-arabic);
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: center;
        }

        .type-btn:hover {
          border-color: var(--primary);
          color: var(--text-light);
        }

        .type-btn.active {
          background: rgba(30, 58, 138, 0.15);
          border-color: var(--primary);
          color: var(--primary);
        }

        /* Summary Card */
        .summary-card {
          background: var(--bg-surface);
          border: 1px solid var(--border-active);
          border-radius: var(--radius-lg);
          padding: 2rem;
          position: sticky;
          top: 6rem;
        }

        .discount-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 0.85rem;
          background: rgba(212, 175, 55, 0.15);
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 999px;
          color: var(--secondary);
          font-size: 0.8rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .summary-header {
          font-size: 1.3rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
        }

        .summary-breakdown {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--border);
          margin-bottom: 1.25rem;
        }

        .summary-line {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .final-price-box {
          text-align: center;
          background: rgba(30, 58, 138, 0.08);
          border: 1px solid rgba(30, 58, 138, 0.2);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .final-label {
          font-size: 0.85rem;
          color: var(--text-muted);
          display: block;
        }

        .final-val {
          font-size: 2.5rem;
          font-weight: 900;
          color: var(--primary);
          line-height: 1.1;
        }

        .final-val small {
          font-size: 0.9rem;
          font-weight: 600;
          margin-right: 0.3rem;
          color: var(--text-light);
        }

        .vat-note {
          font-size: 0.7rem;
          color: var(--text-dim);
          display: block;
          margin-top: 0.5rem;
        }

        .summary-actions {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        @media (max-width: 992px) {
          .calculator-grid {
            grid-template-columns: 1fr;
          }
          .summary-card { position: static; }
        }

        @media (max-width: 600px) {
          .calculator-box { padding: 1.25rem; }
          .group-title { font-size: 0.95rem; }
          .current-val-highlight { font-size: 1.2rem; }
          .type-btn { min-width: 60px; padding: 0.65rem 0.5rem; font-size: 0.85rem; }
          .final-val { font-size: 2rem; }
          .summary-header { font-size: 1.1rem; }
        }
      `}</style>
    </section>
  );
}
