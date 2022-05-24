import React from 'react';
//@ts-ignore
import styles from './MoneyFlow.module.scss';
import { ReactComponent as Graphic } from "../../images/graphic.svg";
import { ReactComponent as GraphImg } from "../../images/graphImg.svg";
import Arrow from "./Arrow";
import CustomSelect from '../../containers/CustomSelect/CustomSelect';
import { ReactComponent as ArrowBtn } from '../../images/arrowBtn.svg';

const optionsPeriod = ["Week", "Month", "Year",];

const MoneyFlow = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}> Money Flow
        <div className={styles.icons}>
          <Arrow color={'#A4B4CB'}/>
          <GraphImg/>
        </div>
      </div>
      <div className={styles.arrowContainer}>
        <div className={styles.arrowBox}>
          <Arrow/>
        </div>
        <span>Savings</span>
        <div><Arrow color={'#0177FD'}/> +6,79%</div>
        <div className={styles.select}>
          <CustomSelect options={optionsPeriod}>
            <ArrowBtn/>
          </CustomSelect>
        </div>
      </div>
      <Graphic/>
    </div>
  );
};

export default MoneyFlow;