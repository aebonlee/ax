import { useAuth } from '../contexts/AuthContext';
import AuthGuard from '../components/AuthGuard';
import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

const MyPage = (): ReactElement => {
  const { profile, signOut } = useAuth();

  return (
    <AuthGuard>
      <>
        <SEOHead title="마이페이지" path="/mypage" noindex />
        <section className="mypage-section">
          <div className="container">
            <h1 className="page-title">마이페이지</h1>
            <div className="mypage-card">
              <div className="mypage-avatar">
                {profile?.avatar_url ? (
                  <img src={profile.avatar_url} alt="avatar" />
                ) : (
                  <div className="avatar-placeholder">
                    <i className="fa-solid fa-user" />
                  </div>
                )}
              </div>
              <div className="mypage-info">
                <h2>{profile?.display_name || profile?.name || '사용자'}</h2>
                <p>{profile?.email}</p>
                <p className="mypage-provider">
                  <i className={`fa-solid ${profile?.provider === 'google' ? 'fa-google' : profile?.provider === 'kakao' ? 'fa-comment' : 'fa-envelope'}`} />
                  {profile?.provider || 'email'} 로그인
                </p>
              </div>
              <button className="btn btn-secondary" onClick={signOut}>로그아웃</button>
            </div>
          </div>
        </section>
      </>
    </AuthGuard>
  );
};

export default MyPage;
