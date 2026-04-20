import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import type { ReactElement } from 'react';

export default function Footer(): ReactElement {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>
              <span className="brand-dream">Dream</span>
              <span className="brand-it">IT</span>{' '}
              <span className="brand-ax">AX &amp; DX</span>
            </h3>
            <p>{isKo ? 'AX & DX 학습 플랫폼' : 'AX & DX Learning Platform'}</p>
            <div className="company-info">
              <p><strong>드림아이티비즈(DreamIT Biz)</strong></p>
              <p>대표이사: 이애본</p>
              <p>사업자등록번호: 601-45-20154</p>
              <p>통신판매신고번호: 제2024-수원팔달-0584호</p>
              <p>출판사 신고번호: 제2026-000026호</p>
            </div>
          </div>

          <div className="footer-links">
            <h4>{isKo ? '바로가기' : 'Quick Links'}</h4>
            <ul>
              <li><Link to="/ax-overview">{isKo ? 'AX (AI 전환)' : 'AX'}</Link></li>
              <li><Link to="/dx-overview">{isKo ? 'DX (디지털 전환)' : 'DX'}</Link></li>
              <li><Link to="/trends">{isKo ? '최신 트렌드' : 'Trends'}</Link></li>
              <li><Link to="/cases">{isKo ? '기업 사례' : 'Cases'}</Link></li>
              <li><Link to="/glossary">{isKo ? '용어사전' : 'Glossary'}</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>{isKo ? '연락처' : 'Contact'}</h4>
            <p>경기도 수원시 팔달구 매산로 45, 419호</p>
            <p>aebon@dreamitbiz.com</p>
            <p>010-3700-0629</p>
            <p>카카오톡: aebon</p>
            <p className="business-hours">{isKo ? '평일: 09:00 ~ 18:00' : 'Weekdays: 09:00 ~ 18:00'}</p>

            <div className="footer-family">
              <select
                defaultValue=""
                onChange={(e) => {
                  if (e.target.value) window.open(e.target.value, '_blank');
                  e.target.value = '';
                }}
              >
                <option value="" disabled>Family Site</option>
                <option value="https://www.dreamitbiz.com">DreamIT Main</option>
                <option value="https://ai-hub.dreamitbiz.com">AI Hub</option>
                <option value="https://edu-hub.dreamitbiz.com">EDU Hub</option>
                <option value="https://biz-hub.dreamitbiz.com">Biz Hub</option>
                <option value="https://cs-hub.dreamitbiz.com">CS Hub</option>
              </select>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2020-{new Date().getFullYear()} DreamIT Biz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
