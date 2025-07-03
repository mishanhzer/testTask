import React, { act, useCallback, useEffect, useState, useMemo } from "react";
import { NavLink } from "react-router";
import { WhatsApp } from "../../../whatsapp/WhatsApp";

import classNames from "classnames";


import { useStore } from '../../../../store/store'

import { heartActive, heartDefault } from "./ShopAnimals/heart";
import { cartInBtn } from "../../../../assets/images/Images";

import { TypesCommonData, TypesSaveActive, CategoryProps, TypesSalary, TypesLike, TypesButtonCart } from "../TypesShops"

import styles from './ShopAnimals/styles/shopAnimals.module.scss'
import { id } from "../../../../utils/useTest";

// Продолжить пытаться сохранить значения цены картин после обновления (в компоненте Subscribe что то получается близко к этому)

export const Category = ({
  commonData,
  limit,
  handleClickLike,
  saveActive,
}: CategoryProps) => {
  const testData = useStore(state => state.testData)
  console.log(testData)
  const cart = useStore(state => state.cart)
  const discount = useStore(state => state.discount)

  return (
    <div className={styles.shopAnimals}>
      {testData.slice(0, limit).map(item => {
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
              discount={discount} />
            <div className={styles.name}>{item.name}</div>

            <BlockCart
              item={item} />

            <WhatsApp />
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

const Salary = ({ item, discount }: TypesSalary) => {
  const salarWithoutDiscount = item.salary + item.salary * 0.2
  return (
    <div className={discount ? `${styles.salary} ${styles.animateDiscount}` : `${styles.salary} animate-animateOpacityBefore`}>
      {<div>
        {item.salary ? !discount ? `${item.salary} ₽` : `${salarWithoutDiscount} ₽` : <div className={styles.sold}>Продано</div>}
      </div>}
      <div className={`${discount ? `hidden` : 'block'} ${styles.salaryWithOutSubscribe}`}>
        {item.salary ? salarWithoutDiscount : null}
      </div>
      <div className={`${discount ? `hidden` : `block`} ${styles.salaryViewDiscount}`}>{item.salary && !discount ? `-20%` : null}</div>
    </div>
  )
}

const BlockCart = ({ item }: { item: TypesCommonData }) => {
  const getPictureCart = useStore(state => state.getPictureCart)
  const getPicturesCart = useStore(state => state.getPicturesCart)
  const deleteDuplicatePicture = useStore(state => state.deleteDuplicatePicture)

  const testData = useStore(state => state.testData)

  const addInCart = useStore(state => state.addInCart)
  const setAddInCart = useStore(state => state.setAddInCart)

  const isAddedToCart = useStore(state => state.isAddedToCart)
  console.log(isAddedToCart)

  const addProperty = useStore(state => state.addProperty)

  const [saveActive, setSaveActive] = useState(false)

  const cart = useStore(state => state.cart)

  console.log(cart)
  console.log(testData)
  const activeCartItems = testData.filter(item => cart.find((item2) => item2.name === item.name))
  console.log(activeCartItems)

  const notActiveCartsItems = testData.filter(item => !cart.find((item2) => item2.name === item.name))
  console.log(notActiveCartsItems)

  const [activeCart, setActiveCart] = useState(false)
  const [btnId, setBtnId] = useState(0)

  const picturesCart = useStore(state => state.picturesCart)
  const setCartTest = useStore(state => state.setCartTest)

  useEffect(() => {
    setCartTest(picturesCart)
    // setCartTest(cart)
  }, [picturesCart])

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


    const changeActive = (boolean: boolean) => {
      addProperty(activeBtn, boolean);
    };

    changeActive(true)
  }

  return (
    <div>
      {activeCartItems.map(item => (
        <ButtonCart
          item={item}
          testClick={testClick}
          btnText={'В корзине'}
          style={styles.cartBlockActive}
          img={() => null}
          key={item.name} />
      ))}
      {notActiveCartsItems.map(item => (
        <ButtonCart
          item={item}
          testClick={testClick}
          btnText={'В корзину'}
          style={styles.cartBlock}
          img={() => cartInBtn()}
          key={item.name} />
      ))}
    </div>
    // <div className={item.salary ? styles.cart : 'hidden'}>
    //   {isAddedToCart[item.id] === true ?
    //     <NavLink to='/cart' className={styles.cartBlockActive}>
    //       <ButtonCart item={item} testClick={testClick} btnText={'В корзине'} img={() => null} />
    //     </NavLink> :
    //     <ButtonCart item={item} testClick={testClick} btnText={'В корзину'} style={styles.cartBlock} img={() => cartInBtn()} />
    //   }
    // </div>
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


