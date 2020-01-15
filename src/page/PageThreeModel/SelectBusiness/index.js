import React, {Component} from 'react';
import {Checkbox} from "antd";

import './index.scss'

class Index extends Component {
  state = {
    goodsList:[
      {name: '华为手机', branch: '34564', people: '壮胆', starTime: '20190122', endTime: '20190530', id: 1},
      {name: 'oppo手机', branch: '5342', people: '都市报', starTime: '20190122', endTime: '20190530',id: 2},
      {name: '小米手机', branch: '345', people: '壮胆', starTime: '20190122', endTime: '20190530', id: 3},
      {name: 'vivo手机', branch: '734', people: '壮胆', starTime: '20190122', endTime: '20190530', id: 4},
      {name: '苹果手机', branch: '1386', people: '壮胆', starTime: '20190122', endTime: '20190530', id: 5},
      {name: '三星手机', branch: '8943', people: '壮胆', starTime: '20190122', endTime: '20190530', id: 6},
    ],
    goodsIds:[2,5,6],
  };
  async handleSelectAll(e) {
    if (this.state.goodsIds.length === this.state.goodsList.length) {
      this.setState({
        goodsIds: []
      })
    }else {
      await this.setState({
        goodsIds: [],
      });
      this.setState(prevState =>({
        goodsIds: prevState.goodsList.map(item => prevState.goodsIds.push(item.id))
      }))
    }
  }
  handleChange(idx,e) {
    let {goodsIds} = this.state;
    let idIndex = goodsIds.indexOf(idx);
    if (idIndex >= 0) {
      this.setState({
        goodsIds: this.state.goodsIds.filter((item) => item !== idx)
      })
    } else {
      this.setState({
        goodsIds: [...this.state.goodsIds, idx]
      })
    }
  }
  render() {
    return (
      <div className='page-one'>
        <div className='top-select'>
          <Checkbox onChange={this.handleSelectAll.bind(this)}
                    checked={this.state.goodsIds.length === this.state.goodsList.length}>
            {this.state.goodsIds.length !== this.state.goodsList.length ? '全选' : '取消'}
          </Checkbox>
        </div>
        <ul className='title'>
          <li>品类名称</li>
          <li>所需积分</li>
          <li>伯乐</li>
          <li>申请时间</li>
          <li>结束时间</li>
        </ul>
        {
          this.state.goodsList.map((item,idx) => {
            return (
              <ul key={idx}>
                <li>
                  <Checkbox onChange={this.handleChange.bind(this,item.id)}
                            checked={this.state.goodsIds.indexOf(item.id) >= 0}/>
                  <span>{item.name}</span>
                  <span>{this.state.goodsIds}</span>
                </li>
                <li>{item.branch}</li>
                <li>{item.people}</li>
                <li>{item.starTime}</li>
                <li>{item.endTime}</li>
              </ul>
            )
          })
        }
      </div>
    );
  }
}

export default Index;