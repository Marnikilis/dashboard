import React from "react";
//@ts-ignore
import styles from "./User.module.scss";
import { ReactComponent as Search } from "../../images/search.svg";
import { ReactComponent as Ring } from "../../images/ring.svg";
import { ReactComponent as Avatar } from "../../images/avatars/av1.svg";

const User = () => {
  return (
    <div className={styles.container}>
      <Search />
      <div className={styles.ring}>
        <Ring />
        <span className={styles.circle} />
      </div>
      <Avatar className={"avatar"} />
    </div>
  );
};

export default User;
