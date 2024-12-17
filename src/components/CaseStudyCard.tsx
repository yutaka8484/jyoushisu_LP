import React from 'react';
import { CaseStudy } from '../types/case';
import { Building2, CheckCircle2, Quote } from 'lucide-react';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Building2 className="w-12 h-12 text-blue-600" />
        <div>
          <h3 className="text-2xl font-bold">{caseStudy.companyType}</h3>
          <p className="text-gray-600">{caseStudy.industry}</p>
        </div>
      </div>

      {/* Challenges */}
      <div>
        <h4 className="text-lg font-semibold mb-3 text-blue-800">課題:</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {caseStudy.challenges.map((challenge, index) => (
            <li key={index}>{challenge}</li>
          ))}
        </ul>
      </div>

      {/* Solutions */}
      <div>
        <h4 className="text-lg font-semibold mb-3 text-blue-800">導入内容:</h4>
        <div className="space-y-4">
          {caseStudy.solutions.map((solution, index) => (
            <div key={index}>
              <h5 className="font-semibold text-blue-600 mb-2">{solution.title}</h5>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {solution.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Effects */}
      <div>
        <h4 className="text-lg font-semibold mb-3 text-blue-800">導入効果:</h4>
        <div className="grid gap-4">
          {caseStudy.effects.map((effect, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h5 className="font-semibold text-gray-800">{effect.title}</h5>
                <p className="text-gray-600">{effect.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex space-x-3">
            <Quote className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <p className="text-gray-700 italic">{caseStudy.testimonial}</p>
          </div>
        </div>
      )}

      {/* Conclusion */}
      <div className="border-t pt-4">
        <p className="text-gray-700">{caseStudy.conclusion}</p>
      </div>
    </div>
  );
};