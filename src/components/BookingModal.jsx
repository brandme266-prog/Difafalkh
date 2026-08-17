import React, { useState } from 'react';
import { X, Calendar, Phone, MapPin, MessageCircle, Flame, Wind, CheckCircle, ShieldCheck } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [district, setDistrict] = useState('شمال الرياض (الملقا / النرجس / الياسمين)');
  const [service, setService] = useState('تنظيف أفران ومكيفات معاً');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `مرحباً، أرغب في حجز خدمة تنظيف وصيانة بالرياض:
- الاسم: ${name || 'عميل محترم'}
- رقم الجوال: ${phone || 'غير مدخل'}
- الحي / المنطقة: ${district}
- الخدمة المطلوبة: ${service}
- ملاحظات إضافية: ${notes || 'لا يوجد'}`;
    
    window.open(`https://wa.me/966550001122?text=${encodeURIComponent(msg)}`, '_blank');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <div className="modal-header">
          <div className="modal-tag">
            <ShieldCheck size={16} />
            <span>حجز موعد فوري بالرياض • خصم 30%</span>
          </div>
          <h3 className="modal-title">طلب خدمة تنظيف الأفران والمكيفات</h3>
          <p className="modal-desc">أدخل بياناتك وسنتواصل معك خلال 10 دقائق لتأكيد الموعد وإرسال الفني.</p>
        </div>

        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label>الاسم الكريم:</label>
            <input 
              type="text" 
              placeholder="مثال: أبو فهد التميمي"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>رقم الجوال للتواصل:</label>
            <input 
              type="tel" 
              placeholder="0500000000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>الحي / المنطقة بالرياض:</label>
            <select value={district} onChange={(e) => setDistrict(e.target.value)}>
              <option value="شمال الرياض (الملقا / النرجس / الياسمين)">شمال الرياض (الملقا / النرجس / الياسمين / الصحافة)</option>
              <option value="شرق الرياض (الروضة / الحمراء / إشبيلية)">شرق الرياض (الروضة / الحمراء / المونسية / إشبيلية)</option>
              <option value="وسط الرياض (السليمانية / العليا)">وسط الرياض (السليمانية / العليا / المربع)</option>
              <option value="غرب الرياض (السويدي / العريجاء)">غرب الرياض (السويدي / العريجاء / البديعة)</option>
              <option value="جنوب الرياض (العزيزية / الشفاء)">جنوب الرياض (العزيزية / الشفاء / الدار البيضاء)</option>
            </select>
          </div>

          <div className="form-group">
            <label>نوع الخدمة المطلوبة:</label>
            <select value={service} onChange={(e) => setService(e.target.value)}>
              <option value="تنظيف أفران ومكيفات معاً">تنظيف أفران غاز + غسيل مكيفات (عرض الباكيج الشامل)</option>
              <option value="تنظيف وتلميع فرن غاز فقط">تنظيف وتلميع فرن غاز فقط</option>
              <option value="غسيل مكيفات سبليت فقط">غسيل مكيفات سبليت بالضغط فقط</option>
              <option value="صيانة أفران ومطاعم">صيانة أفران ومطاعم / عقود تجارية</option>
            </select>
          </div>

          <div className="form-group">
            <label>ملاحظات أو مواعيد مفضلة:</label>
            <textarea 
              rows="2"
              placeholder="اكتب أية تفاصيل إضافية هنا..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-whatsapp w-full modal-submit">
            <MessageCircle size={18} />
            تأكيد الحجز المباشر عبر واتساب
          </button>
        </form>
      </div>

      <style>{`
        .modal-content {
          position: relative;
          width: 100%;
          max-width: 520px;
          padding: 2.25rem;
          background: #0d1527;
          border: 1px solid var(--border-active);
          border-radius: var(--radius-xl);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.8);
          max-height: 90vh;
          overflow-y: auto;
        }

        .close-btn {
          position: absolute;
          top: 1.25rem;
          left: 1.25rem;
          background: rgba(255, 255, 255, 0.08);
          border: none;
          color: var(--text-muted);
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .close-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          color: #fff;
        }

        .modal-header {
          margin-bottom: 1.5rem;
        }

        .modal-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.3rem 0.8rem;
          background: rgba(37, 211, 102, 0.15);
          border: 1px solid rgba(37, 211, 102, 0.3);
          border-radius: 999px;
          color: #25d366;
          font-size: 0.775rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }

        .modal-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-light);
          margin-bottom: 0.4rem;
        }

        .modal-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .booking-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-light);
        }

        .form-group input, .form-group select, .form-group textarea {
          background: var(--bg-surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 0.75rem 1rem;
          color: var(--text-light);
          font-family: var(--font-arabic);
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.2s;
        }

        .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
          border-color: var(--primary);
        }

        .modal-submit {
          margin-top: 0.5rem;
          padding: 0.9rem;
        }
      `}</style>
    </div>
  );
}
