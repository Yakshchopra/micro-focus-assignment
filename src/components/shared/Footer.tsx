import React from 'react';
import { MdArrowRightAlt } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  let navigate = useNavigate();

  return (
    <footer className='h-24 p-3 flex items-center justify-center bg-white rounded-xl'>
      <button
        onClick={() => navigate('/about')}
        className='bg-custom-blue transform hover:-translate-y-1 transition-all flex items-center gap-3 outline-none py-3 px-5 text-white font-semibold text-sm rounded-xl'
      >
        Go to page 2 <MdArrowRightAlt className='text-xl' />
      </button>
    </footer>
  );
};

export default Footer;
