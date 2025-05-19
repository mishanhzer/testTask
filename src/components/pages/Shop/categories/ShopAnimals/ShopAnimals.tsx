import React, { useEffect, useState } from "react"
import { useStore } from '../../../../../store/store'

import { ButtonComponent } from "../../../../UI_kits/LinkAndButton"
import { SubscribePanel } from '../../Subscribe'
import { Category } from "../../Category"

import { PopupCart } from "../../PopupCart"

import { dataShop } from "../../dataShop"

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

  const addInCart = useStore(state => state.addInCart)

  const [saveActive, setSaveActive] = useState({})
  const [activeDiscount, setActiveDiscount] = useState(false)

  useEffect(() => {
    getData('animals', urlAnimalsShop, 'offsetAnimals', 0, 'pageAnimals')
  }, [])

  const commonData = dataShop.map((item2) => {
    const item1 = animals.find((item1) => item1.name === item2.nameImg)
    return { ...item1, ...item2 }
  })

  // const handleEnter = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
  //   const dataTarget = e.currentTarget.getAttribute('data-name')
  //   setCartActive(dataTarget)
  // }

  const handleClick = () => {
    setLimit(limit + 9)
    getData('animals', urlAnimalsShop, 'offsetAnimals', 0, 'pageAnimals')
  }

  const handleClickLike = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    const active = +e.currentTarget.getAttribute('data-id')!

    const changeActive = (boolean: boolean) => setSaveActive((prevArrTest) => ({ ...prevArrTest, [active]: boolean }))

    saveActive[active] ? changeActive(false) : changeActive(true)
  }

  return (
    <div>
      {addInCart ? <PopupCart /> : null}
      {/* <PopupCart /> */}
      <SubscribePanel activeDiscount={activeDiscount} setActiveDiscount={setActiveDiscount} />
      <div className={styles.shopAnimalsContainer}>
        <Category
          commonData={commonData}
          limit={limit}
          cartActive={cartActive}
          setCartActive={setCartActive}
          // handleEnter={handleEnter}
          handleClickLike={handleClickLike}
          saveActive={saveActive}
          activeDiscount={activeDiscount} />
        <ButtonComponent
          disabled={limit > commonData.length ? true : false}
          mt='mt-3'
          h='h-16'
          fz='text-[16px]'
          textBtn="Загрузить еще"
          mx='mx-auto'
          turn='rotate-90'
          translateX='translate-x-0'
          func={handleClick} />
      </div>
    </div >
  )
}
export default ShopAnimals