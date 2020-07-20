/*
 * @Author: LiuYh
 * @Description: 轮播图组件
 * @Date: 2020-07-20 15:38:33
 * @Last Modified by:   LiuYh
 * @Last Modified time: 2020-07-20 15:38:33
 */

import React from 'react';
import { Carousel } from 'antd';
import '@styles/components/Swipe.scss';
type Iprops = {
  swipes: Api.SwipeItem[];
};

const Swipe: React.FC<Iprops> = ({ swipes = [] }: Iprops) => {
  return (
    <Carousel autoplay>
      {swipes.map((item) => (
        <div key={item.href} className="Swipe-Component-Item">
          <div
            style={{
              backgroundImage: `url("${item.href}")`
            }}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default Swipe;
