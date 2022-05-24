import React from 'react';
//@ts-ignore
import styles from './Card.module.scss';
import { ReactComponent as MyCard } from '../../images/card.svg';
import { ReactComponent as Visa } from '../../images/visa.svg';
import { ReactComponent as Add } from '../../images/addBtn.svg';

import av4 from '../../images/avatars/av4.svg';
import Debit from "./Debit/Debit";
import Transfer from "./Transfer/Transfer";
import { useForm } from 'react-hook-form';
import av3 from '../../images/avatars/av3.svg';
import Input from '../UI/Input/Input';
import usd from '../../images/currencies/usa.png';
import french from '../../images/currencies/french.png';


interface FormData {
  amount: string;
}

const Card = () => {
  const {handleSubmit, control, formState: {errors}, reset} = useForm<FormData>({
    defaultValues: {
      amount: ""
    },
    mode: "all"
  });

  const onSubmit = (data) => {
    if (parseInt(data.amount) !== 0) {
      console.log(JSON.stringify(data));
      reset()
    }
  };

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
        <div className={'box'}>
          <Debit/>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={'box'}>
          <div className={styles.inputContainer}>
            <label>
              <img src={av3} alt='Avatar'/>
              Enter the amount
            </label>
            <div className={styles.inputContent}>
              <span>$</span>
              <Input errors={errors}
                     name='amount'
                     control={control}
                     rules={{
                       required: 'Required field',
                       pattern: {value: /^[0-9.,]+$/, message: 'Invalid input'},
                     }}/>
              <div className={styles.currencies}>
                <img src={usd} alt={usd}/>
                <img src={french} alt={french}/>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.addContainer}>
          <img src={av4} alt='Avatar'/>
          <span> Astrid Hayes</span>
          <Add/>
        </div>
        <button type='submit' className={styles.sendBtn}>Send Money</button>
      </form>
      <Transfer/>
    </div>
  );
};

export default Card;