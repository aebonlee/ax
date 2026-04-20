import GuidePage from '../../components/GuidePage';
import TipBox from '../../components/TipBox';
import { useLanguage } from '../../contexts/LanguageContext';
import type { ReactElement } from 'react';
import type { GuideSection } from '../../components/GuidePage';

export default function Cases(): ReactElement {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  const sections: GuideSection[] = [
    {
      id: 'overview',
      icon: 'fa-magnifying-glass-chart',
      labelKo: '사례 분석 개요',
      labelEn: 'Case Study Overview',
      content: (
        <>
          <h2>{isKo ? '왜 사례 학습이 중요한가?' : 'Why Are Case Studies Important?'}</h2>
          <p>{isKo
            ? 'AX(AI Transformation)와 DX(Digital Transformation)는 이론만으로는 성공할 수 없습니다. 실제 기업이 어떤 맥락에서, 어떤 전략으로, 어떤 결과를 얻었는지 분석하는 것이 가장 효과적인 학습 방법입니다.'
            : 'AX (AI Transformation) and DX (Digital Transformation) cannot succeed with theory alone. Analyzing what context, strategies, and results real enterprises achieved is the most effective learning method.'}</p>
          <h3>{isKo ? '사례 학습의 3가지 가치' : '3 Values of Case Study Learning'}</h3>
          <ul>
            <li><strong>{isKo ? '검증된 패턴 학습' : 'Learning Proven Patterns'}</strong>: {isKo ? '수백억 원을 투자해 검증한 전략을 간접 경험하여 시행착오 최소화' : 'Minimize trial and error by indirectly experiencing strategies validated with billions in investment'}</li>
            <li><strong>{isKo ? '맥락 이해' : 'Understanding Context'}</strong>: {isKo ? '같은 기술도 산업, 조직문화, 타이밍에 따라 결과가 다름을 이해' : 'Understand that the same technology yields different results depending on industry, culture, and timing'}</li>
            <li><strong>{isKo ? '실패 회피' : 'Avoiding Failure'}</strong>: {isKo ? '다른 기업의 실패 원인을 분석하여 동일한 실수를 반복하지 않음' : 'Analyze failure causes of other companies to avoid repeating the same mistakes'}</li>
          </ul>
          <h3>{isKo ? 'AX·DX 성공의 핵심 패턴' : 'Core Patterns of AX/DX Success'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '패턴' : 'Pattern'}</th>
                <th>{isKo ? '설명' : 'Description'}</th>
                <th>{isKo ? '대표 기업' : 'Representative Company'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{isKo ? 'AI-First 전략' : 'AI-First Strategy'}</td>
                <td>{isKo ? '전사 비전에 AI를 핵심으로 배치' : 'Place AI at the core of enterprise vision'}</td>
                <td>Google, Microsoft</td>
              </tr>
              <tr>
                <td>{isKo ? '데이터 플라이휠' : 'Data Flywheel'}</td>
                <td>{isKo ? '데이터 → AI → 서비스 → 더 많은 데이터의 선순환' : 'Data → AI → Service → More data virtuous cycle'}</td>
                <td>Amazon, Netflix</td>
              </tr>
              <tr>
                <td>{isKo ? '플랫폼 전환' : 'Platform Transformation'}</td>
                <td>{isKo ? '제품 회사에서 플랫폼 회사로 전환' : 'Transform from product company to platform company'}</td>
                <td>Tesla, Microsoft</td>
              </tr>
              <tr>
                <td>{isKo ? '조직 재설계' : 'Organizational Redesign'}</td>
                <td>{isKo ? 'AI 시대에 맞는 조직 구조와 문화 혁신' : 'Innovate org structure and culture for the AI era'}</td>
                <td>Netflix, Amazon</td>
              </tr>
            </tbody>
          </table>
          <TipBox type="tip">
            <p>{isKo
              ? '사례 분석은 단순한 벤치마킹이 아닙니다. "왜 그 전략이 효과적이었는가?"를 맥락과 함께 이해하는 것이 핵심입니다.'
              : 'Case analysis is not simple benchmarking. The key is understanding "why was that strategy effective?" within its context.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'framework',
      icon: 'fa-layer-group',
      labelKo: '분석 프레임워크',
      labelEn: 'Analysis Framework',
      content: (
        <>
          <h2>{isKo ? '사례 분석 프레임워크' : 'Case Analysis Framework'}</h2>
          <p>{isKo
            ? '체계적인 사례 분석을 위해 5단계 프레임워크를 활용합니다. 각 단계는 사례의 핵심을 놓치지 않고 분석하기 위한 구조화된 접근법입니다.'
            : 'We use a 5-stage framework for systematic case analysis. Each stage is a structured approach to capture the essence of each case.'}</p>
          <h3>{isKo ? '5단계 분석법' : '5-Stage Analysis Method'}</h3>
          <ol>
            <li><strong>{isKo ? '1단계: 배경(Background)' : 'Stage 1: Background'}</strong>: {isKo ? '기업 현황, 산업 환경, 변화 동인, 경쟁 상황' : 'Company status, industry environment, change drivers, competitive landscape'}</li>
            <li><strong>{isKo ? '2단계: 전략(Strategy)' : 'Stage 2: Strategy'}</strong>: {isKo ? '비전, 목표, 접근방식, 투자 규모, 파트너십' : 'Vision, goals, approach, investment scale, partnerships'}</li>
            <li><strong>{isKo ? '3단계: 실행(Execution)' : 'Stage 3: Execution'}</strong>: {isKo ? '조직 구조, 기술 선택, 인재 확보, 변화 관리, 타임라인' : 'Org structure, technology selection, talent acquisition, change management, timeline'}</li>
            <li><strong>{isKo ? '4단계: 성과(Results)' : 'Stage 4: Results'}</strong>: {isKo ? '정량적 성과(매출, 비용, 효율성), 정성적 성과(문화, 역량)' : 'Quantitative results (revenue, cost, efficiency), qualitative results (culture, capability)'}</li>
            <li><strong>{isKo ? '5단계: 교훈(Lessons)' : 'Stage 5: Lessons'}</strong>: {isKo ? '성공/실패 요인, 적용 가능한 인사이트, 주의사항' : 'Success/failure factors, applicable insights, precautions'}</li>
          </ol>
          <h3>{isKo ? '분석 시 핵심 질문' : 'Key Questions for Analysis'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '단계' : 'Stage'}</th>
                <th>{isKo ? '핵심 질문' : 'Key Questions'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{isKo ? '배경' : 'Background'}</td>
                <td>{isKo ? '왜 변화가 필요했는가? 어떤 위기/기회가 있었는가?' : 'Why was change needed? What crisis/opportunity existed?'}</td>
              </tr>
              <tr>
                <td>{isKo ? '전략' : 'Strategy'}</td>
                <td>{isKo ? '어떤 선택을 했으며, 왜 그 선택이었는가?' : 'What choices were made and why?'}</td>
              </tr>
              <tr>
                <td>{isKo ? '실행' : 'Execution'}</td>
                <td>{isKo ? '가장 큰 장애물은 무엇이었고 어떻게 극복했는가?' : 'What was the biggest obstacle and how was it overcome?'}</td>
              </tr>
              <tr>
                <td>{isKo ? '성과' : 'Results'}</td>
                <td>{isKo ? '기대 대비 실제 성과는? 예상치 못한 결과는?' : 'Actual vs. expected results? Unexpected outcomes?'}</td>
              </tr>
              <tr>
                <td>{isKo ? '교훈' : 'Lessons'}</td>
                <td>{isKo ? '우리 조직에 적용 가능한 점은? 다르게 할 점은?' : 'What is applicable to our org? What would we do differently?'}</td>
              </tr>
            </tbody>
          </table>
          <TipBox type="important">
            <p>{isKo
              ? '프레임워크를 기계적으로 적용하지 마세요. 각 사례의 고유한 맥락을 이해하고, 우리 조직에 맞게 해석하는 것이 중요합니다.'
              : 'Do not apply the framework mechanically. Understanding each case\'s unique context and interpreting it for your organization is crucial.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'success',
      icon: 'fa-trophy',
      labelKo: '성공 사례 공통점',
      labelEn: 'Common Success Factors',
      content: (
        <>
          <h2>{isKo ? 'AX·DX 성공 사례의 공통점' : 'Common Factors in AX/DX Success Cases'}</h2>
          <p>{isKo
            ? '성공적으로 AI·DX 전환을 이룬 기업들을 분석하면, 산업과 규모에 관계없이 5가지 공통 요소가 반복적으로 나타납니다.'
            : 'Analyzing companies that successfully achieved AI/DX transformation reveals 5 common elements that appear repeatedly regardless of industry and scale.'}</p>
          <h3>{isKo ? '5대 성공 요인' : '5 Key Success Factors'}</h3>
          <ul>
            <li><strong>{isKo ? 'CEO 리더십과 비전' : 'CEO Leadership and Vision'}</strong>: {isKo ? 'CEO가 직접 AI·DX를 최우선 전략으로 선언하고 자원을 배분. Satya Nadella(Microsoft), Jensen Huang(NVIDIA)이 대표적' : 'CEO personally declares AI/DX as top strategy and allocates resources. Satya Nadella (Microsoft), Jensen Huang (NVIDIA) are representative'}</li>
            <li><strong>{isKo ? '데이터 우선 문화' : 'Data-First Culture'}</strong>: {isKo ? '의사결정을 직감이 아닌 데이터에 기반. 데이터 수집·정제·활용 파이프라인을 조직 전체에 구축' : 'Decision-making based on data, not intuition. Build data collection, cleansing, and utilization pipelines across the entire organization'}</li>
            <li><strong>{isKo ? '빠른 실험과 반복' : 'Rapid Experimentation and Iteration'}</strong>: {isKo ? '완벽한 계획보다 빠른 PoC(개념증명) → 파일럿 → 확산의 사이클. Amazon의 "Two Pizza Team" 문화' : 'Fast PoC → Pilot → Scale cycle over perfect planning. Amazon\'s "Two Pizza Team" culture'}</li>
            <li><strong>{isKo ? 'AI 인재 투자' : 'AI Talent Investment'}</strong>: {isKo ? '내부 인재 육성 + 외부 전문가 영입을 동시 추진. Google의 DeepMind 인수, Samsung의 AI 연구소 설립' : 'Simultaneously pursue internal talent development + external expert recruitment. Google\'s DeepMind acquisition, Samsung\'s AI Research Lab'}</li>
            <li><strong>{isKo ? '플랫폼 사고' : 'Platform Thinking'}</strong>: {isKo ? '개별 프로젝트가 아닌, 조직 전체가 활용할 수 있는 AI 플랫폼 구축. 재사용성과 확장성 확보' : 'Build AI platforms usable by the entire organization, not individual projects. Ensure reusability and scalability'}</li>
          </ul>
          <h3>{isKo ? '성공 기업의 투자 패턴' : 'Investment Patterns of Successful Companies'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '영역' : 'Area'}</th>
                <th>{isKo ? '투자 비중' : 'Investment Ratio'}</th>
                <th>{isKo ? '핵심 내용' : 'Key Content'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{isKo ? '인재' : 'Talent'}</td>
                <td>35-40%</td>
                <td>{isKo ? 'AI 전문가 채용, 전 직원 리스킬링' : 'AI expert hiring, all-employee reskilling'}</td>
              </tr>
              <tr>
                <td>{isKo ? '데이터 인프라' : 'Data Infra'}</td>
                <td>25-30%</td>
                <td>{isKo ? '데이터 레이크, 파이프라인, 거버넌스' : 'Data lake, pipeline, governance'}</td>
              </tr>
              <tr>
                <td>{isKo ? '기술·플랫폼' : 'Tech/Platform'}</td>
                <td>20-25%</td>
                <td>{isKo ? 'AI/ML 플랫폼, 클라우드, API' : 'AI/ML platform, cloud, APIs'}</td>
              </tr>
              <tr>
                <td>{isKo ? '변화 관리' : 'Change Mgmt'}</td>
                <td>10-15%</td>
                <td>{isKo ? '교육, 커뮤니케이션, 인센티브' : 'Training, communication, incentives'}</td>
              </tr>
            </tbody>
          </table>
          <TipBox type="example">
            <p>{isKo
              ? 'Microsoft는 Satya Nadella 취임(2014) 후 "클라우드·AI 퍼스트"로 전략을 전환하여 시가총액이 $300B에서 $3T로 10배 성장했습니다. CEO의 명확한 비전과 일관된 실행이 핵심이었습니다.'
              : 'After Satya Nadella became CEO (2014), Microsoft shifted to "Cloud & AI First" strategy, growing market cap 10x from $300B to $3T. Clear CEO vision and consistent execution were key.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'failure',
      icon: 'fa-triangle-exclamation',
      labelKo: '실패 사례 교훈',
      labelEn: 'Lessons from Failures',
      content: (
        <>
          <h2>{isKo ? '실패 사례에서 배우는 교훈' : 'Lessons Learned from Failure Cases'}</h2>
          <p>{isKo
            ? '성공 사례만큼 중요한 것이 실패 사례입니다. 막대한 투자에도 불구하고 기대한 성과를 얻지 못한 대표적 사례를 분석합니다.'
            : 'Failure cases are as important as success cases. We analyze representative cases that failed to achieve expected results despite massive investment.'}</p>
          <h3>{isKo ? '대표적 실패 사례' : 'Representative Failure Cases'}</h3>
          <ul>
            <li><strong>GE Digital (Predix)</strong>: {isKo
              ? '$7B 이상을 투자했으나, 핵심 사업과의 연계 부족, 과도한 범위 설정, 문화적 저항으로 실패. 결국 사업부 매각.'
              : 'Invested $7B+ but failed due to poor core business alignment, excessive scope, and cultural resistance. Eventually sold the division.'}</li>
            <li><strong>IBM Watson Health</strong>: {isKo
              ? 'AI 의료 혁명을 약속했으나, 데이터 품질 문제, 과도한 마케팅 대비 부족한 기술력, 의료진 신뢰 확보 실패. $4B 투자 후 매각.'
              : 'Promised AI healthcare revolution but failed with data quality issues, overpromising vs. under-delivering, and inability to gain physician trust. Sold after $4B investment.'}</li>
            <li><strong>{isKo ? '과도한 기대 사례' : 'Over-Expectation Cases'}</strong>: {isKo
              ? '많은 기업이 AI를 도입하면 즉시 혁신이 일어날 것으로 기대. 현실은 데이터 정비 6개월, 모델 개발 6개월, 현장 적용 6개월 이상 소요.'
              : 'Many companies expect instant innovation from AI adoption. Reality requires 6+ months each for data preparation, model development, and field application.'}</li>
            <li><strong>{isKo ? '전략 부재 사례' : 'Strategy Absence Cases'}</strong>: {isKo
              ? '경쟁사를 따라 AI 프로젝트를 시작했으나, 명확한 비즈니스 목표 없이 기술 도입에만 집중하여 ROI 증명 실패.'
              : 'Started AI projects following competitors but focused only on technology adoption without clear business goals, failing to prove ROI.'}</li>
          </ul>
          <h3>{isKo ? '실패의 4대 공통 원인' : '4 Common Causes of Failure'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '원인' : 'Cause'}</th>
                <th>{isKo ? '증상' : 'Symptoms'}</th>
                <th>{isKo ? '해결책' : 'Solution'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{isKo ? '전략 부재' : 'No Strategy'}</td>
                <td>{isKo ? 'AI가 목적이 되고, 비즈니스 문제 해결과 연결되지 않음' : 'AI becomes the goal, disconnected from business problems'}</td>
                <td>{isKo ? '비즈니스 문제에서 출발, AI는 수단으로 배치' : 'Start from business problems, position AI as means'}</td>
              </tr>
              <tr>
                <td>{isKo ? '데이터 미준비' : 'Data Unreadiness'}</td>
                <td>{isKo ? '데이터 분산, 품질 미확보, 거버넌스 부재' : 'Scattered data, poor quality, no governance'}</td>
                <td>{isKo ? 'AI 도입 전 데이터 정비 단계 필수 선행' : 'Mandatory data preparation before AI adoption'}</td>
              </tr>
              <tr>
                <td>{isKo ? '변화 관리 실패' : 'Change Mgmt Failure'}</td>
                <td>{isKo ? '현장 저항, 사용자 미채택, 사일로 유지' : 'Field resistance, user non-adoption, silos persist'}</td>
                <td>{isKo ? '현장 참여, 교육, 인센티브 설계' : 'Field participation, education, incentive design'}</td>
              </tr>
              <tr>
                <td>{isKo ? '과도한 기대' : 'Over-Expectations'}</td>
                <td>{isKo ? '단기 ROI 강요, 비현실적 일정, C-Level 실망' : 'Forced short-term ROI, unrealistic timeline, C-Level disappointment'}</td>
                <td>{isKo ? '현실적 목표와 단계적 성과 공유' : 'Realistic goals and phased results sharing'}</td>
              </tr>
            </tbody>
          </table>
          <TipBox type="warning">
            <p>{isKo
              ? 'GE Digital의 교훈: "모든 것을 한번에 바꾸려 하지 말라." GE는 $7B을 투자하며 산업 전체의 플랫폼을 만들려 했으나, 너무 넓은 범위와 핵심 제조업과의 괴리로 실패했습니다. 작게 시작하여 성공을 증명한 후 확대하는 것이 핵심입니다.'
              : 'GE Digital lesson: "Don\'t try to change everything at once." GE invested $7B trying to build a platform for the entire industry, but failed due to excessive scope and disconnection from core manufacturing. Start small, prove success, then expand.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'metrics',
      icon: 'fa-chart-line',
      labelKo: '성과 측정 방법',
      labelEn: 'Performance Measurement',
      content: (
        <>
          <h2>{isKo ? 'AX·DX 성과 측정 방법' : 'AX/DX Performance Measurement Methods'}</h2>
          <p>{isKo
            ? 'AI·DX 전환의 성과를 객관적으로 측정하기 위한 핵심 지표와 방법론을 소개합니다. "측정할 수 없으면 관리할 수 없다"는 원칙에 따라 체계적 성과 측정이 필수입니다.'
            : 'We introduce key metrics and methodologies for objectively measuring AI/DX transformation performance. Systematic measurement is essential following the principle "you cannot manage what you cannot measure."'}</p>
          <h3>{isKo ? '핵심 성과 지표 (KPI)' : 'Key Performance Indicators (KPI)'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '지표 영역' : 'Metric Area'}</th>
                <th>{isKo ? '측정 항목' : 'Measurement Items'}</th>
                <th>{isKo ? '측정 방법' : 'Measurement Method'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{isKo ? 'ROI (투자수익률)' : 'ROI'}</td>
                <td>{isKo ? '비용 절감, 매출 증가, 신규 수익원' : 'Cost reduction, revenue growth, new revenue streams'}</td>
                <td>{isKo ? '(수익 - 투자비용) / 투자비용 × 100%' : '(Revenue - Investment) / Investment × 100%'}</td>
              </tr>
              <tr>
                <td>{isKo ? '생산성' : 'Productivity'}</td>
                <td>{isKo ? '업무 처리 시간, 인당 산출량, 자동화율' : 'Task processing time, output per person, automation rate'}</td>
                <td>{isKo ? '도입 전후 비교 (Before-After)' : 'Before-After comparison'}</td>
              </tr>
              <tr>
                <td>{isKo ? '고객 만족도' : 'Customer Satisfaction'}</td>
                <td>{isKo ? 'NPS, CSAT, 재구매율, 이탈률' : 'NPS, CSAT, repurchase rate, churn rate'}</td>
                <td>{isKo ? '설문조사, 행동 데이터 분석' : 'Surveys, behavioral data analysis'}</td>
              </tr>
              <tr>
                <td>{isKo ? '시장 점유율' : 'Market Share'}</td>
                <td>{isKo ? '매출 점유율, 사용자 증가율, 신규 시장 진입' : 'Revenue share, user growth rate, new market entry'}</td>
                <td>{isKo ? '시장 조사, 경쟁사 비교 분석' : 'Market research, competitor comparison'}</td>
              </tr>
              <tr>
                <td>{isKo ? '혁신 역량' : 'Innovation Capability'}</td>
                <td>{isKo ? '신제품 출시 속도, 특허 건수, AI 모델 수' : 'New product launch speed, patents, AI model count'}</td>
                <td>{isKo ? 'Time-to-Market, R&D 성과 추적' : 'Time-to-Market, R&D outcome tracking'}</td>
              </tr>
            </tbody>
          </table>
          <h3>{isKo ? '성과 측정 시 주의사항' : 'Measurement Considerations'}</h3>
          <ul>
            <li><strong>{isKo ? '장기 관점' : 'Long-term View'}</strong>: {isKo ? 'AI·DX 성과는 최소 1~2년 후에 본격화. 단기 ROI에 집착하면 중장기 전략이 훼손됨' : 'AI/DX results materialize after 1-2 years minimum. Obsessing over short-term ROI damages long-term strategy'}</li>
            <li><strong>{isKo ? '정성적 지표 병행' : 'Include Qualitative Metrics'}</strong>: {isKo ? '조직 문화 변화, 데이터 활용 역량, 직원 AI 리터러시 향상도 중요한 성과' : 'Cultural change, data utilization capability, and employee AI literacy improvement are also important outcomes'}</li>
            <li><strong>{isKo ? '단계별 마일스톤' : 'Phased Milestones'}</strong>: {isKo ? '3개월, 6개월, 1년 단위의 중간 목표를 설정하여 진행 상황 점검' : 'Set interim goals at 3-month, 6-month, and 1-year intervals to check progress'}</li>
          </ul>
          <TipBox type="tip">
            <p>{isKo
              ? 'Netflix의 추천 알고리즘은 연간 $1B의 매출 기여를 하지만, 이를 증명하기까지 5년 이상의 데이터 축적과 A/B 테스트가 필요했습니다. 성과 측정은 인내심을 갖고 장기적으로 접근하세요.'
              : 'Netflix\'s recommendation algorithm contributes $1B in annual revenue, but proving this required 5+ years of data accumulation and A/B testing. Approach performance measurement with patience and a long-term perspective.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'apply',
      icon: 'fa-clipboard-check',
      labelKo: '우리 조직에 적용하기',
      labelEn: 'Apply to Your Organization',
      content: (
        <>
          <h2>{isKo ? '사례를 우리 조직에 적용하기' : 'Applying Cases to Your Organization'}</h2>
          <p>{isKo
            ? '사례 분석의 최종 목적은 우리 조직에 맞는 인사이트를 도출하고 적용하는 것입니다. 단순 모방이 아닌, 맥락을 이해한 적용이 핵심입니다.'
            : 'The ultimate purpose of case analysis is to derive and apply insights suitable for your organization. The key is contextual application, not simple imitation.'}</p>
          <h3>{isKo ? '벤치마킹 3단계 방법론' : '3-Stage Benchmarking Methodology'}</h3>
          <ol>
            <li><strong>{isKo ? '맥락 이해 (Contextualize)' : 'Contextualize'}</strong>: {isKo ? '해당 기업의 규모, 산업, 성숙도, 문화를 우리 조직과 비교. 같은 전략이라도 맥락이 다르면 결과가 다름' : 'Compare the company\'s size, industry, maturity, and culture with your organization. Same strategy yields different results in different contexts'}</li>
            <li><strong>{isKo ? '원리 추출 (Extract Principles)' : 'Extract Principles'}</strong>: {isKo ? '구체적 실행 방법이 아닌, 성공/실패의 근본 원리를 추출. "무엇을 했는가"가 아닌 "왜 효과적이었는가"에 집중' : 'Extract fundamental principles of success/failure, not specific execution methods. Focus on "why it was effective" not "what was done"'}</li>
            <li><strong>{isKo ? '단계적 적용 (Phased Application)' : 'Phased Application'}</strong>: {isKo ? '작은 실험으로 시작 → 검증 → 확대의 사이클. 한번에 모든 것을 바꾸려 하지 않기' : 'Start with small experiments → Validate → Scale cycle. Do not try to change everything at once'}</li>
          </ol>
          <h3>{isKo ? '조직 규모별 적용 전략' : 'Application Strategy by Organization Size'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '조직 규모' : 'Org Size'}</th>
                <th>{isKo ? '참고 사례' : 'Reference Cases'}</th>
                <th>{isKo ? '적용 전략' : 'Application Strategy'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{isKo ? '대기업 (1000명+)' : 'Enterprise (1000+)'}</td>
                <td>Microsoft, Google, Amazon</td>
                <td>{isKo ? '전사 플랫폼 구축, AI CoE 설립, 조직 재설계' : 'Enterprise platform, AI CoE, org redesign'}</td>
              </tr>
              <tr>
                <td>{isKo ? '중견기업 (100~1000명)' : 'Mid-size (100-1000)'}</td>
                <td>{isKo ? '국내 성공 중견기업 사례' : 'Domestic successful mid-size cases'}</td>
                <td>{isKo ? '핵심 영역 집중, SaaS AI 활용, 파트너십' : 'Focus on core areas, SaaS AI, partnerships'}</td>
              </tr>
              <tr>
                <td>{isKo ? '중소기업 (100명 이하)' : 'SME (under 100)'}</td>
                <td>{isKo ? 'AI 스타트업 성장 사례' : 'AI startup growth cases'}</td>
                <td>{isKo ? 'AI SaaS 도구 활용, 한 가지 문제에 집중' : 'Use AI SaaS tools, focus on one problem'}</td>
              </tr>
            </tbody>
          </table>
          <h3>{isKo ? '적용 시 체크리스트' : 'Application Checklist'}</h3>
          <ul>
            <li><strong>{isKo ? '현재 수준 진단' : 'Current Level Diagnosis'}</strong>: {isKo ? '우리 조직의 디지털 성숙도는 어느 단계인가?' : 'What stage is our organization\'s digital maturity?'}</li>
            <li><strong>{isKo ? '우선순위 설정' : 'Priority Setting'}</strong>: {isKo ? '가장 큰 비즈니스 임팩트를 줄 수 있는 영역은?' : 'Which area can deliver the greatest business impact?'}</li>
            <li><strong>{isKo ? '빠른 성공 확보' : 'Quick Win'}</strong>: {isKo ? '3개월 내 가시적 성과를 낼 수 있는 프로젝트로 시작' : 'Start with a project that can show visible results within 3 months'}</li>
            <li><strong>{isKo ? '리더십 확보' : 'Secure Leadership'}</strong>: {isKo ? 'C-Level의 관심과 지원 확보가 모든 전환의 전제조건' : 'Securing C-Level attention and support is a prerequisite for all transformation'}</li>
          </ul>
          <TipBox type="important">
            <p>{isKo
              ? '"사례 분석의 함정: 성공 기업의 결과만 보고 따라하면 실패합니다. 그 기업이 현재 규모가 되기까지의 수년간의 데이터 축적, 조직 문화 변화, 인재 투자 과정을 함께 이해해야 합니다. 결과가 아닌 여정을 벤치마킹하세요."'
              : '"Case analysis trap: Imitating only the results of successful companies leads to failure. You must also understand years of data accumulation, cultural change, and talent investment. Benchmark the journey, not just the results."'}</p>
          </TipBox>
        </>
      ),
    },
  ];

  return (
    <GuidePage
      titleKo="기업 사례 분석"
      titleEn="Enterprise Case Studies"
      subtitleKo="국내외 기업의 AX·DX 성공과 실패 사례를 분석합니다."
      subtitleEn="Analyze AX and DX success and failure cases from global enterprises."
      icon="fa-building"
      iconColor="#EA580C"
      path="/cases"
      sections={sections}
    />
  );
}
