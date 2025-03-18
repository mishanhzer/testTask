import React, { useCallback, useState } from "react";

import { AnimalPicture } from "../../../../assets/images/works/animals/animalImages";

// import { filterAnimals } from "../../../../assets/images/works/allWorks/AllWorks";
// import { Content } from "./AnimalsWorks";
// import { Content } from "../../../../assets/images/works/allWorks/AllWorks";
import { classNamesLinkAndButton } from '../../../UI_kits/stylesUI_kits'

import { useStore } from '../../../../store/store'

import styles from './styles/animals.module.scss'

export const Animals = () => {
  const displayedData = useStore((state) => state.displayedData)
  // const displayedData = useStore(state => state.displayedData)
  const setVisibleData = useStore(state => state.setVisibleData)
  const setDisplayedData = useStore(state => state.setDisplayedData)

  // const filterAnimals = works.filter(item => item.category === 'animal')

  // const [displayedData, setDisplayedData] = useState(filterAnimals.slice(0, 9))
  // const [visibleItemCount, setVisibleItemCount] = useState(9)

  // const handleLoadMore = () => {
  //   setVisibleItemCount(prevCount => prevCount + 9)
  //   setDisplayedData(filterAnimals.slice(0, visibleItemCount + 9))
  // }

  const handleLoadMore = () => {
    setVisibleData()
    setDisplayedData()
  }

  // console.log(displayedData.length - 1)
  // console.log(displayedData[displayedData.length - 1])

  return (
    <>
      <div className={styles.container}>
        {displayedData.map((item, index) => (
          <img className={`w-56 h-56 lozad`} src={item.source} key={index} alt={item.name} />
        ))}
        <button
          // disabled={displayedData[displayedData.length - 1].category === 'animal' && displayedData[displayedData.length - 1].id === displayedData.length - 1 ? true : false}
          onClick={handleLoadMore}
          className={`${styles.btn} ${classNamesLinkAndButton} mt-8 px-4 w-48 justify-center text-3xl`}
        >Load More
        </button>
      </div>
    </>
  )
}