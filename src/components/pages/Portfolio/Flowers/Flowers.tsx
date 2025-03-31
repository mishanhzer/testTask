import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

import { useFlowersStore } from '../../../../store/store'

import { arrowPages, doubleArrowPages } from "../../../../assets/logo/logo";

import { activeClassPage } from './styles/activeClassPage.ts'

import styles from './styles/animals.module.scss'
import { Spinner } from "../../../spinner/Spinner.tsx";

import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

interface TypesFlowersDataPages {
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

const pathFlowers = '/portfolio/flowers/'

const fadeInAnimation = keyframes`${fadeIn}`
const AnimationContainer = styled.div`
  animation: 1.5s ${fadeInAnimation};
`

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

  const callFuncLoading = () => {
    setLoading(true)
    setTimeout(() => { setLoading(false) }, 200)
  }

  const goBack = () => {
    callFuncLoading()
    if (idTest - 1 <= 1) {
      setOnePage()
      navigate(`${pathFlowers}1`)
    } else {
      setPrevPage()
      setVisibleDisplay()
      navigate(`${pathName}${idTest - 1}`)
    }
  }

  const goForward = () => {
    callFuncLoading()
    if (idTest + 1 >= 3) {
      setThreePage()
      navigate(`${pathFlowers}3`)
    } else {
      setNextPage();
      setVisibleDisplay()
      navigate(`${pathName}${idTest + 1}`)
    }
  }

  const goStart = () => {
    callFuncLoading()
    navigate(`${pathFlowers}1`)
    setOnePage()
  }

  const goEnd = () => {
    callFuncLoading()
    navigate(`${pathFlowers}3`)
    setThreePage();
  }

  const animalsDataPages: TypesFlowersDataPages[] = [
    { path: `/portfolio/flowers/1`, name: 1, source: '', class: styles.listItems, func: setOnePage },
    { path: '/portfolio/flowers/2', name: 2, source: '', class: styles.listItems, func: setTwoPage },
    { path: '/portfolio/flowers/3', name: 3, source: '', class: styles.listItems, func: setThreePage },
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
          {flowersWorksDisplayedData.map((item, i) => (
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

const AnimalsListItemsPage = ({ data, callFuncLoading }: { data: TypesFlowersDataPages[], callFuncLoading: () => void }) => {
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

export default Flowers
