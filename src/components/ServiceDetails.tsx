import React from 'react';
import { ServicePlan } from '../types/service';
import { ServiceFeatureList } from './service/ServiceFeatureList';
import { ServiceBenefitList } from './service/ServiceBenefitList';
import { ServiceCaseList } from './service/ServiceCaseList';

interface ServiceDetailsProps {
  plan: ServicePlan;
}

export const ServiceDetails: React.FC<ServiceDetailsProps> = ({ plan }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg space-y-8">
    <ServiceFeatureList features={plan.features} />
    <ServiceBenefitList benefits={plan.benefits} />
    {plan.cases && <ServiceCaseList cases={plan.cases} />}

    {plan.options && (
      <div>
        <h4 className="text-lg font-bold mb-4">オプションメニュー</h4>
        <ul className="list-disc list-inside text-gray-600">
          {plan.options.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      </div>
    )}

    {plan.expandability && (
      <div>
        <h4 className="text-lg font-bold mb-4">将来への拡張性</h4>
        <p className="text-gray-600">{plan.expandability}</p>
      </div>
    )}
  </div>
);