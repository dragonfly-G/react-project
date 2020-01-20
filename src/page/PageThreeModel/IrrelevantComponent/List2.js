import React, { Component } from 'react';
import { Button } from 'antd';
import emitter from 'util/events';

class List2 extends Component {
  handleClick = (message) => {
    emitter.emit('changeMessage', message);
  };
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleClick.bind(this, '这是组件List2:222222')}>点击我改变List1组件中显示信息</Button>
      </div>
    );
  }
}

export default List2;