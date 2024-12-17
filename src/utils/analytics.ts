import { GA4Config } from '../types/analytics';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Google Analytics 4の初期化
export const initGA4 = (measurementId: string): void => {
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

// ページビューの追跡
export const trackPageView = (path: string, title: string): void => {
  if (!window.gtag) return;
  
  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title,
  });
};

// イベントの追跡
export const trackEvent = (
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

// Hotjarの初期化
export const initHotjar = (hjid: number, hjsv: number): void => {
  const script = document.createElement('script');
  script.async = true;
  script.defer = true;
  script.innerHTML = `
    (function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:${hjid},hjsv:${hjsv}};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;r.defer=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  `;
  document.head.appendChild(script);
};