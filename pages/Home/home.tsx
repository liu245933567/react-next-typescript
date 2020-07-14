import React from 'react';
import HeaderFooter from '../../layouts/HeaderFooter';
import ScenicList from '@components/ScenicList';
import Swipe from '@components/Swipe';

class Home extends React.Component {
  render() {
    return (
      <HeaderFooter active="home">
        <div id="homepage">
          <Swipe />
          <div className="content-wrapper">
            <ScenicList />
          </div>
        </div>
      </HeaderFooter>
    );
  }
}

export default Home;
