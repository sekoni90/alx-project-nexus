import { useState } from 'react';
import { registerUser } from '@/lib/auth';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await registerUser(email, password);
      router.push('/auth/SignIn');
    } catch (err) {
      setError('Registration failed');
    }
  };

  return (
    <div className= "max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
      <h1 className="text-2xl font-bold mb-4 text-black">Register</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full p-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full p-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Register</button>
        <p className="text-center text-black">
          Already have an account? <Link href="/auth/Signin" className="text-blue-500 hover:text-blue-700">Sign In</Link>
        </p>
        {error && <p className="text-red-600 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
