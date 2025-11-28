import React, { useState } from 'react';
import { sendPasswordResetEmail } from '@/lib/auth';
import AuthForm from './AuthForm';

const ForgotPasswordForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(email);
      setMessage('Check your email for a reset link');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <AuthForm title="Forgot Password" onSubmit={handleSubmit} error={error}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full p-2 border rounded"
        required
      />
      <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Send Reset Link
      </button>
      {message && <p className="text-green-500 text-sm">{message}</p>}
    </AuthForm>
  );
};

export default ForgotPasswordForm;
