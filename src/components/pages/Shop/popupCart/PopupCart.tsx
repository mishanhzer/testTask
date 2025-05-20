import React from "react";

import check from '../../../../assets/images/cartImage/check.svg'

import styles from '../styles/popupCart.module.scss'

export const PopupCart = ({ text }) => {
  return (
    <div className={styles.popupCartContainer}>
      <div className={styles.popupCartWrapper}>
        <img className={styles.popupCartImg} src={check} alt="checkImg" />
        <div>{text}</div>
      </div>
    </div>
  );
};