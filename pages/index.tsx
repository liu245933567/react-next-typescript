import React from 'react';
import HeaderFooter from '../layouts/HeaderFooter';
import Head from 'next/head';
import ScenicList from '@components/ScenicList';
import Swipe from '@components/Swipe';
import service from '../service/featch';
// import { autobind } from 'core-decorators';
import '@styles/container/Home.scss';

type IProps = Api.HomeInfo;
class Home extends React.Component<IProps> {
  static async getInitialProps() {
    const data: Api.HomeInfoRes = await service.post(
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
          <div className="Home-Page-Wrapper">
            <Swipe swipes={this.props.swipe}/>
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
