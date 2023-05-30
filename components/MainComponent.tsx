import React from 'react';
import Image from 'next/image';
import foreground from '../public/banner-bg-1.png';
import background from '../public/banner-bg-2.png';


const MainComponent: React.FC = () => {
  return (
    <div className="relative inset-0 flex items-center justify-center">
    <Image src={foreground} alt="Background" className="z-20" width={400}/>
    <Image src={background} alt="Foreground" className="absolute z-10"/>
    </div>
  );
};

export default MainComponent;
