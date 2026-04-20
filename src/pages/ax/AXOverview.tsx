import GuidePage from '../../components/GuidePage';
import TipBox from '../../components/TipBox';
import { useLanguage } from '../../contexts/LanguageContext';
import type { ReactElement } from 'react';
import type { GuideSection } from '../../components/GuidePage';

export default function AXOverview(): ReactElement {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  const sections: GuideSection[] = [
    {
      id: 'definition',
      icon: 'fa-lightbulb',
      labelKo: 'AX의 정의',
      labelEn: 'AX Definition',
      content: (
        <>
          <h2>{isKo ? 'AX(AI Transformation)란 무엇인가?' : 'What is AX (AI Transformation)?'}</h2>
          <p>{isKo
            ? 'AX(AI Transformation, AI 전환)는 인공지능 기술을 조직의 핵심 비즈니스 프로세스, 제품, 서비스, 의사결정 체계에 전면적으로 통합하여 근본적인 변화를 이끌어내는 전략적 전환 과정입니다.'
            : 'AX (AI Transformation) is the strategic transformation process of comprehensively integrating AI technology into an organization\'s core business processes, products, services, and decision-making systems to drive fundamental change.'}</p>

          <h3>{isKo ? 'AX의 3가지 핵심 차원' : '3 Core Dimensions of AX'}</h3>
          <ul>
            <li><strong>{isKo ? '업무 혁신' : 'Work Innovation'}</strong>: {isKo ? 'AI를 활용하여 업무 프로세스를 자동화하고 효율을 극대화합니다. RPA, 지능형 문서 처리, AI 어시스턴트 등이 해당됩니다.' : 'Automate and maximize work processes using AI. Includes RPA, intelligent document processing, AI assistants.'}</li>
            <li><strong>{isKo ? '제품·서비스 혁신' : 'Product/Service Innovation'}</strong>: {isKo ? 'AI를 제품과 서비스에 내장하여 고객 가치를 혁신합니다. 개인화 추천, 예측 분석, 자율 시스템 등이 포함됩니다.' : 'Embed AI in products and services to innovate customer value. Includes personalization, predictive analytics, autonomous systems.'}</li>
            <li><strong>{isKo ? '의사결정 혁신' : 'Decision Innovation'}</strong>: {isKo ? 'AI 기반 데이터 분석으로 경영 의사결정의 속도와 정확성을 높입니다. 예측 모델, 시뮬레이션, 최적화 알고리즘이 활용됩니다.' : 'Enhance speed and accuracy of management decisions with AI-based data analysis.'}</li>
          </ul>

          <TipBox type="important">
            <p>{isKo
              ? 'AX는 단순히 AI 도구를 도입하는 것이 아닙니다. 조직의 DNA를 AI 중심으로 재편하는 "전환(Transformation)"입니다. AI를 실험하는 단계를 넘어, AI가 조직의 핵심 경쟁력이 되도록 하는 것이 목표입니다.'
              : 'AX is not simply adopting AI tools. It is a "Transformation" that restructures the organization\'s DNA around AI.'}</p>
          </TipBox>

          <h3>{isKo ? 'Digitization → Digitalization → DX → AX 진화 단계' : 'Evolution: Digitization → Digitalization → DX → AX'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '단계' : 'Stage'}</th>
                <th>{isKo ? '의미' : 'Meaning'}</th>
                <th>{isKo ? '예시' : 'Example'}</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Digitization</td><td>{isKo ? '아날로그 → 디지털 변환' : 'Analog → Digital conversion'}</td><td>{isKo ? '종이 문서를 PDF로' : 'Paper docs to PDF'}</td></tr>
              <tr><td>Digitalization</td><td>{isKo ? '디지털 기술로 프로세스 개선' : 'Process improvement with digital tech'}</td><td>{isKo ? 'ERP 도입, 온라인 주문' : 'ERP, online ordering'}</td></tr>
              <tr><td>DX</td><td>{isKo ? '비즈니스 모델 전체 혁신' : 'Full business model innovation'}</td><td>{isKo ? '플랫폼 비즈니스, 옴니채널' : 'Platform business, omnichannel'}</td></tr>
              <tr><td><strong>AX</strong></td><td>{isKo ? 'AI를 핵심 역량으로 내재화' : 'AI as core competency'}</td><td>{isKo ? 'AI 자율 의사결정, AI-First 제품' : 'AI autonomous decisions, AI-First products'}</td></tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      id: 'necessity',
      icon: 'fa-chart-pie',
      labelKo: 'AX가 필요한 이유',
      labelEn: 'Why AX is Needed',
      content: (
        <>
          <h2>{isKo ? '왜 지금 AX가 필요한가?' : 'Why is AX Needed Now?'}</h2>
          <p>{isKo
            ? '2024년 ChatGPT를 시작으로 생성형 AI가 폭발적으로 성장하면서, AI는 더 이상 선택이 아닌 생존의 문제가 되었습니다. 글로벌 기업의 72%가 2026년까지 AI 전환을 완료할 계획이며, AI를 선제적으로 도입한 기업들은 이미 경쟁 우위를 확보하고 있습니다.'
            : 'Since the explosive growth of generative AI starting with ChatGPT in 2024, AI is no longer a choice but a matter of survival. 72% of global enterprises plan to complete AI transformation by 2026.'}</p>

          <h3>{isKo ? 'AX의 비즈니스 임팩트' : 'Business Impact of AX'}</h3>
          <div className="stats-inline">
            <div className="stat-box"><span className="stat-num">40%</span><span className="stat-txt">{isKo ? '생산성 향상' : 'Productivity Gain'}</span></div>
            <div className="stat-box"><span className="stat-num">30%</span><span className="stat-txt">{isKo ? '비용 절감' : 'Cost Reduction'}</span></div>
            <div className="stat-box"><span className="stat-num">25%</span><span className="stat-txt">{isKo ? '의사결정 속도' : 'Decision Speed'}</span></div>
            <div className="stat-box"><span className="stat-num">3x</span><span className="stat-txt">{isKo ? '혁신 속도' : 'Innovation Speed'}</span></div>
          </div>

          <h3>{isKo ? '산업별 AI 도입 현황 (2026)' : 'AI Adoption by Industry (2026)'}</h3>
          <ul>
            <li><strong>{isKo ? '금융' : 'Finance'}</strong>: {isKo ? '85% 도입 — AI 리스크 관리, 사기 탐지, 로보어드바이저' : '85% adoption — AI risk, fraud detection, robo-advisor'}</li>
            <li><strong>{isKo ? '제조' : 'Manufacturing'}</strong>: {isKo ? '78% 도입 — 예지보전, 품질 검사, 공정 최적화' : '78% adoption — predictive maintenance, quality inspection'}</li>
            <li><strong>{isKo ? '유통' : 'Retail'}</strong>: {isKo ? '72% 도입 — 수요 예측, 개인화 추천, 재고 최적화' : '72% adoption — demand forecast, personalization, inventory'}</li>
            <li><strong>{isKo ? '의료' : 'Healthcare'}</strong>: {isKo ? '65% 도입 — AI 진단, 신약 개발, 정밀의학' : '65% adoption — AI diagnosis, drug discovery, precision medicine'}</li>
            <li><strong>{isKo ? '교육' : 'Education'}</strong>: {isKo ? '55% 도입 — 적응형 학습, AI 튜터, 자동 채점' : '55% adoption — adaptive learning, AI tutor, auto-grading'}</li>
          </ul>

          <TipBox type="warning">
            <p>{isKo
              ? 'McKinsey 보고서에 따르면, AI 전환을 미루는 기업은 2027년까지 업계 평균 대비 매출이 20% 하락할 것으로 예측됩니다. "Do nothing"은 가장 큰 리스크입니다.'
              : 'According to McKinsey, companies that delay AI transformation are predicted to see 20% revenue decline vs. industry average by 2027.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'vs-dx',
      icon: 'fa-arrows-rotate',
      labelKo: 'AX vs DX 비교',
      labelEn: 'AX vs DX Comparison',
      content: (
        <>
          <h2>{isKo ? 'AX와 DX의 차이점' : 'Differences Between AX and DX'}</h2>
          <p>{isKo
            ? 'DX(디지털 전환)와 AX(AI 전환)는 밀접하게 연관되지만 명확히 다른 개념입니다. DX가 디지털 기술로 비즈니스를 혁신한다면, AX는 AI로 "지능"을 부여하는 한 차원 높은 전환입니다.'
            : 'DX and AX are closely related but distinctly different concepts. While DX innovates business with digital technology, AX grants "intelligence" through AI—a higher dimension of transformation.'}</p>

          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '구분' : 'Category'}</th>
                <th>DX</th>
                <th>AX</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>{isKo ? '핵심 목표' : 'Core Goal'}</td><td>{isKo ? '프로세스 디지털화' : 'Process digitization'}</td><td>{isKo ? '지능형 자동화' : 'Intelligent automation'}</td></tr>
              <tr><td>{isKo ? '핵심 기술' : 'Key Tech'}</td><td>{isKo ? '클라우드, 모바일, IoT' : 'Cloud, Mobile, IoT'}</td><td>{isKo ? 'ML, LLM, 에이전트' : 'ML, LLM, Agents'}</td></tr>
              <tr><td>{isKo ? '데이터 역할' : 'Data Role'}</td><td>{isKo ? '기록·분석' : 'Record & Analyze'}</td><td>{isKo ? '학습·예측·생성' : 'Learn, Predict, Generate'}</td></tr>
              <tr><td>{isKo ? '인간 역할' : 'Human Role'}</td><td>{isKo ? '디지털 도구 사용자' : 'Digital tool user'}</td><td>{isKo ? 'AI 협업자/감독자' : 'AI collaborator/supervisor'}</td></tr>
              <tr><td>{isKo ? '성과 측정' : 'Metrics'}</td><td>{isKo ? '효율성, 비용 절감' : 'Efficiency, cost saving'}</td><td>{isKo ? '가치 창출, 혁신 속도' : 'Value creation, innovation speed'}</td></tr>
              <tr><td>{isKo ? '조직 변화' : 'Org Change'}</td><td>{isKo ? '업무 방식 변화' : 'Work method change'}</td><td>{isKo ? '의사결정 체계 변화' : 'Decision system change'}</td></tr>
            </tbody>
          </table>

          <TipBox type="tip">
            <p>{isKo
              ? 'DX는 AX의 전제조건입니다. 데이터 인프라, 클라우드, API 체계가 갖춰져야 AI를 효과적으로 활용할 수 있습니다. DX 성숙도가 낮은 조직이 AX를 시도하면 실패 확률이 80%를 넘습니다.'
              : 'DX is a prerequisite for AX. Data infrastructure, cloud, and API systems must be in place before AI can be effectively utilized.'}</p>
          </TipBox>

          <h3>{isKo ? 'DX → AX 전환 경로' : 'DX → AX Transition Path'}</h3>
          <ol>
            <li><strong>{isKo ? '1단계: DX 기반 확보' : 'Step 1: Secure DX Foundation'}</strong> — {isKo ? '클라우드 마이그레이션, 데이터 통합, API 구축' : 'Cloud migration, data integration, API building'}</li>
            <li><strong>{isKo ? '2단계: AI 실험' : 'Step 2: AI Experimentation'}</strong> — {isKo ? '파일럿 프로젝트, PoC, 빠른 가치 증명' : 'Pilot projects, PoC, quick value proof'}</li>
            <li><strong>{isKo ? '3단계: AI 확산' : 'Step 3: AI Scaling'}</strong> — {isKo ? '성공 사례 확대, MLOps 구축, 조직 역량 강화' : 'Scale success cases, build MLOps, strengthen capabilities'}</li>
            <li><strong>{isKo ? '4단계: AI-Native' : 'Step 4: AI-Native'}</strong> — {isKo ? 'AI가 조직의 기본 운영 방식이 됨' : 'AI becomes the default operating mode'}</li>
          </ol>
        </>
      ),
    },
    {
      id: 'maturity',
      icon: 'fa-layer-group',
      labelKo: 'AX 성숙도 모델',
      labelEn: 'AX Maturity Model',
      content: (
        <>
          <h2>{isKo ? 'AX 성숙도 5단계 모델' : 'AX Maturity 5-Stage Model'}</h2>
          <p>{isKo
            ? '조직의 AX 수준을 객관적으로 진단하고, 다음 단계로 성장하기 위한 로드맵을 수립하는 데 활용합니다.'
            : 'Used to objectively diagnose an organization\'s AX level and establish a roadmap for growth to the next stage.'}</p>

          <div className="maturity-levels">
            <div className="maturity-item level-1">
              <div className="maturity-badge">Level 1</div>
              <h4>{isKo ? '인식 (Awareness)' : 'Awareness'}</h4>
              <p>{isKo ? 'AI의 가능성을 인식하고 학습하는 단계. AI 교육, 세미나, 기초 도구 탐색.' : 'Stage of recognizing and learning AI possibilities. AI education, seminars, basic tool exploration.'}</p>
              <ul>
                <li>{isKo ? 'AI 리터러시 교육 시작' : 'AI literacy training begins'}</li>
                <li>{isKo ? '경쟁사 AI 활용 사례 분석' : 'Competitor AI case analysis'}</li>
                <li>{isKo ? 'AI 도입 가능 영역 탐색' : 'Exploration of AI-applicable areas'}</li>
              </ul>
            </div>
            <div className="maturity-item level-2">
              <div className="maturity-badge">Level 2</div>
              <h4>{isKo ? '실험 (Experiment)' : 'Experiment'}</h4>
              <p>{isKo ? 'PoC(Proof of Concept)와 파일럿 프로젝트를 통해 AI의 실질적 가치를 검증합니다.' : 'Verify practical AI value through PoC and pilot projects.'}</p>
              <ul>
                <li>{isKo ? '2~3개 파일럿 프로젝트 실행' : '2-3 pilot projects executed'}</li>
                <li>{isKo ? 'AI 전담 조직 또는 TF 구성' : 'AI dedicated team or TF formed'}</li>
                <li>{isKo ? '데이터 품질 개선 착수' : 'Data quality improvement begins'}</li>
              </ul>
            </div>
            <div className="maturity-item level-3">
              <div className="maturity-badge">Level 3</div>
              <h4>{isKo ? '확산 (Scale)' : 'Scale'}</h4>
              <p>{isKo ? '검증된 AI 솔루션을 여러 부서에 확산하고, MLOps 체계를 구축합니다.' : 'Scale proven AI solutions across departments and build MLOps systems.'}</p>
              <ul>
                <li>{isKo ? '5개 이상 AI 프로젝트 운영' : '5+ AI projects in operation'}</li>
                <li>{isKo ? 'MLOps 파이프라인 구축' : 'MLOps pipeline established'}</li>
                <li>{isKo ? 'AI CoE(Center of Excellence) 설립' : 'AI CoE established'}</li>
              </ul>
            </div>
            <div className="maturity-item level-4">
              <div className="maturity-badge">Level 4</div>
              <h4>{isKo ? '최적화 (Optimize)' : 'Optimize'}</h4>
              <p>{isKo ? '전사적으로 AI가 통합되어 핵심 업무 대부분에 AI가 관여합니다.' : 'AI is integrated enterprise-wide, involved in most core operations.'}</p>
              <ul>
                <li>{isKo ? '전 부서 AI 활용률 70% 이상' : 'AI utilization 70%+ across all departments'}</li>
                <li>{isKo ? 'AI 거버넌스 체계 운영' : 'AI governance system in operation'}</li>
                <li>{isKo ? '자동화된 AI 모델 관리' : 'Automated AI model management'}</li>
              </ul>
            </div>
            <div className="maturity-item level-5">
              <div className="maturity-badge">Level 5</div>
              <h4>{isKo ? '혁신 (AI-Native)' : 'AI-Native'}</h4>
              <p>{isKo ? 'AI가 조직의 기본 운영 방식. AI-First 문화가 완전히 정착된 단계입니다.' : 'AI is the default operating mode. AI-First culture is fully established.'}</p>
              <ul>
                <li>{isKo ? 'AI가 자율적으로 의사결정' : 'AI makes autonomous decisions'}</li>
                <li>{isKo ? '지속적 자가 학습·개선' : 'Continuous self-learning and improvement'}</li>
                <li>{isKo ? 'AI 기반 신규 비즈니스 창출' : 'AI-based new business creation'}</li>
              </ul>
            </div>
          </div>

          <TipBox type="example">
            <p>{isKo
              ? '국내 대기업 평균 성숙도: Level 2~3 | 글로벌 선도 기업(Google, Microsoft): Level 4~5 | 국내 중소기업: Level 1~2'
              : 'Korean large enterprise avg: Level 2-3 | Global leaders (Google, MS): Level 4-5 | Korean SMEs: Level 1-2'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'roadmap',
      icon: 'fa-route',
      labelKo: 'AX 로드맵 설계',
      labelEn: 'AX Roadmap Design',
      content: (
        <>
          <h2>{isKo ? 'AX 로드맵 수립 가이드' : 'AX Roadmap Planning Guide'}</h2>
          <p>{isKo
            ? '성공적인 AI 전환을 위한 체계적인 로드맵 설계 방법론을 학습합니다. 현재 상태 진단부터 단계별 실행 계획, 성과 측정까지 포함합니다.'
            : 'Learn systematic roadmap design methodology for successful AI transformation.'}</p>

          <h3>{isKo ? '로드맵 수립 5단계' : '5 Steps of Roadmap Planning'}</h3>
          <ol>
            <li>
              <strong>{isKo ? '현재 상태 진단' : 'Current State Assessment'}</strong>
              <p>{isKo ? 'AI 성숙도 평가, 데이터 인프라 점검, 조직 역량 분석, 기존 IT 시스템 현황 파악' : 'AI maturity assessment, data infrastructure check, organizational capability analysis'}</p>
            </li>
            <li>
              <strong>{isKo ? '목표 설정 (Vision & Goal)' : 'Goal Setting (Vision & Goal)'}</strong>
              <p>{isKo ? '3년 후 목표 상태 정의, 핵심 KPI 설정, 비즈니스 임팩트 목표 수량화' : 'Define target state in 3 years, set core KPIs, quantify business impact goals'}</p>
            </li>
            <li>
              <strong>{isKo ? '우선순위 과제 선정' : 'Priority Task Selection'}</strong>
              <p>{isKo ? '영향도 × 실현가능성 매트릭스로 Quick Win과 전략 과제를 분류합니다.' : 'Classify Quick Wins and strategic tasks using Impact × Feasibility matrix.'}</p>
            </li>
            <li>
              <strong>{isKo ? '단계별 실행 계획' : 'Phased Execution Plan'}</strong>
              <p>{isKo ? '단기(0~6개월): Quick Win | 중기(6~18개월): 핵심 프로젝트 | 장기(18~36개월): 전사 확산' : 'Short-term (0-6mo): Quick Win | Mid (6-18mo): Core projects | Long (18-36mo): Enterprise-wide'}</p>
            </li>
            <li>
              <strong>{isKo ? '성과 측정 체계' : 'Performance Measurement'}</strong>
              <p>{isKo ? '정량 지표(ROI, 비용 절감, 시간 단축)와 정성 지표(직원 만족도, 혁신 문화)를 함께 관리' : 'Manage quantitative (ROI, cost, time) and qualitative (satisfaction, culture) metrics together'}</p>
            </li>
          </ol>

          <TipBox type="tip" title={isKo ? 'Quick Win 전략' : 'Quick Win Strategy'}>
            <p>{isKo
              ? '첫 6개월은 빠르게 성과를 보여줄 수 있는 "Quick Win" 과제에 집중하세요. 대표적 Quick Win: AI 챗봇, 문서 자동화, 이메일 분류, 회의록 요약. 작은 성공이 조직의 AX 모멘텀을 만듭니다.'
              : 'Focus on "Quick Win" tasks in the first 6 months. Examples: AI chatbot, document automation, email classification, meeting summary. Small wins create organizational momentum.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'success-factors',
      icon: 'fa-trophy',
      labelKo: 'AX 성공 핵심 요인',
      labelEn: 'Key Success Factors',
      content: (
        <>
          <h2>{isKo ? 'AX 성공의 5대 핵심 요인' : '5 Key Success Factors for AX'}</h2>
          <p>{isKo
            ? 'AI 전환 프로젝트의 성공률은 약 30%에 불과합니다. 실패하는 70%와 성공하는 30%의 차이는 기술이 아닌 "전략과 사람"에 있습니다.'
            : 'Only about 30% of AI transformation projects succeed. The difference between the 70% that fail and 30% that succeed lies in "strategy and people," not technology.'}</p>

          <h3>1. {isKo ? '경영진의 강력한 리더십' : 'Strong Executive Leadership'}</h3>
          <p>{isKo
            ? 'CEO/CTO가 AX를 최우선 과제로 선언하고, 예산과 인력을 투입하며, 조직의 저항을 돌파해야 합니다. Top-down 의지 없이는 AX가 "실험"에서 "전환"으로 발전하지 못합니다.'
            : 'CEO/CTO must declare AX as top priority, invest budget and resources, and overcome organizational resistance.'}</p>

          <h3>2. {isKo ? '데이터 인프라 정비' : 'Data Infrastructure'}</h3>
          <p>{isKo
            ? 'AI는 데이터 위에서 작동합니다. 데이터 수집, 저장, 가공, 활용 파이프라인이 갖춰져야 합니다. 데이터 품질(정확성, 완전성, 일관성)이 AI 성능의 80%를 결정합니다.'
            : 'AI runs on data. Data collection, storage, processing, and utilization pipelines must be established. Data quality determines 80% of AI performance.'}</p>

          <h3>3. {isKo ? 'AI 인재 확보·육성' : 'AI Talent Development'}</h3>
          <p>{isKo
            ? '외부 채용(AI 엔지니어, 데이터 사이언티스트) + 내부 육성(AI 리터러시 교육, 시민 개발자 프로그램)의 투 트랙 전략이 필요합니다.'
            : 'Two-track strategy needed: external hiring (AI engineers, data scientists) + internal development (AI literacy, citizen developer programs).'}</p>

          <h3>4. {isKo ? '조직 문화 혁신' : 'Organizational Culture Innovation'}</h3>
          <p>{isKo
            ? '실험과 실패를 용인하는 문화, AI와 협업하는 새로운 업무 방식, 데이터 기반 의사결정 습관을 만들어야 합니다.'
            : 'Create a culture that tolerates experimentation, new ways of working with AI, and data-driven decision-making habits.'}</p>

          <h3>5. {isKo ? '명확한 비즈니스 케이스' : 'Clear Business Case'}</h3>
          <p>{isKo
            ? '"AI를 위한 AI"가 아닌, 구체적인 비즈니스 문제를 해결하는 AI를 만들어야 합니다. 모든 AI 프로젝트는 명확한 ROI 목표가 있어야 합니다.'
            : 'Build AI that solves specific business problems, not "AI for AI\'s sake." Every AI project must have clear ROI targets.'}</p>

          <TipBox type="warning">
            <p>{isKo
              ? '실패의 가장 큰 원인: ① 경영진 관심 부족 (32%) ② 데이터 품질 미비 (28%) ③ 조직 저항 (22%) ④ 인재 부족 (12%) ⑤ 기타 (6%) — Gartner 2025 조사'
              : 'Top failure causes: ① Lack of executive support (32%) ② Poor data quality (28%) ③ Organizational resistance (22%) ④ Talent shortage (12%) ⑤ Other (6%)'}</p>
          </TipBox>
        </>
      ),
    },
  ];

  return (
    <GuidePage
      titleKo="AX 개요"
      titleEn="AX Overview"
      subtitleKo="AI 전환(AX)의 개념, 필요성, 핵심 원리를 이해합니다."
      subtitleEn="Understand the concept, necessity, and core principles of AI Transformation."
      icon="fa-robot"
      iconColor="#1E3A5F"
      path="/ax-overview"
      sections={sections}
    />
  );
}
