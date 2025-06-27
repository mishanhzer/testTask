import React, { useState, useEffect, use } from "react";
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

  const setCartTest = useStore(state => state.setCartTest)

  const discount = useStore(state => state.discount)

  const setDiscount = useStore(state => state.setDiscount)

  const getDeleteTest = useStore(state => state.getDeleteTest)
  const deleteDuplicatePicture = useStore(state => state.deleteDuplicatePicture)

  const [viewDeleteBtn, setViewDeleteBtn] = useState(false)

  useEffect(() => {
    deleteDuplicatePicture()
  }, [])

  useEffect(() => {
    console.log('update')
  }, [discount])

  return (
    <>
      {viewDeleteBtn ? <PopupCart text={'Товар удален из корзины'} /> : null}
      <div className={styles.cartContainer}>
        {picturesCart.length ?
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

  const cartMain = useStore(state => state.cart)
  console.log(cartMain)

  const addProperty = useStore(state => state.addProperty)

  const [cartId, setCartId] = useState(0)

  const [btnId, setBtnId] = useState(0)
  const [activeLike, setActiveLike] = useState(false)


  useEffect(() => { // отвечает за увелечение количества товара в корзине
    setCartTest(cart)
  }, [cart])

  // useEffect(() => {
  //   setCart(cart)
  // }, [])

  useEffect(() => { // отвечает за удаление товара из корзины
    setCartTest(picturesCart)
  }, [picturesCart.length])


  const handleTestClick = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    const elem = +e.currentTarget.getAttribute('data-id')!
    getDeleteTest(elem)
    setViewDeleteBtn(elem)

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

    const selectedPicture: TypesCommonData = picturesCart.find(item => item.id === cartPictureId) // находим выбранный обьект в массиве
    if (selectedPicture && selectedPicture.salary !== undefined) { // если обьект нашелся
      const newSalary = operation(pictureSalary, selectedPicture.salary) // устанавливаем новую цену + старую цену (picture salary будет меняться при каждом клике), operation новый паттерн - чтобы использовать операторы в аргументах (при разных операторах при вызове функции)
      setOldSalary(selectedPicture.salary) // добавляем в стейт старую цену
      const newCart = cart.map((item) => { // проходимся по массиву и добавляем необходимые новые свойства
        if (item.id === cartPictureId) { // если элементы совпадают то добавим свойства
          return { ...item, amount: item.amount + value, salary: newSalary };
        }
        return item; // если нет, то верни обычный неизмененный обьект
      });
      setCart(newCart); // добавляем в стейт новый массив с обьектами с новыми свойствами
    }
  }

  return (
    <div className={styles.cartFormContainer}>
      <h1 className={styles.cartFormHeader}>Корзина</h1>
      <h2 className={styles.cartFormAmountPicture}>
        {picturesCart.length} картин{picturesCart.length > 0 && picturesCart.length < 2 ? 'а' : picturesCart.length > 2 && picturesCart.length < 5 ? 'ы' : ''}
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

// const Cart = () => {
//   const picturesCart = useStore(state => state.picturesCart)

//   const getDeleteTest = useStore(state => state.getDeleteTest)
//   const deleteDuplicatePicture = useStore(state => state.deleteDuplicatePicture)

//   const [viewDeleteBtn, setViewDeleteBtn] = useState(false)

//   useEffect(() => {
//     deleteDuplicatePicture()
//   }, [])

//   return (
//     <>
//       {viewDeleteBtn ? <PopupCart text={'Товар удален из корзины'} /> : null}
//       <div className={styles.cartContainer}>
//         {picturesCart.length ?
//           <>
//             <CartForm picturesCart={picturesCart} getDeleteTest={getDeleteTest} setViewDeleteBtn={setViewDeleteBtn} />
//             <CartOrder picturesCart={picturesCart} />
//           </> : <CartEmpty />}
//       </div>
//     </>
//   )
// }

// const CartForm = ({ picturesCart, getDeleteTest, setViewDeleteBtn }) => {
//   const [salaryTest, setSalaryTest] = useState(0)
//   const [amount, setAmount] = useState(1)
//   const [cartId, setCartId] = useState(0)
//   const [testObj, setTestObj] = useState({})
//   console.log(testObj)

//   const [btnId, setBtnId] = useState(0)
//   const [activeLike, setActiveLike] = useState(false)

//   const handleTestClick = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
//     const elem = +e.currentTarget.getAttribute('data-id')!
//     getDeleteTest(elem)
//     setViewDeleteBtn(elem)
//   }

//   const handleLikeClick = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
//     const activeBtn = +e.currentTarget.getAttribute('data-btn')!
//     setBtnId(activeBtn)
//     setActiveLike(!activeLike)
//   }

//   const handleIncreaseSalary = (e, pictureSalary) => {
//     const cartPictureId = +e.currentTarget.getAttribute('data-id')!

//     setCartId(cartPictureId)

//     let num = 1;

//     setAmount(amount + num)

//     setSalaryTest(pictureSalary + pictureSalary * amount)

//     const newData = [...picturesCart]

//     setTestObj(newData.map(item => ({
//       ...item,
//       amount: item.id === cartPictureId ? amount + num : amount
//     }))
//     )
//   }

//   const handleDecreaseSalary = (e, pictureSalary) => {
//     if (amount > 1) {
//       let num = 1
//       setAmount(amount - num)
//       setSalaryTest(pictureSalary * amount - pictureSalary)
//     }
//   }

//   return (
//     <div className={styles.cartFormContainer}>
//       <h1 className={styles.cartFormHeader}>Корзина</h1>
//       <h2 className={styles.cartFormAmountPicture}>
//         {picturesCart.length} картин{picturesCart.length > 0 && picturesCart.length < 2 ? 'а' : picturesCart.length > 2 && picturesCart.length < 5 ? 'ы' : ''}
//       </h2>
//       {picturesCart.map((picture, i) => {
//         return (
//           <div key={i} className={styles.cartFormPictureContainer}>
//             <div className={styles.cartFormPictureWrapperItems}>
//               <div className={styles.cartFormWrapperPictureAndDescr}>
//                 <img src={picture.id ? picture?.sizes[0].url : null} className={styles.cartFormPictureImg} alt={picture.name} />
//                 <div className={styles.cartFormPictureDescr}>
//                   <h3 className={styles.cartFormPictureName}>{picture.name}</h3>
//                   <div className={styles.cartFormPictureSizeAndMaterials}>Размер: {picture.size}</div>
//                   <div className={styles.cartFormPictureSizeAndMaterials}>Материалы: {picture.materials}</div>
//                   <div className={styles.cartFormPictureLikeAndDeleteContainer}>
//                     {activeLike && picture.id === btnId ?
//                       <button onClick={handleLikeClick} data-btn={picture.id} className={classNames(styles.cartFormPictureLikeAndDelete, styles.cartFormPictureLikeActive)}>
//                         {likeCart()}
//                         <div className={styles.cartFormPictureLikeActiveBlock}></div>
//                       </button> :
//                       <button onClick={handleLikeClick} data-btn={picture.id} className={`${styles.cartFormPictureLikeAndDelete}`}>
//                         {likeCart()}
//                       </button>}
//                     <button
//                       onClick={handleTestClick}
//                       data-id={picture.id}
//                       className={styles.cartFormPictureLikeAndDelete}>
//                       {deleteCart()}
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <div className={styles.cartFormIncreaseAndDecrease}>
//                 {amount > 1 ?
//                   <CartFormButtonIncDec func={(e) => handleDecreaseSalary(e, picture.salary)} disabled={amount > 1 && cartId === picture.id ? false : true} style={styles.btnMinus} data={picture.id} /> :
//                   <CartFormButtonIncDec func={(e) => handleDecreaseSalary(e, picture.salary)} disabled={amount === 1 ? true : false} style={styles.btnMinus} data={picture.id} />
//                 }
//                 <div className={styles.cartFormIncreaseAndDecreaseValue}>{picture.id === cartId ? amount : 1}</div>
//                 <CartFormButtonIncDec func={(e) => handleIncreaseSalary(e, picture.salary)} disabled={amount > 1 && cartId === picture.id ? false : false} style={styles.btnPlus} data={picture.id} />
//               </div>

//               <div className={styles.cartFormSalary}>{picture.id === cartId ? salaryTest : picture.salary} ₽</div>
//             </div>
//           </div>
//         )
//       })
//       }
//     </div >)
// }

// const CartFormButtonIncDec = ({ func, disabled, style, data }) => {
//   return (
//     <button
//       onClick={func}
//       disabled={disabled}
//       className={style}
//       data-id={data}>
//     </button>
//   )
// }

// const CartOrder = ({ picturesCart }) => {
//   const salary = picturesCart.map(item => item.salary).reduce((a, b) => a + b, 0)
//   const salaryDiscount = salary - salary * 0.2
//   return (
//     <div className={styles.cartOrderContainer}>
//       <h2 className={styles.cartOrderHeader}>Выбрать адрес доставки</h2>
//       <div className={styles.cartOrderGoodsAndDiscount}>
//         <div>Товары, {picturesCart.length} шт.</div>
//         <div>{salary} ₽</div>
//       </div>
//       <div className={styles.cartOrderGoodsAndDiscount}>
//         <div>Моя скидка</div>
//         <div><span>−</span>{salary * 0.2} ₽</div>
//       </div>
//       <div className={styles.cartOrderTotal}>
//         <div>Итого</div>
//         <div>{salaryDiscount} ₽</div>
//       </div>
//       <button className={styles.cartOrderBtn}>Заказать</button>
//     </div>
//   )
// }

// const CartEmpty = () => {
//   return (
//     <div className={styles.cartEmptyContainer}>
//       <div className={styles.cartEmptyImg}>
//         <img src={emptyCart} alt="" />
//       </div>
//       <h2 className={styles.cartEmptyHeader}>В корзине пока пусто</h2>
//       <div className={styles.cartEmptyDescr}>Загляните в магазин — там картины, которые могут вам понравиться</div>
//       <NavLink
//         to="/shop"
//         className={styles.cartEmptyBtn}>Перейти в магазин
//       </NavLink>
//     </div>
//   )
// }

export default Cart