import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import type { ReactElement } from 'react';

export default function Navbar(): ReactElement {
  const { isLoggedIn, isAdmin, signOut } = useAuth();
  const { toggleTheme, mode, colorTheme, setColorTheme, COLOR_OPTIONS } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [colorOpen, setColorOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/');

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/ax-overview', label: t('nav.ax'), children: ['/ax-overview', '/ax-strategy', '/ax-tools'] },
    { path: '/dx-overview', label: t('nav.dx'), children: ['/dx-overview', '/dx-strategy', '/dx-tech'] },
    { path: '/trends', label: t('nav.trends') },
    { path: '/cases', label: t('nav.cases') },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          <span className="brand-dream">Dream</span>
          <span className="brand-it">IT</span>{' '}
          <span className="brand-ax">AX</span>
        </Link>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${isActive(link.path) || link.children?.some(c => isActive(c)) ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          {/* Color theme picker */}
          <div className="color-picker-wrapper">
            <button
              className="nav-icon-btn"
              onClick={() => setColorOpen(!colorOpen)}
              title="Color theme"
            >
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

          {/* Theme toggle */}
          <button className="nav-icon-btn" onClick={toggleTheme} title="Theme">
            <i className={`fa-solid ${mode === 'auto' ? 'fa-circle-half-stroke' : mode === 'dark' ? 'fa-moon' : 'fa-sun'}`} />
          </button>

          {/* Language */}
          <button
            className="nav-icon-btn lang-btn"
            onClick={() => setLanguage(language === 'ko' ? 'en' : 'ko')}
            title="Language"
          >
            {language === 'ko' ? 'EN' : 'KO'}
          </button>

          {/* Auth */}
          {isLoggedIn ? (
            <>
              {isAdmin && (
                <Link to="/admin" className="nav-link nav-admin">{t('nav.admin')}</Link>
              )}
              <Link to="/mypage" className="nav-link">{t('nav.mypage')}</Link>
              <button className="nav-logout-btn" onClick={signOut}>{t('nav.logout')}</button>
            </>
          ) : (
            <Link to="/login" className="nav-login-btn">{t('nav.login')}</Link>
          )}

          {/* Mobile menu toggle */}
          <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`} />
          </button>
        </div>
      </div>
    </nav>
  );
}
