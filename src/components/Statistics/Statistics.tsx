import React from 'react';
//@ts-ignore
import styles from './Statistics.module.scss';
import customers from './statisticImages/customers.svg';
import remittance from './statisticImages/remittance.svg';
import donation from './statisticImages/donation.svg';
import watchtime from './statisticImages/watchtime.svg';


const statistics = [
  {img: customers, amount: '220k', text: 'customers'},
  {img: remittance, amount: '230k', text: 'Remittance'},
  {img: donation, amount: '270k', text: 'Donation'},
  {img: watchtime, amount: '130k', text: 'Watchtime'},
]

const Statistics = () => {

  return (
    <div className={`box ${styles.container}`}>
      <div className={styles.text}> Statistics</div>
      <div className={styles.statisticsItems}>
        {statistics.map((item, i) => {
          return (
            <div key={i} className={styles.statisticContainer}>
              <img src={item.img} alt='Statistic'/>
              <div className={styles.statisticText}>
                <span>{item.amount}</span>
                <span>{item.text}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Statistics;