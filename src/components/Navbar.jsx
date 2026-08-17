import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Flame, Wind, Calendar, Menu, X, Sun, Moon, MapPin, Clock, Tag, Mail } from 'lucide-react';

export default function Navbar({ onOpenBooking, theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'الرئيسية' },
    { path: '/services', label: 'مشاريعنا' },
    { path: '/calculator', label: 'حاسبة الأقساط' },
    { path: '/about', label: 'عن الشركة' },
    { path: '/blog', label: 'المقالات' }
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Ultra Compact Top Bar */}
      <div className="top-announcement-bar">
        <div className="container announcement-content">
          <div className="announcement-left">
            <div className="live-discount-tag">
              <Tag size={12} />
              <span>أحدث المشاريع</span>
            </div>
            <span className="ticker-text">
              شركة ضفاف الخليج للإعمار والاستثمار العقاري • إطلاق مشروع فيستيفال مطروح
            </span>
          </div>

          <div className="announcement-right">
            <a href="mailto:info@difafalkhleg.com" className="top-call-link">
              <Mail size={11} />
              <span>info@difafalkhleg.com</span>
            </a>
            <a href="tel:+201555111335" className="top-call-link">
              <Phone size={11} />
              <span>+20 1555111335</span>
            </a>
          </div>
        </div>
      </div>

      {/* Compact Header */}
      <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Brand Logo */}
          <Link to="/" className="navbar-brand" onClick={handleNavClick}>
            <div className="logo-icon-box">
              <img src="/logo.jpg" alt="ضفاف الخليج" className="logo-img" />
            </div>
            <div className="brand-text">
              <span className="brand-name">ضفاف <span className="highlight">الخليج</span></span>
              <span className="brand-tagline">للإعمار والاستثمار العقاري</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="desktop-nav">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link-btn ${location.pathname === item.path ? 'active' : ''}`}
              >
                <span>{item.label}</span>
                {item.badge && <span className="nav-badge-new">{item.badge}</span>}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="navbar-actions">
            <a href="tel:+201555111335" className="btn btn-outline nav-phone-btn compact-nav-btn" aria-label="اتصل بنا هاتفياً">
              <Phone size={16} />
              <span dir="ltr">+20 155 511 1335</span>
            </a>

            <button className="btn btn-primary compact-nav-btn" onClick={onOpenBooking} aria-label="احجز وحدتك الآن">
              <Calendar size={14} />
              <span>احجز وحدتك الآن</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <nav className="mobile-nav-links">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`mobile-nav-btn ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={handleNavClick}
                >
                  <span>{item.label}</span>
                  {item.badge && <span className="nav-badge-new">{item.badge}</span>}
                </Link>
              ))}
              
              <div className="mobile-menu-actions">
                <button className="btn btn-outline w-full" onClick={onToggleTheme}>
                  {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                  <span>{theme === 'light' ? 'تفعيل الوضع الداكن' : 'تفعيل الوضع الفاتح'}</span>
                </button>

                <button 
                  className="btn btn-primary w-full"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                >
                  <Calendar size={16} />
                  احجز وحدتك الآن
                </button>
                <a 
                  href="https://wa.me/201555111335?text=السلام%20عليكم،%20أرغب%20في%20الاستفسار%20عن%20مشاريع%20الشركة" 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn btn-whatsapp w-full"
                >
                  <MessageCircle size={16} />
                  تواصل واتساب مباشر
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      <style>{`
        /* Ultra Compact Top Announcement Bar */
        .top-announcement-bar {
          background: linear-gradient(90deg, #0284c7 0%, #0369a1 50%, #d97706 100%);
          color: #ffffff;
          padding: 0.15rem 0;
          font-size: 0.725rem;
          font-weight: 600;
          position: relative;
          z-index: 950;
          line-height: 1.2;
        }

        .announcement-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
        }

        .announcement-left {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .live-discount-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.2rem;
          background: rgba(255, 255, 255, 0.22);
          padding: 0.05rem 0.4rem;
          border-radius: 999px;
          font-size: 0.65rem;
          font-weight: 800;
        }

        .ticker-text {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .announcement-right {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .announcement-info {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          opacity: 0.95;
        }

        .top-call-link {
          color: #ffffff;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-weight: 700;
          background: rgba(0, 0, 0, 0.15);
          padding: 0.05rem 0.5rem;
          border-radius: 999px;
        }

        /* Compact Main Navbar Header */
        .navbar-header {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          z-index: 900;
          padding: 0.45rem 0;
          transition: all 0.25s ease;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
        }
        [data-theme="dark"] .navbar-header {
          background: rgba(6, 11, 23, 0.9);
        }

        .navbar-scrolled {
          padding: 0.35rem 0;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
        }
        [data-theme="dark"] .navbar-scrolled {
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          text-decoration: none;
        }

        .logo-icon-box {
          position: relative;
          width: 72px;
          height: 72px;
          border-radius: var(--radius-md);
          background: #ffffff;
          border: 1.5px solid rgba(212, 175, 55, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(30, 58, 138, 0.15);
          flex-shrink: 0;
        }

        .logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 4px;
        }

        .icon-flame { color: #d97706; }
        [data-theme="dark"] .icon-flame { color: #ffb703; }
        .icon-wind { color: #0284c7; margin-right: -4px; }
        [data-theme="dark"] .icon-wind { color: #00d2ff; }

        .brand-text {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--text-light);
          line-height: 1.1;
        }

        .brand-name .highlight {
          color: var(--primary);
        }

        .brand-tagline {
          font-size: 0.675rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          background: rgba(0, 0, 0, 0.03);
          padding: 0.2rem 0.35rem;
          border-radius: 999px;
          border: 1px solid var(--border);
        }
        [data-theme="dark"] .desktop-nav {
          background: rgba(255, 255, 255, 0.04);
        }

        .nav-link-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-family: var(--font-arabic);
          font-size: 0.8rem;
          font-weight: 700;
          cursor: pointer;
          padding: 0.3rem 0.65rem;
          border-radius: 999px;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .nav-link-btn:hover {
          color: var(--primary);
        }

        .nav-link-btn.active {
          color: #ffffff;
          background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
          box-shadow: 0 2px 8px rgba(2, 132, 199, 0.3);
        }

        .nav-badge-new {
          font-size: 0.6rem;
          background: #ef4444;
          color: #fff;
          padding: 0.08rem 0.35rem;
          border-radius: 999px;
          font-weight: 800;
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .compact-nav-btn {
          padding: 0.45rem 0.95rem;
          font-size: 0.8rem;
          border-radius: var(--radius-sm);
        }

        .theme-toggle-btn {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--bg-surface);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .theme-toggle-btn:hover {
          border-color: var(--primary);
          transform: scale(1.05);
        }

        .mobile-toggle {
          display: none;
          background: transparent;
          border: none;
          color: var(--text-light);
          cursor: pointer;
          padding: 0.2rem;
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: var(--bg-surface);
          border-bottom: 1px solid var(--border);
          padding: 1.25rem;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .mobile-nav-btn {
          background: transparent;
          border: none;
          color: var(--text-light);
          font-family: var(--font-arabic);
          font-size: 0.95rem;
          font-weight: 600;
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          text-align: right;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .mobile-nav-btn.active {
          color: var(--primary);
        }

        .mobile-menu-actions {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          margin-top: 0.85rem;
        }

        @media (max-width: 1024px) {
          .desktop-nav, .nav-phone-btn, .announcement-right { display: none; }
          .mobile-toggle { display: block; }
          .navbar-header { top: 0; }
        }

        @media (max-width: 600px) {
          .top-announcement-bar { font-size: 0.65rem; padding: 0.1rem 0; }
          .ticker-text { max-width: 55vw; overflow: hidden; text-overflow: ellipsis; }
          .brand-tagline { display: none; }
          .compact-nav-btn span { display: none; }
          .compact-nav-btn { padding: 0.45rem; min-width: 36px; justify-content: center; }
          .navbar-actions { gap: 0.25rem; }
        }
      `}</style>
    </>
  );
}
