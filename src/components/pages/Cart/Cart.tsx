import React from "react";

import testImg from '../Cart/testImg.webp'

import { likeCart, deleteCart } from './imagesCart'
import styles from './styles/cart.module.scss'

const Cart = () => {
  return (
    <div className={`flex pt-[24px] pb-[48px] bg-[#f6f6f9] pl-[32px]`}>
      <div className={`w-[50%] min-h-[300px] bg-white border-[1px] border-[#f2f2f2] p-[24px] rounded-[24px]`}>
        <h1 className="flex h-[32px] text-[24px] font-[700] leading-[22px] mb-[8px]">Корзина</h1>
        <h2 className="flex text-[14px] font-[400] leading-[20px] text-[#868695] mb-[28px]">1 картинка</h2>
        <div className="flex flex-row justify-between">
          <div className="flex">
            <img src={testImg} className='w-[96px] mr-[20px] rounded-[8px]' alt="" />
            <div className="flex flex-col">
              <h3 className="text-[16px] font-[500]">name picture</h3>
              <div className="mt-[8px] text-[14px] text-[#868695]">Размер:</div>
              <div className="mt-[8px] text-[14px] text-[#868695]">Материалы:</div>
              <div className="flex mt-[12px]">
                <div className="flex rounded-[8px] w-[32px] h-[32px] bg-[#f6f6f9] justify-center items-center mr-[8px] cursor-pointer">
                  {likeCart()}
                </div>
                <div className="flex rounded-[8px] w-[32px] h-[32px] bg-[#f6f6f9] justify-center items-center cursor-pointer">
                  {deleteCart()}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <button className={`${styles.btnMinus} w-[32px] h-[32px] bg-[#f6f6f9] rounded-[8px]`}></button>
            <div className="w-[49px] h-[32px] flex justify-center items-center">1</div>
            <button className={`${styles.btnPlus} w-[32px] h-[32px] bg-[#f6f6f9] rounded-[8px]`}></button>
          </div>
          <div className="flex text-[rgb(255,68,68)] font-[700] text-[16px]">5000 ₽</div>
        </div>
      </div>

      <div>2</div>
    </div>
  )
}

export default Cart