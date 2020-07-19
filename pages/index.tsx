import React from 'react';
import HeaderFooter from '../layouts/HeaderFooter';
import Head from 'next/head';
import ScenicList from '@components/ScenicList';
import Swipe from '@components/Swipe';
import '../static/styles/index.scss';

class Home extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }
  render() {
    return (
      <div>
        <Head>
          <title>景观设计</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <HeaderFooter active="home">
        <div id="homepage">
          <Swipe />
          <div className="content-wrapper">
            <ScenicList />
            {this.props.userAgent}
          </div>
        </div>
      </HeaderFooter>
        {/* hello nextjs */}
      </div>
    );
  }
}

export default Home;
