import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import classNames from "classnames";

import { useStore } from "../../../store/store";

import { PopupCart } from "../shop/popupCart/PopupCart"

import { TypesCommonData } from "../shop/TypesShops";

import { likeCart, deleteCart } from "../../../assets/images/Images";
import emptyCart from '../../../assets/images/cartImage/emptyCart.jpg'
import styles from './styles/cart.module.scss'

const Cart = () => {
  const picturesCart = useStore(state => state.picturesCart)
  const cart = useStore(state => state.cart)

  console.log(picturesCart)
  console.log(cart)

  const discount = useStore(state => state.discount)

  const getDeleteTest = useStore(state => state.getDeleteTest)
  const deleteDuplicatePicture = useStore(state => state.deleteDuplicatePicture)

  const [viewDeleteBtn, setViewDeleteBtn] = useState(false)

  useEffect(() => {
    deleteDuplicatePicture()
  }, [])

  return (
    <>
      {viewDeleteBtn ? <PopupCart text={'Товар удален из корзины'} /> : null}
      <div className={styles.cartContainer}>
        {cart.length ?
          <>
            <CartForm picturesCart={picturesCart} getDeleteTest={getDeleteTest} setViewDeleteBtn={setViewDeleteBtn} discount={discount} />
            <CartOrder picturesCart={cart} discount={discount} />
          </> : <CartEmpty />}
      </div>
    </>
  )
}

const CartForm = ({ picturesCart, getDeleteTest, setViewDeleteBtn, discount }) => {
  const [oldSalary, setOldSalary] = useState(0)

  const [cart, setCart] = useState(picturesCart);
  const setCartTest = useStore(state => state.setCartTest)

  const getDeleteItemCart = useStore(state => state.getDeleteItemCart)

  const cartMain = useStore(state => state.cart)

  const addProperty = useStore(state => state.addProperty)

  const [cartId, setCartId] = useState(0)

  const [btnId, setBtnId] = useState(0)
  const [activeLike, setActiveLike] = useState(false)

  useEffect(() => { // отвечает за увеличение количества товара в корзине
    setCartTest(cart)
  }, [cart])

  useEffect(() => { // запоминает количество добавленных товаров
    setCartTest(cartMain)
  }, [cartMain])

  useEffect(() => { // отвечает за удаление товара из корзины
    setCart(cartMain)
  }, [picturesCart.length])

  const handleTestClick = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    const elem = +e.currentTarget.getAttribute('data-id')!
    getDeleteTest(elem)
    setViewDeleteBtn(elem)

    getDeleteItemCart(elem)

    const changeActive = (boolean: boolean) => {
      addProperty(elem, boolean);
    };

    changeActive(false)
  }

  const handleLikeClick = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    const activeBtn = +e.currentTarget.getAttribute('data-btn')!
    setBtnId(activeBtn)
    setActiveLike(!activeLike)
  }

  const handleIncreaseSalary = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>, pictureSalary: number, value, operation) => {
    const cartPictureId = +e.currentTarget.getAttribute('data-id')!
    setCartId(cartPictureId)

    const selectedPicture: TypesCommonData = picturesCart.find(item => item.id === cartPictureId)
    if (selectedPicture && selectedPicture.salary !== undefined) {
      const newSalary = operation(pictureSalary, selectedPicture.salary)
      setOldSalary(selectedPicture.salary)
      const newCart = cartMain.map((item) => {
        if (item.id === cartPictureId) {
          return { ...item, amount: item.amount + value, salary: newSalary };
        }
        return item;
      });
      setCart(newCart);
    }
  }

  return (
    <div className={styles.cartFormContainer}>
      <h1 className={styles.cartFormHeader}>Корзина</h1>
      <h2 className={styles.cartFormAmountPicture}>
        {/* {cart.length} картин{cart.length > 0 && cart.length < 2 ? 'а' : cart.length >= 2 && cart.length < 5 ? 'ы' : ''} */}

        {cart.length} картин{cart.length % 10 === 1 && cart.length % 100 !== 11 ? 'а' : cart.length % 10 >= 2 && cart.length % 10 <= 4 && (cart.length % 100 < 10 || cart.length % 100 >= 20) ? 'ы' : ''}
      </h2>
      {cartMain.map((picture, i) => {
        return (
          <div key={i} className={styles.cartFormPictureContainer}>
            <div className={styles.cartFormPictureWrapperItems}>
              <div className={styles.cartFormWrapperPictureAndDescr}>
                <img src={picture.id ? picture?.sizes?.[0].url : null} className={styles.cartFormPictureImg} alt={picture.name} />
                <div className={styles.cartFormPictureDescr}>
                  <h3 className={styles.cartFormPictureName}>{picture.name}</h3>
                  <div className={styles.cartFormPictureSizeAndMaterials}>Размер: {picture.size}</div>
                  <div className={styles.cartFormPictureSizeAndMaterials}>Материалы: {picture.materials}</div>
                  <div className={styles.cartFormPictureLikeAndDeleteContainer}>
                    {activeLike && picture.id === btnId ?
                      <button onClick={handleLikeClick} data-btn={picture.id} className={classNames(styles.cartFormPictureLikeAndDelete, styles.cartFormPictureLikeActive)}>
                        {likeCart()}
                        <div className={styles.cartFormPictureLikeActiveBlock}></div>
                      </button> :
                      <button onClick={handleLikeClick} data-btn={picture.id} className={`${styles.cartFormPictureLikeAndDelete}`}>
                        {likeCart()}
                      </button>}
                    <button
                      onClick={handleTestClick}
                      data-id={picture.id}
                      className={styles.cartFormPictureLikeAndDelete}>
                      {deleteCart()}
                    </button>
                  </div>
                </div>
              </div>

              <div className={styles.cartFormIncreaseAndDecrease}>
                {picture.amount > 1 ?
                  <CartFormButtonIncDec
                    func={(e) => handleIncreaseSalary(e, picture.salary, -1, (a, b) => a - b)}
                    disabled={picture.amount > 1 ? false : true}
                    style={styles.btnMinus}
                    data={picture.id} /> :
                  <CartFormButtonIncDec
                    func={(e) => handleIncreaseSalary(e, picture.salary, -1, (a, b) => a - b)}
                    disabled={picture.amount === 1 ? true : false}
                    style={styles.btnMinus}
                    data={picture.id} />
                }
                <div className={styles.cartFormIncreaseAndDecreaseValue}>{picture.amount}</div>
                <CartFormButtonIncDec func={(e) => handleIncreaseSalary(e, picture.salary, 1, (a, b) => a + b)} disabled={picture.amount > 1 && cartId === picture.id ? false : false} style={styles.btnPlus} data={picture.id} />
              </div>

              <div className={styles.cartFormSalary}>{!discount ? picture.salary : picture.salary + picture.salary * 0.2} ₽</div>
            </div>
          </div>
        )
      })
      }
    </div >)
}

