import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import SelectBusiness from "page/PageThreeModel/SelectBusiness";
import DragDrop from "page/PageThreeModel/DragDrop";   // 拖动
import DragDropDnD from "page/PageThreeModel/DragDropDnD";   // 拖动
import SkideBlock from "page/PageThreeModel/SkideBlock";   // 滑动
import IrrelevantComponent from 'page/PageThreeModel/IrrelevantComponent';
import OnRefCommunication from 'page/PageThreeModel/OnRefCommunication';
import Calendar from 'page/PageThreeModel/Calendar';   // 日历
import LeftBox from 'components/LeftBox'


class PageThree extends React.Component {
  state = {
    pageThreeList: [
      {id: 1, name: '单选复选', icon: 'user', page: '/PageThree/SelectBusiness'},
      {id: 2, name: 'Sortable拖拽', icon: 'control', page: '/PageThree/DragDrop'},
      {id: 3, name: 'reactDnD拖拽', icon: 'control', page: '/PageThree/DragDropDnD'},
      {id: 4, name: '左右滑动', icon: 'pic-right', page: '/PageThree/SkideBlock'},
      {id: 5, name: '没有嵌套关系的组件通信', icon: 'trademark', page: '/PageThree/IrrelevantComponent'},
      {id: 6, name: '组件间通信之onRef', icon: 'table', page: '/PageThree/OnRefCommunication'},
      {id: 7, name: '日历组件', icon: 'calendar', page: '/PageThree/Calendar'},
    ]
  }
  render() {
    return (
      <LeftBox leftPageList={this.state.pageThreeList}>
        <Switch>
          <Route exact path="/PageThree" render={() => (
            <Redirect to='/PageThree/SelectBusiness' />
          )}/>
          <Route exact path="/PageThree/SelectBusiness" component={SelectBusiness}/>
          <Route exact path="/PageThree/DragDrop" component={DragDrop}/>
          <Route exact path="/PageThree/DragDropDnD" component={DragDropDnD}/>
          <Route exact path="/PageThree/SkideBlock" component={SkideBlock}/>
          <Route exact path="/PageThree/IrrelevantComponent" component={IrrelevantComponent}/>
          <Route exact path="/PageThree/OnRefCommunication" component={OnRefCommunication}/>
          <Route exact path="/PageThree/Calendar" component={Calendar}/>
        </Switch>
      </LeftBox>
    );
  }
}

export default PageThree;