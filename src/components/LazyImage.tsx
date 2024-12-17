import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className, ...props }) => {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px'
  });

  return (
    <div ref={ref} className={className}>
      {isVisible ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={className}
          {...props}
        />
      ) : (
        <div className="animate-pulse bg-gray-200 w-full h-full" />
      )}
    </div>
  );
};