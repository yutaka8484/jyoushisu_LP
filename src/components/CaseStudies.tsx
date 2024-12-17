import React, { useState } from 'react';
import { CaseStudy } from '../types/case';
import { CaseStudyCard } from './CaseStudyCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './Button';

interface CaseStudiesProps {
  cases: CaseStudy[];
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ cases }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? cases.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === cases.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Navigation Buttons */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-10">
        <Button
          variant="secondary"
          onClick={handlePrevious}
          className="pointer-events-auto transform -translate-x-1/2 shadow-lg"
          aria-label="Previous case study"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button
          variant="secondary"
          onClick={handleNext}
          className="pointer-events-auto transform translate-x-1/2 shadow-lg"
          aria-label="Next case study"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Case Study Cards */}
      <div className="overflow-hidden">
        <div 
          className="transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <div className="flex">
            {cases.map((caseStudy) => (
              <div 
                key={caseStudy.id}
                className="w-full flex-shrink-0"
              >
                <CaseStudyCard caseStudy={caseStudy} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {cases.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to case study ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};