/* eslint-disable no-plusplus, global-require */
import React from 'react';
import { connect } from 'dva';
import { DatePicker, List, Button, Icon, Tabs, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';
import styles from './index.less';
import {classnames} from '../../utils/index';
import QueueAnim from 'rc-queue-anim';


function callback() {
}

class MobileDemo extends React.Component {
  render() {
    return (
      <QueueAnim duration="500">
        <div  key='test'>
          <Button className={classnames({[styles.button]: true, [styles.fb]: false})} loading style={{ margin: '16px 0', padding: '0 16px' }} type="primary">
            按钮
          </Button>
        </div>
      </QueueAnim>
    );
  }
}

const MobileDemoWrapper = createForm()(MobileDemo);
export default connect()(MobileDemoWrapper);
