import React, {Component} from 'react';

import './index.scss'

class Index extends Component {
  state = {

  }


  componentDidMount() {
    window.onload = function(){
      let detail = document.getElementById('lists').offsetWidth;

      let temp1 = document.getElementById('title').children;
      let temp2 = document.getElementById('dataUl').children;

      let countNum1 = 0;
      let countNum2 = 0;

      for(var i=0; i<temp1.length; i++){
        countNum1 += temp1[i].offsetWidth
      }
      for(var j=0; j<temp2.length; j++){
        countNum2 += temp2[j].offsetWidth
      }

      if (countNum1 <= detail) {
        document.getElementById('title').style.width = detail+ 'px';
      }else {
        document.getElementById('title').style.width = countNum1+20+'px'
      }

      if (countNum2 <= detail) {
        document.getElementById('data').style.width = detail+ 'px';
      }else {
        document.getElementById('data').style.width = countNum1+20+ 'px'
      }

    };
  }

  render() {
    return (
      <div>
        <h2>明细表  (初始化,就已经将结构搭建完成,左固定,右滑动)</h2>
        <section className="table">
          <div className="left">
            <h3>
              类目
            </h3>
            <h3>abcd</h3>
            <h3>abcd</h3>
            <h3>abcd</h3>
            <h3>abcd</h3>
          </div>
          <div className="right">
            <ul className="one">
              <li><p>北京</p></li>
              <li><p>河北</p></li>
              <li><p>江苏</p></li>
              <li><p>安徽</p></li>
              <li><p>湖北</p></li>
            </ul>
            <ul className="one">
              <li><p>11111</p></li>
              <li><p>22222</p></li>
              <li><p>33333</p></li>
              <li><p>44444</p></li>
              <li><p>55555</p></li>
            </ul>
            <ul className="one">
              <li><p>11111</p></li>
              <li><p>22222</p></li>
              <li><p>33333</p></li>
              <li><p>44444</p></li>
              <li><p>55555</p></li>
            </ul>
            <ul className="one">
              <li><p>11111</p></li>
              <li><p>22222</p></li>
              <li><p>33333</p></li>
              <li><p>44444</p></li>
              <li><p>55555</p></li>
            </ul>
            <ul className="one">
              <li><p>11111</p></li>
              <li><p>22222</p></li>
              <li><p>33333</p></li>
              <li><p>44444</p></li>
              <li><p>55555</p></li>
            </ul>
          </div>
        </section>
        <br/>
        <br/>
        <h2>明细表  (通过id，动态获取盒子的width!)</h2>
        <section className='list-detail'>
          <div id='lists'>
            <ul className='title' id='title'>
              <li>
                <p>职位</p>
              </li>
              <li>
                <p>部门</p>
              </li>
              <li>
                <p>候选人</p>
              </li>
              <li>
                <p>状态</p>
              </li>
              <li>
                <p>伯乐</p>
              </li>
              <li>
                <p>推荐时间</p>
              </li>
              <li>
                <p>入职时间</p>
              </li>
              <li>
                <p>待结算奖金</p>
              </li>
              <li>
                <p>已结算奖金</p>
              </li>
              <li>
                <p>待结算积分</p>
              </li>
              <li>
                <p>已结算积分</p>
              </li>
            </ul>
          </div>
          <div className='data' id='data'>
            {
              [1,2,3,4,5,6,7].map((item,idx) => (
                <ul key={idx} id='dataUl'>
                  <li>
                    <p>算法</p>
                  </li>
                  <li>
                    <p>算法</p>
                  </li>
                  <li>
                    <p>张三</p>
                  </li>
                  <li>
                    <p>已入职</p>
                  </li>
                  <li>
                    <p>李四</p>
                  </li>
                  <li>
                    <p>20190216</p>
                  </li>
                  <li>
                    <p>20190301</p>
                  </li>
                  <li>
                    <p>1221</p>
                  </li>
                  <li>
                    <p>3353</p>
                  </li>
                  <li>
                    <p>4562</p>
                  </li>
                  <li>
                    <p>3511</p>
                  </li>
                </ul>
              ))
            }
          </div>
        </section>
      </div>
    );
  }
}

export default Index;