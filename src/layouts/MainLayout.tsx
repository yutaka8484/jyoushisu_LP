import React, { Suspense } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FloatingContactButton } from '../components/FloatingContactButton';
import { PageLoader } from '../components/PageLoader';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Suspense fallback={<PageLoader />}>
        {children}
      </Suspense>
      <Footer />
      <FloatingContactButton />
    </div>
  );
};