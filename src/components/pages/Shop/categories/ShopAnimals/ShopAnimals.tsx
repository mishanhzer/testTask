import React, { act, useEffect, useState } from "react"
import { useStore } from '../../../../../store/store'

import { ButtonComponent } from "../../../../UI_kits/LinkAndButton"

import { dataShop } from "../../dataShop"
// import heartBlack from '../../../../../assets/logo/logoShop/heartBlack.svg'
// import heartPink from '../../../../../assets/logo/logoShop/heartPink.svg'
// import heartActive from '../../../../../assets/logo/logoShop/heartActive.svg'
import { heartDefault, heartActive } from "./heart"

import styles from './styles/shopAnimals.module.scss'

const linkAnimals: string = 'https://disk.yandex.ru/d/K4E-ldU2sp1VbQ'
const _apiUrl = 'https://cloud-api.yandex.net/v1/disk/public/resources?public_key='
const urlAnimalsShop = `${_apiUrl}${linkAnimals}&limit=100`

const ShopAnimals = () => {
  const animals = useStore(state => state.animals)
  const getData = useStore(state => state.getData)

  const loading = useStore(state => state.loading)

  const [trashActive, setTrashActive] = useState<string | null>('')
  const [limit, setLimit] = useState(9)
  const [activeTest, setActiveTest] = useState()
  const [activeClick, setActiveClick] = useState(-1)

  useEffect(() => {
    getData('animals', urlAnimalsShop, 'offsetAnimals', 0, 'pageAnimals')
  }, [])

  const commonData = dataShop.map((item2) => {
    const item1 = animals.find((item1) => item1.name === item2.nameImg)
    return { ...item1, ...item2 }
  })

  const handleEnter = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    const dataTarget = e.currentTarget.getAttribute('data-name')
    setTrashActive(dataTarget)
  }

  const handleClick = () => {
    setLimit(limit + 9)
    getData('animals', urlAnimalsShop, 'offsetAnimals', 0, 'pageAnimals')
  }

  const handleClickFavourite = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    const active = +e.currentTarget.getAttribute('data-id')

    setActiveClick(active)
    if (activeClick === active) {
      setActiveClick(-1)
    }
  }
  console.log(commonData)
  return (
    <div className={styles.shopAnimalsContainer}>
      <div className={styles.shopAnimals}>
        {commonData.slice(0, limit).map(item => {
          return (
            <div
              onMouseLeave={() => setTrashActive('')}
              onMouseEnter={handleEnter}
              className={trashActive === item.name ? styles.shopBlock : styles.shopBlockNotActive}
              data-name={item.name}
              key={item.name}
            >
              <img className={styles.shopImg} src={item.sizes?.[0].url} alt={item.name} />

              <div className={styles.container}>
                <button
                  onClick={handleClickFavourite}
                  className={styles.btn}
                  data-name={item.name}
                  data-id={item.id}>
                  {activeClick === item.id ? heartActive() : heartDefault()}

                </button>
              </div>


              <div className={`${styles.salary} flex items-center`}>
                {<span className={`mr-[8px]`}>{item.salary}</span>}
                <span>₽</span>
                <div className={`text-[#868695] text-[14px] ml-[8px]`}>{item.salary - item.salary * 0.2}</div>
              </div>
              <div className={styles.name}>{item.name}</div>
              {trashActive === item.name ?
                <div className={styles.trash}>
                  <button className={styles.trashBlock}>В корзину</button>
                </div> : ''}
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
  )
}
export default ShopAnimals