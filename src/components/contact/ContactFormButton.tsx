import React from 'react';
import { Button } from '../Button';

interface ContactFormButtonProps {
  isSubmitting: boolean;
}

export const ContactFormButton: React.FC<ContactFormButtonProps> = ({ isSubmitting }) => (
  <div className="text-center pt-4">
    <Button 
      type="submit" 
      className="px-8"
      disabled={isSubmitting}
    >
      {isSubmitting ? '送信中...' : 'お問い合わせを送信'}
    </Button>
  </div>
);