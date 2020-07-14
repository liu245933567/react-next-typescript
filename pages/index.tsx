import React from 'react';
import Home from './Home/home';
import Head from 'next/head';
import '../static/styles/index.scss';

const Index = () => {
  return (
    <div>
      <Head>
        <title>景观设计</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Home/>
      {/* hello nextjs */}
    </div>
  );
};

export default Index;
