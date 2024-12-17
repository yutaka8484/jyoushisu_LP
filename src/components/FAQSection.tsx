import React, { useState } from 'react';
import { FAQ } from '../types/faq';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQSectionProps {
  faqs: FAQ[];
}

export const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid gap-4">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="bg-white/90 backdrop-blur rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <button
              className="w-full px-6 py-4 text-left flex items-start space-x-4"
              onClick={() => toggleFAQ(faq.id)}
              aria-expanded={openId === faq.id}
            >
              <HelpCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div className="flex-grow">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  {openId === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0 ml-4" />
                  )}
                </div>
                <div
                  className={`mt-2 text-gray-700 overflow-hidden transition-all duration-300 ${
                    openId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="pb-4">{faq.answer}</p>
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};