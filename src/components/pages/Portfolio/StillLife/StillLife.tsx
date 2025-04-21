import React, { useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

import { useAnimalStore } from '../../../../store/store'

import { urlStillLife } from "../../../../utils/useTest.ts";

import { WidgetPages } from "../additionalUI/unorderedListPages/WidgetPages.tsx";

import { Spinner } from "../../../spinner/Spinner.tsx";
import { PicturesContent } from "../additionalUI/picturesContent/PicturesContent.tsx";

import { stillLifeDataPages } from "../additionalUI/dataPicturesAndFuncWidget.ts";

import styles from '../styles/mainStylesPictures.module.scss'

const pathStillLife = '/portfolio/still_life/'

const StillLife = () => {
  const stillLife = useAnimalStore(state => state.stillLife)

  const loading = useAnimalStore(state => state.loading)
  const offset = useAnimalStore(state => state.offset)
  const getAnimals = useAnimalStore(state => state.getAnimals)

  const navigate = useNavigate()
  const location = useLocation()

  const idTest: number = +location.pathname.slice(22, 23)

  useEffect(() => {
    navigate(`${pathStillLife}1`)
    getAnimals('stillLife', urlStillLife, 0)
  }, [])

  const getPrev = () => {
    if (offset === 0) {
      getAnimals('stillLife', urlStillLife, 0)
      navigate(`${pathStillLife}1`)
    }
    if (offset > 0) {
      getAnimals('stillLife', urlStillLife, offset - 9)
      navigate(`${pathStillLife}${idTest - 1}`)
    }
  }

  const getNext = () => {
    if (offset >= 9) {
      getAnimals('stillLife', urlStillLife, 9)
      navigate(`${pathStillLife}2`)
    }
    if (offset >= 0 && offset < 9) {
      getAnimals('stillLife', urlStillLife, offset + 9)
      navigate(`${pathStillLife}${idTest + 1}`)
    }
  }

  const getStart = () => {
    getAnimals('stillLife', urlStillLife, 0)
    navigate(`${pathStillLife}1`)
  }

  const getEnd = () => {
    getAnimals('stillLife', urlStillLife, 9)
    navigate(`${pathStillLife}2`)
  }

  const stillLifeData = stillLifeDataPages(pathStillLife, styles.listItems, () => getAnimals('stillLife', urlStillLife, 0), () => getAnimals('stillLife', urlStillLife, 9))

  const Content = () => {
    return (
      <>
        <WidgetPages
          getStart={getStart}
          getEnd={getEnd}
          getNext={getNext}
          getPrev={getPrev}
          dataPages={stillLifeData}
        />
        <PicturesContent
          displayedData={stillLife}
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

export default StillLife
