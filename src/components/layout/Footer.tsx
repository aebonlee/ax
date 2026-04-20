import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import type { ReactElement } from 'react';

export default function Footer(): ReactElement {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  return (
    <footer className="footer" aria-label="사이트 푸터">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="brand-dream">Dream</span>
              <span className="brand-it">IT</span>{' '}
              <span className="brand-ax">AX &amp; DX</span>
            </div>
            <p className="footer-description">
              {isKo
                ? 'AI 전환(AX)과 디지털 전환(DX), 최신 트렌드를 체계적으로 학습하는 종합 플랫폼'
                : 'A comprehensive platform for learning AI Transformation and Digital Transformation'}
            </p>
          </div>

          <div className="footer-links">
            <h4>{isKo ? '바로가기' : 'Quick Links'}</h4>
            <ul className="footer-link-list">
              <li><Link to="/ax-overview">{isKo ? 'AX (AI 전환)' : 'AX'}</Link></li>
              <li><Link to="/dx-overview">{isKo ? 'DX (디지털 전환)' : 'DX'}</Link></li>
              <li><Link to="/trends">{isKo ? '최신 트렌드' : 'Trends'}</Link></li>
              <li><Link to="/cases">{isKo ? '기업 사례' : 'Cases'}</Link></li>
              <li><Link to="/glossary">{isKo ? '용어사전' : 'Glossary'}</Link></li>
              <li><Link to="/what-is-ai">{isKo ? '인공지능이란?' : 'What is AI?'}</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>{isKo ? '연락처' : 'Contact'}</h4>
            <p className="footer-email">
              <span className="footer-email-icon">✉️</span>
              <a href="mailto:aebon@dreamitbiz.com">aebon@dreamitbiz.com</a>
            </p>
            <p>010-3700-0629</p>
            <p className="business-hours">{isKo ? '평일 09:00 ~ 18:00' : 'Weekdays 09:00 ~ 18:00'}</p>

            <div className="footer-family">
              <select
                defaultValue=""
                aria-label="패밀리 사이트"
                onChange={(e) => {
                  if (e.target.value) window.open(e.target.value, '_blank');
                  e.target.value = '';
                }}
              >
                <option value="" disabled>Family Site</option>
                <option value="https://www.dreamitbiz.com">DreamIT Biz</option>
                <option value="https://ai-hub.dreamitbiz.com">AI Hub</option>
                <option value="https://edu-hub.dreamitbiz.com">EDU Hub</option>
                <option value="https://biz-hub.dreamitbiz.com">Biz Hub</option>
              </select>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 DreamIT Biz. All rights reserved.</p>
          <p className="footer-bottom-info">
            Designed by Ph.D Aebon Lee | {isKo ? '대표이사' : 'CEO'}: {isKo ? '이애본' : 'Aebon Lee'} | {isKo ? '사업자등록번호' : 'Business Reg.'}: 601-45-20154
          </p>
        </div>
      </div>
    </footer>
  );
}
