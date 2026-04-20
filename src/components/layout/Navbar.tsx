import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import type { ReactElement } from 'react';

interface NavItem {
  path: string;
  label: string;
  children?: { path: string; label: string }[];
}

export default function Navbar(): ReactElement {
  const { isLoggedIn, isAdmin, signOut } = useAuth();
  const { toggleTheme, mode, colorTheme, setColorTheme, COLOR_OPTIONS } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [colorOpen, setColorOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isKo = language === 'ko';

  const navItems: NavItem[] = [
    { path: '/about', label: 'About' },
    {
      path: '/ax-overview',
      label: isKo ? 'AX (AI 전환)' : 'AX (AI Transformation)',
      children: [
        { path: '/ax-overview', label: isKo ? 'AX 개요' : 'AX Overview' },
        { path: '/ax-strategy', label: isKo ? 'AX 전략과 실행' : 'AX Strategy' },
        { path: '/ax-tools', label: isKo ? 'AX 핵심 기술' : 'AX Technologies' },
        { path: '/ax-cases', label: isKo ? 'AX 적용 사례' : 'AX Use Cases' },
      ],
    },
    {
      path: '/dx-overview',
      label: isKo ? 'DX (디지털 전환)' : 'DX (Digital Transformation)',
      children: [
        { path: '/dx-overview', label: isKo ? 'DX 개요' : 'DX Overview' },
        { path: '/dx-strategy', label: isKo ? 'DX 전략과 실행' : 'DX Strategy' },
        { path: '/dx-tech', label: isKo ? 'DX 핵심 기술' : 'DX Technologies' },
        { path: '/dx-cases', label: isKo ? 'DX 적용 사례' : 'DX Use Cases' },
      ],
    },
    {
      path: '/trends',
      label: isKo ? '최신 트렌드' : 'Latest Trends',
      children: [
        { path: '/trends', label: isKo ? '2026 AI 트렌드' : '2026 AI Trends' },
        { path: '/trends-dx', label: isKo ? '디지털 전환 동향' : 'DX Trends' },
        { path: '/trends-industry', label: isKo ? '산업별 혁신' : 'Industry Innovation' },
      ],
    },
    {
      path: '/cases',
      label: isKo ? '기업 사례' : 'Case Studies',
      children: [
        { path: '/cases', label: isKo ? '기업 사례 분석' : 'Enterprise Cases' },
        { path: '/cases-global', label: isKo ? '글로벌 사례' : 'Global Cases' },
        { path: '/cases-korea', label: isKo ? '국내 사례' : 'Korea Cases' },
      ],
    },
    { path: '/glossary', label: isKo ? '용어사전' : 'Glossary' },
    { path: '/what-is-ai', label: isKo ? '인공지능이란?' : 'What is AI?' },
    { path: '/community', label: isKo ? '커뮤니티' : 'Community' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isGroupActive = (item: NavItem) => {
    if (isActive(item.path)) return true;
    return item.children?.some(c => isActive(c.path)) || false;
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(null);
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          <span className="brand-dream">Dream</span>
          <span className="brand-it">IT</span>{' '}
          <span className="brand-ax">AX &amp; DX</span>
        </Link>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`} ref={dropdownRef}>
          {navItems.map(item => (
            item.children ? (
              <div key={item.path} className="nav-dropdown-wrapper">
                <button
                  className={`nav-link nav-dropdown-trigger ${isGroupActive(item) ? 'active' : ''}`}
                  onClick={() => setDropdownOpen(dropdownOpen === item.path ? null : item.path)}
                >
                  {item.label}
                  <i className={`fa-solid fa-chevron-down nav-chevron ${dropdownOpen === item.path ? 'rotated' : ''}`} />
                </button>
                {dropdownOpen === item.path && (
                  <div className="nav-dropdown-menu">
                    {item.children.map(child => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className={`nav-dropdown-item ${isActive(child.path) ? 'active' : ''}`}
                        onClick={() => setDropdownOpen(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            )
          ))}
        </div>

        <div className="nav-actions">
          <div className="color-picker-wrapper">
            <button className="nav-icon-btn" onClick={() => setColorOpen(!colorOpen)} title="Color theme">
              <span className="color-dot" style={{ background: COLOR_OPTIONS.find(c => c.name === colorTheme)?.color || '#1E3A5F' }} />
            </button>
            {colorOpen && (
              <div className="color-dropdown">
                {COLOR_OPTIONS.map(opt => (
                  <button
                    key={opt.name}
                    className={`color-option ${colorTheme === opt.name ? 'active' : ''}`}
                    style={{ background: opt.color }}
                    onClick={() => { setColorTheme(opt.name); setColorOpen(false); }}
                    title={opt.name}
                  />
                ))}
              </div>
            )}
          </div>

          <button className="nav-icon-btn" onClick={toggleTheme} title="Theme">
            <i className={`fa-solid ${mode === 'auto' ? 'fa-circle-half-stroke' : mode === 'dark' ? 'fa-moon' : 'fa-sun'}`} />
          </button>

          <button className="nav-icon-btn lang-btn" onClick={() => setLanguage(language === 'ko' ? 'en' : 'ko')} title="Language">
            {language === 'ko' ? 'EN' : 'KO'}
          </button>

          {isLoggedIn ? (
            <>
              {isAdmin && <Link to="/admin" className="nav-link nav-admin">{t('nav.admin')}</Link>}
              <Link to="/mypage" className="nav-link">{t('nav.mypage')}</Link>
              <button className="nav-logout-btn" onClick={signOut}>{t('nav.logout')}</button>
            </>
          ) : (
            <Link to="/login" className="nav-login-btn">{t('nav.login')}</Link>
          )}

          <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`} />
          </button>
        </div>
      </div>
    </nav>
  );
}
