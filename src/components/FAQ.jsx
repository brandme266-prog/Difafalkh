import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'كم يستغرق الوقت لتنظيف فرن الغاز بالكامل؟',
      a: 'يستغرق تنظيف وتلميع فرن الغاز وتسليك الفونيات عادة من 45 إلى 75 دقيقة حسب حجم الفرن ودرجة تراكم الدهون، ويتم ذلك بالكامل داخل منزلك دون الحاجة لنقله.'
    },
    {
      q: 'هل تنظيف المكيفات يتسبب في اتساخ الجدران أو السجاد؟',
      a: 'مطلقاً! نستخدم أغطية غسيل مخصصة محكمة الإغلاق تصب المياه المتسخة مباشرة في جراديل خارجية معزولة لحماية الأثاث والسجاد والجدران تماماً.'
    },
    {
      q: 'ما هي الأحياء التي تغطونها داخل مدينة الرياض؟',
      a: 'نغطي جميع أحياء مدينة الرياض: أحياء الشمال (الصحافة، النرجس، الملقا، الياسمين، العارض، حطين)، أحياء الشرق (الروضة، الحمراء، المونسية، إشبيلية)، والغرب والجنوب.'
    },
    {
      q: 'هل توفرون ضماناً على غسيل المكيفات وتعبئة الفريون؟',
      a: 'نعم، نوفر ضماناً كتابياً على جودة التبريد وعدم تقطير المياه، بالإضافة لتوفير فريون أمريكي أصلي مع فحص ضغط الدائرة بالكامل.'
    },
    {
      q: 'كيف يمكنني حجز موعد والحصول على خصم الـ 30%؟',
      a: 'يمكنك الحجز بسهولة عبر الضغط على زر "حجز موعد فوري" بالموقع أو التواصل عبر الواتساب المباشر وسيقوم ممثل الخدمة بتأكيد الموعد وإرسال الفني في الوقت المحدد.'
    }
  ];

  return (
    <section id="faq" className="section-padding faq-section">
      <div className="container">
        <div className="text-center-head">
          <div className="section-tag">
            <HelpCircle size={16} />
            <span>الأسئلة الشائعة والمعلومات</span>
          </div>
          <h2 className="section-title">
            إجابات على أهم <span className="title-gradient">أسئلتك واستفساراتك</span>
          </h2>
          <p className="section-subtitle">
            كل ما تود معرفته عن طريقة عملنا، الضمان، والخدمات المقدمة في الرياض.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`faq-card glass-card ${isOpen ? 'open' : ''}`}
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              >
                <div className="faq-header">
                  <h3 className="faq-question">{item.q}</h3>
                  <ChevronDown className={`faq-arrow ${isOpen ? 'arrow-up' : ''}`} size={20} />
                </div>
                {isOpen && (
                  <div className="faq-body">
                    <p className="faq-answer">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .faq-list {
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .faq-card {
          padding: 1.25rem 1.75rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .faq-card.open {
          border-color: var(--border-active);
          background: var(--bg-card-hover);
        }

        .faq-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .faq-question {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-light);
        }

        .faq-arrow {
          color: var(--primary);
          transition: transform 0.3s ease;
        }

        .arrow-up {
          transform: rotate(180deg);
        }

        .faq-body {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border);
        }

        .faq-answer {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.75;
        }
      `}</style>
    </section>
  );
}
