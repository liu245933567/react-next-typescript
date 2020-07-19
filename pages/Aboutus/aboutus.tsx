import React from 'react';
import HeaderFooter from '../../layouts/HeaderFooter';
import { Empty } from 'antd';
import Head from 'next/head';

export default class Helps extends React.Component<{ hlist: any }> {
  constructor(props) {
    super(props);
  }
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
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
        <Empty description={this.props.userAgent} />
      </HeaderFooter>
    );
  }
}
