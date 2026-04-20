import { useState, type ReactElement, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { resetPassword } from '../utils/auth';
import SEOHead from '../components/SEOHead';

const ForgotPassword = (): ReactElement => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await resetPassword(email);
      setSuccess(t('auth.resetSent'));
    } catch (err) {
      setError((err as Error).message || t('auth.resetError'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <SEOHead title="비밀번호 재설정" path="/forgot-password" noindex />
    <section className="auth-fullpage">
      <div className="auth-center-wrapper">
        <div className="auth-card-google">
          <div className="auth-logo-area">
            <span className="brand-dream">Dream</span>
            <span className="brand-it">IT</span>{' '}
            <span className="brand-ax">AX</span>
          </div>
          <h2 className="auth-heading">{t('auth.forgotTitle')}</h2>
          <p className="auth-sub">{t('auth.forgotSubtitle')}</p>

          {success ? (
            <div className="auth-success">{success}</div>
          ) : (
            <form onSubmit={handleSubmit} className="auth-email-form">
              <div className="auth-input-group">
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder={t('auth.emailPlaceholder')} required autoFocus />
              </div>
              {error && <div className="auth-error">{error}</div>}
              <button type="submit" className="auth-next-btn" disabled={loading} style={{ width: '100%' }}>
                {loading ? t('auth.sending') : t('auth.sendReset')}
              </button>
            </form>
          )}

          <div className="auth-bottom-link">
            <Link to="/login">{t('auth.signIn')}</Link>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ForgotPassword;
