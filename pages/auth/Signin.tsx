import { useState } from 'react';
import { signInUser } from '@/lib/auth';
import { useRouter } from 'next/router';
import Link from 'next/link';

const SignIn = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signInUser(email, password);
      router.push('/');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
      <h1 className="text-2xl font-bold mb-4 text-black">Sign In</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Sign In
        </button>
        <p className="text-center">
          <Link href="/auth/Forgot-password" className="text-blue-500 hover:text-blue-700">
            Forgot Password?
          </Link>
        </p>
        <p className="text-center text-black">
          Don't have an account?{' '}
          <Link href="/auth/Register" className="text-blue-500 hover:text-blue-700">
            Register
          </Link>
        </p>
        {error && <p className="text-red-600 mt-2 text-center">{error}</p>}
      </form>
    </div>
  );
};

export default SignIn;