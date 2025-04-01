import React, { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

import { useStillLifeStore } from '../../../../store/store'

import { WidgetPages } from "../additionalUI/unorderedListPages/WidgetPages.tsx";

import styles from '../styles/mainStylesPictures.module.scss'
import { Spinner } from "../../../spinner/Spinner.tsx";

import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

import { callFuncLoading, goBack, stillLifeForward, goStart, stillLifeEnd } from "../additionalUI/functions.ts";

interface TypesStillLifeDataPages {
  path: string
  name: number
  source: string
  class: string
  func: () => void
}

const pathStillLife = '/portfolio/still_life/'

const fadeInAnimation = keyframes`${fadeIn}`
const AnimationContainer = styled.div`
  animation: 1.5s ${fadeInAnimation};
`

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

  const stillLifeDataPages: TypesStillLifeDataPages[] = [
    { path: `/portfolio/still_life/1`, name: 1, source: '', class: styles.listItems, func: setOnePage },
    { path: '/portfolio/still_life/2', name: 2, source: '', class: styles.listItems, func: setTwoPage },
  ]

  const Content = () => {
    return (
      <>
        <WidgetPages handleClickStart={handleClickStart} handleClickBack={handleClickBack} handleClickForward={handleClickForward} handleClickEnd={handleClickEnd} callFuncLoading={() => callFuncLoading(setLoading)} dataPages={stillLifeDataPages} />
        <div className={styles.container}>
          {stillLifeWorksDisplayedData.map((item, i) => (
            <AnimationContainer key={i}>
              <div className={`${styles.wrapperImg}`}>
                <img className={`${item.class} lozad`} src={item.source} alt={item.name} />
              </div>
            </AnimationContainer>
          ))}
        </div >
      </>
    )
  }

  return (
    loading ? <Spinner /> : <Content />
  )
}

export default StillLife
