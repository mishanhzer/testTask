import React from "react";

import { useAnimalStore } from '../../../../store/store'

import { classNamesLinkAndButton } from '../../../UI_kits/stylesUI_kits'
import { arrowPages, doubleArrowPages } from "../../../../assets/logo/logo";
import styles from './styles/animals.module.scss'

export const Animals = () => {
  const animalWorks = useAnimalStore(state => state.animalWorks)
  const animalDisplayedData = useAnimalStore(state => state.animalDisplayedData)
  const handleAnimalLoadMore = useAnimalStore(state => state.handleAnimalLoadMore)

  return (
    <>
      <div className={styles.container}>
        {animalDisplayedData.map((item, index) => (
          <img className={`w-56 h-56 lozad`} src={item.source} key={index} alt={item.name} />
        ))}
        <button
          disabled={animalDisplayedData[animalDisplayedData.length - 1].category === 'animal' && animalDisplayedData.length - 1 === animalWorks.length - 1 ? true : false}
          onClick={handleAnimalLoadMore}
          className={`${styles.btn} ${classNamesLinkAndButton} mt-8 px-4 w-48 justify-center text-3xl`}
        >Load More
        </button>
        <ul className={styles.links}>
          <li className={styles.listItemOnStart}>
            <a href="">
              <img src={doubleArrowPages} alt="" />
            </a>
          </li>
          <li className={styles.listItemPrev}>
            <a href="">
              <img src={arrowPages} alt="" />
            </a>
          </li>
          <li className={styles.listItems}>
            <a href="">1</a>
          </li>
          <li className={styles.listItems}>
            <a href="">2</a>
          </li>
          <li className={styles.listItems}>
            <a href="">3</a>
          </li>
          <li className={styles.listItems}>
            <a href="">4</a>
          </li>
          <li className={styles.listItems}>
            <a href="">5</a>
          </li>
          <li className={styles.listItemNext}>
            <a href="">
              <img src={arrowPages} alt="" />
            </a>
          </li>
          <li className={styles.listItemOnEnd}>
            <a href="">
              <img src={doubleArrowPages} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}