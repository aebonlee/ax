import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from './SEOHead';
import type { ReactElement, ReactNode } from 'react';

export interface GuideSection {
  id: string;
  icon: string;
  labelKo: string;
  labelEn: string;
  content: ReactNode;
}

interface GuidePageProps {
  titleKo: string;
  titleEn: string;
  subtitleKo: string;
  subtitleEn: string;
  icon: string;
  iconColor: string;
  path: string;
  sections: GuideSection[];
}

export default function GuidePage({ titleKo, titleEn, subtitleKo, subtitleEn, icon, iconColor, path, sections }: GuidePageProps): ReactElement {
  const { language } = useLanguage();
  const isKo = language === 'ko';
  const [activeSection, setActiveSection] = useState(sections[0]?.id || '');

  const currentIndex = sections.findIndex(s => s.id === activeSection);

  const goTo = (id: string) => {
    setActiveSection(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead title={isKo ? titleKo : titleEn} description={isKo ? subtitleKo : subtitleEn} path={path} />
      <section className="guide-page">
        <div className="container">
          <div className="guide-header">
            <div className="guide-icon" style={{ background: iconColor }}>
              <i className={`fa-solid ${icon}`} />
            </div>
            <div>
              <h1 className="guide-title">{isKo ? titleKo : titleEn}</h1>
              <p className="guide-subtitle">{isKo ? subtitleKo : subtitleEn}</p>
            </div>
          </div>

          <div className="guide-layout">
            {/* Sidebar */}
            <aside className="guide-sidebar">
              <h4 className="sidebar-title">{isKo ? '목차' : 'Contents'}</h4>
              <ul className="sidebar-nav">
                {sections.map(section => (
                  <li key={section.id}>
                    <button
                      className={`sidebar-item ${activeSection === section.id ? 'active' : ''}`}
                      onClick={() => goTo(section.id)}
                    >
                      <i className={`fa-solid ${section.icon}`} />
                      <span>{isKo ? section.labelKo : section.labelEn}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Main Content */}
            <div className="guide-main">
              {sections.map(section => (
                activeSection === section.id && (
                  <div key={section.id} className="guide-active-section">
                    {section.content}
                  </div>
                )
              ))}

              {/* Prev / Next */}
              <div className="guide-nav-buttons">
                <button
                  className="guide-nav-btn prev"
                  disabled={currentIndex <= 0}
                  onClick={() => currentIndex > 0 && goTo(sections[currentIndex - 1].id)}
                >
                  <i className="fa-solid fa-chevron-left" />
                  <span>{currentIndex > 0 ? (isKo ? sections[currentIndex - 1].labelKo : sections[currentIndex - 1].labelEn) : ''}</span>
                </button>
                <span className="guide-nav-counter">{currentIndex + 1} / {sections.length}</span>
                <button
                  className="guide-nav-btn next"
                  disabled={currentIndex >= sections.length - 1}
                  onClick={() => currentIndex < sections.length - 1 && goTo(sections[currentIndex + 1].id)}
                >
                  <span>{currentIndex < sections.length - 1 ? (isKo ? sections[currentIndex + 1].labelKo : sections[currentIndex + 1].labelEn) : ''}</span>
                  <i className="fa-solid fa-chevron-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
