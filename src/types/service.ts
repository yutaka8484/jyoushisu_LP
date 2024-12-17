export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceCase {
  companyType: string;
  challenge: string;
  effects: string[];
}

export interface ServicePlan {
  id: string;
  title: string;
  price: string;
  description: string;
  features: ServiceFeature[];
  benefits: ServiceBenefit[];
  cases?: ServiceCase[];
  options?: string[];
  expandability?: string;
}