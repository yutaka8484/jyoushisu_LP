export interface EmailConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

export interface EmailData {
  to_email: string;
  company_name: string;
  employee_count: string;
  contact_person: string;
  phone_number: string;
  from_email: string;
  message: string;
}

export interface EmailValidationConfig {
  minSubmissionInterval: number;
  defaultToEmail: string;
}