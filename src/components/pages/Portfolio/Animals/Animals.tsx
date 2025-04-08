import React, { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

import { useAnimalStore } from '../../../../store/store'

import { Spinner } from "../../../spinner/Spinner.tsx";
import { WidgetPages } from "../additionalUI/unorderedListPages/WidgetPages.tsx";

import { callFuncLoading, goBack, animalsForward, goStart, animalsEnd, animalsDataPages } from "../additionalUI/dataPicturesAndFuncWidget.ts"
import { PicturesContent } from "../additionalUI/picturesContent/PicturesContent.tsx"

import styles from '../styles/mainStylesPictures.module.scss'

const pathAnimals: string = '/portfolio/animals/'

const Animals = () => {
  const [loading, setLoading] = useState(false)
  const animalDisplayedData = useAnimalStore(state => state.animalDisplayedData);

  const setPrevPage = useAnimalStore(state => state.setPrevPage)
  const setNextPage = useAnimalStore(state => state.setNextPage)
  const setVisibleDisplay = useAnimalStore(state => state.setVisibleDisplay)

  const setOnePage = useAnimalStore(state => state.setOnePage)
  const setTwoPage = useAnimalStore(state => state.setTwoPage)
  const setThreePage = useAnimalStore(state => state.setThreePage)
  const setFourPage = useAnimalStore(state => state.setFourPage)
  const setFivePage = useAnimalStore(state => state.setFivePage)
  const setSixPage = useAnimalStore(state => state.setSixPage)

  const navigate = useNavigate()
  const location = useLocation()

  const pathName: string = location.pathname.slice(0, 19)
  const idTest: number = +location.pathname.slice(19, 21)

  const handleClickBack = () => {
    goBack(setLoading, `${pathAnimals}1`, setOnePage, setPrevPage, setVisibleDisplay, navigate, pathName, idTest)
  }

  const handleClickForward = () => {
    animalsForward(setLoading, `${pathAnimals}6`, setNextPage, setVisibleDisplay, navigate, pathName, idTest, setSixPage)
  }

  const handleClickStart = () => {
    goStart(setLoading, `${pathAnimals}1`, setOnePage, navigate)
  }

  const handleClickEnd = () => {
    animalsEnd(setLoading, `${pathAnimals}6`, setSixPage, navigate)
  }

  const animalsData = animalsDataPages(pathAnimals, styles.listItems, setOnePage, setTwoPage, setThreePage, setFourPage, setFivePage, setSixPage)

  const Content = () => {
    return (
      <>
        <WidgetPages
          handleClickStart={handleClickStart}
          handleClickBack={handleClickBack}
          handleClickForward={handleClickForward}
          handleClickEnd={handleClickEnd}
          callFuncLoading={() => callFuncLoading(setLoading)}
          dataPages={animalsData}
        />
        <PicturesContent
          displayedData={animalDisplayedData}
          stylesContainer={styles.container}
          stylesWrapperImg={styles.wrapperImg}
        />
      </>
    )
  }

  return (
    loading ? <Spinner /> : <Content />
  )
}

export default Animals
