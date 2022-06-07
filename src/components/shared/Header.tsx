import React from 'react';
import Selector from './Selector';
import Timer from './Timer';

interface props {
  display: boolean;
}

const Header = (props: props) => {
  return (
    <header className='p-5 h-24 items-center flex justify-between bg-white rounded-xl'>
      {/* selector */}
      <Selector />
      {/* description text */}
      {props.display ? (
        <span>Press escape to hide the window </span>
      ) : (
        <span>Press enter to show the window </span>
      )}
      {/* timer */}
      <Timer />
    </header>
  );
};

export default Header;
