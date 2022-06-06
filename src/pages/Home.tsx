import React from 'react';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';

const Home = () => {
  return (
    <div className='bg-light h-screen flex flex-col w-screen p-5'>
      {/* Header */}
      <Header />
      {/* main container */}
      <div className='main h-full'></div>
      <Footer />
      {/* footer */}
    </div>
  );
};

export default Home;
