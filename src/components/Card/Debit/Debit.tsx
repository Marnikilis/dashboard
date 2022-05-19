import React from 'react';
//@ts-ignore
import styles from './Debit.module.scss';
import CustomSelect from '../../../containers/CustomSelect/CustomSelect';
import { ReactComponent as DebitImg } from '../../../images/debit.svg';
import { ReactComponent as ArrowBtn } from '../../../images/arrowBtn.svg';

const optionsAmount = ["10.680", "11.680", "12.680",];

const Debit = () => {
  return (
    <div className={styles.container}>
      <div className={styles.debitContent}>
        <div>
          <div className={styles.debitCircles}>
            <DebitImg/>
          </div>
          <span>Debit</span>
        </div>
        <div className={styles.amountContainer}>
          <span>$</span>
          <CustomSelect options={optionsAmount}>
            <ArrowBtn/>
          </CustomSelect>
        </div>
      </div>
    </div>
  );
};

export default Debit;