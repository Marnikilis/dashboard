import React from 'react';
import styles from './Transfer.module.scss';
import Debit from "../Debit/Debit";
import InputAmount from "../InputAmount/InputAmount";
import {ReactComponent as Send} from './imgTransfer/send.svg';
import {ReactComponent as Receive} from './imgTransfer/receive.svg';
import {ReactComponent as Invoicing} from './imgTransfer/ivoicing.svg';
  import {ReactComponent as More} from './imgTransfer/more.svg';

const Transfer = () => {
  return (
    <div className={`box ${styles.container}`}>
      Quick Transfer
      <Debit/>
      <div className={styles.input}> <InputAmount/></div>
      <div className={styles.transferIcons}>
        <div> <Send/> Send </div>
        <div><Receive/>Receive </div>
        <div> <Invoicing/>Invoicing</div>
        <div>  <More/> More </div>
      </div>
    </div>
  );
};

export default Transfer;
