import React from 'react';
import { ContactFormField } from './ContactFormField';
import { FormData } from '../../types/contact';

interface ContactFormFieldsProps {
  formData: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const employeeCountOptions = [
  { value: '1-10', label: '1-10名' },
  { value: '11-50', label: '11-50名' },
  { value: '51-100', label: '51-100名' },
  { value: '101-300', label: '101-300名' },
  { value: '301+', label: '301名以上' }
];

export const ContactFormFields: React.FC<ContactFormFieldsProps> = ({ formData, onChange }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <ContactFormField
      label="会社名"
      name="companyName"
      value={formData.companyName}
      onChange={onChange}
      required
    />

    <ContactFormField
      label="従業員数"
      name="employeeCount"
      type="select"
      value={formData.employeeCount}
      onChange={onChange}
      required
      options={employeeCountOptions}
    />

    <ContactFormField
      label="ご担当者名"
      name="contactPerson"
      value={formData.contactPerson}
      onChange={onChange}
      required
      colSpan="full"
    />

    <ContactFormField
      label="電話番号"
      name="phoneNumber"
      type="tel"
      value={formData.phoneNumber}
      onChange={onChange}
      required
      pattern="[0-9-]{10,}"
    />

    <ContactFormField
      label="メールアドレス"
      name="email"
      type="email"
      value={formData.email}
      onChange={onChange}
      required
    />

    <ContactFormField
      label="お問い合わせ内容"
      name="inquiry"
      type="textarea"
      value={formData.inquiry}
      onChange={onChange}
      required
      rows={5}
      colSpan="full"
    />
  </div>
);