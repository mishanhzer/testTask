import React, { act, useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router";
import classNames from "classnames";

import { useStore } from '../../../../store/store'

import { heartActive, heartDefault } from "./ShopAnimals/heart";
import { cartInBtn } from "../../../../assets/images/Images";

import { TypesCommonData, TypesSaveActive, CategoryProps, TypesSalary, TypesLike, TypesButtonCart } from "../TypesShops"

import styles from './ShopAnimals/styles/shopAnimals.module.scss'

// Продолжить пытаться сохранить значения цены картин после обновления (в компоненте Subscribe что то получается близко к этому)


export const Category = ({
  commonData,
  limit,
  handleClickLike,
  saveActive,
  activeDiscount,
}: CategoryProps) => {
  return (
    <div className={styles.shopAnimals}>
      {commonData.slice(0, limit).map(item => {
        activeDiscount ? item.salary : item.salary = item.salary + item.salary * 0.2
        return (
          <div
            className={classNames(styles.shopBlock, item.salary ? styles.pictureStockOpacity : styles.pictureSoldOutOpacity)}
            data-name={item.name}
            key={item.name}
          >
            <img className={styles.shopImg} src={item.sizes?.[0].url} alt={item.name} />
            <Like
              handleClickLike={handleClickLike}
              item={item}
              saveActive={saveActive} />
            <Salary
              item={item}
              activeDiscount={activeDiscount} />
            <div className={styles.name}>{item.name}</div>

            <BlockCart
              item={item} />
          </div>
        )
      })}
    </div>
  )
}

const Like = ({ handleClickLike, item, saveActive }: TypesLike) => {
  return (
    <div className={styles.containerLike}>
      <button
        onClick={handleClickLike}
        disabled={item.salary ? false : true}
        className={styles.btn}
        data-name={item.name}
        data-id={item.id}>
        {saveActive[item.id] ? heartActive() : heartDefault()}
      </button>
    </div>
  )
}

const Salary = ({ item, activeDiscount }: TypesSalary) => {
  return (
    <div className={activeDiscount ? `${styles.salary} ${styles.animateDiscount}` : `${styles.salary} animate-animateOpacityBefore`}>
      {<div>
        {item.salary ? activeDiscount ? `${item.salary} ₽` : `${item.salary} ₽` : <div className={styles.sold}>Продано</div>}
      </div>}
      <div className={`${!activeDiscount ? `hidden` : 'block'} ${styles.salaryWithOutSubscribe}`}>
        {item.salary ? item.salary + item.salary * 0.2 : null}
      </div>
      <div className={`${!activeDiscount ? `hidden` : `block`} ${styles.salaryViewDiscount}`}>{item.salary ? `-20%` : null}</div>
    </div>
  )
}

const BlockCart = ({ item }: { item: TypesCommonData }) => {
  const getPictureCart = useStore(state => state.getPictureCart)
  const getPicturesCart = useStore(state => state.getPicturesCart)
  const deleteDuplicatePicture = useStore(state => state.deleteDuplicatePicture)

  const addInCart = useStore(state => state.addInCart)
  const setAddInCart = useStore(state => state.setAddInCart)

  const [activeCart, setActiveCart] = useState(false)
  const [btnId, setBtnId] = useState(0)

  const testClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const activeBtn = +e.currentTarget.getAttribute('data-id')!
    setBtnId(activeBtn)
    setActiveCart(!activeCart)

    if (e.currentTarget) {
      setAddInCart(true)
      getPictureCart(item)
      getPicturesCart()
      deleteDuplicatePicture()
    }

    setTimeout(() => {
      setAddInCart(false)
    }, 2700)
  }

  return (
    <div className={item.salary ? styles.cart : 'hidden'}>
      {activeCart && btnId === item.id ?
        <NavLink to='/cart' className={styles.cartBlockActive}><ButtonCart item={item} testClick={testClick} btnText={'В корзине'} img={() => null} /> </NavLink> :
        <ButtonCart item={item} testClick={testClick} btnText={'В корзину'} style={styles.cartBlock} img={() => cartInBtn()} />
      }
    </div>
  )
}

const ButtonCart = ({ item, testClick, btnText, style, img }: TypesButtonCart) => {
  return (
    <button
      className={style}
      disabled={item.salary ? false : true}
      onClick={testClick}
      data-id={item.id}
    >
      <span className={`mr-[0.7rem]`}>{img()}</span>
      {btnText}
    </button>
  )
}


