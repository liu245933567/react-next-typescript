import React from 'react';
import HeaderFooter from '../../layouts/HeaderFooter';
import { Empty } from 'antd';
import Head from 'next/head';

export default class Helps extends React.Component<{ hlist: any }> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <HeaderFooter active="aboutus">
        <Head>
          <title>关于我们</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Empty description='随便说点啥~' />
      </HeaderFooter>
    );
  }
}
