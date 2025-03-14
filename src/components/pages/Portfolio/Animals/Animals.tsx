import React from "react";

import { AnimalPicture } from "../../../../assets/images/works/animals/animalImages";
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
        <img
          id={styles.wolf}
          src={wolf}
          alt='#' />
        <img
          id={styles.leopard}
          src={leopard}
          alt='#' />
        <img
          id={styles.cats}
          src={cats}
          alt='#' />
        <img
          id={styles.tiger}
          src={tiger}
          alt='#' />
        <img
          className={styles.test}
          id={styles.cat}
          src={cat}
          alt='#' />
        <img
          id={styles.hedgehog}
          src={hedgehog}
          alt='#' />

        {/* <AnimalPicture /> */}
      </div>
    </>
  )
}