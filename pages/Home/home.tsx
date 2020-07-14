// pages/Home/home.tsx
import React from 'react';
import HeaderFooter from '../../layouts/HeaderFooter';
// import dynamic from 'next/dynamic';
import {
  // Carousel,
  Card
} from 'antd';
const { Meta } = Card;

// const Olddriver = dynamic(import('../../components/OldDriver'), {
//   loading() {
//     return <p>loading...</p>;
//   }
// });

// const Home = () => {

// };

class Home extends React.Component {
  render() {
    return (
      <HeaderFooter active="home">
        <div id="homepage">
          {/* <Carousel autoplay>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </Carousel> */}
          <div className="content-wrapper">
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </div>
        </div>
      </HeaderFooter>
    );
  }
}

export default Home;
