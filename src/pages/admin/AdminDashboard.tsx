import SEOHead from '../../components/SEOHead';
import type { ReactElement } from 'react';

export default function AdminDashboard(): ReactElement {
  return (
    <>
      <SEOHead title="관리자" path="/admin" noindex />
      <section className="admin-section">
        <div className="container">
          <h1 className="page-title">관리자 대시보드</h1>
          <div className="admin-grid">
            <div className="admin-card">
              <i className="fa-solid fa-users" />
              <h3>사용자 관리</h3>
              <p>회원 조회 및 관리</p>
            </div>
            <div className="admin-card">
              <i className="fa-solid fa-chart-bar" />
              <h3>방문 통계</h3>
              <p>사이트 방문 및 학습 현황</p>
            </div>
            <div className="admin-card">
              <i className="fa-solid fa-file-lines" />
              <h3>콘텐츠 관리</h3>
              <p>학습 콘텐츠 편집</p>
            </div>
            <div className="admin-card">
              <i className="fa-solid fa-gear" />
              <h3>설정</h3>
              <p>사이트 설정 관리</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
