import React, { useState } from 'react';
import { signInUser } from '@/lib/auth';
import { useRouter } from 'next/router';
import Link from 'next/link';
import AuthForm from './AuthForm';

const SignInForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInUser(email, password);
      router.push('/');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <AuthForm title="Sign In" onSubmit={handleSubmit} error={error}>
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
        className="w-full p-2 border rounded text-black"
        required
      />
      <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
        Sign In
      </button>
      <p className="text-center">
        <Link href="/auth/forgot-password" className="text-blue-500">Forgot Password?</Link>
      </p>
      <p className="text-center text-black">
        Don't have an account? <Link href="/auth/register" className="text-blue-500">Register</Link>
      </p>
    </AuthForm>
  );
};

export default SignInForm;