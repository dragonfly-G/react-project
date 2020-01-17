import React, {Component} from 'react';

class Test extends Component {

  state = {
    glf: null
  }

  /*
  * getDerivedStateFromProps需要state有值，可以通过在“Test”的构造函数中将对象赋给“this.state”来定义初始状态。
  * 这确保了“getDerivedStateFromProps”参数具有一致的形状。
  * Test.getDerivedStateFromProps（）：必须返回有效的状态对象（或null）。你还没有定义。
  * 
  * 这个生命周期函数是为了替代componentWillReceiveProps存在的，所以在你需要使用componentWillReceiveProps的时候，
  * 就可以考虑使用getDerivedStateFromProps来进行替代了。
  * getDerivedStateFromProps是一个静态函数，也就是这个函数不能通过this访问到class的属性，也并不推荐直接访问属性
  * 
  * 注意：如果props传入的内容不需要影响到你的state，那么就需要返回一个null，这个返回值是必须的，所以尽量将其写到函数的末尾
  */ 
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(11111,'getDerivedStateFromProps')
    const { glf } = nextProps
    if (nextProps.glf !== prevState.glf) {
      return {
        glf
      };
    }
    // 否则，对于state不进行任何操作
    return null;
  }

  shouldComponentUpdate(){
    console.log(22222,'shouldComponentUpdate');
    return true
  }

  getSnapshotBeforeUpdate(){
    console.log(33333, 'getSnapshotBeforeUpdate');
    return null
  }

  componentDidUpdate(){
    console.log(44444,'componentDidUpdate');
  }

  render() {
    console.log(55555,'render');
    return (
      <div className='life_cycle_test'>
        <div className='props_value'>
          <h2>子组件视图：{this.state.glf}</h2>
        </div>
        
        <div className='life_cycle_introduce'>
          <h2>要点解析</h2>
          <h3>getDerivedStateFromProps</h3>
          <p>getDerivedStateFromProps需要state有属性，可以通过在“Test”的构造函数中将对象赋给“this.state”来定义初始状态。这确保了“getDerivedStateFromProps”参数具有一致的属性。</p>
          <p>getDerivedStateFromProps()：必须返回有效的状态对象（或null）。</p>
          <p>这个生命周期函数是为了替代componentWillReceiveProps存在的，所以在你需要使用componentWillReceiveProps的时候，就可以考虑使用getDerivedStateFromProps来进行替代了。</p>
          <p>props变化时被调用，若是父组件重新渲染，也会被调用。它返回新的props值。</p>
          <p>getDerivedStateFromProps是一个静态函数，也就是这个函数不能通过this访问到class的属性，也并不推荐直接访问属性</p>
          <pre className='desc'>
            {`
    state = {
      glf: null
    }

    static getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.glf !== prevState.glf) {
        return {
          glf
        };
      }
      // 否则，对于state不进行任何操作
      return null;
    }
          `}
          </pre>
          <p><strong>注意：</strong>如果props传入的内容不需要影响到你的state，那么就需要返回一个null，这个返回值是必须的，所以尽量将其写到函数的末尾</p>
          
          <h3>getSnapshotBeforeUpdate</h3>
          <p>它的含义是在React更新Dom元素之前，获取一个快照，它返回的结果将作为componentDidUpdate的第三个参数。一般的用法就是获取更新前的DOM。</p>
          <h3>生命周期过程</h3>
          <p><strong>重点：</strong>即若有设置state或bind函数时，整体必会调用的过程为</p>
          <p className='bold'>contructor() -> static getDerivedStateFromProps() -> render() -> componentDidMount()</p>
          <p><strong>重点：</strong>即若只有state值变化时，整体必会调用的过程为</p>
          <p className='bold'>shouldComponentUpdate() -> render() -> getSnapshotBeforeUpdate() -> componentDidUpdate()</p>
          <p><strong>重点：</strong>即若有prop值变化时，整体必会调用的过程为</p>
          <p className='bold'>static getDerivedStateFromProps() -> shouldComponentUpdate() -> render() -> getSnapshotBeforeUpdate() -> componentDidUpdate()</p>
          
        </div>
      </div>
    );
  }
}

export default Test;