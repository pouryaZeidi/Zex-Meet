import React, { useEffect, useState } from 'react';
import LoginButton from '../components/LoginButton';
import { auth } from '../lib/firebase';
import { useRouter } from 'next/router';
import { onAuthStateChanged } from "firebase/auth";

const Login: React.FC = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('/meeting');
      }
    }, (error) => {
      setErrorMessage(error.message); // نمایش خطا در صورت وجود
    });

    return () => unsubscribe();
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-fixed bg-right bg-no-repeat bg-cover" style={{ backgroundImage: "url('/Background.png')" }}>
      <div className="absolute top-4 left-4">
        <img src="/Logo.png" alt="Logo" className="w-36 h-20" /> 
      </div>
      <h1 className="text-3xl mb-6">Welcome to Zex-Meet</h1>
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>} {/* نمایش پیام خطا */}
      <LoginButton />
    </div>
  );
};

export default Login;
