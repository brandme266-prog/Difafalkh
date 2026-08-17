import React from 'react';
import { useOutletContext } from 'react-router-dom';
import CostCalculator from '../components/CostCalculator';
import SEO from '../components/SEO';

export default function CalculatorPage() {
  const { onOpenBooking } = useOutletContext();

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <SEO 
        title="حاسبة أقساط الوحدات العقارية | ضفاف الخليج - احسب قسطك الشهري"
        description="احسب قسطك الشهري لشراء شاليه أو فيلا أو شقة في مرسى مطروح. حاسبة أقساط عقارية مجانية من ضفاف الخليج للإعمار. أنظمة تقسيط تصل إلى 10 سنوات بدفعة مقدمة من 10%."
        url="/calculator"
        keywords={['حاسبة اقساط عقارات', 'تقسيط شاليه مطروح', 'سعر وحدة مطروح', 'قسط شهري عقار مطروح']}
      />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold text-center mb-4 text-slate-900">حاسبة <span className="text-primary">الأقساط العقارية</span></h1>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">احسب قسطك الشهري لشراء وحدتك في مرسى مطروح. أنظمة تقسيط مرنة تصل إلى 10 سنوات بدفعة مقدمة تبدأ من 10%.</p>
      </div>

      <CostCalculator onOpenBooking={onOpenBooking} />
    </div>
  );
}
