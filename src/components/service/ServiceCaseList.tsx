import React from 'react';
import { ServiceCase } from '../../types/service';

interface ServiceCaseListProps {
  cases: ServiceCase[];
}

export const ServiceCaseList: React.FC<ServiceCaseListProps> = ({ cases }) => (
  <div>
    <h4 className="text-lg font-bold mb-4">導入事例</h4>
    <div className="space-y-6">
      {cases.map((case_, index) => (
        <div key={index} className="bg-gray-50 p-4 rounded-lg">
          <h5 className="font-semibold text-blue-600 mb-2">{case_.companyType}</h5>
          <div className="mb-2">
            <span className="font-semibold">課題：</span>
            <p className="text-gray-600">{case_.challenge}</p>
          </div>
          <div>
            <span className="font-semibold">導入後効果：</span>
            <ul className="list-disc list-inside text-gray-600 mt-1">
              {case_.effects.map((effect, effectIndex) => (
                <li key={effectIndex}>{effect}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
);