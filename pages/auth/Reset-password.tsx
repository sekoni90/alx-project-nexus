import { useState } from 'react';
import { confirmPasswordReset } from '@/lib/auth';
import { useRouter } from 'next/router';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { oobCode } = router.query;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!oobCode) return;
    try {
      await confirmPasswordReset(oobCode as string, password);
      router.push('/auth/signin');
    } catch (err) {
      setError('Error resetting password');
    }
  };

  return (
    <div>
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit}>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="New Password" />
        <button type="submit">Reset</button>
        {error && <p className="text-red-600 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default ResetPassword;