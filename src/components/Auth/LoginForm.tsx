/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FieldValues } from 'react-hook-form';
import * as z from 'zod';

import { Form } from '@/components/ui/form';
import InputFields from './InputFields';
import Buttons from './Buttons';
import Links from './Links';
import Logo from './Logo';

// Schema for form validation using Zod
const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }).min(1, { message: "Email is required." }),
  password: z.string().min(1, { message: "Password is required." }),
  remember: z.boolean().default(false),
});

type FormValues = z.infer<typeof formSchema>;

const LoginForm: React.FC = () => {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            remember: false,
        },
    });

    const onSubmit = (values: FormValues) => {
        console.log("Form Submitted:", values);
        // In a real app, you would handle the API call here.
    };

    // This component acts as a container for both the Logo and the form card,
    // fulfilling the component hierarchy requirement where LoginForm composes Logo.
    // The parent page/template would handle the overall centering of this component.
    return (
        <div className="w-full max-w-md">
            <div className="mb-10">
                <Logo />
            </div>
            <div className="bg-surface rounded-lg shadow p-8 w-full space-y-6">
                <div className="text-left">
                    <p className="text-sm text-secondary-text">Please enter your details</p>
                    <h1 className="text-3xl font-bold text-primary-text mt-1">Welcome back</h1>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <InputFields form={form as any} />
                        <Buttons isSubmitting={form.formState.isSubmitting} />
                    </form>
                </Form>

                <Links />
            </div>
        </div>
    );
};

export default LoginForm;
