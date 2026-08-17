import React from 'react';
import { useOutletContext } from 'react-router-dom';
import DistrictsSection from '../components/DistrictsSection';
import SEO from '../components/SEO';

export default function DistrictsIndex() {
  const { onOpenBooking } = useOutletContext();

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <SEO 
        title="مناطق وأحياء تغطية خدماتنا بالرياض"
        description="نغطي كافة أحياء الرياض (شمال، شرق، غرب، جنوب، ووسط الرياض) بخدمات سريعة لتنظيف المكيفات والأفران."
        url="/districts"
      />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold text-center mb-4 text-slate-900">الأحياء التي <span className="text-primary">نغطيها</span></h1>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">فريقنا موزع استراتيجياً لضمان الوصول السريع لأي حي داخل مدينة الرياض.</p>
      </div>

      <DistrictsSection onOpenBooking={onOpenBooking} />
    </div>
  );
}
