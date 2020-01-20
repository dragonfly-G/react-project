import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import { Breadcrumb, Icon, Layout, Menu } from "antd";

const { Content, Sider } = Layout;
 
export default class LeftBox extends Component {
  state = {
    leftPageList: this.props.leftPageList
  }
  
  render() {
    return (
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            {
              this.state.leftPageList.map(item => (
                <Menu.Item key={item.id}>
                  <NavLink to={item.page}>
                    <span><Icon type={item.icon} />{item.name}</span>
                  </NavLink>
                </Menu.Item>
              ))
            }
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    )
  }
}
