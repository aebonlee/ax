import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { SITE_CONFIG } from '../../config/site';
import type { ReactElement } from 'react';

export default function Footer(): ReactElement {
  const { language, t } = useLanguage();
  const isKo = language === 'ko';

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="brand-dream">Dream</span>
              <span className="brand-it">IT</span>{' '}
              <span className="brand-ax">AX &amp; DX</span>
            </div>
            <p className="footer-desc">{t('footer.description')}</p>
            <p className="footer-contact">{SITE_CONFIG.email}</p>
          </div>

          <div className="footer-links">
            <h4>{isKo ? '학습 콘텐츠' : 'Learning'}</h4>
            <ul>
              <li><Link to="/ax-overview">{isKo ? 'AX (AI 전환)' : 'AX (AI Transformation)'}</Link></li>
              <li><Link to="/dx-overview">{isKo ? 'DX (디지털 전환)' : 'DX (Digital Transformation)'}</Link></li>
              <li><Link to="/trends">{isKo ? '최신 트렌드' : 'Latest Trends'}</Link></li>
              <li><Link to="/cases">{isKo ? '기업 사례' : 'Case Studies'}</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>{isKo ? '부가 메뉴' : 'More'}</h4>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/glossary">{isKo ? '용어사전' : 'Glossary'}</Link></li>
              <li><Link to="/what-is-ai">{isKo ? '인공지능이란?' : 'What is AI?'}</Link></li>
              <li><Link to="/community">{isKo ? '커뮤니티' : 'Community'}</Link></li>
            </ul>
          </div>

          <div className="footer-family">
            <h4>{t('footer.family')}</h4>
            <ul>
              <li><a href="https://www.dreamitbiz.com" target="_blank" rel="noopener noreferrer">DreamIT Main</a></li>
              <li><a href="https://ai-hub.dreamitbiz.com" target="_blank" rel="noopener noreferrer">AI Hub</a></li>
              <li><a href="https://edu-hub.dreamitbiz.com" target="_blank" rel="noopener noreferrer">EDU Hub</a></li>
              <li><a href="https://biz-hub.dreamitbiz.com" target="_blank" rel="noopener noreferrer">Biz Hub</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
