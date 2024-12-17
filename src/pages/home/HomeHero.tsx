import React from 'react';
import { Hero } from '../../components/Hero';
import { useScrollTo } from '../../hooks/useScrollTo';

export const HomeHero: React.FC = () => {
  const scrollToElement = useScrollTo();
  
  const handleConsultClick = () => {
    scrollToElement('contact');
  };

  return <Hero onConsultClick={handleConsultClick} />;
};