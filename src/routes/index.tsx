import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageLoader } from '../components/PageLoader';

const Home = React.lazy(() => import('../pages/Home'));
const PrivacyPolicy = React.lazy(() => import('../pages/PrivacyPolicy'));
const Terms = React.lazy(() => import('../pages/Terms'));
const Sitemap = React.lazy(() => import('../pages/Sitemap'));

export const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/sitemap" element={<Sitemap />} />
      </Routes>
    </Suspense>
  );
};