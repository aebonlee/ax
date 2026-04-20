import GuidePage from '../../components/GuidePage';
import TipBox from '../../components/TipBox';
import { useLanguage } from '../../contexts/LanguageContext';
import type { ReactElement } from 'react';
import type { GuideSection } from '../../components/GuidePage';

export default function AXStrategy(): ReactElement {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  const sections: GuideSection[] = [
    {
      id: 'framework',
      icon: 'fa-chess-board',
      labelKo: 'AI 전략 프레임워크',
      labelEn: 'AI Strategy Framework',
      content: (
        <>
          <h2>{isKo ? 'AI 전략 프레임워크' : 'AI Strategy Framework'}</h2>
          <p>
            {isKo
              ? '성공적인 AI 전환(AX)은 체계적인 전략 프레임워크를 기반으로 합니다. 단순히 기술을 도입하는 것이 아니라, 비즈니스 목표와 AI 가능성의 교차점에서 핵심 과제를 도출하고 단계적으로 실행해야 합니다.'
              : 'Successful AI transformation (AX) is built on a systematic strategy framework. Rather than simply adopting technology, it requires identifying key challenges at the intersection of business goals and AI possibilities, then executing them in stages.'}
          </p>

          <h3>{isKo ? '5단계 전략 프레임워크' : '5-Stage Strategy Framework'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '단계' : 'Stage'}</th>
                <th>{isKo ? '활동' : 'Activities'}</th>
                <th>{isKo ? '산출물' : 'Deliverables'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. {isKo ? '비전 수립' : 'Vision'}</strong></td>
                <td>{isKo ? 'AI 전환 목표 정의, 경영진 합의' : 'Define AX goals, executive alignment'}</td>
                <td>{isKo ? 'AI 비전 선언문, 전략 방향성' : 'AI Vision Statement, Strategic Direction'}</td>
              </tr>
              <tr>
                <td><strong>2. {isKo ? '역량 진단' : 'Assessment'}</strong></td>
                <td>{isKo ? '현재 데이터·기술·조직 수준 평가' : 'Assess current data, tech, org levels'}</td>
                <td>{isKo ? 'AI 성숙도 평가 보고서' : 'AI Maturity Assessment Report'}</td>
              </tr>
              <tr>
                <td><strong>3. {isKo ? '기회 식별' : 'Opportunity'}</strong></td>
                <td>{isKo ? 'AI 적용 가능 영역 탐색, Use Case 발굴' : 'Explore AI-applicable areas, discover use cases'}</td>
                <td>{isKo ? 'Use Case 목록, 기회 맵' : 'Use Case List, Opportunity Map'}</td>
              </tr>
              <tr>
                <td><strong>4. {isKo ? '우선순위' : 'Prioritization'}</strong></td>
                <td>{isKo ? '영향력·실현 가능성 기반 과제 선정' : 'Select projects based on impact & feasibility'}</td>
                <td>{isKo ? '과제 우선순위 매트릭스' : 'Priority Matrix'}</td>
              </tr>
              <tr>
                <td><strong>5. {isKo ? '로드맵' : 'Roadmap'}</strong></td>
                <td>{isKo ? '단기·중기·장기 실행 계획 수립' : 'Develop short/mid/long-term execution plans'}</td>
                <td>{isKo ? '3개년 AI 로드맵' : '3-Year AI Roadmap'}</td>
              </tr>
            </tbody>
          </table>

          <h3>{isKo ? '전략 수립 핵심 원칙' : 'Key Strategy Principles'}</h3>
          <ul>
            <li><strong>{isKo ? '비즈니스 우선' : 'Business First'}</strong>: {isKo ? '기술 중심이 아닌 비즈니스 문제 해결 관점에서 접근' : 'Approach from business problem-solving, not technology-first'}</li>
            <li><strong>{isKo ? '점진적 확대' : 'Incremental Scaling'}</strong>: {isKo ? 'PoC → Pilot → Scale-up의 단계적 확대 전략' : 'Phased expansion: PoC → Pilot → Scale-up'}</li>
            <li><strong>{isKo ? '데이터 기반' : 'Data-Driven'}</strong>: {isKo ? '모든 의사결정을 데이터와 실험 결과로 검증' : 'Validate all decisions with data and experimental results'}</li>
            <li><strong>{isKo ? '조직 연계' : 'Organizational Alignment'}</strong>: {isKo ? 'IT 부서뿐 아니라 현업 부서와의 긴밀한 협업 체계 구축' : 'Build close collaboration not just with IT but with business units'}</li>
          </ul>

          <TipBox type="important">
            <p>{isKo ? 'AI 전략은 기업의 디지털 전환(DX) 전략과 반드시 연계되어야 합니다. 독립적인 AI 프로젝트가 아닌, 전사 전략의 일부로 AI를 포지셔닝하세요.' : 'AI strategy must be aligned with the company\'s digital transformation (DX) strategy. Position AI as part of the enterprise strategy, not as independent AI projects.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'capability',
      icon: 'fa-people-group',
      labelKo: '조직 AI 역량 구축',
      labelEn: 'Building AI Capabilities',
      content: (
        <>
          <h2>{isKo ? '조직 AI 역량 구축' : 'Building Organizational AI Capabilities'}</h2>
          <p>
            {isKo
              ? 'AI 역량은 단순히 기술 인력을 채용하는 것이 아닙니다. 데이터 역량, 기술 역량, 비즈니스 역량, 조직 역량의 4가지 축을 종합적으로 개발해야 지속 가능한 AI 전환이 가능합니다.'
              : 'AI capabilities are not simply about hiring technical talent. Sustainable AI transformation requires comprehensive development across 4 axes: data, technical, business, and organizational capabilities.'}
          </p>

          <h3>{isKo ? '4대 역량 축' : 'Four Capability Axes'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '역량 축' : 'Axis'}</th>
                <th>{isKo ? '핵심 요소' : 'Key Elements'}</th>
                <th>{isKo ? '성숙도 지표' : 'Maturity Indicators'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>{isKo ? '데이터 역량' : 'Data'}</strong></td>
                <td>{isKo ? '수집, 정제, 저장, 거버넌스' : 'Collection, cleansing, storage, governance'}</td>
                <td>{isKo ? '데이터 품질 점수, 접근성' : 'Data quality score, accessibility'}</td>
              </tr>
              <tr>
                <td><strong>{isKo ? '기술 역량' : 'Technical'}</strong></td>
                <td>{isKo ? 'ML/DL, MLOps, 클라우드, API' : 'ML/DL, MLOps, Cloud, API'}</td>
                <td>{isKo ? '모델 배포 속도, 인프라 확장성' : 'Model deployment speed, infra scalability'}</td>
              </tr>
              <tr>
                <td><strong>{isKo ? '비즈니스 역량' : 'Business'}</strong></td>
                <td>{isKo ? '문제 정의, 도메인 지식, 가치 측정' : 'Problem framing, domain knowledge, value measurement'}</td>
                <td>{isKo ? 'AI Use Case 발굴 건수, ROI' : 'AI use cases discovered, ROI'}</td>
              </tr>
              <tr>
                <td><strong>{isKo ? '조직 역량' : 'Organizational'}</strong></td>
                <td>{isKo ? '문화, 변화 관리, 리더십, 협업' : 'Culture, change management, leadership, collaboration'}</td>
                <td>{isKo ? 'AI 리터러시율, 채택률' : 'AI literacy rate, adoption rate'}</td>
              </tr>
            </tbody>
          </table>

          <h3>{isKo ? '역량 성숙도 5단계' : 'Capability Maturity 5 Levels'}</h3>
          <ol>
            <li><strong>Level 1 - {isKo ? '초기' : 'Initial'}</strong>: {isKo ? '산발적 AI 실험, 개인 수준의 활용' : 'Sporadic AI experiments, individual-level usage'}</li>
            <li><strong>Level 2 - {isKo ? '반복' : 'Repeatable'}</strong>: {isKo ? '일부 팀에서 체계적 AI 프로젝트 진행' : 'Some teams running systematic AI projects'}</li>
            <li><strong>Level 3 - {isKo ? '정의' : 'Defined'}</strong>: {isKo ? '전사 표준 프로세스와 플랫폼 구축' : 'Enterprise-wide standard processes and platform established'}</li>
            <li><strong>Level 4 - {isKo ? '관리' : 'Managed'}</strong>: {isKo ? 'AI 성과를 정량적으로 측정·관리' : 'Quantitatively measuring and managing AI performance'}</li>
            <li><strong>Level 5 - {isKo ? '최적화' : 'Optimized'}</strong>: {isKo ? '자동화된 지속 개선, AI-Native 조직' : 'Automated continuous improvement, AI-Native organization'}</li>
          </ol>

          <h3>{isKo ? 'Gap 분석과 역량 개발 계획' : 'Gap Analysis & Development Plan'}</h3>
          <ul>
            <li><strong>{isKo ? '현재 수준 진단' : 'Current State Diagnosis'}</strong>: {isKo ? '설문, 인터뷰, 프로젝트 리뷰를 통한 객관적 평가' : 'Objective assessment via surveys, interviews, project reviews'}</li>
            <li><strong>{isKo ? '목표 수준 설정' : 'Target Setting'}</strong>: {isKo ? '산업 벤치마크와 전략 목표 기반 목표 수준 결정' : 'Determine targets based on industry benchmarks and strategic goals'}</li>
            <li><strong>{isKo ? 'Gap 분석' : 'Gap Analysis'}</strong>: {isKo ? '각 축별 현재-목표 간 격차 식별 및 원인 분석' : 'Identify gaps between current and target per axis, analyze root causes'}</li>
            <li><strong>{isKo ? '개발 계획' : 'Development Plan'}</strong>: {isKo ? '단기(교육), 중기(프로젝트), 장기(문화)로 구분한 실행 계획' : 'Execution plan divided into short-term (training), mid-term (projects), long-term (culture)'}</li>
          </ul>

          <TipBox type="tip">
            <p>{isKo ? '조직 역량은 하루아침에 구축되지 않습니다. 6개월 단위로 성숙도를 재평가하고, Quick Win 프로젝트로 조직의 자신감을 먼저 구축하세요.' : 'Organizational capabilities are not built overnight. Re-assess maturity every 6 months and build organizational confidence through Quick Win projects first.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'governance',
      icon: 'fa-shield-halved',
      labelKo: 'AI 거버넌스',
      labelEn: 'AI Governance',
      content: (
        <>
          <h2>{isKo ? 'AI 거버넌스' : 'AI Governance'}</h2>
          <p>
            {isKo
              ? 'AI 거버넌스는 AI 시스템의 개발·배포·운영 전 과정에 대한 원칙, 프로세스, 조직 체계를 의미합니다. 신뢰할 수 있는 AI를 위해 투명성, 책임성, 안전성을 체계적으로 관리해야 합니다.'
              : 'AI governance refers to the principles, processes, and organizational systems covering the entire lifecycle of AI development, deployment, and operations. Systematic management of transparency, accountability, and safety is essential for trustworthy AI.'}
          </p>

          <h3>{isKo ? '거버넌스 프레임워크 구성요소' : 'Governance Framework Components'}</h3>
          <ul>
            <li><strong>{isKo ? '원칙 (Principles)' : 'Principles'}</strong>: {isKo ? '조직의 AI 활용 기본 원칙과 가치 선언' : 'Organizational AI usage principles and value declarations'}</li>
            <li><strong>{isKo ? '프로세스 (Process)' : 'Process'}</strong>: {isKo ? '개발 단계별 검증·승인 절차, 위험 평가 프로세스' : 'Stage-gate verification/approval procedures, risk assessment processes'}</li>
            <li><strong>{isKo ? '조직 체계 (Organization)' : 'Organization'}</strong>: {isKo ? 'AI 윤리위원회, CoE(Center of Excellence), 역할·책임 정의' : 'AI Ethics Committee, CoE (Center of Excellence), role & responsibility definitions'}</li>
            <li><strong>{isKo ? '모니터링 (Monitoring)' : 'Monitoring'}</strong>: {isKo ? '모델 성능 추적, 편향성 감지, 드리프트 모니터링' : 'Model performance tracking, bias detection, drift monitoring'}</li>
          </ul>

          <h3>{isKo ? 'AI 거버넌스 조직 구조' : 'AI Governance Organizational Structure'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '조직' : 'Body'}</th>
                <th>{isKo ? '역할' : 'Role'}</th>
                <th>{isKo ? '구성원' : 'Members'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>{isKo ? 'AI 윤리위원회' : 'AI Ethics Committee'}</strong></td>
                <td>{isKo ? '최고 의사결정, 정책 승인' : 'Top decision-making, policy approval'}</td>
                <td>{isKo ? 'C-레벨, 외부 전문가' : 'C-level, external experts'}</td>
              </tr>
              <tr>
                <td><strong>{isKo ? 'AI CoE' : 'AI CoE'}</strong></td>
                <td>{isKo ? '기술 표준, 플랫폼, 교육' : 'Tech standards, platform, education'}</td>
                <td>{isKo ? 'AI 엔지니어, 데이터 사이언티스트' : 'AI engineers, data scientists'}</td>
              </tr>
              <tr>
                <td><strong>{isKo ? '프로젝트 팀' : 'Project Teams'}</strong></td>
                <td>{isKo ? '과제 실행, 가이드라인 준수' : 'Project execution, guideline compliance'}</td>
                <td>{isKo ? '현업+기술 혼합팀' : 'Business + Tech mixed teams'}</td>
              </tr>
              <tr>
                <td><strong>{isKo ? '감사팀' : 'Audit Team'}</strong></td>
                <td>{isKo ? '준수 여부 점검, 개선 권고' : 'Compliance review, improvement recommendations'}</td>
                <td>{isKo ? '내부감사, 법무, 컴플라이언스' : 'Internal audit, legal, compliance'}</td>
              </tr>
            </tbody>
          </table>

          <h3>{isKo ? '모델 라이프사이클 거버넌스' : 'Model Lifecycle Governance'}</h3>
          <ol>
            <li><strong>{isKo ? '기획 단계' : 'Planning'}</strong>: {isKo ? '사용 목적 명확화, 위험 등급 분류, 윤리 영향 평가' : 'Clarify purpose, classify risk level, ethical impact assessment'}</li>
            <li><strong>{isKo ? '개발 단계' : 'Development'}</strong>: {isKo ? '데이터 편향 검사, 모델 검증, 문서화' : 'Data bias check, model validation, documentation'}</li>
            <li><strong>{isKo ? '배포 단계' : 'Deployment'}</strong>: {isKo ? '배포 승인 게이트, A/B 테스트, 롤백 계획' : 'Deployment approval gate, A/B testing, rollback plan'}</li>
            <li><strong>{isKo ? '운영 단계' : 'Operation'}</strong>: {isKo ? '성능 모니터링, 사용자 피드백, 정기 감사' : 'Performance monitoring, user feedback, periodic audits'}</li>
            <li><strong>{isKo ? '폐기 단계' : 'Retirement'}</strong>: {isKo ? '모델 폐기 기준, 데이터 삭제, 이력 보존' : 'Model retirement criteria, data deletion, history preservation'}</li>
          </ol>

          <TipBox type="warning">
            <p>{isKo ? '거버넌스 없는 AI 도입은 규제 리스크, 평판 리스크, 운영 리스크를 초래합니다. 특히 금융·의료·공공 분야는 규제 준수가 필수적입니다.' : 'AI adoption without governance creates regulatory, reputational, and operational risks. Regulatory compliance is especially essential in finance, healthcare, and public sectors.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'ethics',
      icon: 'fa-balance-scale',
      labelKo: 'AI 윤리와 책임',
      labelEn: 'AI Ethics & Responsibility',
      content: (
        <>
          <h2>{isKo ? 'AI 윤리와 책임' : 'AI Ethics & Responsibility'}</h2>
          <p>
            {isKo
              ? 'AI 시스템이 사회에 미치는 영향이 커지면서, 공정성·투명성·안전성을 확보하는 것이 필수적인 요구사항이 되었습니다. EU AI Act를 비롯한 글로벌 규제가 강화되고 있으며, 기업은 선제적으로 AI 윤리를 내재화해야 합니다.'
              : 'As AI systems increasingly impact society, ensuring fairness, transparency, and safety has become essential. Global regulations including the EU AI Act are strengthening, and companies must proactively internalize AI ethics.'}
          </p>

          <h3>{isKo ? 'AI 윤리 5대 원칙' : '5 Principles of AI Ethics'}</h3>
          <ul>
            <li><strong>{isKo ? '공정성 (Fairness)' : 'Fairness'}</strong>: {isKo ? '성별, 인종, 나이 등에 의한 차별 없는 의사결정. 학습 데이터의 편향 검사와 결과의 공정성 검증 필수' : 'Non-discriminatory decisions regardless of gender, race, age. Training data bias checks and output fairness verification required'}</li>
            <li><strong>{isKo ? '투명성 (Transparency)' : 'Transparency'}</strong>: {isKo ? 'AI 의사결정 과정의 설명 가능성(XAI). 사용자에게 AI 사용 여부와 근거 공개' : 'Explainability of AI decision-making (XAI). Disclose AI usage and rationale to users'}</li>
            <li><strong>{isKo ? '프라이버시 (Privacy)' : 'Privacy'}</strong>: {isKo ? '개인정보 보호, 데이터 최소 수집, 목적 외 사용 금지, 동의 기반 처리' : 'Personal data protection, minimal collection, purpose limitation, consent-based processing'}</li>
            <li><strong>{isKo ? '안전성 (Safety)' : 'Safety'}</strong>: {isKo ? 'AI 시스템의 안정적 동작 보장, 오류 시 안전 장치, 사이버 보안' : 'Ensure stable AI system operation, fail-safes for errors, cybersecurity'}</li>
            <li><strong>{isKo ? '책임성 (Accountability)' : 'Accountability'}</strong>: {isKo ? 'AI 의사결정에 대한 책임 소재 명확화. 문제 발생 시 구제 절차 마련' : 'Clear accountability for AI decisions. Establish remediation procedures for issues'}</li>
          </ul>

          <h3>{isKo ? '주요 AI 규제 동향' : 'Key AI Regulatory Trends'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '규제' : 'Regulation'}</th>
                <th>{isKo ? '대상' : 'Scope'}</th>
                <th>{isKo ? '핵심 요구사항' : 'Key Requirements'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>EU AI Act</strong></td>
                <td>{isKo ? 'EU 시장 출시 AI 시스템' : 'AI systems in EU market'}</td>
                <td>{isKo ? '위험 등급 분류, 고위험 AI 인증, 투명성 의무' : 'Risk classification, high-risk AI certification, transparency obligations'}</td>
              </tr>
              <tr>
                <td><strong>{isKo ? '국내 AI 기본법' : 'Korea AI Basic Act'}</strong></td>
                <td>{isKo ? '국내 AI 개발·활용 전반' : 'All domestic AI dev & usage'}</td>
                <td>{isKo ? '고위험 AI 영향평가, 신뢰성 확보, 이용자 보호' : 'High-risk AI impact assessment, reliability, user protection'}</td>
              </tr>
              <tr>
                <td><strong>NIST AI RMF</strong></td>
                <td>{isKo ? '미국 AI 리스크 관리' : 'US AI risk management'}</td>
                <td>{isKo ? 'AI 리스크 식별·평가·관리·모니터링' : 'AI risk identification, assessment, management, monitoring'}</td>
              </tr>
            </tbody>
          </table>

          <h3>{isKo ? 'EU AI Act 위험 등급 분류' : 'EU AI Act Risk Classification'}</h3>
          <ol>
            <li><strong>{isKo ? '금지 (Unacceptable Risk)' : 'Unacceptable Risk'}</strong>: {isKo ? '사회적 점수 매기기, 실시간 원격 생체인식 (원칙적 금지)' : 'Social scoring, real-time remote biometrics (prohibited in principle)'}</li>
            <li><strong>{isKo ? '고위험 (High Risk)' : 'High Risk'}</strong>: {isKo ? '채용, 신용평가, 의료, 사법 — 엄격한 규제 적용' : 'Recruitment, credit scoring, healthcare, judiciary — strict regulations'}</li>
            <li><strong>{isKo ? '제한적 위험 (Limited Risk)' : 'Limited Risk'}</strong>: {isKo ? '챗봇, 딥페이크 — 투명성 의무(AI 사용 고지)' : 'Chatbots, deepfakes — transparency obligations (AI disclosure)'}</li>
            <li><strong>{isKo ? '최소 위험 (Minimal Risk)' : 'Minimal Risk'}</strong>: {isKo ? '스팸 필터, 게임 AI — 자율 규제' : 'Spam filters, game AI — self-regulation'}</li>
          </ol>

          <TipBox type="important">
            <p>{isKo ? 'EU AI Act는 2024년 발효, 2026년 전면 시행됩니다. EU 시장에 서비스하는 국내 기업도 반드시 준수해야 하며, 위반 시 최대 3,500만 유로 또는 전 세계 매출의 7% 과징금이 부과됩니다.' : 'The EU AI Act was enacted in 2024 and fully enforced in 2026. Korean companies serving the EU market must comply, with penalties up to 35 million euros or 7% of global turnover for violations.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'talent',
      icon: 'fa-user-graduate',
      labelKo: 'AI 인재 전략',
      labelEn: 'AI Talent Strategy',
      content: (
        <>
          <h2>{isKo ? 'AI 인재 전략' : 'AI Talent Strategy'}</h2>
          <p>
            {isKo
              ? 'AI 전환의 성공은 결국 사람에 달려 있습니다. AI 인재 확보는 외부 채용, 내부 육성, 파트너십의 3가지 트랙으로 접근하며, 특히 도메인 전문가의 AI 리터러시 향상과 시민 개발자(Citizen Developer) 육성이 핵심 전략입니다.'
              : 'The success of AI transformation ultimately depends on people. AI talent acquisition follows 3 tracks: external hiring, internal development, and partnerships. Key strategies include improving AI literacy of domain experts and cultivating Citizen Developers.'}
          </p>

          <h3>{isKo ? '3-Track 인재 전략' : '3-Track Talent Strategy'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '트랙' : 'Track'}</th>
                <th>{isKo ? '대상' : 'Target'}</th>
                <th>{isKo ? '전략' : 'Strategy'}</th>
                <th>{isKo ? '기간' : 'Timeline'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>{isKo ? '외부 채용' : 'External Hiring'}</strong></td>
                <td>{isKo ? 'AI 엔지니어, 데이터 사이언티스트' : 'AI Engineers, Data Scientists'}</td>
                <td>{isKo ? '경쟁력 있는 보상, 도전적 과제, 성장 기회 제공' : 'Competitive compensation, challenging projects, growth opportunities'}</td>
                <td>{isKo ? '즉시' : 'Immediate'}</td>
              </tr>
              <tr>
                <td><strong>{isKo ? '내부 육성' : 'Internal Development'}</strong></td>
                <td>{isKo ? '기존 임직원, 도메인 전문가' : 'Existing employees, domain experts'}</td>
                <td>{isKo ? '교육 프로그램, 자격증, 프로젝트 참여, 멘토링' : 'Training programs, certifications, project involvement, mentoring'}</td>
                <td>{isKo ? '6-18개월' : '6-18 months'}</td>
              </tr>
              <tr>
                <td><strong>{isKo ? '파트너십' : 'Partnership'}</strong></td>
                <td>{isKo ? '외부 전문기관, 대학, 스타트업' : 'External agencies, universities, startups'}</td>
                <td>{isKo ? '공동 프로젝트, 기술 이전, 인턴십, 산학 협력' : 'Joint projects, tech transfer, internships, industry-academia'}</td>
                <td>{isKo ? '지속' : 'Ongoing'}</td>
              </tr>
            </tbody>
          </table>

          <h3>{isKo ? 'AI 인재 유형별 역할' : 'AI Talent Roles by Type'}</h3>
          <ul>
            <li><strong>{isKo ? 'AI 리더' : 'AI Leader'}</strong>: {isKo ? 'AI 전략 수립, 비전 제시, 조직 변화 주도 (CAIO, AI 팀장)' : 'AI strategy, vision, change leadership (CAIO, AI team lead)'}</li>
            <li><strong>{isKo ? 'AI 엔지니어' : 'AI Engineer'}</strong>: {isKo ? '모델 개발·배포·운영, MLOps 파이프라인 구축' : 'Model development/deployment/operation, MLOps pipeline'}</li>
            <li><strong>{isKo ? '데이터 엔지니어' : 'Data Engineer'}</strong>: {isKo ? '데이터 파이프라인, 품질 관리, 인프라 구축' : 'Data pipeline, quality management, infrastructure'}</li>
            <li><strong>{isKo ? 'AI 프로덕트 매니저' : 'AI Product Manager'}</strong>: {isKo ? 'AI 제품 기획, 요구사항 정의, 비즈니스 연계' : 'AI product planning, requirements, business alignment'}</li>
            <li><strong>{isKo ? '시민 개발자' : 'Citizen Developer'}</strong>: {isKo ? '노코드/로우코드 AI 도구 활용, 업무 자동화 직접 구현' : 'No-code/low-code AI tool usage, direct work automation'}</li>
            <li><strong>{isKo ? 'AI 트레이너' : 'AI Trainer'}</strong>: {isKo ? 'AI 교육 설계·운영, 조직 내 AI 리터러시 확산' : 'AI training design & operation, spreading AI literacy within org'}</li>
          </ul>

          <h3>{isKo ? '내부 육성 프로그램 설계' : 'Internal Development Program Design'}</h3>
          <ol>
            <li><strong>{isKo ? '기초 리터러시' : 'Basic Literacy'}</strong>: {isKo ? '전 직원 대상 AI 개념·활용 이해 (2-4시간)' : 'AI concepts & applications for all employees (2-4 hours)'}</li>
            <li><strong>{isKo ? '실무 활용' : 'Practical Application'}</strong>: {isKo ? '직무별 AI 도구 실습, 프롬프트 엔지니어링 (16-40시간)' : 'Job-specific AI tools hands-on, prompt engineering (16-40 hours)'}</li>
            <li><strong>{isKo ? '심화 개발' : 'Advanced Development'}</strong>: {isKo ? '시민 개발자 양성, 데이터 분석, 자동화 구현 (40-80시간)' : 'Citizen developer cultivation, data analysis, automation (40-80 hours)'}</li>
            <li><strong>{isKo ? '전문가 과정' : 'Expert Track'}</strong>: {isKo ? 'AI 프로젝트 리드, 모델 개발, 아키텍처 설계 (200시간+)' : 'AI project lead, model development, architecture (200+ hours)'}</li>
          </ol>

          <TipBox type="tip">
            <p>{isKo ? 'AI 인재 전쟁에서 승리하려면 "채용"보다 "육성"에 집중하세요. 도메인 지식 + AI 스킬을 겸비한 하이브리드 인재가 순수 AI 전문가보다 비즈니스 가치를 더 빠르게 창출합니다.' : 'To win the AI talent war, focus on "development" over "hiring." Hybrid talent with domain knowledge + AI skills creates business value faster than pure AI specialists.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'roi',
      icon: 'fa-calculator',
      labelKo: 'AI ROI 측정',
      labelEn: 'AI ROI Measurement',
      content: (
        <>
          <h2>{isKo ? 'AI ROI 측정' : 'AI ROI Measurement'}</h2>
          <p>
            {isKo
              ? 'AI 투자에 대한 효과를 정량적·정성적으로 측정하는 것은 지속적인 AI 투자를 정당화하고, 전략적 의사결정을 지원하는 핵심 활동입니다. 비용 절감, 매출 증대, 리스크 감소, 고객 경험 향상의 4대 축으로 ROI를 체계적으로 관리합니다.'
              : 'Measuring AI investment effectiveness quantitatively and qualitatively is a core activity that justifies continuous AI investment and supports strategic decision-making. Systematically manage ROI across 4 axes: cost reduction, revenue growth, risk reduction, and customer experience improvement.'}
          </p>

          <h3>{isKo ? 'AI ROI 4대 가치 축' : '4 AI ROI Value Axes'}</h3>
          <table className="guide-table">
            <thead>
              <tr>
                <th>{isKo ? '가치 축' : 'Value Axis'}</th>
                <th>{isKo ? '측정 지표 (KPI)' : 'KPIs'}</th>
                <th>{isKo ? '예시' : 'Examples'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>{isKo ? '비용 절감' : 'Cost Reduction'}</strong></td>
                <td>{isKo ? '처리 시간 감소율, 인건비 절감, 오류 비용 감소' : 'Processing time reduction, labor cost savings, error cost decrease'}</td>
                <td>{isKo ? '문서 처리 자동화로 연간 5억 원 절감' : 'Document automation saves $400K annually'}</td>
              </tr>
              <tr>
                <td><strong>{isKo ? '매출 증대' : 'Revenue Growth'}</strong></td>
                <td>{isKo ? '전환율 향상, 교차판매율, 고객 생애가치' : 'Conversion rate, cross-sell rate, customer lifetime value'}</td>
                <td>{isKo ? 'AI 추천으로 전환율 23% 향상' : 'AI recommendations improve conversion by 23%'}</td>
              </tr>
              <tr>
                <td><strong>{isKo ? '리스크 감소' : 'Risk Reduction'}</strong></td>
                <td>{isKo ? '사기 탐지율, 장애 예측 정확도, 규제 위반 감소' : 'Fraud detection rate, failure prediction accuracy, compliance violations'}</td>
                <td>{isKo ? '이상 거래 탐지로 연간 손실 30% 감소' : 'Anomaly detection reduces annual losses by 30%'}</td>
              </tr>
              <tr>
                <td><strong>{isKo ? '고객 경험' : 'Customer Experience'}</strong></td>
                <td>{isKo ? 'NPS, 응답 시간, 해결률, 만족도' : 'NPS, response time, resolution rate, satisfaction'}</td>
                <td>{isKo ? 'AI 챗봇으로 응답 시간 80% 단축' : 'AI chatbot reduces response time by 80%'}</td>
              </tr>
            </tbody>
          </table>

          <h3>{isKo ? 'ROI 계산 공식' : 'ROI Calculation Formula'}</h3>
          <ul>
            <li><strong>{isKo ? '기본 ROI' : 'Basic ROI'}</strong>: {isKo ? '(AI로 인한 이익 - AI 투자 비용) / AI 투자 비용 x 100%' : '(AI Benefits - AI Investment Cost) / AI Investment Cost x 100%'}</li>
            <li><strong>{isKo ? '투자 비용 항목' : 'Investment Cost Items'}</strong>: {isKo ? '인프라, 인건비, 라이선스, 데이터, 교육, 유지보수' : 'Infrastructure, labor, licenses, data, training, maintenance'}</li>
            <li><strong>{isKo ? '이익 항목' : 'Benefit Items'}</strong>: {isKo ? '직접 비용 절감 + 매출 증대 + 리스크 감소 가치 + 무형 가치' : 'Direct cost savings + revenue growth + risk reduction value + intangible value'}</li>
          </ul>

          <h3>{isKo ? '측정 시 주의사항' : 'Measurement Considerations'}</h3>
          <ol>
            <li><strong>{isKo ? '기준선 설정' : 'Baseline Setting'}</strong>: {isKo ? 'AI 도입 전 현재 성과를 정확히 측정하여 비교 기준 확보' : 'Accurately measure current performance before AI adoption for comparison baseline'}</li>
            <li><strong>{isKo ? '시간 구분' : 'Time Horizon'}</strong>: {isKo ? '단기(3-6개월) 성과와 장기(1-3년) 전략적 가치를 구분하여 관리' : 'Distinguish short-term (3-6 months) results from long-term (1-3 years) strategic value'}</li>
            <li><strong>{isKo ? '간접 효과 포함' : 'Include Indirect Effects'}</strong>: {isKo ? '직접 효과뿐 아니라 직원 만족도, 브랜드 가치, 학습 효과 등 간접 가치도 측정' : 'Measure indirect value like employee satisfaction, brand value, learning effects alongside direct effects'}</li>
            <li><strong>{isKo ? '정기 리뷰' : 'Regular Review'}</strong>: {isKo ? '월간 KPI 트래킹, 분기별 ROI 리뷰, 연간 전략 재검토' : 'Monthly KPI tracking, quarterly ROI review, annual strategy reassessment'}</li>
          </ol>

          <TipBox type="example">
            <p>{isKo ? '글로벌 기업 사례: 맥킨지 조사에 따르면, AI를 전사적으로 도입한 기업은 평균 3-5배의 ROI를 달성하며, 투자 회수 기간은 12-18개월입니다. 다만 PoC 단계에서 멈추는 기업의 70%는 ROI를 달성하지 못합니다.' : 'Global case: According to McKinsey, companies with enterprise-wide AI adoption achieve 3-5x ROI on average with 12-18 month payback periods. However, 70% of companies stuck at PoC stage fail to achieve ROI.'}</p>
          </TipBox>
        </>
      ),
    },
  ];

  return (
    <GuidePage
      titleKo="AX 전략과 실행"
      titleEn="AX Strategy & Execution"
      subtitleKo="AI 전환 전략 수립부터 실행까지의 프레임워크를 학습합니다."
      subtitleEn="Learn frameworks from AI transformation strategy to execution."
      icon="fa-chess-knight"
      iconColor="#2563EB"
      path="/ax-strategy"
      sections={sections}
    />
  );
}
