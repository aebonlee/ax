import GuidePage from '../../components/GuidePage';
import TipBox from '../../components/TipBox';
import { useLanguage } from '../../contexts/LanguageContext';
import type { ReactElement } from 'react';
import type { GuideSection } from '../../components/GuidePage';

export default function TrendsDX(): ReactElement {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  const sections: GuideSection[] = [
    {
      id: 'composable',
      icon: 'fa-cubes',
      labelKo: '컴포저블 아키텍처',
      labelEn: 'Composable Architecture',
      content: (
        <>
          <h2>{isKo ? '컴포저블 아키텍처: 모듈형 기업 시스템' : 'Composable Architecture: Modular Enterprise Systems'}</h2>
          <p>
            {isKo
              ? '컴포저블 아키텍처는 기업 시스템을 독립적으로 교체·조합 가능한 모듈(Packaged Business Capabilities, PBC)로 구성하는 설계 철학입니다. 모놀리식 시스템의 경직성을 탈피하여 비즈니스 변화에 민첩하게 대응할 수 있습니다.'
              : 'Composable architecture is a design philosophy that structures enterprise systems with independently replaceable and combinable modules (Packaged Business Capabilities, PBC). It escapes the rigidity of monolithic systems to respond agilely to business changes.'}
          </p>

          <h3>{isKo ? '핵심 원칙' : 'Core Principles'}</h3>
          <ul>
            <li><strong>API-First</strong>: {isKo ? '모든 기능을 API로 노출하여 외부 연동과 재사용성 극대화' : 'Expose all capabilities as APIs to maximize external integration and reusability'}</li>
            <li><strong>{isKo ? '마이크로서비스' : 'Microservices'}</strong>: {isKo ? '독립 배포·확장 가능한 작은 서비스 단위로 분리' : 'Decompose into small, independently deployable and scalable service units'}</li>
            <li><strong>{isKo ? '이벤트 기반' : 'Event-Driven'}</strong>: {isKo ? '서비스 간 느슨한 결합, 비동기 메시지를 통한 통신' : 'Loose coupling between services, communication through asynchronous messaging'}</li>
            <li><strong>{isKo ? '클라우드 네이티브' : 'Cloud Native'}</strong>: {isKo ? '컨테이너, 서버리스, 오케스트레이션 기반 인프라' : 'Container, serverless, and orchestration-based infrastructure'}</li>
          </ul>

          <h3>{isKo ? '모놀리식 vs 컴포저블 비교' : 'Monolithic vs Composable Comparison'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '항목' : 'Criteria'}</th>
                <th>{isKo ? '모놀리식' : 'Monolithic'}</th>
                <th>{isKo ? '컴포저블' : 'Composable'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{isKo ? '배포 주기' : 'Deployment Cycle'}</td>
                <td>{isKo ? '월 1~2회' : '1-2 times/month'}</td>
                <td>{isKo ? '일 수십 회' : 'Dozens/day'}</td>
              </tr>
              <tr>
                <td>{isKo ? '변경 영향 범위' : 'Change Impact Scope'}</td>
                <td>{isKo ? '전체 시스템' : 'Entire system'}</td>
                <td>{isKo ? '해당 모듈만' : 'Affected module only'}</td>
              </tr>
              <tr>
                <td>{isKo ? '기술 스택' : 'Tech Stack'}</td>
                <td>{isKo ? '단일 고정' : 'Single fixed'}</td>
                <td>{isKo ? '모듈별 최적 선택' : 'Best fit per module'}</td>
              </tr>
              <tr>
                <td>{isKo ? '확장성' : 'Scalability'}</td>
                <td>{isKo ? '전체 스케일링' : 'Scale entire system'}</td>
                <td>{isKo ? '부분 스케일링' : 'Scale individual parts'}</td>
              </tr>
            </tbody>
          </table>

          <TipBox type="tip">
            <p>{isKo ? 'Gartner는 2027년까지 신규 애플리케이션의 60%가 컴포저블 아키텍처로 구축될 것으로 예측합니다. 기존 시스템의 전면 교체보다는 "Strangler Fig Pattern"으로 점진적 전환을 권장합니다.' : 'Gartner predicts 60% of new applications will be built with composable architecture by 2027. Rather than full system replacement, gradual transition using the "Strangler Fig Pattern" is recommended.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'hyperauto',
      icon: 'fa-gears',
      labelKo: '초자동화',
      labelEn: 'Hyperautomation',
      content: (
        <>
          <h2>{isKo ? '초자동화: 엔드투엔드 프로세스 자동화' : 'Hyperautomation: End-to-End Process Automation'}</h2>
          <p>
            {isKo
              ? '초자동화(Hyperautomation)는 RPA, AI, 프로세스 마이닝, 로우코드/노코드를 결합하여 기업의 비즈니스 프로세스를 엔드투엔드로 자동화하는 전략입니다. 단순 반복 업무를 넘어 판단이 필요한 복잡한 프로세스까지 자동화 범위가 확대되고 있습니다.'
              : 'Hyperautomation is a strategy that combines RPA, AI, process mining, and low-code/no-code to automate enterprise business processes end-to-end. Automation scope is expanding beyond simple repetitive tasks to complex processes requiring judgment.'}
          </p>

          <h3>{isKo ? '초자동화 기술 스택' : 'Hyperautomation Technology Stack'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '레이어' : 'Layer'}</th>
                <th>{isKo ? '기술' : 'Technology'}</th>
                <th>{isKo ? '역할' : 'Role'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{isKo ? '발견' : 'Discovery'}</td>
                <td>{isKo ? '프로세스 마이닝, 태스크 마이닝' : 'Process Mining, Task Mining'}</td>
                <td>{isKo ? '자동화 대상 프로세스 식별 및 분석' : 'Identify and analyze automation candidates'}</td>
              </tr>
              <tr>
                <td>{isKo ? '실행' : 'Execution'}</td>
                <td>RPA + AI</td>
                <td>{isKo ? '규칙 기반 + 지능형 자동화 수행' : 'Rule-based + intelligent automation execution'}</td>
              </tr>
              <tr>
                <td>{isKo ? '오케스트레이션' : 'Orchestration'}</td>
                <td>{isKo ? '워크플로우 엔진' : 'Workflow Engine'}</td>
                <td>{isKo ? '자동화 봇과 사람의 협업 관리' : 'Manage collaboration between bots and humans'}</td>
              </tr>
              <tr>
                <td>{isKo ? '모니터링' : 'Monitoring'}</td>
                <td>{isKo ? 'AI 분석, 대시보드' : 'AI Analytics, Dashboard'}</td>
                <td>{isKo ? '성과 측정 및 지속적 최적화' : 'Performance measurement and continuous optimization'}</td>
              </tr>
            </tbody>
          </table>

          <h3>{isKo ? 'AI가 강화한 RPA의 진화' : 'Evolution of AI-Enhanced RPA'}</h3>
          <ul>
            <li><strong>{isKo ? '문서 지능(Document AI)' : 'Document Intelligence'}</strong>: {isKo ? '비정형 문서(계약서, 인보이스, 이메일)를 자동으로 이해하고 데이터 추출' : 'Automatically understand and extract data from unstructured documents (contracts, invoices, emails)'}</li>
            <li><strong>{isKo ? '의사결정 자동화' : 'Decision Automation'}</strong>: {isKo ? 'AI가 규칙으로 처리할 수 없는 예외 상황을 판단하여 처리' : 'AI judges and handles exceptions that cannot be processed by rules'}</li>
            <li><strong>{isKo ? '자가 치유(Self-Healing)' : 'Self-Healing'}</strong>: {isKo ? 'UI 변경이나 에러 발생 시 AI가 자동으로 봇을 수정' : 'AI automatically fixes bots when UI changes or errors occur'}</li>
            <li><strong>{isKo ? '자연어 자동화' : 'Natural Language Automation'}</strong>: {isKo ? '업무 담당자가 자연어로 자동화 시나리오를 생성' : 'Business users create automation scenarios in natural language'}</li>
          </ul>

          <TipBox type="example">
            <p>{isKo ? 'A 보험사는 보험금 청구 프로세스에 초자동화를 적용하여 처리 시간을 7일에서 4시간으로 단축했습니다. 문서 AI가 청구서를 분석하고, AI가 사기 탐지를 수행하며, RPA가 지급을 처리하는 엔드투엔드 파이프라인을 구축했습니다.' : 'Insurance company A applied hyperautomation to claims processing, reducing processing time from 7 days to 4 hours. They built an end-to-end pipeline where Document AI analyzes claims, AI performs fraud detection, and RPA processes payments.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'datadriven',
      icon: 'fa-database',
      labelKo: '데이터 기반 경영',
      labelEn: 'Data-Driven Management',
      content: (
        <>
          <h2>{isKo ? '데이터 기반 경영: 데이터에서 가치로' : 'Data-Driven Management: From Data to Value'}</h2>
          <p>
            {isKo
              ? '데이터 기반 경영은 직관이 아닌 데이터와 분석에 근거하여 의사결정을 내리는 경영 방식입니다. 데이터 패브릭, 데이터 메시, 실시간 분석 등 최신 데이터 아키텍처가 이를 뒷받침하고 있습니다.'
              : 'Data-driven management is a management approach that makes decisions based on data and analytics rather than intuition. Modern data architectures including data fabric, data mesh, and real-time analytics support this transformation.'}
          </p>

          <h3>{isKo ? '최신 데이터 아키텍처' : 'Modern Data Architectures'}</h3>
          <ul>
            <li><strong>{isKo ? '데이터 패브릭(Data Fabric)' : 'Data Fabric'}</strong>: {isKo ? '분산된 데이터를 단일 가상 레이어로 통합하여 접근성 제공. 메타데이터 기반 자동화로 데이터 관리 부담 감소' : 'Provides accessibility by integrating distributed data into a single virtual layer. Reduces data management burden through metadata-based automation'}</li>
            <li><strong>{isKo ? '데이터 메시(Data Mesh)' : 'Data Mesh'}</strong>: {isKo ? '도메인 팀이 자신의 데이터를 "데이터 프로덕트"로 관리·제공. 분산형 소유권으로 확장성 확보' : 'Domain teams manage and provide their data as "data products." Ensures scalability through distributed ownership'}</li>
            <li><strong>{isKo ? '실시간 분석(Real-Time Analytics)' : 'Real-Time Analytics'}</strong>: {isKo ? '스트리밍 데이터를 즉시 처리하여 실시간 인사이트 도출. Apache Kafka, Flink 기반 아키텍처' : 'Process streaming data immediately for real-time insights. Apache Kafka, Flink-based architecture'}</li>
          </ul>

          <h3>{isKo ? '데이터 성숙도 모델' : 'Data Maturity Model'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '단계' : 'Stage'}</th>
                <th>{isKo ? '특징' : 'Characteristics'}</th>
                <th>{isKo ? '목표' : 'Goal'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{isKo ? '1단계: 반응적' : 'Stage 1: Reactive'}</td>
                <td>{isKo ? '필요 시 수동으로 데이터 수집 및 분석' : 'Manual data collection and analysis when needed'}</td>
                <td>{isKo ? '무엇이 일어났는가?' : 'What happened?'}</td>
              </tr>
              <tr>
                <td>{isKo ? '2단계: 체계적' : 'Stage 2: Systematic'}</td>
                <td>{isKo ? '정기 리포팅, 대시보드 구축' : 'Regular reporting, dashboard construction'}</td>
                <td>{isKo ? '왜 일어났는가?' : 'Why did it happen?'}</td>
              </tr>
              <tr>
                <td>{isKo ? '3단계: 예측적' : 'Stage 3: Predictive'}</td>
                <td>{isKo ? 'ML 모델을 통한 미래 예측' : 'Future prediction through ML models'}</td>
                <td>{isKo ? '무엇이 일어날 것인가?' : 'What will happen?'}</td>
              </tr>
              <tr>
                <td>{isKo ? '4단계: 처방적' : 'Stage 4: Prescriptive'}</td>
                <td>{isKo ? 'AI 기반 자동 의사결정 및 실행' : 'AI-based automatic decision-making and execution'}</td>
                <td>{isKo ? '어떻게 해야 하는가?' : 'What should we do?'}</td>
              </tr>
            </tbody>
          </table>

          <TipBox type="important">
            <p>{isKo ? '데이터 기반 경영의 가장 큰 장벽은 기술이 아니라 "데이터 문화"입니다. 경영진부터 현장 직원까지 데이터를 기반으로 의사결정하는 문화가 정착되어야 합니다. 이를 위해 "데이터 리터러시" 교육이 선행되어야 합니다.' : 'The biggest barrier to data-driven management is not technology but "data culture." A culture of data-based decision-making must be established from executives to frontline employees. This requires prior "data literacy" education.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'sustainability',
      icon: 'fa-leaf',
      labelKo: '지속가능 DX',
      labelEn: 'Sustainable DX',
      content: (
        <>
          <h2>{isKo ? '지속가능 DX: 그린IT와 ESG 디지털' : 'Sustainable DX: Green IT and ESG Digital'}</h2>
          <p>
            {isKo
              ? 'AI와 클라우드 컴퓨팅의 폭발적 성장으로 IT 분야의 탄소 배출이 급증하고 있습니다. 지속가능 DX는 디지털 전환의 환경적 영향을 최소화하면서 ESG 목표를 달성하는 전략입니다.'
              : 'The explosive growth of AI and cloud computing is rapidly increasing carbon emissions in the IT sector. Sustainable DX is a strategy to achieve ESG goals while minimizing the environmental impact of digital transformation.'}
          </p>

          <h3>{isKo ? 'IT 탄소 배출 현황' : 'IT Carbon Emission Status'}</h3>
          <ul>
            <li><strong>{isKo ? '데이터센터' : 'Data Centers'}</strong>: {isKo ? '전 세계 전력 소비의 3~4% 차지, AI 학습으로 인해 연 20% 증가 중' : 'Accounts for 3-4% of global power consumption, growing 20% annually due to AI training'}</li>
            <li><strong>{isKo ? 'AI 모델 학습' : 'AI Model Training'}</strong>: {isKo ? 'GPT-4급 모델 1회 학습에 자동차 5대의 평생 배출량에 해당하는 CO2 발생' : 'Training a GPT-4 class model once generates CO2 equivalent to lifetime emissions of 5 cars'}</li>
            <li><strong>{isKo ? '전자 폐기물' : 'E-Waste'}</strong>: {isKo ? 'GPU 교체 주기 단축으로 연 6,200만 톤의 전자 폐기물 발생' : 'Shortened GPU replacement cycles generate 62 million tons of e-waste annually'}</li>
          </ul>

          <h3>{isKo ? '그린 IT 전략' : 'Green IT Strategies'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '전략' : 'Strategy'}</th>
                <th>{isKo ? '접근법' : 'Approach'}</th>
                <th>{isKo ? '예상 효과' : 'Expected Impact'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{isKo ? '에너지 효율 AI' : 'Energy-Efficient AI'}</td>
                <td>{isKo ? 'SLM, 모델 경량화, 효율적 학습 기법' : 'SLM, model compression, efficient training techniques'}</td>
                <td>{isKo ? '에너지 소비 70% 절감' : '70% energy consumption reduction'}</td>
              </tr>
              <tr>
                <td>{isKo ? '재생에너지 전환' : 'Renewable Energy Transition'}</td>
                <td>{isKo ? '데이터센터 100% 재생에너지 운영' : '100% renewable energy data center operations'}</td>
                <td>{isKo ? '탄소 배출 90% 감소' : '90% carbon emission reduction'}</td>
              </tr>
              <tr>
                <td>{isKo ? '탄소 인식 컴퓨팅' : 'Carbon-Aware Computing'}</td>
                <td>{isKo ? '탄소 배출이 낮은 시간대/지역으로 워크로드 이동' : 'Shift workloads to low-carbon time zones/regions'}</td>
                <td>{isKo ? '탄소 효율 40% 개선' : '40% carbon efficiency improvement'}</td>
              </tr>
            </tbody>
          </table>

          <h3>{isKo ? 'ESG 디지털 성과 관리' : 'ESG Digital Performance Management'}</h3>
          <ol>
            <li><strong>{isKo ? '탄소 배출 자동 추적' : 'Automated Carbon Tracking'}</strong>: {isKo ? 'IoT 센서와 AI를 활용한 실시간 배출량 모니터링' : 'Real-time emission monitoring using IoT sensors and AI'}</li>
            <li><strong>{isKo ? 'ESG 보고 자동화' : 'ESG Reporting Automation'}</strong>: {isKo ? 'AI 기반 ESG 데이터 수집·분석·보고서 생성' : 'AI-based ESG data collection, analysis, and report generation'}</li>
            <li><strong>{isKo ? '공급망 투명성' : 'Supply Chain Transparency'}</strong>: {isKo ? '블록체인 + AI로 공급망 전체의 ESG 준수 여부 추적' : 'Track ESG compliance across the entire supply chain with blockchain + AI'}</li>
          </ol>

          <TipBox type="warning">
            <p>{isKo ? 'EU의 CSRD(기업 지속가능성 보고 지침)에 따라 2026년부터 대형 기업은 디지털 시스템의 탄소 발자국을 의무적으로 보고해야 합니다. 그린워싱에 대한 규제도 강화되어, 실질적인 감축 성과가 요구됩니다.' : 'Under the EU\'s CSRD (Corporate Sustainability Reporting Directive), large companies must mandatorily report the carbon footprint of digital systems from 2026. Regulations against greenwashing are also strengthened, requiring substantive reduction results.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'platform',
      icon: 'fa-diagram-project',
      labelKo: '디지털 플랫폼',
      labelEn: 'Digital Platform',
      content: (
        <>
          <h2>{isKo ? '디지털 플랫폼: 생태계 비즈니스' : 'Digital Platform: Ecosystem Business'}</h2>
          <p>
            {isKo
              ? '디지털 플랫폼은 다양한 참여자(생산자, 소비자, 개발자)를 연결하여 가치를 창출하는 비즈니스 모델입니다. API 경제의 성장과 함께 플랫폼 비즈니스는 산업의 핵심 경쟁 전략으로 자리잡았습니다.'
              : 'Digital platforms are business models that create value by connecting diverse participants (producers, consumers, developers). With the growth of the API economy, platform business has become a core competitive strategy across industries.'}
          </p>

          <h3>{isKo ? '플랫폼 비즈니스 유형' : 'Platform Business Types'}</h3>
          <ul>
            <li><strong>{isKo ? '트랜잭션 플랫폼' : 'Transaction Platform'}</strong>: {isKo ? '구매자와 판매자를 연결하는 마켓플레이스 (쿠팡, Amazon, Airbnb)' : 'Marketplace connecting buyers and sellers (Coupang, Amazon, Airbnb)'}</li>
            <li><strong>{isKo ? '혁신 플랫폼' : 'Innovation Platform'}</strong>: {isKo ? '외부 개발자에게 API/SDK를 제공하여 생태계 확장 (iOS, Android, Salesforce)' : 'Expanding ecosystems by providing APIs/SDKs to external developers (iOS, Android, Salesforce)'}</li>
            <li><strong>{isKo ? '통합 플랫폼' : 'Integrated Platform'}</strong>: {isKo ? '트랜잭션 + 혁신을 결합 (Apple, Google, Microsoft)' : 'Combining transaction + innovation (Apple, Google, Microsoft)'}</li>
            <li><strong>{isKo ? 'AI 플랫폼' : 'AI Platform'}</strong>: {isKo ? 'AI 모델과 서비스를 마켓플레이스로 제공 (HuggingFace, OpenAI)' : 'Providing AI models and services as marketplace (HuggingFace, OpenAI)'}</li>
          </ul>

          <h3>{isKo ? 'API 경제의 성장' : 'Growth of API Economy'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '지표' : 'Metric'}</th>
                <th>2024</th>
                <th>2026</th>
                <th>{isKo ? '성장률' : 'Growth'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{isKo ? '글로벌 API 시장 규모' : 'Global API Market Size'}</td>
                <td>$5.1B</td>
                <td>$8.4B</td>
                <td>+65%</td>
              </tr>
              <tr>
                <td>{isKo ? '평균 기업 API 사용 수' : 'Avg. Enterprise API Usage'}</td>
                <td>350+</td>
                <td>750+</td>
                <td>+114%</td>
              </tr>
              <tr>
                <td>{isKo ? 'API 기반 매출 비중' : 'API-Based Revenue Share'}</td>
                <td>18%</td>
                <td>32%</td>
                <td>+78%</td>
              </tr>
            </tbody>
          </table>

          <h3>{isKo ? '플랫폼 성공 전략' : 'Platform Success Strategies'}</h3>
          <ol>
            <li><strong>{isKo ? '네트워크 효과 극대화' : 'Maximize Network Effects'}</strong>: {isKo ? '참여자가 늘수록 플랫폼 가치가 기하급수적으로 증가하는 구조 설계' : 'Design structures where platform value grows exponentially as participants increase'}</li>
            <li><strong>{isKo ? '개발자 경험(DX) 투자' : 'Invest in Developer Experience (DX)'}</strong>: {isKo ? '우수한 문서, SDK, 샌드박스로 외부 개발자 유입 촉진' : 'Promote external developer adoption with excellent docs, SDKs, and sandboxes'}</li>
            <li><strong>{isKo ? '데이터 플라이휠' : 'Data Flywheel'}</strong>: {isKo ? '사용 데이터로 서비스를 개선하여 더 많은 사용자를 유치하는 선순환' : 'Virtuous cycle of improving services with usage data to attract more users'}</li>
            <li><strong>{isKo ? '거버넌스 균형' : 'Governance Balance'}</strong>: {isKo ? '개방성과 품질 통제 사이의 최적 균형점 찾기' : 'Finding optimal balance between openness and quality control'}</li>
          </ol>

          <TipBox type="tip">
            <p>{isKo ? '플랫폼 비즈니스의 핵심은 "직접 가치 창출"이 아니라 "참여자 간 가치 교환을 촉진"하는 것입니다. 성공적인 플랫폼은 모든 참여자가 Win-Win 하는 생태계를 만듭니다.' : 'The core of platform business is not "direct value creation" but "facilitating value exchange between participants." Successful platforms create ecosystems where all participants achieve Win-Win outcomes.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'metaverse',
      icon: 'fa-vr-cardboard',
      labelKo: '메타버스 & 공간컴퓨팅',
      labelEn: 'Metaverse & Spatial Computing',
      content: (
        <>
          <h2>{isKo ? '메타버스 & 공간컴퓨팅: 물리와 디지털의 융합' : 'Metaverse & Spatial Computing: Fusion of Physical and Digital'}</h2>
          <p>
            {isKo
              ? '초기 "하이프"를 지나 메타버스는 기업의 실질적 비즈니스 도구로 진화하고 있습니다. 디지털 트윈, AR/VR, 공간컴퓨팅 기술의 성숙으로 제조, 교육, 협업 분야에서 실용적 가치를 증명하고 있습니다.'
              : 'Beyond the initial "hype," the metaverse is evolving into a practical business tool for enterprises. With the maturation of digital twin, AR/VR, and spatial computing technologies, it is proving practical value in manufacturing, education, and collaboration.'}
          </p>

          <h3>{isKo ? '디지털 트윈의 산업 활용' : 'Industrial Applications of Digital Twin'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '산업' : 'Industry'}</th>
                <th>{isKo ? '활용 사례' : 'Use Cases'}</th>
                <th>{isKo ? '효과' : 'Impact'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{isKo ? '제조' : 'Manufacturing'}</td>
                <td>{isKo ? '공장 시뮬레이션, 설비 예지보전' : 'Factory simulation, predictive maintenance'}</td>
                <td>{isKo ? '다운타임 35% 감소' : '35% downtime reduction'}</td>
              </tr>
              <tr>
                <td>{isKo ? '건설' : 'Construction'}</td>
                <td>{isKo ? 'BIM 연동 시공 시뮬레이션' : 'BIM-linked construction simulation'}</td>
                <td>{isKo ? '공기 20% 단축, 비용 15% 절감' : '20% shorter timeline, 15% cost savings'}</td>
              </tr>
              <tr>
                <td>{isKo ? '도시 계획' : 'Urban Planning'}</td>
                <td>{isKo ? '교통, 에너지, 재난 시뮬레이션' : 'Traffic, energy, disaster simulation'}</td>
                <td>{isKo ? '의사결정 정확도 40% 향상' : '40% decision accuracy improvement'}</td>
              </tr>
              <tr>
                <td>{isKo ? '의료' : 'Healthcare'}</td>
                <td>{isKo ? '환자 디지털 트윈, 수술 시뮬레이션' : 'Patient digital twin, surgery simulation'}</td>
                <td>{isKo ? '수술 성공률 25% 향상' : '25% surgery success rate improvement'}</td>
              </tr>
            </tbody>
          </table>

          <h3>{isKo ? '공간컴퓨팅과 가상 협업' : 'Spatial Computing and Virtual Collaboration'}</h3>
          <ul>
            <li><strong>Apple Vision Pro</strong>: {isKo ? '공간 컴퓨팅의 대중화 견인, 엔터프라이즈 협업 도구로 진화' : 'Driving mainstream adoption of spatial computing, evolving into enterprise collaboration tool'}</li>
            <li><strong>Meta Quest</strong>: {isKo ? '가상 오피스(Horizon Workrooms)로 원격 근무 환경 혁신' : 'Innovating remote work with virtual office (Horizon Workrooms)'}</li>
            <li><strong>NVIDIA Omniverse</strong>: {isKo ? '산업용 디지털 트윈 제작 플랫폼, USD 기반 협업' : 'Industrial digital twin creation platform, USD-based collaboration'}</li>
            <li><strong>{isKo ? 'WebXR' : 'WebXR'}</strong>: {isKo ? '별도 앱 설치 없이 브라우저에서 XR 경험 제공' : 'Provide XR experiences in browser without separate app installation'}</li>
          </ul>

          <h3>{isKo ? '2026 메타버스 트렌드' : '2026 Metaverse Trends'}</h3>
          <ol>
            <li><strong>{isKo ? 'AI + 메타버스' : 'AI + Metaverse'}</strong>: {isKo ? '생성형 AI로 3D 에셋, 가상환경을 자동 생성하여 제작 비용 90% 절감' : 'Generative AI auto-creates 3D assets and virtual environments, reducing production costs by 90%'}</li>
            <li><strong>{isKo ? '산업용 메타버스' : 'Industrial Metaverse'}</strong>: {isKo ? '소비자 메타버스에서 기업/산업 메타버스로 중심 이동' : 'Center of gravity shifting from consumer metaverse to enterprise/industrial metaverse'}</li>
            <li><strong>{isKo ? '상호운용성 표준화' : 'Interoperability Standardization'}</strong>: {isKo ? 'Open Metaverse Foundation 주도로 플랫폼 간 호환 표준 정립' : 'Open Metaverse Foundation leading cross-platform compatibility standards'}</li>
          </ol>

          <TipBox type="example">
            <p>{isKo ? 'BMW는 NVIDIA Omniverse 기반 디지털 트윈으로 신규 공장의 전체 생산 라인을 가상으로 구축·시뮬레이션한 후 실제 건설에 착수합니다. 이를 통해 설계 오류를 사전에 발견하고, 생산 최적화까지 가상에서 완료하여 투자 위험을 크게 줄였습니다.' : 'BMW builds and simulates the entire production line of new factories virtually using NVIDIA Omniverse-based digital twins before actual construction. This discovers design errors in advance and completes production optimization virtually, significantly reducing investment risk.'}</p>
          </TipBox>
        </>
      ),
    },
  ];

  return (
    <GuidePage
      titleKo="DX 트렌드"
      titleEn="DX Trends"
      subtitleKo="디지털 전환 분야의 최신 기술 트렌드를 분석합니다."
      subtitleEn="Analyze the latest technology trends in digital transformation."
      icon="fa-arrow-trend-up"
      iconColor="#7C3AED"
      path="/trends-dx"
      sections={sections}
    />
  );
}
