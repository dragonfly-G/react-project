import React, {Component} from 'react';
// import lrz from 'lrz'
import Cropper from 'react-cropper';
// import { Upload, Modal, message  } from 'antd';

import 'cropperjs/dist/cropper.css';

class Index extends Component {

  _crop(){
    console.log(this.refs.cropper.getCroppedCanvas().toDataURL());
  }

  render() {
    return (
      <div>
        <Cropper
          ref='cropper'
          src='http://fengyuanchen.github.io/cropper/img/picture.jpg'
          style={{height: 400, width: '100%'}}
          aspectRatio={16 / 9}
          guides={false}
          crop={this._crop.bind(this)} />
      </div>
    );
  }
}

export default Index;