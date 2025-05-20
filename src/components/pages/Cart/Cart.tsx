import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import classNames from "classnames";
import { useStore } from "../../../store/store";

import { PopupCart } from "../shop/popupCart/PopupCart"

import { likeCart, deleteCart } from "../../../assets/images/Images";
import emptyCart from '../../../assets/images/cartImage/emptyCart.jpg'
import styles from './styles/cart.module.scss'

const Cart = () => {
  const picturesCart = useStore(state => state.picturesCart)

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
        {picturesCart.length ?
          <>
            <CartForm picturesCart={picturesCart} getDeleteTest={getDeleteTest} setViewDeleteBtn={setViewDeleteBtn} />
            <CartOrder picturesCart={picturesCart} />
          </> : <CartEmpty />}
      </div>
    </>
  )
}

const CartForm = ({ picturesCart, getDeleteTest, setViewDeleteBtn }) => {
  const [salaryTest, setSalaryTest] = useState(0)
  const [minus, setMinus] = useState(0)
  const [amount, setAmount] = useState(1)

  const [btnId, setBtnId] = useState(0)
  const [activeLike, setActiveLike] = useState(false)

  console.log(salaryTest)

  const handleTestClick = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    const elem = +e.currentTarget.getAttribute('data-id')!
    getDeleteTest(elem)
    setViewDeleteBtn(elem)
  }

  const handleLikeClick = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    const activeBtn = +e.currentTarget.getAttribute('data-btn')!
    setBtnId(activeBtn)
    setActiveLike(!activeLike)
  }

  const handleIncreaseSalary = (e, pictureSalary) => {
    const dataSalary = +e.currentTarget.getAttribute('data-salary')!
    let num = 1;
    setAmount(amount + num)

    setSalaryTest(pictureSalary + pictureSalary * amount)
  }

  const handleReduceSalary = () => {

  }

  return (
    <div className={styles.cartFormContainer}>
      <h1 className={styles.cartFormHeader}>Корзина</h1>
      <h2 className={styles.cartFormAmountPicture}>
        {picturesCart.length} картин{picturesCart.length > 0 && picturesCart.length < 2 ? 'а' : picturesCart.length > 2 && picturesCart.length < 5 ? 'ы' : ''}
      </h2>
      {picturesCart.map((picture, i) => {
        return (
          <div key={i} className={styles.cartFormPictureContainer}>
            <div className={styles.cartFormPictureWrapperItems}>
              <div className={styles.cartFormWrapperPictureAndDescr}>
                <img src={picture.id ? picture?.sizes[0].url : null} className={styles.cartFormPictureImg} alt={picture.name} />
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
                <button className={styles.btnMinus}></button>
                <div className={styles.cartFormIncreaseAndDecreaseValue}>{amount}</div>
                <button
                  onClick={(e) => handleIncreaseSalary(e, picture.salary)}
                  className={styles.btnPlus}
                  data-salary={picture.salary}>
                </button>
              </div>

              <div className={styles.cartFormSalary}>{picture.salary} ₽</div>
            </div>
          </div>
        )
      })
      }
    </div >)
}

