import React from 'react';
import fb from '../assets/Icons/fb.svg'
import insta from '../assets/Icons/insta.svg'
import twit from '../assets/Icons/twit.svg'
import link from '../assets/Icons/link.svg'

const Footer = () => {
  return (
    <footer className="py-8 text-center border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center pb-8">
          
          {/* top head */}
          <div className='m-auto'>
           <ul className='w-full text-xl text-white font-semibold md:w-auto flex justify-center md:justify-end space-x-6'>
             <li className='hover:text-zinc-200'><img src={fb}/>Facebook</li>  
             <li className='hover:text-zinc-200'><img src={twit}/>Twitter</li>
             <li className='hover:text-zinc-200'><img src={insta}/>Instagram</li>
             <li className='hover:text-zinc-200'><img src={link}/>LinkedIn</li>
            </ul>  
          </div>

        </div>
        <div className="flex flex-wrap justify-between text-center space-y-8 md:space-y-0">
          <div className="w-full md:w-1/3">
            <h4 className="mb-2 text-2xl font-semibold text-white">About Us</h4>
            <ul className='text-white'>
              <li className='hover:opacity-60 cursor-pointer'>Our Story</li>
              <li className='hover:opacity-60 cursor-pointer'>Our Vision</li>
              <li className='hover:opacity-60 cursor-pointer'>Team</li>
              <li className='hover:opacity-60 cursor-pointer'>Careers</li>
              <li className='hover:opacity-60 cursor-pointer'>Contact Us</li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="mb-2 text-2xl font-semibold text-white">Sections</h4>
            <ul className='text-white'>
              <li className='hover:opacity-60 cursor-pointer'>Business</li>
              <li className='hover:opacity-60 cursor-pointer'>Health</li>
              <li className='hover:opacity-60 cursor-pointer'>Sports</li>
              <li className='hover:opacity-60 cursor-pointer'>Entertainment</li>
              <li className='hover:opacity-60 cursor-pointer'>Technology</li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="mb-2 text-2xl font-semibold text-white">Support</h4>
            <ul className='text-white'>
              <li className='hover:opacity-60 cursor-pointer'>Help Center</li>
              <li className='hover:opacity-60 cursor-pointer'>Subscribe</li>
              <li className='hover:opacity-60 cursor-pointer'>Advertise</li>
              <li className='hover:opacity-60 cursor-pointer'>Privacy Policy</li>
              <li className='hover:opacity-60 cursor-pointer'>Terms of Service</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-200 mt-8">
          <p className="text-white">&copy; 2024 InfoNest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
