import GuidePage from '../../components/GuidePage';
import TipBox from '../../components/TipBox';
import { useLanguage } from '../../contexts/LanguageContext';
import type { ReactElement } from 'react';
import type { GuideSection } from '../../components/GuidePage';

export default function DXStrategy(): ReactElement {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  const sections: GuideSection[] = [
    {
      id: 'formulation',
      icon: 'fa-compass',
      labelKo: 'DX 전략 수립',
      labelEn: 'Strategy Formulation',
      content: (
        <>
          <h2>{isKo ? 'DX 전략 수립 5단계' : '5 Steps of DX Strategy Formulation'}</h2>
          <p>{isKo
            ? '성공적인 디지털 전환은 체계적인 전략 수립에서 시작됩니다. 비전 설정부터 로드맵 수립까지 5단계 프로세스를 통해 실행 가능한 DX 전략을 만들어야 합니다.'
            : 'Successful digital transformation starts with systematic strategy formulation. Create an executable DX strategy through a 5-step process from vision setting to roadmap development.'}</p>

          <h3>{isKo ? '5단계 전략 수립 프로세스' : '5-Step Strategy Process'}</h3>
          <ol>
            <li>
              <strong>{isKo ? '비전 설정 (Vision Setting)' : 'Vision Setting'}</strong>
              <p>{isKo ? '"3년 후 우리 회사의 디지털 모습은?" — 구체적이고 측정 가능한 디지털 비전을 수립합니다. 고객 가치와 연결된 비전이어야 합니다.' : '"What does our company look like digitally in 3 years?" — Establish a specific, measurable digital vision connected to customer value.'}</p>
            </li>
            <li>
              <strong>{isKo ? '현상 분석 (As-Is Analysis)' : 'As-Is Analysis'}</strong>
              <p>{isKo ? '디지털 성숙도 진단, 고객 여정 분석, 경쟁사 벤치마킹을 통해 현재 위치를 정확히 파악합니다.' : 'Accurately identify current position through digital maturity assessment, customer journey analysis, and competitor benchmarking.'}</p>
            </li>
            <li>
              <strong>{isKo ? '기회 도출 (Opportunity Discovery)' : 'Opportunity Discovery'}</strong>
              <p>{isKo ? '밸류체인 디지털화 기회, 고객 페인포인트, 신규 디지털 비즈니스 모델을 발굴합니다.' : 'Discover value chain digitization opportunities, customer pain points, and new digital business models.'}</p>
            </li>
            <li>
              <strong>{isKo ? '이니셔티브 정의 (Initiative Definition)' : 'Initiative Definition'}</strong>
              <p>{isKo ? '도출된 기회를 구체적인 프로젝트(이니셔티브)로 정의하고, 영향도/실행 가능성 매트릭스로 우선순위를 결정합니다.' : 'Define discovered opportunities as concrete projects and prioritize using an impact/feasibility matrix.'}</p>
            </li>
            <li>
              <strong>{isKo ? '로드맵 수립 (Roadmap Development)' : 'Roadmap Development'}</strong>
              <p>{isKo ? '단기(Quick Win, 3개월), 중기(핵심 과제, 6-12개월), 장기(혁신, 1-3년)로 구분하여 실행 로드맵을 작성합니다.' : 'Create an execution roadmap divided into short-term (Quick Win, 3 months), mid-term (core tasks, 6-12 months), and long-term (innovation, 1-3 years).'}</p>
            </li>
          </ol>

          <TipBox type="tip">
            <p>{isKo
              ? '전략 수립 시 "보일 플레이트" 전략을 경계하세요. "AI 도입", "클라우드 전환" 같은 범용 전략이 아니라, 자사만의 차별화된 디지털 가치를 정의해야 합니다.'
              : 'Beware of "boilerplate" strategies. Define your own differentiated digital value, not generic strategies like "adopt AI" or "migrate to cloud."'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'change',
      icon: 'fa-people-arrows',
      labelKo: '변화 관리',
      labelEn: 'Change Management',
      content: (
        <>
          <h2>{isKo ? '변화 관리 (Change Management)' : 'Change Management'}</h2>
          <p>{isKo
            ? 'DX 실패의 70%는 기술이 아닌 "사람"의 문제입니다. 체계적인 변화 관리 없이는 아무리 좋은 기술도 조직에 정착하지 못합니다.'
            : '70% of DX failures are "people" problems, not technology issues. Without systematic change management, no technology can take root in an organization.'}</p>

          <h3>{isKo ? 'Kotter의 8단계 변화 모델' : 'Kotter\'s 8-Step Change Model'}</h3>
          <ol>
            <li><strong>{isKo ? '위기감 조성' : 'Create Urgency'}</strong>: {isKo ? '"변하지 않으면 3년 내 도태된다" — 데이터로 위기 증명' : '"Without change, we\'ll be obsolete in 3 years" — prove crisis with data'}</li>
            <li><strong>{isKo ? '선도 연합 구축' : 'Build Guiding Coalition'}</strong>: {isKo ? '부서별 Change Champion을 임명하여 변화 추진 그룹 형성' : 'Appoint Change Champions per department to form change coalition'}</li>
            <li><strong>{isKo ? '비전 수립' : 'Form Strategic Vision'}</strong>: {isKo ? '명확하고 공감 가능한 디지털 비전 제시' : 'Present a clear, relatable digital vision'}</li>
            <li><strong>{isKo ? '비전 전파' : 'Communicate Vision'}</strong>: {isKo ? '7회 이상 반복 소통, 다양한 채널 활용' : 'Communicate 7+ times through various channels'}</li>
            <li><strong>{isKo ? '장벽 제거' : 'Remove Barriers'}</strong>: {isKo ? '저항 세력의 구체적 우려를 파악하고 해소' : 'Identify and address specific concerns of resistors'}</li>
            <li><strong>{isKo ? '단기 성과 창출' : 'Generate Quick Wins'}</strong>: {isKo ? '3개월 내 가시적 성과를 만들어 모멘텀 확보' : 'Create visible results within 3 months to build momentum'}</li>
            <li><strong>{isKo ? '성과 확대' : 'Sustain Acceleration'}</strong>: {isKo ? 'Quick Win을 기반으로 더 큰 과제에 도전' : 'Build on Quick Wins to tackle bigger challenges'}</li>
            <li><strong>{isKo ? '문화 정착' : 'Anchor in Culture'}</strong>: {isKo ? '새로운 업무 방식을 제도화하고 인센티브와 연결' : 'Institutionalize new work methods and link to incentives'}</li>
          </ol>

          <h3>{isKo ? 'ADKAR 모델' : 'ADKAR Model'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '단계' : 'Phase'}</th>
                <th>{isKo ? '의미' : 'Meaning'}</th>
                <th>{isKo ? '실행 방법' : 'Execution Method'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>A</strong>wareness</td>
                <td>{isKo ? '변화 필요성 인식' : 'Awareness of need for change'}</td>
                <td>{isKo ? '경쟁 환경 데이터 공유, 위기 시나리오' : 'Share competitive data, crisis scenarios'}</td>
              </tr>
              <tr>
                <td><strong>D</strong>esire</td>
                <td>{isKo ? '참여 의지' : 'Desire to participate'}</td>
                <td>{isKo ? '"나에게 어떤 이득이 있는가" 명확히 제시' : 'Clearly show "what\'s in it for me"'}</td>
              </tr>
              <tr>
                <td><strong>K</strong>nowledge</td>
                <td>{isKo ? '방법 지식' : 'Knowledge of how to change'}</td>
                <td>{isKo ? '교육, 멘토링, 핸즈온 워크숍' : 'Training, mentoring, hands-on workshops'}</td>
              </tr>
              <tr>
                <td><strong>A</strong>bility</td>
                <td>{isKo ? '실행 능력' : 'Ability to implement'}</td>
                <td>{isKo ? '실습 환경, 시행착오 허용, 코칭' : 'Practice environments, allow trial-and-error, coaching'}</td>
              </tr>
              <tr>
                <td><strong>R</strong>einforcement</td>
                <td>{isKo ? '지속 강화' : 'Reinforcement to sustain'}</td>
                <td>{isKo ? '성과 인정, 보상 체계, 피드백 루프' : 'Recognition, reward systems, feedback loops'}</td>
              </tr>
            </tbody>
          </table>

          <TipBox type="warning">
            <p>{isKo
              ? '변화 관리를 "한 번의 교육"으로 끝내면 안 됩니다. 최소 6개월 이상의 지속적 커뮤니케이션, 코칭, 피드백이 필요합니다. 변화는 이벤트가 아닌 프로세스입니다.'
              : 'Don\'t end change management with "one training session." It requires at least 6 months of continuous communication, coaching, and feedback. Change is a process, not an event.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'culture',
      icon: 'fa-seedling',
      labelKo: '디지털 문화 조성',
      labelEn: 'Digital Culture',
      content: (
        <>
          <h2>{isKo ? '디지털 문화 조성' : 'Building Digital Culture'}</h2>
          <p>{isKo
            ? '디지털 문화는 DX의 토양입니다. 아무리 좋은 기술과 전략이 있어도 문화가 뒷받침되지 않으면 지속 가능한 전환이 불가능합니다.'
            : 'Digital culture is the soil of DX. No matter how good the technology and strategy, sustainable transformation is impossible without cultural support.'}</p>

          <h3>{isKo ? '디지털 문화의 5대 요소' : '5 Elements of Digital Culture'}</h3>
          <ul>
            <li>
              <strong>{isKo ? '실험 문화 (Experimentation)' : 'Experimentation Culture'}</strong>
              <p>{isKo ? '실패를 학습으로 받아들이는 심리적 안전감. "빠르게 실패하고 빠르게 배운다(Fail Fast, Learn Fast)"를 조직 원칙으로 삼습니다.' : 'Psychological safety that embraces failure as learning. "Fail Fast, Learn Fast" as an organizational principle.'}</p>
            </li>
            <li>
              <strong>{isKo ? '데이터 문화 (Data-Driven)' : 'Data-Driven Culture'}</strong>
              <p>{isKo ? '직감이 아닌 데이터로 의사결정합니다. 모든 회의에서 "근거 데이터는?"이라고 묻는 습관을 만듭니다.' : 'Make decisions with data, not intuition. Build a habit of asking "What\'s the evidence?" in every meeting.'}</p>
            </li>
            <li>
              <strong>{isKo ? '협업 문화 (Collaboration)' : 'Collaboration Culture'}</strong>
              <p>{isKo ? '부서 간 사일로를 허물고 크로스 펑셔널 팀을 운영합니다. 디지털 협업 도구(Slack, Teams, Notion)를 적극 활용합니다.' : 'Break departmental silos and operate cross-functional teams. Actively use digital collaboration tools.'}</p>
            </li>
            <li>
              <strong>{isKo ? '고객 중심 (Customer-Centric)' : 'Customer-Centric Culture'}</strong>
              <p>{isKo ? '내부 관점이 아닌 고객 관점에서 모든 것을 설계합니다. 정기적으로 고객의 목소리(VoC)를 수집하고 반영합니다.' : 'Design everything from customer perspective, not internal view. Regularly collect and reflect Voice of Customer (VoC).'}</p>
            </li>
            <li>
              <strong>{isKo ? '학습 문화 (Continuous Learning)' : 'Continuous Learning Culture'}</strong>
              <p>{isKo ? '기술 변화 속도에 맞춰 지속적으로 학습합니다. 학습 시간을 업무 시간으로 인정하고, 사내 학습 커뮤니티를 운영합니다.' : 'Continuously learn to keep pace with technology change. Recognize learning time as work time and run internal learning communities.'}</p>
            </li>
          </ul>

          <TipBox type="example">
            <p>{isKo
              ? '구글의 "20% 프로젝트", 아마존의 "Two-Pizza Team", 넷플릭스의 "Freedom & Responsibility" — 디지털 선도 기업들은 문화를 제도화합니다. 문화는 선언이 아닌 시스템으로 만들어야 합니다.'
              : 'Google\'s "20% Project," Amazon\'s "Two-Pizza Team," Netflix\'s "Freedom & Responsibility" — digital leaders institutionalize culture. Culture must be built as a system, not a declaration.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'agile',
      icon: 'fa-rotate',
      labelKo: '애자일 조직 전환',
      labelEn: 'Agile Organization',
      content: (
        <>
          <h2>{isKo ? '애자일 조직 전환' : 'Agile Organization Transformation'}</h2>
          <p>{isKo
            ? '디지털 시대에는 빠른 시장 변화에 대응하기 위해 조직 구조 자체를 애자일하게 전환해야 합니다. 기존 계층형 조직에서 자율적 팀 기반 조직으로의 변화가 필요합니다.'
            : 'In the digital age, organizations must become agile to respond to rapid market changes. A shift from hierarchical to autonomous team-based structures is necessary.'}</p>

          <h3>{isKo ? '애자일 핵심 방법론' : 'Core Agile Methodologies'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '방법론' : 'Methodology'}</th>
                <th>{isKo ? '핵심 개념' : 'Core Concept'}</th>
                <th>{isKo ? '적용 범위' : 'Application Scope'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>{isKo ? '스프린트' : 'Sprint'}</strong></td>
                <td>{isKo ? '2-4주 단위의 반복 개발 주기' : '2-4 week iterative development cycles'}</td>
                <td>{isKo ? '제품 개발팀' : 'Product development teams'}</td>
              </tr>
              <tr>
                <td><strong>{isKo ? '스크럼' : 'Scrum'}</strong></td>
                <td>{isKo ? '일일 스탠드업, 스프린트 리뷰, 회고' : 'Daily standup, sprint review, retrospective'}</td>
                <td>{isKo ? '5-9인 팀' : '5-9 person teams'}</td>
              </tr>
              <tr>
                <td><strong>{isKo ? '스쿼드' : 'Squad'}</strong></td>
                <td>{isKo ? '자율적 미니 스타트업 형태의 팀' : 'Autonomous mini-startup style team'}</td>
                <td>{isKo ? '기능 단위 (Spotify 모델)' : 'Feature unit (Spotify model)'}</td>
              </tr>
              <tr>
                <td><strong>{isKo ? '트라이브' : 'Tribe'}</strong></td>
                <td>{isKo ? '관련 스쿼드의 집합 (최대 150명)' : 'Collection of related squads (max 150)'}</td>
                <td>{isKo ? '사업 도메인 단위' : 'Business domain level'}</td>
              </tr>
            </tbody>
          </table>

          <h3>{isKo ? '애자일 전환 단계' : 'Agile Transformation Phases'}</h3>
          <ol>
            <li><strong>{isKo ? '파일럿 (3개월)' : 'Pilot (3 months)'}</strong>: {isKo ? '1-2개 팀에서 스크럼 시범 적용, 코치 배치' : 'Trial Scrum in 1-2 teams, deploy coaches'}</li>
            <li><strong>{isKo ? '확산 (6개월)' : 'Expansion (6 months)'}</strong>: {isKo ? '성공 팀의 방법론을 5-10개 팀으로 확대' : 'Expand successful team methodologies to 5-10 teams'}</li>
            <li><strong>{isKo ? '조직 재설계 (12개월)' : 'Org Redesign (12 months)'}</strong>: {isKo ? '스쿼드/트라이브 기반으로 조직 구조 변경' : 'Restructure organization based on squads/tribes'}</li>
            <li><strong>{isKo ? '문화 내재화 (지속)' : 'Culture Internalization (ongoing)'}</strong>: {isKo ? '애자일이 "방법론"이 아닌 "일하는 방식"이 되도록 정착' : 'Settle agile as "way of working" not just "methodology"'}</li>
          </ol>

          <TipBox type="important">
            <p>{isKo
              ? '애자일 전환의 가장 큰 실패 요인은 "형식만 도입"하는 것입니다. 스크럼 의식(ceremony)만 따라하고 마인드셋을 바꾸지 않으면 "워터폴에 스크럼 이름만 붙인 것"이 됩니다. 자율성, 투명성, 지속 개선이 핵심입니다.'
              : 'The biggest failure factor in agile transformation is "adopting only the form." Following Scrum ceremonies without changing mindset results in "waterfall with Scrum labels." Autonomy, transparency, and continuous improvement are key.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'kpi',
      icon: 'fa-gauge-high',
      labelKo: 'DX KPI 설계',
      labelEn: 'DX KPI Design',
      content: (
        <>
          <h2>{isKo ? 'DX KPI 설계와 성과 측정' : 'DX KPI Design & Performance Measurement'}</h2>
          <p>{isKo
            ? '"측정할 수 없으면 관리할 수 없다." DX의 성과를 정량적으로 측정하기 위한 KPI 체계를 설계합니다. 선행 지표(Leading)와 후행 지표(Lagging)를 균형 있게 배치해야 합니다.'
            : '"If you can\'t measure it, you can\'t manage it." Design a KPI system for quantitatively measuring DX outcomes. Balance leading and lagging indicators.'}</p>

          <h3>{isKo ? '핵심 DX KPI' : 'Core DX KPIs'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? 'KPI 영역' : 'KPI Area'}</th>
                <th>{isKo ? '지표' : 'Metric'}</th>
                <th>{isKo ? '목표 예시' : 'Target Example'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>{isKo ? '고객 경험' : 'Customer Experience'}</strong></td>
                <td>NPS (Net Promoter Score)</td>
                <td>{isKo ? 'NPS 40 → 60 (2년 내)' : 'NPS 40 → 60 (within 2 years)'}</td>
              </tr>
              <tr>
                <td><strong>{isKo ? '디지털 채널' : 'Digital Channel'}</strong></td>
                <td>{isKo ? '디지털 채널 거래 비율' : 'Digital channel transaction ratio'}</td>
                <td>{isKo ? '30% → 70% (3년 내)' : '30% → 70% (within 3 years)'}</td>
              </tr>
              <tr>
                <td><strong>{isKo ? '운영 효율' : 'Operational Efficiency'}</strong></td>
                <td>{isKo ? '프로세스 자동화율' : 'Process automation rate'}</td>
                <td>{isKo ? '핵심 프로세스 80% 자동화' : '80% automation of core processes'}</td>
              </tr>
              <tr>
                <td><strong>{isKo ? '데이터 활용' : 'Data Utilization'}</strong></td>
                <td>{isKo ? '데이터 기반 의사결정 비율' : 'Data-driven decision ratio'}</td>
                <td>{isKo ? '주요 의사결정의 90% 데이터 기반' : '90% of major decisions data-driven'}</td>
              </tr>
              <tr>
                <td><strong>{isKo ? '혁신 매출' : 'Innovation Revenue'}</strong></td>
                <td>{isKo ? '신규 디지털 매출 비중' : 'New digital revenue share'}</td>
                <td>{isKo ? '전체 매출의 20% 이상' : '20%+ of total revenue'}</td>
              </tr>
            </tbody>
          </table>

          <h3>{isKo ? 'KPI 설계 원칙' : 'KPI Design Principles'}</h3>
          <ul>
            <li><strong>SMART</strong>: {isKo ? 'Specific, Measurable, Achievable, Relevant, Time-bound' : 'Specific, Measurable, Achievable, Relevant, Time-bound'}</li>
            <li><strong>{isKo ? '선행+후행 균형' : 'Leading + Lagging Balance'}</strong>: {isKo ? '결과 지표(매출)뿐 아니라 과정 지표(실험 횟수)도 측정' : 'Measure process metrics (experiments) not just outcome metrics (revenue)'}</li>
            <li><strong>{isKo ? '부서별 연계' : 'Department Alignment'}</strong>: {isKo ? '전사 KPI를 부서/팀 수준으로 분해하여 책임 명확화' : 'Decompose company-wide KPIs to department/team level for clear accountability'}</li>
            <li><strong>{isKo ? '실시간 대시보드' : 'Real-time Dashboard'}</strong>: {isKo ? 'KPI를 실시간으로 시각화하여 빠른 의사결정 지원' : 'Visualize KPIs in real-time to support fast decision-making'}</li>
          </ul>

          <TipBox type="tip">
            <p>{isKo
              ? 'DX 초기에는 "디지털 활동 지표"(교육 이수율, 도구 활용률)에서 시작하여 점차 "비즈니스 성과 지표"(매출, NPS)로 전환하세요. 처음부터 ROI를 요구하면 혁신이 위축됩니다.'
              : 'In early DX, start with "digital activity metrics" (training completion, tool usage) and gradually shift to "business outcome metrics" (revenue, NPS). Demanding ROI from the start stifles innovation.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'legacy',
      icon: 'fa-server',
      labelKo: '레거시 시스템 전환',
      labelEn: 'Legacy Migration',
      content: (
        <>
          <h2>{isKo ? '레거시 시스템 전환 전략' : 'Legacy System Migration Strategy'}</h2>
          <p>{isKo
            ? '대부분의 기업이 직면하는 가장 큰 기술 부채는 레거시 시스템입니다. 20-30년 된 메인프레임, 스파게티 코드, 문서 없는 시스템을 어떻게 현대화할 것인지가 DX의 핵심 과제입니다.'
            : 'The biggest technical debt most enterprises face is legacy systems. How to modernize 20-30 year old mainframes, spaghetti code, and undocumented systems is a core DX challenge.'}</p>

          <h3>{isKo ? '6R 마이그레이션 전략' : '6R Migration Strategy'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '전략' : 'Strategy'}</th>
                <th>{isKo ? '설명' : 'Description'}</th>
                <th>{isKo ? '적용 시기' : 'When to Apply'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Rehost</strong></td>
                <td>{isKo ? '그대로 클라우드로 이전 (Lift & Shift)' : 'Move as-is to cloud (Lift & Shift)'}</td>
                <td>{isKo ? '빠른 이전이 필요할 때' : 'When quick migration is needed'}</td>
              </tr>
              <tr>
                <td><strong>Replatform</strong></td>
                <td>{isKo ? '일부 최적화 후 이전' : 'Migrate with some optimization'}</td>
                <td>{isKo ? '클라우드 이점 일부 활용' : 'Leverage some cloud benefits'}</td>
              </tr>
              <tr>
                <td><strong>Refactor</strong></td>
                <td>{isKo ? '클라우드 네이티브로 재설계' : 'Redesign as cloud-native'}</td>
                <td>{isKo ? '장기적 유연성이 필요할 때' : 'When long-term flexibility is needed'}</td>
              </tr>
              <tr>
                <td><strong>Repurchase</strong></td>
                <td>{isKo ? 'SaaS 제품으로 대체' : 'Replace with SaaS product'}</td>
                <td>{isKo ? '범용 기능(HR, CRM 등)' : 'Generic functions (HR, CRM, etc.)'}</td>
              </tr>
              <tr>
                <td><strong>Retire</strong></td>
                <td>{isKo ? '폐기 (더 이상 필요 없는 시스템)' : 'Decommission (no longer needed)'}</td>
                <td>{isKo ? '사용률 5% 미만 시스템' : 'Systems with <5% usage'}</td>
              </tr>
              <tr>
                <td><strong>Retain</strong></td>
                <td>{isKo ? '현행 유지 (당분간 변경 불가)' : 'Keep as-is (cannot change for now)'}</td>
                <td>{isKo ? '규제/계약 제약 시스템' : 'Regulatory/contractual systems'}</td>
              </tr>
            </tbody>
          </table>

          <h3>{isKo ? 'Strangler Fig Pattern' : 'Strangler Fig Pattern'}</h3>
          <p>{isKo
            ? '레거시 시스템을 한 번에 교체하지 않고, 새로운 기능부터 점진적으로 대체하는 방법입니다. 리스크를 최소화하면서 점차 레거시를 "교살"합니다.'
            : 'Instead of replacing the legacy system all at once, gradually replace starting with new features. Minimize risk while progressively "strangling" the legacy.'}</p>
          <ol>
            <li><strong>{isKo ? 'Facade 구축' : 'Build Facade'}</strong>: {isKo ? '레거시 앞에 API Gateway를 배치하여 트래픽 라우팅' : 'Place API Gateway in front of legacy for traffic routing'}</li>
            <li><strong>{isKo ? '신규 기능 분리' : 'Separate New Features'}</strong>: {isKo ? '새 기능은 마이크로서비스로 개발, 레거시와 공존' : 'Develop new features as microservices, coexisting with legacy'}</li>
            <li><strong>{isKo ? '점진적 이관' : 'Gradual Migration'}</strong>: {isKo ? '기존 기능을 하나씩 새 시스템으로 이전' : 'Migrate existing features one by one to new system'}</li>
            <li><strong>{isKo ? '레거시 제거' : 'Remove Legacy'}</strong>: {isKo ? '모든 기능 이관 완료 후 레거시 시스템 폐기' : 'Decommission legacy system after all features are migrated'}</li>
          </ol>

          <TipBox type="warning">
            <p>{isKo
              ? '빅뱅 마이그레이션(한 번에 전환)은 실패 확률이 매우 높습니다. 3년 이상 된 레거시 전환 프로젝트의 83%가 실패하거나 초과 비용이 발생합니다. 반드시 점진적 접근을 택하세요.'
              : 'Big-bang migration (switch all at once) has a very high failure rate. 83% of legacy migration projects over 3 years fail or exceed budget. Always choose a gradual approach.'}</p>
          </TipBox>
        </>
      ),
    },
  ];

  return (
    <GuidePage
      titleKo="DX 전략과 실행"
      titleEn="DX Strategy & Execution"
      subtitleKo="디지털 전환 전략 수립과 조직 변화 관리를 배웁니다."
      subtitleEn="Learn digital transformation strategy and organizational change management."
      icon="fa-diagram-project"
      iconColor="#059669"
      path="/dx-strategy"
      sections={sections}
    />
  );
}
