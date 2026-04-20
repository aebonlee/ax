import GuidePage from '../../components/GuidePage';
import TipBox from '../../components/TipBox';
import { useLanguage } from '../../contexts/LanguageContext';
import type { ReactElement } from 'react';
import type { GuideSection } from '../../components/GuidePage';

export default function DXOverview(): ReactElement {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  const sections: GuideSection[] = [
    {
      id: 'definition',
      icon: 'fa-microchip',
      labelKo: 'DX란 무엇인가',
      labelEn: 'What is DX',
      content: (
        <>
          <h2>{isKo ? 'DX(Digital Transformation)란 무엇인가?' : 'What is Digital Transformation (DX)?'}</h2>
          <p>{isKo
            ? '디지털 전환(DX)은 디지털 기술을 활용하여 비즈니스 모델, 운영 프로세스, 고객 경험, 조직 문화를 근본적으로 혁신하는 전략적 변혁입니다. 단순한 IT 시스템 도입이 아닌, 기업의 존재 방식 자체를 재정의하는 과정입니다.'
            : 'Digital Transformation (DX) is a strategic transformation that fundamentally innovates business models, operational processes, customer experiences, and organizational culture using digital technology. It is not simply adopting IT systems, but redefining the very way an enterprise exists.'}</p>

          <h3>{isKo ? 'Digitization vs Digitalization vs DX' : 'Digitization vs Digitalization vs DX'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '구분' : 'Category'}</th>
                <th>{isKo ? '정의' : 'Definition'}</th>
                <th>{isKo ? '예시' : 'Example'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Digitization</strong></td>
                <td>{isKo ? '아날로그 정보를 디지털로 변환' : 'Converting analog information to digital'}</td>
                <td>{isKo ? '종이 문서를 PDF로 스캔' : 'Scanning paper documents to PDF'}</td>
              </tr>
              <tr>
                <td><strong>Digitalization</strong></td>
                <td>{isKo ? '디지털 기술로 기존 프로세스 개선' : 'Improving existing processes with digital technology'}</td>
                <td>{isKo ? '전자결재 시스템 도입' : 'Implementing e-approval systems'}</td>
              </tr>
              <tr>
                <td><strong>DX (Transformation)</strong></td>
                <td>{isKo ? '비즈니스 모델 자체를 재창조' : 'Reinventing the business model itself'}</td>
                <td>{isKo ? '은행 → 디지털 금융 플랫폼' : 'Bank → Digital finance platform'}</td>
              </tr>
            </tbody>
          </table>

          <TipBox type="important">
            <p>{isKo
              ? 'DX는 기술 프로젝트가 아닌 경영 전략입니다. 기술은 수단이며, 목적은 고객 가치 창출과 비즈니스 모델 혁신입니다.'
              : 'DX is a business strategy, not a technology project. Technology is the means; the goal is customer value creation and business model innovation.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'maturity',
      icon: 'fa-chart-bar',
      labelKo: '디지털 성숙도 진단',
      labelEn: 'Digital Maturity',
      content: (
        <>
          <h2>{isKo ? '디지털 성숙도 진단' : 'Digital Maturity Assessment'}</h2>
          <p>{isKo
            ? '조직의 디지털 전환 수준을 체계적으로 평가하여 현재 위치를 파악하고 목표 수준과의 격차를 분석합니다. 이를 통해 전환의 우선순위와 투자 방향을 결정합니다.'
            : 'Systematically assess the organization\'s digital transformation level to understand the current position and analyze the gap from the target level. This determines transformation priorities and investment direction.'}</p>

          <h3>{isKo ? '5차원 성숙도 모델' : '5-Dimensional Maturity Model'}</h3>
          <ul>
            <li><strong>{isKo ? '전략 (Strategy)' : 'Strategy'}</strong>: {isKo ? '디지털 비전의 명확성, 경영진 의지, 투자 계획' : 'Clarity of digital vision, executive commitment, investment plan'}</li>
            <li><strong>{isKo ? '문화 (Culture)' : 'Culture'}</strong>: {isKo ? '실험 허용, 데이터 기반 의사결정, 협업 수준' : 'Experimentation tolerance, data-driven decisions, collaboration level'}</li>
            <li><strong>{isKo ? '기술 (Technology)' : 'Technology'}</strong>: {isKo ? '클라우드 도입률, API 연동, 데이터 인프라' : 'Cloud adoption, API integration, data infrastructure'}</li>
            <li><strong>{isKo ? '운영 (Operations)' : 'Operations'}</strong>: {isKo ? '프로세스 자동화율, 애자일 실행 능력' : 'Process automation rate, agile execution capability'}</li>
            <li><strong>{isKo ? '고객 (Customer)' : 'Customer'}</strong>: {isKo ? '고객 데이터 활용, 개인화 수준, 옴니채널 경험' : 'Customer data utilization, personalization level, omnichannel experience'}</li>
          </ul>

          <h3>{isKo ? '4단계 성숙도 수준' : '4-Level Maturity Scale'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '단계' : 'Level'}</th>
                <th>{isKo ? '명칭' : 'Name'}</th>
                <th>{isKo ? '특징' : 'Characteristics'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>{isKo ? '초기 (Initial)' : 'Initial'}</td>
                <td>{isKo ? '부분적 디지털화, 사일로 운영' : 'Partial digitization, siloed operations'}</td>
              </tr>
              <tr>
                <td>2</td>
                <td>{isKo ? '발전 (Developing)' : 'Developing'}</td>
                <td>{isKo ? '전략 수립됨, 파일럿 프로젝트 진행' : 'Strategy defined, pilot projects underway'}</td>
              </tr>
              <tr>
                <td>3</td>
                <td>{isKo ? '성숙 (Mature)' : 'Mature'}</td>
                <td>{isKo ? '조직 전체 확산, 데이터 기반 운영' : 'Organization-wide adoption, data-driven operations'}</td>
              </tr>
              <tr>
                <td>4</td>
                <td>{isKo ? '선도 (Leading)' : 'Leading'}</td>
                <td>{isKo ? '산업 혁신 주도, 생태계 구축' : 'Industry innovation leader, ecosystem builder'}</td>
              </tr>
            </tbody>
          </table>

          <TipBox type="tip">
            <p>{isKo
              ? '성숙도 진단은 1회성이 아닌 분기/반기 정기 점검으로 운영해야 합니다. 진단 결과를 경영진과 공유하고 Gap 해소 계획을 수립하세요.'
              : 'Maturity assessment should be conducted quarterly or semi-annually, not as a one-time event. Share results with executives and develop gap closure plans.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'framework',
      icon: 'fa-sitemap',
      labelKo: 'DX 프레임워크',
      labelEn: 'DX Frameworks',
      content: (
        <>
          <h2>{isKo ? 'DX 프레임워크 비교' : 'DX Framework Comparison'}</h2>
          <p>{isKo
            ? '글로벌 컨설팅사들은 각각의 DX 프레임워크를 제시하고 있습니다. 공통적으로 고객 중심, 데이터 기반, 애자일 실행, 생태계 확장을 핵심 축으로 삼고 있습니다.'
            : 'Global consulting firms offer their own DX frameworks. They commonly share core pillars: customer-centricity, data-driven approach, agile execution, and ecosystem expansion.'}</p>

          <h3>{isKo ? '주요 프레임워크 비교' : 'Major Framework Comparison'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '프레임워크' : 'Framework'}</th>
                <th>{isKo ? '핵심 축' : 'Core Pillars'}</th>
                <th>{isKo ? '특징' : 'Key Feature'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>McKinsey</strong></td>
                <td>{isKo ? '4D: Discover, Design, Deliver, De-risk' : '4D: Discover, Design, Deliver, De-risk'}</td>
                <td>{isKo ? '가치 중심, Top-down 접근' : 'Value-driven, top-down approach'}</td>
              </tr>
              <tr>
                <td><strong>BCG</strong></td>
                <td>{isKo ? 'Digital Acceleration Index (DAI)' : 'Digital Acceleration Index (DAI)'}</td>
                <td>{isKo ? '36개 지표 기반 정량 평가' : 'Quantitative assessment with 36 indicators'}</td>
              </tr>
              <tr>
                <td><strong>Gartner</strong></td>
                <td>{isKo ? 'ContinuousNext 5요소' : 'ContinuousNext 5 Elements'}</td>
                <td>{isKo ? '프라이버시, AI, 디지털트윈, 자율시스템, 엣지' : 'Privacy, AI, Digital Twin, Autonomous, Edge'}</td>
              </tr>
            </tbody>
          </table>

          <h3>{isKo ? '프레임워크 선택 기준' : 'Framework Selection Criteria'}</h3>
          <ul>
            <li><strong>{isKo ? '조직 규모' : 'Organization size'}</strong>: {isKo ? '대기업은 McKinsey/BCG, 중소기업은 간소화된 3단계 모델 적합' : 'Large enterprises suit McKinsey/BCG; SMEs fit simplified 3-step models'}</li>
            <li><strong>{isKo ? '산업 특성' : 'Industry characteristics'}</strong>: {isKo ? '규제 산업(금융/의료)은 De-risk 중심, 서비스업은 고객 경험 중심' : 'Regulated industries focus on de-risk; service sectors focus on customer experience'}</li>
            <li><strong>{isKo ? '현재 성숙도' : 'Current maturity'}</strong>: {isKo ? '초기 단계는 Discover부터, 성숙 단계는 Scale-up 중심' : 'Initial stage starts with Discover; mature stage focuses on scale-up'}</li>
          </ul>

          <TipBox type="example">
            <p>{isKo
              ? '실무에서는 하나의 프레임워크를 그대로 적용하기보다, 자사 상황에 맞게 커스터마이징합니다. McKinsey의 가치 도출 방법론 + BCG의 정량 측정 + Gartner의 기술 트렌드를 조합하는 것이 일반적입니다.'
              : 'In practice, rather than applying one framework as-is, companies customize for their situation. Combining McKinsey\'s value derivation + BCG\'s quantitative measurement + Gartner\'s tech trends is common.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'industry',
      icon: 'fa-industry',
      labelKo: '산업별 DX 특성',
      labelEn: 'Industry DX',
      content: (
        <>
          <h2>{isKo ? '산업별 DX 특성과 핵심 과제' : 'Industry-Specific DX Characteristics'}</h2>
          <p>{isKo
            ? '디지털 전환은 산업마다 핵심 과제와 접근 방식이 다릅니다. 각 산업의 특성을 이해하고 적합한 전략을 수립해야 합니다.'
            : 'Digital transformation has different key challenges and approaches for each industry. Understanding each industry\'s characteristics is essential for developing appropriate strategies.'}</p>

          <h3>{isKo ? '제조업' : 'Manufacturing'}</h3>
          <ul>
            <li><strong>{isKo ? '핵심 기술' : 'Core Tech'}</strong>: {isKo ? 'IoT, 디지털 트윈, 예지보전, 로보틱스' : 'IoT, Digital Twin, Predictive Maintenance, Robotics'}</li>
            <li><strong>{isKo ? '목표' : 'Goal'}</strong>: {isKo ? '스마트팩토리 구현, 생산 효율 극대화' : 'Smart factory implementation, production efficiency maximization'}</li>
            <li><strong>{isKo ? '과제' : 'Challenge'}</strong>: {isKo ? 'OT/IT 융합, 레거시 설비 연동' : 'OT/IT convergence, legacy equipment integration'}</li>
          </ul>

          <h3>{isKo ? '금융업' : 'Finance'}</h3>
          <ul>
            <li><strong>{isKo ? '핵심 기술' : 'Core Tech'}</strong>: {isKo ? 'AI 심사, 블록체인, 오픈뱅킹, 마이데이터' : 'AI underwriting, Blockchain, Open Banking, MyData'}</li>
            <li><strong>{isKo ? '목표' : 'Goal'}</strong>: {isKo ? '디지털뱅킹 전환, 초개인화 금융 서비스' : 'Digital banking transition, hyper-personalized financial services'}</li>
            <li><strong>{isKo ? '과제' : 'Challenge'}</strong>: {isKo ? '규제 대응, 보안, 레거시 코어뱅킹' : 'Regulatory compliance, security, legacy core banking'}</li>
          </ul>

          <h3>{isKo ? '유통업' : 'Retail'}</h3>
          <ul>
            <li><strong>{isKo ? '핵심 기술' : 'Core Tech'}</strong>: {isKo ? 'AI 추천, 옴니채널, 풀필먼트 자동화' : 'AI recommendation, Omnichannel, Fulfillment automation'}</li>
            <li><strong>{isKo ? '목표' : 'Goal'}</strong>: {isKo ? '고객 경험 통합, 실시간 수요 예측' : 'Unified customer experience, real-time demand prediction'}</li>
            <li><strong>{isKo ? '과제' : 'Challenge'}</strong>: {isKo ? '오프라인-온라인 통합, 라스트마일 혁신' : 'Online-offline integration, last-mile innovation'}</li>
          </ul>

          <h3>{isKo ? '의료업' : 'Healthcare'}</h3>
          <ul>
            <li><strong>{isKo ? '핵심 기술' : 'Core Tech'}</strong>: {isKo ? 'AI 진단, 원격의료, 디지털치료제, 유전체 분석' : 'AI diagnostics, Telemedicine, Digital therapeutics, Genomics'}</li>
            <li><strong>{isKo ? '목표' : 'Goal'}</strong>: {isKo ? '환자 중심 의료, 예방 의학 실현' : 'Patient-centered care, preventive medicine realization'}</li>
            <li><strong>{isKo ? '과제' : 'Challenge'}</strong>: {isKo ? '의료 데이터 보안, 규제 승인, 임상 검증' : 'Medical data security, regulatory approval, clinical validation'}</li>
          </ul>

          <h3>{isKo ? '교육업' : 'Education'}</h3>
          <ul>
            <li><strong>{isKo ? '핵심 기술' : 'Core Tech'}</strong>: {isKo ? 'AI 튜터, 적응형 학습, 메타버스, LMS' : 'AI Tutor, Adaptive Learning, Metaverse, LMS'}</li>
            <li><strong>{isKo ? '목표' : 'Goal'}</strong>: {isKo ? '개인 맞춤형 학습, 교육 접근성 확대' : 'Personalized learning, expanded education accessibility'}</li>
            <li><strong>{isKo ? '과제' : 'Challenge'}</strong>: {isKo ? '교수자 역량, 디지털 격차, 학습 효과 검증' : 'Instructor capability, digital divide, learning outcome validation'}</li>
          </ul>

          <TipBox type="tip">
            <p>{isKo
              ? '산업별 DX 벤치마킹 시 동종 업계뿐 아니라 이종 업계의 성공 사례도 참고하세요. 유통업의 고객 경험 혁신이 금융업에 적용되는 등 교차 산업 학습이 중요합니다.'
              : 'When benchmarking DX by industry, reference success cases from different industries too. Cross-industry learning is important — retail customer experience innovation applied to finance, etc.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'barriers',
      icon: 'fa-mountain',
      labelKo: 'DX의 장벽과 극복',
      labelEn: 'DX Barriers',
      content: (
        <>
          <h2>{isKo ? 'DX 5대 장벽과 극복 전략' : '5 Major DX Barriers & Overcoming Strategies'}</h2>
          <p>{isKo
            ? 'DX 프로젝트의 70%가 실패한다는 연구 결과가 있습니다. 실패의 원인은 대부분 기술이 아닌 조직, 문화, 리더십의 문제입니다. 5대 장벽을 이해하고 극복 전략을 수립해야 합니다.'
            : 'Studies show 70% of DX projects fail. Most failures stem not from technology but from organizational, cultural, and leadership issues. Understanding and addressing these 5 barriers is critical.'}</p>

          <h3>{isKo ? '5대 장벽과 극복 방안' : '5 Barriers & Solutions'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '장벽' : 'Barrier'}</th>
                <th>{isKo ? '원인' : 'Root Cause'}</th>
                <th>{isKo ? '극복 전략' : 'Overcoming Strategy'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>{isKo ? '레거시 시스템' : 'Legacy Systems'}</strong></td>
                <td>{isKo ? '20-30년 된 메인프레임, 스파게티 코드' : '20-30 year old mainframes, spaghetti code'}</td>
                <td>{isKo ? 'Strangler Pattern으로 점진적 교체' : 'Gradual replacement with Strangler Pattern'}</td>
              </tr>
              <tr>
                <td><strong>{isKo ? '조직 저항' : 'Organizational Resistance'}</strong></td>
                <td>{isKo ? '변화 두려움, 기득권 상실 우려' : 'Fear of change, concern about losing vested interests'}</td>
                <td>{isKo ? 'Change Champion 육성, 성공 사례 공유' : 'Develop Change Champions, share success stories'}</td>
              </tr>
              <tr>
                <td><strong>{isKo ? '인재 부족' : 'Talent Shortage'}</strong></td>
                <td>{isKo ? 'AI/클라우드/데이터 전문가 수급 불균형' : 'AI/Cloud/Data specialist supply-demand imbalance'}</td>
                <td>{isKo ? '리스킬링 프로그램, 외부 파트너십' : 'Reskilling programs, external partnerships'}</td>
              </tr>
              <tr>
                <td><strong>{isKo ? '예산 제약' : 'Budget Constraints'}</strong></td>
                <td>{isKo ? '초기 투자 부담, 비용 대비 효과 불확실' : 'Initial investment burden, uncertain cost-effectiveness'}</td>
                <td>{isKo ? 'MVP 접근, 단계적 투자, Quick Win 확보' : 'MVP approach, phased investment, Quick Win strategy'}</td>
              </tr>
              <tr>
                <td><strong>{isKo ? '불분명한 ROI' : 'Unclear ROI'}</strong></td>
                <td>{isKo ? 'DX 성과의 정량화 어려움' : 'Difficulty quantifying DX outcomes'}</td>
                <td>{isKo ? 'Leading Indicator 설정, OKR 기반 측정' : 'Set leading indicators, OKR-based measurement'}</td>
              </tr>
            </tbody>
          </table>

          <h3>{isKo ? '장벽 극복의 핵심 원칙' : 'Core Principles for Overcoming Barriers'}</h3>
          <ol>
            <li><strong>{isKo ? '작게 시작, 빠르게 증명' : 'Start small, prove fast'}</strong>: {isKo ? 'PoC(Proof of Concept)로 6-8주 내 성과 증명' : 'Prove results within 6-8 weeks with PoC'}</li>
            <li><strong>{isKo ? '사람에 투자' : 'Invest in people'}</strong>: {isKo ? '기술보다 사람의 역량과 마인드셋에 먼저 투자' : 'Invest in people\'s capabilities and mindset before technology'}</li>
            <li><strong>{isKo ? 'CEO의 강력한 의지' : 'Strong CEO commitment'}</strong>: {isKo ? '디지털 전환은 CEO 아젠다여야 성공 가능' : 'DX must be a CEO agenda item to succeed'}</li>
          </ol>

          <TipBox type="warning">
            <p>{isKo
              ? '가장 흔한 실수: "기술을 도입하면 DX가 된다"는 착각입니다. 클라우드를 도입해도 업무 방식을 바꾸지 않으면 비용만 증가합니다. 기술 도입과 업무 혁신을 반드시 병행하세요.'
              : 'Most common mistake: thinking "adopting technology equals DX." Even with cloud adoption, if work methods don\'t change, costs only increase. Always pair technology adoption with process innovation.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'success',
      icon: 'fa-star',
      labelKo: 'DX 성공 패턴',
      labelEn: 'DX Success Patterns',
      content: (
        <>
          <h2>{isKo ? 'DX 성공 기업의 5대 공통 패턴' : '5 Common Patterns of DX-Successful Companies'}</h2>
          <p>{isKo
            ? '국내외 DX 성공 기업을 분석한 결과, 5가지 공통 패턴이 발견됩니다. 이 패턴을 자사에 적용하여 성공 확률을 높일 수 있습니다.'
            : 'Analysis of DX-successful companies reveals 5 common patterns. Applying these patterns to your organization can increase the probability of success.'}</p>

          <h3>{isKo ? '5대 성공 패턴' : '5 Success Patterns'}</h3>
          <ol>
            <li>
              <strong>{isKo ? 'CEO 리더십' : 'CEO Leadership'}</strong>
              <p>{isKo ? 'CEO가 직접 DX를 주도하고, CDO(Chief Digital Officer)를 임명하여 전사적 추진력을 확보합니다. DX는 IT 부서의 과제가 아닌 경영 아젠다입니다.' : 'The CEO directly leads DX, appoints a CDO, and secures company-wide drive. DX is a management agenda, not an IT department task.'}</p>
            </li>
            <li>
              <strong>{isKo ? '고객 가치 중심' : 'Customer Value Focus'}</strong>
              <p>{isKo ? '기술이 아닌 고객 페인포인트에서 출발합니다. "어떤 기술을 쓸까?"가 아닌 "고객에게 어떤 가치를 줄까?"를 먼저 묻습니다.' : 'Start from customer pain points, not technology. Ask "What value do we provide to customers?" before "What technology should we use?"'}</p>
            </li>
            <li>
              <strong>{isKo ? '데이터 문화' : 'Data Culture'}</strong>
              <p>{isKo ? '직감이 아닌 데이터에 기반한 의사결정 문화를 구축합니다. 모든 구성원이 데이터에 접근하고 활용할 수 있는 데이터 민주화를 실현합니다.' : 'Build a culture of data-driven decisions, not intuition. Achieve data democratization where all members can access and utilize data.'}</p>
            </li>
            <li>
              <strong>{isKo ? '실험과 학습' : 'Experimentation & Learning'}</strong>
              <p>{isKo ? '실패를 허용하는 문화, 빠른 실험(Rapid Prototyping), MVP 접근을 통해 학습 속도를 극대화합니다. "실패해도 되지만, 같은 실패를 반복하면 안 된다."' : 'Maximize learning speed through a culture that tolerates failure, rapid prototyping, and MVP approach. "Failure is OK, but don\'t repeat the same failure."'}</p>
            </li>
            <li>
              <strong>{isKo ? '생태계 협력' : 'Ecosystem Collaboration'}</strong>
              <p>{isKo ? '단독 추진이 아닌 스타트업, 플랫폼사, 학계와의 오픈 이노베이션으로 혁신 속도를 높입니다.' : 'Accelerate innovation through open innovation with startups, platform companies, and academia rather than going it alone.'}</p>
            </li>
          </ol>

          <TipBox type="example">
            <p>{isKo
              ? '성공 사례: 스타벅스는 "커피 회사"에서 "디지털 경험 회사"로 변신했습니다. 모바일 오더, AI 개인화 추천(Deep Brew), 리워드 프로그램 통합으로 디지털 매출 비중 30%를 달성했습니다.'
              : 'Success case: Starbucks transformed from a "coffee company" to a "digital experience company." Mobile ordering, AI personalization (Deep Brew), and integrated rewards achieved 30% digital revenue share.'}</p>
          </TipBox>
        </>
      ),
    },
  ];

  return (
    <GuidePage
      titleKo="DX 개요"
      titleEn="DX Overview"
      subtitleKo="디지털 전환(DX)의 개념과 비즈니스 영향을 이해합니다."
      subtitleEn="Understand the concept and business impact of Digital Transformation."
      icon="fa-microchip"
      iconColor="#0891B2"
      path="/dx-overview"
      sections={sections}
    />
  );
}
