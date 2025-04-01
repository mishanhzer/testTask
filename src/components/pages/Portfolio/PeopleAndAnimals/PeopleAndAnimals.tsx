import React, { useState } from "react";
import { useLocation } from 'react-router-dom';

import { usePeopleAndAnimalsStore } from '../../../../store/store'

import { WidgetPages } from "../additionalUI/unorderedListPages/WidgetPages.tsx";

import styles from '../styles/mainStylesPictures.module.scss'
import { Spinner } from "../../../spinner/Spinner.tsx";

import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

import { callFuncLoading, expirementalFunc } from "../additionalUI/functions.ts"

interface TypesAnimalsDataPages {
  path: string
  name: number
  source: string
  class: string
  func: () => void
}

const fadeInAnimation = keyframes`${fadeIn}`
const AnimationContainer = styled.div`
  animation: 1.5s ${fadeInAnimation};
`

const PeopleAndAnimals = () => {
  const [loading, setLoading] = useState(false)
  const peopleAndAnimalsDisplayedData = usePeopleAndAnimalsStore(state => state.peopleAndAnimalsDisplayedData);

  const setOnePage = usePeopleAndAnimalsStore(state => state.setOnePage)

  const location = useLocation()

  const idTest: number = +location.pathname.slice(30, 31)

  const goBack = () => {
    expirementalFunc(setLoading, idTest, setOnePage)
  }

  const goForward = () => {
    expirementalFunc(setLoading, idTest, setOnePage)
  }

  const goStart = () => {
    expirementalFunc(setLoading, idTest, setOnePage)
  }

  const goEnd = () => {
    expirementalFunc(setLoading, idTest, setOnePage)
  }

  const animalsDataPages: TypesAnimalsDataPages[] = [
    { path: `/portfolio/people_and_animals/1`, name: 1, source: '', class: styles.listItems, func: setOnePage },
  ]

  const Content = () => {
    return (
      <>
        <WidgetPages goStart={goStart} goBack={goBack} goForward={goForward} goEnd={goEnd} callFuncLoading={() => callFuncLoading(setLoading)} animalsDataPages={animalsDataPages} />
        <div className={styles.container}>
          {peopleAndAnimalsDisplayedData.map((item, i) => (
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

export default PeopleAndAnimals
