import React, {Component} from 'react';
import {Layout, Icon, Menu} from "antd";
import {NavLink} from "react-router-dom";

const { Header } = Layout;

class Index extends Component {
  state = {
    curModel: ['1'],
    headerList: [
      {id: 1, name: '功能样式', page: '/PageOne', icon: 'inbox'},
      {id: 2, name: '插件模块', page: '/PageTwo', icon: 'import'},
      {id: 3, name: '组件模块', page: '/PageThree', icon: 'scan'},
    ]
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
          {
            this.state.headerList.map(item => {
              return (
                <Menu.Item key={item.id}>
                  <NavLink exact to={item.page}>
                    <Icon type={item.icon} />
                    <span>{item.name}</span>
                  </NavLink>
                </Menu.Item>
              )
            })
          }

        </Menu>
      </Header>
    );
  }
}

export default Index;