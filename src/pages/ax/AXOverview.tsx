import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import type { ReactElement } from 'react';

export default function AXOverview(): ReactElement {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  const sections = [
    {
      title: isKo ? 'AX(AI Transformation)란?' : 'What is AX (AI Transformation)?',
      content: isKo
        ? 'AX(AI Transformation)는 AI 기술을 비즈니스 전반에 적용하여 업무 방식, 제품·서비스, 조직 문화를 근본적으로 변화시키는 과정입니다. 단순한 AI 도구 도입을 넘어, AI를 핵심 경쟁력으로 내재화하는 전략적 전환을 의미합니다.'
        : 'AX (AI Transformation) is the process of fundamentally changing work methods, products/services, and organizational culture by applying AI technology across business. It means strategic transformation that internalizes AI as a core competitive advantage beyond simple AI tool adoption.',
      icon: 'fa-lightbulb',
    },
    {
      title: isKo ? 'AX가 필요한 이유' : 'Why AX is Needed',
      content: isKo
        ? '글로벌 기업의 72%가 2026년까지 AI 전환을 완료할 계획입니다. 생산성 향상(평균 40%), 비용 절감(30%), 새로운 비즈니스 모델 창출이 AX의 핵심 가치입니다. AI를 도입하지 않는 기업은 경쟁에서 뒤처질 위험이 있습니다.'
        : '72% of global enterprises plan to complete AI transformation by 2026. Productivity improvement (avg. 40%), cost reduction (30%), and new business model creation are core values of AX.',
      icon: 'fa-chart-pie',
    },
    {
      title: isKo ? 'AX vs DX 차이점' : 'AX vs DX Differences',
      content: isKo
        ? 'DX가 디지털 기술로 아날로그 프로세스를 전환하는 것이라면, AX는 AI로 의사결정·창작·예측을 자동화하는 한 단계 높은 전환입니다. DX는 AX의 기반이 되며, AX는 DX의 진화된 형태입니다.'
        : 'While DX converts analog processes with digital technology, AX automates decision-making, creation, and prediction with AI. DX is the foundation of AX, and AX is the evolved form of DX.',
      icon: 'fa-arrows-rotate',
    },
    {
      title: isKo ? 'AX 성숙도 모델' : 'AX Maturity Model',
      content: isKo
        ? '1단계(인식): AI 가능성 탐색 → 2단계(실험): PoC 및 파일럿 → 3단계(확산): 부서별 AI 적용 → 4단계(최적화): 전사 AI 통합 → 5단계(혁신): AI-Native 조직. 각 단계별 핵심 과제와 KPI를 이해하는 것이 중요합니다.'
        : 'Level 1 (Awareness): Explore AI possibilities → Level 2 (Experiment): PoC & Pilot → Level 3 (Scale): Department AI adoption → Level 4 (Optimize): Enterprise AI integration → Level 5 (Innovation): AI-Native organization.',
      icon: 'fa-layer-group',
    },
    {
      title: isKo ? 'AX 로드맵 설계' : 'AX Roadmap Design',
      content: isKo
        ? '성공적인 AX를 위해서는 현재 상태 진단, 목표 설정, 우선순위 과제 선정, 단계별 실행 계획, 성과 측정 체계가 필요합니다. 특히 Quick Win과 장기 프로젝트를 균형있게 배치하는 것이 핵심입니다.'
        : 'Successful AX requires current state diagnosis, goal setting, priority task selection, phased execution plans, and performance measurement systems.',
      icon: 'fa-route',
    },
    {
      title: isKo ? 'AX 성공 핵심 요인' : 'Key Success Factors for AX',
      content: isKo
        ? '① 경영진의 강력한 리더십 ② 데이터 인프라 정비 ③ AI 인재 확보·육성 ④ 조직 문화 혁신 ⑤ 명확한 비즈니스 케이스 — 이 5가지가 AX 성공의 핵심입니다. 기술보다 사람과 문화가 더 중요합니다.'
        : '① Strong executive leadership ② Data infrastructure ③ AI talent acquisition ④ Organizational culture innovation ⑤ Clear business case — these 5 are key to AX success.',
      icon: 'fa-trophy',
    },
  ];

  return (
    <>
      <SEOHead title="AX 개요" description="AI 전환(AX)의 개념, 필요성, 성숙도 모델" path="/ax-overview" />
      <section className="guide-page">
        <div className="container">
          <div className="guide-header">
            <div className="guide-icon" style={{ background: '#1E3A5F' }}>
              <i className="fa-solid fa-robot" />
            </div>
            <div>
              <h1 className="guide-title">{isKo ? 'AX 개요' : 'AX Overview'}</h1>
              <p className="guide-subtitle">{isKo ? 'AI 전환(AX)의 개념, 필요성, 핵심 원리를 이해합니다.' : 'Understand the concept, necessity, and core principles of AI Transformation.'}</p>
            </div>
          </div>

          <div className="guide-content">
            {sections.map((section, idx) => (
              <div key={idx} className="guide-section" data-aos="fade-up">
                <div className="guide-section-header">
                  <i className={`fa-solid ${section.icon}`} />
                  <h2>{section.title}</h2>
                </div>
                <p className="guide-section-content">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
