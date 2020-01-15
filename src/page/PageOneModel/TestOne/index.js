import React, {Component} from 'react';
import { Button } from 'antd';
import Test from './test'

class Index extends Component {

  state= {
    name:'dragonfly'
  };

  // constructor(){
  //   super();
  // }


  handleChangeView = () => {
    this.setState({
      name: 'kerlong'
    })
  };

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <Button type="primary" onClick={this.handleChangeView}>点击改变视图</Button>
        <Test glf={this.state.name} />
      </div>
    );
  }
}

export default Index;