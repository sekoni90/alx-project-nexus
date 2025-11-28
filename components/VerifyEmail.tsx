import React, { useEffect } from 'react';
import { verifyEmail } from '@/lib/auth';
import { useRouter } from 'next/router';

const VerifyEmail: React.FC = () => {
  const router = useRouter();
  const { oobCode } = router.query;

  useEffect(() => {
    const verify = async () => {
      if (oobCode) {
        try {
          await verifyEmail(oobCode as string);
          router.push('/auth/signin');
        } catch (err) {
          console.error('Error verifying email');
        }
      }
    };
    verify();
  }, [oobCode, router]);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Verifying Email...</h2>
    </div>
  );
};

export default VerifyEmail;
