import React from 'react';
import { ServiceCard } from './ServiceCard';
import { ServicePlan } from '../types/service';
import { Settings, Shield, Cpu } from 'lucide-react';

interface ServicePlansProps {
  plans: ServicePlan[];
}

const planIcons = {
  basic: Settings,
  security: Shield,
  dx: Cpu,
};

export const ServicePlans: React.FC<ServicePlansProps> = ({ plans }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {plans.map((plan) => (
        <ServiceCard
          key={plan.id}
          plan={plan}
          icon={planIcons[plan.id as keyof typeof planIcons]}
        />
      ))}
    </div>
  );
};