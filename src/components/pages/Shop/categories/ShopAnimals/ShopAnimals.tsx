import React, { useEffect } from "react"
import { useStore } from '../../../../../store/store'

import { urlAnimalsShop } from "../../../../../utils/useTest"

import styles from './styles/shopAnimals.module.scss'

const ShopAnimals = () => {
  const animals = useStore(state => state.animals)
  const getData = useStore(state => state.getData)
  const loading = useStore(state => state.loading)
  console.log(animals)

  useEffect(() => {
    getData('animals', urlAnimalsShop, 'offsetAnimals', 0, 'pageAnimals')
  }, [])

  return (
    <div>
      <div className={styles.shopAnimalsContainer}>
        {animals.map(item => {
          return (
            <div className="shopBlock">
              <img className={`w-[330px] h-[330px]`} src={item.sizes[7].url} alt={item.name} />
            </div>
          )
        })}
      </div>
      <button>click!</button>
    </div>
  )
}
export default ShopAnimals