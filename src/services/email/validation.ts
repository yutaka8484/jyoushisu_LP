import { FormData } from '../../types/contact';
import { emailValidationConfig } from '../../config/email';

export const validateFormData = (data: FormData): void => {
  if (!data.csrfToken || data.csrfToken !== sessionStorage.getItem('csrfToken')) {
    throw new Error('Invalid request');
  }

  const lastSubmission = sessionStorage.getItem('lastSubmission');
  if (lastSubmission && 
      Date.now() - parseInt(lastSubmission) < emailValidationConfig.minSubmissionInterval) {
    throw new Error('Please wait before submitting again');
  }
};