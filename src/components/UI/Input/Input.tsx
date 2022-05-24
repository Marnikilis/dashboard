import React, { FC, useState } from 'react';
import { useController } from 'react-hook-form';
//@ts-ignore
import styles from './Input.module.scss';


interface Props {
  errors: object;
  name: string;
  control: any;
  rules: object;
}

const Input: FC<Props> = (props) => {
  const {field, fieldState: {error}} = useController(props);

  const [value, setValue] = useState(field.value);
  const onChange = (event) => {
    field.onChange(event.target.value)
    setValue(event.target.value)
  };

  const onBlurHandler = () => {
    if (value.slice(-2) === '.0') {
      return field.onChange(value + '0');
    } else if (value[value.length - 1] === '.') {
      return field.onChange(value.slice(0, -1));
    } else if (!value.includes('.')) {
      return field.onChange(value.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    }
  };

  const onKeyUpHandler = () => {
    let numbers = /^[0-9.,]+$/;

    if (value.slice(0, 1).includes(',')) {
      return field.onChange('')
    } else if (!+value.match(numbers)) {
      return field.onChange(value.replace(/[^\d,]/g, ''))
    } else if (value.includes('.000')) {
      return field.onChange(value.slice(0, -1))
    }
  };

  return (
    <div className={styles.container}>
      <input
        {...field}
        onBlur={onBlurHandler}
        onKeyUp={onKeyUpHandler}
        onChange={onChange}
      />
      <div className={styles.error}>
        {error?.message && <p>{error?.message}</p>}
      </div>
    </div>
  );
};

export default Input;