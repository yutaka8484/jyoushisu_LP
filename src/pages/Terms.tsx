import React from 'react';
import { LegalPage } from '../components/LegalPage';
import { TermsContent } from '../components/legal/TermsContent';

const Terms: React.FC = () => {
  return (
    <LegalPage title="利用規約">
      <TermsContent />
    </LegalPage>
  );
};

export default Terms;