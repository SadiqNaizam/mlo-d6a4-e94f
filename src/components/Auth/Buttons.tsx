import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// NOTE: lucide-react does not have a Google brand icon.
// Per project requirements, we cannot use other icon libraries or SVGs.
// Thus, the "Sign in with Google" button will not have an icon.

interface AuthButtonsProps {
  className?: string;
  isSubmitting?: boolean;
}

const Buttons: React.FC<AuthButtonsProps> = ({ className, isSubmitting }) => {
  return (
    <div className={cn("w-full space-y-3 pt-2", className)}>
      <Button 
        type="submit" 
        className="w-full"
        disabled={isSubmitting}
      >
        Sign up
      </Button>
      <Button 
        variant="outline" 
        type="button"
        className="w-full border-border text-secondary-text"
        disabled={isSubmitting}
      >
        Sign in with Google
      </Button>
    </div>
  );
};

export default Buttons;
