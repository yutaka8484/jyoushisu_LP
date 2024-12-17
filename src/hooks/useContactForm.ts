import { useState, useCallback } from 'react';
import { useAnalytics } from './useAnalytics';
import { sendContactEmail } from '../services/email';
import { generateCSRFToken } from '../middleware/security';
import { toast } from 'react-toastify';
import { FormData } from '../types/contact';

const initialFormData: FormData = {
  companyName: '',
  employeeCount: '',
  contactPerson: '',
  phoneNumber: '',
  email: '',
  inquiry: '',
  csrfToken: generateCSRFToken()
};

export const useContactForm = () => {
  const { trackEvent } = useAnalytics();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      await sendContactEmail(formData);
      toast.success('お問い合わせを送信しました');
      trackEvent('Contact', 'Form Submit', 'Success');
      setFormData(prev => ({
        ...initialFormData,
        csrfToken: generateCSRFToken()
      }));
    } catch (error) {
      toast.error('送信に失敗しました。しばらく経ってから再度お試しください');
      trackEvent('Contact', 'Form Error', error instanceof Error ? error.message : 'Unknown Error');
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, isSubmitting, trackEvent]);

  const handleChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  return {
    formData,
    isSubmitting,
    handleSubmit,
    handleChange
  };
};