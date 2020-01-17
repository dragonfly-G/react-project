import React from 'react';
import {NavLink, Switch, Route, Redirect} from 'react-router-dom';
import {Breadcrumb, Icon, Layout, Menu} from "antd";
import TestOne from "../PageOneModel/TestOne";
import TestTwo from "../PageOneModel/TestTwo";
import TestThree from "../PageOneModel/TestThree";

const { Content, Sider } = Layout;

class PageOne extends React.Component {
  state = {
    pageOneList: [
      {id: 1, name: 'React新生命周期', icon: 'hourglass', page: '/PageOne/TestOne'},
      {id: 2, name: '测试2', icon: 'laptop', page: '/PageOne/TestTwo'},
      {id: 3, name: '测试3', icon: 'notification', page: '/PageOne/TestThree'},
    ]
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
              this.state.pageOneList.map(item => (
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
            <Switch>
              <Route exact path="/PageOne" render={() => (
                <Redirect to='/PageOne/TestOne' />
              )}/>
              <Route exact path="/PageOne/TestOne" component={TestOne}/>
              <Route exact path="/PageOne/TestTwo" component={TestTwo}/>
              <Route exact path="/PageOne/TestThree" component={TestThree}/>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default PageOne;