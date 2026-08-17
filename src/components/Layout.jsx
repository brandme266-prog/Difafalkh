import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { Phone, MessageCircle } from 'lucide-react';

export default function Layout() {
  const [theme, setTheme] = useState('light'); // Automatic Light Mode
  const [activeTab, setActiveTab] = useState('home');
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleOpenBooking = () => {
    window.open("https://wa.me/201555111335?text=السلام%20عليكم،%20أرغب%20في%20الاستفسار%20عن%20مشاريع%20شركة%20ضفاف%20الخليج", "_blank");
  };

  return (
    <div className="app-main-wrapper">
      <Navbar 
        onOpenBooking={handleOpenBooking} 
        theme={theme}
        onToggleTheme={handleToggleTheme}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <main>
        {/* Render child routes here and pass down booking handler */}
        <Outlet context={{ onOpenBooking: handleOpenBooking }} />
      </main>

      <Footer onOpenBooking={handleOpenBooking} />

      <div className="floating-actions">
        <a 
          href="https://wa.me/201555111335?text=السلام%20عليكم،%20أرغب%20في%20استفسار%20عن%20مشاريع%20الشركة" 
          target="_blank" 
          rel="noreferrer"
          className="float-btn float-whatsapp"
          title="تواصل عبر الواتساب المباشر"
        >
          <MessageCircle size={26} />
          <span className="pulse-ring"></span>
        </a>

        <a 
          href="tel:+201555111335" 
          className="float-btn float-call"
          title="اتصال هاتفي مباشر"
        >
          <Phone size={24} />
        </a>

        <a 
          href="https://www.facebook.com/Difafalkh" 
          target="_blank" 
          rel="noreferrer"
          className="float-btn float-fb"
          title="صفحتنا على فيسبوك"
          style={{ background: '#1877F2', color: 'white' }}
        >
          <svg width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
