import GuidePage from '../components/GuidePage';
import { useLanguage } from '../contexts/LanguageContext';
import type { ReactElement } from 'react';
import type { GuideSection } from '../components/GuidePage';

export default function Glossary(): ReactElement {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  const sections: GuideSection[] = [
    {
      id: 'ai-basic',
      icon: 'fa-brain',
      labelKo: 'AI 기본 용어',
      labelEn: 'AI Basics',
      content: (
        <>
          <h2>{isKo ? 'AI 기본 용어' : 'AI Basic Terms'}</h2>
          <table className="guide-table">
            <thead><tr><th>{isKo ? '용어' : 'Term'}</th><th>{isKo ? '설명' : 'Description'}</th></tr></thead>
            <tbody>
              <tr><td><strong>AI (Artificial Intelligence)</strong></td><td>{isKo ? '인간의 학습, 추론, 판단 능력을 컴퓨터로 구현한 기술' : 'Technology that implements human learning, reasoning, and judgment capabilities in computers'}</td></tr>
              <tr><td><strong>ML (Machine Learning)</strong></td><td>{isKo ? '데이터로부터 패턴을 학습하여 예측·분류하는 AI의 하위 분야' : 'AI subfield that learns patterns from data for prediction and classification'}</td></tr>
              <tr><td><strong>DL (Deep Learning)</strong></td><td>{isKo ? '다층 신경망을 활용한 기계학습. 이미지, 음성, 텍스트 인식에 탁월' : 'Machine learning using multi-layer neural networks. Excellent for image, speech, text recognition'}</td></tr>
              <tr><td><strong>LLM (Large Language Model)</strong></td><td>{isKo ? '대규모 텍스트 데이터로 학습된 언어 모델. GPT, Claude, Gemini 등' : 'Language models trained on large-scale text data. GPT, Claude, Gemini, etc.'}</td></tr>
              <tr><td><strong>GenAI (Generative AI)</strong></td><td>{isKo ? '텍스트, 이미지, 코드, 영상 등 새로운 콘텐츠를 생성하는 AI' : 'AI that generates new content such as text, images, code, and video'}</td></tr>
              <tr><td><strong>NLP (Natural Language Processing)</strong></td><td>{isKo ? '인간의 자연어를 컴퓨터가 이해하고 생성하는 기술' : 'Technology for computers to understand and generate human natural language'}</td></tr>
              <tr><td><strong>AGI (Artificial General Intelligence)</strong></td><td>{isKo ? '인간 수준의 범용 인공��능. 아직 실현되지 않은 목표' : 'Human-level general artificial intelligence. A goal not yet achieved'}</td></tr>
              <tr><td><strong>Transformer</strong></td><td>{isKo ? '2017년 구글이 발표한 딥러닝 아키텍처. ���재 대부분의 LLM의 기반' : 'Deep learning architecture by Google (2017). Foundation of most current LLMs'}</td></tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      id: 'ai-tech',
      icon: 'fa-microchip',
      labelKo: 'AI 기술 용어',
      labelEn: 'AI Technical',
      content: (
        <>
          <h2>{isKo ? 'AI 기술 용어' : 'AI Technical Terms'}</h2>
          <table className="guide-table">
            <thead><tr><th>{isKo ? '용어' : 'Term'}</th><th>{isKo ? '설명' : 'Description'}</th></tr></thead>
            <tbody>
              <tr><td><strong>RAG (Retrieval-Augmented Generation)</strong></td><td>{isKo ? '외부 지식을 검색하여 AI 응답의 정확도를 높이는 기술' : 'Technology that improves AI response accuracy by retrieving external knowledge'}</td></tr>
              <tr><td><strong>Fine-tuning</strong></td><td>{isKo ? '사전 학습된 모델을 특정 도메인 데이터로 추가 학습시키는 과정' : 'Process of additional training a pre-trained model with domain-specific data'}</td></tr>
              <tr><td><strong>Prompt Engineering</strong></td><td>{isKo ? 'AI 모델에 최적의 결과를 얻기 위해 입력(프롬프트)을 설계하는 기술' : 'Technique of designing inputs (prompts) to get optimal results from AI models'}</td></tr>
              <tr><td><strong>Embedding</strong></td><td>{isKo ? '텍스트를 수치 벡터로 변환하여 의미적 유사도를 계산하는 기술' : 'Technology for converting text to numerical vectors for semantic similarity calculation'}</td></tr>
              <tr><td><strong>Vector DB</strong></td><td>{isKo ? '벡터 데이터를 저장·검색하는 데이터베이스. RAG의 핵심 인프라' : 'Database for storing and searching vector data. Core infrastructure for RAG'}</td></tr>
              <tr><td><strong>MLOps</strong></td><td>{isKo ? 'ML 모델의 개발·배포·운영을 자동화하는 DevOps 방법론' : 'DevOps methodology for automating ML model development, deployment, and operations'}</td></tr>
              <tr><td><strong>AI Agent</strong></td><td>{isKo ? '자율적으로 도구를 사용하고 작업을 수행하는 AI 시스템' : 'AI system that autonomously uses tools and performs tasks'}</td></tr>
              <tr><td><strong>Multimodal AI</strong></td><td>{isKo ? '텍스트, 이미지, 음성, 영상 등 여러 유형의 데이터를 처리하는 AI' : 'AI that processes multiple types of data: text, image, audio, video'}</td></tr>
              <tr><td><strong>SLM (Small Language Model)</strong></td><td>{isKo ? '경량화된 언어 모델. 온디바이스 실행과 비용 효율이 장점' : 'Lightweight language models. Advantages: on-device execution and cost efficiency'}</td></tr>
              <tr><td><strong>Hallucination</strong></td><td>{isKo ? 'AI가 사실이 아닌 정보를 마치 사실처럼 생성하는 현상' : 'Phenomenon where AI generates false information as if it were factual'}</td></tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      id: 'dx-terms',
      icon: 'fa-laptop-code',
      labelKo: 'DX 용어',
      labelEn: 'DX Terms',
      content: (
        <>
          <h2>{isKo ? 'DX (디지털 전환) 용어' : 'DX (Digital Transformation) Terms'}</h2>
          <table className="guide-table">
            <thead><tr><th>{isKo ? '용어' : 'Term'}</th><th>{isKo ? '설명' : 'Description'}</th></tr></thead>
            <tbody>
              <tr><td><strong>DX (Digital Transformation)</strong></td><td>{isKo ? '디지털 기술로 비즈니스 모델과 프로세스를 근본적으로 변혁하는 것' : 'Fundamentally transforming business models and processes with digital technology'}</td></tr>
              <tr><td><strong>AX (AI Transformation)</strong></td><td>{isKo ? 'AI 기술을 핵심 동력으로 하는 기업·산업 전반의 혁신' : 'Innovation across enterprises and industries with AI as the core driver'}</td></tr>
              <tr><td><strong>{isKo ? '디지털 성숙도' : 'Digital Maturity'}</strong></td><td>{isKo ? '조직의 디지털 전환 수준을 측정하는 지표 (초기→발��→성숙→선도)' : 'Metric measuring organizational DX level (Initial→Developing→Mature→Leading)'}</td></tr>
              <tr><td><strong>{isKo ? '레거시 시스템' : 'Legacy System'}</strong></td><td>{isKo ? '오래된 기술로 구축된 기존 IT 시스템. DX의 주요 장벽' : 'Existing IT systems built with old technology. Major barrier to DX'}</td></tr>
              <tr><td><strong>Smart Factory</strong></td><td>{isKo ? 'IoT, AI, 로봇으로 자동화·지능화된 제조 공장' : 'Manufacturing factory automated and intelligent with IoT, AI, and robots'}</td></tr>
              <tr><td><strong>Digital Twin</strong></td><td>{isKo ? '물리적 자산을 디지털로 복제���여 시뮬레이��·최적화하는 기술' : 'Technology for simulating and optimizing by digitally replicating physical assets'}</td></tr>
              <tr><td><strong>RPA (Robotic Process Automation)</strong></td><td>{isKo ? '반복적인 사무 작업을 소프트웨어 로봇으로 자동화하는 기술' : 'Technology for automating repetitive office tasks with software robots'}</td></tr>
              <tr><td><strong>{isKo ? '옴니채널' : 'Omnichannel'}</strong></td><td>{isKo ? '온·오프라인 모든 채널을 통합하여 일관된 고객 경험을 제공하는 전략' : 'Strategy providing consistent customer experience by integrating all online/offline channels'}</td></tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      id: 'cloud',
      icon: 'fa-cloud',
      labelKo: '클라우드/인프라',
      labelEn: 'Cloud/Infra',
      content: (
        <>
          <h2>{isKo ? '클라우드 & 인프라 용어' : 'Cloud & Infrastructure Terms'}</h2>
          <table className="guide-table">
            <thead><tr><th>{isKo ? '용어' : 'Term'}</th><th>{isKo ? '설명' : 'Description'}</th></tr></thead>
            <tbody>
              <tr><td><strong>IaaS</strong></td><td>{isKo ? 'Infrastructure as a Service. 서버·스토리지·네트워크를 클라우드로 제공' : 'Infrastructure as a Service. Cloud-provided servers, storage, and networking'}</td></tr>
              <tr><td><strong>PaaS</strong></td><td>{isKo ? 'Platform as a Service. 개발 플랫폼을 클라우드로 제공' : 'Platform as a Service. Cloud-provided development platforms'}</td></tr>
              <tr><td><strong>SaaS</strong></td><td>{isKo ? 'Software as a Service. 소프트웨어를 구독형으로 제공 (Notion, Slack 등)' : 'Software as a Service. Subscription-based software (Notion, Slack, etc.)'}</td></tr>
              <tr><td><strong>Edge Computing</strong></td><td>{isKo ? '데이터를 클라우드가 아닌 디바이스 근처에서 처리하는 컴퓨팅 방식' : 'Computing approach that processes data near devices rather than in the cloud'}</td></tr>
              <tr><td><strong>API (Application Programming Interface)</strong></td><td>{isKo ? '소프트웨어 간 데이터 교환을 위한 표준 인터페이스' : 'Standard interface for data exchange between software systems'}</td></tr>
              <tr><td><strong>Microservices</strong></td><td>{isKo ? '대규모 시스템을 독립적인 소규모 서비스로 분리하는 아키텍처' : 'Architecture that breaks large systems into independent small services'}</td></tr>
              <tr><td><strong>DevOps</strong></td><td>{isKo ? '개발(Dev)과 운영(Ops)을 통합하여 빠른 배포와 안정성을 달성하는 문화·방법론' : 'Culture and methodology integrating Development and Operations for fast deployment and stability'}</td></tr>
              <tr><td><strong>Zero Trust</strong></td><td>{isKo ? '"아무것도 신뢰하지 않는다"는 보안 모델. 모든 접근을 검증' : '"Trust nothing" security model. Verify every access'}</td></tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      id: 'data',
      icon: 'fa-database',
      labelKo: '데이터/분석',
      labelEn: 'Data/Analytics',
      content: (
        <>
          <h2>{isKo ? '데이터 & 분석 용어' : 'Data & Analytics Terms'}</h2>
          <table className="guide-table">
            <thead><tr><th>{isKo ? '용어' : 'Term'}</th><th>{isKo ? '설명' : 'Description'}</th></tr></thead>
            <tbody>
              <tr><td><strong>Data Lake</strong></td><td>{isKo ? '정형·비정형 데이터를 원본 그대로 저장하는 대규모 저장소' : 'Large-scale repository storing structured and unstructured data in raw form'}</td></tr>
              <tr><td><strong>Data Warehouse</strong></td><td>{isKo ? '분석 목적으로 정제·구조화된 데이터를 저장하는 시스템' : 'System storing cleaned and structured data for analytics purposes'}</td></tr>
              <tr><td><strong>ETL (Extract, Transform, Load)</strong></td><td>{isKo ? '데이터를 추출, 변환, 적재하는 파이프라인 프로세스' : 'Pipeline process for extracting, transforming, and loading data'}</td></tr>
              <tr><td><strong>Data Mesh</strong></td><td>{isKo ? '도메인별로 데이터 소유권을 분산하는 아키텍처 패러다임' : 'Architecture paradigm distributing data ownership by domain'}</td></tr>
              <tr><td><strong>Data Fabric</strong></td><td>{isKo ? '분산된 데이터를 통합 관리하는 아키텍처. AI 기반 자동화가 핵심' : 'Architecture for unified management of distributed data. AI-based automation is key'}</td></tr>
              <tr><td><strong>BI (Business Intelligence)</strong></td><td>{isKo ? '데이터를 분석하여 비즈니스 인사이트를 도출하는 도구·방법론' : 'Tools and methodologies for analyzing data to derive business insights'}</td></tr>
              <tr><td><strong>A/B Test</strong></td><td>{isKo ? '두 가지 버전을 비교하여 더 나은 성과를 보이는 것을 선택하는 실험 방법' : 'Experimental method comparing two versions to select the better performer'}</td></tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      id: 'business',
      icon: 'fa-briefcase',
      labelKo: '비즈니스 용어',
      labelEn: 'Business Terms',
      content: (
        <>
          <h2>{isKo ? '비즈니스 & 경영 용어' : 'Business & Management Terms'}</h2>
          <table className="guide-table">
            <thead><tr><th>{isKo ? '용어' : 'Term'}</th><th>{isKo ? '설명' : 'Description'}</th></tr></thead>
            <tbody>
              <tr><td><strong>ROI (Return on Investment)</strong></td><td>{isKo ? '투자 대비 수익률. AI/DX 프로젝트의 성과 측정 핵심 지표' : 'Return on Investment. Key metric for measuring AI/DX project outcomes'}</td></tr>
              <tr><td><strong>TCO (Total Cost of Ownership)</strong></td><td>{isKo ? '도입·운영·유지보수 등 총 소유 비용' : 'Total cost including implementation, operation, and maintenance'}</td></tr>
              <tr><td><strong>PoC (Proof of Concept)</strong></td><td>{isKo ? '개념 검증. AI/DX 프로젝트의 타당성을 소규모로 검증하는 단계' : 'Proof of Concept. Stage validating AI/DX project feasibility at small scale'}</td></tr>
              <tr><td><strong>MVP (Minimum Viable Product)</strong></td><td>{isKo ? '최소 기능 제품. 핵심 ���능만으로 빠르게 시장 검증하는 방법' : 'Minimum Viable Product. Quick market validation with core features only'}</td></tr>
              <tr><td><strong>KPI (Key Performance Indicator)</strong></td><td>{isKo ? '핵심 성과 지표. 목표 달성도를 측정하는 정량적 지표' : 'Key Performance Indicator. Quantitative metrics measuring goal achievement'}</td></tr>
              <tr><td><strong>Agile</strong></td><td>{isKo ? '빠른 반복과 피드백으로 점진적으로 개발하는 방법론' : 'Methodology for iterative development with fast feedback cycles'}</td></tr>
              <tr><td><strong>{isKo ? '변화 관리' : 'Change Management'}</strong></td><td>{isKo ? '조직의 변화를 체계적으로 관리하여 저항을 최소화하고 수용도를 ��이는 활동' : 'Activities systematically managing organizational change to minimize resistance'}</td></tr>
              <tr><td><strong>ESG</strong></td><td>{isKo ? 'Environment(환경), Social(사회), Governance(지배구조). 지속가능 경영 지표' : 'Environment, Social, Governance. Sustainable management metrics'}</td></tr>
            </tbody>
          </table>
        </>
      ),
    },
  ];

  return (
    <GuidePage
      titleKo="용어사전"
      titleEn="Glossary"
      subtitleKo="AX·DX 분야의 핵심 용어를 정리합니다."
      subtitleEn="Key terms in AI Transformation and Digital Transformation."
      icon="fa-spell-check"
      iconColor="#7C3AED"
      path="/glossary"
      sections={sections}
    />
  );
}
