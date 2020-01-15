import React, {Component} from 'react';
import List1 from './List1'
import List2 from './List2'

class Index extends Component {
  render() {
    return (
      <div>
        <List1 />
        <List2 />
        <br/><hr/><br/>
        <p>第一步：npm install events --save</p>
        <p>第二部：在src下新建一个util目录里面建一个events.js </p>
        <p>第三步：详见代码List1和List2</p>
      </div>
    );
  }
}

export default Index;