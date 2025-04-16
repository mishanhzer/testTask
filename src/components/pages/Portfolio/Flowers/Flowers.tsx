import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

import { useFlowersStore } from '../../../../store/store'

import { WidgetPages } from "../additionalUI/unorderedListPages/WidgetPages.tsx";

import { Spinner } from "../../../spinner/Spinner.tsx";
import { PicturesContent } from "../additionalUI/picturesContent/PicturesContent.tsx";

import { goBack, flowersForward, goStart, flowersEnd, flowersDataPages } from "../additionalUI/dataPicturesAndFuncWidget.ts";

import styles from '../styles/mainStylesPictures.module.scss'

const pathFlowers: string = '/portfolio/flowers/'

const Flowers = () => {
  // const [loading, setLoading] = useState(false)
  // const flowersWorksDisplayedData = useFlowersStore(state => state.flowersWorksDisplayedData);
  const flowers = useFlowersStore(state => state.flowers);
  const loadingTest = useFlowersStore(state => state.loadingTest);

  const getFlowersFirstPage = useFlowersStore(state => state.getFlowersFirstPage)
  const getFlowersSecondPage = useFlowersStore(state => state.getFlowersSecondPage)
  const getFlowersThirdPage = useFlowersStore(state => state.getFlowersThirdPage)
  const getFlowersFourthPage = useFlowersStore(state => state.getFlowersFourthPage)

  const getPrevFlowers = useFlowersStore(state => state.getPrevFlowers)
  const getNextFlowers = useFlowersStore(state => state.getNextFlowers)

  // const setPrevPage = useFlowersStore(state => state.setPrevPage)
  // const setNextPage = useFlowersStore(state => state.setNextPage)
  const setVisibleDisplay = useFlowersStore(state => state.setVisibleDisplay)

  const navigate = useNavigate()
  const location = useLocation()

  const pathName: string = location.pathname.slice(0, 19)
  const idTest: number = +location.pathname.slice(19, 21)

  // useEffect(() => {
  //   getFlowersFirstPage()
  // }, [])

  const handleClickBack = () => {
    goBack(`${pathFlowers}1`, getFlowersFirstPage, getPrevFlowers, setVisibleDisplay, navigate, pathName, idTest)
    getPrevFlowers()
  }

  const handleClickForward = () => {
    flowersForward(`${pathFlowers}3`, getNextFlowers, setVisibleDisplay, navigate, pathName, idTest, getFlowersThirdPage)
    getNextFlowers()
  }

  const handleClickStart = () => {
    goStart(`${pathFlowers}1`, getFlowersFirstPage, navigate)
  }

  const handleClickEnd = () => {
    flowersEnd(`${pathFlowers}3`, getFlowersThirdPage, navigate)
  }

  const flowersData = flowersDataPages(pathFlowers, styles.listItems, getFlowersFirstPage, getFlowersSecondPage, getFlowersThirdPage)

  const Content = () => {
    return (
      <>
        <WidgetPages
          handleClickStart={handleClickStart}
          handleClickBack={handleClickBack}
          handleClickForward={handleClickForward}
          handleClickEnd={handleClickEnd}
          dataPages={flowersData}
        />
        <PicturesContent
          displayedData={flowers}
          stylesContainer={styles.container}
          stylesWrapperImg={styles.wrapperImg}
        />
      </>
    )
  }

  return (
    loadingTest === 'loading' ? <Spinner /> : <Content />
  )
}

export default Flowers
