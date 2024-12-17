import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { updateSEO } from '../utils/seo';

interface UseSEOProps {
  title: string;
  description: string;
}

export const useSEO = ({ title, description }: UseSEOProps) => {
  const location = useLocation();

  useEffect(() => {
    updateSEO({
      title,
      description,
      path: location.pathname,
    });
  }, [title, description, location.pathname]);
};