import React, { useEffect, useState } from "react"
import { useStore } from '../../../../../store/store'

import { urlAnimals } from "../../../../../utils/useTest"

import { dataShop } from "../../dataShop"
import styles from './styles/shopAnimals.module.scss'

const ShopAnimals = () => {
  const works = useStore(state => state.works)
  const animals = useStore(state => state.animals)
  const getData = useStore(state => state.getData)

  console.log(animals)
  console.log(dataShop)

  const loading = useStore(state => state.loading)

  const [trashActive, setTrashActive] = useState<string | null>('')

  useEffect(() => {
    getData('animals', urlAnimals, 'offsetAnimals', 0, 'pageAnimals')
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    const dataTarget = e.currentTarget.getAttribute('data-name')
    setTrashActive(dataTarget)
  }

  return (
    <div className={styles.shopAnimalsContainer}>
      <div className={styles.shopAnimals}>
        {animals.map(item => {
          return (
            <div
              onMouseLeave={() => setTrashActive('')}
              onMouseEnter={handleClick}
              className={trashActive === item.name ? styles.shopBlock : styles.shopBlockNotActive}
              data-name={item.name}
              key={item.name}
            >
              <img className={styles.shopImg} src={item.sizes[0].url} alt={item.name} />
              <div className={styles.salary}>
                {dataShop.map(salary => {
                  return (
                    salary.nameImg === item.name ?
                      <span>{salary.salary} </span> : ''
                  )
                })}
                <span>₽</span>
              </div>
              <div className={styles.name}>
                {dataShop.map(name => {
                  return (
                    name.nameImg === item.name ?
                      <span>{name.name}</span> : ''
                  )
                })}
              </div>
              {trashActive === item.name ?
                <div className={styles.trash}>
                  <button className={styles.trashBlock}>В корзину</button>
                </div> : ''}
            </div>
          )
        })}
      </div>
      <button className={styles.loadMore}>Load more</button>
    </div>
  )
}
export default ShopAnimals