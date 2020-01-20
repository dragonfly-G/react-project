import React, { Component } from 'react';
import _ from 'underscore'

import './index.scss'

//全局变量控制时间
var idx = 0;
//数组管理小球
// var ballonArr = [];
// var timer = 0

class Index extends Component {
  constructor() { 
    super();
    this.state = {
      //dom属性:显示小球
      dom: null,
      //半径
      ball_r: 20,
      idx: null,
      idy: null,
      //圆心点的设置
      ball_x: null,
      ball_y: null,
      colorArr: ["#D15FEE","#BFEFFF","#BCEE68","#B03060","#00FA9A","#EEEE00"]
    }
    //改变小球圆心x、y的变量
    do{
      this.state.idx = _.random(-5,5);
      this.state.idy = _.random(-5,5);
    //改变小球的圆心点位置的变量：这两个变量不能同时为零
    } while (this.state.idx === 0 && this.state.idy === 0);

  }

  init = async () => {
    //圆心点的设置
    await this.setState({
      dom: document.createElement("p"),
      ball_x: _.random(this.state.ball_r, 700 - this.state.ball_r),
      ball_y: _.random(this.state.ball_r, 400 - this.state.ball_r),
    })
    //小球的宽度和高度
    this.state.dom.style.width = (2 * this.state.ball_r) + "px";
    this.state.dom.style.height = (2 * this.state.ball_r) + "px";
    //小球距离父盒子的left和top的数据
    this.state.dom.style.left = (this.state.ball_x - this.state.ball_r)+"px";
    this.state.dom.style.top= (this.state.ball_y - this.state.ball_r)+"px";
    document.querySelector(".balls").appendChild(this.state.dom);
  }
  goDie = () => {
    //节点树上移除元素
    this.state.dom.remove()
  }
  update = async () => {
    //圆心点发生变化
    this.state.ball_x += this.state.idx
    this.state.ball_y += this.state.idy
 
    //小球水平方向判断的范围
    if (this.state.ball_x < this.state.ball_r) {
      this.state.idx = -this.state.idx;
      // this.state.ball_r--
    }
    if (this.state.ball_x > 700 - this.state.ball_r) {
      this.state.idx = -this.state.idx;
      // this.state.ball_r--
    }
    //小球垂直方向的范围的判断
    if (this.state.ball_y < this.state.ball_r) {
      this.state.idy = -this.state.idy
      // this.state.ball_r--
    }
    if (this.state.ball_y > 400 - this.state.ball_r) {
      this.state.idy = -this.state.idy
      // this.state.ball_r--
    }
    //当小球的半径小于1的时候从节点树、数组当中移除
    if(this.state.ball_r <1){
        //当小球的半径小于1像素的时候节点树移除、数组移除
      this.goDie();
    }
    //通过定时器实时让小球的圆心点、半径、背景颜色、发生变化
    this.state.dom.style.left = this.state.ball_x - this.state.ball_r+"px";
    this.state.dom.style.top = this.state.ball_y - this.state.ball_r+"px";
    this.state.dom.style.width = (2 * this.state.ball_r)+"px";
    this.state.dom.style.height = (2 * this.state.ball_r) + "px";
    this.state.dom.style.background = this.state.colorArr[_.random(0,this.state.colorArr.length-1)];
  }

  componentDidMount() {
    var self = this;
    self.init();
    setInterval(function  (argument) {
      idx++;
      idx % 1 === 0 && self.update();
    }, 20);
  }
  render() {
    return (
      <div className='ballBox'>
        <div className='balls'></div>
      </div>
    );
  }
}

export default Index;