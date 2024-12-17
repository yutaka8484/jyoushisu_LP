import React from 'react';

export const HeroServiceArea: React.FC = () => (
  <div className="absolute bottom-8 left-0 right-0 z-10">
    <div className="container mx-auto px-4">
      <div className="inline-block bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
        <p className="text-gray-700 text-sm md:text-base">
          対応エリア：
          <span className="font-semibold text-blue-600">
            大阪・神戸・京都・奈良・滋賀・三重・和歌山
          </span>
        </p>
      </div>
    </div>
  </div>
);