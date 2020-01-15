import React, { Component } from 'react';
import { observable, computed, action } from 'mobx';
import { observer } from 'mobx-react';
import { Button, Input } from 'antd';

import './index.scss'

class VM {
  @observable firstName = '';
  @observable lastName = '';

  @computed get fullName() {
    const { firstName, lastName } = this;
    if (!firstName && !lastName) {
      return '请输入内容!'
    } else {
      return `${firstName}-${lastName}`;
    }
  };

  @action.bound
  setValue(key, event) {
    this[key] = event.target.value;
  }
  @action.bound
  doReset() {
    this.firstName = '';
    this.lastName = '';
  }
}

@observer
class Index extends Component {
  constructor() {
    super();
    this.vm = new VM()
  }
  render() {
    return (
      <div className="mobx-wrapper">
        <h2>mobx-react——单组件输入框（单一）</h2>
        <div>
          <p>First name:</p>
          <Input type="text" value={this.vm.firstName} onChange={e => this.vm.setValue('firstName', e)} />
        </div>
        <div>
          <p>Last name:</p>
          <Input type="text" value={this.vm.lastName} onChange={e => this.vm.setValue('lastName', e)} />
        </div>
        <div className='results'>
          <p>结果：</p>
          <p>{this.vm.fullName}</p>
        </div>
        <div>
          <Button type="primary" onClick={this.vm.doReset}>重置</Button>
        </div>
      </div>
    );
  }
}

export default Index;