import GuidePage from '../../components/GuidePage';
import TipBox from '../../components/TipBox';
import { useLanguage } from '../../contexts/LanguageContext';
import type { ReactElement } from 'react';
import type { GuideSection } from '../../components/GuidePage';

export default function TrendsIndustry(): ReactElement {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  const sections: GuideSection[] = [
    {
      id: 'manufacturing',
      icon: 'fa-industry',
      labelKo: '제조업 트렌드',
      labelEn: 'Manufacturing Trends',
      content: (
        <>
          <h2>{isKo ? '제조업 트렌드: 스마트팩토리 4.0' : 'Manufacturing Trends: Smart Factory 4.0'}</h2>
          <p>
            {isKo
              ? '제조업은 AI, IoT, 디지털 트윈의 결합으로 "스마트팩토리 4.0" 시대를 맞이하고 있습니다. 단순 자동화를 넘어 AI가 생산 공정을 자율적으로 최적화하고, 예지보전으로 다운타임을 최소화하며, 협동로봇이 인간과 함께 작업하는 차세대 제조 패러다임이 확산되고 있습니다.'
              : 'Manufacturing is entering the "Smart Factory 4.0" era through the combination of AI, IoT, and digital twins. Beyond simple automation, a next-generation manufacturing paradigm is spreading where AI autonomously optimizes production processes, predictive maintenance minimizes downtime, and collaborative robots work alongside humans.'}
          </p>

          <h3>{isKo ? '스마트팩토리 핵심 기술' : 'Smart Factory Core Technologies'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '기술' : 'Technology'}</th>
                <th>{isKo ? '적용 분야' : 'Application'}</th>
                <th>{isKo ? '효과' : 'Impact'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{isKo ? 'AI 예지보전' : 'AI Predictive Maintenance'}</td>
                <td>{isKo ? '설비 고장 사전 예측 및 정비 스케줄 최적화' : 'Predict equipment failures and optimize maintenance schedules'}</td>
                <td>{isKo ? '비계획 다운타임 75% 감소' : '75% reduction in unplanned downtime'}</td>
              </tr>
              <tr>
                <td>{isKo ? 'AI 비전 검사' : 'AI Vision Inspection'}</td>
                <td>{isKo ? '실시간 불량 검출, 미세 결함 식별' : 'Real-time defect detection, micro-defect identification'}</td>
                <td>{isKo ? '검사 정확도 99.7%, 속도 10배' : '99.7% accuracy, 10x speed'}</td>
              </tr>
              <tr>
                <td>{isKo ? '협동로봇(Cobot)' : 'Collaborative Robots (Cobots)'}</td>
                <td>{isKo ? '인간과 같은 공간에서 안전하게 협업' : 'Safe collaboration with humans in shared spaces'}</td>
                <td>{isKo ? '생산성 30% 향상, 산재 50% 감소' : '30% productivity gain, 50% injury reduction'}</td>
              </tr>
              <tr>
                <td>{isKo ? '디지털 트윈' : 'Digital Twin'}</td>
                <td>{isKo ? '공장 전체의 가상 복제 및 시뮬레이션' : 'Virtual replication and simulation of entire factory'}</td>
                <td>{isKo ? '신제품 출시 40% 단축' : '40% faster new product launch'}</td>
              </tr>
            </tbody>
          </table>

          <h3>{isKo ? '협동로봇의 진화' : 'Evolution of Collaborative Robots'}</h3>
          <ul>
            <li><strong>{isKo ? '1세대: 단순 반복' : 'Gen 1: Simple Repetition'}</strong>: {isKo ? '사전 프로그래밍된 동작만 수행, 안전 펜스 필요' : 'Perform only pre-programmed motions, safety fence required'}</li>
            <li><strong>{isKo ? '2세대: 협업 가능' : 'Gen 2: Collaboration'}</strong>: {isKo ? '힘 감지 센서로 인간 근접 작업, 직접 교시 학습' : 'Human proximity work with force sensors, direct teaching'}</li>
            <li><strong>{isKo ? '3세대: AI 자율' : 'Gen 3: AI Autonomous'}</strong>: {isKo ? 'AI 비전과 학습으로 새로운 작업을 스스로 습득, 상황 판단' : 'Self-learn new tasks with AI vision and learning, situational judgment'}</li>
            <li><strong>{isKo ? '4세대: 인지형(2026~)' : 'Gen 4: Cognitive (2026~)'}</strong>: {isKo ? 'LLM 탑재로 자연어 지시 이해, 멀티태스크 수행, 인간 의도 예측' : 'LLM-equipped for natural language instruction, multi-tasking, human intent prediction'}</li>
          </ul>

          <TipBox type="example">
            <p>{isKo ? '현대자동차 울산공장은 AI 기반 스마트팩토리를 통해 차량 1대 생산 시간을 52시간에서 38시간으로 27% 단축했습니다. 400대의 협동로봇이 인간 작업자와 함께 조립 라인에서 작업하며, AI가 실시간으로 공정을 최적화합니다.' : 'Hyundai Motor\'s Ulsan plant reduced per-vehicle production time from 52 to 38 hours (27% reduction) through AI-based smart factory. 400 collaborative robots work alongside human workers on assembly lines while AI optimizes processes in real-time.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'finance',
      icon: 'fa-coins',
      labelKo: '금융 트렌드',
      labelEn: 'Finance Trends',
      content: (
        <>
          <h2>{isKo ? '금융 트렌드: AI 기반 금융 혁신' : 'Finance Trends: AI-Based Financial Innovation'}</h2>
          <p>
            {isKo
              ? '금융 산업은 임베디드 파이낸스, AI 리스크 관리, 디지털 자산의 세 가지 축으로 급격히 변화하고 있습니다. 전통 금융기관과 핀테크의 경계가 무너지고, AI가 리스크 평가부터 투자 자문까지 금융의 핵심 기능을 수행합니다.'
              : 'The financial industry is rapidly transforming along three axes: embedded finance, AI risk management, and digital assets. The boundaries between traditional financial institutions and fintech are dissolving, with AI performing core financial functions from risk assessment to investment advisory.'}
          </p>

          <h3>{isKo ? '임베디드 파이낸스(Embedded Finance)' : 'Embedded Finance'}</h3>
          <ul>
            <li><strong>{isKo ? '정의' : 'Definition'}</strong>: {isKo ? '비금융 플랫폼(이커머스, SaaS, 모빌리티)에 금융 서비스를 내장하는 모델' : 'Model of embedding financial services into non-financial platforms (e-commerce, SaaS, mobility)'}</li>
            <li><strong>BNPL (Buy Now Pay Later)</strong>: {isKo ? '쇼핑몰 결제 시점에 즉시 할부 제공, 별도 카드 불필요' : 'Instant installment at checkout, no separate card needed'}</li>
            <li><strong>{isKo ? '급여 선지급' : 'Earned Wage Access'}</strong>: {isKo ? 'HR 플랫폼에서 근무한 만큼 급여 즉시 인출 가능' : 'Withdraw earned wages immediately from HR platforms'}</li>
            <li><strong>{isKo ? '임베디드 보험' : 'Embedded Insurance'}</strong>: {isKo ? '여행 예약 시 자동 보험 가입, 주행거리 기반 자동차 보험' : 'Auto insurance enrollment with travel booking, mileage-based car insurance'}</li>
          </ul>

          <h3>{isKo ? 'AI 리스크 관리' : 'AI Risk Management'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '영역' : 'Domain'}</th>
                <th>{isKo ? 'AI 활용' : 'AI Application'}</th>
                <th>{isKo ? '성과' : 'Results'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{isKo ? '사기 탐지' : 'Fraud Detection'}</td>
                <td>{isKo ? '실시간 거래 패턴 분석, 이상 행위 즉시 차단' : 'Real-time transaction pattern analysis, instant anomaly blocking'}</td>
                <td>{isKo ? '사기 탐지율 98%, 오탐 70% 감소' : '98% detection rate, 70% false positive reduction'}</td>
              </tr>
              <tr>
                <td>{isKo ? '신용 평가' : 'Credit Scoring'}</td>
                <td>{isKo ? '대안 데이터(SNS, 결제 패턴) 활용 AI 심사' : 'AI assessment using alternative data (SNS, payment patterns)'}</td>
                <td>{isKo ? '승인률 25% 향상, 부실률 유지' : '25% approval rate increase, default rate maintained'}</td>
              </tr>
              <tr>
                <td>{isKo ? '시장 리스크' : 'Market Risk'}</td>
                <td>{isKo ? 'AI 기반 실시간 포트폴리오 리밸런싱' : 'AI-based real-time portfolio rebalancing'}</td>
                <td>{isKo ? 'VaR 정확도 30% 향상' : '30% VaR accuracy improvement'}</td>
              </tr>
              <tr>
                <td>{isKo ? '자금세탁 방지' : 'AML (Anti-Money Laundering)'}</td>
                <td>{isKo ? '네트워크 분석으로 복잡한 자금 흐름 추적' : 'Track complex fund flows through network analysis'}</td>
                <td>{isKo ? '의심 거래 발견 속도 5배 향상' : '5x faster suspicious transaction discovery'}</td>
              </tr>
            </tbody>
          </table>

          <h3>{isKo ? '디지털 자산의 제도화' : 'Institutionalization of Digital Assets'}</h3>
          <ol>
            <li><strong>CBDC</strong>: {isKo ? '중앙은행 디지털 화폐 — 한국은행 디지털 원 파일럿 진행 중' : 'Central Bank Digital Currency — Bank of Korea Digital Won pilot in progress'}</li>
            <li><strong>STO</strong>: {isKo ? '증권형 토큰 — 부동산, 미술품 등 실물 자산의 토큰화 활성화' : 'Security Token Offering — Tokenization of real assets like real estate and art'}</li>
            <li><strong>{isKo ? '스테이블코인 규제' : 'Stablecoin Regulation'}</strong>: {isKo ? '각국 규제 프레임워크 정립으로 기관 투자자 유입 증가' : 'Regulatory framework establishment increasing institutional investor inflow'}</li>
          </ol>

          <TipBox type="important">
            <p>{isKo ? '금융 AI 도입 시 "설명 가능성(Explainability)"은 필수입니다. 금융감독원은 2026년부터 AI 기반 대출 심사 시 거부 사유를 고객에게 설명할 수 있어야 한다고 규정하고 있습니다. 블랙박스 모델은 규제 리스크가 높습니다.' : 'When adopting financial AI, "Explainability" is mandatory. Korea\'s Financial Supervisory Service requires that AI-based loan rejections must be explainable to customers from 2026. Black-box models carry high regulatory risk.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'retail',
      icon: 'fa-cart-shopping',
      labelKo: '유통 트렌드',
      labelEn: 'Retail Trends',
      content: (
        <>
          <h2>{isKo ? '유통 트렌드: AI 커머스의 시대' : 'Retail Trends: The Age of AI Commerce'}</h2>
          <p>
            {isKo
              ? '유통 산업은 라이브커머스, AI 개인화, 무인매장, 퀵커머스의 네 가지 트렌드로 재편되고 있습니다. AI는 고객 여정의 모든 접점에서 초개인화된 경험을 제공하며, 공급망 전체를 최적화합니다.'
              : 'The retail industry is being restructured around four trends: live commerce, AI personalization, unmanned stores, and quick commerce. AI provides hyper-personalized experiences at every touchpoint of the customer journey while optimizing the entire supply chain.'}
          </p>

          <h3>{isKo ? '라이브커머스의 진화' : 'Evolution of Live Commerce'}</h3>
          <ul>
            <li><strong>{isKo ? 'AI 가상 호스트' : 'AI Virtual Host'}</strong>: {isKo ? 'AI 아바타가 24시간 라이브 방송 진행, 실시간 질문 응답' : 'AI avatars conduct 24/7 live broadcasts, real-time Q&A'}</li>
            <li><strong>{isKo ? '실시간 개인화' : 'Real-Time Personalization'}</strong>: {isKo ? '시청자별 관심 상품을 AI가 분석하여 맞춤 추천' : 'AI analyzes products of interest per viewer for custom recommendations'}</li>
            <li><strong>{isKo ? 'AR 가상 체험' : 'AR Virtual Try-On'}</strong>: {isKo ? '방송 중 AR로 제품을 가상으로 착용/배치해 보기' : 'Virtually try on/place products via AR during broadcast'}</li>
            <li><strong>{isKo ? '소셜 커머스 연동' : 'Social Commerce Integration'}</strong>: {isKo ? 'SNS 피드에서 바로 구매, 인플루언서 실시간 판매' : 'Purchase directly from SNS feeds, influencer real-time sales'}</li>
          </ul>

          <h3>{isKo ? 'AI 개인화 기술' : 'AI Personalization Technology'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '기술' : 'Technology'}</th>
                <th>{isKo ? '설명' : 'Description'}</th>
                <th>{isKo ? '효과' : 'Impact'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{isKo ? '행동 기반 추천' : 'Behavior-Based Recommendation'}</td>
                <td>{isKo ? '클릭, 체류시간, 장바구니 등 행동 데이터 실시간 분석' : 'Real-time analysis of clicks, dwell time, cart data'}</td>
                <td>{isKo ? '전환율 35% 향상' : '35% conversion rate increase'}</td>
              </tr>
              <tr>
                <td>{isKo ? '동적 가격 책정' : 'Dynamic Pricing'}</td>
                <td>{isKo ? '수요, 경쟁가, 재고를 고려한 실시간 가격 최적화' : 'Real-time price optimization considering demand, competition, inventory'}</td>
                <td>{isKo ? '마진율 12% 개선' : '12% margin improvement'}</td>
              </tr>
              <tr>
                <td>{isKo ? '예측 검색' : 'Predictive Search'}</td>
                <td>{isKo ? '검색 의도를 예측하여 입력 전 결과 제시' : 'Predict search intent and present results before input'}</td>
                <td>{isKo ? '검색 완료율 50% 향상' : '50% search completion rate increase'}</td>
              </tr>
              <tr>
                <td>{isKo ? '개인화 알림' : 'Personalized Notifications'}</td>
                <td>{isKo ? '최적 시간, 채널, 메시지를 AI가 결정' : 'AI determines optimal time, channel, and message'}</td>
                <td>{isKo ? '알림 클릭률 3배 향상' : '3x notification click-through rate'}</td>
              </tr>
            </tbody>
          </table>

          <h3>{isKo ? '무인매장과 퀵커머스' : 'Unmanned Stores and Quick Commerce'}</h3>
          <ul>
            <li><strong>{isKo ? 'AI 무인매장' : 'AI Unmanned Store'}</strong>: {isKo ? '컴퓨터 비전으로 "집어서 나가기(Just Walk Out)" 쇼핑 구현' : 'Implement "Just Walk Out" shopping with computer vision'}</li>
            <li><strong>{isKo ? '마이크로 풀필먼트' : 'Micro-Fulfillment'}</strong>: {isKo ? '도심 내 소형 자동화 물류센터로 15분 배송 실현' : 'Enable 15-minute delivery with small automated logistics centers in urban areas'}</li>
            <li><strong>{isKo ? 'AI 수요 예측' : 'AI Demand Forecasting'}</strong>: {isKo ? '날씨, 이벤트, 트렌드를 반영한 지역별 수요 예측으로 재고 최적화' : 'Optimize inventory with regional demand forecasting reflecting weather, events, trends'}</li>
            <li><strong>{isKo ? '자율주행 배송' : 'Autonomous Delivery'}</strong>: {isKo ? '로봇/드론을 통한 라스트마일 무인 배송 확대' : 'Expanding last-mile unmanned delivery via robots/drones'}</li>
          </ul>

          <TipBox type="tip">
            <p>{isKo ? '유통 AI의 성공 핵심은 "데이터 통합"입니다. 온·오프라인, 앱, SNS, 고객센터 등 모든 채널의 고객 데이터를 통합 CDP(Customer Data Platform)로 연결해야 진정한 옴니채널 개인화가 가능합니다.' : 'The key to retail AI success is "data integration." Connecting customer data from all channels — online, offline, app, SNS, customer service — into a unified CDP (Customer Data Platform) enables true omnichannel personalization.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'healthcare',
      icon: 'fa-heart-pulse',
      labelKo: '의료 트렌드',
      labelEn: 'Healthcare Trends',
      content: (
        <>
          <h2>{isKo ? '의료 트렌드: AI 기반 정밀의학' : 'Healthcare Trends: AI-Based Precision Medicine'}</h2>
          <p>
            {isKo
              ? '의료 산업은 디지털 치료제(DTx), AI 신약개발, 정밀의학의 세 축으로 혁신이 가속화되고 있습니다. AI는 신약 개발 기간을 획기적으로 단축하고, 개인 유전체 기반의 맞춤 치료를 가능하게 합니다.'
              : 'Healthcare innovation is accelerating along three axes: digital therapeutics (DTx), AI drug discovery, and precision medicine. AI dramatically shortens drug development timelines and enables personalized treatment based on individual genomics.'}
          </p>

          <h3>{isKo ? '디지털 치료제(DTx)' : 'Digital Therapeutics (DTx)'}</h3>
          <ul>
            <li><strong>{isKo ? '정의' : 'Definition'}</strong>: {isKo ? '소프트웨어(앱)가 치료 효과를 제공하는 의료기기로 FDA/식약처 승인을 받은 제품' : 'Software (app) that provides therapeutic effects, approved by FDA/regulatory bodies as medical devices'}</li>
            <li><strong>{isKo ? '주요 적응증' : 'Key Indications'}</strong>: {isKo ? '불면증, 우울증, ADHD, 당뇨병, 약물중독, 만성 통증' : 'Insomnia, depression, ADHD, diabetes, substance abuse, chronic pain'}</li>
            <li><strong>{isKo ? '작동 원리' : 'Mechanism'}</strong>: {isKo ? 'CBT(인지행동치료), 게이미피케이션, AI 코칭을 디지털로 전달' : 'Deliver CBT, gamification, AI coaching digitally'}</li>
            <li><strong>{isKo ? '시장 규모' : 'Market Size'}</strong>: {isKo ? '2026년 글로벌 DTx 시장 92억 달러, 연평균 25% 성장' : '2026 global DTx market $9.2B, 25% CAGR'}</li>
          </ul>

          <h3>{isKo ? 'AI 신약개발 파이프라인' : 'AI Drug Discovery Pipeline'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '단계' : 'Phase'}</th>
                <th>{isKo ? '전통 방식' : 'Traditional'}</th>
                <th>{isKo ? 'AI 기반' : 'AI-Based'}</th>
                <th>{isKo ? '시간 단축' : 'Time Savings'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{isKo ? '타겟 발굴' : 'Target Discovery'}</td>
                <td>{isKo ? '3~5년' : '3-5 years'}</td>
                <td>{isKo ? '6개월~1년' : '6 months-1 year'}</td>
                <td>70~80%</td>
              </tr>
              <tr>
                <td>{isKo ? '리드 최적화' : 'Lead Optimization'}</td>
                <td>{isKo ? '2~3년' : '2-3 years'}</td>
                <td>{isKo ? '6~12개월' : '6-12 months'}</td>
                <td>60~70%</td>
              </tr>
              <tr>
                <td>{isKo ? '전임상' : 'Preclinical'}</td>
                <td>{isKo ? '1~2년' : '1-2 years'}</td>
                <td>{isKo ? '6~9개월' : '6-9 months'}</td>
                <td>50~60%</td>
              </tr>
              <tr>
                <td>{isKo ? '임상시험 설계' : 'Clinical Trial Design'}</td>
                <td>{isKo ? '수개월' : 'Several months'}</td>
                <td>{isKo ? '수 주' : 'Several weeks'}</td>
                <td>75%</td>
              </tr>
            </tbody>
          </table>

          <h3>{isKo ? '정밀의학의 실현' : 'Realization of Precision Medicine'}</h3>
          <ol>
            <li><strong>{isKo ? '유전체 분석' : 'Genomic Analysis'}</strong>: {isKo ? '전장유전체분석(WGS) 비용 $200 이하로 하락, 대중화 가속' : 'Whole Genome Sequencing (WGS) cost drops below $200, accelerating mass adoption'}</li>
            <li><strong>{isKo ? 'AI 바이오마커 발견' : 'AI Biomarker Discovery'}</strong>: {isKo ? '유전체+임상 데이터에서 AI가 새로운 질병 바이오마커 발견' : 'AI discovers new disease biomarkers from genomic + clinical data'}</li>
            <li><strong>{isKo ? '맞춤 치료 계획' : 'Personalized Treatment Plans'}</strong>: {isKo ? '환자 개인의 유전적 특성에 최적화된 약물 및 용량 결정' : 'Determine optimal drugs and dosages based on individual genetic characteristics'}</li>
            <li><strong>{isKo ? '동반진단(CDx)' : 'Companion Diagnostics (CDx)'}</strong>: {isKo ? '특정 치료제에 반응할 환자를 사전 선별하여 치료 성공률 향상' : 'Pre-select patients who will respond to specific therapies to improve success rates'}</li>
          </ol>

          <TipBox type="important">
            <p>{isKo ? 'AI 의료 기술의 핵심 과제는 "신뢰성"과 "규제 인증"입니다. AI 진단 보조 도구는 FDA의 SaMD(Software as a Medical Device) 인증을 받아야 하며, 임상 검증 데이터가 필수입니다. 또한 의료 AI의 편향(인종, 성별) 문제도 반드시 해결해야 합니다.' : 'The key challenges for AI medical technology are "reliability" and "regulatory certification." AI diagnostic aids must receive FDA SaMD (Software as a Medical Device) certification with mandatory clinical validation data. Additionally, bias issues (race, gender) in medical AI must be addressed.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'education',
      icon: 'fa-graduation-cap',
      labelKo: '교육 트렌드',
      labelEn: 'Education Trends',
      content: (
        <>
          <h2>{isKo ? '교육 트렌드: AI 기반 적응형 학습' : 'Education Trends: AI-Based Adaptive Learning'}</h2>
          <p>
            {isKo
              ? '교육 분야에서 AI 튜터, 적응형 학습, 마이크로러닝은 학습의 패러다임을 근본적으로 변화시키고 있습니다. 학습자 개개인의 수준, 속도, 스타일에 맞춤화된 교육이 대규모로 가능해지면서, "교육의 민주화"가 실현되고 있습니다.'
              : 'In education, AI tutors, adaptive learning, and microlearning are fundamentally changing the learning paradigm. As education customized to each learner\'s level, pace, and style becomes possible at scale, the "democratization of education" is being realized.'}
          </p>

          <h3>{isKo ? 'AI 튜터의 역할' : 'Role of AI Tutors'}</h3>
          <ul>
            <li><strong>{isKo ? '1:1 맞춤 지도' : '1:1 Personalized Tutoring'}</strong>: {isKo ? '학생 개인의 이해도를 실시간으로 파악하여 최적의 설명과 문제 제공' : 'Real-time understanding assessment to provide optimal explanations and problems'}</li>
            <li><strong>{isKo ? '소크라테스식 대화' : 'Socratic Dialogue'}</strong>: {isKo ? '답을 직접 알려주지 않고, 질문으로 사고를 유도하는 교육법' : 'Teaching method that guides thinking through questions rather than giving direct answers'}</li>
            <li><strong>{isKo ? '감정 인식' : 'Emotion Recognition'}</strong>: {isKo ? '학습자의 좌절, 지루함, 흥미를 감지하여 난이도와 방식 조절' : 'Detect learner frustration, boredom, interest to adjust difficulty and approach'}</li>
            <li><strong>{isKo ? '다국어 지원' : 'Multilingual Support'}</strong>: {isKo ? '모국어로 설명하고, 목표 언어로 연습하는 이중 언어 교육' : 'Bilingual education explaining in native language, practicing in target language'}</li>
          </ul>

          <h3>{isKo ? '적응형 학습 시스템' : 'Adaptive Learning Systems'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '구성요소' : 'Component'}</th>
                <th>{isKo ? '기능' : 'Function'}</th>
                <th>{isKo ? '기술' : 'Technology'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{isKo ? '학습자 모델' : 'Learner Model'}</td>
                <td>{isKo ? '지식 수준, 학습 스타일, 선호도 프로파일링' : 'Knowledge level, learning style, preference profiling'}</td>
                <td>{isKo ? '지식 추적(Knowledge Tracing), BKT' : 'Knowledge Tracing, BKT'}</td>
              </tr>
              <tr>
                <td>{isKo ? '콘텐츠 모델' : 'Content Model'}</td>
                <td>{isKo ? '학습 자료의 난이도, 전제 지식, 학습 목표 매핑' : 'Map difficulty, prerequisites, learning objectives of materials'}</td>
                <td>{isKo ? '지식 그래프, 온톨로지' : 'Knowledge Graph, Ontology'}</td>
              </tr>
              <tr>
                <td>{isKo ? '추천 엔진' : 'Recommendation Engine'}</td>
                <td>{isKo ? '최적 학습 경로와 다음 콘텐츠 결정' : 'Determine optimal learning path and next content'}</td>
                <td>{isKo ? '강화학습, 다중무장밴딧' : 'Reinforcement Learning, Multi-Armed Bandit'}</td>
              </tr>
              <tr>
                <td>{isKo ? '평가 엔진' : 'Assessment Engine'}</td>
                <td>{isKo ? '실시간 이해도 측정, 적응형 시험' : 'Real-time comprehension measurement, adaptive testing'}</td>
                <td>{isKo ? 'IRT(문항반응이론), CAT' : 'IRT (Item Response Theory), CAT'}</td>
              </tr>
            </tbody>
          </table>

          <h3>{isKo ? '마이크로러닝의 부상' : 'Rise of Microlearning'}</h3>
          <ol>
            <li><strong>{isKo ? '5분 이내 콘텐츠' : 'Under 5-Minute Content'}</strong>: {isKo ? '짧은 집중 시간에 최적화된 학습 단위' : 'Learning units optimized for short attention spans'}</li>
            <li><strong>{isKo ? '모바일 퍼스트' : 'Mobile First'}</strong>: {isKo ? '출퇴근, 대기 시간 등 자투리 시간에 학습' : 'Learn during commute, waiting time, and other spare moments'}</li>
            <li><strong>{isKo ? '간격 반복' : 'Spaced Repetition'}</strong>: {isKo ? 'AI가 망각 곡선을 계산하여 최적 복습 시점에 알림' : 'AI calculates forgetting curve and notifies at optimal review timing'}</li>
            <li><strong>{isKo ? '게이미피케이션' : 'Gamification'}</strong>: {isKo ? '포인트, 배지, 리더보드로 학습 동기 유지' : 'Maintain learning motivation with points, badges, leaderboards'}</li>
          </ol>

          <TipBox type="tip">
            <p>{isKo ? '교육 AI의 가장 큰 가치는 "교사의 대체"가 아니라 "교사의 증강"입니다. AI가 반복적 평가와 개별 피드백을 담당하고, 교사는 창의적 활동, 사회적 학습, 정서적 지도에 집중할 수 있습니다. 이것이 미래 교육의 이상적 모델입니다.' : 'The greatest value of educational AI is not "replacing teachers" but "augmenting teachers." AI handles repetitive assessment and individual feedback, while teachers focus on creative activities, social learning, and emotional guidance. This is the ideal model for future education.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'energy',
      icon: 'fa-bolt',
      labelKo: '에너지 트렌드',
      labelEn: 'Energy Trends',
      content: (
        <>
          <h2>{isKo ? '에너지 트렌드: AI 기반 에너지 전환' : 'Energy Trends: AI-Based Energy Transition'}</h2>
          <p>
            {isKo
              ? '에너지 산업은 스마트그리드, AI 에너지 관리, 디지털 트윈을 중심으로 급격한 전환기를 맞이하고 있습니다. 재생에너지의 간헐성 문제를 AI가 해결하고, 디지털 트윈으로 에너지 인프라를 최적화하며, 분산형 에너지 시스템이 확산되고 있습니다.'
              : 'The energy industry is entering a rapid transition period centered on smart grids, AI energy management, and digital twins. AI solves renewable energy intermittency, digital twins optimize energy infrastructure, and distributed energy systems are spreading.'}
          </p>

          <h3>{isKo ? '스마트그리드와 AI' : 'Smart Grid and AI'}</h3>
          <ul>
            <li><strong>{isKo ? '수요 예측' : 'Demand Forecasting'}</strong>: {isKo ? '날씨, 시간대, 이벤트를 반영한 AI 기반 전력 수요 예측(정확도 97%)' : 'AI-based power demand forecasting reflecting weather, time, events (97% accuracy)'}</li>
            <li><strong>{isKo ? '그리드 안정화' : 'Grid Stabilization'}</strong>: {isKo ? '재생에너지 출력 변동을 AI가 실시간 보정하여 주파수 안정 유지' : 'AI real-time correction of renewable energy output fluctuations to maintain frequency stability'}</li>
            <li><strong>{isKo ? '분산 에너지 관리(DER)' : 'Distributed Energy Resources (DER)'}</strong>: {isKo ? '태양광, ESS, EV 충전을 통합 최적화하는 가상발전소(VPP)' : 'Virtual Power Plants (VPP) that optimally integrate solar, ESS, and EV charging'}</li>
            <li><strong>{isKo ? 'P2P 에너지 거래' : 'P2P Energy Trading'}</strong>: {isKo ? '블록체인 기반 이웃 간 잉여 전력 거래 플랫폼' : 'Blockchain-based surplus power trading platform between neighbors'}</li>
          </ul>

          <h3>{isKo ? 'AI 에너지 관리 시스템' : 'AI Energy Management System'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '적용 대상' : 'Target'}</th>
                <th>{isKo ? 'AI 기능' : 'AI Function'}</th>
                <th>{isKo ? '절감 효과' : 'Savings'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{isKo ? '빌딩' : 'Building'}</td>
                <td>{isKo ? 'HVAC 자동 최적화, 재실 감지, 조명 제어' : 'HVAC auto-optimization, occupancy detection, lighting control'}</td>
                <td>{isKo ? '에너지 비용 30~40% 절감' : '30-40% energy cost reduction'}</td>
              </tr>
              <tr>
                <td>{isKo ? '공장' : 'Factory'}</td>
                <td>{isKo ? '생산 스케줄 최적화, 피크 전력 관리' : 'Production schedule optimization, peak power management'}</td>
                <td>{isKo ? '에너지 비용 20~30% 절감' : '20-30% energy cost reduction'}</td>
              </tr>
              <tr>
                <td>{isKo ? '데이터센터' : 'Data Center'}</td>
                <td>{isKo ? '냉각 시스템 AI 제어, 워크로드 분산' : 'AI cooling system control, workload distribution'}</td>
                <td>{isKo ? 'PUE 40% 개선 (Google 사례)' : '40% PUE improvement (Google case)'}</td>
              </tr>
              <tr>
                <td>{isKo ? '도시' : 'City'}</td>
                <td>{isKo ? '가로등, 교통 신호, 공공시설 통합 관리' : 'Integrated management of streetlights, traffic signals, public facilities'}</td>
                <td>{isKo ? '도시 에너지 15~25% 절감' : '15-25% city energy reduction'}</td>
              </tr>
            </tbody>
          </table>

          <h3>{isKo ? '에너지 디지털 트윈' : 'Energy Digital Twin'}</h3>
          <ol>
            <li><strong>{isKo ? '풍력발전 최적화' : 'Wind Power Optimization'}</strong>: {isKo ? '풍력 터빈의 디지털 트윈으로 블레이드 각도, 방향을 실시간 최적화하여 발전량 15% 향상' : 'Optimize blade angle and direction in real-time via wind turbine digital twin, improving generation by 15%'}</li>
            <li><strong>{isKo ? '송배전 네트워크' : 'Transmission & Distribution Network'}</strong>: {isKo ? '전력망 전체를 디지털 트윈으로 모델링하여 장애 예측 및 자동 복구' : 'Model entire power grid as digital twin for failure prediction and auto-recovery'}</li>
            <li><strong>{isKo ? '배터리 수명 예측' : 'Battery Lifecycle Prediction'}</strong>: {isKo ? 'ESS/EV 배터리의 열화 상태를 디지털 트윈으로 추적, 교체 시기 최적화' : 'Track ESS/EV battery degradation via digital twin, optimize replacement timing'}</li>
            <li><strong>{isKo ? '수소 인프라' : 'Hydrogen Infrastructure'}</strong>: {isKo ? '수소 생산-저장-운송 전 과정을 시뮬레이션하여 최적 인프라 설계' : 'Simulate entire hydrogen production-storage-transport process for optimal infrastructure design'}</li>
          </ol>

          <TipBox type="example">
            <p>{isKo ? '한국전력은 AI 기반 스마트그리드를 제주도에 구축하여 재생에너지 수용률을 기존 30%에서 65%로 끌어올렸습니다. AI가 태양광·풍력의 출력 변동을 예측하고, ESS 충·방전을 최적화하여 재생에너지의 간헐성 문제를 크게 완화한 사례입니다.' : 'KEPCO built an AI-based smart grid in Jeju Island, raising renewable energy acceptance from 30% to 65%. This is a case where AI predicts solar and wind output fluctuations and optimizes ESS charge/discharge to significantly mitigate renewable energy intermittency.'}</p>
          </TipBox>
        </>
      ),
    },
  ];

  return (
    <GuidePage
      titleKo="산업별 트렌드"
      titleEn="Industry Trends"
      subtitleKo="산업별 디지털 전환 및 AI 적용 트렌드를 분석합니다."
      subtitleEn="Analyze digital transformation and AI trends by industry."
      icon="fa-industry"
      iconColor="#EA580C"
      path="/trends-industry"
      sections={sections}
    />
  );
}
