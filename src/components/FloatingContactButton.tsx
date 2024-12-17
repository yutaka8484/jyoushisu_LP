import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useScrollTo } from '../hooks/useScrollTo';

export const FloatingContactButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToElement = useScrollTo();

  useEffect(() => {
    const handleScroll = () => {
      // ヘッダーの高さ（64px）を超えたらボタンを表示
      const shouldShow = window.scrollY > 64;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    scrollToElement('contact');
  };

  return (
    <button
      onClick={handleClick}
      className={`
        fixed bottom-8 right-8 z-50
        flex items-center gap-2
        bg-blue-600 text-white
        px-6 py-3 rounded-full
        shadow-lg hover:shadow-xl
        transform transition-all duration-300 ease-in-out
        hover:bg-blue-700 hover:scale-105
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}
      `}
      aria-label="お問い合わせ"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="font-medium">お問い合わせ</span>
    </button>
  );
};