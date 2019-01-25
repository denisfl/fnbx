import React from 'react';
import List from 'client/eat/components/List';
import Mask from 'client/eat/components/Mask';
import styles from './styles.scss';

import data from 'client/data'

export default () => {
  return (
    <div className={styles.layout}>
      <div className={styles.layoutInner}>
        <h1 className={styles.layoutTitle}>Ты сегодня покормил кота?</h1>
        <Mask/>
        <List list={data.list} />
      </div>
    </div>
  );
};
