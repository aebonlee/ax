import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import type { ReactElement } from 'react';

export default function Trends(): ReactElement {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  const sections = [
    { title: isKo ? '2026 AI 트렌드' : '2026 AI Trends', content: isKo ? '① AI 에이전트의 대중화 ② 멀티모달 AI 확산 ③ 소형 언어모델(SLM)의 부상 ④ AI 거버넌스 규제 강화 ⑤ 생성형 AI의 엔터프라이즈 통합 ⑥ AI 보안(AI Security) 시장 성장 — 2026년 AI 분야 6대 핵심 트렌드입니다.' : '6 key AI trends in 2026: AI agent mainstream, multimodal AI, SLM rise, governance regulation, enterprise GenAI, and AI security.', icon: 'fa-brain' },
    { title: isKo ? '산업별 혁신 동향' : 'Industry Innovation Trends', content: isKo ? '제조: 디지털 트윈 + AI 예지보전 | 금융: AI 리스크 관리 + 초개인화 | 유통: AI 수요 예측 + 무인 매장 | 의료: AI 신약 개발 + 정밀의학 | 교육: AI 튜터 + 적응형 학습' : 'Manufacturing: Digital Twin + AI Predictive | Finance: AI Risk + Hyper-personalization | Retail: AI Demand Forecast | Healthcare: AI Drug Discovery | Education: AI Tutor', icon: 'fa-industry' },
    { title: isKo ? '스타트업 & 투자 동향' : 'Startup & Investment Trends', content: isKo ? '2026년 글로벌 AI 투자는 2,000억 달러를 돌파했습니다. AI 에이전트, 수직 SaaS + AI, AI 인프라, 합성 데이터, AI 안전 분야에 투자가 집중되고 있습니다. 한국도 AI 스타트업 투자가 전년 대비 45% 증가했습니다.' : 'Global AI investment surpassed $200B in 2026. Focus areas: AI agents, vertical SaaS + AI, AI infrastructure, synthetic data, and AI safety.', icon: 'fa-rocket' },
    { title: isKo ? '글로벌 사례와 벤치마크' : 'Global Cases & Benchmarks', content: isKo ? 'Microsoft(Copilot 생태계), Google(Gemini 통합), Amazon(AI 물류 혁신), Tesla(자율주행 FSD), NVIDIA(AI 인프라) 등 글로벌 테크 자이언트의 AX 전략을 분석합니다.' : 'Analyze AX strategies of global tech giants: Microsoft, Google, Amazon, Tesla, NVIDIA.', icon: 'fa-globe' },
    { title: isKo ? '규제 & 정책 변화' : 'Regulation & Policy Changes', content: isKo ? 'EU AI Act 시행(2026), 한국 AI 기본법 제정, 미국 AI 행정명령 강화 — 전 세계적으로 AI 규제가 구체화되고 있습니다. 기업은 Responsible AI 체계를 갖추는 것이 필수입니다.' : 'EU AI Act enforcement, Korea AI Basic Law, US AI Executive Order — global AI regulation is becoming concrete.', icon: 'fa-gavel' },
    { title: isKo ? '미래 전망 (2027~2030)' : 'Future Outlook (2027~2030)', content: isKo ? 'AGI(범용 인공지능) 논의 가속, 양자컴퓨팅 + AI 융합, 뇌-컴퓨터 인터페이스, 완전 자율 AI 시스템 — 중장기 기술 전망과 이에 대비한 전략을 탐구합니다.' : 'AGI discussion acceleration, quantum + AI convergence, brain-computer interfaces, fully autonomous AI systems.', icon: 'fa-telescope' },
  ];

  return (
    <>
      <SEOHead title="최신 트렌드" description="AX·DX 분야의 최신 기술 트렌드와 시장 동향" path="/trends" />
      <section className="guide-page">
        <div className="container">
          <div className="guide-header">
            <div className="guide-icon" style={{ background: '#DC2626' }}>
              <i className="fa-solid fa-chart-line" />
            </div>
            <div>
              <h1 className="guide-title">{isKo ? '최신 트렌드' : 'Latest Trends'}</h1>
              <p className="guide-subtitle">{isKo ? 'AX·DX 분야의 최신 기술 트렌드와 시장 동향을 파악합니다.' : 'Stay updated with the latest technology trends in AX and DX.'}</p>
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
