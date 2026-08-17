import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, MessageCircle, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/projects';
import SEO from '../components/SEO';

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <Navigate to="/services" />;
  }

  const BadgeIcon = project.badgeIcon;

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <SEO 
        title={`${project.title} | ضفاف الخليج`}
        description={project.desc}
        url={`/services/${project.id}`}
        keywords={[project.title, 'مشاريع عقارية', 'مرسى مطروح', 'ضفاف الخليج']}
      />
      
      <div className="container mx-auto px-4 py-12">
        <Link to="/services" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 mb-8 transition-colors">
          <ArrowLeft size={20} />
          <span className="font-bold">العودة للمشاريع</span>
        </Link>

        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100">
          <div className="relative h-64 md:h-96 lg:h-[500px] w-full">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-slate-900 text-yellow-500 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-sm md:text-base font-bold flex items-center gap-2 shadow-lg">
              <BadgeIcon size={18} />
              <span>{project.badge}</span>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
              <div>
                <h1 className="text-4xl font-extrabold text-slate-900 mb-4">{project.title}</h1>
                <span className="inline-block bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-bold">
                  الحالة: {project.status}
                </span>
              </div>
              <a 
                href={project.actionLink}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white shadow-lg whitespace-nowrap"
                style={{ background: '#25d366' }}
              >
                <MessageCircle size={20} />
                {project.actionText} عبر واتساب
              </a>
            </div>

            <div className="prose prose-lg prose-slate text-slate-600 max-w-none font-arabic leading-relaxed mb-10 whitespace-pre-wrap">
              {project.fullDetails}
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-10">
              <h3 className="text-xl font-bold text-slate-900 mb-4">أهم مميزات المشروع</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 font-semibold">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.gallery && project.gallery.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">معرض الصور</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {project.gallery.map((img, idx) => (
                    <div key={idx} className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow aspect-video sm:aspect-square md:aspect-video bg-slate-100 relative group">
                      <img 
                        src={img} 
                        alt={`${project.title} - صورة ${idx + 1}`} 
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
