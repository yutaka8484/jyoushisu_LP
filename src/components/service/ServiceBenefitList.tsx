import React from 'react';
import { ServiceBenefit } from '../../types/service';

interface ServiceBenefitListProps {
  benefits: ServiceBenefit[];
}

export const ServiceBenefitList: React.FC<ServiceBenefitListProps> = ({ benefits }) => (
  <div>
    <h4 className="text-lg font-bold mb-4">導入メリット</h4>
    <div className="space-y-4">
      {benefits.map((benefit, index) => (
        <div key={index}>
          <h5 className="font-semibold text-blue-600">{benefit.title}</h5>
          <p className="text-gray-600">{benefit.description}</p>
        </div>
      ))}
    </div>
  </div>
);