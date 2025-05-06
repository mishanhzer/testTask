import React, { useEffect, useState } from "react"
import { useStore } from '../../../../../store/store'

import { urlAnimals } from "../../../../../utils/useTest"

import { dataShop } from "../../dataShop"
import styles from './styles/shopAnimals.module.scss'

const linkAnimals: string = 'https://disk.yandex.ru/d/K4E-ldU2sp1VbQ'
const _apiUrl = 'https://cloud-api.yandex.net/v1/disk/public/resources?public_key='
const urlAnimalsShop = `${_apiUrl}${linkAnimals}&limit=100`

const ShopAnimals = () => {
  const animals = useStore(state => state.animals)
  const getData = useStore(state => state.getData)

  const loading = useStore(state => state.loading)

  const [trashActive, setTrashActive] = useState<string | null>('')
  const [limit, setLimit] = useState(0)

  const commonData = dataShop.map((item2) => {
    const item1 = animals.find((item1) => item1.name === item2.nameImg)
    return { ...item1, ...item2 }
  })

  console.log(commonData)

  useEffect(() => {
    getData('animals', urlAnimalsShop, 'offsetAnimals', 0, 'pageAnimals')
  }, [])

  const handleEnter = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    const dataTarget = e.currentTarget.getAttribute('data-name')
    setTrashActive(dataTarget)
  }

  const handleClick = (e) => {
    setLimit(limit + 9)
    getData('animals', urlAnimals, 'offsetAnimals', limit, 'pageAnimals')
  }

  return (
    <div className={styles.shopAnimalsContainer}>
      <div className={styles.shopAnimals}>
        {commonData.slice(limit, limit + 9).map(item => {
          return (
            <div
              onMouseLeave={() => setTrashActive('')}
              onMouseEnter={handleEnter}
              className={trashActive === item.name ? styles.shopBlock : styles.shopBlockNotActive}
              data-name={item.name}
              key={item.name}
            >
              <img className={styles.shopImg} src={item.sizes?.[0].url} alt={item.name} />
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
      <button
        className={styles.loadMore}
        onClick={handleClick}>
        Load more
      </button>
    </div>
  )
}
export default ShopAnimals