import React, { useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

import { useAnimalStore } from '../../../../store/store'
import { urlPeopleAndAnimals } from "../../../../utils/useTest.ts";

import { WidgetPages } from "../additionalUI/unorderedListPages/WidgetPages.tsx";

import { Spinner } from "../../../spinner/Spinner.tsx";
import { PicturesContent } from "../additionalUI/picturesContent/PicturesContent.tsx";

import { peopleAndAnimalsDataPages } from "../additionalUI/dataPicturesAndFuncWidget.ts"

import styles from '../styles/mainStylesPictures.module.scss'

const pathPeopleAndAnimals: string = '/portfolio/people_and_animals/'

const PeopleAndAnimals = () => {
  const peopleAndAnimals = useAnimalStore(state => state.peopleAndAnimals)
  const loading = useAnimalStore(state => state.loading)
  const offset = useAnimalStore(state => state.offset)
  const getAnimals = useAnimalStore(state => state.getAnimals)

  const navigate = useNavigate()
  const location = useLocation()
  const idTest: number = +location.pathname.slice(30, 31)

  useEffect(() => {
    navigate(`${pathPeopleAndAnimals}1`)
    getAnimals('peopleAndAnimals', urlPeopleAndAnimals, 0)
  }, [])

  const getPrev = () => {
    if (offset === 0) {
      getAnimals('peopleAndAnimals', urlPeopleAndAnimals, 0)
      navigate(`${pathPeopleAndAnimals}1`)
    }
  }

  const getNext = () => {
    if (offset >= 0) {
      getAnimals('peopleAndAnimals', urlPeopleAndAnimals, 0)
      navigate(`${pathPeopleAndAnimals}1`)
    }
  }

  const getStart = () => {
    getAnimals('peopleAndAnimals', urlPeopleAndAnimals, 0)
    navigate(`${pathPeopleAndAnimals}1`)
  }

  const getEnd = () => {
    getAnimals('peopleAndAnimals', urlPeopleAndAnimals, 0)
    navigate(`${pathPeopleAndAnimals}1`)
  }

  const peopleAndAnimalsData = peopleAndAnimalsDataPages(pathPeopleAndAnimals, styles.listItems, () => getAnimals('peopleAndAnimals', urlPeopleAndAnimals, 0))

  const Content = () => {
    return (
      <>
        <WidgetPages
          getStart={getStart}
          getEnd={getEnd}
          getNext={getNext}
          getPrev={getPrev}
          dataPages={peopleAndAnimalsData}
        />
        <PicturesContent
          displayedData={peopleAndAnimals}
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

export default PeopleAndAnimals
