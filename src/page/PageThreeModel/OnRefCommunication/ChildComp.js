import React, { Component } from 'react';
import { Button } from 'antd';

class ChildComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info:'快点击子组件按钮哈哈哈'
    }
  }

  componentDidMount(){
    this.props.onRef(this);
    //console.log(this) // ->将child传递给this.props.onRef()方法
  }

  handleChildClick=()=>{
    this.setState({
      info: '通过父组件按钮获取到子组件信息啦啦啦'
    })
  };

  render(){
    return (
      <Button className='child_comp' type="primary" onClick={this.handleChildClick}>子组件按钮</Button>
    )
  }
}

export default ChildComp;