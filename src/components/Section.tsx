import { FC, ReactNode } from 'react';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}

export const Section: FC<SectionProps> = ({ 
  title, 
  subtitle, 
  children, 
  className = '',
  dark = false,
  id
}) => {
  return (
    <section id={id} className={`py-20 ${dark ? 'bg-gray-900 text-white' : 'bg-white'} ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          {subtitle && <p className="text-xl text-gray-500">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
};