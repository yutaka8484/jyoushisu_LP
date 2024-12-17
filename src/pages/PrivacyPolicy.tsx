import React from 'react';
import { LegalPage } from '../components/LegalPage';
import { PrivacyContent } from '../components/legal/PrivacyContent';

const PrivacyPolicy: React.FC = () => {
  return (
    <LegalPage title="プライバシーポリシー">
      <PrivacyContent />
    </LegalPage>
  );
};

export default PrivacyPolicy;