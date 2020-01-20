import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import ReactRedux from "page/PageTwoModel/React-Redux";
import Mobx1 from "page/PageTwoModel/Mobx1";
import Mobx2 from "page/PageTwoModel/Mobx2";
import Dva from "page/PageTwoModel/Demo";
import CropperLrz from "page/PageTwoModel/Cropper-lrz";
import LeftBox from 'components/LeftBox'

class PageTwo extends React.Component {
  state = {
    pageTwoList: [
      {id: 1, name: 'React-Redux事例', icon: 'user', page: '/PageTwo/ReactRedux'},
      {id: 2, name: 'Mobx事例1', icon: 'user', page: '/PageTwo/Mobx1'},
      {id: 3, name: 'Mobx事例2', icon: 'user', page: '/PageTwo/Mobx2'},
      {id: 4, name: 'demo事例', icon: 'user', page: '/PageTwo/Dva'},
      {id: 5, name: 'Cropper+Lrz', icon: 'user', page: '/PageTwo/CropperLrz'},
    ]
  }
  render() {
    return (
      <LeftBox leftPageList={this.state.pageTwoList}>
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
      </LeftBox>
    );
  }
}

export default PageTwo;