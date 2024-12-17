import React from 'react';
import { Section } from '../../components/Section';
import { ServicePlans } from '../../components/ServicePlans';
import { servicePlans } from '../../data/servicePlans';

export const HomeServices: React.FC = () => (
  <Section
    id="services"
    title="サービスプラン"
    subtitle="お客様のニーズに合わせた最適なプランをご用意しております"
  >
    <ServicePlans plans={servicePlans} />
  </Section>
);