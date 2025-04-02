import React, { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

import { useStillLifeStore } from '../../../../store/store'

import { WidgetPages } from "../additionalUI/unorderedListPages/WidgetPages.tsx";

import { Spinner } from "../../../spinner/Spinner.tsx";
import { PicturesContent } from "../additionalUI/picturesContent/PicturesContent.tsx";

import { callFuncLoading, goBack, stillLifeForward, goStart, stillLifeEnd, stillLifeDataPages, AnimationContainer } from "../additionalUI/dataPicturesAndFuncWidget.ts";

import styles from '../styles/mainStylesPictures.module.scss'

const pathStillLife = '/portfolio/still_life/'

const StillLife = () => {
  const [loading, setLoading] = useState(false)
  const stillLifeWorksDisplayedData = useStillLifeStore(state => state.stillLifeWorksDisplayedData);

  const setPrevPage = useStillLifeStore(state => state.setPrevPage)
  const setNextPage = useStillLifeStore(state => state.setNextPage)
  const setVisibleDisplay = useStillLifeStore(state => state.setVisibleDisplay)

  const setOnePage = useStillLifeStore(state => state.setOnePage)
  const setTwoPage = useStillLifeStore(state => state.setTwoPage)

  const navigate = useNavigate()
  const location = useLocation()

  const pathName: string = location.pathname.slice(0, 22)
  const idTest: number = +location.pathname.slice(22, 23)

  const handleClickBack = () => {
    goBack(setLoading, `${pathStillLife}1`, setOnePage, setPrevPage, setVisibleDisplay, navigate, pathName, idTest)
  }

  const handleClickForward = () => {
    stillLifeForward(setLoading, `${pathStillLife}2`, setNextPage, setVisibleDisplay, navigate, pathName, idTest, setTwoPage)
  }

  const handleClickStart = () => {
    goStart(setLoading, `${pathStillLife}1`, setOnePage, navigate)
  }

  const handleClickEnd = () => {
    stillLifeEnd(setLoading, `${pathStillLife}2`, setTwoPage, navigate)
  }

  const stillLifeData = stillLifeDataPages(pathStillLife, styles.listItems, setOnePage, setTwoPage)

  const Content = () => {
    return (
      <>
        <WidgetPages
          handleClickStart={handleClickStart}
          handleClickBack={handleClickBack}
          handleClickForward={handleClickForward}
          handleClickEnd={handleClickEnd}
          callFuncLoading={() => callFuncLoading(setLoading)}
          dataPages={stillLifeData}
        />
        <PicturesContent
          displayedData={stillLifeWorksDisplayedData}
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

export default StillLife
