import React from 'react';
import { Button } from '../Button';
import { ArrowRight } from 'lucide-react';

interface HeroContentProps {
  onConsultClick: () => void;
}

export const HeroContent: React.FC<HeroContentProps> = ({ onConsultClick }) => (
  <div className="container mx-auto px-4 relative z-10 text-white">
    <div className="max-w-3xl">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        関西企業の頼れるITパートナー
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-blue-100">
        IT運用からDX推進まで、<br />
        中小企業の成長をワンストップでサポート
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          onClick={onConsultClick}
          className="text-lg group"
        >
          無料相談を予約
          <ArrowRight className="ml-2 w-5 h-5 inline-block transition-transform group-hover:translate-x-1" />
        </Button>
        <p className="text-blue-100 flex items-center">
          まずはお気軽にご相談ください
        </p>
      </div>
    </div>
  </div>
);