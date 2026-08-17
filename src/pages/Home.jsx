import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonials';
import SEO from '../components/SEO';

export default function Home() {
  const { onOpenBooking } = useOutletContext();

  return (
    <>
      <SEO 
        title="ضفاف الخليج للإعمار والاستثمار العقاري | شاليهات وفيلات للبيع في مرسى مطروح"
        description="شركة ضفاف الخليج للإعمار والاستثمار العقاري - الخيار الأول للاستثمار العقاري في مرسى مطروح. شاليهات وفيلات وشقق تمليك بأنظمة تقسيط مرنة. فيستيفال مطروح، سانتوريني باي. تواصل: 01555111335"
        url="/"
        keywords={['شاليهات مطروح', 'فيلات مطروح', 'شقق تمليك مطروح', 'مشاريع عقارية مطروح', 'وحدات بحرية مطروح']}
      />
      <Hero onOpenBooking={onOpenBooking} />
      
      {/* Projects Slider Section */}
      <Services onOpenBooking={onOpenBooking} />

      {/* Why Choose Us Section */}
      <WhyUs />



      {/* Testimonials Section */}
      <Testimonials />
    </>
  );
}
