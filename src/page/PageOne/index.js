import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import TestOne from "page/PageOneModel/TestOne";
import TestTwo from "page/PageOneModel/TestTwo";
import TestThree from "page/PageOneModel/TestThree";
import LeftBox from 'components/LeftBox'

class PageOne extends React.Component {
  state = {
    pageOneList: [
      {id: 1, name: 'React新生命周期', icon: 'hourglass', page: '/PageOne/TestOne'},
      {id: 2, name: '小球碰撞', icon: 'laptop', page: '/PageOne/TestTwo'},
      {id: 3, name: '测试3', icon: 'notification', page: '/PageOne/TestThree'},
    ]
  }
  render() {
    return (
      <LeftBox leftPageList={this.state.pageOneList}>
        <Switch>
          <Route exact path="/PageOne" render={() => (
            <Redirect to='/PageOne/TestOne' />
          )}/>
          <Route exact path="/PageOne/TestOne" component={TestOne}/>
          <Route exact path="/PageOne/TestTwo" component={TestTwo}/>
          <Route exact path="/PageOne/TestThree" component={TestThree}/>
        </Switch>
      </LeftBox>
    );
  }
}

export default PageOne;