import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initGA4, initHotjar, trackPageView } from '../utils/analytics';

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Analytics initialization
    const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
    const HOTJAR_ID = parseInt(import.meta.env.VITE_HOTJAR_ID || '0');
    const HOTJAR_VERSION = parseInt(import.meta.env.VITE_HOTJAR_VERSION || '6');

    if (GA_ID) {
      initGA4(GA_ID);
    }
    if (HOTJAR_ID) {
      initHotjar(HOTJAR_ID, HOTJAR_VERSION);
    }
  }, []);

  useEffect(() => {
    trackPageView(location.pathname, document.title);
  }, [location]);

  return <>{children}</>;
};