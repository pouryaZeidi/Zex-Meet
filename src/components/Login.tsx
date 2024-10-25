import React from 'react';
import LoginButton from '../components/LoginButton';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-fixed bg-right bg-no-repeat bg-cover" style={{ backgroundImage: "url('/Background.png')" }}>
     
      <div className="absolute top-4 left-4">
        <img src="/Logo.png" alt="Logo" className="w-36 h-20" /> 
      </div>
      <h1 className="text-3xl mb-6">Welcome to Zex-Meet</h1>
      <LoginButton />
    </div>
  );
};

export default Home;
