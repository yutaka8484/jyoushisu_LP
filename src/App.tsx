import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { AppRoutes } from './routes';
import { AnalyticsProvider } from './providers/AnalyticsProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AnalyticsProvider>
        <MainLayout>
          <AppRoutes />
        </MainLayout>
        <ToastContainer position="bottom-right" />
      </AnalyticsProvider>
    </BrowserRouter>
  );
};

export default App;