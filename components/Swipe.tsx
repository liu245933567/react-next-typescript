import React from 'react';
import { Carousel } from 'antd';
import '@styles/components/Swipe.scss';

const Swipe = () => {
  const data = [
    'https://i.mooool.com/img/2020/05/alexhanazakilm110-.jpg',
    'https://i.mooool.com/img/2020/07/20200702180401708.jpg',
    'https://i.mooool.com/img/2020/03/5c357c0ecb6fc-bp-cover-image.jpg'
  ];
  return (
    <Carousel autoplay>
      {data.map((item) => (
        <div key={item} className="Swipe-Component-Item">
          <div
            style={{
              backgroundImage: `url("${item}")`
            }}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default Swipe;
