import React from 'react';
import Selector from './Selector';
import Timer from './Timer';

interface props {
  display: boolean;
}

/**
 *
 * @property {boolean} display
 *   conditional rendering of the floating div
 */

const Header = (props: props) => {
  return (
    <header className='p-5 sm:h-24 h-32 items-center flex sm:flex-row flex-col justify-between bg-white rounded-xl'>
      <Selector />
      {/* description text */}
      {props.display ? (
        <span>Press escape to hide the floter </span>
      ) : (
        <span>Press enter to show the floater </span>
      )}
      <Timer />
    </header>
  );
};

export default Header;
