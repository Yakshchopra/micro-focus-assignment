import React from 'react';
import Pill from './Pill';
import yakshchopra from '../assets/yakshchopra.jpg';

const interests = [
  'Chess',
  'Boxing',
  'Music',
  'Graphic Designing',
  'Blockchain',
];

const Self = () => {
  return (
    <div className='bg-white rounded-xl p-8 my-8'>
      <img
        className='bg-green-300 h-32 w-32 rounded-xl overflow-hidden mb-5'
        src={yakshchopra}
        alt=''
      />
      <p>
        Hello 👋, I am Yaksh, a creative front-end web developer who values
        simplicity and awesomeness. I have an eye for design and am capable of
        translating beautiful designs into efficient code. As a self-taught
        developer, I enjoy delving deeply into code bases and coding my way
        through bugs. I'm proficient in React as well as possess some working
        knowledge of NodeJS and Express. I love talking about javaScript.
      </p>
      <p>Apart from coding I love doing the following things:</p>
      <div className='flex flex-wrap gap-3'>
        {interests.map((item: string, idx: number) => {
          return <Pill key={idx} text={item} />;
        })}
      </div>
      <p className='mt-5'>
        You can know more about me at:{' '}
        <a
          href='https://yakshchopra.vercel.app/'
          rel='noreferrer'
          target='_blank'
        >
          https://yakshchopra.vercel.app/
        </a>
      </p>
    </div>
  );
};

export default Self;
