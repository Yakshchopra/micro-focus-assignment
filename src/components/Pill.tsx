import React from 'react';

interface props {
  text: string;
}

/**
 * @property {string} text
 * content to be added in the pill
 */

const Pill = (props: props) => {
  return (
    <span className='p-3 rounded-xl bg-blue-100 text-xs text-custom-blue font-semibold'>
      {props.text}
    </span>
  );
};

export default Pill;
