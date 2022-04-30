import React from 'react';
import styles from './Debit.module.scss';
import {ReactComponent as DebitImg} from '../../../../images/debit.svg';

const Debit = () => {
  return (
      <div className={styles.container}>
        <div>
          <div className={styles.debitCircles}>
            <DebitImg/>
          </div>
          <span>Debit</span>
        </div>
        <select>
          <option>$10.680</option>
          <option>$12.345</option>
        </select>
      </div>
  );
};

export default Debit;