// src/components/LoginButton.tsx
import React, { useState } from 'react';
import { auth, provider } from '../lib/firebase';
import { signInWithPopup } from 'firebase/auth';
import { FcGoogle } from "react-icons/fc";

const LoginButton: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, provider);
      // Actions after user login (like redirecting to the main page)
    } catch (error) {
      console.error("Error during login: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleLogin}
      disabled={loading} 
      className={`flex items-center justify-center text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} focus:outline-none focus:ring-2 focus:ring-blue-300`}
      aria-label="Login with Google"
    >
      {loading ? (
        <span className="loader"></span> 
      ) : (
        <>
          <FcGoogle className="mr-2" />
          Login with Google
        </>
      )}
    </button>
  );
};

export default LoginButton;
