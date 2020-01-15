import { action} from 'mobx'
import {store} from './data'

// 定义对数据的操作
class Actions {
  constructor({store}) {
    this.store = store;
  }
  // ② 使用 action decorator
  @action
  incA = () => {
    this.store.a++;
  };

  @action
  decA = () => {
    this.store.a--;
  }
}

// ④实例化 actions，并且和 store 进行关联
export const actions = new Actions({store});