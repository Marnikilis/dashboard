import React from "react";
//@ts-ignore
import styles from "./Transfer.module.scss";
import { ReactComponent as Send } from "./imgTransfer/send.svg";
import { ReactComponent as Receive } from "./imgTransfer/receive.svg";
import { ReactComponent as Invoicing } from "./imgTransfer/ivoicing.svg";
import { ReactComponent as More } from "./imgTransfer/more.svg";
import first from "./imgTransfer/firstav.png";
import second from "./imgTransfer/secondav.png";
import { ReactComponent as DebitImg } from "./imgTransfer/debit.svg";
import CustomSelect from "../../../containers/CustomSelect/CustomSelect";
import { ReactComponent as ArrowBtn } from "../../../images/arrowBtn.svg";
import Input from "../../UI/Input/Input";
import { useForm } from "react-hook-form";

const optionsAmount = ["$10,432", "$11,680", "$12,680"];

interface FormData {
  amount: string;
}

const Transfer = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      amount: "",
    },
    mode: "all",
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    reset();
  };

  return (
    <div className={styles.container}>
      <div>Quick Transfer</div>
      <div className={styles.debitContainer}>
        <div className={styles.debitCircles}>
          <DebitImg />
          <span>Debit</span>
        </div>
        <div className={styles.select}>
          <CustomSelect options={optionsAmount}>
            <ArrowBtn />
          </CustomSelect>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputContainer}>
          <label>Enter amount</label>
          <div className={styles.inputContent}>
            <span>$</span>
            <Input
              errors={errors}
              name="amount"
              control={control}
              rules={{
                required: "Required field",
                pattern: { value: /^[0-9.,]+$/, message: "Invalid input" },
              }}
            />
            <div className={styles.currencies}>
              <img src={first} alt={first} />
              <img src={second} alt={second} />
            </div>
          </div>
        </div>
        <div className={styles.transferIcons}>
          <button type="submit">
            <Send />
            <span>Send</span>
          </button>
          <button type="submit">
            <Receive />
            <span>Receive</span>
          </button>
          <button type="submit">
            <Invoicing />
            <span>Invoicing </span>
          </button>
          <button type="submit">
            <More />
            <span>More</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Transfer;
