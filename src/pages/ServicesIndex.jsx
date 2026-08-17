import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Services from '../components/Services';
import BeforeAfter from '../components/BeforeAfter';
import SEO from '../components/SEO';

export default function ServicesIndex() {
  const { onOpenBooking } = useOutletContext();

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <SEO 
        title="مشاريعنا العقارية | فيستيفال مطروح وسانتوريني باي | ضفاف الخليج"
        description="استعرض أحدث مشاريع ضفاف الخليج العقارية في مرسى مطروح: فيستيفال مطروح (سكني تجاري)، سانتوريني باي (قرية سياحية فاخرة)، وإدارة فندق عروس البحر. وحدات للبيع بالتقسيط."
        url="/services"
        keywords={['فيستيفال مطروح', 'سانتوريني باي', 'فندق عروس البحر', 'مشاريع عقارية مطروح', 'قرية سياحية مطروح', 'وحدات تجارية مطروح']}
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold text-center mb-4 text-slate-900">مشاريعنا <span style={{color: 'var(--primary)'}}>العقارية</span></h1>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">نقدم لك مجموعة من أفضل المشاريع العقارية والسياحية التي تجمع بين الفخامة، والموقع الاستراتيجي، والعائد الاستثماري المرتفع.</p>
      </div>
      
      <Services onOpenBooking={onOpenBooking} hideMoreButton={true} />
    </div>
  );
}
