import React, { useEffect, useState } from 'react';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useStateValue } from '../store/StateProvider';

/**
 * @property {HTMLDivElement} constraintsRef for drag boundaries
 *   parent div to give dimensions for the valid drag area for the floating div
 * @property {boolean} display
 *   conditional rendering of the floating div
 */

const Home = () => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(true);
  const [{ position, snapper }, dispatch] = useStateValue();

  //middle container which return the middle section with the floating div.

  const handleDragStart = () => {
    dispatch({
      type: 'SET_POSITION',
      position: 'none',
    });
    dispatch({
      type: 'SET_SNAP',
      snapper: false,
    });
  };

  const midContainer = () => (
    <div
      className='yc__parent w-full my-1 justify-center items-center relative'
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
          onDragStart={handleDragStart}
          className={`sm:h-64 sm:w-96 h-36 w-42 text-3xl flex handwritten text-blue-900 justify-center items-center bg-custom-blue ${
            position === 'bottom' && 'absolute bottom-0 right-0'
          } opacity-50 rounded-xl`}
        >
          Drag me around :)
        </motion.div>
      )}
    </div>
  );

  // useEffect call for setting up the display state on enter na d escape key press
  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
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

    // useEffect cleanup
    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, []);

  // returned component with floating div

  return (
    <div className='flex flex-col bg-light land-screen overflow-scroll  w-screen p-5'>
      <Header display={display} />
      {midContainer()}
      <Footer />
    </div>
  );
};

export default Home;
