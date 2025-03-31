import React, { useState } from "react";
import { NavLink, useLocation } from 'react-router-dom';

import { usePeopleAndAnimalsStore } from '../../../../store/store'

import { arrowPages, doubleArrowPages } from "../../../../assets/logo/logo";

import { activeClassPage } from './styles/activeClassPage.ts'

import styles from './styles/peopleAndAnimals.module.scss'
import { Spinner } from "../../../spinner/Spinner.tsx";

import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';


interface TypesAnimalsDataPages {
  path: string
  name: number
  source: string
  class: string
  func: () => void
}

interface TypesButtonNavigate {
  className: string
  navigateFunc: () => void
  source: string
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

  const callFuncLoading = () => {
    setLoading(true)
    setTimeout(() => { setLoading(false) }, 200)
  }

  const goBack = () => {
    callFuncLoading()
    if (idTest) {
      setOnePage()
    }
  }

  const goForward = () => {
    callFuncLoading()
    if (idTest) {
      setOnePage()
    }
  }

  const goStart = () => {
    callFuncLoading()
    if (idTest) {
      setOnePage()
    }
  }

  const goEnd = () => {
    callFuncLoading()
    if (idTest) {
      setOnePage()
    }
  }

  const animalsDataPages: TypesAnimalsDataPages[] = [
    { path: `/portfolio/people_and_animals/1`, name: 1, source: '', class: styles.listItems, func: setOnePage },
  ]

  const Content = () => {
    return (
      <>
        <ul className={styles.links}>
          <ButtonNavigate className={styles.listItemOnStart} navigateFunc={goStart} source={doubleArrowPages} />
          <ButtonNavigate className={styles.listItemPrev} navigateFunc={goBack} source={arrowPages} />
          <AnimalsListItemsPage
            callFuncLoading={callFuncLoading}
            data={animalsDataPages}
          />
          <ButtonNavigate className={styles.listItemNext} navigateFunc={goForward} source={arrowPages} />
          <ButtonNavigate className={styles.listItemOnEnd} navigateFunc={goEnd} source={doubleArrowPages} />
        </ul>

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

const ButtonNavigate = ({ className, navigateFunc, source }: TypesButtonNavigate) => {
  return (
    <li className={className}>
      <button
        tabIndex={0}
        onClick={navigateFunc}
      >
        <img src={source} alt="#" />
      </button>
    </li>
  )
}

const AnimalsListItemsPage = ({ data, callFuncLoading }: { data: TypesAnimalsDataPages[], callFuncLoading: () => void }) => {
  return data.map((item) => {
    const showSpinner = () => {
      callFuncLoading()
      item.func()
    }

    return (
      <li className={item.class} key={item.name}>
        <NavLink onClick={showSpinner} style={activeClassPage} to={item.path}>{item.name}</NavLink>
      </li>
    )
  })
}

export default PeopleAndAnimals
