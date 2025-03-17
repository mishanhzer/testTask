import React from "react";

import { AnimalPicture } from "../../../../assets/images/works/animals/animalImages";

import { filterAnimals } from "../../../../assets/images/works/allWorks/AllWorks";
import { Content } from "../../../../assets/images/works/allWorks/AllWorks";

import styles from './styles/animals.module.scss'

import wolf from '../../../../assets/images/works/animals/wolf.jpg'
import leopard from '../../../../assets/images/works/animals/leopard.jpg'
import cats from '../../../../assets/images/works/animals/cats.jpg'
import tiger from '../../../../assets/images/works/animals/tiger.jpg'
import cat from '../../../../assets/images/works/animals/cat.jpg'
import hedgehog from '../../../../assets/images/works/animals/hedgehog.jpg'

export const Animals = () => {
  return (
    <>
      <div className={styles.container}>
        <Content works={filterAnimals} />
        {/* <AnimalPicture /> */}
      </div>
    </>
  )
}