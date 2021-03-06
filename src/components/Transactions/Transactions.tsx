import React from "react";
//@ts-ignore
import styles from "./Transactions.module.scss";
import bitcoin from "../../images/bitcoin.png";
import av2 from "../../images/avatars/av2.svg";
import withdraw from "../../images/withdraw.svg";

const transactions = [
  {
    img: bitcoin,
    title: "Bitcoin Transactions",
    data: "Jan 16, 2020",
    cardNumber: "*****45242",
    amount: "-$853.00",
    status: "success",
  },
  {
    img: av2,
    title: "Sent to anitonia",
    data: "Jan 16, 2020",
    cardNumber: "*****87212",
    amount: "-$153.00",
    status: "pending",
  },
  {
    img: withdraw,
    title: "Withdraw Paypal",
    data: "Jan 16, 2020",
    cardNumber: "*****36275",
    amount: "+$223.00",
    status: "success",
  },
];

const Transactions = () => {
  return (
    <div className={styles.container}>
      <div className={styles.transactionText}>
        <div className={styles.headingThird}>Recent Transactions</div>
        <button>View all &#62;</button>
      </div>
      <div className={styles.scrollTable}>
        <table>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.title}>
                  <td>
                    <img
                      className={styles.img}
                      src={transaction.img}
                      alt="Avatar"
                    />
                  </td>
                  <td> {transaction.title}</td>
                  <td> {transaction.data}</td>
                  <td> {transaction.cardNumber}</td>
                  <td>{transaction.amount}</td>
                  <td>
                    <button className={`${transaction.status}`}>
                      {transaction.status}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
