// pages/Home/home.tsx
import React from 'react';
import HeaderFooter from '../../layouts/HeaderFooter';
import dynamic from 'next/dynamic';

const Olddriver = dynamic(import('../../components/OldDriver'), {
  loading() {
    return <p>loading...</p>;
  }
});

const Home = () => {
  return (
    <HeaderFooter active="home">
      <div id="homepage">
        <Olddriver></Olddriver>
      </div>
      <style>{`
        #homepage {
          width: 100%;
          height:600px;
          background-color: #f7f7f7;
          display: flex;
          justify-content: center;
          align-items: center
        }
      `}</style>
    </HeaderFooter>
  );
};

export default Home;
