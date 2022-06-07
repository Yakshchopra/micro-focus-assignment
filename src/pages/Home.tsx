import React, { useEffect, useState } from 'react';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useStateValue } from '../store/StateProvider';

const Home = () => {
  const constraintsRef = useRef(null);
  const [display, setDisplay] = useState(true);
  const [{ position, snapper }, dispatch] = useStateValue();

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
      <Header display={display} />
      <div
        className='test w-full my-1 justify-center items-center relative'
        ref={constraintsRef}
      >
        <div className='h-400 w-full bg-white rounded-xl absolute top-0 left-0'></div>
        {display && (
          <motion.div
            drag
            style={{
              ...(!snapper
                ? {
                    x: 0,
                    y: 0,
                  }
                : {}),
            }}
            dragConstraints={constraintsRef}
            onDragStart={(event, info) => {
              dispatch({
                type: 'SET_POSITION',
                position: 'none',
              });
              dispatch({
                type: 'SET_SNAP',
                snapper: false,
              });
            }}
            className={`h-64 w-96 bg-custom-blue ${
              position === 'bottom' && 'absolute bottom-0 right-0'
            } opacity-25 rounded-xl`}
          ></motion.div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
