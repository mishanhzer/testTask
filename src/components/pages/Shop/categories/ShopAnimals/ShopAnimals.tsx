import React, { useEffect, useState } from "react"
import { useStore } from '../../../../../store/store'

import { urlAnimals, linkAllWorks } from "../../../../../utils/useTest"

import styles from './styles/shopAnimals.module.scss'

const ShopAnimals = () => {
  const animals = useStore(state => state.animals)
  const getData = useStore(state => state.getData)

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
              <div className={styles.salary}>1500 <span>₽</span></div>
              <div className={styles.name}>{item.name}</div>
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