import React from 'react';
import styles from './Card.module.scss';
import {ReactComponent as MyCard} from '../../../images/card.svg';
import {ReactComponent as Visa} from '../../../images/visa.svg';
import {ReactComponent as Add} from '../../../images/addBtn.svg';

import av4 from '../../../images/avatars/av4.svg';
import Debit from "./Debit/Debit";
import Transfer from "./Transfer/Transfer";
import InputAmount from "./InputAmount/InputAmount";


const Card = () => {

  return (
    <div className={styles.container}>
      <div className={styles.firstPartCard}>
        <div className={styles.card}>
          <MyCard/>
          <div className={styles.cardContent}>
            <div className={styles.info}>
              <div className={styles.name}>
                <div className={styles.nameText}>Name</div>
                <div className={styles.nameAllText}>Carla Rosser</div>
              </div>
              <div className={styles.cardNumber}>
                <div>1200 01452 54215</div>
                <Visa/>
              </div>
              <div className={styles.data}>08/23</div>
            </div>
          </div>
        </div>
        <div className={styles.headingSecond}>Send Money</div>
        <div className={'box'}><Debit/></div>
        <div className={'box'}><InputAmount/></div>
      </div>
      <div>
        <div className={styles.sendContainer}>
          <div className={styles.addContainer}>
            <div> <img src={av4} alt={av4}/>
              <span> Astrid Hayes</span> </div>
            <Add/>
          </div>
          <button className={styles.sendBtn}>Send Money</button>
        </div>
        <Transfer/>
      </div>
    </div>
  );
};

export default Card;