import React, { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

import { useFlowersStore } from '../../../../store/store'

import { WidgetPages } from "../additionalUI/unorderedListPages/WidgetPages.tsx";

import { Spinner } from "../../../spinner/Spinner.tsx";
import { PicturesContent } from "../additionalUI/picturesContent/PicturesContent.tsx";

import { callFuncLoading, goBack, flowersForward, goStart, flowersEnd, flowersDataPages } from "../additionalUI/dataPicturesAndFuncWidget.ts";

import styles from '../styles/mainStylesPictures.module.scss'

const pathFlowers: string = '/portfolio/flowers/'

const Flowers = () => {
  const [loading, setLoading] = useState(false)
  const flowersWorksDisplayedData = useFlowersStore(state => state.flowersWorksDisplayedData);

  const setPrevPage = useFlowersStore(state => state.setPrevPage)
  const setNextPage = useFlowersStore(state => state.setNextPage)
  const setVisibleDisplay = useFlowersStore(state => state.setVisibleDisplay)

  const setOnePage = useFlowersStore(state => state.setOnePage)
  const setTwoPage = useFlowersStore(state => state.setTwoPage)
  const setThreePage = useFlowersStore(state => state.setThreePage)

  const navigate = useNavigate()
  const location = useLocation()

  const pathName: string = location.pathname.slice(0, 19)
  const idTest: number = +location.pathname.slice(19, 21)

  const handleClickBack = () => {
    goBack(setLoading, `${pathFlowers}1`, setOnePage, setPrevPage, setVisibleDisplay, navigate, pathName, idTest)
  }

  const handleClickForward = () => {
    flowersForward(setLoading, `${pathFlowers}3`, setNextPage, setVisibleDisplay, navigate, pathName, idTest, setThreePage)
  }

  const handleClickStart = () => {
    goStart(setLoading, `${pathFlowers}1`, setOnePage, navigate)
  }

  const handleClickEnd = () => {
    flowersEnd(setLoading, `${pathFlowers}3`, setThreePage, navigate)
  }

  const flowersData = flowersDataPages(pathFlowers, styles.listItems, setOnePage, setTwoPage, setThreePage)

  const Content = () => {
    return (
      <>
        <WidgetPages
          handleClickStart={handleClickStart}
          handleClickBack={handleClickBack}
          handleClickForward={handleClickForward}
          handleClickEnd={handleClickEnd}
          callFuncLoading={() => callFuncLoading(setLoading)}
          dataPages={flowersData}
        />
        <PicturesContent
          displayedData={flowersWorksDisplayedData}
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

export default Flowers
