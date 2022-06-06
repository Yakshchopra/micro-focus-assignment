import React from 'react';
import Selector from './Selector';
import Timer from './Timer';

const Header = () => {
  return (
    <header className='p-5 flex justify-between bg-white rounded-xl'>
      {/* selector */}
      <Selector />
      {/* description text */}
      <span>Press escape to hide the window</span>
      {/* timer */}
      <Timer />
    </header>
  );
};

export default Header;
