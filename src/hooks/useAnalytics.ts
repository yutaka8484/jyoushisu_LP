import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, trackEvent } from '../utils/analytics';

export const useAnalytics = () => {
  const location = useLocation();

  // Track page views
  useEffect(() => {
    trackPageView(location.pathname, document.title);
  }, [location]);

  // Track scroll depth
  useEffect(() => {
    let maxScroll = 0;
    const handleScroll = () => {
      const scrollPercentage = Math.round(
        (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100
      );
      
      if (scrollPercentage > maxScroll) {
        maxScroll = scrollPercentage;
        if (maxScroll % 25 === 0) { // Track every 25%
          trackEvent('Scroll', 'Depth', `${maxScroll}%`);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    trackEvent,
  };
};