import React from 'react';
import styles from './MenuToggle.module.scss';

const MenuToggle = (props) => {
  const cls = [styles.menuToggle];

  if (props.isOpen) {
    cls.push(styles.open)
    cls.push(styles.menuClose)
  } else {
    cls.push(styles.menuOpen)
  }

  return (
    <div
      className={cls.join(' ')}
      onClick={props.onToggle}
    />
  );
};

export default MenuToggle;