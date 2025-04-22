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

  const pageId: number = +location.pathname.slice(30, 31)

  useEffect(() => {
    navigate(`${pathPeopleAndAnimals}${pageId}`)
    getAnimals('peopleAndAnimals', urlPeopleAndAnimals, offset, pageId)
  }, [])

  const paginate = (direction: string) => {
    const newOffset = direction === 'prev' ? Math.max(0, offset - 9) : Math.min(0, offset + 9)
    const newPage = direction === 'prev' ? Math.max(1, pageId - 1) : Math.min(1, pageId + 1)

    getAnimals('peopleAndAnimals', urlPeopleAndAnimals, newOffset, newPage)
    navigate(`${pathPeopleAndAnimals}${newPage}`)
  }

  const getStart = () => {
    getAnimals('peopleAndAnimals', urlPeopleAndAnimals, 0, 1)
    navigate(`${pathPeopleAndAnimals}1`)
  }

  const getEnd = () => {
    getAnimals('peopleAndAnimals', urlPeopleAndAnimals, 0, 1)
    navigate(`${pathPeopleAndAnimals}1`)
  }

  const peopleAndAnimalsData =
    peopleAndAnimalsDataPages(pathPeopleAndAnimals, styles.listItems,
      () => getAnimals('peopleAndAnimals', urlPeopleAndAnimals, 0, 1))

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
