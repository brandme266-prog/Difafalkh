import React from 'react';
import { ShieldCheck, TrendingUp, Award, Sparkles, Building, Users, HeartHandshake, MapPin } from 'lucide-react';

export default function WhyUs() {
  const advantages = [
    {
      icon: Users,
      title: 'شراكة مصرية سعودية',
      desc: 'تحالف قوي يجمع بين الخبرات المحلية والعالمية لتقديم مشاريع عقارية استثنائية تلبي تطلعات السوقين.'
    },
    {
      icon: TrendingUp,
      title: 'رأس مال ضخم',
      desc: 'نعمل برأس مال يبلغ 500 مليون جنيه مصري، مما يضمن الاستقرار المالي والقدرة على تنفيذ أضخم المشاريع.'
    },
    {
      icon: Award,
      title: 'خبرة تزيد عن 50 عاماً',
      desc: 'تاريخ طويل من الإنجازات والنجاحات المتتالية في قطاع المقاولات والتطوير العقاري.'
    },
    {
      icon: ShieldCheck,
      title: 'ضمان الاستثمار',
      desc: 'شراكات استراتيجية مع كبرى البنوك والجهات الحكومية توفر أعلى معايير الأمان لمستثمرینا وعملائنا.'
    },
    {
      icon: Building,
      title: 'تنوع المشاريع',
      desc: 'نقدم وحدات سكنية، تجارية، وإدارية، بالإضافة إلى المنتجعات السياحية وإدارة الفنادق في أبرز المواقع.'
    },
    {
      icon: MapPin,
      title: 'مواقع استراتيجية',
      desc: 'نختار مواقع مشاريعنا بعناية فائقة لضمان أعلى عائد استثماري وقربها من أهم المحاور الرئيسية والخدمات.'
    }
  ];

  return (
    <section id="why-us" className="section-padding why-us-section">
      <div className="container">
        <div className="text-center-head">
          <div className="section-tag">
            <Sparkles size={16} />
            <span>معايير الجودة والاحترافية</span>
          </div>
          <h2 className="section-title">
            لماذا تختار <span className="title-gradient">ضفاف الخليج؟</span>
          </h2>
          <p className="section-subtitle">
            نجمع بين القوة المالية، الخبرة الطويلة، والرؤية المستقبلية لنقدم لك أفضل خيارات السكن والاستثمار.
          </p>
        </div>

        <div className="advantages-grid">
          {advantages.map((adv, index) => {
            const Icon = adv.icon;
            return (
              <div key={index} className="adv-card glass-card">
                <div className="adv-icon-box">
                  <Icon size={26} color="var(--primary)" />
                </div>
                <h3 className="adv-title">{adv.title}</h3>
                <p className="adv-desc">{adv.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .advantages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        @media (max-width: 600px) {
          .advantages-grid { grid-template-columns: 1fr; gap: 1.25rem; }
          .adv-card { padding: 1.5rem; }
          .adv-title { font-size: 1.1rem; }
        }

        .adv-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .adv-card:hover {
          transform: translateY(-5px);
        }

        .adv-icon-box {
          width: 54px;
          height: 54px;
          border-radius: var(--radius-md);
          background: rgba(30, 58, 138, 0.12);
          border: 1px solid rgba(30, 58, 138, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .adv-title {
          font-size: 1.25rem;
          font-weight: 800;
          margin-bottom: 0.75rem;
          color: var(--text-light);
        }

        .adv-desc {
          font-size: 0.925rem;
          color: var(--text-muted);
          line-height: 1.75;
        }
      `}</style>
    </section>
  );
}
