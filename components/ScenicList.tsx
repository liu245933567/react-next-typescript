import React from 'react';
import { Card } from 'antd';

const ScenicList = () => {
  const data = [
    {
      /** 作品名称 */
      name: '印度南迪亚尔，巴拉吉神庙 / Sameep Padora & Associates',
      /** 作品链接 */
      href: '/work/expmale',
      /** 作品类型 */
      type: {
        text: '景观',
        href: '/work/expmale'
      },
      /** 作品分类 */
      category: {
        text: '纪念性空间',
        href: '/work/expmale'
      },
      /** 作品地区 */
      region: {
        text: '墨西哥',
        href: '/work/expmale'
      },
      /** 作者 */
      author: {
        text: 'JIM STUDIO',
        href: '/work/expmale'
      }
    }
  ];
  return (
    <div className="ScenicList-Component-Wrapper">
      {data.map((work) => (
        <Card
          key={work.name}
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt={work.name}
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Card.Meta title={work.name} description={work.name} />
        </Card>
      ))}
    </div>
  );
};

export default ScenicList;
