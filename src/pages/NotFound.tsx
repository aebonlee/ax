import { Link } from 'react-router-dom';
import type { ReactElement } from 'react';

export default function NotFound(): ReactElement {
  return (
    <section className="notfound-section">
      <div className="container">
        <div className="notfound-content">
          <h1>404</h1>
          <p>페이지를 찾을 수 없습니다.</p>
          <Link to="/" className="btn btn-primary-large">홈으로 돌아가기</Link>
        </div>
      </div>
    </section>
  );
}
