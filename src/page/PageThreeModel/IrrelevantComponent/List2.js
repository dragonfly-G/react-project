import React, {Component} from 'react';
import emitter from '../../../util/events';

class List2 extends Component {
  handleClick = (message) => {
    emitter.emit('changeMessage', message);
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this, 'List222222')}>点击我改变List1组件中显示信息</button>
      </div>
    );
  }
}

export default List2;