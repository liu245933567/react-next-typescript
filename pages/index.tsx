import React from 'react';
import HeaderFooter from '../layouts/HeaderFooter';
import Head from 'next/head';
import ScenicList from '@components/ScenicList';
import Swipe from '@components/Swipe';
import service from '../service/featch';
// import { autobind } from 'core-decorators';

class Home extends React.Component {
  static async getInitialProps() {
    const data: Api.HomeInfo = await service.post(
      'http://dev.yanyuge.xyz:3000/sport/homeInfo.json'
    );
    if(data.isOk && data.result){
      return { ...data.result };
    } else {
      return {}
    }
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
            </div>
          </div>
        </HeaderFooter>
      </div>
    );
  }
}

export default Home;
