import React from 'react';
import { ContactFormFields } from './contact/ContactFormFields';
import { ContactFormButton } from './contact/ContactFormButton';
import { useContactForm } from '../hooks/useContactForm';

export const ContactForm: React.FC = () => {
  const { formData, isSubmitting, handleSubmit, handleChange } = useContactForm();

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <ContactFormFields 
        formData={formData}
        onChange={handleChange}
      />
      <ContactFormButton isSubmitting={isSubmitting} />
    </form>
  );
};