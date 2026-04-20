import GuidePage from '../../components/GuidePage';
import TipBox from '../../components/TipBox';
import { useLanguage } from '../../contexts/LanguageContext';
import type { ReactElement } from 'react';
import type { GuideSection } from '../../components/GuidePage';

export default function AXCases(): ReactElement {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  const sections: GuideSection[] = [
    {
      id: 'microsoft',
      icon: 'fa-windows',
      labelKo: 'Microsoft Copilot',
      labelEn: 'Microsoft Copilot',
      content: (
        <>
          <h2>{isKo ? 'Microsoft의 AI 전환 전략' : 'Microsoft AI Transformation Strategy'}</h2>
          <p>{isKo
            ? 'Microsoft는 OpenAI에 130억 달러를 투자하고, 전 제품군에 AI Copilot을 탑재하여 "AI-First 기업"으로 완전히 전환했습니다. 2024~2026년 사이 매출 40% 성장의 핵심 동력이 AI입니다.'
            : 'Microsoft invested $13B in OpenAI and embedded AI Copilot across its entire product suite, fully transforming into an "AI-First company."'}</p>
          <h3>{isKo ? '핵심 AX 전략' : 'Core AX Strategy'}</h3>
          <ul>
            <li><strong>Copilot Everywhere</strong>: {isKo ? 'Office 365, Teams, GitHub, Azure, Windows에 AI 내장' : 'AI embedded in Office 365, Teams, GitHub, Azure, Windows'}</li>
            <li><strong>AI Infrastructure</strong>: {isKo ? 'Azure AI 클라우드 인프라 글로벌 1위 목표' : 'Targeting global #1 in Azure AI cloud infrastructure'}</li>
            <li><strong>Developer Platform</strong>: {isKo ? 'GitHub Copilot으로 개발자 생산성 55% 향상' : '55% developer productivity improvement with GitHub Copilot'}</li>
            <li><strong>Enterprise AI</strong>: {isKo ? 'Fortune 500 중 85%가 Microsoft AI 서비스 사용' : '85% of Fortune 500 use Microsoft AI services'}</li>
          </ul>
          <TipBox type="example">
            <p>{isKo
              ? 'Microsoft 365 Copilot 도입 기업 평균 성과: 문서 작성 시간 40% 단축, 회의 요약 85% 자동화, 이메일 처리 시간 50% 감소, 데이터 분석 작업 60% 자동화'
              : 'Microsoft 365 Copilot adoption results: 40% doc writing reduction, 85% meeting summary automation, 50% email time reduction'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'google',
      icon: 'fa-google',
      labelKo: 'Google AI-First',
      labelEn: 'Google AI-First',
      content: (
        <>
          <h2>{isKo ? 'Google의 AI-First 전환' : 'Google AI-First Transformation'}</h2>
          <p>{isKo
            ? 'Google은 2023년 "AI-First"를 선언하고 Gemini 모델을 핵심으로 검색, 광고, 클라우드, 유튜브 등 전 서비스를 AI로 재편했습니다.'
            : 'Google declared "AI-First" in 2023 and restructured all services around the Gemini model.'}</p>
          <h3>{isKo ? 'Gemini 생태계' : 'Gemini Ecosystem'}</h3>
          <ul>
            <li><strong>Search</strong>: {isKo ? 'AI 오버뷰로 검색 경험 혁신, 클릭 수 감소에도 수익 유지' : 'AI Overview revolutionizing search experience'}</li>
            <li><strong>Workspace</strong>: {isKo ? 'Gmail, Docs, Sheets에 Gemini 통합' : 'Gemini integrated in Gmail, Docs, Sheets'}</li>
            <li><strong>Cloud</strong>: {isKo ? 'Vertex AI로 엔터프라이즈 AI 시장 공략' : 'Targeting enterprise AI market with Vertex AI'}</li>
            <li><strong>Android</strong>: {isKo ? '온디바이스 AI로 모바일 AI 경험 강화' : 'Enhancing mobile AI with on-device AI'}</li>
          </ul>
          <TipBox type="tip">
            <p>{isKo
              ? 'Google의 교훈: AI 전환은 "기존 제품 + AI"가 아닌, "AI가 제품의 핵심"이 되어야 합니다. Google은 기존 검색 엔진을 AI로 완전히 재설계했습니다.'
              : 'Google\'s lesson: AI transformation means AI becomes the product core, not just an add-on.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'amazon',
      icon: 'fa-box',
      labelKo: 'Amazon AI 물류',
      labelEn: 'Amazon AI Logistics',
      content: (
        <>
          <h2>{isKo ? 'Amazon의 AI 물류 혁신' : 'Amazon AI Logistics Innovation'}</h2>
          <p>{isKo
            ? 'Amazon은 물류 전 과정에 AI를 적용하여 배송 시간 25% 단축, 재고 예측 정확도 95%, 로봇 75만 대 운영으로 세계 최고 수준의 AI 물류를 구축했습니다.'
            : 'Amazon applied AI across all logistics, achieving 25% faster delivery, 95% inventory prediction accuracy, and 750K robots.'}</p>
          <h3>{isKo ? 'AI 적용 영역' : 'AI Application Areas'}</h3>
          <ul>
            <li><strong>{isKo ? '수요 예측' : 'Demand Forecast'}</strong>: {isKo ? '수백만 SKU의 판매량을 AI로 예측, 재고 최적화' : 'AI predicts sales for millions of SKUs'}</li>
            <li><strong>{isKo ? '물류 자동화' : 'Logistics Automation'}</strong>: {isKo ? '풀필먼트 센터 로봇, 자율 배송 드론, 라스트마일 최적화' : 'Fulfillment robots, delivery drones, last-mile optimization'}</li>
            <li><strong>{isKo ? '개인화 추천' : 'Personalization'}</strong>: {isKo ? '매출의 35%가 AI 추천에서 발생' : '35% of revenue from AI recommendations'}</li>
            <li><strong>AWS AI</strong>: {isKo ? 'Bedrock, SageMaker로 B2B AI 서비스 제공' : 'B2B AI services via Bedrock and SageMaker'}</li>
          </ul>
        </>
      ),
    },
    {
      id: 'samsung',
      icon: 'fa-mobile',
      labelKo: '삼성전자 AI 반도체',
      labelEn: 'Samsung AI Semiconductors',
      content: (
        <>
          <h2>{isKo ? '삼성전자의 AI 전환' : 'Samsung Electronics AI Transformation'}</h2>
          <p>{isKo
            ? '삼성전자는 "AI for All" 비전 아래 반도체, 가전, 모바일 전 사업부에 AI를 적용하고 있습니다. 특히 AI 반도체(HBM)와 Galaxy AI로 하드웨어+소프트웨어 양면 AX를 추진합니다.'
            : 'Samsung pursues "AI for All" across semiconductors, appliances, and mobile with hardware + software AX.'}</p>
          <h3>{isKo ? '주요 AX 성과' : 'Key AX Achievements'}</h3>
          <ul>
            <li><strong>HBM (AI 반도체)</strong>: {isKo ? 'AI 학습용 고대역폭 메모리 시장 점유율 40%' : '40% market share in HBM for AI training'}</li>
            <li><strong>Galaxy AI</strong>: {isKo ? '온디바이스 AI로 실시간 번역, 요약, 이미지 편집' : 'On-device AI for real-time translation, summarization'}</li>
            <li><strong>{isKo ? '스마트팩토리' : 'Smart Factory'}</strong>: {isKo ? 'AI 비전 검사로 불량률 90% 감소, 수율 5% 향상' : '90% defect reduction with AI vision inspection'}</li>
            <li><strong>Bixby</strong>: {isKo ? 'LLM 기반 차세대 AI 비서로 전 가전 통합 제어' : 'LLM-based next-gen AI assistant for all appliances'}</li>
          </ul>
          <TipBox type="important">
            <p>{isKo
              ? '삼성의 교훈: "하드웨어 회사"에서 "AI 하드웨어+소프트웨어 회사"로의 전환. AI 반도체라는 인프라 레이어에서 경쟁 우위를 확보하는 전략이 핵심입니다.'
              : 'Samsung\'s lesson: Transition from "hardware company" to "AI hardware + software company."'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'finance',
      icon: 'fa-coins',
      labelKo: '금융권 AX',
      labelEn: 'Financial AX',
      content: (
        <>
          <h2>{isKo ? '금융권의 AI 전환' : 'Financial Sector AI Transformation'}</h2>
          <p>{isKo
            ? '금융업은 데이터 기반 의사결정이 핵심인 산업으로, AX 도입 효과가 가장 큰 분야 중 하나입니다. 리스크 관리, 사기 탐지, 초개인화, 자동 심사가 AI로 혁신되고 있습니다.'
            : 'Finance is one of the industries where AX adoption has the greatest impact, with risk management, fraud detection, and personalization being transformed.'}</p>
          <h3>{isKo ? '국내 금융 AX 사례' : 'Korean Financial AX Cases'}</h3>
          <table className="guide-table">
            <thead><tr><th>{isKo ? '기업' : 'Company'}</th><th>{isKo ? 'AI 적용' : 'AI Application'}</th><th>{isKo ? '성과' : 'Results'}</th></tr></thead>
            <tbody>
              <tr><td>{isKo ? '카카오뱅크' : 'Kakao Bank'}</td><td>{isKo ? 'AI 신용평가' : 'AI Credit Scoring'}</td><td>{isKo ? '대출 승인율 20%↑, 연체율 15%↓' : '20% more approvals, 15% less defaults'}</td></tr>
              <tr><td>{isKo ? '토스' : 'Toss'}</td><td>{isKo ? 'AI 이상거래 탐지' : 'AI Fraud Detection'}</td><td>{isKo ? '사기 거래 90% 차단' : '90% fraud blocked'}</td></tr>
              <tr><td>{isKo ? 'KB국민은행' : 'KB Bank'}</td><td>{isKo ? 'AI 자산관리' : 'AI Wealth Mgmt'}</td><td>{isKo ? '고객 만족도 30%↑' : '30% satisfaction increase'}</td></tr>
              <tr><td>{isKo ? '신한금융' : 'Shinhan'}</td><td>{isKo ? 'AI 마케팅' : 'AI Marketing'}</td><td>{isKo ? '캠페인 전환율 2.5배↑' : '2.5x campaign conversion'}</td></tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      id: 'lessons',
      icon: 'fa-graduation-cap',
      labelKo: '핵심 교훈',
      labelEn: 'Key Lessons',
      content: (
        <>
          <h2>{isKo ? 'AX 사례에서 배우는 핵심 교훈' : 'Key Lessons from AX Cases'}</h2>
          <p>{isKo
            ? '성공한 기업들의 공통 패턴을 분석하면 다음과 같은 핵심 교훈을 도출할 수 있습니다.'
            : 'Analyzing common patterns of successful companies reveals the following key lessons.'}</p>
          <h3>{isKo ? '성공 기업의 5가지 공통점' : '5 Common Traits of Successful Companies'}</h3>
          <ol>
            <li><strong>{isKo ? 'CEO가 직접 주도' : 'CEO-Led Initiative'}</strong>: {isKo ? 'Satya Nadella(MS), Sundar Pichai(Google) 등 CEO가 AI를 최우선 의제로 추진' : 'CEOs like Nadella, Pichai drive AI as top priority'}</li>
            <li><strong>{isKo ? '플랫폼 전략' : 'Platform Strategy'}</strong>: {isKo ? '개별 AI 도구가 아닌, AI 플랫폼을 구축하여 생태계 확장' : 'Build AI platforms, not individual tools'}</li>
            <li><strong>{isKo ? '데이터 우선' : 'Data First'}</strong>: {isKo ? 'AI 개발 전에 데이터 파이프라인과 품질 관리 체계를 먼저 확보' : 'Secure data pipelines and quality management before AI development'}</li>
            <li><strong>{isKo ? '인재 투자' : 'Talent Investment'}</strong>: {isKo ? 'AI 엔지니어 확보에 연간 수십억 투자, 내부 교육 프로그램 운영' : 'Billions invested annually in AI talent, internal training programs'}</li>
            <li><strong>{isKo ? '빠른 실험 문화' : 'Fast Experimentation'}</strong>: {isKo ? '실패를 허용하고 빠르게 학습하는 조직 문화' : 'Culture that allows failure and fast learning'}</li>
          </ol>
          <TipBox type="warning" title={isKo ? '실패 사례 교훈' : 'Failure Lessons'}>
            <p>{isKo
              ? '• GE Digital: 과도한 투자($7B)와 불명확한 전략으로 실패\n• IBM Watson Health: 의료 AI의 기대와 현실 괴리\n교훈: "AI가 할 수 있는 것"이 아닌 "비즈니스에 필요한 것"에서 시작하세요.'
              : '• GE Digital: $7B over-investment with unclear strategy\n• IBM Watson Health: Gap between expectations and reality\nLesson: Start from business needs, not AI capabilities.'}</p>
          </TipBox>
        </>
      ),
    },
  ];

  return (
    <GuidePage
      titleKo="AX 적용 사례"
      titleEn="AX Use Cases"
      subtitleKo="글로벌 및 국내 기업의 AI 전환 사례를 분석합니다."
      subtitleEn="Analyze AI transformation cases from global and Korean enterprises."
      icon="fa-building"
      iconColor="#1E3A5F"
      path="/ax-cases"
      sections={sections}
    />
  );
}
