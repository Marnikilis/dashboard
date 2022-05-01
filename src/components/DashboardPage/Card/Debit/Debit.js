import React from 'react';
import styles from './Debit.module.scss';
import {ReactComponent as DebitImg} from '../../../../images/debit.svg';
import {ReactComponent as ArrowBtn} from '../../../../images/arrowBtn.svg';

const Debit = () => {
  return (
      <div className={styles.container}>
        <div>
          <div className={styles.debitCircles}>
            <DebitImg/>
          </div>
          <span>Debit</span>
        </div>
        <div className={styles.amountContainer}>
          <span>$ </span>
          10.680
          <div className={styles.arrow}>
            <ArrowBtn/>
          </div>
        </div>


        {/*<select>*/}
        {/*  <option>$10.680</option>*/}
        {/*  <option>$12.345</option>*/}
        {/*</select>*/}
      </div>
  );
};

export default Debit;