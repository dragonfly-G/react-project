import React from 'react';
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import PageMain from "./page/PageMain"
import PageOne from "./page/PageOne"
import PageTwo from "./page/PageTwo"
import PageThree from "./page/PageThree"


class App extends React.Component{
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" render={() => (
              <Redirect to='/PageOne/TestOne' />
            )}/>

            <PageMain>
              <Switch>
                <Route path="/PageOne" component={PageOne}/>
                <Route path="/PageTwo" component={PageTwo}/>
                <Route path="/PageThree" component={PageThree}/>
              </Switch>
            </PageMain>

          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
