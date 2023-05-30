import React from 'react';
import Image from 'next/image';
import foreground from '../public/banner-bg-1.png';

const Banner: React.FC = () => {
  return (
    <div className="flex items-center justify-center bg-banner bg-cover bg-center">
      <div className="relative z-20">
        <Image src={foreground} alt="Background" className="w-full" />
      </div>
    </div>
  );
};

export default Banner;
