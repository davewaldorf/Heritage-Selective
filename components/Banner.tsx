import React from 'react';
import Image from 'next/image';
import foreground from '../public/banner-bg-1.png';
import background from '../public/banner-bg-2.png';

const Banner: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="absolute z-10 ">
        <Image src={background} alt="Foreground"  />
      </div>
      <div className="relative z-20">
        <Image src={foreground} alt="Background" height={600} />
      </div>
    </div>
  );
};

export default Banner;
