import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

import { useAnimalStore } from '../../../../store/store'

import { arrowPages, doubleArrowPages } from "../../../../assets/logo/logo";

import { activeClassPage } from './styles/activeClassPage.ts'

import styles from './styles/animals.module.scss'
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


  const callFuncLoading = () => {
    setLoading(true)
    setTimeout(() => { setLoading(false) }, 200)
  }

  const goBack = () => {
    callFuncLoading()
    if (idTest - 1 <= 1) {
      setOnePage()
      navigate(`${pathAnimals}1`)
    } else {
      setPrevPage()
      setVisibleDisplay()
      navigate(`${pathName}${idTest - 1}`)
    }
  }

  const goForward = () => {
    callFuncLoading()
    if (idTest + 1 >= 6) {
      setSixPage()
      navigate(`${pathAnimals}6`)
    } else {
      setNextPage();
      setVisibleDisplay()
      navigate(`${pathName}${idTest + 1}`)
    }
  }

  const goStart = () => {
    callFuncLoading()
    navigate(`${pathAnimals}1`)
    setOnePage()
  }

  const goEnd = () => {
    callFuncLoading()
    navigate(`${pathAnimals}6`)
    setSixPage();
  }

  const animalsDataPages: TypesAnimalsDataPages[] = [
    { path: `/portfolio/animals/1`, name: 1, source: '', class: styles.listItems, func: setOnePage },
    { path: '/portfolio/animals/2', name: 2, source: '', class: styles.listItems, func: setTwoPage },
    { path: '/portfolio/animals/3', name: 3, source: '', class: styles.listItems, func: setThreePage },
    { path: '/portfolio/animals/4', name: 4, source: '', class: styles.listItems, func: setFourPage },
    { path: '/portfolio/animals/5', name: 5, source: '', class: styles.listItems, func: setFivePage },
    { path: '/portfolio/animals/6', name: 6, source: '', class: styles.listItems, func: setSixPage },
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

export default Animals
