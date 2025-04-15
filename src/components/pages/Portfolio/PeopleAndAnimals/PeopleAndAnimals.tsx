import React, { useState } from "react";
import { useLocation } from 'react-router-dom';

import { usePeopleAndAnimalsStore } from '../../../../store/store'

import { WidgetPages } from "../additionalUI/unorderedListPages/WidgetPages.tsx";

import { Spinner } from "../../../spinner/Spinner.tsx";
import { PicturesContent } from "../additionalUI/picturesContent/PicturesContent.tsx";

import { peopleAndAnimalsFunc, peopleAndAnimalsDataPages } from "../additionalUI/dataPicturesAndFuncWidget.ts"

import styles from '../styles/mainStylesPictures.module.scss'

const pathPeopleAndAnimals: string = '/portfolio/people_and_animals/'

const PeopleAndAnimals = () => {
  // const [loading, setLoading] = useState(false)
  const peopleAndAnimalsDisplayedData = usePeopleAndAnimalsStore(state => state.peopleAndAnimalsDisplayedData);

  const setOnePage = usePeopleAndAnimalsStore(state => state.setOnePage)

  const location = useLocation()

  const idTest: number = +location.pathname.slice(30, 31)

  const handleClickBack = () => {
    peopleAndAnimalsFunc(idTest, setOnePage)
  }

  const handleClickForward = () => {
    peopleAndAnimalsFunc(idTest, setOnePage)
  }

  const handleClickStart = () => {
    peopleAndAnimalsFunc(idTest, setOnePage)
  }

  const handleClickEnd = () => {
    peopleAndAnimalsFunc(idTest, setOnePage)
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
          dataPages={peopleAndAnimalsData}
        />
        <PicturesContent
          displayedData={peopleAndAnimalsDisplayedData}
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

export default PeopleAndAnimals
