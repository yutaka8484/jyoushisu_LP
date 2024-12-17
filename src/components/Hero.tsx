import React from 'react';
import { HeroBackground } from './hero/HeroBackground';
import { HeroContent } from './hero/HeroContent';
import { HeroServiceArea } from './hero/HeroServiceArea';

interface HeroProps {
  onConsultClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onConsultClick }) => (
  <section className="relative min-h-screen flex items-center pt-16">
    <HeroBackground />
    <HeroContent onConsultClick={onConsultClick} />
    <HeroServiceArea />
  </section>
);