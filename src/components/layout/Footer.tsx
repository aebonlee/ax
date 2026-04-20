import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { SITE_CONFIG } from '../../config/site';
import type { ReactElement } from 'react';

export default function Footer(): ReactElement {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="brand-dream">Dream</span>
              <span className="brand-it">IT</span>{' '}
              <span className="brand-ax">AX</span>
            </div>
            <p className="footer-desc">{t('footer.description')}</p>
            <p className="footer-contact">{SITE_CONFIG.email}</p>
          </div>

          <div className="footer-links">
            <h4>{t('footer.links')}</h4>
            <ul>
              <li><Link to="/ax-overview">AX 개요</Link></li>
              <li><Link to="/dx-overview">DX 개요</Link></li>
              <li><Link to="/trends">트렌드</Link></li>
              <li><Link to="/cases">사례</Link></li>
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
