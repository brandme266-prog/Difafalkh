import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Phone, MessageCircle, MapPin, ShieldCheck, Mail } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">
          {/* Col 1: Brand Info */}
          <div className="footer-col col-brand">
            <div className="footer-logo">
              <Building size={24} color="var(--secondary)" />
              <span className="logo-text">ضفاف <span className="highlight">الخليج</span></span>
            </div>
            <p className="footer-about">
              شركة مصرية سعودية رائدة في مجال التطوير العقاري وإدارة المشاريع، بخبرة تمتد لأكثر من 50 عاماً ورأس مال يبلغ 500 مليون جنيه.
            </p>
            <div className="footer-contacts">
              <a href="tel:+201555111335" className="contact-link">
                <Phone size={16} color="var(--primary)" />
                <span>+20 1555111335</span>
              </a>
              <a href="mailto:info@difafalkhleg.com" className="contact-link">
                <Mail size={16} color="var(--primary)" />
                <span>info@difafalkhleg.com</span>
              </a>
              <a href="https://wa.me/201555111335" target="_blank" rel="noreferrer" className="contact-link">
                <MessageCircle size={16} color="#25d366" />
                <span>تواصل عبر الواتساب</span>
              </a>
              <a href="https://www.facebook.com/Difafalkh" target="_blank" rel="noreferrer" className="contact-link">
                <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#1877F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span>صفحتنا على فيسبوك</span>
              </a>
            </div>
          </div>

          {/* Col 2: Services Links */}
          <div className="footer-col">
            <h4 className="footer-title">روابط هامة</h4>
            <ul className="footer-links">
              <li><Link to="/services">مشاريعنا العقارية</Link></li>
              <li><Link to="/about">عن الشركة والقيادة</Link></li>
              <li><Link to="/calculator">حاسبة الأقساط</Link></li>
            </ul>
          </div>

          {/* Col 3: Riyadh Districts Covered (SEO Keywords) */}
          <div className="footer-col">
            <h4 className="footer-title">مناطق المشاريع</h4>
            <ul className="footer-links keywords-grid">
              <li><MapPin size={12} /> محافظة مرسى مطروح</li>
              <li><MapPin size={12} /> منطقة العوام</li>
              <li><MapPin size={12} /> الساحل الشمالي</li>
            </ul>
          </div>

          {/* Col 4: Headquarters */}
          <div className="footer-col">
            <h4 className="footer-title">المقر الرئيسي</h4>
            <ul className="footer-links">
              <li><MapPin size={12} /> مرسي مطروح - شارع الجلاء-برج عمر المختار</li>
            </ul>
          </div>

          {/* Col 5: Quick Action */}
          <div className="footer-col col-action">
            <h4 className="footer-title">بادر بالحجز</h4>
            <p className="discount-text">سجل اهتمامك الآن بأحدث مشاريعنا في مطروح لتصلك أفضل العروض الحصرية.</p>
            <button className="btn btn-primary w-full" onClick={onOpenBooking}>
              تواصل معنا
            </button>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} شركة ضفاف الخليج للإعمار والاستثمار العقاري. جميع الحقوق محفوظة.</p>
          <div className="footer-bottom-badge">
            <ShieldCheck size={16} color="var(--primary)" />
            <span>شريك موثوق</span>
          </div>
        </div>
      </div>

      <style>{`
        .footer-section {
          background: #f8fafc;
          border-top: 1px solid var(--border);
          padding-top: 4rem;
          padding-bottom: 5rem;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr;
          gap: 2rem;
          margin-bottom: 3.5rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }

        .logo-text {
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--text-light);
        }

        .logo-text .highlight { color: var(--primary); }

        .footer-about {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .footer-contacts {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .contact-link {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          color: var(--text-light);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 600;
        }

        .footer-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--text-light);
          margin-bottom: 1.25rem;
          position: relative;
          padding-bottom: 0.5rem;
        }

        .footer-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          right: 0;
          width: 36px;
          height: 2px;
          background: var(--primary);
        }

        .footer-links {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-links a, .footer-links li {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.2s;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .footer-links a:hover {
          color: var(--primary);
        }

        .discount-text {
          font-size: 0.875rem;
          color: var(--text-muted);
          margin-bottom: 1.25rem;
          line-height: 1.6;
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 2rem;
          border-top: 1px solid var(--border);
          font-size: 0.85rem;
          color: var(--text-dim);
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-bottom-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
        }

        @media (max-width: 992px) {
          .footer-top {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 600px) {
          .footer-section {
            padding-bottom: 6rem;
          }
          .footer-top {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
