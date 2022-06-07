import React, { useEffect, useState } from 'react';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useStateValue } from '../store/StateProvider';

const Home = () => {
  const constraintsRef = useRef(null);
  const [display, setDisplay] = useState(true);
  const [snip, setSnip] = useState(false);
  const [{ position }] = useStateValue();

  useEffect(() => {
    setSnip(true);
  }, [position]);

  useEffect(() => {
    const listener = (event: any) => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        setDisplay(true);
        event.preventDefault();
      }
      if (event.code === 'Escape' || event.code === 'NumpadEscape') {
        setDisplay(false);
        event.preventDefault();
      }
    };

    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, []);

  return (
    <div className='bg-light land-screen overflow-scroll  w-screen p-5'>
      {/* Header */}
      <Header display={display} />
      {/* main container */}
      <div className='test' ref={constraintsRef}>
        <div className='h-400 bg-white  mt-3 rounded-xl flex items-center justify-center relative min-h-400'>
          {display && (
            <motion.div
              drag
              dragConstraints={constraintsRef}
              // dragSnapToOrigin={snip}
              onDrag={(event, info) => console.log(info.point.x, info.point.y)}
              className={`h-64 w-96 bg-custom-blue opacity-25 rounded-xl ${
                position === 'bottom' && 'absolute bottom-0 right-0'
              }`}
            ></motion.div>
          )}
        </div>
      </div>

      <Footer />
      {/* footer */}
    </div>
  );
};

export default Home;
