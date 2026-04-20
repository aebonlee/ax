import GuidePage from '../components/GuidePage';
import TipBox from '../components/TipBox';
import { useLanguage } from '../contexts/LanguageContext';
import type { ReactElement } from 'react';
import type { GuideSection } from '../components/GuidePage';

export default function Community(): ReactElement {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  const sections: GuideSection[] = [
    {
      id: 'welcome',
      icon: 'fa-handshake',
      labelKo: '커뮤니티 소개',
      labelEn: 'Welcome',
      content: (
        <>
          <h2>{isKo ? '커뮤니티에 오신 것을 환영합니다' : 'Welcome to the Community'}</h2>
          <p>{isKo
            ? 'DreamIT AX 커뮤니티는 AX·DX에 관심 있는 모든 분이 함께 학습하고, 정보를 나누며, 네트워크를 형성하는 공간입니다.'
            : 'DreamIT AX Community is a space where everyone interested in AX/DX can learn together, share information, and build networks.'}</p>
          <h3>{isKo ? '커뮤니티 활동' : 'Community Activities'}</h3>
          <ul>
            <li><strong>{isKo ? '학습 토론' : 'Study Discussions'}</strong>: {isKo ? 'AI·DX 관련 주제에 대한 질문과 토론' : 'Questions and discussions on AI/DX topics'}</li>
            <li><strong>{isKo ? '사례 공유' : 'Case Sharing'}</strong>: {isKo ? '실제 프로젝트 경험과 성과 공유' : 'Sharing real project experiences and results'}</li>
            <li><strong>{isKo ? '최신 뉴스' : 'Latest News'}</strong>: {isKo ? 'AI·DX 분��의 최신 뉴스와 아티클 공유' : 'Sharing latest news and articles in AI/DX'}</li>
            <li><strong>{isKo ? '스터디 그룹' : 'Study Groups'}</strong>: {isKo ? '관심 분야별 소그룹 학습 모임' : 'Small group study meetings by interest area'}</li>
          </ul>
          <TipBox type="tip">
            <p>{isKo
              ? '로그인 후 각 학습 페이지 하단에서 댓글을 통해 질문과 토론에 참여할 수 있습니다.'
              : 'After logging in, you can participate in Q&A and discussions through comments at the bottom of each learning page.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'resources',
      icon: 'fa-link',
      labelKo: '추천 리소스',
      labelEn: 'Resources',
      content: (
        <>
          <h2>{isKo ? '추천 학습 리소스' : 'Recommended Learning Resources'}</h2>
          <p>{isKo ? 'AI·DX 학습에 도움이 되는 ��부 리소스를 소개합니다.' : 'External resources helpful for AI/DX learning.'}</p>
          <h3>{isKo ? 'AI 학습 플랫폼' : 'AI Learning Platforms'}</h3>
          <table className="guide-table">
            <thead><tr><th>{isKo ? '플랫폼' : 'Platform'}</th><th>{isKo ? '특징' : 'Features'}</th><th>{isKo ? '추천 대상' : 'Recommended For'}</th></tr></thead>
            <tbody>
              <tr><td><strong>Coursera</strong></td><td>{isKo ? 'Andrew Ng AI 강의, 대학 수준 교육' : "Andrew Ng's AI courses, university-level"}</td><td>{isKo ? '체계적 학습 원하는 분' : 'Systematic learners'}</td></tr>
              <tr><td><strong>Fast.ai</strong></td><td>{isKo ? '실습 중심, 코드 먼저 배우는 방식' : 'Practice-oriented, code-first approach'}</td><td>{isKo ? '개발자, 실무 적용 원하는 분' : 'Developers, practitioners'}</td></tr>
              <tr><td><strong>DeepLearning.AI</strong></td><td>{isKo ? 'AI 전문 과정, ChatGPT 활��법' : 'AI specialized courses, ChatGPT usage'}</td><td>{isKo ? 'AI 엔지니어 지망생' : 'Aspiring AI engineers'}</td></tr>
              <tr><td><strong>Google AI</strong></td><td>{isKo ? '무료 AI 기초 과정, 실습 환경 제공' : 'Free AI basics, practice environment'}</td><td>{isKo ? 'AI 입문자' : 'AI beginners'}</td></tr>
              <tr><td><strong>Hugging Face</strong></td><td>{isKo ? '오픈소스 AI 모델, 실습 가능' : 'Open-source AI models, hands-on'}</td><td>{isKo ? 'AI 모델 실험하고 싶은 분' : 'AI model experimenters'}</td></tr>
            </tbody>
          </table>
          <h3>{isKo ? '뉴스레터 & 미디어' : 'Newsletters & Media'}</h3>
          <ul>
            <li><strong>The Batch (Andrew Ng)</strong>: {isKo ? '주간 AI 뉴스레터, 핵심 트렌드 요약' : 'Weekly AI newsletter, key trend summaries'}</li>
            <li><strong>AI Times ({isKo ? '한국' : 'Korea'})</strong>: {isKo ? '국내 AI 뉴스와 산업 동향' : 'Korean AI news and industry trends'}</li>
            <li><strong>MIT Technology Review</strong>: {isKo ? '기술 심층 분석, 미래 전망' : 'Deep tech analysis, future outlook'}</li>
          </ul>
        </>
      ),
    },
    {
      id: 'events',
      icon: 'fa-calendar',
      labelKo: '이벤트/세미나',
      labelEn: 'Events',
      content: (
        <>
          <h2>{isKo ? 'AI·DX 주요 행사' : 'Major AI/DX Events'}</h2>
          <p>{isKo ? '참석을 추천하는 국내외 주요 AI·DX 컨퍼런스 및 세미나입니다.' : 'Recommended domestic and international AI/DX conferences and seminars.'}</p>
          <table className="guide-table">
            <thead><tr><th>{isKo ? '행사명' : 'Event'}</th><th>{isKo ? '시기' : 'Period'}</th><th>{isKo ? '특징' : 'Features'}</th></tr></thead>
            <tbody>
              <tr><td><strong>NeurIPS</strong></td><td>{isKo ? '매년 12월' : 'December annually'}</td><td>{isKo ? '세계 최대 AI 학술 컨퍼런스' : "World's largest AI academic conference"}</td></tr>
              <tr><td><strong>Google I/O</strong></td><td>{isKo ? '매년 5월' : 'May annually'}</td><td>{isKo ? 'Google AI/개발자 컨퍼런스' : 'Google AI/Developer conference'}</td></tr>
              <tr><td><strong>Microsoft Build</strong></td><td>{isKo ? '매년 5월' : 'May annually'}</td><td>{isKo ? 'Copilot, Azure AI 발표' : 'Copilot, Azure AI announcements'}</td></tr>
              <tr><td><strong>CES</strong></td><td>{isKo ? '매년 1월' : 'January annually'}</td><td>{isKo ? 'AI 하드웨어, 로봇, 자율주행' : 'AI hardware, robots, autonomous driving'}</td></tr>
              <tr><td><strong>{isKo ? 'AI EXPO Korea' : 'AI EXPO Korea'}</strong></td><td>{isKo ? '매년 3~4월' : 'March~April annually'}</td><td>{isKo ? '국내 최대 AI ��시회' : "Korea's largest AI exhibition"}</td></tr>
              <tr><td><strong>{isKo ? 'DEVIEW (네이버)' : 'DEVIEW (Naver)'}</strong></td><td>{isKo ? '매년 10월' : 'October annually'}</td><td>{isKo ? '국내 AI/개발 기술 컨퍼런스' : 'Korean AI/dev tech conference'}</td></tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      id: 'faq',
      icon: 'fa-circle-question',
      labelKo: '자주 묻는 질문',
      labelEn: 'FAQ',
      content: (
        <>
          <h2>{isKo ? '자주 묻는 질문 (FAQ)' : 'Frequently Asked Questions'}</h2>
          <h3>{isKo ? 'Q. AI를 배우려�� 프로그래밍을 알아야 하나요?' : 'Q. Do I need programming to learn AI?'}</h3>
          <p>{isKo
            ? 'A. 아닙니다. 본 플랫폼은 비전공자도 이해할 수 있도록 개념과 전략 중심으로 구성되어 있습니다. 다만, AI를 직접 개발하려면 Python 기초가 도움됩니다.'
            : 'A. No. This platform is designed for non-specialists to understand concepts and strategies. However, Python basics help if you want to develop AI directly.'}</p>
          <h3>{isKo ? 'Q. AX와 DX의 차이가 무엇인가요?' : 'Q. What is the difference between AX and DX?'}</h3>
          <p>{isKo
            ? 'A. DX는 디지털 기술 전반(클라우드, 데이터, IoT 등)을 활용한 전환이고, AX는 특히 AI 기술을 핵심 동력으로 하는 전환입니다. AX는 DX의 가장 진화된 형태라고 볼 수 있습니다.'
            : 'A. DX uses overall digital technologies (cloud, data, IoT) while AX specifically uses AI as the core driver. AX can be seen as the most evolved form of DX.'}</p>
          <h3>{isKo ? 'Q. 무료로 이용 가능한가요?' : 'Q. Is it free to use?'}</h3>
          <p>{isKo
            ? 'A. 네, 모든 학습 콘텐츠는 무료로 제공됩니다. 회원가입 �� 북마크, 학습 진행률 추적 등 추가 기능을 이용할 수 있습니다.'
            : 'A. Yes, all learning content is free. After registration, you can use additional features like bookmarks and progress tracking.'}</p>
          <h3>{isKo ? 'Q. 콘텐츠는 얼마나 자주 업데이트되나요?' : 'Q. How often is content updated?'}</h3>
          <p>{isKo
            ? 'A. AI·DX 분야는 빠르게 변화하므로, 주요 트렌드와 사례를 지속적으로 업데이트하고 있습니다.'
            : 'A. Since AI/DX fields change rapidly, we continuously update key trends and cases.'}</p>
          <TipBox type="important">
            <p>{isKo
              ? '추가 질문이 있으시면 각 학습 페이지의 댓글 기능을 이용해 주세요. 커뮤니티 멤버와 운영���이 답변해 드립니다.'
              : 'For additional questions, please use the comment feature on each learning page. Community members and staff will respond.'}</p>
          </TipBox>
        </>
      ),
    },
    {
      id: 'guidelines',
      icon: 'fa-shield',
      labelKo: '이용 규칙',
      labelEn: 'Guidelines',
      content: (
        <>
          <h2>{isKo ? '커뮤니티 이용 규칙' : 'Community Guidelines'}</h2>
          <p>{isKo ? '건전하고 유익한 커뮤니티를 위해 아래 규칙을 준수해 주세요.' : 'Please follow the rules below for a healthy and beneficial community.'}</p>
          <ol>
            <li><strong>{isKo ? '상호 존중' : 'Mutual Respect'}</strong>: {isKo ? '다른 학습자의 의견을 존중하고, 비하/차별 표현을 금지합니다.' : 'Respect other learners and avoid discriminatory language.'}</li>
            <li><strong>{isKo ? '건설적 토론' : 'Constructive Discussion'}</strong>: {isKo ? '비판은 건설적으로, 근거를 제시하��, 대안을 함께 제안해 주세요.' : 'Criticize constructively with evidence and suggest alternatives.'}</li>
            <li><strong>{isKo ? '출처 명시' : 'Cite Sources'}</strong>: {isKo ? '외부 자료를 인��할 때는 반드시 출처를 밝혀 주세요.' : 'Always cite sources when referencing external materials.'}</li>
            <li><strong>{isKo ? '개인정보 보호' : 'Privacy Protection'}</strong>: {isKo ? '타인의 개인정보를 공유하거나 노출하지 마세요.' : 'Do not share or expose others personal information.'}</li>
            <li><strong>{isKo ? '광고/스팸 금지' : 'No Spam/Ads'}</strong>: {isKo ? '무관한 광고, 홍보, 스팸성 게시물을 금지합니다.' : 'Irrelevant ads, promotions, and spam posts are prohibited.'}</li>
          </ol>
        </>
      ),
    },
    {
      id: 'dreamit',
      icon: 'fa-globe',
      labelKo: 'DreamIT 생태계',
      labelEn: 'DreamIT Ecosystem',
      content: (
        <>
          <h2>{isKo ? 'DreamIT Biz 교육 생태계' : 'DreamIT Biz Education Ecosystem'}</h2>
          <p>{isKo
            ? 'DreamIT AX는 DreamIT Biz 교육 플랫폼 네트워크의 일부입니다. 관련 학습 사이트를 함께 활용하면 더욱 효과적으로 학습할 수 있습니다.'
            : 'DreamIT AX is part of the DreamIT Biz educational platform network. Using related sites together enables more effective learning.'}</p>
          <h3>{isKo ? '관련 학습 사이트' : 'Related Learning Sites'}</h3>
          <table className="guide-table">
            <thead><tr><th>{isKo ? '사이트' : 'Site'}</th><th>{isKo ? '주제' : 'Topic'}</th><th>{isKo ? '추천 대상' : 'Recommended For'}</th></tr></thead>
            <tbody>
              <tr><td><strong>ai-prompt.dreamitbiz.com</strong></td><td>{isKo ? 'AI 프롬프트 엔지니어링' : 'AI Prompt Engineering'}</td><td>{isKo ? 'AI 도구 활용법을 배우고 싶은 분' : 'Those wanting to learn AI tool usage'}</td></tr>
              <tr><td><strong>ai-agents.dreamitbiz.com</strong></td><td>{isKo ? 'AI 에이전트 개발' : 'AI Agent Development'}</td><td>{isKo ? 'AI 에이전트를 만들고 싶은 분' : 'Those wanting to build AI agents'}</td></tr>
              <tr><td><strong>vibe.dreamitbiz.com</strong></td><td>{isKo ? '바이브 코딩' : 'Vibe Coding'}</td><td>{isKo ? 'AI로 코딩하고 싶은 분' : 'Those wanting to code with AI'}</td></tr>
              <tr><td><strong>autowork.dreamitbiz.com</strong></td><td>{isKo ? 'AI 업무 자동화' : 'AI Work Automation'}</td><td>{isKo ? '업무 생산성을 높이고 싶은 분' : 'Those wanting to boost productivity'}</td></tr>
              <tr><td><strong>digitalbiz.dreamitbiz.com</strong></td><td>{isKo ? '디지털 비즈니스' : 'Digital Business'}</td><td>{isKo ? '디지털 비즈니스 전략을 배우고 싶은 분' : 'Those learning digital business strategy'}</td></tr>
            </tbody>
          </table>
          <TipBox type="example">
            <p>{isKo
              ? 'DreamIT Biz는 AI, 프로그래밍, IT 자격증, 비즈니스 등 75개 이상의 전문 학습 사이트를 운영하고 있습니다. 모든 사이트는 dreamitbiz.com 도메인으로 접속 가능합니다.'
              : 'DreamIT Biz operates 75+ specialized learning sites covering AI, programming, IT certifications, and business. All accessible via dreamitbiz.com domain.'}</p>
          </TipBox>
        </>
      ),
    },
  ];

  return (
    <GuidePage
      titleKo="커뮤니티"
      titleEn="Community"
      subtitleKo="함께 학습하고, 정보를 나누는 커뮤니티입니다."
      subtitleEn="A community for learning together and sharing knowledge."
      icon="fa-users"
      iconColor="#059669"
      path="/community"
      sections={sections}
    />
  );
}
