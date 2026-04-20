import GuidePage from '../../components/GuidePage';
import TipBox from '../../components/TipBox';
import { useLanguage } from '../../contexts/LanguageContext';
import type { ReactElement } from 'react';
import type { GuideSection } from '../../components/GuidePage';

export default function CasesGlobal(): ReactElement {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  const sections: GuideSection[] = [
    {
      id: 'microsoft',
      icon: 'fa-microsoft',
      labelKo: 'Microsoft',
      labelEn: 'Microsoft',
      content: (
        <>
          <h2>{isKo ? 'Microsoft의 AI 전환 전략' : 'Microsoft AI Transformation Strategy'}</h2>
          <p>{isKo
            ? 'Microsoft는 Satya Nadella CEO 취임(2014) 이후 "클라우드 퍼스트, AI 퍼스트"를 선언하고, 2023년 OpenAI에 $13B을 투자하며 AI 시대의 선두 주자로 자리매김했습니다.'
            : 'Since Satya Nadella became CEO (2014), Microsoft declared "Cloud First, AI First" and positioned itself as an AI era leader with a $13B investment in OpenAI in 2023.'}</p>
          <h3>{isKo ? '핵심 전략: Copilot 생태계' : 'Core Strategy: Copilot Ecosystem'}</h3>
          <ul>
            <li><strong>Microsoft 365 Copilot</strong>: {isKo ? 'Word, Excel, PowerPoint, Teams 등 전 제품에 AI 내장. 기업 생산성 40% 향상 보고' : 'AI embedded in Word, Excel, PowerPoint, Teams. 40% enterprise productivity improvement reported'}</li>
            <li><strong>GitHub Copilot</strong>: {isKo ? '개발자 코딩 생산성 55% 향상, 코드 작성 시간 46% 단축. 150만+ 유료 사용자' : '55% developer productivity gain, 46% code writing time reduction. 1.5M+ paid users'}</li>
            <li><strong>Security Copilot</strong>: {isKo ? 'AI 기반 사이버보안 분석으로 위협 대응 시간 65% 단축' : '65% threat response time reduction with AI-based cybersecurity analysis'}</li>
            <li><strong>Dynamics 365 Copilot</strong>: {isKo ? 'ERP/CRM에 AI 통합으로 영업, 서비스, 공급망 자동화' : 'Sales, service, supply chain automation with AI-integrated ERP/CRM'}</li>
          </ul>
          <h3>{isKo ? 'OpenAI 파트너십 전략' : 'OpenAI Partnership Strategy'}</h3>
          <ul>
            <li><strong>{isKo ? '독점 클라우드 파트너' : 'Exclusive Cloud Partner'}</strong>: {isKo ? 'Azure가 OpenAI의 독점 클라우드 인프라 제공, Azure AI 서비스 매출 급증' : 'Azure as OpenAI\'s exclusive cloud infrastructure, Azure AI service revenue surge'}</li>
            <li><strong>{isKo ? '모델 통합' : 'Model Integration'}</strong>: {isKo ? 'GPT-4를 Microsoft 전 제품에 통합, 경쟁사 대비 AI 역량 우위 확보' : 'GPT-4 integrated across all Microsoft products, securing AI capability advantage'}</li>
            <li><strong>{isKo ? '기업 시장 장악' : 'Enterprise Market Dominance'}</strong>: {isKo ? 'Fortune 500 기업 85%가 Azure OpenAI 서비스 사용' : '85% of Fortune 500 companies use Azure OpenAI services'}</li>
          </ul>
          <h3>{isKo ? '정량적 성과' : 'Quantitative Results'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '지표' : 'Metric'}</th>
                <th>{isKo ? '성과' : 'Result'}</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>{isKo ? '시가총액 성장' : 'Market Cap Growth'}</td><td>$300B → $3T+ (10x, 2014-2025)</td></tr>
              <tr><td>{isKo ? 'Azure AI 매출 성장' : 'Azure AI Revenue'}</td><td>{isKo ? '전년대비 50%+ 성장 지속' : '50%+ YoY growth sustained'}</td></tr>
              <tr><td>{isKo ? 'Copilot 사용자' : 'Copilot Users'}</td><td>{isKo ? '기업 고객 40만+ 조직 도입' : '400K+ enterprise organizations adopted'}</td></tr>
              <tr><td>{isKo ? '직원 생산성 향상' : 'Employee Productivity'}</td><td>{isKo ? '평균 40% (자체 조사)' : '40% average (internal survey)'}</td></tr>
            </tbody>
          </table>
          <TipBox type="example">
            <p>{isKo
              ? 'Microsoft의 교훈: "AI를 별도 사업이 아닌, 기존 제품 전체에 스며들게 하라." Copilot 전략은 새로운 앱을 만든 것이 아니라, 10억 명이 이미 사용하는 Office에 AI를 자연스럽게 통합한 것이 핵심입니다.'
              : 'Microsoft lesson: "Let AI permeate all existing products, not as a separate business." The Copilot strategy\'s key was naturally integrating AI into Office, already used by 1 billion people.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'google',
      icon: 'fa-google',
      labelKo: 'Google',
      labelEn: 'Google',
      content: (
        <>
          <h2>{isKo ? 'Google의 AI-First 전환' : 'Google AI-First Transformation'}</h2>
          <p>{isKo
            ? 'Google은 2016년 Sundar Pichai CEO가 "AI-First Company"를 선언한 이후, 검색·광고·클라우드·하드웨어 전 영역에서 AI 중심으로 재편되었습니다. DeepMind 인수와 Gemini 모델 개발로 AI 기초연구에서도 선도적 위치를 유지합니다.'
            : 'Since CEO Sundar Pichai declared Google an "AI-First Company" in 2016, all areas including search, advertising, cloud, and hardware have been reorganized around AI. Google maintains a leading position in AI foundational research with DeepMind and Gemini.'}</p>
          <h3>{isKo ? 'Gemini: 차세대 멀티모달 AI' : 'Gemini: Next-Gen Multimodal AI'}</h3>
          <ul>
            <li><strong>Gemini Ultra</strong>: {isKo ? '텍스트, 이미지, 비디오, 코드를 이해하는 멀티모달 AI. 벤치마크 57개 중 30개에서 1위' : 'Multimodal AI understanding text, image, video, code. #1 in 30 of 57 benchmarks'}</li>
            <li><strong>Gemini in Search</strong>: {isKo ? 'AI Overview로 검색 결과 요약 제공, 검색 경험 혁신' : 'AI Overview provides search result summaries, innovating search experience'}</li>
            <li><strong>Gemini in Workspace</strong>: {isKo ? 'Gmail, Docs, Sheets에 AI 통합으로 기업 생산성 도구 혁신' : 'AI integration in Gmail, Docs, Sheets innovating enterprise productivity'}</li>
          </ul>
          <h3>{isKo ? 'Google Cloud & Vertex AI' : 'Google Cloud & Vertex AI'}</h3>
          <ul>
            <li><strong>Vertex AI</strong>: {isKo ? '기업이 자체 AI 모델을 쉽게 구축·배포할 수 있는 통합 플랫폼. 130만+ 개발자 사용' : 'Unified platform for enterprises to easily build and deploy AI models. 1.3M+ developers'}</li>
            <li><strong>TPU (Tensor Processing Unit)</strong>: {isKo ? '자체 설계 AI 전용 칩으로 클라우드 AI 비용 80% 절감' : 'Custom-designed AI chips reducing cloud AI costs by 80%'}</li>
            <li><strong>{isKo ? '기업 AI 솔루션' : 'Enterprise AI Solutions'}</strong>: {isKo ? 'Contact Center AI, Document AI, 의료 AI 등 산업별 특화 솔루션' : 'Contact Center AI, Document AI, Healthcare AI industry-specific solutions'}</li>
          </ul>
          <h3>{isKo ? 'DeepMind의 연구 혁신' : 'DeepMind Research Innovation'}</h3>
          <ul>
            <li><strong>AlphaFold</strong>: {isKo ? '2억+ 단백질 구조 예측으로 신약 개발 혁명. 노벨상 수상(2024)' : 'Predicted 200M+ protein structures revolutionizing drug development. Nobel Prize (2024)'}</li>
            <li><strong>AlphaGo → AlphaZero</strong>: {isKo ? '범용 AI 학습 알고리즘의 가능성 증명' : 'Proved possibility of general-purpose AI learning algorithms'}</li>
            <li><strong>{isKo ? '기후·에너지' : 'Climate/Energy'}</strong>: {isKo ? '데이터센터 냉각 에너지 40% 절감, 핵융합 플라즈마 제어 AI' : '40% data center cooling energy reduction, fusion plasma control AI'}</li>
          </ul>
          <TipBox type="tip">
            <p>{isKo
              ? 'Google의 핵심 전략: "AI를 연구실에서 제품으로." DeepMind의 기초연구 → Google 제품 적용 → 사용자 데이터 수집 → 모델 개선의 선순환 구조가 Google AI의 경쟁력입니다.'
              : 'Google\'s core strategy: "From research lab to product." The virtuous cycle of DeepMind research → Google product application → user data collection → model improvement is Google AI\'s competitive edge.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'amazon',
      icon: 'fa-box',
      labelKo: 'Amazon',
      labelEn: 'Amazon',
      content: (
        <>
          <h2>{isKo ? 'Amazon의 AI 물류 혁명' : 'Amazon AI Logistics Revolution'}</h2>
          <p>{isKo
            ? 'Amazon은 전자상거래, 물류, 클라우드(AWS), 음성AI(Alexa) 전 영역에서 AI를 가장 깊이 적용한 기업입니다. "고객 집착(Customer Obsession)"을 AI로 실현하며, 전 세계 물류의 기준을 재정의했습니다.'
            : 'Amazon is the company that most deeply applies AI across e-commerce, logistics, cloud (AWS), and voice AI (Alexa). Realizing "Customer Obsession" through AI, it has redefined global logistics standards.'}</p>
          <h3>{isKo ? 'AI 물류 시스템' : 'AI Logistics System'}</h3>
          <ul>
            <li><strong>{isKo ? '75만 대 로봇' : '750K Robots'}</strong>: {isKo ? '풀필먼트 센터에 75만+ 대의 로봇 배치. 주문 처리 속도 5배 향상, 인건비 20% 절감' : '750K+ robots in fulfillment centers. 5x order processing speed, 20% labor cost reduction'}</li>
            <li><strong>{isKo ? 'AI 수요 예측' : 'AI Demand Forecasting'}</strong>: {isKo ? '수십억 상품의 수요를 AI로 예측하여 재고를 최적 배치. 예측 정확도 95%+' : 'AI predicts demand for billions of products for optimal inventory placement. 95%+ accuracy'}</li>
            <li><strong>{isKo ? '라스트마일 배송' : 'Last-Mile Delivery'}</strong>: {isKo ? 'AI 경로 최적화로 배송 시간 25% 단축. 드론 배송 "Prime Air" 상용화 추진' : '25% delivery time reduction with AI route optimization. Drone delivery "Prime Air" commercialization'}</li>
            <li><strong>{isKo ? '예측 배송(Anticipatory Shipping)' : 'Anticipatory Shipping'}</strong>: {isKo ? '고객이 주문하기 전에 AI가 수요를 예측하여 미리 가까운 물류센터에 배치' : 'AI predicts demand before customer orders, pre-positioning at nearby fulfillment centers'}</li>
          </ul>
          <h3>{isKo ? 'AWS AI 서비스' : 'AWS AI Services'}</h3>
          <ul>
            <li><strong>Amazon Bedrock</strong>: {isKo ? '기업용 생성형 AI 플랫폼. Claude, Llama 등 다양한 모델 제공' : 'Enterprise generative AI platform offering Claude, Llama, and various models'}</li>
            <li><strong>SageMaker</strong>: {isKo ? 'ML 모델 개발·학습·배포 통합 플랫폼. 기업 AI 도입 진입장벽 낮춤' : 'Integrated ML model development, training, deployment platform lowering enterprise AI barriers'}</li>
            <li><strong>Amazon Q</strong>: {isKo ? '기업용 AI 어시스턴트. 코딩, 비즈니스 분석, 고객 서비스 지원' : 'Enterprise AI assistant for coding, business analysis, customer service'}</li>
          </ul>
          <h3>{isKo ? 'Alexa와 음성 AI' : 'Alexa and Voice AI'}</h3>
          <ul>
            <li><strong>{isKo ? '생태계 확장' : 'Ecosystem Expansion'}</strong>: {isKo ? '5억+ 대 Alexa 기기, 14만+ 개 호환 기기, 10만+ 스킬' : '500M+ Alexa devices, 140K+ compatible devices, 100K+ skills'}</li>
            <li><strong>{isKo ? '커머스 연동' : 'Commerce Integration'}</strong>: {isKo ? '음성으로 상품 주문, 배송 추적, 재주문 — 쇼핑 경험의 재정의' : 'Voice ordering, delivery tracking, reordering — redefining shopping experience'}</li>
          </ul>
          <TipBox type="important">
            <p>{isKo
              ? 'Amazon의 핵심 교훈: "AI를 비용 절감 도구가 아닌, 고객 경험 혁신의 수단으로 활용하라." Amazon은 AI를 통해 당일 배송, 개인화 추천, 음성 쇼핑이라는 새로운 고객 가치를 창출했습니다.'
              : 'Amazon\'s key lesson: "Use AI not as a cost-cutting tool but as a means for customer experience innovation." Amazon created new customer value through same-day delivery, personalized recommendations, and voice shopping via AI.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'tesla',
      icon: 'fa-car',
      labelKo: 'Tesla',
      labelEn: 'Tesla',
      content: (
        <>
          <h2>{isKo ? 'Tesla의 AI 기반 자율주행과 제조' : 'Tesla AI-Powered Autonomous Driving & Manufacturing'}</h2>
          <p>{isKo
            ? 'Tesla는 단순한 전기차 제조사가 아닌, "AI와 로보틱스 회사"로 스스로를 재정의합니다. 자율주행(FSD), AI 슈퍼컴퓨터(Dojo), 인간형 로봇(Optimus)으로 AI 혁신의 범위를 확장하고 있습니다.'
            : 'Tesla redefines itself not as a simple EV manufacturer but as an "AI and robotics company." It expands AI innovation scope with autonomous driving (FSD), AI supercomputer (Dojo), and humanoid robot (Optimus).'}</p>
          <h3>{isKo ? 'FSD (Full Self-Driving) 전략' : 'FSD (Full Self-Driving) Strategy'}</h3>
          <ul>
            <li><strong>{isKo ? '비전 기반 접근' : 'Vision-Based Approach'}</strong>: {isKo ? 'LiDAR 없이 카메라만으로 자율주행 구현. 비용 절감과 확장성 확보' : 'Autonomous driving with cameras only, no LiDAR. Cost reduction and scalability'}</li>
            <li><strong>{isKo ? '데이터 플라이휠' : 'Data Flywheel'}</strong>: {isKo ? '전 세계 600만+ 대 Tesla 차량이 매일 수집하는 주행 데이터로 AI 학습' : 'AI training from driving data collected daily by 6M+ Tesla vehicles worldwide'}</li>
            <li><strong>{isKo ? 'End-to-End 신경망' : 'End-to-End Neural Network'}</strong>: {isKo ? '규칙 기반 → 신경망 기반으로 전환하여 FSD v12에서 인간 수준 주행 달성' : 'Transition from rule-based to neural network-based achieving human-level driving in FSD v12'}</li>
            <li><strong>{isKo ? '로보택시' : 'Robotaxi'}</strong>: {isKo ? '완전 자율주행 택시 서비스로 $500B+ 시장 진입 목표' : 'Targeting $500B+ market entry with fully autonomous taxi service'}</li>
          </ul>
          <h3>{isKo ? 'Dojo 슈퍼컴퓨터' : 'Dojo Supercomputer'}</h3>
          <ul>
            <li><strong>{isKo ? '자체 설계 AI 칩' : 'Custom AI Chips'}</strong>: {isKo ? 'D1 칩 기반 ExaPOD 시스템으로 비디오 학습 처리 능력 세계 최고 수준' : 'World-class video training capacity with D1 chip-based ExaPOD system'}</li>
            <li><strong>{isKo ? '비용 효율' : 'Cost Efficiency'}</strong>: {isKo ? 'NVIDIA GPU 대비 AI 학습 비용 최대 50% 절감 목표' : 'Target up to 50% AI training cost reduction vs. NVIDIA GPUs'}</li>
            <li><strong>{isKo ? '외부 서비스' : 'External Services'}</strong>: {isKo ? 'Dojo를 외부 기업에도 AI 학습 서비스로 제공 검토 (AWS 경쟁)' : 'Considering offering Dojo as external AI training service (competing with AWS)'}</li>
          </ul>
          <h3>{isKo ? 'AI 제조 혁신' : 'AI Manufacturing Innovation'}</h3>
          <ul>
            <li><strong>{isKo ? '기가프레스' : 'Giga Press'}</strong>: {isKo ? 'AI 시뮬레이션으로 설계한 일체형 차체 — 부품 수 70% 감소, 생산 시간 50% 단축' : 'AI-simulated unibody design — 70% fewer parts, 50% production time reduction'}</li>
            <li><strong>{isKo ? 'AI 품질 관리' : 'AI Quality Control'}</strong>: {isKo ? '컴퓨터 비전으로 생산라인 실시간 품질 검사, 불량률 0.1% 이하 달성' : 'Real-time production line quality inspection via computer vision, sub-0.1% defect rate'}</li>
            <li><strong>Optimus</strong>: {isKo ? '인간형 로봇으로 위험하고 반복적인 공장 업무 대체 목표' : 'Humanoid robot targeting replacement of dangerous and repetitive factory tasks'}</li>
          </ul>
          <TipBox type="example">
            <p>{isKo
              ? 'Tesla AI Day 핵심 메시지: "우리는 세계 최대의 실시간 AI 데이터 수집 플랫폼을 보유하고 있다." 600만 대의 차량이 매일 수십억 프레임의 비디오를 수집하며, 이는 어떤 경쟁사도 따라올 수 없는 데이터 해자(moat)를 형성합니다.'
              : 'Tesla AI Day key message: "We have the world\'s largest real-time AI data collection platform." 6 million vehicles collect billions of video frames daily, forming a data moat no competitor can match.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'netflix',
      icon: 'fa-film',
      labelKo: 'Netflix',
      labelEn: 'Netflix',
      content: (
        <>
          <h2>{isKo ? 'Netflix의 AI 추천과 콘텐츠 전략' : 'Netflix AI Recommendation & Content Strategy'}</h2>
          <p>{isKo
            ? 'Netflix는 AI를 단순한 기능이 아닌 비즈니스의 핵심 엔진으로 활용하는 대표적 기업입니다. 추천 알고리즘 하나가 연간 $1B의 매출을 직접 창출하며, 콘텐츠 제작부터 마케팅까지 전 과정에 AI가 관여합니다.'
            : 'Netflix is a representative company using AI not as a simple feature but as the core business engine. A single recommendation algorithm directly generates $1B in annual revenue, and AI is involved in everything from content production to marketing.'}</p>
          <h3>{isKo ? '추천 알고리즘의 비밀' : 'Secrets of the Recommendation Algorithm'}</h3>
          <ul>
            <li><strong>{isKo ? '개인화 엔진' : 'Personalization Engine'}</strong>: {isKo ? '2.6억+ 구독자 각각에 대한 고유한 홈 화면 생성. 같은 Netflix는 없음' : 'Unique home screen generated for each of 260M+ subscribers. No two Netflix experiences are alike'}</li>
            <li><strong>{isKo ? '시청 행동 분석' : 'Viewing Behavior Analysis'}</strong>: {isKo ? '시청 시간, 일시 정지, 되감기, 평점, 검색어 등 수백 개 신호 실시간 분석' : 'Real-time analysis of hundreds of signals: watch time, pauses, rewinds, ratings, search terms'}</li>
            <li><strong>{isKo ? '썸네일 최적화' : 'Thumbnail Optimization'}</strong>: {isKo ? '같은 콘텐츠도 사용자 취향에 맞는 다른 썸네일 표시. 클릭률 20-30% 향상' : 'Same content shows different thumbnails matching user taste. 20-30% click rate improvement'}</li>
            <li><strong>{isKo ? '매출 기여' : 'Revenue Contribution'}</strong>: {isKo ? '추천으로 인한 시청이 전체 시청의 80%, 연간 $1B 이상의 해지 방지 효과' : 'Recommendations drive 80% of viewing, preventing $1B+ annual churn'}</li>
          </ul>
          <h3>{isKo ? 'AI 기반 콘텐츠 전략' : 'AI-Based Content Strategy'}</h3>
          <ul>
            <li><strong>{isKo ? '콘텐츠 투자 의사결정' : 'Content Investment Decisions'}</strong>: {isKo ? 'AI가 시청 데이터를 분석하여 어떤 장르, 배우, 스토리라인이 성공할지 예측' : 'AI analyzes viewing data to predict which genres, actors, and storylines will succeed'}</li>
            <li><strong>{isKo ? '글로벌 현지화' : 'Global Localization'}</strong>: {isKo ? 'AI 더빙, 자막 생성, 지역별 콘텐츠 편성으로 190+ 국가 서비스' : 'AI dubbing, subtitle generation, regional content scheduling serving 190+ countries'}</li>
            <li><strong>{isKo ? '제작비 최적화' : 'Production Cost Optimization'}</strong>: {isKo ? 'AI 시청률 예측으로 콘텐츠별 최적 투자 규모 결정. 과투자·저투자 방지' : 'Optimal investment per content through AI viewership prediction. Prevents over/under-investment'}</li>
          </ul>
          <h3>{isKo ? 'A/B 테스트 문화' : 'A/B Testing Culture'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '영역' : 'Area'}</th>
                <th>{isKo ? 'A/B 테스트 활용' : 'A/B Test Usage'}</th>
                <th>{isKo ? '성과' : 'Result'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{isKo ? 'UI/UX' : 'UI/UX'}</td>
                <td>{isKo ? '레이아웃, 색상, 버튼 위치 등 연간 250+ 테스트' : '250+ annual tests on layout, color, button placement'}</td>
                <td>{isKo ? '전환율 15% 향상' : '15% conversion improvement'}</td>
              </tr>
              <tr>
                <td>{isKo ? '추천 알고리즘' : 'Recommendation'}</td>
                <td>{isKo ? '모델 변형, 가중치 조정, 새 피처 테스트' : 'Model variants, weight adjustments, new feature tests'}</td>
                <td>{isKo ? '시청 시간 10% 증가' : '10% watch time increase'}</td>
              </tr>
              <tr>
                <td>{isKo ? '가격 정책' : 'Pricing'}</td>
                <td>{isKo ? '구독 요금제, 프로모션, 무료 체험 기간' : 'Subscription plans, promotions, free trial periods'}</td>
                <td>{isKo ? '가입률 8% 향상' : '8% signup improvement'}</td>
              </tr>
              <tr>
                <td>{isKo ? '콘텐츠 마케팅' : 'Content Marketing'}</td>
                <td>{isKo ? '예고편 길이, 출시 시점, 마케팅 메시지' : 'Trailer length, release timing, marketing messages'}</td>
                <td>{isKo ? '초기 시청률 25% 향상' : '25% initial viewership improvement'}</td>
              </tr>
            </tbody>
          </table>
          <TipBox type="tip">
            <p>{isKo
              ? 'Netflix의 A/B 테스트 철학: "모든 것을 데이터로 검증하라." Netflix는 어떤 의사결정도 직감이 아닌 실험 데이터에 기반합니다. 연간 수천 개의 A/B 테스트가 매출과 사용자 경험을 지속적으로 개선합니다.'
              : 'Netflix A/B testing philosophy: "Verify everything with data." Netflix bases every decision on experimental data, not intuition. Thousands of annual A/B tests continuously improve revenue and user experience.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'jpmorgan',
      icon: 'fa-building-columns',
      labelKo: 'JP Morgan',
      labelEn: 'JP Morgan',
      content: (
        <>
          <h2>{isKo ? 'JP Morgan의 AI 금융 혁신' : 'JP Morgan AI Financial Innovation'}</h2>
          <p>{isKo
            ? 'JP Morgan Chase는 연간 $15B 이상을 기술에 투자하며, AI를 리스크 관리, 트레이딩, 고객 서비스, 규정 준수 전 영역에 적용하는 금융 AI의 선두 주자입니다. 2,000명+ 이상의 AI/ML 전문가를 보유합니다.'
            : 'JP Morgan Chase invests $15B+ annually in technology and is a leader in financial AI, applying AI across risk management, trading, customer service, and compliance with 2,000+ AI/ML specialists.'}</p>
          <h3>{isKo ? 'COIN (Contract Intelligence) 시스템' : 'COIN (Contract Intelligence) System'}</h3>
          <ul>
            <li><strong>{isKo ? '계약서 분석 자동화' : 'Contract Analysis Automation'}</strong>: {isKo ? '연간 1,200만+ 건의 상업 대출 계약서를 AI가 분석. 기존에 변호사 36만 시간 소요되던 업무를 수초 만에 처리' : 'AI analyzes 12M+ commercial loan contracts annually. Tasks that took lawyers 360K hours now completed in seconds'}</li>
            <li><strong>{isKo ? '오류 감소' : 'Error Reduction'}</strong>: {isKo ? '인간 검토 대비 오류율 90% 이상 감소. 계약 조항 누락, 해석 오류 방지' : '90%+ error reduction vs. human review. Prevents missed clauses and interpretation errors'}</li>
            <li><strong>{isKo ? '비용 절감' : 'Cost Savings'}</strong>: {isKo ? '연간 $150M 이상의 법률 비용 절감 효과' : '$150M+ annual legal cost savings'}</li>
          </ul>
          <h3>{isKo ? 'AI 리스크 관리' : 'AI Risk Management'}</h3>
          <ul>
            <li><strong>{isKo ? '이상거래 탐지' : 'Fraud Detection'}</strong>: {isKo ? 'AI가 실시간으로 수십억 건의 거래를 모니터링. 사기 거래 탐지율 95%+, 오탐률 50% 감소' : 'AI monitors billions of transactions in real-time. 95%+ fraud detection, 50% false positive reduction'}</li>
            <li><strong>{isKo ? '신용 리스크 모델' : 'Credit Risk Models'}</strong>: {isKo ? 'ML 기반 신용 평가로 기존 모델 대비 예측 정확도 25% 향상, 부실 대출 30% 감소' : 'ML credit assessment 25% more accurate than traditional models, 30% reduction in bad loans'}</li>
            <li><strong>{isKo ? '시장 리스크' : 'Market Risk'}</strong>: {isKo ? 'AI가 시장 변동성을 예측하여 포트폴리오 위험 관리. $150M+ 연간 손실 방지' : 'AI predicts market volatility for portfolio risk management. $150M+ annual loss prevention'}</li>
            <li><strong>{isKo ? '규정 준수(RegTech)' : 'RegTech'}</strong>: {isKo ? 'AI가 자동으로 규제 변경 사항을 추적하고 영향 분석. 컴플라이언스 비용 40% 절감' : 'AI automatically tracks regulatory changes and analyzes impact. 40% compliance cost reduction'}</li>
          </ul>
          <h3>{isKo ? 'AI 투자 현황' : 'AI Investment Status'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '영역' : 'Area'}</th>
                <th>{isKo ? '투자 규모' : 'Investment'}</th>
                <th>{isKo ? '연간 절감 효과' : 'Annual Savings'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{isKo ? 'AI/ML 인력' : 'AI/ML Talent'}</td>
                <td>2,000+ {isKo ? '명' : ' specialists'}</td>
                <td>-</td>
              </tr>
              <tr>
                <td>{isKo ? 'AI 인프라' : 'AI Infrastructure'}</td>
                <td>$2B+</td>
                <td>-</td>
              </tr>
              <tr>
                <td>COIN ({isKo ? '계약분석' : 'Contracts'})</td>
                <td>-</td>
                <td>$150M+</td>
              </tr>
              <tr>
                <td>{isKo ? '이상거래 탐지' : 'Fraud Detection'}</td>
                <td>-</td>
                <td>$300M+</td>
              </tr>
              <tr>
                <td>{isKo ? '시장 리스크 관리' : 'Market Risk'}</td>
                <td>-</td>
                <td>$150M+</td>
              </tr>
            </tbody>
          </table>
          <h3>{isKo ? '최신 AI 이니셔티브' : 'Latest AI Initiatives'}</h3>
          <ul>
            <li><strong>LLM Suite</strong>: {isKo ? '자체 LLM 기반 리서치 어시스턴트로 애널리스트 업무 지원. 보고서 초안 작성 시간 80% 단축' : 'Proprietary LLM research assistant supporting analysts. 80% reduction in report drafting time'}</li>
            <li><strong>IndexGPT</strong>: {isKo ? 'AI 기반 투자 자문 서비스 (상표 출원). 개인화된 포트폴리오 추천' : 'AI-based investment advisory service (trademark filed). Personalized portfolio recommendations'}</li>
            <li><strong>{isKo ? '생성형 AI 정책' : 'GenAI Policy'}</strong>: {isKo ? '직원 5만 명에 생성형 AI 도구 배포. 단, 고객 데이터 보호와 환각(hallucination) 방지를 위한 엄격한 가드레일 적용' : 'GenAI tools deployed to 50K employees with strict guardrails for customer data protection and hallucination prevention'}</li>
          </ul>
          <TipBox type="important">
            <p>{isKo
              ? 'JP Morgan의 교훈: "금융 AI는 신뢰가 핵심이다." 금융 산업에서 AI 도입 시 정확성, 설명 가능성(Explainability), 규제 준수가 필수입니다. JP Morgan은 모든 AI 모델에 설명 가능성 요건을 부여하고, 모델 리스크 관리(MRM) 팀이 독립적으로 검증합니다.'
              : 'JP Morgan lesson: "Trust is the core of financial AI." Accuracy, explainability, and regulatory compliance are essential when adopting AI in finance. JP Morgan requires explainability for all AI models and has independent Model Risk Management (MRM) team validation.'}</p>
          </TipBox>
        </>
      ),
    },
  ];

  return (
    <GuidePage
      titleKo="글로벌 사례"
      titleEn="Global Cases"
      subtitleKo="글로벌 기업의 AI·DX 전환 전략과 성과를 분석합니다."
      subtitleEn="Analyze AI/DX transformation strategies and results of global enterprises."
      icon="fa-globe"
      iconColor="#2563EB"
      path="/cases-global"
      sections={sections}
    />
  );
}
