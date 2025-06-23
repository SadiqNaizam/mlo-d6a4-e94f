import React from 'react';
import { Box } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="bg-primary p-1.5 rounded-md">
         <Box className="h-6 w-6 text-primary-foreground" />
      </div>
      <span className="text-2xl font-semibold text-primary-text">
        InsideBox
      </span>
    </div>
  );
};

export default Logo;
