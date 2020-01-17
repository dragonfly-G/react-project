import React from 'react';
import {NavLink, Switch, Route, Redirect} from 'react-router-dom';
import {Breadcrumb, Icon, Layout, Menu} from "antd";
import SelectBusiness from "../PageThreeModel/SelectBusiness";
import DragDrop from "../PageThreeModel/DragDrop";   // 拖动
import SkideBlock from "../PageThreeModel/SkideBlock";   // 滑动
import IrrelevantComponent from '../PageThreeModel/IrrelevantComponent';
import OnRefCommunication from '../PageThreeModel/OnRefCommunication';
import Calendar from '../PageThreeModel/Calendar';   // 日历

const { Content, Sider } = Layout;

class PageThree extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <Menu.Item key="1">
                <NavLink to='/PageThree/SelectBusiness'>
                  <span><Icon type="user" />单选复选</span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink to='/PageThree/DragDrop'>
                  <span><Icon type="control" />拖拽</span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="3">
                <NavLink to='/PageThree/SkideBlock'>
                  <span><Icon type="pic-right" />左右滑动</span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="4">
                <NavLink to='/PageThree/IrrelevantComponent'>
                  <span><Icon type="trademark" />没有嵌套关系的组件通信</span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="5">
                <NavLink to='/PageThree/OnRefCommunication'>
                  <span><Icon type="table" />组件间通信之onRef</span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="6">
                <NavLink to='/PageThree/Calendar'>
                  <span><Icon type="calendar" />日历组件</span>
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
                <Route exact path="/PageThree" render={() => (
                  <Redirect to='/PageThree/SelectBusiness' />
                )}/>
                <Route exact path="/PageThree/SelectBusiness" component={SelectBusiness}/>
                <Route exact path="/PageThree/DragDrop" component={DragDrop}/>
                <Route exact path="/PageThree/SkideBlock" component={SkideBlock}/>
                <Route exact path="/PageThree/IrrelevantComponent" component={IrrelevantComponent}/>
                <Route exact path="/PageThree/OnRefCommunication" component={OnRefCommunication}/>
                <Route exact path="/PageThree/Calendar" component={Calendar}/>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default PageThree;