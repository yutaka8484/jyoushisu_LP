import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { HomeHero } from './home/HomeHero';
import { HomeServices } from './home/HomeServices';
import { HomeImplementation } from './home/HomeImplementation';
import { HomeCases } from './home/HomeCases';
import { HomeFAQ } from './home/HomeFAQ';
import { HomeContact } from './home/HomeContact';

const Home: React.FC = () => {
  useSEO({
    title: '関西企業の頼れるITパートナー',
    description: 'IT運用からDX推進まで、中小企業の成長をワンストップでサポート。大阪・神戸・京都・奈良・滋賀・三重・和歌山対応。'
  });

  return (
    <main>
      <HomeHero />
      <HomeServices />
      <HomeImplementation />
      <HomeCases />
      <HomeFAQ />
      <HomeContact />
    </main>
  );
};

export default Home;