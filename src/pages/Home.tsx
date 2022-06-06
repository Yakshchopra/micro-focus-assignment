import React, { useState } from 'react';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import Twiggle from '../components/Twiggle';
import { useRef } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const constraintsRef = useRef(null);

  return (
    <div className='bg-light h-screen flex flex-col w-screen p-5 overflow-hidden'>
      {/* Header */}
      <Header />
      {/* main container */}
      <div
        className='main h-full flex items-center justify-center relative min-h-400'
        ref={constraintsRef}
      >
        <motion.div
          drag
          dragConstraints={constraintsRef}
          dragSnapToOrigin={true}
          className='h-64 w-96 bg-custom-blue opacity-25 rounded-xl absolute'
        ></motion.div>
      </div>
      <Footer />
      {/* footer */}
    </div>
  );
};

export default Home;
