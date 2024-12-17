import React from 'react';
import { ImplementationStep } from '../types/flow';
import { Accordion } from './Accordion';

interface ImplementationFlowProps {
  steps: ImplementationStep[];
}

export const ImplementationFlow: React.FC<ImplementationFlowProps> = ({ steps }) => {
  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {steps.map((step, index) => (
        <Accordion
          key={step.id}
          title={`STEP ${index + 1}. ${step.title}`}
        >
          <div className="space-y-4">
            <div>
              {step.description.map((desc, i) => (
                <p key={i} className="text-gray-600 mb-2">{desc}</p>
              ))}
            </div>
            <div>
              <h4 className="font-semibold text-blue-600 mb-2">ポイント:</h4>
              <ul className="list-disc list-inside text-gray-600">
                {step.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </Accordion>
      ))}
      
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-bold text-blue-800 mb-2">サポート体制の強化</h4>
        <p className="text-gray-600">
          導入後も定期的な状況確認を行い、新たな課題や改善点を反映。
          継続的な最適化を通じて、IT環境をお客様と共に育成していきます。
        </p>
      </div>
    </div>
  );
};