import React from 'react';
//@ts-ignore
import styles from './DashboardPage.module.scss';
import Card from "./Card/Card";
import Transactions from "./Transactions/Transactions";
import Statistics from "./Statistics/Statistics";
import MoneyFlow from "./MoneyFlow/MoneyFlow";
import Contacts from "./Contacts/Contacts";

const DashboardPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headingFirst}>My Card</div>
      <div className={styles.mainPartContainer}>
        <Card/>
        <div>
          <div className={styles.flexContainer}>
            <MoneyFlow/>
            <Contacts/>
          </div>
          <Transactions/>
          <Statistics/>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;