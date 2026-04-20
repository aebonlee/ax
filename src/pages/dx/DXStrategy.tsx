import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import type { ReactElement } from 'react';

export default function DXStrategy(): ReactElement {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  const sections = [
    { title: isKo ? 'DX 전략 수립' : 'DX Strategy Formulation', content: isKo ? 'DX 전략은 비전 설정, 현상 분석, 기회 도출, 이니셔티브 정의, 로드맵 수립의 5단계로 진행됩니다. 특히 고객 여정 분석과 밸류체인 디지털화를 통해 핵심 과제를 발굴합니다.' : 'DX strategy proceeds in 5 stages: vision setting, situation analysis, opportunity derivation, initiative definition, and roadmap establishment.', icon: 'fa-compass' },
    { title: isKo ? '변화 관리 (Change Management)' : 'Change Management', content: isKo ? '기술 도입보다 중요한 것이 사람의 변화입니다. Kotter의 8단계 변화 모델, ADKAR 모델을 활용한 체계적 변화 관리로 조직의 저항을 극복하고 디지털 마인드셋을 확산시킵니다.' : 'More important than technology adoption is people change. Overcome organizational resistance using Kotter\'s 8-step model and ADKAR model.', icon: 'fa-people-arrows' },
    { title: isKo ? '디지털 문화 조성' : 'Digital Culture Building', content: isKo ? '실험과 실패를 용인하는 문화, 데이터 기반 의사결정, 부서 간 협업, 고객 중심 사고, 지속적 학습 — 디지털 문화의 5대 핵심 요소를 구축하는 실전 방법론을 학습합니다.' : 'Learn practical methodologies for building 5 key elements of digital culture.', icon: 'fa-seedling' },
    { title: isKo ? '애자일 조직 전환' : 'Agile Organization Transformation', content: isKo ? '스프린트, 스크럼, 스쿼드 모델 등 애자일 방법론을 조직 전체에 적용하는 방법을 배웁니다. 빠른 실험, 빠른 학습, 빠른 적용의 사이클을 만드는 것이 핵심입니다.' : 'Learn how to apply agile methodologies like sprints, scrums, and squad models across the entire organization.', icon: 'fa-rotate' },
    { title: isKo ? 'DX KPI 설계' : 'DX KPI Design', content: isKo ? '디지털 전환의 성과를 측정하는 KPI 체계: 고객 만족도(NPS), 디지털 채널 비율, 프로세스 자동화율, 데이터 활용률, 신규 디지털 매출 비중 등을 설계하고 모니터링합니다.' : 'Design KPI systems for measuring DX outcomes: NPS, digital channel ratio, process automation rate, data utilization rate, new digital revenue share.', icon: 'fa-gauge-high' },
    { title: isKo ? '레거시 시스템 전환' : 'Legacy System Migration', content: isKo ? '기존 레거시 시스템을 현대화하는 6R 전략(Rehost, Replatform, Refactor, Repurchase, Retire, Retain)과 점진적 마이그레이션(Strangler Pattern) 방법론을 학습합니다.' : 'Learn 6R strategies for legacy modernization and gradual migration methodologies like the Strangler Pattern.', icon: 'fa-server' },
  ];

  return (
    <>
      <SEOHead title="DX 전략과 실행" description="디지털 전환 전략 수립과 변화 관리" path="/dx-strategy" />
      <section className="guide-page">
        <div className="container">
          <div className="guide-header">
            <div className="guide-icon" style={{ background: '#059669' }}>
              <i className="fa-solid fa-diagram-project" />
            </div>
            <div>
              <h1 className="guide-title">{isKo ? 'DX 전략과 실행' : 'DX Strategy & Execution'}</h1>
              <p className="guide-subtitle">{isKo ? '디지털 전환 전략 수립과 조직 변화 관리를 배웁니다.' : 'Learn digital transformation strategy and organizational change management.'}</p>
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
