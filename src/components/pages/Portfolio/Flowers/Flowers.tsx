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

  const pageId: number = +location.pathname.slice(19, 21)

  useEffect(() => {
    navigate(`${pathFlowers}${pageId}`)
    getAnimals('flowers', urlFlowers, offset, pageId)
  }, [])

  const paginate = (direction: string) => {
    const newOffset = direction === 'prev' ? Math.max(0, offset - 9) : Math.min(18, offset + 9)
    const newPage = direction === 'prev' ? Math.max(1, pageId - 1) : Math.min(3, pageId + 1)

    getAnimals('flowers', urlFlowers, newOffset, newPage)
    navigate(`${pathFlowers}${newPage}`)
  }

  const getStart = () => {
    getAnimals('flowers', urlFlowers, 0, 1)
    navigate(`${pathFlowers}1`)
  }

  const getEnd = () => {
    getAnimals('flowers', urlFlowers, 18, 3)
    navigate(`${pathFlowers}3`)
  }

  const flowersData =
    flowersDataPages(pathFlowers, styles.listItems,
      () => getAnimals('flowers', urlFlowers, 0, 1),
      () => getAnimals('flowers', urlFlowers, 9, 2),
      () => getAnimals('flowers', urlFlowers, 18, 3))

  const Content = () => {
    return (
      <>
        <WidgetPages
          getStart={getStart}
          getEnd={getEnd}
          paginate={paginate}
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
