import React from 'react';
import HeaderFooter from '../layouts/HeaderFooter';
import { Empty } from 'antd';
import Head from 'next/head';

export default class Helps extends React.Component<{ hlist: any }> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <HeaderFooter active="helps">
        <Head>
          <title>技术支持</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Empty description="该功能暂未开发" />
      </HeaderFooter>
    );
  }
}
