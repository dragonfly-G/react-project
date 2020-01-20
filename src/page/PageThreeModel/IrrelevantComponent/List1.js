import React, {Component} from 'react';
import emitter from 'util/events';

class List1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '这是组件List1:11111111',
    };
  }
  componentDidMount() {
    // 组件装载完成以后声明一个自定义事件
    this.eventEmitter = emitter.addListener('changeMessage', (message) => {
      this.setState({
        message,
      });
    });
  }
  componentWillUnmount() {
    // emitter.removeListener(this.eventEmitter);
  }
  render() {
    return (
      <div>
        <h2>结果：{this.state.message}</h2>
      </div>
    );
  }
}

export default List1;