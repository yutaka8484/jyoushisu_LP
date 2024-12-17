import { FormData } from '../types/contact';
import { validateFormData } from './email/validation';
import { sanitizeFormData } from './email/sanitization';
import { sendEmail } from './email/sender';

export const sendContactEmail = async (data: FormData): Promise<void> => {
  // Validate form data
  validateFormData(data);

  // Sanitize form data
  const sanitizedData = sanitizeFormData(data);

  // Send email
  await sendEmail(sanitizedData);
};

export type { EmailData } from '../types/email';