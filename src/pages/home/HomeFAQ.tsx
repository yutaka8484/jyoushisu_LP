import React from 'react';
import { Section } from '../../components/Section';
import { FAQSection } from '../../components/FAQSection';
import { faqs } from '../../data/faqs';

export const HomeFAQ: React.FC = () => (
  <Section
    id="faq"
    title="よくある質問"
    subtitle="お客様からよくいただくご質問にお答えします"
    dark
  >
    <FAQSection faqs={faqs} />
  </Section>
);