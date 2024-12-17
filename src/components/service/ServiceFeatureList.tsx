import React from 'react';
import { ServiceFeature } from '../../types/service';

interface ServiceFeatureListProps {
  features: ServiceFeature[];
}

export const ServiceFeatureList: React.FC<ServiceFeatureListProps> = ({ features }) => (
  <div>
    <h4 className="text-lg font-bold mb-4">主な機能</h4>
    <div className="space-y-4">
      {features.map((feature, index) => (
        <div key={index}>
          <h5 className="font-semibold text-blue-600">{feature.title}</h5>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
);