import { useEffect } from 'react';
import { SITE_CONFIG } from '../config/site';
import type { ReactElement } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  path?: string;
  noindex?: boolean;
}

export default function SEOHead({ title, description, path = '/', noindex }: SEOHeadProps): ReactElement | null {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_CONFIG.name}` : `${SITE_CONFIG.name} | ${SITE_CONFIG.nameKo}`;
    const desc = description || SITE_CONFIG.description;
    const url = `${SITE_CONFIG.url}${path}`;

    document.title = fullTitle;

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('name', 'description', desc);
    if (noindex) setMeta('name', 'robots', 'noindex');
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', desc);
    setMeta('property', 'og:url', url);
  }, [title, description, path, noindex]);

  return null;
}
