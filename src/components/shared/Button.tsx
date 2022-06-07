import React from 'react';
import { MdArrowRightAlt } from 'react-icons/md';

interface props {
  text: string;
  onClick: any;
}

/**
 * @property {event} onClick : event handler function from parent
 * @property {string} text : text that needs to be passed to the button
 */

const Button = (props: props) => {
  const { text, onClick } = props;

  return (
    <button
      onClick={onClick}
      className='bg-custom-blue transform hover:-translate-y-1 transition-all flex items-center gap-3 outline-none py-3 px-5 text-white font-semibold text-sm rounded-xl'
    >
      {text}
      <MdArrowRightAlt className='text-xl' />
    </button>
  );
};

export default Button;
