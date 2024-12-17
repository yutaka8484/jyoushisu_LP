import { EmailConfig, EmailValidationConfig } from '../types/email';

export const emailConfig: EmailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
};

export const emailValidationConfig: EmailValidationConfig = {
  minSubmissionInterval: 60000, // 1 minute in milliseconds
  defaultToEmail: 'yutaka8484@gmail.com'
};