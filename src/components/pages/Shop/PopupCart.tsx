import React from "react";

import check from './check.svg'

import styles from './styles/popupCart.module.scss'

export const PopupCart = () => {
  return (
    <div className={styles.popupCartContainer}>
      <div className="flex relative mx-auto min-h-[36px] w-[240px] max-w-[calc(100vw-32px)] bg-[rgba(36,36,36,.9)] text-white pt-[7px] pr-[12px] pb-[9px] pl-[40px] rounded-[8px] text-[14px]">
        <img className='w-[18px] absolute left-[16px] top-[50%] translate-y-[-50%]' src={check} alt="" />
        <div>Товар добавлен в корзину</div>
      </div>
    </div>
  );
};