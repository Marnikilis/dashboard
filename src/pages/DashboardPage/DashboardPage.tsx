import React from 'react';
//@ts-ignore
import styles from './DashboardPage.module.scss';
import Card from "../../components/Card/Card";
import Transactions from "../../components/Transactions/Transactions";
import Statistics from "../../components/Statistics/Statistics";
import MoneyFlow from "../../components/MoneyFlow/MoneyFlow";
import Contacts from "../../components/Contacts/Contacts";

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