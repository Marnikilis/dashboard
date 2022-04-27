import React from 'react';
import styles from './Contacts.module.scss';
import {ReactComponent as Pencil} from './contactsImg/pencil.svg';
import {ReactComponent as Search} from './contactsImg/search.svg';
import {ReactComponent as Message} from './contactsImg/message.svg';
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
          <Pencil style={{marginRight:"20px"}}/>
          <Search/>
        </div>
      </div>
      <span>18 recipients</span>
      <div className={styles.recipients}>
        <img src={av2}/>  <img src={av5}/> <img src={av6}/> <img src={av7}/> <img src={av8}/>
        <button className={styles.btn}> &#62; </button>
      </div>
        <div className={styles.groupContainer}>
          <div className={styles.text}><span style={{color:'#7D8DA6'}}>Group</span> Party</div>
          <div className={styles.group}>
            <div>   <img src={av9}/>  <img src={av10}/> <img src={av11}/> </div>
            <div className={styles.plus}>+5</div>
            <Message/> </div>
          <div className={styles.groupMember}>
            <img src={av12}/>
            <div>
              <div className={styles.text}>Dakota Milk</div>
              <span style={{color:'#7D8DA6'}}>$ 420.00</span>
            </div>
            <button  className={styles.btn}> &#62; </button> </div>
        </div>
    </div>
  );
};

export default Contacts;