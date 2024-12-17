import React from 'react';
import { Section } from '../../components/Section';
import { ContactForm } from '../../components/ContactForm';

export const HomeContact: React.FC = () => (
  <Section
    id="contact"
    title="お問い合わせ"
    subtitle="まずは無料相談から。お気軽にお問い合わせください"
  >
    <ContactForm />
  </Section>
);