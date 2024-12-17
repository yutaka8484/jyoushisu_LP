import { useCallback } from 'react';

export const useScrollTo = () => {
  const scrollToElement = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      // フォーカスを設定して視覚的なフィードバックを提供
      element.focus({ preventScroll: true });
    }
  }, []);

  return scrollToElement;
};