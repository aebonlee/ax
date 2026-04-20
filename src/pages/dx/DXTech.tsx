import GuidePage from '../../components/GuidePage';
import TipBox from '../../components/TipBox';
import { useLanguage } from '../../contexts/LanguageContext';
import type { ReactElement } from 'react';
import type { GuideSection } from '../../components/GuidePage';

export default function DXTech(): ReactElement {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  const sections: GuideSection[] = [
    {
      id: 'cloud',
      icon: 'fa-cloud',
      labelKo: '클라우드 컴퓨팅',
      labelEn: 'Cloud Computing',
      content: (
        <>
          <h2>{isKo ? '클라우드 컴퓨팅' : 'Cloud Computing'}</h2>
          <p>{isKo
            ? '클라우드는 DX의 기본 인프라입니다. 온프레미스에서 클라우드로의 전환은 단순한 서버 이전이 아닌, IT 운영 방식 전체를 혁신하는 것입니다.'
            : 'Cloud is the fundamental infrastructure of DX. The shift from on-premises to cloud is not simply server migration, but a complete innovation of IT operations.'}</p>

          <h3>{isKo ? '서비스 모델 비교' : 'Service Model Comparison'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '모델' : 'Model'}</th>
                <th>{isKo ? '제공 범위' : 'Scope'}</th>
                <th>{isKo ? '대표 서비스' : 'Key Services'}</th>
                <th>{isKo ? '적합 대상' : 'Best For'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>IaaS</strong></td>
                <td>{isKo ? '서버, 스토리지, 네트워크' : 'Server, Storage, Network'}</td>
                <td>AWS EC2, Azure VM, GCP Compute</td>
                <td>{isKo ? '인프라 제어가 필요한 기업' : 'Enterprises needing infra control'}</td>
              </tr>
              <tr>
                <td><strong>PaaS</strong></td>
                <td>{isKo ? 'IaaS + 런타임, 미들웨어' : 'IaaS + Runtime, Middleware'}</td>
                <td>AWS Elastic Beanstalk, Heroku, Vercel</td>
                <td>{isKo ? '빠른 개발에 집중하고 싶은 팀' : 'Teams wanting to focus on fast development'}</td>
              </tr>
              <tr>
                <td><strong>SaaS</strong></td>
                <td>{isKo ? '완성된 소프트웨어 서비스' : 'Complete software service'}</td>
                <td>Salesforce, Notion, Slack, Google Workspace</td>
                <td>{isKo ? '즉시 사용이 필요한 모든 조직' : 'All organizations needing immediate use'}</td>
              </tr>
            </tbody>
          </table>

          <h3>{isKo ? '주요 CSP 비교' : 'Major CSP Comparison'}</h3>
          <ul>
            <li><strong>AWS</strong>: {isKo ? '시장 점유율 1위(32%), 가장 넓은 서비스 포트폴리오, 스타트업부터 대기업까지' : 'Market leader (32%), widest service portfolio, startups to enterprises'}</li>
            <li><strong>Azure</strong>: {isKo ? '엔터프라이즈 강점, Microsoft 생태계 연동, 하이브리드 클라우드 리더' : 'Enterprise strength, Microsoft ecosystem integration, hybrid cloud leader'}</li>
            <li><strong>GCP</strong>: {isKo ? 'AI/ML, 데이터 분석 강점, Kubernetes 원조, 합리적 가격' : 'AI/ML, data analytics strength, Kubernetes originator, competitive pricing'}</li>
          </ul>

          <h3>{isKo ? '하이브리드/멀티 클라우드 전략' : 'Hybrid/Multi-Cloud Strategy'}</h3>
          <ul>
            <li><strong>{isKo ? '하이브리드 클라우드' : 'Hybrid Cloud'}</strong>: {isKo ? '민감 데이터는 프라이빗, 탄력적 워크로드는 퍼블릭으로 분산' : 'Sensitive data in private, elastic workloads in public'}</li>
            <li><strong>{isKo ? '멀티 클라우드' : 'Multi-Cloud'}</strong>: {isKo ? '벤더 종속 방지, 장애 대응력 강화, 각 CSP의 강점 활용' : 'Avoid vendor lock-in, enhance resilience, leverage each CSP\'s strengths'}</li>
          </ul>

          <TipBox type="tip">
            <p>{isKo
              ? '클라우드 전환 시 "Lift & Shift"로 시작하되, 최종 목표는 "Cloud-Native"여야 합니다. 컨테이너, 서버리스, IaC를 활용하여 클라우드의 진정한 이점(탄력성, 확장성, 비용 최적화)을 누리세요.'
              : 'Start cloud migration with "Lift & Shift," but the ultimate goal should be "Cloud-Native." Leverage containers, serverless, and IaC to realize true cloud benefits (elasticity, scalability, cost optimization).'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'data',
      icon: 'fa-database',
      labelKo: '데이터 플랫폼',
      labelEn: 'Data Platform',
      content: (
        <>
          <h2>{isKo ? '데이터 플랫폼 구축' : 'Building Data Platforms'}</h2>
          <p>{isKo
            ? '데이터는 DX의 연료입니다. 분산된 데이터를 수집, 저장, 처리, 분석하여 비즈니스 인사이트를 도출하는 현대적 데이터 플랫폼을 구축해야 합니다.'
            : 'Data is the fuel of DX. Build modern data platforms that collect, store, process, and analyze distributed data to derive business insights.'}</p>

          <h3>{isKo ? '데이터 아키텍처 유형' : 'Data Architecture Types'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '유형' : 'Type'}</th>
                <th>{isKo ? '특징' : 'Characteristics'}</th>
                <th>{isKo ? '적합 용도' : 'Best For'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>{isKo ? '데이터 레이크' : 'Data Lake'}</strong></td>
                <td>{isKo ? '원시 데이터를 그대로 저장, 스키마 온 리드' : 'Store raw data as-is, schema-on-read'}</td>
                <td>{isKo ? 'AI/ML 학습, 탐색적 분석' : 'AI/ML training, exploratory analysis'}</td>
              </tr>
              <tr>
                <td><strong>{isKo ? '데이터 웨어하우스' : 'Data Warehouse'}</strong></td>
                <td>{isKo ? '구조화된 데이터, 스키마 온 라이트, 빠른 쿼리' : 'Structured data, schema-on-write, fast queries'}</td>
                <td>{isKo ? 'BI 리포팅, 정형 분석' : 'BI reporting, structured analysis'}</td>
              </tr>
              <tr>
                <td><strong>{isKo ? '데이터 레이크하우스' : 'Data Lakehouse'}</strong></td>
                <td>{isKo ? '레이크 + 웨어하우스 통합, ACID 지원' : 'Lake + Warehouse unified, ACID support'}</td>
                <td>{isKo ? '통합 분석 플랫폼 (최신 트렌드)' : 'Unified analytics platform (latest trend)'}</td>
              </tr>
            </tbody>
          </table>

          <h3>{isKo ? '데이터 파이프라인' : 'Data Pipeline'}</h3>
          <ul>
            <li><strong>ETL/ELT</strong>: {isKo ? '데이터 추출(Extract) → 변환(Transform) → 적재(Load) 자동화' : 'Automate Extract → Transform → Load processes'}</li>
            <li><strong>{isKo ? '스트리밍 처리' : 'Stream Processing'}</strong>: {isKo ? 'Apache Kafka, Flink를 활용한 실시간 데이터 처리' : 'Real-time data processing with Apache Kafka, Flink'}</li>
            <li><strong>{isKo ? '오케스트레이션' : 'Orchestration'}</strong>: {isKo ? 'Apache Airflow, Dagster로 파이프라인 스케줄링 및 모니터링' : 'Pipeline scheduling and monitoring with Apache Airflow, Dagster'}</li>
          </ul>

          <h3>{isKo ? '실시간 처리 아키텍처' : 'Real-time Processing Architecture'}</h3>
          <ul>
            <li><strong>Lambda Architecture</strong>: {isKo ? '배치 레이어 + 스피드 레이어로 실시간과 배치 분석 병행' : 'Batch layer + speed layer for parallel real-time and batch analytics'}</li>
            <li><strong>Kappa Architecture</strong>: {isKo ? '스트리밍 단일 레이어로 단순화 (최신 트렌드)' : 'Simplified single streaming layer (latest trend)'}</li>
          </ul>

          <TipBox type="important">
            <p>{isKo
              ? '데이터 플랫폼 구축의 80%는 기술이 아닌 거버넌스입니다. 데이터 소유권, 품질 기준, 접근 권한, 보존 정책을 먼저 정의하세요. "쓰레기가 들어가면 쓰레기가 나온다(GIGO)"를 항상 기억하세요.'
              : '80% of data platform building is governance, not technology. Define data ownership, quality standards, access rights, and retention policies first. Always remember "Garbage In, Garbage Out (GIGO)."'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'lowcode',
      icon: 'fa-puzzle-piece',
      labelKo: '로우코드/노코드',
      labelEn: 'Low-Code/No-Code',
      content: (
        <>
          <h2>{isKo ? '로우코드/노코드 플랫폼' : 'Low-Code/No-Code Platforms'}</h2>
          <p>{isKo
            ? '시민 개발자(Citizen Developer)가 코딩 없이도 업무 앱을 만들 수 있는 로우코드/노코드 플랫폼은 DX의 민주화를 실현합니다. IT 부서의 병목을 해소하고 현업의 디지털 역량을 강화합니다.'
            : 'Low-code/no-code platforms that enable citizen developers to create business apps without coding realize the democratization of DX. They relieve IT bottlenecks and strengthen business units\' digital capabilities.'}</p>

          <h3>{isKo ? '시민 개발자의 부상' : 'Rise of Citizen Developers'}</h3>
          <p>{isKo
            ? '2026년까지 기업 앱의 65%가 로우코드로 개발될 것으로 전망됩니다. 현업 부서 직원이 직접 자신의 업무 도구를 만드는 "시민 개발자" 시대가 열리고 있습니다.'
            : 'By 2026, 65% of enterprise apps are expected to be built with low-code. The era of "citizen developers" where business unit employees build their own work tools is opening.'}</p>

          <h3>{isKo ? '주요 플랫폼 비교' : 'Major Platform Comparison'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '플랫폼' : 'Platform'}</th>
                <th>{isKo ? '유형' : 'Type'}</th>
                <th>{isKo ? '강점' : 'Strength'}</th>
                <th>{isKo ? '적합 대상' : 'Best For'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Power Platform</strong></td>
                <td>{isKo ? '로우코드' : 'Low-code'}</td>
                <td>{isKo ? 'Microsoft 365 연동, Power Automate' : 'Microsoft 365 integration, Power Automate'}</td>
                <td>{isKo ? 'MS 생태계 기업' : 'MS ecosystem companies'}</td>
              </tr>
              <tr>
                <td><strong>Mendix</strong></td>
                <td>{isKo ? '로우코드' : 'Low-code'}</td>
                <td>{isKo ? '엔터프라이즈급, 확장성 높음' : 'Enterprise-grade, high scalability'}</td>
                <td>{isKo ? '대규모 기업 앱' : 'Large enterprise apps'}</td>
              </tr>
              <tr>
                <td><strong>OutSystems</strong></td>
                <td>{isKo ? '로우코드' : 'Low-code'}</td>
                <td>{isKo ? '풀스택 개발, CI/CD 내장' : 'Full-stack development, built-in CI/CD'}</td>
                <td>{isKo ? '복잡한 비즈니스 로직' : 'Complex business logic'}</td>
              </tr>
              <tr>
                <td><strong>Bubble</strong></td>
                <td>{isKo ? '노코드' : 'No-code'}</td>
                <td>{isKo ? '웹 앱 제작, 직관적 UI' : 'Web app creation, intuitive UI'}</td>
                <td>{isKo ? '스타트업, MVP 개발' : 'Startups, MVP development'}</td>
              </tr>
              <tr>
                <td><strong>Zapier/Make</strong></td>
                <td>{isKo ? '노코드 자동화' : 'No-code automation'}</td>
                <td>{isKo ? 'SaaS 간 연동 자동화' : 'SaaS integration automation'}</td>
                <td>{isKo ? '업무 자동화' : 'Workflow automation'}</td>
              </tr>
            </tbody>
          </table>

          <h3>{isKo ? '로우코드 활용 사례' : 'Low-Code Use Cases'}</h3>
          <ul>
            <li><strong>{isKo ? '내부 업무 앱' : 'Internal Business Apps'}</strong>: {isKo ? '승인 워크플로우, 재고 관리, 일정 관리' : 'Approval workflows, inventory management, scheduling'}</li>
            <li><strong>{isKo ? '고객 포털' : 'Customer Portal'}</strong>: {isKo ? '셀프서비스 포털, FAQ 챗봇, 티켓 시스템' : 'Self-service portal, FAQ chatbot, ticket system'}</li>
            <li><strong>{isKo ? '데이터 대시보드' : 'Data Dashboard'}</strong>: {isKo ? '부서별 KPI 시각화, 실시간 모니터링' : 'Department KPI visualization, real-time monitoring'}</li>
          </ul>

          <TipBox type="warning">
            <p>{isKo
              ? '로우코드의 함정: 거버넌스 없이 확산하면 "Shadow IT"가 됩니다. 보안 기준, 데이터 접근 정책, 앱 승인 프로세스를 반드시 수립하세요. IT 부서의 역할은 "개발자"에서 "가이드 및 거버너"로 변화합니다.'
              : 'Low-code trap: Without governance, it becomes "Shadow IT." Establish security standards, data access policies, and app approval processes. IT\'s role shifts from "developer" to "guide and governor."'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'iot',
      icon: 'fa-microchip',
      labelKo: 'IoT & 엣지 컴퓨팅',
      labelEn: 'IoT & Edge',
      content: (
        <>
          <h2>{isKo ? 'IoT & 엣지 컴퓨팅' : 'IoT & Edge Computing'}</h2>
          <p>{isKo
            ? '사물인터넷(IoT)은 물리 세계와 디지털 세계를 연결하는 기술입니다. 엣지 컴퓨팅과 결합하여 실시간 데이터 처리와 지능형 자동화를 실현합니다.'
            : 'IoT connects the physical and digital worlds. Combined with edge computing, it enables real-time data processing and intelligent automation.'}</p>

          <h3>{isKo ? '산업용 IoT (IIoT)' : 'Industrial IoT (IIoT)'}</h3>
          <ul>
            <li><strong>{isKo ? '예지보전 (Predictive Maintenance)' : 'Predictive Maintenance'}</strong>: {isKo ? '센서 데이터 + AI로 설비 고장을 사전 예측, 계획되지 않은 다운타임 70% 감소' : 'Predict equipment failure with sensor data + AI, 70% reduction in unplanned downtime'}</li>
            <li><strong>{isKo ? '품질 관리' : 'Quality Control'}</strong>: {isKo ? '비전 AI + IoT로 실시간 불량 검출, 불량률 90% 이상 감소' : 'Real-time defect detection with vision AI + IoT, 90%+ defect rate reduction'}</li>
            <li><strong>{isKo ? '에너지 최적화' : 'Energy Optimization'}</strong>: {isKo ? '에너지 사용 패턴 분석으로 15-30% 에너지 절감' : '15-30% energy savings through usage pattern analysis'}</li>
          </ul>

          <h3>{isKo ? '스마트팩토리 구현 단계' : 'Smart Factory Implementation Stages'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '단계' : 'Stage'}</th>
                <th>{isKo ? '수준' : 'Level'}</th>
                <th>{isKo ? '핵심 기술' : 'Core Technology'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>{isKo ? '모니터링' : 'Monitoring'}</td>
                <td>{isKo ? 'IoT 센서 부착, 데이터 수집' : 'IoT sensor attachment, data collection'}</td>
              </tr>
              <tr>
                <td>2</td>
                <td>{isKo ? '분석' : 'Analysis'}</td>
                <td>{isKo ? '데이터 시각화, 패턴 발견' : 'Data visualization, pattern discovery'}</td>
              </tr>
              <tr>
                <td>3</td>
                <td>{isKo ? '예측' : 'Prediction'}</td>
                <td>{isKo ? 'AI/ML 기반 예측 모델 적용' : 'AI/ML prediction model application'}</td>
              </tr>
              <tr>
                <td>4</td>
                <td>{isKo ? '자율 최적화' : 'Autonomous Optimization'}</td>
                <td>{isKo ? 'AI가 자동으로 설비 파라미터 조정' : 'AI automatically adjusts equipment parameters'}</td>
              </tr>
            </tbody>
          </table>

          <h3>{isKo ? '엣지 AI' : 'Edge AI'}</h3>
          <p>{isKo
            ? '데이터를 클라우드로 보내지 않고 현장(엣지)에서 AI 추론을 수행합니다. 초저지연(1ms 이하), 대역폭 절감, 데이터 프라이버시를 동시에 달성합니다.'
            : 'Perform AI inference at the edge (on-site) without sending data to the cloud. Achieve ultra-low latency (<1ms), bandwidth savings, and data privacy simultaneously.'}</p>
          <ul>
            <li><strong>{isKo ? '자율주행' : 'Autonomous Driving'}</strong>: {isKo ? '차량 내 AI 칩으로 실시간 판단 (클라우드 지연 불가)' : 'Real-time decisions with in-vehicle AI chip (cloud latency unacceptable)'}</li>
            <li><strong>{isKo ? '스마트 카메라' : 'Smart Camera'}</strong>: {isKo ? '현장에서 영상 분석, 이상 탐지 시에만 클라우드 알림' : 'On-site video analysis, cloud notification only on anomaly detection'}</li>
            <li><strong>{isKo ? '산업 로봇' : 'Industrial Robots'}</strong>: {isKo ? '엣지 서버에서 로봇 동작 제어, 밀리초 단위 반응' : 'Robot control from edge server, millisecond-level response'}</li>
          </ul>

          <TipBox type="tip">
            <p>{isKo
              ? 'IoT 프로젝트의 75%가 PoC에서 상용화로 넘어가지 못합니다. 원인: 센서 데이터 품질 미확보, 네트워크 인프라 부족, 명확한 비즈니스 케이스 부재. PoC 전에 "이 데이터로 무엇을 할 것인가?"를 먼저 정의하세요.'
              : '75% of IoT projects fail to move from PoC to production. Causes: poor sensor data quality, insufficient network infrastructure, lack of clear business case. Before PoC, define "What will we do with this data?"'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'blockchain',
      icon: 'fa-link',
      labelKo: '블록체인 & Web3',
      labelEn: 'Blockchain & Web3',
      content: (
        <>
          <h2>{isKo ? '블록체인 & Web3' : 'Blockchain & Web3'}</h2>
          <p>{isKo
            ? '블록체인은 분산 원장 기술로 투명성, 불변성, 탈중앙화를 제공합니다. 암호화폐를 넘어 공급망, 디지털 자산, 신원 인증 등 기업 DX에 실질적으로 활용되고 있습니다.'
            : 'Blockchain is a distributed ledger technology providing transparency, immutability, and decentralization. Beyond cryptocurrency, it is being practically applied in enterprise DX for supply chain, digital assets, and identity verification.'}</p>

          <h3>{isKo ? '기업용 블록체인 적용 분야' : 'Enterprise Blockchain Applications'}</h3>
          <ul>
            <li>
              <strong>{isKo ? '공급망 관리 (Supply Chain)' : 'Supply Chain Management'}</strong>
              <p>{isKo ? '원산지 추적, 위변조 방지, 물류 투명성 확보. 월마트는 식품 추적 시간을 7일에서 2.2초로 단축했습니다.' : 'Origin tracking, anti-counterfeiting, logistics transparency. Walmart reduced food tracing time from 7 days to 2.2 seconds.'}</p>
            </li>
            <li>
              <strong>{isKo ? '디지털 자산 (Digital Assets)' : 'Digital Assets'}</strong>
              <p>{isKo ? 'NFT 기반 디지털 인증서, 부동산 토큰화, 탄소배출권 거래. 실물 자산의 디지털 유동화가 새로운 시장을 만들고 있습니다.' : 'NFT-based digital certificates, real estate tokenization, carbon credit trading. Digital liquidity of physical assets is creating new markets.'}</p>
            </li>
            <li>
              <strong>{isKo ? '분산 신원 증명 (DID)' : 'Decentralized Identity (DID)'}</strong>
              <p>{isKo ? '중앙 기관 없이 개인이 자신의 디지털 신원을 소유하고 관리합니다. 개인정보 주권 시대의 핵심 기술입니다.' : 'Individuals own and manage their digital identity without a central authority. A core technology of the data sovereignty era.'}</p>
            </li>
          </ul>

          <h3>{isKo ? '기업 도입 시 고려사항' : 'Enterprise Adoption Considerations'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '항목' : 'Item'}</th>
                <th>{isKo ? '퍼블릭 블록체인' : 'Public Blockchain'}</th>
                <th>{isKo ? '프라이빗/컨소시엄' : 'Private/Consortium'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{isKo ? '접근성' : 'Access'}</td>
                <td>{isKo ? '누구나 참여 가능' : 'Open to anyone'}</td>
                <td>{isKo ? '허가된 참여자만' : 'Permissioned participants only'}</td>
              </tr>
              <tr>
                <td>{isKo ? '처리 속도' : 'Speed'}</td>
                <td>{isKo ? '느림 (수십 TPS)' : 'Slow (tens of TPS)'}</td>
                <td>{isKo ? '빠름 (수천 TPS)' : 'Fast (thousands of TPS)'}</td>
              </tr>
              <tr>
                <td>{isKo ? '적합 용도' : 'Best For'}</td>
                <td>{isKo ? '토큰 이코노미, DeFi' : 'Token economy, DeFi'}</td>
                <td>{isKo ? '기업 간 데이터 공유, 공급망' : 'B2B data sharing, supply chain'}</td>
              </tr>
            </tbody>
          </table>

          <TipBox type="important">
            <p>{isKo
              ? '블록체인이 만능은 아닙니다. "중앙 집중형 DB로 해결 가능한가?"를 먼저 묻고, 다수 이해관계자 간 신뢰가 필요한 경우에만 블록체인을 적용하세요. 기술이 아닌 비즈니스 문제에서 출발해야 합니다.'
              : 'Blockchain is not a silver bullet. First ask "Can a centralized DB solve this?" Apply blockchain only when trust among multiple stakeholders is needed. Start from the business problem, not the technology.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'security',
      icon: 'fa-shield-halved',
      labelKo: '사이버 보안',
      labelEn: 'Cybersecurity',
      content: (
        <>
          <h2>{isKo ? '사이버 보안' : 'Cybersecurity'}</h2>
          <p>{isKo
            ? '디지털 전환이 진행될수록 공격 표면(Attack Surface)이 확대됩니다. 클라우드, IoT, 원격근무 환경에서의 보안 전략은 기존의 경계 기반 보안과 근본적으로 달라야 합니다.'
            : 'As digital transformation progresses, the attack surface expands. Security strategies for cloud, IoT, and remote work environments must be fundamentally different from traditional perimeter-based security.'}</p>

          <h3>{isKo ? '제로 트러스트 아키텍처 (Zero Trust)' : 'Zero Trust Architecture'}</h3>
          <p>{isKo
            ? '"절대 신뢰하지 말고, 항상 검증하라(Never Trust, Always Verify)." 네트워크 위치와 관계없이 모든 접근을 검증합니다.'
            : '"Never Trust, Always Verify." Verify every access regardless of network location.'}</p>
          <ul>
            <li><strong>{isKo ? '원칙 1: 최소 권한' : 'Principle 1: Least Privilege'}</strong>: {isKo ? '필요한 최소한의 권한만 부여' : 'Grant only minimum necessary permissions'}</li>
            <li><strong>{isKo ? '원칙 2: 마이크로 세그멘테이션' : 'Principle 2: Micro-segmentation'}</strong>: {isKo ? '네트워크를 세분화하여 측면 이동 차단' : 'Segment network to prevent lateral movement'}</li>
            <li><strong>{isKo ? '원칙 3: 지속적 검증' : 'Principle 3: Continuous Verification'}</strong>: {isKo ? '접속 후에도 지속적으로 행위를 모니터링' : 'Continuously monitor behavior even after access'}</li>
            <li><strong>{isKo ? '원칙 4: 멀티팩터 인증' : 'Principle 4: Multi-Factor Auth'}</strong>: {isKo ? '모든 접근에 MFA 적용' : 'Apply MFA to all access'}</li>
          </ul>

          <h3>{isKo ? '클라우드 보안 (CSPM/CWPP)' : 'Cloud Security (CSPM/CWPP)'}</h3>
          <ul>
            <li><strong>CSPM</strong> (Cloud Security Posture Management): {isKo ? '클라우드 설정 오류 탐지, 컴플라이언스 자동 점검' : 'Cloud misconfiguration detection, automated compliance checks'}</li>
            <li><strong>CWPP</strong> (Cloud Workload Protection Platform): {isKo ? '컨테이너, 서버리스 워크로드 실시간 보호' : 'Real-time protection of container and serverless workloads'}</li>
            <li><strong>CASB</strong> (Cloud Access Security Broker): {isKo ? 'SaaS 사용 모니터링, 데이터 유출 방지' : 'SaaS usage monitoring, data loss prevention'}</li>
          </ul>

          <h3>{isKo ? 'AI 기반 보안' : 'AI-Powered Security'}</h3>
          <ul>
            <li><strong>{isKo ? '위협 탐지' : 'Threat Detection'}</strong>: {isKo ? '이상 행위 패턴을 AI가 실시간 탐지, 오탐률 90% 감소' : 'AI detects anomalous behavior patterns in real-time, 90% false positive reduction'}</li>
            <li><strong>{isKo ? '자동 대응' : 'Automated Response'}</strong>: {isKo ? 'SOAR(Security Orchestration) 플랫폼으로 위협 자동 차단' : 'Automated threat blocking with SOAR platform'}</li>
            <li><strong>{isKo ? '취약점 관리' : 'Vulnerability Management'}</strong>: {isKo ? 'AI가 코드 취약점을 자동 스캔하고 패치 우선순위 제안' : 'AI auto-scans code vulnerabilities and suggests patch priorities'}</li>
          </ul>

          <TipBox type="warning">
            <p>{isKo
              ? '보안은 DX의 "마지막 단계"가 아닌 "첫 번째 설계 원칙"이어야 합니다(Security by Design). 사고 후 대응 비용은 사전 예방 비용의 10배 이상입니다. 특히 클라우드 설정 오류가 데이터 유출의 1위 원인(68%)임을 명심하세요.'
              : 'Security must be the "first design principle," not the "last step" of DX (Security by Design). Post-incident response costs are 10x+ prevention costs. Remember that cloud misconfiguration is the #1 cause of data breaches (68%).'}</p>
          </TipBox>
        </>
      ),
    },
  ];

  return (
    <GuidePage
      titleKo="DX 핵심 기술"
      titleEn="DX Core Technologies"
      subtitleKo="디지털 전환을 이끄는 핵심 기술 스택을 학습합니다."
      subtitleEn="Learn the core technology stack driving digital transformation."
      icon="fa-layer-group"
      iconColor="#7C3AED"
      path="/dx-tech"
      sections={sections}
    />
  );
}
