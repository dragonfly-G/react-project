import React from 'react';
import { Layout } from 'antd';
import Header from '../../components/Header';

import './index.scss';

class PageMain extends React.Component {
  state = {

  };

  render() {
    return (
      <div>
        <Layout>
          {/*头部header*/}
          <Header />
          <div>
            {this.props.children}
          </div>
        </Layout>
      </div>

    );
  }
}

export default PageMain;