import React from 'react';
import Image from 'next/image';
import email from '../public/email.svg';
import call from '../public/call.svg';


const Footer: React.FC = () => {
  return (
    <footer className="footer md:p-20 bg-white text-black flex justify-between ">
        <div className='flex flex-col ml-10 t'>
          <span className="title">Shipping Information</span>
          <span className="title">Terms And Conditions</span>
          <span className="title">Privacy Policy</span>
        </div>
        <div className='flex'>
          <div className="flex flex-col ml-20 mr-10">
          <span className="footer-title">Contact</span>
            <div className='flex'>
            <Image src={email} alt="email" className="mr-2" />
            <a className="link link-hover" href="mailto:argishtimargishti@gmail.com">
              argishtimargishti@gmail.com
            </a>
            </div>
            <div className='flex mt-1'>
            <Image src={call} alt="email" className="mr-2" />
            <span>+374 94731228</span>
            </div>
          </div>
          <div>
          <div className="flex items-center flex-col mr-10">
          <span className="footer-title">Follow</span>
            <a href="https://www.instagram.com">
              Instagram
            </a>
            <a href="https://www.facebook.com" className='mt-1'>
              Facebook
            </a>
          </div>
        </div>
        </div>
    </footer>
  );
};

export default Footer;
