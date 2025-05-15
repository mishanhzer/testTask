import React, { useEffect } from "react";
import { useStore } from "../../../store/store";

import testImg from '../Cart/testImg.webp'

import { likeCart, deleteCart } from './imagesCart'
import emptyCart from './emptyCart.jpg'
import styles from './styles/cart.module.scss'
import { NavLink } from "react-router";


const Cart = () => {
  const pictureCart = useStore(state => state.pictureCart)
  const picturesCart = useStore(state => state.picturesCart)

  const getDeleteTest = useStore(state => state.getDeleteTest)
  const getAmountPictures = useStore(state => state.getAmountPictures)
  const cleanCart = useStore(state => state.cleanCart)
  const deleteDuplicatePicture = useStore(state => state.deleteDuplicatePicture)

  const cartItems = [...cleanCart].reverse()

  useEffect(() => {
    deleteDuplicatePicture()
    getAmountPictures(cleanCart.length)
  }, [])


  return (
    <div className={`flex justify-between pt-[24px] pb-[48px] bg-[#f6f6f9] px-[32px]`}>
      {cleanCart.length ?
        <>
          <CartForm cartItems={cartItems} getDeleteTest={getDeleteTest} />
          <CartOrder cleanCart={cleanCart} />
        </> : <CartEmpty />}
    </div>
  )
}

const CartForm = ({ cartItems, getDeleteTest }) => {
  const handleTestClick = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    const elem = +e.currentTarget.getAttribute('data-id')!
    getDeleteTest(elem)
  }

  return (
    <div className={`w-[65%] min-h-[300px] bg-white border-[1px] border-[#f2f2f2] p-[24px] rounded-[24px]`}>
      <h1 className="flex h-[32px] text-[24px] font-[700] leading-[22px] mb-[8px]">Корзина</h1>
      <h2 className="flex text-[14px] font-[400] leading-[20px] text-[#868695] mb-[28px]">
        {cartItems.length} картин{cartItems.length > 1 && cartItems.length < 5 ? 'ы' : cartItems.length > 4 ? 'а' : ''}
      </h2>
      {cartItems.map((picture, i) => {
        return (
          <div key={i} className="mb-[30px] last:mb-0 relative">
            <div className="flex flex-row justify-between">
              <div className="flex">
                <img src={picture.id ? picture?.sizes[0].url : null} className='w-[124px] mr-[20px] rounded-[8px] object-cover' alt="" />
                <div className="flex flex-col">
                  <h3 className="text-[16px] font-[500]">{picture.name}</h3>
                  <div className="mt-[8px] text-[14px] text-[#868695]">Размер: {picture.size}</div>
                  <div className="mt-[8px] text-[14px] text-[#868695]">Материалы: {picture.materials}</div>
                  <div className="flex mt-[12px]">
                    <button className="flex rounded-[8px] w-[32px] h-[32px] bg-[#f6f6f9] justify-center items-center mr-[8px] cursor-pointer hover:bg-[#0030781a]">
                      {likeCart()}
                    </button>
                    <button
                      onClick={handleTestClick}
                      data-id={picture.id}
                      className="flex rounded-[8px] w-[32px] h-[32px] bg-[#f6f6f9] justify-center items-center cursor-pointer hover:bg-[#0030781a]">
                      {deleteCart()}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-start absolute right-[20%] top-[0%]">
                <button className={`${styles.btnMinus} w-[32px] h-[32px] bg-[#f6f6f9] rounded-[8px]`}></button>
                <div className="w-[49px] h-[32px] flex justify-center items-center">1</div>
                <button className={`${styles.btnPlus} w-[32px] h-[32px] bg-[#f6f6f9] rounded-[8px]`}></button>
              </div>

              <div className="flex text-[rgb(255,68,68)] font-[700] text-[18px]">{picture.salary} ₽</div>
            </div>
          </div>
        )
      })
      }
    </div>)
}

const CartOrder = ({ cleanCart }) => {
  const salary = cleanCart.map(item => item.salary).reduce((a, b) => a + b, 0)
  const salaryDiscount = salary - salary * 0.2
  return (
    <div className="w-[30%] h-[250px] bg-white border-[1px] border-[#f2f2f2] p-[24px] rounded-[24px]">
      <h2 className="text-[#005BFF] cursor-pointer text-[16px] font-[650] leading-[22px] mb-[24px] ">Выбрать адрес доставки</h2>
      <div className="flex justify-between mt-[8px] text-[14px] leading-[20px] text-[#868695]">
        <div>Товары, {cleanCart.length} шт.</div>
        <div>{salary} ₽</div>
      </div>
      <div className="flex justify-between mt-[8px] text-[14px] leading-[20px] text-[#868695]">
        <div>Моя скидка</div>
        <div><span>−</span>{salary * 0.2} ₽</div>
      </div>
      <div className="flex justify-between mt-[8px] text-[24px] font-[700] leading-[32px]">
        <div>Итого</div>
        <div>{salaryDiscount} ₽</div>
      </div>
      <button className="w-full h-[48px] mt-[16px] bg-[#005BFF] text-white text-[16px] font-[700] leading-[22px] rounded-[12px]">Заказать</button>
    </div>
  )
}

const CartEmpty = () => {
  return (
    <div className={`w-full flex flex-col items-center min-h-[300px] bg-white border-[1px] border-[#f2f2f2] p-[24px] rounded-[24px]`}>
      <div className='w-[96px] mb-[26px]'>
        <img src={emptyCart} alt="" />
      </div>
      <h2 className="text-[#242424] text-[16px] font-[700] leading-[22px]">В корзине пока пусто</h2>
      <div className="text-[#868695] text-[16px] leading-[22px] mb-[32px]">Загляните в магазин — там картины, которые могут вам понравиться</div>
      <NavLink
        to="/shop"
        className="w-[203px] flex justify-center items-center h-[48px] text-[16px] font-[600] leading-[22px] text-white bg-[#005BFF] rounded-[8px]">Перейти в магазин
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