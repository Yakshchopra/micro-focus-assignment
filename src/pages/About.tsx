import Button from '../components/shared/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Self from '../components/Self';

const About = () => {
  let navigate = useNavigate();

  return (
    <div className='h-screen w-screen bg-light p-8 sm:p-16'>
      <div className='flex justify-between'>
        <span className='bg-white py-3 px-5 font-semibold rounded-xl'>
          Page 2
        </span>
        <span className='bg-white text-custom-blue py-3 px-5 font-semibold rounded-xl'>
          I am Yaksh Chopra
        </span>
        <span className='bg-white hidden sm:block py-3 px-5 font-semibold rounded-xl'>
          Glad to meet you :)
        </span>
      </div>

      {/* content */}
      <Self />

      <footer>
        <div className='absolute bottom-8 sm:bottom-16'>
          <Button text='Go back' onClick={() => navigate('/')} />
        </div>
      </footer>
    </div>
  );
};

export default About;
