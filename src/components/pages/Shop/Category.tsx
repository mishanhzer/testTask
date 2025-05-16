import React, { useState } from "react";
import classNames from "classnames";

import { useStore } from '../../../store/store'

import { heartActive, heartDefault } from "./categories/ShopAnimals/heart";

import { TypesSizes } from '../../../assets/images/Images'
import styles from './categories/ShopAnimals/styles/shopAnimals.module.scss'
import { NavLink } from "react-router";

interface TypesCommonData {
  name: string
  nameImg: string
  inStock: boolean
  salary: number
  description: string
  size: string
  materials: string
  active: boolean
  id: number
  file?: string
  path?: string
  preview?: string
  sizes?: TypesSizes[]
}
interface TypesSaveActive {
  [key: number]: boolean
}

interface CategoryProps {
  commonData: TypesCommonData[]
  limit: number
  cartActive: string | null
  setCartActive: React.Dispatch<React.SetStateAction<string | null>>
  handleEnter: (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => void
  handleClickLike: (e: React.MouseEvent<HTMLButtonElement>) => void
  saveActive: TypesSaveActive
  activeDiscount: boolean
}

export const Category = ({
  commonData,
  limit,
  cartActive,
  setCartActive,
  handleEnter,
  handleClickLike,
  saveActive,
  activeDiscount,
}: CategoryProps) => {
  return (
    <div className={styles.shopAnimals}>
      {commonData.slice(0, limit).map(item => {
        return (
          <div
            onMouseLeave={() => setCartActive('')}
            onMouseEnter={handleEnter}
            className={classNames(cartActive === item.name ? styles.shopBlock : styles.shopBlockNotActive, item.salary ? styles.pictureStockOpacity : styles.pictureSoldOutOpacity)}
            data-name={item.name}
            key={item.name}
          >
            <img className={styles.shopImg} src={item.sizes?.[0].url} alt={item.name} />
            <Like handleClickLike={handleClickLike} item={item} saveActive={saveActive} />
            <Salary item={item} activeDiscount={activeDiscount} />
            <div className={styles.name}>{item.name}</div>

            {/* {cartActive === item.name ? <NavLink to='/cart'><BlockCart item={item} /></NavLink> : null} */}
            {cartActive === item.name ? <BlockCart item={item} /> : null}
          </div>
        )
      })}
    </div>
  )
}

const Like = ({ handleClickLike, item, saveActive }) => {
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

const Salary = ({ item, activeDiscount }) => {
  return (
    <div className={activeDiscount ? `${styles.salary} ${styles.animateDiscount}` : `${styles.salary} animate-animateOpacityBefore`}>
      {<div>
        {item.salary ? activeDiscount ? `${item.salary} ₽` : `${item.salary + item.salary * 0.2} ₽` : <div className={styles.sold}>Продано</div>}
      </div>}
      <div className={`${!activeDiscount ? `hidden` : 'block'} ${styles.salaryWithOutSubscribe}`}>
        {item.salary ? item.salary + item.salary * 0.2 : null}
      </div>
      <div className={`${!activeDiscount ? `hidden` : `block`} ${styles.salaryViewDiscount}`}>{item.salary ? `-20%` : null}</div>
    </div>
  )
}

const BlockCart = ({ item }) => {
  const getPictureCart = useStore(state => state.getPictureCart)
  const getPicturesCart = useStore(state => state.getPicturesCart)
  const deleteDuplicatePicture = useStore(state => state.deleteDuplicatePicture)

  const [activeCart, setActiveCart] = useState(false)
  const [btnId, setBtnId] = useState(0)

  const testClick = (e) => {
    const activeBtn = +e.currentTarget.getAttribute('data-id')
    setBtnId(activeBtn)
    setActiveCart(!activeCart)
    if (e.currentTarget) {
      getPictureCart(item)
      getPicturesCart()
      deleteDuplicatePicture()
    }
  }

  return (
    <div className={item.salary ? styles.cart : 'hidden'}>
      {activeCart && btnId === item.id ?
        <ButtonCart item={item} testClick={testClick} btnText={'В корзине'} style={styles.cartBlockActive} /> :
        <NavLink to='/cart' className={styles.cartBlock}><ButtonCart item={item} testClick={testClick} btnText={'В корзину'} style={styles.cartBlock} /></NavLink>
      }
    </div>
  )
}

const ButtonCart = ({ item, testClick, btnText, style }) => {
  return (
    <button
      className={style}
      disabled={item.salary ? false : true}
      onClick={testClick}
      data-id={item.id}
    >{btnText}
    </button>
  )
}