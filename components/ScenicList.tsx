import React from 'react';
import { Card } from 'antd';

const ScenicList = () => {
  const data = [{
    
  }];
  return (
    <div className="ScenicList-Component-Wrapper">
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
        <Card.Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </div>
  );
};

export default ScenicList;
