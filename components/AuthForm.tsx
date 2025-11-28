import React, { ReactNode } from 'react';

interface AuthFormProps {
  title: string;
  children: ReactNode;
  onSubmit: (e: React.FormEvent) => void;
  error?: string;
}

const AuthForm: React.FC<AuthFormProps> = ({ title, children, onSubmit, error }) => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        {children}
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </form>
    </div>
  );
};

export default AuthForm;
