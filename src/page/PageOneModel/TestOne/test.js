import React, {Component} from 'react';

class Test extends Component {

  // static getDerivedStateFromProps() {
  //   console.log(222222);
  // }


  shouldComponentUpdate(){
    console.log(55555);
    return true
  }

  // getSnapshotBeforeUpdate(){
  //   console.log(666666);
  // }

  componentDidUpdate(){
    console.log(777777);
  }

  render() {
    console.log(88888);
    return (
      <div>
        {this.props.glf}
      </div>
    );
  }
}

export default Test;