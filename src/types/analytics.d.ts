export interface GA4Config {
  measurementId: string;
}

export interface HotjarConfig {
  hjid: number;
  hjsv: number;
}

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    hj: (...args: any[]) => void;
  }
}