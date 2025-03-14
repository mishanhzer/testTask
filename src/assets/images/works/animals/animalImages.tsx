import React from 'react'

import wolf from '../animals/wolf.jpg'
import leopard from '../animals/leopard.jpg'
import cats from '../animals/cats.jpg'
import tiger from '../animals/tiger.jpg'
import cat from '../animals/cat.jpg'
import hedgehog from '../animals/hedgehog.jpg'
import cat_1 from '../animals/cat_1.jpg'
import leopards from '../animals/leopards.jpg'
import tiger_1 from '../animals/tiger_1.jpg'
import tiger_2 from '../animals/tiger_2.jpg'

import styles from './animalImage.module.scss'

const test = [
  { name: wolf, id: 'wolf' },
  { name: leopard, id: 'leopard' },
  { name: cats, id: 'cats' },
  { name: tiger, id: 'tiger' },
  { name: cat, id: 'cat' },
  { name: hedgehog, id: 'hedgehog' },
  { name: cat_1, id: 'cat_1' },
  { name: leopards, id: 'leopards' },
  { name: tiger_1, id: 'tiger_1' },
  { name: tiger_2, id: 'tiger_2' },
]

const dataWorks = [

]

export const AnimalPicture = () => {
  return (
    test.map(item => {
      return (
        <img
          id={item.id}
          src={item.name}
          alt={item.name} />
      )
    })
  )
}

