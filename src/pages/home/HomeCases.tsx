import React from 'react';
import { Section } from '../../components/Section';
import { CaseStudies } from '../../components/CaseStudies';
import { caseStudies } from '../../data/caseStudies';

export const HomeCases: React.FC = () => (
  <Section
    id="cases"
    title="導入事例"
    subtitle="お客様の成功事例をご紹介します"
  >
    <CaseStudies cases={caseStudies} />
  </Section>
);