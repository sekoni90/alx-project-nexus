import React, { useState } from 'react';
import { confirmPasswordReset } from '@/lib/auth';
import { useRouter } from 'next/router';
import AuthForm from './AuthForm';

const ResetPasswordForm: React.FC = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { oobCode } = router.query;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      await confirmPasswordReset(oobCode as string, password);
      router.push('/auth/signin');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <AuthForm title="Reset Password" onSubmit={handleSubmit} error={error}>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="New Password"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm Password"
        className="w-full p-2 border rounded"
        required
      />
      <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Reset Password
      </button>
    </AuthForm>
  );
};

export default ResetPasswordForm;

