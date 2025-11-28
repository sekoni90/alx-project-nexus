import { useEffect } from 'react';
import { verifyEmail } from '@/lib/auth';
import { useRouter } from 'next/router';

const VerifyEmail = () => {
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

  return <div>Verifying email...</div>;
};

export default VerifyEmail;
