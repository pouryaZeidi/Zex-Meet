// components/WebCam.tsx
import React, { useEffect, useRef } from 'react';

const Webcam: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const getUserMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing webcam:', error);
      }
    };

    getUserMedia();

    return () => {
      if (videoRef.current) {
        videoRef.current.srcObject = null; // Stop the video stream on unmount
      }
    };
  }, []);

  return (
    <div className="flex-1 bg-gray-200 p-4 rounded-lg shadow-lg">
      <video 
        ref={videoRef} 
        autoPlay 
        playsInline 
        className="w-full h-full object-cover rounded-lg" 
      />
    </div>
  );
};

export default Webcam;
