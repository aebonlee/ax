import type { ReactElement } from 'react';

export default function HeroBackground(): ReactElement {
  return (
    <div className="hero-bg">
      <div className="hero-bg-gradient" />
      <div className="hero-bg-dots" />
    </div>
  );
}
