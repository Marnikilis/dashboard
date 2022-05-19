import React from 'react';
//@ts-ignore
import styles from './Contacts.module.scss';
import {ReactComponent as Pencil} from './contactsImg/pencil.svg';
import {ReactComponent as Search} from './contactsImg/search.svg';
import {ReactComponent as Message} from './contactsImg/message.svg';
import {ReactComponent as ArrowBtn} from '../../../images/arrowBtn.svg';
import av2 from '../../../images/avatars/av2.svg';
import av5 from '../../../images/avatars/av5.svg';
import av6 from '../../../images/avatars/av6.svg';
import av7 from '../../../images/avatars/av7.svg';
import av8 from '../../../images/avatars/av8.svg';
import av9 from '../../../images/avatars/av9.svg';
import av10 from '../../../images/avatars/av10.svg';
import av11 from '../../../images/avatars/av11.svg';
import av12 from '../../../images/avatars/av12.svg';


const Contacts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contacts}>Recent Contacts
        <div>
          <Pencil style={{marginRight: "20px"}}/>
          <Search/>
        </div>
      </div>
      <span>18 recipients</span>
      <div className={styles.recipients}>
        <img src={av2}  alt='Avatar'/>
        <img src={av5}  alt='Avatar'/>
        <div>
          <img src={av6}  alt='Avatar'/>
          <div className={styles.line}/>
        </div>
        <img src={av7}  alt='Avatar'/>
        <img src={av8}  alt='Avatar'/>
        <button>
          <ArrowBtn/>
        </button>
      </div>
      <div className={styles.groupContainer}>
        <div className={styles.text}><span style={{color: '#7D8DA6'}}>Group</span> Party</div>
        <div className={styles.group}>
          <div>
            <div>
              <img src={av9}  alt='Avatar'/>
              <img src={av10}  alt='Avatar'/>
              <img src={av11}  alt='Avatar'/>
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
            <img src={av12}  alt='Avatar'/>
            <div className={styles.textContainer}>
              <div className={styles.text}>Dakota Milk</div>
              <span style={{color: '#7D8DA6'}}>$ 420.00</span>
            </div>
          </div>
          <button>
            <ArrowBtn/>
          </button>
        </div>
      </div>
      <div className={styles.backgroundBox}/>
    </div>
  );
};

export default Contacts;