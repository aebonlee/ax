import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import type { ReactElement } from 'react';

export default function AXStrategy(): ReactElement {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  const sections = [
    { title: isKo ? 'AI 전략 프레임워크' : 'AI Strategy Framework', content: isKo ? '성공적인 AI 전략은 비전 수립, 현재 역량 진단, 기회 식별, 우선순위 결정, 실행 로드맵의 5단계로 구성됩니다. 비즈니스 목표와 AI 가능성의 교차점에서 핵심 과제를 도출해야 합니다.' : 'Successful AI strategy consists of 5 stages: vision establishment, current capability assessment, opportunity identification, prioritization, and execution roadmap.', icon: 'fa-chess-board' },
    { title: isKo ? '조직 AI 역량 구축' : 'Building Organizational AI Capabilities', content: isKo ? 'AI 역량은 데이터 역량, 기술 역량, 비즈니스 역량, 조직 역량의 4가지 축으로 구성됩니다. 각 축별 현재 수준을 진단하고, 목표 수준까지의 Gap을 분석하여 역량 개발 계획을 수립합니다.' : 'AI capabilities consist of 4 axes: data, technical, business, and organizational capabilities.', icon: 'fa-people-group' },
    { title: isKo ? 'AI 거버넌스' : 'AI Governance', content: isKo ? 'AI 거버넌스는 AI 시스템의 개발·배포·운영에 대한 원칙, 프로세스, 조직 체계입니다. 데이터 품질 관리, 모델 성능 모니터링, 편향성 감지, 투명성 확보, 책임 소재 명확화가 핵심 요소입니다.' : 'AI governance covers principles, processes, and organizational systems for AI development, deployment, and operation.', icon: 'fa-shield-halved' },
    { title: isKo ? 'AI 윤리와 책임' : 'AI Ethics & Responsibility', content: isKo ? '공정성, 투명성, 프라이버시, 안전성, 책임성 — AI 윤리의 5대 원칙을 이해하고 실무에 적용합니다. EU AI Act, 국내 AI 윤리 가이드라인 등 규제 동향도 파악해야 합니다.' : 'Fairness, transparency, privacy, safety, accountability — understand and apply the 5 principles of AI ethics.', icon: 'fa-balance-scale' },
    { title: isKo ? 'AI 인재 전략' : 'AI Talent Strategy', content: isKo ? 'AI 인재 확보는 외부 채용, 내부 육성, 파트너십의 3가지 트랙으로 접근합니다. 특히 도메인 전문가의 AI 리터러시 향상과 시민 개발자(Citizen Developer) 육성이 핵심 전략입니다.' : 'AI talent acquisition approaches through 3 tracks: external hiring, internal development, and partnerships.', icon: 'fa-user-graduate' },
    { title: isKo ? 'AI ROI 측정' : 'AI ROI Measurement', content: isKo ? 'AI 투자 대비 효과를 측정하는 프레임워크: 비용 절감(자동화), 매출 증대(예측·추천), 리스크 감소(이상 탐지), 고객 만족도 향상. 정량·정성 지표를 함께 활용하며, 단기·장기 성과를 구분하여 관리합니다.' : 'Framework for measuring AI investment ROI: cost reduction, revenue growth, risk reduction, and customer satisfaction improvement.', icon: 'fa-calculator' },
  ];

  return (
    <>
      <SEOHead title="AX 전략과 실행" description="AI 전환 전략 프레임워크와 실행 가이드" path="/ax-strategy" />
      <section className="guide-page">
        <div className="container">
          <div className="guide-header">
            <div className="guide-icon" style={{ background: '#2563EB' }}>
              <i className="fa-solid fa-chess-knight" />
            </div>
            <div>
              <h1 className="guide-title">{isKo ? 'AX 전략과 실행' : 'AX Strategy & Execution'}</h1>
              <p className="guide-subtitle">{isKo ? 'AI 전환 전략 수립부터 실행까지의 프레임워크를 학습합니다.' : 'Learn frameworks from AI transformation strategy to execution.'}</p>
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
