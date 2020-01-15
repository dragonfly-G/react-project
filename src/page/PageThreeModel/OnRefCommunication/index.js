import React, {Component} from 'react';
import Child from './ChildComp'

class Index extends Component {
  testRef=(ref)=>{
    this.child = ref
    console.log(ref,222) // -> 获取整个Child元素
  };

  handleClick=()=>{
    alert(this.child.state.info) // -> 通过this.child可以拿到child所有状态和方法
  };

  render() {
    return (
      <div>
        <Child onRef={this.testRef} />
        <button onClick={this.handleClick}>父组件按钮</button>
        <br/><hr/><br/>
        <h2>原理：</h2>
        <p>
          当在子组件中调用onRef函数时，正在调用从父组件传递的函数。this.props.onRef（this）这里的参数指向子组件本身，父组件接收该引用作为第一个参数：onRef = "{'ref =>(this.child = ref)'}"然后它使用this.child保存引用。之后，可以在父组件内访问整个子组件实例，并且可以调用子组件函数。
        </p>
      </div>
    )
  }
}

export default Index;