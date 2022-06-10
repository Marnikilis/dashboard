import React, { useState } from "react";
//@ts-ignore
import styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { ReactComponent as Home } from "../../images/icons/home.svg";
import { ReactComponent as Invoice } from "../../images/icons/invoice.svg";
import { ReactComponent as Message } from "../../images/icons/message.svg";
import { ReactComponent as Wallet } from "../../images/icons/wallet.svg";
import { ReactComponent as Activity } from "../../images/icons/activity.svg";
import { ReactComponent as Analytics } from "../../images/icons/analytics.svg";
import { ReactComponent as Help } from "../../images/icons/help.svg";
import { ReactComponent as Settings } from "../../images/icons/settings.svg";
import MenuToggle from "./MenuToggle/MenuToggle";
import Backdrop from "./Backdrop/Backdrop";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuHandler = () => {
    setIsOpen((prevState) => !prevState);
  };
  const menuCloseHandler = () => {
    setIsOpen(false);
  };

  const cls = [styles.nav];
  if (!isOpen) {
    cls.push(styles.close);
  }
  return (
    <>
      <div className={styles.container}>
        <Logo />
        <div className={cls.join(" ")}>
          <div className={styles.navLinks}>
            <NavLink to="/dashboard">
              <Home className={"icon"} />
              Dashboard
            </NavLink>
            <NavLink to="/invoices">
              <Invoice className={"icon"} /> Invoices
            </NavLink>
            <NavLink to="/messages">
              <Message className={"icon"} />
              Messages
              <span className={styles.messages}>5</span>
            </NavLink>
            <NavLink to="/wallets">
              <Wallet className={"icon"} />
              My Wallets
            </NavLink>
            <NavLink to="/activity">
              <Activity className={"icon"} />
              Activity
            </NavLink>
            <NavLink to="/analytics">
              <Analytics className={"icon"} />
              Analytics
            </NavLink>
          </div>
          <div className={styles.navSettings}>
            <NavLink to="/help">
              <Help className={"icon"} />
              Get Help
            </NavLink>
            <NavLink to="/settings">
              <Settings className={"icon"} />
              Settings
            </NavLink>
          </div>
        </div>
        <MenuToggle onToggle={toggleMenuHandler} isOpen={isOpen} />
        {isOpen && <Backdrop onClick={menuCloseHandler} />}
      </div>
    </>
  );
};

export default Navbar;
