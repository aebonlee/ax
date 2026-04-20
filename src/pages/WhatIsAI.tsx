import GuidePage from '../components/GuidePage';
import TipBox from '../components/TipBox';
import { useLanguage } from '../contexts/LanguageContext';
import type { ReactElement } from 'react';
import type { GuideSection } from '../components/GuidePage';

export default function WhatIsAI(): ReactElement {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  const sections: GuideSection[] = [
    {
      id: 'definition',
      icon: 'fa-robot',
      labelKo: 'AI란?',
      labelEn: 'What is AI?',
      content: (
        <>
          <h2>{isKo ? '인공지능(AI)이란?' : 'What is Artificial Intelligence?'}</h2>
          <p>{isKo
            ? '인공지능(Artificial Intelligence, AI)은 인간의 학습, 추론, 인지, 판단 능력을 컴퓨터 시스템으로 구현한 기술입니다. 1956년 다트머스 회의에서 처음 개념이 정립되었으며, 70년간의 발전을 거쳐 현재 산업 전반을 혁신하고 있습니다.'
            : 'Artificial Intelligence (AI) is technology that implements human learning, reasoning, cognition, and judgment in computer systems. First conceptualized at the 1956 Dartmouth Conference, it has evolved over 70 years to transform entire industries.'}</p>
          <h3>{isKo ? 'AI의 분류' : 'AI Classification'}</h3>
          <table className="guide-table">
            <thead><tr><th>{isKo ? '구분' : 'Type'}</th><th>{isKo ? '정의' : 'Definition'}</th><th>{isKo ? '현재 상태' : 'Current Status'}</th></tr></thead>
            <tbody>
              <tr><td><strong>ANI ({isKo ? '약한 AI' : 'Narrow AI'})</strong></td><td>{isKo ? '특정 작업에 특화된 AI' : 'AI specialized for specific tasks'}</td><td>{isKo ? '현재 수준 (ChatGPT, 자율주행 등)' : 'Current level (ChatGPT, self-driving, etc.)'}</td></tr>
              <tr><td><strong>AGI ({isKo ? '강한 AI' : 'General AI'})</strong></td><td>{isKo ? '인간 수준의 범용 지능' : 'Human-level general intelligence'}</td><td>{isKo ? '연구 단계 (2030년대 목표)' : 'Research stage (targeting 2030s)'}</td></tr>
              <tr><td><strong>ASI ({isKo ? '초인공지능' : 'Super AI'})</strong></td><td>{isKo ? '인간을 초월하는 지능' : 'Intelligence surpassing humans'}</td><td>{isKo ? '이론적 개념' : 'Theoretical concept'}</td></tr>
            </tbody>
          </table>
          <TipBox type="important">
            <p>{isKo
              ? '현재 우리가 사용하는 모든 AI(ChatGPT, Claude, Gemini 등)는 ANI(약한 AI)에 해당합니다. 특정 작업에서는 인간을 능가하지만, 범용적 사고 능력은 아직 갖추지 못했습니다.'
              : 'All AI we currently use (ChatGPT, Claude, Gemini) is ANI (Narrow AI). It surpasses humans in specific tasks but lacks general reasoning ability.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'history',
      icon: 'fa-clock-rotate-left',
      labelKo: 'AI 역사',
      labelEn: 'AI History',
      content: (
        <>
          <h2>{isKo ? 'AI의 역사' : 'History of AI'}</h2>
          <table className="guide-table">
            <thead><tr><th>{isKo ? '시기' : 'Period'}</th><th>{isKo ? '주요 사건' : 'Key Events'}</th><th>{isKo ? '특징' : 'Characteristics'}</th></tr></thead>
            <tbody>
              <tr><td>1950s~1960s</td><td>{isKo ? '다트머스 회의, 퍼셉트론' : 'Dartmouth Conference, Perceptron'}</td><td>{isKo ? 'AI 개념 탄생, 낙관의 시대' : 'AI concept born, era of optimism'}</td></tr>
              <tr><td>1970s~1980s</td><td>{isKo ? '전문가 시스템, 1차 AI 겨울' : 'Expert Systems, 1st AI Winter'}</td><td>{isKo ? '규칙 기반 AI, 한계 인식' : 'Rule-based AI, limitations recognized'}</td></tr>
              <tr><td>1990s~2000s</td><td>{isKo ? 'SVM, 랜덤포레스트, IBM Deep Blue' : 'SVM, Random Forest, IBM Deep Blue'}</td><td>{isKo ? '통계적 머신러닝의 부상' : 'Rise of statistical machine learning'}</td></tr>
              <tr><td>2010s</td><td>{isKo ? 'AlexNet, AlphaGo, BERT' : 'AlexNet, AlphaGo, BERT'}</td><td>{isKo ? '딥러닝 혁명, GPU 컴퓨팅' : 'Deep learning revolution, GPU computing'}</td></tr>
              <tr><td>2020s</td><td>{isKo ? 'GPT-3/4, ChatGPT, Gemini, Claude' : 'GPT-3/4, ChatGPT, Gemini, Claude'}</td><td>{isKo ? '생성형 AI 대중화, LLM 시대' : 'Generative AI mainstream, LLM era'}</td></tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      id: 'how-works',
      icon: 'fa-gears',
      labelKo: 'AI 작동 원리',
      labelEn: 'How AI Works',
      content: (
        <>
          <h2>{isKo ? 'AI는 어떻게 작동하는가?' : 'How Does AI Work?'}</h2>
          <p>{isKo
            ? 'AI는 크게 3단계로 작동합니다: 데이터 입력 → 모델 학습 → 예측/생성. 이 과정을 이해하면 AI의 가능성과 한계를 올바르게 파악할 수 있습니다.'
            : 'AI works in 3 main stages: Data Input → Model Training → Prediction/Generation. Understanding this helps grasp AI possibilities and limitations.'}</p>
          <h3>{isKo ? '핵심 학습 방식' : 'Core Learning Methods'}</h3>
          <ul>
            <li><strong>{isKo ? '지도학습' : 'Supervised Learning'}</strong>: {isKo ? '정답이 있는 데이터로 학습. 분류(스팸 필터), 회귀(주가 예측)' : 'Learning from labeled data. Classification (spam filter), regression (stock prediction)'}</li>
            <li><strong>{isKo ? '비지도학습' : 'Unsupervised Learning'}</strong>: {isKo ? '정답 없이 데이터 패턴을 발견. 군집화(고객 세분화), 차원 축소' : 'Finding patterns without labels. Clustering (customer segmentation), dimensionality reduction'}</li>
            <li><strong>{isKo ? '강화학습' : 'Reinforcement Learning'}</strong>: {isKo ? '보상을 최대화하도록 시행착오로 학습. 게임 AI, 로봇, 자율주행' : 'Learning through trial-and-error to maximize rewards. Game AI, robots, self-driving'}</li>
            <li><strong>{isKo ? '자기지도학습' : 'Self-Supervised Learning'}</strong>: {isKo ? '데이터 자체에서 학습 신호를 생성. LLM(GPT, Claude)의 핵심 방식' : 'Generating learning signals from data itself. Core method of LLMs (GPT, Claude)'}</li>
          </ul>
          <TipBox type="tip">
            <p>{isKo
              ? 'ChatGPT, Claude 등 대화형 AI는 "다음 단어 예측"을 반복하는 방식으로 작동합니다. 수조 개의 텍스트 데이터에서 패턴을 학습하여, 문맥에 맞는 다�� 단어를 확률적으로 생성합니다.'
              : 'Conversational AI like ChatGPT and Claude works by repeatedly "predicting the next word." It learns patterns from trillions of text data to probabilistically generate contextually appropriate next words.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'types',
      icon: 'fa-cubes',
      labelKo: 'AI 유형',
      labelEn: 'AI Types',
      content: (
        <>
          <h2>{isKo ? '현재 AI의 주요 유형' : 'Major Types of Current AI'}</h2>
          <table className="guide-table">
            <thead><tr><th>{isKo ? '유형' : 'Type'}</th><th>{isKo ? '대표 서비스' : 'Key Services'}</th><th>{isKo ? '활용 분야' : 'Applications'}</th></tr></thead>
            <tbody>
              <tr><td><strong>{isKo ? '대화형 AI' : 'Conversational AI'}</strong></td><td>ChatGPT, Claude, Gemini</td><td>{isKo ? '질문 답변, 글쓰기, ��딩, 분석' : 'Q&A, writing, coding, analysis'}</td></tr>
              <tr><td><strong>{isKo ? '이미지 생성 AI' : 'Image Generation AI'}</strong></td><td>Midjourney, DALL-E, Stable Diffusion</td><td>{isKo ? '디자인, 광고, 컨셉 아트' : 'Design, advertising, concept art'}</td></tr>
              <tr><td><strong>{isKo ? '영상 생성 AI' : 'Video Generation AI'}</strong></td><td>Sora, Runway, Pika</td><td>{isKo ? '마케팅 영상, 교육 콘텐츠' : 'Marketing videos, educational content'}</td></tr>
              <tr><td><strong>{isKo ? '음성 AI' : 'Voice AI'}</strong></td><td>ElevenLabs, Whisper, Clova Note</td><td>{isKo ? '음성 합성, 번역, 회의록' : 'Speech synthesis, translation, transcription'}</td></tr>
              <tr><td><strong>{isKo ? '코딩 AI' : 'Coding AI'}</strong></td><td>GitHub Copilot, Cursor, Claude Code</td><td>{isKo ? '코드 생성, 디버깅, 리뷰' : 'Code generation, debugging, review'}</td></tr>
              <tr><td><strong>{isKo ? '검색 AI' : 'Search AI'}</strong></td><td>Perplexity, Google AI Overview</td><td>{isKo ? '정보 검색, 요약, 리서치' : 'Information search, summary, research'}</td></tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      id: 'impact',
      icon: 'fa-building',
      labelKo: '산업 영향',
      labelEn: 'Industry Impact',
      content: (
        <>
          <h2>{isKo ? 'AI가 산업에 미치는 영향' : 'AI Impact on Industries'}</h2>
          <p>{isKo
            ? 'AI는 거의 모든 산업을 변화시키고 있습니다. 2026년 기준, AI를 도입한 기업의 평균 생산성 향상은 35%에 달합니다.'
            : 'AI is transforming virtually every industry. As of 2026, companies adopting AI see an average productivity improvement of 35%.'}</p>
          <h3>{isKo ? '산업별 AI 활용' : 'AI by Industry'}</h3>
          <ul>
            <li><strong>{isKo ? '제조' : 'Manufacturing'}</strong>: {isKo ? '예지보전, 품질검사, 공정최적화, 디지털 트윈' : 'Predictive maintenance, quality inspection, process optimization, digital twin'}</li>
            <li><strong>{isKo ? '금융' : 'Finance'}</strong>: {isKo ? '신���평가, 이상거래탐지, 자산관리, 보험심사' : 'Credit scoring, fraud detection, asset management, insurance underwriting'}</li>
            <li><strong>{isKo ? '의료' : 'Healthcare'}</strong>: {isKo ? '영상진단, 신약개발, 정밀의학, 디지털치료제' : 'Medical imaging, drug discovery, precision medicine, digital therapeutics'}</li>
            <li><strong>{isKo ? '유통' : 'Retail'}</strong>: {isKo ? '수요예측, 개인화추천, 재고최적화, 무인매장' : 'Demand forecasting, personalization, inventory optimization, unmanned stores'}</li>
            <li><strong>{isKo ? '교육' : 'Education'}</strong>: {isKo ? 'AI튜터, 적응형학습, 자동채점, 학습분석' : 'AI tutor, adaptive learning, auto-grading, learning analytics'}</li>
            <li><strong>{isKo ? '물류' : 'Logistics'}</strong>: {isKo ? '경로최적화, 자율배송, 웨어하우스로봇, 라스트마일' : 'Route optimization, autonomous delivery, warehouse robots, last-mile'}</li>
          </ul>
          <TipBox type="example">
            <p>{isKo
              ? '글로벌 AI 시장 규모: 2024년 $184B → 2026년 $300B → 2030년 $826B (연평균 성장률 36.6%)'
              : 'Global AI market size: 2024 $184B → 2026 $300B → 2030 $826B (CAGR 36.6%)'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'future',
      icon: 'fa-rocket',
      labelKo: 'AI의 미래',
      labelEn: 'Future of AI',
      content: (
        <>
          <h2>{isKo ? 'AI의 미래와 우리의 준비' : 'Future of AI and How to Prepare'}</h2>
          <p>{isKo
            ? 'AI 기술은 빠르게 발전하고 있습니다. 개인과 조직 모두 AI 시대에 대비해야 합니다.'
            : 'AI technology is advancing rapidly. Both individuals and organizations must prepare for the AI era.'}</p>
          <h3>{isKo ? '개인이 준비할 것' : 'Individual Preparation'}</h3>
          <ul>
            <li><strong>{isKo ? 'AI 리터러시' : 'AI Literacy'}</strong>: {isKo ? 'AI의 작동 원리와 한계를 이해하기' : 'Understanding how AI works and its limitations'}</li>
            <li><strong>{isKo ? 'AI 도구 활용' : 'AI Tool Usage'}</strong>: {isKo ? 'ChatGPT, Claude 등을 업무에 적극 활용하기' : 'Actively using ChatGPT, Claude, etc. in work'}</li>
            <li><strong>{isKo ? '프롬프트 스킬' : 'Prompt Skills'}</strong>: {isKo ? 'AI에게 효과적으로 질문하고 지시하는 능력 키우기' : 'Developing ability to effectively question and instruct AI'}</li>
            <li><strong>{isKo ? '비판적 사고' : 'Critical Thinking'}</strong>: {isKo ? 'AI 결과물을 검증하고 판단하는 능력 유지하기' : 'Maintaining ability to verify and judge AI outputs'}</li>
          </ul>
          <h3>{isKo ? '조직이 준비할 것' : 'Organizational Preparation'}</h3>
          <ul>
            <li><strong>{isKo ? 'AI 전략 수립' : 'AI Strategy'}</strong>: {isKo ? '비즈니스 목표에 맞는 AI 도입 로드맵 작성' : 'Creating AI adoption roadmap aligned with business goals'}</li>
            <li><strong>{isKo ? '데이터 인프라' : 'Data Infrastructure'}</strong>: {isKo ? 'AI 활용을 위한 데이터 수집·정제·관리 체계 구축' : 'Building data collection, cleansing, and management systems for AI'}</li>
            <li><strong>{isKo ? 'AI 인재 육성' : 'AI Talent'}</strong>: {isKo ? '전 직원 AI 교육 + 전문 AI 인력 확보' : 'AI education for all employees + securing specialized AI talent'}</li>
            <li><strong>{isKo ? 'AI 윤리/거버넌스' : 'AI Ethics/Governance'}</strong>: {isKo ? '책임있는 AI 활용을 위한 원칙과 프로세스 마련' : 'Establishing principles and processes for responsible AI use'}</li>
          </ul>
          <TipBox type="warning">
            <p>{isKo
              ? 'AI는 도구입니다. AI를 "대체" 위협으로만 보지 말고, "증강(Augmentation)" 관점에서 접근하세요. AI와 협업하여 생산성을 높이는 사람이 경쟁력을 갖게 됩니다.'
              : 'AI is a tool. Don\'t view AI only as a "replacement" threat — approach it from an "augmentation" perspective. People who collaborate with AI to boost productivity will be competitive.'}</p>
          </TipBox>
        </>
      ),
    },
  ];

  return (
    <GuidePage
      titleKo="인공지능이란?"
      titleEn="What is AI?"
      subtitleKo="인공지능의 개념, 작동 원리, 유형, 산업 영향을 쉽게 이해합니다."
      subtitleEn="Easily understand AI concepts, how it works, types, and industry impact."
      icon="fa-robot"
      iconColor="#DC2626"
      path="/what-is-ai"
      sections={sections}
    />
  );
}
