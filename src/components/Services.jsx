import React from 'react';
import { Building, Sparkles, CheckCircle2, ArrowLeft, Hotel, Image as ImageIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Services({ onOpenBooking, hideMoreButton }) {
  const navigate = useNavigate();

  const galleryImages = [
    '/images/746058237_122098779015397745_153189009337004250_n.jpg',
    '/images/747191090_122098774347397745_3183517935842157000_n.jpg',
    '/images/751563477_122104459185397745_2230517418711025948_n.jpg',
    '/images/752724352_122104272417397745_2249225986981796454_n.jpg',
    '/images/752854634_122104263573397745_1309253397501418774_n.jpg',
    '/images/752854634_122104263573397745_1309253397501418774_n.jpg',
    '/images/753702656_122104323309397745_5632459216239819422_n.jpg',
    '/images/753798902_122104297887397745_1260106829487981917_n.jpg',
    '/images/753893582_122104503969397745_3299663716777960668_n.jpg',
  ];

  return (
    <section id="projects" className="section-padding services-section">
      <div className="container">
        <div className="text-center-head">
          <div className="section-tag-gold">
            <span>أعمالنا الأخيرة</span>
          </div>
          <h2 className="section-title text-dark-blue">
            أعمالنا الأخيرة
          </h2>
          <p className="section-subtitle">
            نفتخر بتقديم أفضل الحلول المعمارية والمشاريع لعملائنا في مرسى مطروح ومختلف أنحاء الجمهورية.
          </p>
        </div>

        {/* Projects Slider */}
        <div className="projects-slider-wrapper">
          <div className="projects-slider">
            {projects.map((proj) => {
              const BadgeIcon = proj.badgeIcon;
              return (
                <div 
                  key={proj.id} 
                  className="project-card cursor-pointer" 
                  onClick={() => navigate(`/services/${proj.id}`)}
                >
                  <div className="project-img-wrapper">
                    <img 
                      src={proj.image} 
                      alt={proj.title} 
                      className="project-img"
                    />
                    <div className="project-badge flex items-center gap-2">
                      <BadgeIcon size={16} />
                      <span>{proj.badge}</span>
                    </div>
                  </div>

                  <div className="project-body">
                    <h3 className="project-title">{proj.title}</h3>
                    <p className="project-desc">{proj.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {!hideMoreButton && (
          <div className="text-center" style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/services" className="btn-outline-gold" style={{ display: 'inline-block', textDecoration: 'none' }}>عرض المزيد من الأعمال</Link>
          </div>
        )}
      </div>

      <style>{`
        .services-section {
          background: #f8fafc;
        }

        .text-center-head {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 3.5rem;
        }

        .section-tag-gold {
          background: #fdfaf3;
          color: #cda434;
          padding: 0.5rem 1.25rem;
          border-radius: 999px;
          font-size: 0.95rem;
          font-weight: 700;
          display: inline-block;
          margin-bottom: 1.25rem;
        }

        .text-dark-blue {
          color: #0f172a;
          font-weight: 900;
          font-size: 2.2rem;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          color: #64748b;
          font-size: 1.05rem;
          max-width: 600px;
          line-height: 1.6;
        }

        .projects-slider-wrapper {
          width: 100%;
          overflow: hidden;
        }

        .projects-slider {
          display: flex;
          gap: 1.5rem;
          overflow-x: auto;
          padding-bottom: 2rem;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none; /* Firefox */
        }
        
        .projects-slider::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }

        .project-card {
          flex: 0 0 calc(33.333% - 1rem);
          min-width: 300px;
          scroll-snap-align: start;
          background: white;
          border-radius: 1.25rem;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          border: 1px solid #f1f5f9;
          transition: transform 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .project-card:hover {
          transform: translateY(-5px);
        }

        .project-img-wrapper {
          position: relative;
          height: 240px;
        }

        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .project-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: #1e293b;
          color: #cda434;
          padding: 0.4rem 1.25rem;
          border-radius: 999px;
          font-size: 0.85rem;
          font-weight: 800;
        }

        .project-body {
          padding: 1.75rem;
          text-align: right;
          flex: 1;
        }

        .project-title {
          font-size: 1.35rem;
          font-weight: 900;
          color: #0f172a;
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }

        .project-desc {
          font-size: 0.95rem;
          color: #64748b;
          line-height: 1.7;
        }

        .btn-outline-gold {
          display: inline-block;
          border: 1.5px solid #cda434;
          color: #cda434;
          background: transparent;
          padding: 0.75rem 2rem;
          border-radius: 0.75rem;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-outline-gold:hover {
          background: #cda434;
          color: white;
        }

        @media (max-width: 1024px) {
          .project-card {
            flex: 0 0 calc(50% - 0.75rem);
          }
        }

        @media (max-width: 768px) {
          .project-card {
            flex: 0 0 85%;
          }
        }
      `}</style>
    </section>
  );
}
