import React, { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

import { useStillLifeStore } from '../../../../store/store'

import { WidgetPages } from "../additionalUI/unorderedListPages/WidgetPages.tsx";

import styles from './styles/animals.module.scss'
import { Spinner } from "../../../spinner/Spinner.tsx";

import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

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

  const callFuncLoading = () => {
    setLoading(true)
    setTimeout(() => { setLoading(false) }, 200)
  }

  const goBack = () => {
    callFuncLoading()
    if (idTest - 1 <= 1) {
      setOnePage()
      navigate(`${pathStillLife}1`)
    } else {
      setPrevPage()
      setVisibleDisplay()
      navigate(`${pathName}${idTest - 1}`)
    }
  }

  const goForward = () => {
    callFuncLoading()
    if (idTest + 1 >= 3) {
      setTwoPage()
      navigate(`${pathStillLife}3`)
    } else {
      setNextPage();
      setVisibleDisplay()
      navigate(`${pathName}${idTest + 1}`)
    }
  }

  const goStart = () => {
    callFuncLoading()
    navigate(`${pathStillLife}1`)
    setOnePage()
  }

  const goEnd = () => {
    callFuncLoading()
    navigate(`${pathStillLife}2`)
    setTwoPage();
  }

  const animalsDataPages: TypesStillLifeDataPages[] = [
    { path: `/portfolio/still_life/1`, name: 1, source: '', class: styles.listItems, func: setOnePage },
    { path: '/portfolio/still_life/2', name: 2, source: '', class: styles.listItems, func: setTwoPage },
  ]

  const Content = () => {
    return (
      <>
        <WidgetPages goStart={goStart} goBack={goBack} goForward={goForward} goEnd={goEnd} callFuncLoading={callFuncLoading} animalsDataPages={animalsDataPages} />
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
