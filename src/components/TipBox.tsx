import type { ReactElement, ReactNode } from 'react';

interface TipBoxProps {
  type?: 'tip' | 'important' | 'warning' | 'example';
  title?: string;
  children: ReactNode;
}

export default function TipBox({ type = 'tip', title, children }: TipBoxProps): ReactElement {
  const icons: Record<string, string> = {
    tip: 'fa-lightbulb',
    important: 'fa-circle-exclamation',
    warning: 'fa-triangle-exclamation',
    example: 'fa-flask',
  };

  const defaultTitles: Record<string, string> = {
    tip: '핵심 포인트',
    important: '중요',
    warning: '주의',
    example: '사례',
  };

  return (
    <div className={`tipbox tipbox-${type}`}>
      <div className="tipbox-header">
        <i className={`fa-solid ${icons[type]}`} />
        <strong>{title || defaultTitles[type]}</strong>
      </div>
      <div className="tipbox-content">{children}</div>
    </div>
  );
}
