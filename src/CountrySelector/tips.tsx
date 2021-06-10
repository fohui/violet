import React from 'react';
import styles from './index.scss';

const Tips = function(props:{ txt?:string; tipsState:boolean }) {
  const { tipsState, txt } = props;
  if (tipsState) {
    return <div className={styles.tips}>{txt}</div>;
  }
  return null;
};

export default Tips;
