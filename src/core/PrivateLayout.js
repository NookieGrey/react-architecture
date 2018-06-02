import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Link} from "react-router-dom";

import {Icon, Layout, Menu} from "antd";

import * as loginActions from "../pages/login/loginActions";

import "./private-layout.less";

const {Header, Sider, Content} = Layout;

class PrivateLayout extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const link = (
      <div className="private-layout-logout">
        <Link to="/login" onClick={() => this.props.dispatch(loginActions.logout())}>Logout</Link>
      </div>
    );

    return (
      <Layout className="private-layout-page">
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo"/>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user"/>
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera"/>
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload"/>
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="private-layout-header">
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            {link}
          </Header>
          <Content className="private-layout-content">
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default connect()(PrivateLayout);
