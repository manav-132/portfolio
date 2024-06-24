import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='bg-slate-800 text-white py-10 lg:px-4'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {/* Logo and About Section */}
        <div className='mb-6 md:mb-0'>
          <span className='text-xl md:text-2xl font-semibold text-amber-600 uppercase'>MANAV</span>
          <p className='text-sm md:text-base my-4'>Thank you for visiting my portfolio! I'm excited to connect and explore opportunities together. Feel free to reach out via email or social media I look forward to hearing from you!</p>
        </div>

        {/* Services Section */}
        <div>
          <h2 className='text-xl md:text-2xl font-semibold text-amber-600 uppercase'>Core Qualities</h2>
          <ul className='text-sm md:text-base my-4'>
            <li className='my-2'>Go Getter</li>
            <li className='my-2'>perfectionist</li>
            <li className='my-2'>problem solver</li>
            <li className='my-2'>teamplayer</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className='mb-6 md:mb-0'>
          <h2 className='text-xl md:text-2xl font-semibold text-amber-600 uppercase'>Contact</h2>
          <p className='text-sm md:text-base my-2'>Email: manavjoshi1107@gmail.com</p>
          <p className='text-sm md:text-base my-2'>Phone: +91 8126551610</p>
        </div>

        {/* Follow Me Section */}
        <div>
          <h2 className='text-xl md:text-2xl font-semibold text-amber-600 uppercase'>Follow Me</h2>
          <div className='flex space-x-4 my-4'>
            <a href='https://github.com/manav-132' target='_blank' rel='noopener noreferrer' className='text-white hover:text-amber-500 transition-all duration-150 ease-in-out'>
              <AiFillGithub className='text-3xl md:text-4xl' />
            </a>
            <a href='https://www.linkedin.com/in/manav-joshi-73846b1b1/' target='_blank' rel='noopener noreferrer' className='text-white hover:text-amber-500 transition-all duration-150 ease-in-out'>
              <AiFillLinkedin className='text-3xl md:text-4xl' />
            </a>
            <a href='https://www.instagram.com/manav_joshi._/' target='_blank' rel='noopener noreferrer' className='text-white hover:text-amber-500 transition-all duration-150 ease-in-out'>
              <AiFillInstagram className='text-3xl md:text-4xl' />
            </a>
            <a href='https://x.com/manavjoshi1107' target='_blank' rel='noopener noreferrer' className='text-white hover:text-amber-500 transition-all duration-150 ease-in-out'>
              <AiFillTwitterCircle className='text-3xl md:text-4xl' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
