import React, { useState } from 'react';
import { registerUser } from '@/lib/auth';
import { useRouter } from 'next/router';
import Link from 'next/link';
import AuthForm from './AuthForm';

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      await registerUser(email, password);
      router.push('/auth/signin');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <AuthForm title="Register" onSubmit={handleSubmit} error={error}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
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
        Register
      </button>
      <p className="text-center">
        Already have an account? <Link href="/auth/signin" className="text-blue-500">Sign In</Link>
      </p>
    </AuthForm>
  );
};

export default RegisterForm;