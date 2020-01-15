import React, {Component} from 'react';
import Sortable from 'sortablejs';
import { Tag } from 'antd';

import './index.scss'

class Index extends Component {
  constructor() {
    super();
    this.state = {
      leftList: [
        {id: 1,name: '奥迪'},
        {id: 2,name: 'ABT'},
        {id: 3,name: '本田'},
        {id: 4,name: '奔驰'},
        {id: 5,name: '宝马'},
        {id: 6,name: '别克'},
        {id: 7,name: '比亚迪'},
        {id: 8,name: '宝骏'},
        {id: 9,name: '标致'},
        {id: 10,name: '奔腾'},
      ],
      rightList: [
        {id: 1,name: '三星'},
        {id: 2,name: '苹果'},
        {id: 3,name: '华为'},
        {id: 4,name: '华硕'},
        {id: 5,name: 'oppo'},
        {id: 6,name: '小米'},
        {id: 7,name: '魅族'},
        {id: 8,name: 'MOTO'},
        {id: 9,name: '诺基亚'},
        {id: 10,name: '索尼'},
      ]
    }
  }
  TempDemo = (componentBackingInstance) => {

    if(componentBackingInstance) {

      let options = {
        // 定义是否列表单元是否可以在列表容器内进行拖拽排序；
        sort: true,
        // 定义排序动画的时间；
        animation: 150,
        // 使列表单元中符合选择器的元素成为拖动的手柄，只有按住拖动手柄才能使列表单元进行拖动；
        handle: '.item-li',
        // 定义是否此sortable对象是否可用，为true时sortable对象不能拖放排序等功能，为false时为可以进行排序，相当于一个开关；
        disabled: false,
        // 定义哪些列表单元可以进行拖放
        draggable: ".item-li",
        // 当选中列表单元时会给该单元增加一个class；
        chosenClass: 'chosen',
        // 托起的哪个--拖动项的类名
        dragClass: "sortable-drag",
        // 当拖动列表单元时会生成一个副本作为影子单元来模拟被拖动单元排序的情况，此配置项就是来给这个影子单元添加一个class，给影子元素进行编辑样式；
        ghostClass: "item-shadow",
      };

      this.sort = Sortable.create(componentBackingInstance, options)
    }
  };
  componentWillUnmount() {
    // this.sort && this.sort.destroy()
  }

  render() {
    return (
      <div className='DragDrop'>
        <ul ref={this.TempDemo}>
          <p>汽车品牌：</p>
          <li>
            <Tag color="red">固定1</Tag>
          </li>
          <li>
            <Tag color="red">固定2</Tag>
          </li>
          <li>
            <Tag color="red">固定3</Tag>
          </li>
          <li>
            <Tag color="red">固定4</Tag>
          </li>

          {
            this.state.leftList.map(item => (
              <li className='item-li' key={item.id}>
                <Tag color="blue">{item.name}</Tag>
              </li>
            ))
          }
        </ul>
        <ul>
          <p>手机品牌：</p>
          {
            this.state.rightList.map(item => (
              <li className='li' key={item.id}>
                <Tag color="blue">{item.name}</Tag>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default Index;