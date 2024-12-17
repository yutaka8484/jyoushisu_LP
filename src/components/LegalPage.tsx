import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';

interface LegalPageProps {
  title: string;
  children: React.ReactNode;
}

export const LegalPage: React.FC<LegalPageProps> = ({ title, children }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <main className="container mx-auto px-4 py-24">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Button
            variant="secondary"
            onClick={handleBack}
            className="group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            ホームに戻る
          </Button>
        </div>

        <h1 className="text-3xl font-bold mb-8">{title}</h1>

        <div className="prose prose-lg max-w-none">
          {children}
        </div>
      </div>
    </main>
  );
};