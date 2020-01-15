import {observable } from 'mobx'

// 定义数据结构
class Store {
  // ① 使用 observable decorator
  @observable a = 0;
}

// ③实例化单一数据源
export const store = new Store();