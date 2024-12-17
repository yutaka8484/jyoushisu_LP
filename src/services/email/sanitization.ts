import { sanitizeInput } from '../../middleware/security';
import { FormData } from '../../types/contact';
import { EmailData } from '../../types/email';
import { emailValidationConfig } from '../../config/email';

export const sanitizeFormData = (data: FormData): EmailData => ({
  to_email: emailValidationConfig.defaultToEmail,
  company_name: sanitizeInput(data.companyName),
  employee_count: sanitizeInput(data.employeeCount),
  contact_person: sanitizeInput(data.contactPerson),
  phone_number: sanitizeInput(data.phoneNumber),
  from_email: sanitizeInput(data.email),
  message: sanitizeInput(data.inquiry),
});