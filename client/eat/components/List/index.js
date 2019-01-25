import React  from 'react';
import Item from 'client/eat/components/Item';
import styles from './styles.scss';

export default ({ list }) => {

  return (
    <div className={styles.list}>
      { list.map(item => <Item key={item.taste} item={item}/> )}
    </div>
  );
};
