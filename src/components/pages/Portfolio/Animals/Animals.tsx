import React, { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

import { useAnimalStore } from '../../../../store/store'

import { WidgetPages } from "../additionalUI/unorderedListPages/WidgetPages.tsx";

import styles from '../styles/mainStylesPictures.module.scss'
import { Spinner } from "../../../spinner/Spinner.tsx";

import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

import { callFuncLoading, goBack, animalsForward, goStart, animalsEnd, testData } from "../additionalUI/functions.ts"

interface TypesAnimalsDataPages {
  path: string
  name: number
  source: string
  class: string
  func: () => void
}

const pathAnimals = '/portfolio/animals/'

const fadeInAnimation = keyframes`${fadeIn}`
const AnimationContainer = styled.div`
  animation: 1.5s ${fadeInAnimation};
`

const Animals = () => {
  const [loading, setLoading] = useState(false)
  const animalDisplayedData = useAnimalStore(state => state.animalDisplayedData);

  const setPrevPage = useAnimalStore(state => state.setPrevPage)
  const setNextPage = useAnimalStore(state => state.setNextPage)
  const setVisibleDisplay = useAnimalStore(state => state.setVisibleDisplay)

  const setOnePage = useAnimalStore(state => state.setOnePage)
  const setTwoPage = useAnimalStore(state => state.setTwoPage)
  const setThreePage = useAnimalStore(state => state.setThreePage)
  const setFourPage = useAnimalStore(state => state.setFourPage)
  const setFivePage = useAnimalStore(state => state.setFivePage)
  const setSixPage = useAnimalStore(state => state.setSixPage)

  const navigate = useNavigate()
  const location = useLocation()

  const pathName: string = location.pathname.slice(0, 19)
  const idTest: number = +location.pathname.slice(19, 21)

  const handleClickBack = () => {
    goBack(setLoading, `${pathAnimals}1`, setOnePage, setPrevPage, setVisibleDisplay, navigate, pathName, idTest)
  }

  const handleClickForward = () => {
    animalsForward(setLoading, `${pathAnimals}6`, setNextPage, setVisibleDisplay, navigate, pathName, idTest, setSixPage)
  }

  const handleClickStart = () => {
    goStart(setLoading, `${pathAnimals}1`, setOnePage, navigate)
  }

  const handleClickEnd = () => {
    animalsEnd(setLoading, `${pathAnimals}6`, setSixPage, navigate)
  }

  const animalsDataPages: TypesAnimalsDataPages[] = [
    { path: `/portfolio/animals/1`, name: 1, source: '', class: styles.listItems, func: setOnePage },
    { path: '/portfolio/animals/2', name: 2, source: '', class: styles.listItems, func: setTwoPage },
    { path: '/portfolio/animals/3', name: 3, source: '', class: styles.listItems, func: setThreePage },
    { path: '/portfolio/animals/4', name: 4, source: '', class: styles.listItems, func: setFourPage },
    { path: '/portfolio/animals/5', name: 5, source: '', class: styles.listItems, func: setFivePage },
    { path: '/portfolio/animals/6', name: 6, source: '', class: styles.listItems, func: setSixPage },
  ]

  const arr = testData(styles.listItems, setOnePage, setTwoPage, setThreePage, setFourPage, setFivePage, setSixPage)
  console.log(arr)

  const Content = () => {
    return (
      <>
        <WidgetPages handleClickStart={handleClickStart} handleClickBack={handleClickBack} handleClickForward={handleClickForward} handleClickEnd={handleClickEnd} callFuncLoading={() => callFuncLoading(setLoading)} dataPages={animalsDataPages} />
        <div className={styles.container}>
          {animalDisplayedData.map((item, i) => (
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

export default Animals
