import React from 'react';
import WhyUs from '../components/WhyUs';
import SEO from '../components/SEO';
import { Building, ShieldCheck, Target, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-20 bg-white min-h-screen">
      <SEO 
        title="عن شركة ضفاف الخليج | شراكة مصرية سعودية لتطوير العقارات في مطروح"
        description="تعرف على شركة ضفاف الخليج للإعمار والاستثمار العقاري - شراكة مصرية سعودية فريدة برأس مال 500 مليون جنيه. بقيادة الشيخ رضا بن نغموش وخبرة تفوق 50 عاماً في قطاع التطوير العقاري."
        url="/about"
        keywords={['عن ضفاف الخليج', 'شركة عقارية سعودية مصرية', 'رضا بن نغموش', 'مطور عقاري مطروح', 'استثمار عقاري آمن']}
      />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-slate-900">عن <span style={{color: 'var(--primary)'}}>ضفاف الخليج</span></h1>
        <p className="text-center text-slate-600 mb-16 max-w-3xl mx-auto text-lg leading-relaxed">
          تُعد شركة ضفاف الخليج للإعمار والاستثمار العقاري واحدة من شركات التطوير العقاري المتميزة. وهي حصيلة شراكة مثمرة بين المملكة العربية السعودية ومصر، وتعمل في السوق المصري بخبرة تمتد لـ 5 سنوات، برأس مال قدره 500 مليون جنيه مصري.
        </p>

        {/* Leadership Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10" style={{color: 'var(--primary)'}}>القيادة والإدارة</h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Chairman */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users size={32} style={{color: 'var(--primary)'}} />
              </div>
              <h3 className="text-2xl font-bold text-center mb-2 text-slate-800">الشيخ رضي بن نغموش</h3>
              <h4 className="text-lg text-center mb-6" style={{color: 'var(--secondary)'}}>رئيس مجلس الإدارة</h4>
              <p className="text-slate-600 leading-relaxed text-justify">
                أحد أبرز رجال الأعمال في المملكة العربية السعودية، مع خبرة تتجاوز 50 عاماً في مجال المقاولات. يمتلك في السعودية "شركة الدوحة"، بالإضافة إلى شراكته في شركة "ساديا العالمية للدواجن" بنسبة 30%.
              </p>
            </div>

            {/* CEO */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <ShieldCheck size={32} style={{color: 'var(--primary)'}} />
              </div>
              <h3 className="text-2xl font-bold text-center mb-2 text-slate-800">السيد / عصام سليم</h3>
              <h4 className="text-lg text-center mb-6" style={{color: 'var(--secondary)'}}>الشريك والمدير التنفيذي بمصر</h4>
              <p className="text-slate-600 leading-relaxed text-justify">
                قامة إدارية متميزة تمتلك تاريخاً حافلاً في إدارة المشروعات الهامة برئاسة مجلس الوزراء المصري. يقود عمليات الشركة في مصر بكفاءة لضمان تنفيذ المشاريع وفق أعلى المعايير.
              </p>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-6" style={{color: 'var(--primary)'}}>أبرز المشروعات والاستثمارات الحالية بمحافظة مرسى مطروح</h2>
          <p className="text-center text-slate-600 mb-10 max-w-4xl mx-auto text-lg leading-relaxed">
            تنفذ الشركة حالياً استثمارات ضخمة بالشراكة مع ديوان عام محافظة مطروح وشركة الأهلي مصر (المملوكة لكل من البنك الأهلي المصري وبنك مصر)، حيث تتولى "ضفاف الخليج" دور المطور المنفذ للمشروعات التالية:
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-slate-800" style={{color: 'var(--secondary)'}}>مشروع "فيستيفال مطروح"</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                مشروع سكني تجاري ترفيهي يُعد الأول من نوعه (كُبرى مناطق الترفيه والـ KidZania بالمحافظة)، يُقام على مساحة 3000 متر مربع بمنطقة العوام (خلف فندقي عروس البحر وريم)، وقد بدأت بالفعل أعمال الحفر وتجهيز الموقع للإلكترونيات والإنشاءات.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-slate-800" style={{color: 'var(--secondary)'}}>مشروع "سانتوريني باي"</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                منتجع سياحي فاخر يُقام على مساحة 14 فداناً بمنطقة الأندلسية (بالشراكة مع جمعية النيل لضباط الرقابة الإدارية وشركة الأهلي مصر)، ويضم مجموعة من الفيلات والشاليهات المطلة مباشرة على البحر، بحيرات صناعية (Lagoons)، ومساحات خضراء (Landscape)، وسيتم طرحه قريباً.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-slate-800" style={{color: 'var(--secondary)'}}>إدارة الفنادق</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                تتولى الشركة حالياً إدارة فندق "عروس البحر" المملوك لديوان عام محافظة مرسى مطروح، ونسعى لتقديم أعلى مستويات الخدمة والضيافة.
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-6 rounded-2xl" style={{backgroundColor: 'rgba(30, 58, 138, 0.05)'}}>
            <Target size={32} style={{color: 'var(--primary)'}} className="mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-slate-800">رؤيتنا</h3>
            <p className="text-slate-600 leading-relaxed">
              أن نكون المطور العقاري الأول في منطقة الساحل الشمالي ومرسى مطروح، وتقديم مجتمعات عمرانية متكاملة تجمع بين الفخامة، العصرية، والاستدامة.
            </p>
          </div>
          <div className="p-6 rounded-2xl" style={{backgroundColor: 'rgba(212, 175, 55, 0.05)'}}>
            <Building size={32} style={{color: 'var(--secondary)'}} className="mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-slate-800">مهمتنا</h3>
            <p className="text-slate-600 leading-relaxed">
              بناء شراكات استراتيجية موثوقة مع كبرى الجهات وتطوير مشاريع عقارية استثنائية تلبي تطلعات عملائنا وتحقق لهم أعلى عوائد استثمارية.
            </p>
          </div>
        </div>

      </div>

      <WhyUs />
    </div>
  );
}
