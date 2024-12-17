import React from 'react';

interface ContactFormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'tel' | 'email' | 'select' | 'textarea';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  options?: { value: string; label: string; }[];
  pattern?: string;
  rows?: number;
  colSpan?: 'full' | 'half';
}

export const ContactFormField: React.FC<ContactFormFieldProps> = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required = false,
  options,
  pattern,
  rows,
  colSpan = 'half'
}) => {
  const baseClassName = "w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent";
  const containerClassName = `col-span-2 ${colSpan === 'half' ? 'md:col-span-1' : ''}`;

  return (
    <div className={containerClassName}>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      {type === 'textarea' ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          rows={rows}
          className={baseClassName}
        />
      ) : type === 'select' ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={baseClassName}
        >
          <option value="">選択してください</option>
          {options?.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          pattern={pattern}
          className={baseClassName}
        />
      )}
    </div>
  );
};