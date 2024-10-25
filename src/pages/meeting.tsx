// pages/meeting.tsx
import React, { useEffect, useState } from 'react';
import { auth } from '../lib/firebase';
import { useRouter } from 'next/router';
import UserInfo from '../components/UserInfo';
import Webcam from '../components/WebCam';

const Meeting: React.FC = () => {
  const router = useRouter();
  const [userName, setUserName] = useState<string | null>(null);
  const [connectionLink, setConnectionLink] = useState<string>('');

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      router.push('/');
    } else {
      const email = user.email;
      if (email) {
        // Assuming the format is firstName.lastName@example.com
        const namePart = email.split('@')[0]; // Get the part before the '@'
        const [firstName, lastName] = namePart.split('.'); // Split by '.'

        if (firstName && lastName) {
          // Capitalize the first letter of firstName and lastName
          setUserName(`${firstName.charAt(0).toUpperCase() + firstName.slice(1)} ${lastName.charAt(0).toUpperCase() + lastName.slice(1)}`);
        } else {
          // If we don't get a lastName, try just setting firstName
          setUserName(firstName.charAt(0).toUpperCase() + firstName.slice(1));
        }
      }

      // Create connection link
      setConnectionLink(`${window.location.href}/join/${user.uid}`);
    }
  }, [router]);

  return (
    <div className="flex h-screen">
      <UserInfo userName={userName} connectionLink={connectionLink} />
      <Webcam />
    </div>
  );
};

export default Meeting;
