import React, { useState } from 'react';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useStateValue } from '../store/StateProvider';

const Home = () => {
  const constraintsRef = useRef(null);
  const [snip, setSnip] = useState(false);
  const [{ position }] = useStateValue();

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
          dragSnapToOrigin={snip}
          className={`h-64 w-96 bg-custom-blue opacity-25 rounded-xl ${
            position === 'bottom' && 'absolute bottom-0 right-0'
          }`}
        ></motion.div>
      </div>
      <Footer />
      {/* footer */}
    </div>
  );
};

export default Home;
