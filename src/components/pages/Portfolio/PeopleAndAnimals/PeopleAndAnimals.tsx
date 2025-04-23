import React, { useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

import { useAnimalStore, useStore } from '../../../../store/store'
import { urlPeopleAndAnimals } from "../../../../utils/useTest.ts";

import { WidgetPages } from "../additionalUI/unorderedListPages/WidgetPages.tsx";

import { Spinner } from "../../../spinner/Spinner.tsx";
import { PicturesContent } from "../additionalUI/picturesContent/PicturesContent.tsx";

import { peopleAndAnimalsDataPages } from "../additionalUI/dataPicturesAndFuncWidget.ts"

import styles from '../styles/mainStylesPictures.module.scss'

const pathPeopleAndAnimals: string = '/portfolio/people_and_animals/'

const PeopleAndAnimals = () => {
  const peopleAndAnimals = useStore(state => state.peopleAndAnimals)

  const loading = useStore(state => state.loading)
  const offsetPeopleAndAnimals = useStore(state => state.offsetPeopleAndAnimals)
  const getData = useStore(state => state.getData)

  const navigate = useNavigate()
  const location = useLocation()

  const pageId: number = +location.pathname.slice(30, 31)

  useEffect(() => {
    navigate(`${pathPeopleAndAnimals}${pageId}`)
    getData('peopleAndAnimals', urlPeopleAndAnimals, 'offsetPeopleAndAnimals', offsetPeopleAndAnimals, 'pagePeopleAndAnimals', pageId)
  }, [])

  const paginate = (direction: string) => {
    const newOffset = direction === 'prev' ? Math.max(0, offsetPeopleAndAnimals - 9) : Math.min(0, offsetPeopleAndAnimals + 9)
    const newPage = direction === 'prev' ? Math.max(1, pageId - 1) : Math.min(1, pageId + 1)

    getData('peopleAndAnimals', urlPeopleAndAnimals, 'offsetPeopleAndAnimals', newOffset, 'pagePeopleAndAnimals', newPage)
    navigate(`${pathPeopleAndAnimals}${newPage}`)
  }

  const getStart = () => {
    getData('peopleAndAnimals', urlPeopleAndAnimals, 'offsetPeopleAndAnimals', 0, 'pagePeopleAndAnimals', 1)
    navigate(`${pathPeopleAndAnimals}1`)
  }

  const getEnd = () => {
    getData('peopleAndAnimals', urlPeopleAndAnimals, 'offsetPeopleAndAnimals', 0, 'pagePeopleAndAnimals', 1)
    navigate(`${pathPeopleAndAnimals}1`)
  }

  const peopleAndAnimalsData =
    peopleAndAnimalsDataPages(pathPeopleAndAnimals, styles.listItems,
      () => getData('peopleAndAnimals', urlPeopleAndAnimals, 'offsetPeopleAndAnimals', 0, 'pagePeopleAndAnimals', 1))

  const Content = () => {
    return (
      <>
        <WidgetPages
          getStart={getStart}
          getEnd={getEnd}
          paginate={paginate}
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
