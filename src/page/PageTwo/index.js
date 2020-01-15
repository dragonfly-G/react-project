import React from 'react';
import {NavLink, Switch, Route, Redirect} from 'react-router-dom';
import {Breadcrumb, Icon, Layout, Menu} from "antd";
import ReactRedux from "../PageTwoModel/React-Redux";
import Mobx1 from "../PageTwoModel/Mobx1";
import Mobx2 from "../PageTwoModel/Mobx2";
import Dva from "../PageTwoModel/Demo";
import CropperLrz from "../PageTwoModel/Cropper-lrz";


const { Content, Sider } = Layout;

class PageTwo extends React.Component {
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
            <Menu.Item key="1">
              <NavLink to='/PageTwo/ReactRedux'>
                <span><Icon type="user" />React-Redux事例</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <NavLink to='/PageTwo/Mobx1'>
                <span><Icon type="user" />Mobx事例1</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="3">
              <NavLink to='/PageTwo/Mobx2'>
                <span><Icon type="user" />Mobx事例2</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="4">
              <NavLink to='/PageTwo/Dva'>
                <span><Icon type="user" />demo事例</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="5">
              <NavLink to='/PageTwo/CropperLrz'>
                <span><Icon type="user" />Cropper+Lrz</span>
              </NavLink>
            </Menu.Item>
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
              <Route exact path="/PageTwo" render={() => (
                <Redirect to='/PageTwo/ReactRedux' />
              )}/>
              <Route exact path='/PageTwo/ReactRedux' component={ReactRedux}/>
              <Route exact path='/PageTwo/Mobx1' component={Mobx1}/>
              <Route exact path='/PageTwo/Mobx2' component={Mobx2}/>
              <Route exact path='/PageTwo/Dva' component={Dva}/>
              <Route exact path='/PageTwo/CropperLrz' component={CropperLrz}/>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default PageTwo;