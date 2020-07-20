import React from 'react';
import { Card } from 'antd';
import '@styles/components/ScenicList.scss';

type IProps = {
  /** 推荐作品集合 */
  recommends: Api.RecommendItem[];
};

const ScenicList: React.FC<IProps> = ({ recommends = [] }: IProps) => {
  return (
    <div className="ScenicList-Component-Wrapper">
      {recommends.map((work, index) => (
        <div className="Scenic-Item-Wrapper" key={work.name + index}>
          <Card
            hoverable
            className="Scenic-Item"
            cover={<img alt={work.name} src={work.coverImage} />}
          >
            <div className="Scenic-Item-Content">
              <div className="Scenic-categorys">
                <a href={work.type.href}>{work.type.text}</a>
                <a href={work.region.href}>{work.region.text}</a>
                <a href={work.category.href}>{work.category.text}</a>
                <a href={work.author.href}>{work.author.text}</a>
              </div>
              <div className="Scenic-name">{work.name}</div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ScenicList;
