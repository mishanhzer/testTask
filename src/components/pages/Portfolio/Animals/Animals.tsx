import React, { useState } from "react";
import { NavLink, useNavigate, useLocation, useParams } from 'react-router-dom';

import { useAnimalStore } from '../../../../store/store'

import { classNamesLinkAndButton } from '../../../UI_kits/styles/stylesUI_kits'
import { arrowPages, doubleArrowPages } from "../../../../assets/logo/logo";
import { TypesDataWorks } from "../../../../assets/images/works/allWorks/AllWorks";

import { activeClassPage, btnLoadMore } from './styles/activeClassPage.ts'

import styles from './styles/animals.module.scss'
import { Spinner } from "../../../spinner/Spinner.tsx";

import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

interface TypesAnimals {
  animalWorks: TypesDataWorks[]
  animalDisplayedData: TypesDataWorks[]
  handleAnimalLoadMore: () => void
}

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

const Animals = ({ animalWorks, handleAnimalLoadMore }: TypesAnimals) => {
  const [loading, setLoading] = useState(false)
  const animalDisplayedData = useAnimalStore(state => state.animalDisplayedData);

  const setTestPrev = useAnimalStore(state => state.setTestPrev)
  const setTestNext = useAnimalStore(state => state.setTestNext)
  const setTestDisplay = useAnimalStore(state => state.setTestDisplay)

  const setTestOne = useAnimalStore(state => state.setTestOne)
  const setTestTwo = useAnimalStore(state => state.setTestTwo)
  const setTestThree = useAnimalStore(state => state.setTestThree)
  const setTestFour = useAnimalStore(state => state.setTestFour)
  const setTestFive = useAnimalStore(state => state.setTestFive)
  const setTestSix = useAnimalStore(state => state.setTestSix)

  const navigate = useNavigate()
  const location = useLocation()

  const pathName: string = location.pathname.slice(0, 19)
  const idTest: number = +location.pathname.slice(19, 21)

  const disableCondition = animalDisplayedData[animalDisplayedData.length - 1].id === animalWorks.length - 1

  const callFuncLoading = () => {
    setLoading(true)
    setTimeout(() => { setLoading(false) }, 200)
  }

  const goBack = () => {
    callFuncLoading()
    if (idTest - 1 <= 1) {
      setTestOne()
      navigate(`${pathAnimals}1`)
    } else {
      setTestPrev()
      setTestDisplay()
      navigate(`${pathName}${idTest - 1}`)
    }
  }

  const goForward = () => {
    callFuncLoading()
    if (idTest + 1 >= 6) {
      setTestSix()
      navigate(`${pathAnimals}6`)
    } else {
      setTestNext();
      setTestDisplay()
      navigate(`${pathName}${idTest + 1}`)
    }
  }

  const goStart = () => {
    callFuncLoading()
    navigate(`${pathAnimals}1`)
    setTestOne()
  }

  const goEnd = () => {
    callFuncLoading()
    navigate(`${pathAnimals}6`)
    setTestSix();
  }

  const animalsDataPages: TypesAnimalsDataPages[] = [
    { path: `/portfolio/animals/1`, name: 1, source: '', class: styles.listItems, func: setTestOne },
    { path: '/portfolio/animals/2', name: 2, source: '', class: styles.listItems, func: setTestTwo },
    { path: '/portfolio/animals/3', name: 3, source: '', class: styles.listItems, func: setTestThree },
    { path: '/portfolio/animals/4', name: 4, source: '', class: styles.listItems, func: setTestFour },
    { path: '/portfolio/animals/5', name: 5, source: '', class: styles.listItems, func: setTestFive },
    { path: '/portfolio/animals/6', name: 6, source: '', class: styles.listItems, func: setTestSix },
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
          <button
            disabled={disableCondition ? true : false}
            onClick={handleAnimalLoadMore}
            className={`${styles.btn} ${classNamesLinkAndButton} ${btnLoadMore}`}
          >Показать еще
          </button>
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
