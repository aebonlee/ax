import GuidePage from '../components/GuidePage';
import TipBox from '../components/TipBox';
import { useLanguage } from '../contexts/LanguageContext';
import type { ReactElement } from 'react';
import type { GuideSection } from '../components/GuidePage';

export default function About(): ReactElement {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  const sections: GuideSection[] = [
    {
      id: 'intro',
      icon: 'fa-bullseye',
      labelKo: '사이트 소개',
      labelEn: 'Introduction',
      content: (
        <>
          <h2>{isKo ? 'DreamIT AX 소개' : 'About DreamIT AX'}</h2>
          <p>{isKo
            ? 'DreamIT AX는 AI 전환(AX)과 디지털 전환(DX)을 체계적으로 학습할 수 있는 종합 교육 플랫폼입니다. 기업 실무자, 경영진, 학생 등 모든 분이 AX·DX의 개념부터 실전 전략, 최신 트렌드까지 한 곳에서 학습할 수 있습니다.'
            : 'DreamIT AX is a comprehensive educational platform for systematically learning AI Transformation (AX) and Digital Transformation (DX). Everyone from practitioners to executives and students can learn concepts, strategies, and trends in one place.'}</p>
          <h3>{isKo ? '플랫폼 비전' : 'Platform Vision'}</h3>
          <ul>
            <li><strong>{isKo ? 'AI 시대의 나침반' : 'Compass for the AI Era'}</strong>: {isKo ? '급변하는 AI 기술 환경에서 올바른 방향을 제시합니다' : 'Providing the right direction in the rapidly changing AI technology landscape'}</li>
            <li><strong>{isKo ? '실무 중심 교육' : 'Practice-Oriented Education'}</strong>: {isKo ? '이론뿐 아니라 실제 기업 사례와 적용 방법을 제공합니다' : 'Providing not just theory but real enterprise cases and application methods'}</li>
            <li><strong>{isKo ? '한국어 특화' : 'Korean-Specialized'}</strong>: {isKo ? '한국 기업과 산업 환경에 맞춘 맞춤형 콘텐츠를 제공합니다' : 'Customized content tailored to Korean business and industry environment'}</li>
          </ul>
          <TipBox type="important">
            <p>{isKo
              ? '본 플랫폼은 DreamIT Biz (dreamitbiz.com) 교육 생태계의 일부로, 75개 이상의 전문 학습 사이트와 함께 운영됩니다.'
              : 'This platform is part of the DreamIT Biz (dreamitbiz.com) educational ecosystem, operating alongside 75+ specialized learning sites.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'content',
      icon: 'fa-book-open',
      labelKo: '학습 콘텐츠',
      labelEn: 'Learning Content',
      content: (
        <>
          <h2>{isKo ? '학습 콘텐츠 구성' : 'Learning Content Structure'}</h2>
          <p>{isKo ? '총 14개 학습 페이지, 84개 세부 섹션으로 구성된 체계적인 교육 콘텐츠를 제공합니다.' : 'Systematic educational content with 14 learning pages and 84 detailed sections.'}</p>
          <table className="guide-table">
            <thead><tr><th>{isKo ? '카테고리' : 'Category'}</th><th>{isKo ? '페이지' : 'Pages'}</th><th>{isKo ? '주요 내용' : 'Key Content'}</th></tr></thead>
            <tbody>
              <tr><td>{isKo ? 'AX (AI 전환)' : 'AX (AI Transformation)'}</td><td>4</td><td>{isKo ? '개요, 전략, 핵심기술, 사례' : 'Overview, Strategy, Technologies, Cases'}</td></tr>
              <tr><td>{isKo ? 'DX (디지털 전환)' : 'DX (Digital Transformation)'}</td><td>4</td><td>{isKo ? '개요, 전략, 핵심기술, 사례' : 'Overview, Strategy, Technologies, Cases'}</td></tr>
              <tr><td>{isKo ? '최신 트렌드' : 'Latest Trends'}</td><td>3</td><td>{isKo ? 'AI 트렌드, DX 동향, 산업별 혁신' : 'AI Trends, DX Trends, Industry Innovation'}</td></tr>
              <tr><td>{isKo ? '기업 사례' : 'Case Studies'}</td><td>3</td><td>{isKo ? '분석 프레임워크, 글로벌, 국내' : 'Framework, Global, Korea'}</td></tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      id: 'audience',
      icon: 'fa-users',
      labelKo: '대상 학습자',
      labelEn: 'Target Learners',
      content: (
        <>
          <h2>{isKo ? '대상 학습자' : 'Target Audience'}</h2>
          <p>{isKo ? '다양한 배경의 학습자를 위한 맞춤형 학습 경로를 제공합니다.' : 'Customized learning paths for learners of diverse backgrounds.'}</p>
          <h3>{isKo ? '추천 학습 대상' : 'Recommended For'}</h3>
          <ul>
            <li><strong>{isKo ? '기업 경영진' : 'Executives'}</strong>: {isKo ? 'AI·DX 전략 수립, 투자 결정, 조직 변화 관리를 위한 인사이트' : 'Insights for AI/DX strategy, investment decisions, and change management'}</li>
            <li><strong>{isKo ? '실무 담당자' : 'Practitioners'}</strong>: {isKo ? 'AI 도구 활용, DX 프로젝트 실행, 업무 자동화 방법론' : 'AI tool utilization, DX project execution, automation methodologies'}</li>
            <li><strong>{isKo ? 'IT 전문가' : 'IT Professionals'}</strong>: {isKo ? 'MLOps, 클라우드, 데이터 플랫폼, AI 인프라 기술' : 'MLOps, cloud, data platforms, AI infrastructure technologies'}</li>
            <li><strong>{isKo ? '대학생/대학원생' : 'Students'}</strong>: {isKo ? 'AI·DX 분야 취업 준비, 최신 산업 동향 파악' : 'Career preparation in AI/DX, understanding industry trends'}</li>
            <li><strong>{isKo ? '창업자/스타트업' : 'Entrepreneurs'}</strong>: {isKo ? 'AI 기반 비즈니스 모델, 시장 기회 분석, 기술 선택' : 'AI-based business models, market opportunities, technology selection'}</li>
          </ul>
          <TipBox type="tip">
            <p>{isKo
              ? '초보자는 AX 개요 → DX 개요 → 최신 트렌드 → 기업 사례 순서로 학습하시는 것을 추천합니다.'
              : 'Beginners are recommended to follow: AX Overview → DX Overview → Trends → Case Studies.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'features',
      icon: 'fa-star',
      labelKo: '주요 기능',
      labelEn: 'Key Features',
      content: (
        <>
          <h2>{isKo ? '플랫폼 주요 기능' : 'Platform Key Features'}</h2>
          <ul>
            <li><strong>{isKo ? '다국어 지원' : 'Multilingual'}</strong>: {isKo ? '한국어/영어 실시간 전환' : 'Real-time Korean/English switching'}</li>
            <li><strong>{isKo ? '다크 모드' : 'Dark Mode'}</strong>: {isKo ? '자동/라이트/다크 3가지 테마 모드' : 'Auto/Light/Dark theme modes'}</li>
            <li><strong>{isKo ? '5가지 컬러 테마' : '5 Color Themes'}</strong>: {isKo ? 'Navy, Royal, Indigo, Teal, Slate 선택 가능' : 'Choose from Navy, Royal, Indigo, Teal, Slate'}</li>
            <li><strong>{isKo ? '반응형 디자인' : 'Responsive Design'}</strong>: {isKo ? 'PC, 태블릿, 모바일 최적화' : 'Optimized for PC, tablet, and mobile'}</li>
            <li><strong>{isKo ? '사이드바 네비게이션' : 'Sidebar Navigation'}</strong>: {isKo ? '각 페이지 내 섹션 간 빠른 이동' : 'Quick navigation between sections within each page'}</li>
            <li><strong>{isKo ? '소셜 로그인' : 'Social Login'}</strong>: {isKo ? 'Google, Kakao 계정으로 간편 로그인' : 'Easy login with Google and Kakao accounts'}</li>
          </ul>
        </>
      ),
    },
    {
      id: 'tech',
      icon: 'fa-code',
      labelKo: '기술 스택',
      labelEn: 'Tech Stack',
      content: (
        <>
          <h2>{isKo ? '기술 스택' : 'Technology Stack'}</h2>
          <table className="guide-table">
            <thead><tr><th>{isKo ? '영역' : 'Area'}</th><th>{isKo ? '기술' : 'Technology'}</th></tr></thead>
            <tbody>
              <tr><td>{isKo ? '프론트엔드' : 'Frontend'}</td><td>React 19 + TypeScript + Vite 7</td></tr>
              <tr><td>{isKo ? '백엔드/DB' : 'Backend/DB'}</td><td>Supabase (PostgreSQL + Auth + Storage)</td></tr>
              <tr><td>{isKo ? '인증' : 'Authentication'}</td><td>Google OAuth + Kakao OAuth + Email/Password</td></tr>
              <tr><td>{isKo ? '배포' : 'Deployment'}</td><td>GitHub Pages (gh-pages)</td></tr>
              <tr><td>{isKo ? '디자인' : 'Design'}</td><td>Custom CSS + Font Awesome Icons</td></tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      id: 'contact',
      icon: 'fa-envelope',
      labelKo: '운영자 정보',
      labelEn: 'Contact',
      content: (
        <>
          <h2>{isKo ? '운영자 정보' : 'Contact Information'}</h2>
          <ul>
            <li><strong>{isKo ? '운영' : 'Operated by'}</strong>: DreamIT Biz</li>
            <li><strong>{isKo ? '웹사이트' : 'Website'}</strong>: dreamitbiz.com</li>
            <li><strong>{isKo ? '교육 분야' : 'Education Fields'}</strong>: {isKo ? 'AI, DX, 프로그래밍, IT 자격증, 비즈니스' : 'AI, DX, Programming, IT Certifications, Business'}</li>
          </ul>
          <TipBox type="example">
            <p>{isKo
              ? 'DreamIT Biz는 AI·DX 교육, 프로그래밍, IT 자격증, 비즈니스 등 75개 이상의 전문 학습 플랫폼을 운영하는 교육 전문 기관입니다.'
              : 'DreamIT Biz is an education institution operating 75+ specialized learning platforms covering AI/DX, programming, IT certifications, and business.'}</p>
          </TipBox>
        </>
      ),
    },
  ];

  return (
    <GuidePage
      titleKo="About"
      titleEn="About"
      subtitleKo="DreamIT AX 플랫폼을 소개합니다."
      subtitleEn="Introducing the DreamIT AX platform."
      icon="fa-info-circle"
      iconColor="#1E3A5F"
      path="/about"
      sections={sections}
    />
  );
}
