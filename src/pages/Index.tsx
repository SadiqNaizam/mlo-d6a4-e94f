import React from 'react';
import LoginForm from '../components/Auth/LoginForm';

/**
 * The main index page of the application, which serves as the login page.
 * It provides a centered layout for the LoginForm component.
 */
const IndexPage: React.FC = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-4 font-sans">
      <LoginForm />
    </main>
  );
};

export default IndexPage;
