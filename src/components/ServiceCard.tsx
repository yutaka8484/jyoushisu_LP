import { FC, useState } from 'react';
import { LucideIcon, ChevronDown, ChevronUp } from 'lucide-react';
import { ServicePlan } from '../types/service';
import { ServiceDetails } from './ServiceDetails';

interface ServiceCardProps {
  plan: ServicePlan;
  icon: LucideIcon;
}

export const ServiceCard: FC<ServiceCardProps> = ({ plan, icon: Icon }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="p-6">
        <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
          <Icon className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
        <p className="text-2xl font-bold text-blue-600 mb-4">{plan.price}</p>
        <p className="text-gray-600 mb-4">{plan.description}</p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-center w-full py-2 px-4 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
        >
          <span className="mr-2">{isExpanded ? '詳細を閉じる' : '詳細を見る'}</span>
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>
      {isExpanded && (
        <div className="border-t border-gray-100">
          <ServiceDetails plan={plan} />
        </div>
      )}
    </div>
  );
};