const CartFormButtonIncDec = ({ func, disabled, style, data }) => {
  return (
    <button
      onClick={func}
      disabled={disabled}
      className={style}
      data-id={data}>
    </button>
  )
}

const CartOrder = ({ picturesCart, discount }) => {
  const amount = picturesCart.map(item => item.amount).reduce((a, b) => a + b, 0)
  const salary = picturesCart.map(item => item.salary).reduce((a, b) => a + b, 0)
  const salaryDiscount = salary
  return (
    <div className={styles.cartOrderContainer}>
      <h2 className={styles.cartOrderHeader}>Выбрать адрес доставки</h2>
      <div className={styles.cartOrderGoodsAndDiscount}>
        <div>Товары, {amount} шт.</div>
        <div>{!discount ? salaryDiscount : salary + salary * 0.2} ₽</div>
      </div>
      {!discount ? <div className={styles.cartOrderGoodsAndDiscount}>
        <div>Моя скидка</div>
        <div><span>−</span>{salary * 0.2} ₽</div>
      </div> : null}
      <div className={styles.cartOrderTotal}>
        <div>Итого</div>
        <div>{!discount ? salaryDiscount : salary + salary * 0.2} ₽</div>
      </div>
      <button className={styles.cartOrderBtn}>Заказать</button>
    </div>
  )
}

const CartEmpty = () => {
  return (
    <div className={styles.cartEmptyContainer}>
      <div className={styles.cartEmptyImg}>
        <img src={emptyCart} alt="" />
      </div>
      <h2 className={styles.cartEmptyHeader}>В корзине пока пусто</h2>
      <div className={styles.cartEmptyDescr}>Загляните в магазин — там картины, которые могут вам понравиться</div>
      <NavLink
        to="/shop"
        className={styles.cartEmptyBtn}>Перейти в магазин
      </NavLink>
    </div>
  )
}

export default Cart