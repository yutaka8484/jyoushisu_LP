import React from 'react';
import { LazyImage } from '../LazyImage';

export const HeroBackground: React.FC = () => (
  <div className="absolute inset-0 z-0">
    <LazyImage
      src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
      alt="Hero background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80" />
  </div>
);