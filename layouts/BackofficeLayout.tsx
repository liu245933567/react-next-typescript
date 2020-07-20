import React from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons';
import '@styles/components/BackofficeLayout.scss';

const { Header, Content, Footer, Sider } = Layout;

export default class BackofficeLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout className="Backoffice-Layout">
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <Header
            className="site-layout-sub-header-background"
          />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              首页轮播图配置
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              作品录入
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
         
          <Content className="Backoffice-Layout-Content">
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
