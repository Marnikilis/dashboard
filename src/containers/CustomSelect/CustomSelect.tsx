import React, { useRef, useState } from 'react';
//@ts-ignore
import styles from './CustomSelect.module.scss';
import { createPortal } from "react-dom";

interface SelectType {
  options: string[];
  children: any;
}

const CustomSelect = ({options, children}: SelectType) => {
  const [value, setValue] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(true);
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);
  const selectRef = useRef<HTMLDivElement>();

  const cls = [styles.backdown];
  if (!isOpen) {
    cls.push(styles.close)
  }

  const chooseOptionHandler = (e) => {
    setValue(e.target.innerHTML)
    setIsOpen(false)
  }

  const onBackDownHandler = () => {
    const element = selectRef.current.getBoundingClientRect();
    setYPos(element.y + element.height)
    setXPos(element.x - 10)
    setIsOpen(prevState => !prevState)

  }
  const onCloseHandler = () => {
    setIsOpen(false)
  }


  return (
    <div className={styles.container}>
      <div onClick={onBackDownHandler} ref={selectRef} className={styles.select}>
        <input disabled placeholder={value} type='text'/>
        <button>
          {children}
        </button>
      </div>
      {xPos ? createPortal(
        <>
          <div className={cls.join(' ')} style={{position: 'absolute', top: yPos, left: xPos}}>
            {options && options.map((option, i) => {
              return <button key={i} onClick={(e) => chooseOptionHandler(e)}>{option}</button>
            })}
          </div>
        </>, document.getElementById('portal')) : null}
      {isOpen && <div className={styles.backdrop} onClick={onCloseHandler}/>}
    </div>
  );
};


export default CustomSelect;