import React from 'react';
import { Section } from '../../components/Section';
import { ImplementationFlow } from '../../components/ImplementationFlow';
import { implementationSteps } from '../../data/implementationSteps';

export const HomeImplementation: React.FC = () => (
  <Section
    id="flow"
    title="導入までの流れ"
    subtitle="お問い合わせから運用開始まで、6つのステップで着実に進めていきます"
    dark
  >
    <ImplementationFlow steps={implementationSteps} />
  </Section>
);