import React, { useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

import { useAnimalStore, useStore } from '../../../../store/store'

import { urlStillLife } from "../../../../utils/useTest.ts";

import { WidgetPages } from "../additionalUI/unorderedListPages/WidgetPages.tsx";

import { Spinner } from "../../../spinner/Spinner.tsx";
import { PicturesContent } from "../additionalUI/picturesContent/PicturesContent.tsx";

import { stillLifeDataPages } from "../additionalUI/dataPicturesAndFuncWidget.ts";

import styles from '../styles/mainStylesPictures.module.scss'

const pathStillLife = '/portfolio/still_life/'

const StillLife = () => {
  const stillLife = useStore(state => state.stillLife)

  const loading = useStore(state => state.loading)
  const offsetStillLife = useStore(state => state.offsetStillLife)
  const getData = useStore(state => state.getData)

  const navigate = useNavigate()
  const location = useLocation() as { pathname: string }

  const pageId: number = +location.pathname.slice(22, 23)

  useEffect(() => {
    navigate(`${pathStillLife}${pageId}`)
    getData('stillLife', urlStillLife, 'offsetStillLife', offsetStillLife, 'pageStillLife', pageId)
  }, [])

  const paginate = (direction: string) => {
    const newOffset = direction === 'prev' ? Math.max(0, offsetStillLife - 9) : Math.min(9, offsetStillLife + 9)
    const newPage = direction === 'prev' ? Math.max(1, pageId - 1) : Math.min(2, pageId + 1)

    getData('stillLife', urlStillLife, 'offsetStillLife', newOffset, 'pageStillLife', newPage)
    navigate(`${pathStillLife}${newPage}`)
  }

  const getStart = () => {
    getData('stillLife', urlStillLife, 'offsetStillLife', 0, 'pageStillLife', 1)
    navigate(`${pathStillLife}1`)
  }

  const getEnd = () => {
    getData('stillLife', urlStillLife, 'offsetStillLife', 9, 'pageStillLife', 2)
    navigate(`${pathStillLife}2`)
  }

  const stillLifeData =
    stillLifeDataPages(pathStillLife, styles.listItems,
      () => getData('stillLife', urlStillLife, 'offsetStillLife', 0, 'pageStillLife', 1),
      () => getData('stillLife', urlStillLife, 'offsetStillLife', 9, 'pageStillLife', 2))

  const Content = () => {
    return (
      <>
        <WidgetPages
          getStart={getStart}
          getEnd={getEnd}
          paginate={paginate}
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
