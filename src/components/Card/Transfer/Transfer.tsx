import React from 'react';
//@ts-ignore
import styles from './Transfer.module.scss';
import {ReactComponent as Send} from './imgTransfer/send.svg';
import {ReactComponent as Receive} from './imgTransfer/receive.svg';
import {ReactComponent as Invoicing} from './imgTransfer/ivoicing.svg';
import {ReactComponent as More} from './imgTransfer/more.svg';
import first from './imgTransfer/firstav.png';
import second from './imgTransfer/secondav.png';
import {ReactComponent as DebitImg} from "./imgTransfer/debit.svg";
import CustomSelect from '../../../containers/CustomSelect/CustomSelect';
import { ReactComponent as ArrowBtn } from '../../../images/arrowBtn.svg';

const optionsAmount = ["$10,432", "$11,680", "$12,680",];

const Transfer = () => {
  return (
    <div className={styles.container}>
      <div>Quick Transfer</div>
      <div className={styles.debitContainer}>
        <div>
          <div className={styles.debitCircles}>
            <DebitImg/>
          </div>
          <span>Debit</span>
        </div>
        <div className={styles.select}>
          <CustomSelect options={optionsAmount}>
            <ArrowBtn/>
          </CustomSelect>
        </div>
      </div>

      <div className={styles.inputContainer}>
        <label>
          Enter amount</label>
        <div className={styles.inputContent}>
          <span>$</span>
          <input placeholder='1.24'/>
          <div className={styles.currencies}>
            <img src={first} alt={first}/>
            <img src={second} alt={second}/>
          </div>
        </div>
      </div>

      <div className={styles.transferIcons}>
        <div>
          <Send/>
          <span>Send</span>
        </div>
        <div>
          <Receive/>
          <span>Receive</span>
        </div>
        <div>
          <Invoicing/>
          <span>Invoicing </span>
        </div>
        <div>
          <More/>
          <span>More</span>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
