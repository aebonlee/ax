import { useState, type ReactElement, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { signUp } from '../utils/auth';
import SEOHead from '../components/SEOHead';

const Register = (): ReactElement | null => {
  const { t } = useLanguage();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '', confirmPassword: '', name: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  if (isLoggedIn) {
    navigate('/', { replace: true });
    return null;
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError(t('auth.passwordMismatch'));
      return;
    }
    setLoading(true);
    setError('');
    try {
      await signUp(form.email, form.password, form.name);
      setSuccess(t('auth.registerSuccess'));
    } catch (err) {
      setError((err as Error).message || t('auth.registerError'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <SEOHead title="회원가입" path="/register" noindex />
    <section className="auth-fullpage">
      <div className="auth-center-wrapper">
        <div className="auth-card-google">
          <div className="auth-logo-area">
            <span className="brand-dream">Dream</span>
            <span className="brand-it">IT</span>{' '}
            <span className="brand-ax">AX</span>
          </div>
          <h2 className="auth-heading">{t('auth.registerTitle')}</h2>
          <p className="auth-sub">{t('auth.registerSubtitle')}</p>

          {success ? (
            <div className="auth-success">{success}</div>
          ) : (
            <form onSubmit={handleSubmit} className="auth-email-form">
              <div className="auth-input-group">
                <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder={t('auth.namePlaceholder')} required autoFocus />
              </div>
              <div className="auth-input-group">
                <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder={t('auth.emailPlaceholder')} required />
              </div>
              <div className="auth-input-group">
                <input type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} placeholder={t('auth.passwordPlaceholder')} required minLength={6} />
              </div>
              <div className="auth-input-group">
                <input type="password" value={form.confirmPassword} onChange={e => setForm({ ...form, confirmPassword: e.target.value })} placeholder={t('auth.confirmPasswordPlaceholder')} required />
              </div>
              {error && <div className="auth-error">{error}</div>}
              <button type="submit" className="auth-next-btn" disabled={loading} style={{ width: '100%' }}>
                {loading ? t('auth.registering') : t('auth.register')}
              </button>
            </form>
          )}

          <div className="auth-bottom-link">
            <span>{t('auth.hasAccount')}</span>
            <Link to="/login">{t('auth.signIn')}</Link>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Register;
