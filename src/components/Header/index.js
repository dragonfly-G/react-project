import React, {Component} from 'react';
import {Layout, Icon, Menu} from "antd";
import {NavLink} from "react-router-dom";

const { Header } = Layout;

class Index extends Component {
  state = {
    curModel: ['1']
  };
  render() {
    return (
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={this.state.curModel}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">
            <NavLink exact to="/PageOne">
              <Icon type="user" />
              <span>xx模块</span>
            </NavLink>
          </Menu.Item>

          <Menu.Item key="2">
            <NavLink to="/PageTwo">
              <Icon type="video-camera" />
              <span>插件模块</span>
            </NavLink>
          </Menu.Item>

          <Menu.Item key="3">
            <NavLink to="/PageThree">
              <Icon type="upload" />
              <span>组件模块</span>
            </NavLink>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default Index;