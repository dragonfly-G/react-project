import React, {Component} from 'react';
import { Button,Icon } from 'antd';
import Test from './test'

import './index.scss'

class Index extends Component {

  state= {
    name: 'dragonfly',
    status: true
  };

  handleChangeView = () => {
    if (this.state.status === true) { 
      this.setState({
        name: 'kerlong',
        status: false
      })
    } else {
      this.setState({
        name: 'dragonfly',
        status: true
      })
    }
  };

  render() {
    return (
      <div>
        <div className='life_cycle_title'>
          <h1>
            <Icon className='title_icon' type="home" theme="twoTone" />React新生命周期
          </h1>
        </div>
        <div className='life_cycle_view'>
          <div className='father_btn'>
            <h2>父组件视图：{this.state.name}</h2>
            <Button type="primary" onClick={this.handleChangeView}>点击改变视图</Button>
          </div>
          <Test glf={this.state.name} />
        </div>
      </div>
    );
  }
}

export default Index;