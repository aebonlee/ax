import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { LEARNING_PATHS } from '../config/site';
import SEOHead from '../components/SEOHead';
import HeroBackground from '../components/HeroBackground';
import HeroCarousel from '../components/HeroCarousel';
import FeatureCard from '../components/FeatureCard';
import type { ReactElement } from 'react';

export default function Home(): ReactElement {
  const { language, t } = useLanguage();
  const isKo = language === 'ko';

  const carouselSlides = [
    {
      title: isKo ? 'AI가 비즈니스를 바꾸는 시대, AX' : 'The Era of AI Transforming Business — AX',
      description: isKo
        ? '생성형 AI, AI 에이전트, MLOps까지 — AI 전환(AX)의 핵심을 체계적으로 학습합니다.'
        : 'From Generative AI to AI Agents and MLOps — systematically learn the core of AI Transformation.',
    },
    {
      title: isKo ? '디지털 전환의 성공 공식, DX' : 'The Success Formula of Digital Transformation — DX',
      description: isKo
        ? '클라우드, 데이터, 마이크로서비스 — 디지털 전환 전략의 A to Z를 배웁니다.'
        : 'Cloud, Data, Microservices — learn the A to Z of digital transformation strategy.',
    },
    {
      title: isKo ? '트렌드를 읽고 미래를 준비하세요' : 'Read Trends, Prepare for the Future',
      description: isKo
        ? '2026년 최신 기술 트렌드와 기업 사례를 통해 실전 인사이트를 얻으세요.'
        : 'Gain practical insights through 2026 latest tech trends and enterprise cases.',
    },
  ];

  return (
    <>
      <SEOHead path="/" />

      {/* Hero */}
      <section className="hero">
        <HeroBackground />
        <div className="hero-content">
          <div className="hero-badge">
            <i className="fa-solid fa-rocket" />
            {t('hero.badge')}
          </div>
          <h1 className="hero-title">
            {t('hero.title')}
            <span className="hero-title-highlight">{t('hero.titleHighlight')}</span>
          </h1>
          <p className="hero-description">{t('hero.description')}</p>
          <div className="hero-actions">
            <Link to="/ax-overview" className="btn btn-primary-large">{t('hero.cta')}</Link>
            <Link to="/dx-overview" className="btn btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
              {t('hero.ctaSecondary')}
            </Link>
          </div>
          <HeroCarousel slides={carouselSlides} />
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('features.title')}</h2>
            <p className="section-subtitle">{t('features.subtitle')}</p>
          </div>
          <div className="features-grid">
            <FeatureCard icon="fa-robot" title={isKo ? 'AX (AI 전환)' : 'AX (AI Transformation)'} description={isKo ? 'AI 전략, 핵심 기술, 적용 사례를 체계적으로 학습합니다.' : 'Systematically learn AI strategy, core technologies, and application cases.'} />
            <FeatureCard icon="fa-microchip" title={isKo ? 'DX (디지털 전환)' : 'DX (Digital Transformation)'} description={isKo ? '디지털 전략, 변화 관리, 클라우드·데이터 기술을 학습합니다.' : 'Learn digital strategy, change management, and cloud/data technologies.'} />
            <FeatureCard icon="fa-chart-line" title={isKo ? '최신 트렌드' : 'Latest Trends'} description={isKo ? '2026 AI 트렌드, DX 동향, 산업별 혁신을 파악합니다.' : 'Understand 2026 AI trends, DX developments, and industry innovation.'} />
            <FeatureCard icon="fa-building" title={isKo ? '기업 사례' : 'Case Studies'} description={isKo ? '글로벌·국내 기업의 성공과 실패 사례를 분석합니다.' : 'Analyze success and failure cases of global and Korean enterprises.'} />
            <FeatureCard icon="fa-spell-check" title={isKo ? '용어사전' : 'Glossary'} description={isKo ? 'AI·DX 분야 50개 이상의 핵심 용어를 정리합니다.' : 'Comprehensive glossary with 50+ key AI/DX terms.'} />
            <FeatureCard icon="fa-users" title={isKo ? '커뮤니티' : 'Community'} description={isKo ? '학습자 간 토론, 리소스 공유, 이벤트 정보를 제공합니다.' : 'Discussions, resource sharing, and event info for learners.'} />
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="paths-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('home.pathsTitle')}</h2>
            <p className="section-subtitle">{t('home.pathsSubtitle')}</p>
          </div>
          <div className="paths-grid">
            {LEARNING_PATHS.map(path => (
              <Link key={path.id} to={path.path} className="path-card">
                <div className="path-card-header">
                  <div className="path-icon" style={{ background: path.color }}>
                    <i className={`fa-solid ${path.icon}`} />
                  </div>
                  <h3 className="path-name">{isKo ? path.nameKo : path.nameEn}</h3>
                </div>
                <p className="path-desc">{isKo ? path.descKo : path.descEn}</p>
                <div className="path-topics">
                  {path.topics.map((topic, i) => (
                    <span key={i} className="path-topic">{topic}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">18</div>
              <div className="stat-label">{isKo ? '학습 페이지' : 'Learning Pages'}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">108</div>
              <div className="stat-label">{isKo ? '학습 섹션' : 'Learning Sections'}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">{isKo ? '핵심 용어' : 'Key Terms'}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">8</div>
              <div className="stat-label">{isKo ? '메뉴 카테고리' : 'Menu Categories'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="workflow-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{isKo ? '이런 분께 추천합니다' : 'Recommended For'}</h2>
            <p className="section-subtitle">{isKo ? '다양한 배경의 학습자를 위한 맞춤형 학습 경로를 제공합니다.' : 'Customized learning paths for diverse learner backgrounds.'}</p>
          </div>
          <div className="workflow-grid">
            <div className="workflow-step">
              <div className="workflow-number"><i className="fa-solid fa-user-tie" /></div>
              <h3 className="workflow-title">{isKo ? '기업 경영진' : 'Executives'}</h3>
              <p className="workflow-desc">{isKo ? 'AI·DX 전략 수립과 투자 결정을 위한 인사이트' : 'Insights for AI/DX strategy and investment decisions'}</p>
            </div>
            <div className="workflow-step">
              <div className="workflow-number"><i className="fa-solid fa-laptop-code" /></div>
              <h3 className="workflow-title">{isKo ? '실무 담당자' : 'Practitioners'}</h3>
              <p className="workflow-desc">{isKo ? 'AI 도구 활용과 DX 프로젝트 실행 방법론' : 'AI tool utilization and DX project execution'}</p>
            </div>
            <div className="workflow-step">
              <div className="workflow-number"><i className="fa-solid fa-graduation-cap" /></div>
              <h3 className="workflow-title">{isKo ? '학생/취준생' : 'Students'}</h3>
              <p className="workflow-desc">{isKo ? 'AI·DX 분야 취업 준비와 산업 동향 파악' : 'Career prep and industry trend understanding'}</p>
            </div>
            <div className="workflow-step">
              <div className="workflow-number"><i className="fa-solid fa-rocket" /></div>
              <h3 className="workflow-title">{isKo ? '창업자/스타트업' : 'Entrepreneurs'}</h3>
              <p className="workflow-desc">{isKo ? 'AI 기반 비즈니스 모델과 시장 기회 분석' : 'AI-based business models and market opportunities'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">{isKo ? 'AI·DX 학습을 시작하세요' : 'Start Your AI/DX Learning Journey'}</h2>
          <p className="cta-description">{isKo ? '18개 학습 페이지, 108개 섹션의 체계적인 콘텐츠로 AI 전환과 디지털 전환을 마스터하세요.' : 'Master AI and Digital Transformation with 18 pages and 108 sections of systematic content.'}</p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <Link to="/about" className="btn btn-primary-large">{isKo ? '사이트 소개 보기' : 'View About'}</Link>
            <Link to="/ax-overview" className="btn btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
              {isKo ? 'AX 학습 시작' : 'Start AX Learning'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
