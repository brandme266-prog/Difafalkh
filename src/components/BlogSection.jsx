import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowLeft, Tag, Flame, Wind, ShieldCheck, Search } from 'lucide-react';
import ArticleModal from './ArticleModal';

export default function BlogSection({ onOpenBooking }) {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 1,
      title: 'دليل تنظيف وتلميع أفران الغاز وإزالة الدهون المستعصية بالرياض',
      category: 'تنظيف وتلميع الأفران',
      image: '/images/blog_oven.webp',
      date: '10 أغسطس 2026',
      readTime: '4 دقائق',
      excerpt: 'تعرف على أفضل الممارسات والمواد الإيطالية الآمنة لإزالة الدهون المحروقة على أفران الغاز وتلميع الإستانلس وتسليك الفونيات بالرياض.',
      paragraphs: [
        {
          heading: 'لماذا تتراكم الدهون على أفران الغاز؟',
          text: 'نتيجة الطبخ اليومي واستخدام الزيوت والدهون في المطابخ السعودية، تترسب زيوت الشواء والطهي على سطح الفرن وحول الشوايات والزجاج، مما يسبب انبعاث روائح غير مستحبة وانسداد الفونيات التي تغذي النار.'
        },
        {
          heading: 'خطوات التنظيف الفني المتبع بالرياض',
          text: 'نقوم بفك أغطية الشعلات والمفاتيح ورش مذيبات شحوم إيطالية متخصصة تحلل الدهون المستعصية خلال دقائق، ثم تلميع هيكل الإستانلس الخارجي والداخلي وإعادة تسليك الفونيات لتعود الشعلة باللون الأزرق الصافي والقوي.'
        },
        {
          heading: 'إرشادات المحافظة على سلامة الفرن',
          text: 'ننصح بتنظيف السوائل المسكوبة فوراً بعد برد الفرن مباشرة، وعدم استخدام الآلات الحادة التي تخدش طبقة حماية الإستانلس.'
        }
      ]
    },
    {
      id: 2,
      title: 'أهمية غسيل مكيفات السبليت بالضغط العالي وتوفير استهلاك الكهرباء بالرياض',
      category: 'تنظيف وتبريد المكيفات',
      image: '/images/blog_ac.webp',
      date: '8 أغسطس 2026',
      readTime: '5 دقائق',
      excerpt: 'طرق غسيل المكيفات السبليت بالضغط العالي والغلاف المائي الحافظ، وكيف يساهم الغسيل الدوري في خفض فاتورة الكهرباء ورفع التبريد 40%.',
      paragraphs: [
        {
          heading: 'تأثير الأتربة والعوالق على كفاءة التبريد بالرياض',
          text: 'تتميز أجواء مدينة الرياض بالغبار والأتربة الموسمية، والتي تسد فلاتر المكيف والمبخر الداخلي والمروحة، مما يعيق حركة الهواء ويجبر الكومبروسر على العمل المستمر وبالتالي ارتفاع استهلاك الكهرباء.'
        },
        {
          heading: 'مميزات الغسيل بمضخة الضغط العالي بالغطاء الواقي',
          text: 'يتميز الغسيل بالضغط بقدرته على اختراق أجزاء المبخر الشديدة الضيق وإزالة العفن والبكتيريا، مع استخدام كيس غسيل مخصص يعزل الجدران والأرضيات تماماً دون قطرة ماء واحدة على السجاد.'
        },
        {
          heading: 'فحص ضغط الفريون الأمريكي',
          text: 'يتضمن الغسيل الشامل قياس ضغط الفريون وتزويده بإنتاج أمريكي أصلي لضمان برودة فورية وهواء صحي نقي لك ولأسرتك.'
        }
      ]
    },
    {
      id: 3,
      title: 'كيف تختار أفضل شركة تنظيف مكيفات وأفران في أحياء الرياض مع الضمان؟',
      category: 'دليل خدمات الرياض',
      image: '/images/blog_team.webp',
      date: '5 أغسطس 2026',
      readTime: '3 دقائق',
      excerpt: 'معايير اختيار شركات التنظيف الموثوقة بالرياض، التأكد من فحص الأمان للغاز، والضمان الكتابي على استمرارية التبريد وعدم اتساخ المنزل.',
      paragraphs: [
        {
          heading: 'معايير الجودة والالتزام في خدمات المنزل',
          text: 'عند اختيار شركة لتنظيف الأفران أو المكيفات بالرياض، يجب التأكد من امتلاكها عمالة فنية مدربة، استخدام أدوات ومعدات معزولة، وتقديم ضمان حقيقي مكتوب على الخدمة.'
        },
        {
          heading: 'سرعة الوصول وتغطية أحياء الرياض',
          text: 'تتيح الشركة المتطورة سيارات خدمة سريعة مجهزة بالكامل لخدمة أحياء الرياض (الصحافة، الملقا، النرجس، الياسمين، الروضة، الحمراء) والوصول في أقل من 45 دقيقة.'
        }
      ]
    }
  ];

  return (
    <section id="blog" className="section-padding blog-section">
      <div className="container">
        <div className="text-center-head">
          <div className="section-tag">
            <BookOpen size={16} />
            <span>مدونة ومقالات الـ SEO والمعرفة بالرياض</span>
          </div>
          <h2 className="section-title">
            دليل المقالات والنصائح <span className="title-gradient">لتنظيف الأفران والمكيفات</span>
          </h2>
          <p className="section-subtitle">
            مقالات حصرية ومحدثة تساعدك في الحفاظ على سلامة أفران الغاز ورفع كفاءة تبريد المكيفات بالرياض.
          </p>
        </div>

        {/* Articles Cards Grid */}
        <div className="articles-grid">
          {articles.map((art) => (
            <article key={art.id} className="article-card glass-card">
              <div className="art-img-wrapper">
                <img src={art.image} alt={art.title} className="art-img" />
                <span className="art-category">{art.category}</span>
              </div>

              <div className="art-body">
                <div className="art-meta">
                  <span><Calendar size={14} /> {art.date}</span>
                  <span><Clock size={14} /> {art.readTime}</span>
                </div>

                <h3 className="art-title">{art.title}</h3>
                <p className="art-excerpt">{art.excerpt}</p>

                <button 
                  className="btn btn-outline art-read-btn"
                  onClick={() => setSelectedArticle(art)}
                >
                  <span>قراءة المقالة بالكامل</span>
                  <ArrowLeft size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Full Article Reader Modal */}
      <ArticleModal 
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenBooking={onOpenBooking}
      />

      <style>{`
        .blog-section {
          background: rgba(14, 23, 42, 0.3);
        }

        .articles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 2rem;
        }

        .article-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          height: 100%;
        }

        .art-img-wrapper {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .art-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .article-card:hover .art-img {
          transform: scale(1.06);
        }

        .art-category {
          position: absolute;
          top: 1rem;
          right: 1rem;
          padding: 0.35rem 0.85rem;
          background: rgba(2, 132, 199, 0.85);
          backdrop-filter: blur(10px);
          color: #fff;
          font-size: 0.8rem;
          font-weight: 700;
          border-radius: 999px;
        }

        .art-body {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .art-meta {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          font-size: 0.8rem;
          color: var(--text-dim);
          margin-bottom: 0.75rem;
        }

        .art-meta span {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .art-title {
          font-size: 1.2rem;
          font-weight: 800;
          line-height: 1.4;
          margin-bottom: 0.85rem;
          color: var(--text-light);
        }

        .art-excerpt {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex: 1;
        }

        .art-read-btn {
          width: 100%;
          justify-content: space-between;
        }
      `}</style>
    </section>
  );
}
