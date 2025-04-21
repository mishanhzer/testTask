import React, { useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

import { useAnimalStore } from '../../../../store/store'

import { WidgetPages } from "../additionalUI/unorderedListPages/WidgetPages.tsx";
import { urlFlowers } from "../../../../utils/useTest.ts";

import { Spinner } from "../../../spinner/Spinner.tsx";
import { PicturesContent } from "../additionalUI/picturesContent/PicturesContent.tsx";

import { flowersDataPages } from "../additionalUI/dataPicturesAndFuncWidget.ts";

import styles from '../styles/mainStylesPictures.module.scss'

const pathFlowers: string = '/portfolio/flowers/'

const Flowers = () => {
  const flowers = useAnimalStore(state => state.flowers)
  const loading = useAnimalStore(state => state.loading)
  const offset = useAnimalStore(state => state.offset)
  const getAnimals = useAnimalStore(state => state.getAnimals)

  const navigate = useNavigate()
  const location = useLocation()

  const idTest: number = +location.pathname.slice(19, 21)

  useEffect(() => {
    navigate(`${pathFlowers}1`)
    getAnimals('flowers', urlFlowers, 0)
  }, [])

  const getPrev = () => {
    if (offset === 0) {
      getAnimals('flowers', urlFlowers, 0)
      navigate(`${pathFlowers}1`)
    }
    if (offset > 0) {
      getAnimals('flowers', urlFlowers, offset - 9)
      navigate(`${pathFlowers}${idTest - 1}`)
    }
  }

  const getNext = () => {
    if (offset >= 18) {
      getAnimals('flowers', urlFlowers, 18)
      navigate(`${pathFlowers}3`)
    }
    if (offset >= 0 && offset < 18) {
      getAnimals('flowers', urlFlowers, offset + 9)
      navigate(`${pathFlowers}${idTest + 1}`)
    }
  }

  const getStart = () => {
    getAnimals('flowers', urlFlowers, 0)
    navigate(`${pathFlowers}1`)
  }

  const getEnd = () => {
    getAnimals('flowers', urlFlowers, 18)
    navigate(`${pathFlowers}3`)
  }

  const flowersData = flowersDataPages(pathFlowers, styles.listItems, () => getAnimals('flowers', urlFlowers, 0), () => getAnimals('flowers', urlFlowers, 9), () => getAnimals('flowers', urlFlowers, 18))

  const Content = () => {
    return (
      <>
        <WidgetPages
          getStart={getStart}
          getEnd={getEnd}
          getNext={getNext}
          getPrev={getPrev}
          dataPages={flowersData}
        />
        <PicturesContent
          displayedData={flowers}
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

export default Flowers
