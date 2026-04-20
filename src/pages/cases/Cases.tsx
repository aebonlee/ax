import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import type { ReactElement } from 'react';

export default function Cases(): ReactElement {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  const sections = [
    { title: isKo ? '글로벌 대기업 AX 사례' : 'Global Enterprise AX Cases', content: isKo ? '• Microsoft: Copilot으로 전 제품 AI 통합, 생산성 40% 향상\n• Google: Gemini 기반 AI-First 전환, 검색·광고·클라우드 혁신\n• Amazon: AI 물류 최적화로 배송 시간 25% 단축, Alexa 비즈니스 확대\n• JP Morgan: AI 리스크 관리로 연간 $150M 손실 방지' : '• Microsoft: 40% productivity gain with Copilot\n• Google: AI-First with Gemini\n• Amazon: 25% delivery time reduction\n• JP Morgan: $150M annual loss prevention with AI', icon: 'fa-building' },
    { title: isKo ? '중소기업 DX 성공 사례' : 'SME DX Success Cases', content: isKo ? '• 제조 중소기업 A사: 클라우드 ERP + AI 품질검사로 불량률 80% 감소\n• 유통 B사: 옴니채널 + AI 추천으로 매출 35% 증가\n• 서비스 C사: 챗봇 + RPA로 고객 응대 시간 60% 단축\n— 중소기업도 단계적 접근으로 DX 성과를 창출할 수 있습니다.' : '• Manufacturer A: 80% defect reduction with Cloud ERP + AI\n• Retailer B: 35% revenue growth with Omnichannel + AI\n• Service C: 60% response time reduction with Chatbot + RPA', icon: 'fa-store' },
    { title: isKo ? '공공 부문 DX 사례' : 'Public Sector DX Cases', content: isKo ? '• 한국 정부24: AI 민원 상담으로 처리 시간 50% 단축\n• 싱가포르 Smart Nation: 도시 전체 디지털 플랫폼 구축\n• 에스토니아 X-Road: 전자정부 인프라로 GDP 2% 절감\n• 영국 NHS: AI 의료 진단으로 대기시간 30% 감소' : '• Korea Gov24: 50% processing time reduction\n• Singapore Smart Nation: City-wide digital platform\n• Estonia X-Road: 2% GDP savings\n• UK NHS: 30% wait time reduction', icon: 'fa-landmark' },
    { title: isKo ? '제조업 DX·AX 사례' : 'Manufacturing DX·AX Cases', content: isKo ? '• 현대자동차: 디지털 트윈으로 신차 개발 기간 30% 단축\n• 삼성전자: AI 반도체 공정 최적화로 수율 5% 향상\n• 지멘스: MindSphere 플랫폼으로 예지보전, 가동률 99.5% 달성\n• 포스코: AI 용광로 제어로 에너지 효율 3% 개선' : '• Hyundai: 30% faster development with Digital Twin\n• Samsung: 5% yield improvement with AI\n• Siemens: 99.5% uptime with MindSphere\n• POSCO: 3% energy efficiency with AI furnace control', icon: 'fa-gear' },
    { title: isKo ? '금융 AX 사례' : 'Financial AX Cases', content: isKo ? '• 카카오뱅크: AI 신용평가로 대출 승인율 20% 향상\n• 토스: AI 이상거래 탐지로 사기 90% 차단\n• Goldman Sachs: AI 트레이딩으로 수익률 15% 개선\n• Ant Financial: 3분 대출 심사, AI가 99%의 결정 자동 수행' : '• Kakao Bank: 20% better approval with AI credit scoring\n• Toss: 90% fraud blocked with AI\n• Goldman Sachs: 15% return improvement\n• Ant Financial: 3-min loan processing, 99% automated', icon: 'fa-coins' },
    { title: isKo ? '실패 사례에서 배우는 교훈' : 'Lessons from Failures', content: isKo ? '• GE Digital: 과도한 투자와 불명확한 전략으로 $7B 손실\n• 국내 D사: 조직 저항 미관리로 DX 프로젝트 2년 지연\n• E사: 데이터 품질 미확보 상태에서 AI 도입, ROI 마이너스\n— 실패의 공통 원인: 전략 부재, 변화 관리 실패, 데이터 준비 부족, 과도한 기대.' : '• GE Digital: $7B loss from excessive investment\n• Company D: 2-year delay from unmanaged resistance\n• Company E: Negative ROI from poor data quality\nCommon causes: no strategy, failed change management, poor data, excessive expectations.', icon: 'fa-triangle-exclamation' },
  ];

  return (
    <>
      <SEOHead title="기업 사례 분석" description="국내외 기업의 AX·DX 성공 사례와 교훈" path="/cases" />
      <section className="guide-page">
        <div className="container">
          <div className="guide-header">
            <div className="guide-icon" style={{ background: '#EA580C' }}>
              <i className="fa-solid fa-building" />
            </div>
            <div>
              <h1 className="guide-title">{isKo ? '기업 사례 분석' : 'Enterprise Case Studies'}</h1>
              <p className="guide-subtitle">{isKo ? '국내외 기업의 AX·DX 성공 사례와 교훈을 분석합니다.' : 'Analyze AX and DX success cases and lessons from global enterprises.'}</p>
            </div>
          </div>
          <div className="guide-content">
            {sections.map((section, idx) => (
              <div key={idx} className="guide-section" data-aos="fade-up">
                <div className="guide-section-header">
                  <i className={`fa-solid ${section.icon}`} />
                  <h2>{section.title}</h2>
                </div>
                <p className="guide-section-content" style={{ whiteSpace: 'pre-line' }}>{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
