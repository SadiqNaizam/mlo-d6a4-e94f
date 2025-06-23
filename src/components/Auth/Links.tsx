import React from 'react';
import { cn } from '@/lib/utils';

interface AuthLinksProps {
  className?: string;
}

const Links: React.FC<AuthLinksProps> = ({ className }) => {
  return (
    <p className={cn("text-center text-sm text-secondary-text", className)}>
      Don't have an account?{' '}
      <a href="#" className="font-medium text-primary hover:underline">
        Sign up
      </a>
    </p>
  );
};

export default Links;