const CartOrder = ({ picturesCart }) => {
  const salary = picturesCart.map(item => item.salary).reduce((a, b) => a + b, 0)
  const salaryDiscount = salary - salary * 0.2
  return (
    <div className={styles.cartOrderContainer}>
      <h2 className={styles.cartOrderHeader}>Выбрать адрес доставки</h2>
      <div className={styles.cartOrderGoodsAndDiscount}>
        <div>Товары, {picturesCart.length} шт.</div>
        <div>{salary} ₽</div>
      </div>
      <div className={styles.cartOrderGoodsAndDiscount}>
        <div>Моя скидка</div>
        <div><span>−</span>{salary * 0.2} ₽</div>
      </div>
      <div className={styles.cartOrderTotal}>
        <div>Итого</div>
        <div>{salaryDiscount} ₽</div>
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
//   const pictureCart = useStore(state => state.pictureCart)
//   console.log(pictureCart)
//   return (
//     <div className={`flex justify-between pt-[24px] pb-[48px] bg-[#f6f6f9] px-[32px]`}>
//       <div className={`w-[65%] min-h-[300px] bg-white border-[1px] border-[#f2f2f2] p-[24px] rounded-[24px]`}>
//         <h1 className="flex h-[32px] text-[24px] font-[700] leading-[22px] mb-[8px]">Корзина</h1>
//         <h2 className="flex text-[14px] font-[400] leading-[20px] text-[#868695] mb-[28px]">1 картина</h2>
//         <div className="flex flex-row justify-between">
//           <div className="flex">
//             <img src={testImg} className='w-[124px] mr-[20px] rounded-[8px]' alt="" />
//             <div className="flex flex-col">
//               <h3 className="text-[16px] font-[500]">name picture</h3>
//               <div className="mt-[8px] text-[14px] text-[#868695]">Размер:</div>
//               <div className="mt-[8px] text-[14px] text-[#868695]">Материалы:</div>
//               <div className="flex mt-[12px]">
//                 <div className="flex rounded-[8px] w-[32px] h-[32px] bg-[#f6f6f9] justify-center items-center mr-[8px] cursor-pointer hover:bg-[#0030781a]">
//                   {likeCart()}
//                 </div>
//                 <div className="flex rounded-[8px] w-[32px] h-[32px] bg-[#f6f6f9] justify-center items-center cursor-pointer hover:bg-[#0030781a]">
//                   {deleteCart()}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex items-start">
//             <button className={`${styles.btnMinus} w-[32px] h-[32px] bg-[#f6f6f9] rounded-[8px]`}></button>
//             <div className="w-[49px] h-[32px] flex justify-center items-center">1</div>
//             <button className={`${styles.btnPlus} w-[32px] h-[32px] bg-[#f6f6f9] rounded-[8px]`}></button>
//           </div>
//           <div className="flex text-[rgb(255,68,68)] font-[700] text-[18px]">5000 ₽</div>
//         </div>
//       </div>

//       <div className="w-[30%] min-h-[200px] bg-white border-[1px] border-[#f2f2f2] p-[24px] rounded-[24px]">
//         <h2 className="text-[#a73afd] cursor-pointer text-[16px] font-[650] leading-[22px] mb-[24px] ">Выбрать адрес доставки</h2>
//         <div className="flex justify-between mt-[8px] text-[14px] leading-[20px] text-[#868695]">
//           <div>Товары, 1 шт.</div>
//           <div>1000 ₽</div>
//         </div>
//         <div className="flex justify-between mt-[8px] text-[14px] leading-[20px] text-[#868695]">
//           <div>Моя скидка</div>
//           <div><span>−</span>1000 ₽</div>
//         </div>
//         <div className="flex justify-between mt-[8px] text-[24px] font-[700] leading-[32px]">
//           <div>Итого</div>
//           <div>1000 ₽</div>
//         </div>
//         <button className="w-full h-[48px] mt-[16px] bg-[#a73afd] text-white text-[16px] font-[700] leading-[22px] rounded-[12px]">Заказать</button>
//       </div>

//       {/* <div className={`w-full flex flex-col items-center min-h-[300px] bg-white border-[1px] border-[#f2f2f2] p-[24px] rounded-[24px]`}>
//         <div className='w-[96px] mb-[26px]'>
//           <img src={emptyCart} alt="" />
//         </div>
//         <h2 className="text-[#242424] text-[16px] font-[700] leading-[22px]">В корзине пока пусто</h2>
//         <div className="text-[#868695] text-[16px] leading-[22px] mb-[32px]">Загляните в магазин — там картины, которые могут вам понравиться</div>
//         <button className="w-[203px] h-[48px] text-[16px] font-[600] leading-[22px] text-white bg-[#005BFF] rounded-[8px]">Перейти в магазин</button>
//       </div> */}
//     </div>
//   )
// }

export default Cart