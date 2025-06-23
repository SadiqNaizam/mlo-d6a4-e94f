/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';

interface InputFieldsProps {
    form: UseFormReturn<any>; 
}

const InputFields: React.FC<InputFieldsProps> = ({ form }) => {
    return (
        <div className="space-y-4">
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className="sr-only">Email Address</FormLabel>
                        <FormControl>
                            {/* Correcting typo "adress" from OCR to "address" */}
                            <Input placeholder="Email address" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel className="sr-only">Password</FormLabel>
                        <FormControl>
                            <Input type="password" placeholder="Password" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <div className="flex items-center justify-between">
                <FormField
                    control={form.control}
                    name="remember"
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                            <FormControl>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                            <FormLabel className="text-sm font-normal text-secondary-text">
                                Remember for 30 days
                            </FormLabel>
                        </FormItem>
                    )}
                />
                 <Button variant="link" type="button" className="h-auto p-0 text-sm font-medium text-primary hover:underline">
                    Forgot password
                 </Button>
            </div>
        </div>
    );
};

export default InputFields;
