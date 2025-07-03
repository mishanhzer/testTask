import React, { useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

import { useStore } from '../../../../store/store'

import { Spinner } from "../../../spinner/Spinner.tsx";
import { WidgetPages } from "../additionalUI/unorderedListPages/WidgetPages.tsx";
import { WhatsApp } from "../../../whatsapp/WhatsApp.tsx";

import { animalsDataPages } from "../additionalUI/dataPicturesAndFuncWidget.ts"
import { PicturesContent } from "../additionalUI/picturesContent/PicturesContent.tsx"

import styles from '../mainStylesPictures.module.scss'

const pathAnimals: string = '/portfolio/animals/'

import { urlAnimals } from "../../../../utils/useTest.ts";

const Animals = () => {
  const animals = useStore(state => state.animals)

  const loading = useStore(state => state.loading)
  const offsetAnimals = useStore(state => state.offsetAnimals)
  const getData = useStore(state => state.getData)

  const navigate = useNavigate()
  const location = useLocation() as { pathname: string }

  const pageId: number = +location.pathname.slice(19, 21)
  console.log(pageId)

  useEffect(() => {
    navigate(`${pathAnimals}${pageId}`)
    getData('animals', urlAnimals, 'offsetAnimals', offsetAnimals, 'pageAnimals', pageId)
  }, [])

  const getStart = () => {
    navigate(`${pathAnimals}1`)
    getData('animals', urlAnimals, 'offsetAnimals', 0, 'pageAnimals', 1)
  }

  const getEnd = () => {
    navigate(`${pathAnimals}6`)
    getData('animals', urlAnimals, 'offsetAnimals', 45, 'pageAnimals', 6)
  }

  const paginate = (direction: string) => {
    const newOffset = direction === 'prev' ? Math.max(0, offsetAnimals - 9) : Math.min(45, offsetAnimals + 9)
    const newPage = direction === 'prev' ? Math.max(1, pageId - 1) : Math.min(6, pageId + 1)

    getData('animals', urlAnimals, 'offsetAnimals', newOffset, 'pageAnimals', newPage)
    navigate(`${pathAnimals}${newPage}`)
  }

  const animalsData =
    animalsDataPages(pathAnimals, styles.listItems,
      () => getData('animals', urlAnimals, 'offsetAnimals', 0, 'pageAnimals', 1),
      () => getData('animals', urlAnimals, 'offsetAnimals', 9, 'pageAnimals', 2),
      () => getData('animals', urlAnimals, 'offsetAnimals', 18, 'pageAnimals', 3),
      () => getData('animals', urlAnimals, 'offsetAnimals', 27, 'pageAnimals', 4),
      () => getData('animals', urlAnimals, 'offsetAnimals', 36, 'pageAnimals', 5),
      () => getData('animals', urlAnimals, 'offsetAnimals', 45, 'pageAnimals', 6))


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
        <WhatsApp />
      </>
    )
  }

  return (
    loading === 'loading' ? <Spinner /> : <Content />
  )
}

export default Animals
