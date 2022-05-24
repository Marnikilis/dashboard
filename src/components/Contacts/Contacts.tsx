import React, { useState } from 'react';
//@ts-ignore
import styles from './Contacts.module.scss';
import { ReactComponent as Pencil } from './contactsImg/pencil.svg';
import { ReactComponent as Search } from './contactsImg/search.svg';
import { ReactComponent as Message } from './contactsImg/message.svg';
import { ReactComponent as Arrow } from './contactsImg/arrow.svg';
import av2 from '../../images/avatars/av2.svg';
import av5 from '../../images/avatars/av5.svg';
import av6 from '../../images/avatars/av6.svg';
import av7 from '../../images/avatars/av7.svg';
import av8 from '../../images/avatars/av8.svg';
import av9 from '../../images/avatars/av9.svg';
import av10 from '../../images/avatars/av10.svg';
import av11 from '../../images/avatars/av11.svg';
import av12 from '../../images/avatars/av12.svg';

const recipients = [{img: av2, name: 'Anna Dark', amount: '420.00'}, {img: av5, name: 'Peter Abelard', amount: '420.00'},
  {img: av6, name: 'Alan Miller', amount: '420.00'},
  {img: av7, name: 'Peter Parker', amount: '420.00'}, {img: av8, name: 'Malia Stiff', amount: '420.00'},
  {img: av9, name: 'Tom Lee', amount: '420.00'}, {img: av10, name: 'Derek Hill', amount: '420.00'},
  {img: av11, name: 'John Kile', amount: '420.00'}, {img: av12, name: 'Dakota Milk', amount: '420.00'}]

const Contacts = () => {
  const [person, setPerson] = useState(recipients[recipients.length - 1])


  const addToCroupPartyHandler = (person) => {
    setPerson(person)
  };

  return (
    <div className={styles.container}>
      <div className={styles.contacts}>
        <span>Recent Contacts</span>
        <div>
          <Pencil style={{marginRight: "20px"}}/>
          <Search/>
        </div>
      </div>
      <span>18 recipients</span>
      <div className={styles.recipientsSlider}>
        <div className={styles.recipients}>
          {recipients && recipients.map((recipient, i) => {
            return (
              <div key={i} className={styles.personAvatar}>
                <img src={recipient.img}
                     alt='Avatar'
                     onClick={() => addToCroupPartyHandler(recipient)}/>
                <span className={styles.line}/>
              </div>
            )
          })}
        </div>
        <button>
          <Arrow/>
        </button>
      </div>
      <div className={styles.groupContainer}>
        <div className={styles.text}><span style={{color: '#7D8DA6'}}>Group</span> Party</div>
        <div className={styles.group}>
          <div>
            <div>
              <img src={av9} alt='Avatar'/>
              <img src={av10} alt='Avatar'/>
              <img src={av11} alt='Avatar'/>
            </div>
            <div className={styles.plus}>+5</div>
          </div>
          <div className={styles.message}>
            <Message/>
            <span className={styles.circle}/>
          </div>
        </div>
        <div className={styles.groupMember}>
          <div>
            <img src={person.img} alt='Avatar'/>
            <div className={styles.textContainer}>
              <div className={styles.text}>{person.name}</div>
              <span style={{color: '#7D8DA6'}}>${person.amount}</span>
            </div>
          </div>
          <button>
            <Arrow/>
          </button>
        </div>
      </div>
      <div className={styles.backgroundBox}/>
    </div>
  );
};

export default Contacts;