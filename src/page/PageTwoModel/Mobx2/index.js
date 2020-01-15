import React, {Component} from 'react';
import { Provider, observer, inject } from 'mobx-react';
import { Button } from 'antd';
import {actions} from '../../../store_mobx/index';
import {store} from '../../../store_mobx/data';

import './index.scss'

// inject 向业务组件注入 store，actions，和 Provider 配合使用
// ⑤ 使用 inject decorator 和 observer decorator
@inject('store', 'actions')
@observer
class Demo extends Component {
  render() {
    const { store, actions } = this.props;
    return (
      <div>
        <h2>mobx-react——加减法（拆分）</h2>
        <h3>
          <b>a : {store.a}</b>
        </h3>
        <p>
          <Button type="primary" className="ui-btn" onClick={actions.incA}>增加 a</Button>&nbsp;&nbsp;&nbsp;
          <Button type="primary" className="ui-btn" onClick={actions.decA}>减少 a</Button>
        </p>
        <hr/>
        <div className='introduce'>
          <h2>使用 mobx 时，借鉴了 redux 架构的优点：</h2>
          <p>单一数据源，这样避免了子组件、父组件状态同步的问题</p>
          <p>可以做到让组件无状态化</p>
          <p>使用 Provider 注入，让 store actions 可以在子组件中，通过 props 访问使用</p>
          <h2>下面是一些不同点：</h2>
          <p>mobx 使用的是 @inject 装饰器语法注入，redux 使用的是 connect 语法注入</p>
          <p>mobx 使用 @observer 语法，让一个 component 能响应 store 字段更新</p>
          <p>mobx 会动态精确绑定数据字段和对应 component 关系， redux 使用 connect 参数手动控制传递哪些字段</p>
          <p>mobx 直接修改 store 的状态，但是必须在 @action 修饰的函数中完成，@action 的语义，表示这是一个修改状态的操作</p>
          <p>redux Provider 传递 store 是强约定，mobx Provider 灵活传递 store actions，也可以是其它名字，比如 db</p>
          <p>
            redux 使用了比较难以理解的高阶函数和参数 connect combineReducers bindActionCreators mapStateToProps mapDispatchToProps ，mobx 方案，除了使用 decorator 语法，没有其它让人感觉理解困难的函数。
          </p>
          <p>redux 引入了数据流，mobx 没有数据流的概念，通过 actions 直接改变数据</p>
        </div>
      </div>
    );
  }
}


class Index extends Component {
  render() {
    // ⑥使用Provider 在被 inject 的子组件里，可以通过 props.store props.actions 访问
    return (
      <Provider store={store} actions={actions}>
        <Demo />
      </Provider>
    )
  }
}

export default Index;