import React, { act, useEffect, useState } from "react"
import classNames from "classnames"
import { useStore } from '../../../../../store/store'

import { ButtonComponent } from "../../../../UI_kits/LinkAndButton"

import { dataShop } from "../../dataShop"
import { heartDefault, heartActive } from "./heart"

import styles from './styles/shopAnimals.module.scss'

const linkAnimals: string = 'https://disk.yandex.ru/d/K4E-ldU2sp1VbQ'
const _apiUrl = 'https://cloud-api.yandex.net/v1/disk/public/resources?public_key='
const urlAnimalsShop = `${_apiUrl}${linkAnimals}&limit=100`

const ShopAnimals = () => {
  const animals = useStore(state => state.animals)
  const getData = useStore(state => state.getData)

  const loading = useStore(state => state.loading)

  const [cartActive, setCartActive] = useState<string | null>('')
  const [limit, setLimit] = useState(9)

  const [saveActive, setSaveActive] = useState({})
  const [activeDiscount, setActiveDiscount] = useState(false)
  const [number, setNumber] = useState(0)

  useEffect(() => {
    getData('animals', urlAnimalsShop, 'offsetAnimals', 0, 'pageAnimals')
  }, [])

  const commonData = dataShop.map((item2) => {
    const item1 = animals.find((item1) => item1.name === item2.nameImg)
    return { ...item1, ...item2 }
  })

  const handleEnter = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    const dataTarget = e.currentTarget.getAttribute('data-name')
    setCartActive(dataTarget)
  }

  const handleClick = () => {
    setLimit(limit + 9)
    getData('animals', urlAnimalsShop, 'offsetAnimals', 0, 'pageAnimals')
  }

  const handleClickLike = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    const active = +e.currentTarget.getAttribute('data-id')!

    const changeActive = (boolean: boolean) => setSaveActive((prevArrTest) => ({ ...prevArrTest, [active]: boolean }))

    saveActive[active] ? changeActive(false) : changeActive(true)
  }

  const handleViewDiscoint = (e) => {
    let num = number
    const interval = setInterval(() => {
      if (e.target.checked) {
        num++
        if (num >= 20) clearInterval(interval)
      } else {
        num--
        if (num <= 0) clearInterval(interval)
      }
      setNumber(num)
    }, 25)

    e.target.checked ? setActiveDiscount(true) : setActiveDiscount(false)
  }

  return (
    <div>
      <div className="relative w-[20%] px-[15px] py-[5px] mx-auto mb-[30px] flex justify-center items-center border-[0.5px] border-[#868695] border-solid rounded-[20px]">
        <div className="flex items-center">
          <div className={`text-[#868695]`}>По подписке</div>
        </div>
        <div className={`ml-[10px]`}>
          <label
            className={`${styles.switch}`}
            onClick={handleViewDiscoint}>
            <input type="checkbox" />
            <span className={`${styles.slider} ${styles.round}`}></span>
          </label>
        </div>
        <div className={`${activeDiscount ? styles.numberAnimate : ''} absolute top-[20%] right-[10%] text-[14px] font-[600] text-[#005bff] ml-[10px]`}>{`${number}%`}</div>
      </div>
      <div className={styles.shopAnimalsContainer}>
        <div className={styles.shopAnimals}>
          {commonData.slice(0, limit).map(item => {
            return (
              <div
                onMouseLeave={() => setCartActive('')}
                onMouseEnter={handleEnter}
                className={classNames(cartActive === item.name ? styles.shopBlock : styles.shopBlockNotActive, item.salary > 0 ? 'opacity-100' : 'opacity-60 h-[100%]')}
                data-name={item.name}
                key={item.name}
              >
                <img className={styles.shopImg} src={item.sizes?.[0].url} alt={item.name} />
                <div className={styles.containerLike}>
                  <button
                    onClick={handleClickLike}
                    disabled={item.salary > 0 ? false : true}
                    className={styles.btn}
                    data-name={item.name}
                    data-id={item.id}>
                    {saveActive[item.id] ? heartActive() : heartDefault()}
                  </button>
                </div>

                <div className={item.salary > 0 ? `${styles.salary} flex items-center` : `${styles.salarySold} flex items-center`}>
                  {<span className={`${!activeDiscount ? `${styles.animateDiscount}` : 'animate-animateOpacityBefore'}`}>
                    {item.salary > 0 ? activeDiscount ? `${item.salary} ₽` : `${item.salary + item.salary * 0.2} ₽` : <div className={styles.sold}>Продано</div>}
                  </span>}
                  <div className={`${!activeDiscount ? `hidden ${styles.animateDiscount}` : 'block animate-animateOpacityBefore'} text-[#868695] text-[13px] ml-[6px] line-through`}>
                    {item.salary > 0 ? item.salary + item.salary * 0.2 : null}
                  </div>
                  <div className={`${!activeDiscount ? `hidden ${styles.animateDiscount}` : `block ${styles.animateDiscount}`} ml-[6px] text-[13px]`}>{item.salary > 0 ? `-20%` : null}</div>
                </div>
                <div className={styles.name}>{item.name}</div>
                {
                  cartActive === item.name ?
                    <div className={item.salary > 0 ? styles.cart : 'hidden'}>
                      <button
                        disabled={item.salary > 0 ? false : true}
                        className={styles.cartBlock}>В корзину</button>
                    </div> : ''
                }
              </div>
            )
          })}
        </div>
        <ButtonComponent
          disabled={limit > commonData.length ? true : false}
          mt='mt-3'
          h='h-16'
          fz='text-[16px]'
          textBtn="Загрузить еще"
          mx='mx-auto'
          turn='rotate-90'
          translateX='translate-x-0'
          func={handleClick}
        />
      </div>
    </div >
  )
}
export default ShopAnimals