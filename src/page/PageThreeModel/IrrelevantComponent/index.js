import React, {Component} from 'react';
import List1 from './List1'
import List2 from './List2'

import "./index.scss";

class Index extends Component {
  render() {
    return (
      <div className='irrelevantComponent'>
        <div className='list_comp'>
          <List1 />
          <List2 />
        </div>
        <div className='desc'>
          <h2>要点解析</h2>
          <p>第一步：npm install <span>events</span> --save</p>
          <p>第二部：在src下新建一个util目录里面建一个events.js </p>
          <p>第三步：详见代码List1和List2</p>
        </div>
      </div>
    );
  }
}

export default Index;