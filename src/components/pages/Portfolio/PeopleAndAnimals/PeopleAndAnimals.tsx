import React, { useState } from "react";
import { useLocation } from 'react-router-dom';

import { usePeopleAndAnimalsStore } from '../../../../store/store'

import { WidgetPages } from "../additionalUI/unorderedListPages/WidgetPages.tsx";

import { Spinner } from "../../../spinner/Spinner.tsx";
import { PicturesContent } from "../additionalUI/picturesContent/PicturesContent.tsx";

import { callFuncLoading, peopleAndAnimalsFunc, peopleAndAnimalsDataPages, AnimationContainer } from "../additionalUI/dataPicturesAndFuncWidget.ts"

import styles from '../styles/mainStylesPictures.module.scss'

const pathPeopleAndAnimals: string = '/portfolio/people_and_animals/'

const PeopleAndAnimals = () => {
  const [loading, setLoading] = useState(false)
  const peopleAndAnimalsDisplayedData = usePeopleAndAnimalsStore(state => state.peopleAndAnimalsDisplayedData);

  const setOnePage = usePeopleAndAnimalsStore(state => state.setOnePage)

  const location = useLocation()

  const idTest: number = +location.pathname.slice(30, 31)

  const handleClickBack = () => {
    peopleAndAnimalsFunc(setLoading, idTest, setOnePage)
  }

  const handleClickForward = () => {
    peopleAndAnimalsFunc(setLoading, idTest, setOnePage)
  }

  const handleClickStart = () => {
    peopleAndAnimalsFunc(setLoading, idTest, setOnePage)
  }

  const handleClickEnd = () => {
    peopleAndAnimalsFunc(setLoading, idTest, setOnePage)
  }

  const peopleAndAnimalsData = peopleAndAnimalsDataPages(pathPeopleAndAnimals, styles.listItems, setOnePage)

  const Content = () => {
    return (
      <>
        <WidgetPages
          handleClickStart={handleClickStart}
          handleClickBack={handleClickBack}
          handleClickForward={handleClickForward}
          handleClickEnd={handleClickEnd}
          callFuncLoading={() => callFuncLoading(setLoading)}
          dataPages={peopleAndAnimalsData}
        />
        <PicturesContent
          displayedData={peopleAndAnimalsDisplayedData}
          stylesContainer={styles.container}
          AnimationContainer={AnimationContainer}
          stylesWrapperImg={styles.wrapperImg}
        />
      </>
    )
  }

  return (
    loading ? <Spinner /> : <Content />
  )
}

export default PeopleAndAnimals
