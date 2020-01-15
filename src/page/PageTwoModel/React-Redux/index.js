import React, {Component} from 'react';
import { connect } from "react-redux";
import { Button } from 'antd';
import {add, minus} from '../../../store_redux/addMinus/action';

class Index extends Component {

  render() {
    console.log(this.props.store);
    return (
      <div>
        <h2>react-redux——加减法（拆分）</h2>
        <h3>视图变化{this.props.v}</h3>
        <Button type="primary" onClick={()=>{this.props.add()}}>加14</Button>
        &ensp;&ensp;&ensp;&ensp;
        <Button type="primary" onClick={()=>{this.props.minus()}}>减17</Button>
      </div>
    );
  }
}

export default connect(
  state => ({
    v: state.addMinus.v,
  }),
  {
    add,
    minus
  }
)(Index);