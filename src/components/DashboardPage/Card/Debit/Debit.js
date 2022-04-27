import React from 'react';
import styles from './Debit.module.scss';
import {ReactComponent as DebitImg} from '../../../../images/debit.svg';

const Debit = () => {
  return (
    // <div className={'box'}>
      <div className={styles.container}>
        <div className={styles.debitCircles}>
          <DebitImg/>
        </div>
        <div className={styles.text}>Debit</div>
        <select>
          <option>$10.680</option>
          <option>$12.345</option>
        </select>
      </div>
    // </div>
  );
};

export default Debit;