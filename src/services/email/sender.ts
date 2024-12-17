import emailjs from '@emailjs/browser';
import { EmailData } from '../../types/email';
import { emailConfig } from '../../config/email';

export const sendEmail = async (data: EmailData): Promise<void> => {
  try {
    await emailjs.send(
      emailConfig.serviceId,
      emailConfig.templateId,
      data,
      emailConfig.publicKey
    );
    sessionStorage.setItem('lastSubmission', Date.now().toString());
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('Failed to send email. Please try again later.');
  }
};