import GuidePage from '../../components/GuidePage';
import TipBox from '../../components/TipBox';
import { useLanguage } from '../../contexts/LanguageContext';
import type { ReactElement } from 'react';
import type { GuideSection } from '../../components/GuidePage';

export default function Trends(): ReactElement {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  const sections: GuideSection[] = [
    {
      id: 'agents',
      icon: 'fa-robot',
      labelKo: 'AI 에이전트',
      labelEn: 'AI Agents',
      content: (
        <>
          <h2>{isKo ? 'AI 에이전트: 2026년 대중화 시대' : 'AI Agents: The Era of Mainstream Adoption in 2026'}</h2>
          <p>
            {isKo
              ? 'AI 에이전트는 단순 챗봇을 넘어 스스로 계획을 수립하고, 도구를 사용하며, 목표를 달성하는 자율형 AI 시스템입니다. 2026년, AI 에이전트는 기업과 개인 생활에 본격적으로 침투하며 새로운 생산성 패러다임을 열고 있습니다.'
              : 'AI agents go beyond simple chatbots — they are autonomous AI systems that can plan, use tools, and achieve goals independently. In 2026, AI agents are deeply penetrating enterprises and personal life, opening a new productivity paradigm.'}
          </p>

          <h3>{isKo ? '에이전트의 핵심 역량' : 'Core Capabilities of Agents'}</h3>
          <ul>
            <li><strong>{isKo ? '자율 작업 수행' : 'Autonomous Task Execution'}</strong>: {isKo ? '사용자의 고수준 지시만으로 복잡한 멀티스텝 작업을 독립적으로 완수' : 'Independently complete complex multi-step tasks with only high-level instructions'}</li>
            <li><strong>{isKo ? '도구 사용(Tool Use)' : 'Tool Use'}</strong>: {isKo ? 'API 호출, 웹 검색, 코드 실행, 파일 조작 등 외부 도구 활용' : 'Leverage external tools including API calls, web search, code execution, and file manipulation'}</li>
            <li><strong>{isKo ? '계획 수립 및 반성' : 'Planning & Reflection'}</strong>: {isKo ? '작업을 하위 단계로 분해하고, 결과를 평가하여 전략을 수정' : 'Decompose tasks into sub-steps, evaluate results, and adjust strategies'}</li>
            <li><strong>{isKo ? '멀티에이전트 협업' : 'Multi-Agent Collaboration'}</strong>: {isKo ? '여러 전문 에이전트가 역할을 나누어 복잡한 문제를 해결' : 'Multiple specialized agents divide roles to solve complex problems'}</li>
          </ul>

          <h3>{isKo ? '기업 도입 현황' : 'Enterprise Adoption Status'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '분야' : 'Domain'}</th>
                <th>{isKo ? '에이전트 활용 사례' : 'Agent Use Cases'}</th>
                <th>{isKo ? '도입률(2026)' : 'Adoption Rate(2026)'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{isKo ? '고객 서비스' : 'Customer Service'}</td>
                <td>{isKo ? '자율 응대, 에스컬레이션 판단, 환불 처리' : 'Autonomous response, escalation judgment, refund processing'}</td>
                <td>68%</td>
              </tr>
              <tr>
                <td>{isKo ? '소프트웨어 개발' : 'Software Development'}</td>
                <td>{isKo ? '코드 생성, 디버깅, PR 리뷰, 테스트 작성' : 'Code generation, debugging, PR review, test writing'}</td>
                <td>55%</td>
              </tr>
              <tr>
                <td>{isKo ? '데이터 분석' : 'Data Analytics'}</td>
                <td>{isKo ? '자동 리포트, 이상 탐지, 인사이트 도출' : 'Auto reporting, anomaly detection, insight extraction'}</td>
                <td>47%</td>
              </tr>
              <tr>
                <td>{isKo ? '영업/마케팅' : 'Sales/Marketing'}</td>
                <td>{isKo ? '리드 발굴, 이메일 자동화, 캠페인 최적화' : 'Lead generation, email automation, campaign optimization'}</td>
                <td>42%</td>
              </tr>
            </tbody>
          </table>

          <TipBox type="important">
            <p>{isKo ? '2026년 Gartner 조사에 따르면, Fortune 500 기업의 72%가 최소 1개 이상의 AI 에이전트를 프로덕션 환경에 배포했습니다. 평균 ROI는 도입 후 6개월 내 340%를 기록하고 있습니다.' : 'According to Gartner\'s 2026 survey, 72% of Fortune 500 companies have deployed at least one AI agent in production. Average ROI reaches 340% within 6 months of deployment.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'multimodal',
      icon: 'fa-layer-group',
      labelKo: '멀티모달 AI',
      labelEn: 'Multimodal AI',
      content: (
        <>
          <h2>{isKo ? '멀티모달 AI: 통합 인지의 시대' : 'Multimodal AI: The Era of Unified Cognition'}</h2>
          <p>
            {isKo
              ? '멀티모달 AI는 텍스트, 이미지, 음성, 영상 등 다양한 형태의 데이터를 동시에 이해하고 생성하는 AI 시스템입니다. GPT-4o, Gemini 2.0, Claude의 멀티모달 기능은 인간과 유사한 통합 인지 능력을 보여줍니다.'
              : 'Multimodal AI systems understand and generate various data types simultaneously — text, images, audio, and video. GPT-4o, Gemini 2.0, and Claude\'s multimodal capabilities demonstrate human-like integrated cognition.'}
          </p>

          <h3>{isKo ? '주요 멀티모달 모델 비교' : 'Major Multimodal Model Comparison'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '모델' : 'Model'}</th>
                <th>{isKo ? '입력 모달리티' : 'Input Modalities'}</th>
                <th>{isKo ? '출력 모달리티' : 'Output Modalities'}</th>
                <th>{isKo ? '강점' : 'Strengths'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>GPT-4o</td>
                <td>{isKo ? '텍스트, 이미지, 음성, 영상' : 'Text, Image, Audio, Video'}</td>
                <td>{isKo ? '텍스트, 이미지, 음성' : 'Text, Image, Audio'}</td>
                <td>{isKo ? '실시간 음성 대화, 네이티브 멀티모달' : 'Real-time voice conversation, native multimodal'}</td>
              </tr>
              <tr>
                <td>Gemini 2.0</td>
                <td>{isKo ? '텍스트, 이미지, 음성, 영상, 코드' : 'Text, Image, Audio, Video, Code'}</td>
                <td>{isKo ? '텍스트, 이미지, 음성' : 'Text, Image, Audio'}</td>
                <td>{isKo ? '100만 토큰 컨텍스트, 영상 이해' : '1M token context, video understanding'}</td>
              </tr>
              <tr>
                <td>Claude Opus</td>
                <td>{isKo ? '텍스트, 이미지, PDF, 코드' : 'Text, Image, PDF, Code'}</td>
                <td>{isKo ? '텍스트, 코드' : 'Text, Code'}</td>
                <td>{isKo ? '장문 분석, 추론 정확도, 안전성' : 'Long-form analysis, reasoning accuracy, safety'}</td>
              </tr>
            </tbody>
          </table>

          <h3>{isKo ? '멀티모달 AI 활용 분야' : 'Multimodal AI Application Areas'}</h3>
          <ul>
            <li><strong>{isKo ? '의료 영상 분석' : 'Medical Image Analysis'}</strong>: {isKo ? 'X-ray, MRI, CT 스캔을 텍스트 소견서와 함께 분석하여 정확도 향상' : 'Analyze X-ray, MRI, CT scans alongside text reports for improved accuracy'}</li>
            <li><strong>{isKo ? '교육 콘텐츠 생성' : 'Educational Content Creation'}</strong>: {isKo ? '텍스트 교재에서 영상 강의, 인포그래픽, 퀴즈를 자동 생성' : 'Auto-generate video lectures, infographics, and quizzes from text materials'}</li>
            <li><strong>{isKo ? '접근성 향상' : 'Accessibility Enhancement'}</strong>: {isKo ? '시각 장애인을 위한 이미지 설명, 청각 장애인을 위한 영상 자막 생성' : 'Image descriptions for visually impaired, video captions for hearing impaired'}</li>
            <li><strong>{isKo ? '크리에이티브 프로덕션' : 'Creative Production'}</strong>: {isKo ? '텍스트 프롬프트로 광고 영상, 음악, 3D 에셋 통합 제작' : 'Integrated creation of ad videos, music, and 3D assets from text prompts'}</li>
          </ul>

          <TipBox type="tip">
            <p>{isKo ? '멀티모달 AI의 핵심은 "모달리티 간 번역"이 아니라 "통합 이해"입니다. 이미지와 텍스트를 각각 처리하는 것이 아닌, 동시에 인식하여 맥락을 파악하는 능력이 진정한 차별점입니다.' : 'The key to multimodal AI is not "translation between modalities" but "integrated understanding." The true differentiator is the ability to simultaneously perceive image and text to grasp context, rather than processing them separately.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'slm',
      icon: 'fa-microchip',
      labelKo: '소형 언어모델 SLM',
      labelEn: 'Small Language Models',
      content: (
        <>
          <h2>{isKo ? '소형 언어모델(SLM): 효율의 시대' : 'Small Language Models (SLM): The Era of Efficiency'}</h2>
          <p>
            {isKo
              ? '거대 언어모델(LLM)의 성능을 소형 모델로 압축하는 기술이 급속히 발전하고 있습니다. 1B~7B 파라미터 수준의 SLM은 온디바이스 배포, 낮은 비용, 빠른 추론 속도라는 강점으로 엔터프라이즈 시장에서 폭발적으로 성장하고 있습니다.'
              : 'Technology to compress large language model performance into smaller models is advancing rapidly. SLMs with 1B-7B parameters are growing explosively in enterprise markets with advantages of on-device deployment, low cost, and fast inference speed.'}
          </p>

          <h3>{isKo ? '주요 SLM 모델' : 'Key SLM Models'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '모델' : 'Model'}</th>
                <th>{isKo ? '파라미터' : 'Parameters'}</th>
                <th>{isKo ? '개발사' : 'Developer'}</th>
                <th>{isKo ? '특징' : 'Features'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Phi-4</td>
                <td>3.8B</td>
                <td>Microsoft</td>
                <td>{isKo ? '추론 특화, 수학/코딩 강점' : 'Reasoning-focused, math/coding strengths'}</td>
              </tr>
              <tr>
                <td>Gemma 3</td>
                <td>2B / 7B</td>
                <td>Google</td>
                <td>{isKo ? '오픈소스, 멀티모달 지원' : 'Open source, multimodal support'}</td>
              </tr>
              <tr>
                <td>Llama 3.3</td>
                <td>8B</td>
                <td>Meta</td>
                <td>{isKo ? '범용 성능, 파인튜닝 용이' : 'General performance, easy fine-tuning'}</td>
              </tr>
              <tr>
                <td>Mistral Small</td>
                <td>7B</td>
                <td>Mistral AI</td>
                <td>{isKo ? '유럽 기반, 다국어 강점' : 'Europe-based, multilingual strengths'}</td>
              </tr>
            </tbody>
          </table>

          <h3>{isKo ? '온디바이스 AI의 장점' : 'Advantages of On-Device AI'}</h3>
          <ul>
            <li><strong>{isKo ? '개인정보 보호' : 'Privacy Protection'}</strong>: {isKo ? '데이터가 클라우드로 전송되지 않아 민감 정보 보안 강화' : 'Data never leaves the device, enhancing sensitive information security'}</li>
            <li><strong>{isKo ? '저지연 응답' : 'Low Latency Response'}</strong>: {isKo ? '네트워크 왕복 없이 밀리초 단위 즉시 응답' : 'Instant millisecond response without network round-trips'}</li>
            <li><strong>{isKo ? '비용 절감' : 'Cost Reduction'}</strong>: {isKo ? 'API 호출 비용 없이 로컬에서 무제한 추론 가능' : 'Unlimited local inference without API call costs'}</li>
            <li><strong>{isKo ? '오프라인 동작' : 'Offline Operation'}</strong>: {isKo ? '인터넷 연결 없는 환경에서도 AI 기능 제공' : 'Provide AI capabilities even without internet connection'}</li>
          </ul>

          <TipBox type="example">
            <p>{isKo ? '삼성 갤럭시 S26에 탑재된 온디바이스 AI는 3B 파라미터 SLM을 기반으로 실시간 번역, 사진 편집, 문서 요약을 인터넷 연결 없이 수행합니다. 배터리 소모는 클라우드 방식 대비 60% 절감되었습니다.' : 'On-device AI in Samsung Galaxy S26, based on a 3B parameter SLM, performs real-time translation, photo editing, and document summarization without internet. Battery consumption is reduced by 60% compared to cloud-based approaches.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'regulation',
      icon: 'fa-gavel',
      labelKo: 'AI 규제와 거버넌스',
      labelEn: 'AI Regulation & Governance',
      content: (
        <>
          <h2>{isKo ? 'AI 규제와 거버넌스' : 'AI Regulation & Governance'}</h2>
          <p>
            {isKo
              ? '2026년은 글로벌 AI 규제가 실질적으로 시행되는 원년입니다. EU AI Act의 본격 적용, 한국 AI 기본법 시행, 미국의 AI 행정명령 강화 등 각국이 구체적인 규제 프레임워크를 가동하고 있습니다.'
              : '2026 marks the first year of substantial global AI regulation enforcement. The EU AI Act is fully applied, Korea\'s AI Basic Law is enacted, and the US has strengthened AI executive orders — countries are activating concrete regulatory frameworks.'}
          </p>

          <h3>{isKo ? '주요 규제 현황' : 'Major Regulation Status'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '규제' : 'Regulation'}</th>
                <th>{isKo ? '지역' : 'Region'}</th>
                <th>{isKo ? '시행 시기' : 'Enforcement Date'}</th>
                <th>{isKo ? '핵심 내용' : 'Key Content'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>EU AI Act</td>
                <td>{isKo ? '유럽연합' : 'European Union'}</td>
                <td>2026.02</td>
                <td>{isKo ? '위험 등급별 규제, 금지 AI 목록, 투명성 의무' : 'Risk-level regulation, prohibited AI list, transparency obligations'}</td>
              </tr>
              <tr>
                <td>{isKo ? '한국 AI 기본법' : 'Korea AI Basic Law'}</td>
                <td>{isKo ? '대한민국' : 'South Korea'}</td>
                <td>2026.01</td>
                <td>{isKo ? 'AI 영향평가 의무화, AI 윤리위원회, 개발자 책임' : 'Mandatory AI impact assessment, AI ethics committee, developer accountability'}</td>
              </tr>
              <tr>
                <td>{isKo ? '미국 AI 행정명령' : 'US AI Executive Order'}</td>
                <td>{isKo ? '미국' : 'United States'}</td>
                <td>2025.10</td>
                <td>{isKo ? 'AI 안전 테스트 의무, 연방기관 AI 가이드라인' : 'Mandatory AI safety testing, federal agency AI guidelines'}</td>
              </tr>
            </tbody>
          </table>

          <h3>{isKo ? '기업의 대응 전략' : 'Enterprise Response Strategies'}</h3>
          <ol>
            <li><strong>{isKo ? 'AI 거버넌스 체계 구축' : 'Build AI Governance Framework'}</strong>: {isKo ? 'AI 윤리 위원회 설치, AI 개발/배포 정책 수립' : 'Establish AI ethics committee, develop AI development/deployment policies'}</li>
            <li><strong>{isKo ? 'AI 영향 평가 프로세스' : 'AI Impact Assessment Process'}</strong>: {isKo ? '고위험 AI 시스템에 대한 사전 영향 평가 수행' : 'Conduct pre-deployment impact assessments for high-risk AI systems'}</li>
            <li><strong>{isKo ? '투명성 보고 시스템' : 'Transparency Reporting System'}</strong>: {isKo ? 'AI 의사결정 과정의 설명 가능성(XAI) 확보' : 'Ensure explainability (XAI) in AI decision-making processes'}</li>
            <li><strong>{isKo ? '데이터 거버넌스 강화' : 'Strengthen Data Governance'}</strong>: {isKo ? '학습 데이터의 편향 감사, 출처 추적 체계 마련' : 'Establish bias auditing and provenance tracking for training data'}</li>
          </ol>

          <TipBox type="warning">
            <p>{isKo ? 'EU AI Act 위반 시 최대 3,500만 유로 또는 전 세계 매출의 7% 중 높은 금액이 과징금으로 부과됩니다. 한국 AI 기본법도 최대 매출액의 3% 과징금을 규정하고 있어, 규제 준수는 선택이 아닌 필수입니다.' : 'EU AI Act violations carry fines up to 35 million euros or 7% of global revenue (whichever is higher). Korea\'s AI Basic Law also prescribes fines up to 3% of revenue, making compliance mandatory, not optional.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'enterprise',
      icon: 'fa-building',
      labelKo: '엔터프라이즈 AI',
      labelEn: 'Enterprise AI',
      content: (
        <>
          <h2>{isKo ? '엔터프라이즈 AI: 생산성 혁명' : 'Enterprise AI: The Productivity Revolution'}</h2>
          <p>
            {isKo
              ? '생성형 AI가 기업의 핵심 업무 프로세스에 깊숙이 통합되면서 "AI-Native 기업"이라는 새로운 패러다임이 등장했습니다. Microsoft Copilot, Google Duet AI, Salesforce Einstein 등 엔터프라이즈 AI 도구가 조직의 표준 도구로 자리잡고 있습니다.'
              : 'As generative AI integrates deeply into core business processes, a new paradigm of "AI-Native Enterprise" has emerged. Enterprise AI tools like Microsoft Copilot, Google Duet AI, and Salesforce Einstein are becoming standard organizational tools.'}
          </p>

          <h3>{isKo ? 'Copilot 생태계의 확장' : 'Expansion of the Copilot Ecosystem'}</h3>
          <ul>
            <li><strong>Microsoft 365 Copilot</strong>: {isKo ? 'Word, Excel, PowerPoint, Teams 전 제품군에 AI 통합. 평균 생산성 40% 향상' : 'AI integrated across Word, Excel, PowerPoint, Teams. Average 40% productivity improvement'}</li>
            <li><strong>GitHub Copilot</strong>: {isKo ? '코드 자동 완성을 넘어 에이전트 모드로 전체 기능 구현 가능' : 'Beyond auto-completion, agent mode enables full feature implementation'}</li>
            <li><strong>Salesforce Einstein</strong>: {isKo ? 'CRM 데이터 기반 예측, 자동 이메일 작성, 리드 스코어링' : 'CRM data-based predictions, auto email writing, lead scoring'}</li>
            <li><strong>ServiceNow AI</strong>: {isKo ? 'IT 서비스 관리, 워크플로우 자동화, 인시던트 자동 분류' : 'IT service management, workflow automation, incident auto-classification'}</li>
          </ul>

          <h3>{isKo ? 'ROI 사례 분석' : 'ROI Case Analysis'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '기업' : 'Company'}</th>
                <th>{isKo ? '도입 AI' : 'AI Deployed'}</th>
                <th>{isKo ? '효과' : 'Impact'}</th>
                <th>ROI</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{isKo ? 'A 금융사' : 'Finance Co. A'}</td>
                <td>{isKo ? 'AI 문서 자동화' : 'AI Document Automation'}</td>
                <td>{isKo ? '문서 처리 시간 78% 단축' : '78% reduction in document processing time'}</td>
                <td>520%</td>
              </tr>
              <tr>
                <td>{isKo ? 'B 제조업체' : 'Manufacturer B'}</td>
                <td>{isKo ? 'AI 품질 검사' : 'AI Quality Inspection'}</td>
                <td>{isKo ? '불량률 92% 감소, 인력 30% 재배치' : '92% defect reduction, 30% workforce redeployment'}</td>
                <td>380%</td>
              </tr>
              <tr>
                <td>{isKo ? 'C 유통사' : 'Retailer C'}</td>
                <td>{isKo ? 'AI 수요 예측' : 'AI Demand Forecasting'}</td>
                <td>{isKo ? '재고 비용 35% 절감, 품절률 60% 감소' : '35% inventory cost reduction, 60% stockout decrease'}</td>
                <td>290%</td>
              </tr>
            </tbody>
          </table>

          <TipBox type="tip">
            <p>{isKo ? '엔터프라이즈 AI 도입의 핵심 성공 요인은 "기술"이 아니라 "변화 관리"입니다. 직원 교육, 프로세스 재설계, 데이터 품질 확보의 3가지가 선행되어야 AI 도입 효과를 극대화할 수 있습니다.' : 'The key success factor for enterprise AI adoption is not "technology" but "change management." Three prerequisites — employee training, process redesign, and data quality assurance — must precede AI deployment to maximize effectiveness.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'future',
      icon: 'fa-telescope',
      labelKo: '미래 전망 2027~2030',
      labelEn: 'Future Outlook 2027-2030',
      content: (
        <>
          <h2>{isKo ? '미래 전망: 2027~2030' : 'Future Outlook: 2027-2030'}</h2>
          <p>
            {isKo
              ? '현재의 AI 발전 속도를 고려할 때, 2027~2030년에는 현재와는 질적으로 다른 수준의 AI 기술이 등장할 것으로 예측됩니다. AGI, 양자+AI, 뇌-컴퓨터 인터페이스, 완전 자율 시스템 등 혁신적 기술의 실현 가능성을 분석합니다.'
              : 'Given the current pace of AI advancement, qualitatively different levels of AI technology are predicted to emerge in 2027-2030. We analyze the feasibility of revolutionary technologies including AGI, quantum+AI, brain-computer interfaces, and fully autonomous systems.'}
          </p>

          <h3>{isKo ? 'AGI(범용 인공지능)' : 'AGI (Artificial General Intelligence)'}</h3>
          <ul>
            <li><strong>{isKo ? '정의' : 'Definition'}</strong>: {isKo ? '인간 수준의 범용적 문제 해결 능력을 갖춘 AI' : 'AI with human-level general problem-solving capabilities'}</li>
            <li><strong>{isKo ? '현 위치' : 'Current Status'}</strong>: {isKo ? '특정 영역에서 인간 초과 성능, 범용성은 아직 제한적' : 'Superhuman in specific domains, general capability still limited'}</li>
            <li><strong>{isKo ? '예상 시기' : 'Expected Timeline'}</strong>: {isKo ? '전문가 의견 분산 (2028~2040), 정의에 따라 달라짐' : 'Expert opinions vary (2028-2040), depends on definition'}</li>
          </ul>

          <h3>{isKo ? '양자컴퓨팅 + AI 융합' : 'Quantum Computing + AI Convergence'}</h3>
          <ul>
            <li><strong>{isKo ? '약물 발견' : 'Drug Discovery'}</strong>: {isKo ? '분자 시뮬레이션 속도 10만 배 향상으로 신약 개발 기간 단축' : '100,000x molecular simulation speed improvement shortening drug development'}</li>
            <li><strong>{isKo ? '최적화 문제' : 'Optimization Problems'}</strong>: {isKo ? '물류, 금융 포트폴리오, 에너지 분배의 초대규모 최적화' : 'Hyper-scale optimization in logistics, financial portfolios, energy distribution'}</li>
            <li><strong>{isKo ? '암호화' : 'Cryptography'}</strong>: {isKo ? '양자 내성 암호(PQC)로의 전환 필수화' : 'Mandatory transition to post-quantum cryptography (PQC)'}</li>
          </ul>

          <h3>{isKo ? '뇌-컴퓨터 인터페이스(BCI)' : 'Brain-Computer Interface (BCI)'}</h3>
          <p>
            {isKo
              ? 'Neuralink의 임상 시험 진전과 비침습 BCI 기술의 발전으로, 생각만으로 디바이스를 제어하는 시대가 가까워지고 있습니다. 초기에는 의료(마비 환자 재활)에서 시작하여 점차 일반 소비자 시장으로 확대될 전망입니다.'
              : 'With Neuralink\'s clinical trial progress and advances in non-invasive BCI technology, the era of controlling devices with thought alone is approaching. Starting in medical applications (paralysis patient rehabilitation), it will gradually expand to consumer markets.'}
          </p>

          <h3>{isKo ? '자율 시스템' : 'Autonomous Systems'}</h3>
          <ol>
            <li><strong>{isKo ? 'Level 5 자율주행' : 'Level 5 Autonomous Driving'}</strong>: {isKo ? '2028년 제한 지역 상용화 예상' : 'Expected limited-area commercialization by 2028'}</li>
            <li><strong>{isKo ? '자율 로봇 배송' : 'Autonomous Robot Delivery'}</strong>: {isKo ? '2027년부터 도시 지역 확대 배치' : 'Expanding urban deployment from 2027'}</li>
            <li><strong>{isKo ? 'AI 과학자' : 'AI Scientists'}</strong>: {isKo ? '가설 수립부터 실험 설계, 논문 작성까지 자율 수행' : 'Autonomous execution from hypothesis to experiment design to paper writing'}</li>
          </ol>

          <TipBox type="important">
            <p>{isKo ? '미래 기술에 대비하는 가장 좋은 전략은 "기초 역량 강화"입니다. 수학적 사고력, 시스템 설계 능력, 윤리적 판단력은 어떤 기술이 등장하든 변하지 않는 핵심 역량입니다.' : 'The best strategy to prepare for future technology is "strengthening fundamentals." Mathematical thinking, systems design ability, and ethical judgment are core competencies that remain constant regardless of emerging technologies.'}</p>
          </TipBox>
        </>
      ),
    },
  ];

  return (
    <GuidePage
      titleKo="AI 트렌드 2026"
      titleEn="AI Trends 2026"
      subtitleKo="2026년 AI 분야의 핵심 트렌드와 시장 동향을 분석합니다."
      subtitleEn="Analyze key AI trends and market developments in 2026."
      icon="fa-chart-line"
      iconColor="#DC2626"
      path="/trends"
      sections={sections}
    />
  );
}
