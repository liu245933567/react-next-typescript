import React from 'react';
import Layout from '@layouts/BackofficeLayout';

export default class BackOffice extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          content
        </div>
      </Layout>
    );
  }
}
