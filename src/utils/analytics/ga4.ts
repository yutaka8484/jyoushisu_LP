import { GA4Config } from '../../types/analytics';

export const initGA4 = (measurementId: string): void => {
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', measurementId, {
    send_page_view: false
  });
};

export const trackGA4PageView = (path: string, title: string): void => {
  if (!window.gtag) return;
  
  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title,
  });
};

export const trackGA4Event = (
  category: string,
  action: string,
  label?: string,
  value?: number
): void => {
  if (!window.gtag) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};