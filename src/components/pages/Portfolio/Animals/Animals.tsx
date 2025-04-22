import React, { useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

import { useAnimalStore } from '../../../../store/store'

import { Spinner } from "../../../spinner/Spinner.tsx";
import { WidgetPages } from "../additionalUI/unorderedListPages/WidgetPages.tsx";

import { animalsDataPages } from "../additionalUI/dataPicturesAndFuncWidget.ts"
import { PicturesContent } from "../additionalUI/picturesContent/PicturesContent.tsx"

import styles from '../styles/mainStylesPictures.module.scss'

const pathAnimals: string = '/portfolio/animals/'

import { urlAnimals } from "../../../../utils/useTest.ts";

const Animals = () => {
  const animals = useAnimalStore(state => state.animals)

  const loading = useAnimalStore(state => state.loading)
  const getAnimals = useAnimalStore(state => state.getAnimals)
  const offset = useAnimalStore(state => state.offset)

  const navigate = useNavigate()
  const location = useLocation()

  const pageId: number = +location.pathname.slice(19, 21)

  useEffect(() => {
    navigate(`${pathAnimals}${pageId}`)
    getAnimals('animals', urlAnimals, offset, pageId)
  }, [])

  const getStart = () => {
    navigate(`${pathAnimals}1`)
    getAnimals('animals', urlAnimals, 0, 1)
  }

  const getEnd = () => {
    navigate(`${pathAnimals}6`)
    getAnimals('animals', urlAnimals, 45, 6)
  }

  const paginate = (direction: string) => {
    const newOffset = direction === 'prev' ? Math.max(0, offset - 9) : Math.min(45, offset + 9)
    const newPage = direction === 'prev' ? Math.max(1, pageId - 1) : Math.min(6, pageId + 1)

    getAnimals('animals', urlAnimals, newOffset, newPage)
    navigate(`${pathAnimals}${newPage}`)
  }

  const animalsData =
    animalsDataPages(pathAnimals, styles.listItems,
      () => getAnimals('animals', urlAnimals, 0, 1),
      () => getAnimals('animals', urlAnimals, 9, 2),
      () => getAnimals('animals', urlAnimals, 18, 3),
      () => getAnimals('animals', urlAnimals, 27, 4),
      () => getAnimals('animals', urlAnimals, 36, 5),
      () => getAnimals('animals', urlAnimals, 45, 6))

  const Content = () => {
    return (
      <>
        <WidgetPages
          getStart={getStart}
          getEnd={getEnd}
          paginate={paginate}
          dataPages={animalsData}
        />
        <PicturesContent
          displayedData={animals}
          stylesContainer={styles.container}
          stylesWrapperImg={styles.wrapperImg}
        />
      </>
    )
  }

  return (
    loading === 'loading' ? <Spinner /> : <Content />
  )
}

export default Animals
