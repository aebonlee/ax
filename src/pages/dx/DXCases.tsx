import GuidePage from '../../components/GuidePage';
import TipBox from '../../components/TipBox';
import { useLanguage } from '../../contexts/LanguageContext';
import type { ReactElement } from 'react';
import type { GuideSection } from '../../components/GuidePage';

export default function DXCases(): ReactElement {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  const sections: GuideSection[] = [
    {
      id: 'manufacturing',
      icon: 'fa-industry',
      labelKo: '제조업 DX',
      labelEn: 'Manufacturing DX',
      content: (
        <>
          <h2>{isKo ? '제조업 디지털 전환 사례' : 'Manufacturing DX Cases'}</h2>
          <p>{isKo ? '스마트팩토리, 디지털 트윈, 예지보전 등 제조업 DX의 핵심 사례를 분석합니다.' : 'Analyze key manufacturing DX cases including smart factories, digital twins, and predictive maintenance.'}</p>
          <h3>{isKo ? '현대자동차 — 디지털 트윈' : 'Hyundai Motor — Digital Twin'}</h3>
          <ul>
            <li>{isKo ? '전 생산 라인의 디지털 트윈 구축으로 신차 개발 기간 30% 단축' : '30% faster vehicle development with digital twin of all production lines'}</li>
            <li>{isKo ? '가상 시뮬레이션으로 시제품 제작 비용 50% 절감' : '50% prototype cost reduction with virtual simulation'}</li>
            <li>{isKo ? '실시간 품질 모니터링으로 리콜 건수 40% 감소' : '40% recall reduction with real-time quality monitoring'}</li>
          </ul>
          <h3>{isKo ? '지멘스 — MindSphere' : 'Siemens — MindSphere'}</h3>
          <ul>
            <li>{isKo ? 'IoT 플랫폼 MindSphere로 전 세계 공장 데이터 통합' : 'Global factory data integration with MindSphere IoT platform'}</li>
            <li>{isKo ? '예지보전으로 설비 가동률 99.5% 달성' : '99.5% equipment uptime with predictive maintenance'}</li>
            <li>{isKo ? '에너지 효율 15% 개선' : '15% energy efficiency improvement'}</li>
          </ul>
          <TipBox type="tip">
            <p>{isKo ? '제조업 DX의 핵심: 센서(IoT) → 데이터 수집 → AI 분석 → 자동 최적화의 루프를 만드는 것입니다.' : 'Key to manufacturing DX: Creating the loop of Sensors → Data → AI Analysis → Auto Optimization.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'retail',
      icon: 'fa-store',
      labelKo: '유통/커머스 DX',
      labelEn: 'Retail/Commerce DX',
      content: (
        <>
          <h2>{isKo ? '유통·커머스 DX 사례' : 'Retail & Commerce DX Cases'}</h2>
          <p>{isKo ? '옴니채널, AI 추천, 무인 매장 등 유통업 디지털 전환의 선도 사례를 분석합니다.' : 'Analyze leading retail DX cases including omnichannel, AI recommendations, and unmanned stores.'}</p>
          <h3>{isKo ? '쿠팡 — 풀필먼트 혁신' : 'Coupang — Fulfillment Innovation'}</h3>
          <ul>
            <li>{isKo ? 'AI 수요 예측으로 당일/새벽 배송 커버율 95% 달성' : '95% same-day delivery coverage with AI demand prediction'}</li>
            <li>{isKo ? '자동화 물류센터로 주문-배송 시간 70% 단축' : '70% order-to-delivery time reduction with automated fulfillment'}</li>
          </ul>
          <h3>{isKo ? '스타벅스 — Deep Brew' : 'Starbucks — Deep Brew'}</h3>
          <ul>
            <li>{isKo ? 'AI 기반 초개인화 추천으로 주문 당 매출 15% 증가' : '15% revenue per order increase with AI personalization'}</li>
            <li>{isKo ? '매장별 수요 예측으로 폐기 식재료 30% 감소' : '30% food waste reduction with store-level demand prediction'}</li>
          </ul>
        </>
      ),
    },
    {
      id: 'healthcare',
      icon: 'fa-hospital',
      labelKo: '의료/헬스케어 DX',
      labelEn: 'Healthcare DX',
      content: (
        <>
          <h2>{isKo ? '의료 DX 사례' : 'Healthcare DX Cases'}</h2>
          <p>{isKo ? '디지털 헬스, AI 진단, 원격의료 등 의료 분야의 디지털 전환 사례입니다.' : 'Digital health, AI diagnosis, and telemedicine DX cases.'}</p>
          <h3>{isKo ? '뷰노 — AI 의료 영상 진단' : 'Vuno — AI Medical Imaging'}</h3>
          <ul>
            <li>{isKo ? '흉부 X-ray AI 분석으로 진단 정확도 95%, 판독 시간 80% 단축' : '95% diagnostic accuracy, 80% reading time reduction with chest X-ray AI'}</li>
            <li>{isKo ? 'FDA 및 식약처 승인 획득, 전 세계 50여 병원 도입' : 'FDA and MFDS approved, deployed in 50+ hospitals worldwide'}</li>
          </ul>
          <h3>{isKo ? '메이오 클리닉 — 디지털 전환' : 'Mayo Clinic — Digital Transformation'}</h3>
          <ul>
            <li>{isKo ? 'AI 기반 환자 위험도 예측으로 조기 개입률 40% 증가' : '40% increase in early intervention with AI patient risk prediction'}</li>
            <li>{isKo ? '전자 건강 기록(EHR) 통합으로 진료 효율 25% 향상' : '25% care efficiency improvement with EHR integration'}</li>
          </ul>
          <TipBox type="important">
            <p>{isKo ? '의료 DX 핵심 과제: 데이터 프라이버시(HIPAA/개인정보보호법), 임상 검증, 규제 승인의 3대 장벽을 극복해야 합니다.' : 'Healthcare DX challenges: Must overcome data privacy, clinical validation, and regulatory approval barriers.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'public',
      icon: 'fa-landmark',
      labelKo: '공공 부문 DX',
      labelEn: 'Public Sector DX',
      content: (
        <>
          <h2>{isKo ? '공공 부문 DX 사례' : 'Public Sector DX Cases'}</h2>
          <p>{isKo ? '스마트 시티, 전자 정부, 공공 데이터 개방 등 공공 분야의 디지털 전환 사례입니다.' : 'Smart city, e-government, and open data DX cases in the public sector.'}</p>
          <h3>{isKo ? '싱가포르 Smart Nation' : 'Singapore Smart Nation'}</h3>
          <ul>
            <li>{isKo ? '도시 전체를 센서와 AI로 연결, 교통·에너지·치안 통합 관리' : 'City-wide IoT and AI integration for traffic, energy, and security'}</li>
            <li>{isKo ? '디지털 ID "SingPass"로 모든 정부 서비스 원스톱 이용' : 'One-stop government services with "SingPass" digital ID'}</li>
          </ul>
          <h3>{isKo ? '에스토니아 X-Road' : 'Estonia X-Road'}</h3>
          <ul>
            <li>{isKo ? '블록체인 기반 전자정부 인프라로 GDP 2% 절감 효과' : '2% GDP savings with blockchain-based e-government infrastructure'}</li>
            <li>{isKo ? '전 국민의 99%가 디지털 ID 보유, 99%의 행정 서비스 온라인화' : '99% of citizens have digital ID, 99% of services online'}</li>
          </ul>
        </>
      ),
    },
    {
      id: 'education',
      icon: 'fa-graduation-cap',
      labelKo: '교육 DX',
      labelEn: 'Education DX',
      content: (
        <>
          <h2>{isKo ? '교육 분야 DX 사례' : 'Education DX Cases'}</h2>
          <p>{isKo ? '에듀테크, AI 튜터, 적응형 학습 등 교육 디지털 전환의 최신 동향입니다.' : 'Latest trends in education DX including edtech, AI tutors, and adaptive learning.'}</p>
          <h3>{isKo ? '칸 아카데미 — Khanmigo (AI 튜터)' : 'Khan Academy — Khanmigo (AI Tutor)'}</h3>
          <ul>
            <li>{isKo ? 'GPT-4 기반 1:1 AI 튜터로 학생 맞춤형 학습 지원' : 'GPT-4 based 1:1 AI tutor for personalized student support'}</li>
            <li>{isKo ? '학생 성적 평균 18% 향상, 학습 참여도 45% 증가' : '18% grade improvement, 45% engagement increase'}</li>
          </ul>
          <h3>{isKo ? '코세라/유데미 — 적응형 학습' : 'Coursera/Udemy — Adaptive Learning'}</h3>
          <ul>
            <li>{isKo ? 'AI가 학습자 수준을 분석하여 최적의 콘텐츠와 경로를 추천' : 'AI analyzes learner level to recommend optimal content and paths'}</li>
            <li>{isKo ? '완료율 30% 향상, 학습 시간 25% 단축' : '30% completion rate improvement, 25% time reduction'}</li>
          </ul>
        </>
      ),
    },
    {
      id: 'sme',
      icon: 'fa-store',
      labelKo: '중소기업 DX',
      labelEn: 'SME DX',
      content: (
        <>
          <h2>{isKo ? '중소기업 DX 성공 전략' : 'SME DX Success Strategy'}</h2>
          <p>{isKo ? '대기업과 달리 예산과 인력이 제한적인 중소기업이 DX를 성공시키는 방법입니다.' : 'How SMEs with limited budgets and resources can succeed in DX.'}</p>
          <h3>{isKo ? '중소기업 DX 3단계 접근법' : '3-Step SME DX Approach'}</h3>
          <ol>
            <li><strong>{isKo ? '1단계: SaaS 활용' : 'Step 1: Leverage SaaS'}</strong> — {isKo ? '자체 개발 대신 클라우드 SaaS(Notion, Slack, 채널톡)로 즉시 디지털화' : 'Digitize immediately with SaaS instead of custom development'}</li>
            <li><strong>{isKo ? '2단계: 데이터 축적' : 'Step 2: Data Accumulation'}</strong> — {isKo ? '고객, 매출, 재고 데이터를 체계적으로 수집·정리' : 'Systematically collect and organize customer, sales, inventory data'}</li>
            <li><strong>{isKo ? '3단계: AI 자동화' : 'Step 3: AI Automation'}</strong> — {isKo ? '축적된 데이터를 기반으로 AI 도구(ChatGPT API, 로우코드 AI)를 적용' : 'Apply AI tools based on accumulated data'}</li>
          </ol>
          <TipBox type="tip" title={isKo ? '중소기업 DX 핵심 팁' : 'SME DX Key Tips'}>
            <p>{isKo
              ? '• 처음부터 완벽하지 않아도 됩니다. 작게 시작하세요.\n• 정부 지원 사업(스마트공장 바우처, 디지털 뉴딜)을 적극 활용하세요.\n• SaaS 월 구독료(10~50만원)로 시작하면 초기 투자 부담이 적습니다.'
              : '• You don\'t need to be perfect from the start. Start small.\n• Leverage government support programs.\n• Monthly SaaS subscriptions minimize initial investment.'}</p>
          </TipBox>
        </>
      ),
    },
  ];

  return (
    <GuidePage
      titleKo="DX 적용 사례"
      titleEn="DX Use Cases"
      subtitleKo="산업별 디지털 전환 성공 사례를 분석합니다."
      subtitleEn="Analyze digital transformation success cases by industry."
      icon="fa-building"
      iconColor="#0891B2"
      path="/dx-cases"
      sections={sections}
    />
  );
}
