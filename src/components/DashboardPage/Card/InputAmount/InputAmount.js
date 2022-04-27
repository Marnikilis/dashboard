import React from 'react';
import styles from './InputAmount.module.scss';
import av3 from "../../../../images/avatars/av3.svg";
import usd from "../../../../images/currencies/usa.png";
import french from "../../../../images/currencies/french.png";

const InputAmount = () => {
  return (
      <div className={styles.inputContainer}>
        <label>
          <img src={av3}/>
          Enter the amount</label>
        <div className={styles.inputContent}>
          <span className={styles.currency}>$</span>
          <input placeholder='800.00'/>
          <div className={styles.currencies}>
            <img src={usd} alt={usd}/>
            <img src={french} alt={french}/>
          </div>
        </div>
      </div>
  );
};

export default InputAmount;