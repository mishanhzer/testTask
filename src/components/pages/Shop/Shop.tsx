import React from "react"
import { NavLink } from "react-router"

import { WhatsApp } from "../../whatsapp/WhatsApp"

import shopAnimals from '../../../assets/images/shopImage/shopAnimals.jpg'
import shopFlowers from '../../../assets/images/shopImage/shopFlowers.jpg'
import shopStillLife from '../../../assets/images/shopImage/shopStillLife.jpg'
import shopPeopleAndAnimals from '../../../assets/images/shopImage/shopPeopleAndAnimals.jpg'

import styles from './shop.module.scss'

const dataShop = [
  { name: 'Animals', src: shopAnimals, link: '/shop/shop_animals' },
  { name: 'Flowers', src: shopFlowers, link: '/shop/shop_flowers' },
  { name: 'Still life', src: shopStillLife, link: '/shop/shop_still_life' },
  { name: 'People and animals', src: shopPeopleAndAnimals, link: '/shop/shop_people_and_animals' },
]

const Shop = () => {
  return (
    <div className={styles.shopContainer}>
      {dataShop.map(item => {
        return (
          <NavLink to={item.link} key={item.name}>
            <div className={styles.shopBlock}>
              <img className={styles.shopImg} src={item.src} alt={item.name} />
            </div>
            <div className={styles.shopHeader}>{item.name}</div>
          </NavLink>
        )
      })}
      <WhatsApp />
    </div>
  )
}

export default Shop