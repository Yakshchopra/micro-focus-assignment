import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const Footer = () => {
  let navigate = useNavigate();

  return (
    <footer className='h-24 p-3 flex items-center justify-center bg-white rounded-xl'>
      <Button text='Go to page 2' onClick={() => navigate('/about')} />
    </footer>
  );
};

export default Footer;
