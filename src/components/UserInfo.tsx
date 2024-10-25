// components/UserInfo.tsx
import React from 'react';
import { auth } from '../lib/firebase'; // Firebase import
import { useRouter } from 'next/router';

interface UserInfoProps {
  userName: string | null;
  connectionLink: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ userName, connectionLink }) => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      router.push('/'); // Redirect to login page
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="flex flex-col items-start justify-center p-4 bg-white shadow-lg rounded-lg w-80 h-full">
      <h2 className="text-2xl font-bold mb-2">Welcome, {userName || 'User'}</h2>
      <p className="text-gray-600 mb-4">Share this link to connect:</p>
      <div className="flex items-center justify-between w-full mb-4">
        <input
          type="text"
          value={connectionLink}
          readOnly
          className="border rounded-md p-2 w-3/4"
        />
        <button className="ml-2 bg-blue-500 text-white rounded-md px-4 py-2">
          Copy
        </button>
      </div>
      <button 
        onClick={handleLogout}
        className="mt-4 bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default UserInfo;
