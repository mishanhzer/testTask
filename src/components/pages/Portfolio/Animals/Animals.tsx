import React, { useEffect } from "react";
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useTransition, animated } from "@react-spring/web";

import { useAnimalStore } from '../../../../store/store'

import { classNamesLinkAndButton } from '../../../UI_kits/stylesUI_kits'
import { arrowPages, doubleArrowPages } from "../../../../assets/logo/logo";
import { TypesDataWorks } from "../../../../assets/images/works/allWorks/AllWorks";

import { activeClassPage } from './styles/activeClassPage.ts'

import styles from './styles/animals.module.scss'

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

export const Animals = ({ animalWorks, handleAnimalLoadMore }: TypesAnimals) => {
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

  useEffect(() => {
    navigate(`${pathAnimals}1`)
  }, [])

  // const transitions = useTransition(animalDisplayedData, {
  //   from: { opacity: 0, width: 200, transform: "translateY(-100px)" },
  //   enter: { opacity: 1, transform: "translateY(0px)" },
  //   leave: [{ transform: "translateY(100px)", opacity: 0 }, { width: 0 }],
  //   config: {
  //     duration: 750
  //   }
  // });

  // {transitions((style, item) => (
  //     <div className="nameBody">
  //       <animated.div style={style} className="nameDiv">
  //         <img className={`w-56 h-56 lozad`} src={item.source} key={item.name} alt={item.name} />
  //       </animated.div>
  //     </div>
  //   ))

  const pathName = location.pathname.slice(0, 19)
  const idTest = +location.pathname.slice(19, 21)

  const disableCondition = animalDisplayedData[animalDisplayedData.length - 1].id === animalWorks.length - 1

  const goBack = () => {
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
    if (idTest + 1 >= 6) {
      setTestSix()
      navigate(`${pathAnimals}6`)
    } else {
      setTestNext()
      setTestDisplay()
      navigate(`${pathName}${idTest + 1}`)
    }
  }

  const goStart = () => {
    navigate(`${pathAnimals}1`)
    setTestOne()
  }

  const goEnd = () => {
    navigate(`${pathAnimals}6`)
    setTestSix()
  }

  const animalsDataPages: TypesAnimalsDataPages[] = [
    { path: `/portfolio/animals/1`, name: 1, source: '', class: styles.listItems, func: setTestOne },
    { path: '/portfolio/animals/2', name: 2, source: '', class: styles.listItems, func: setTestTwo },
    { path: '/portfolio/animals/3', name: 3, source: '', class: styles.listItems, func: setTestThree },
    { path: '/portfolio/animals/4', name: 4, source: '', class: styles.listItems, func: setTestFour },
    { path: '/portfolio/animals/5', name: 5, source: '', class: styles.listItems, func: setTestFive },
    { path: '/portfolio/animals/6', name: 6, source: '', class: styles.listItems, func: setTestSix },
  ]

  return (
    <>
      <div className={styles.container}>
        {animalDisplayedData.map((item, i) => (
          <img className={`w-56 h-56 lozad`} src={item.source} key={i} alt={item.name} />
        ))}
        <button
          disabled={disableCondition ? true : false}
          onClick={handleAnimalLoadMore}
          className={`${styles.btn} ${classNamesLinkAndButton} mt-8 px-4 w-48 justify-center text-2xl`}
        >Показать еще
        </button>

        <ul className={styles.links}>
          <ButtonNavigate className={styles.listItemOnStart} navigateFunc={goStart} source={doubleArrowPages} />
          <ButtonNavigate className={styles.listItemPrev} navigateFunc={goBack} source={arrowPages} />
          <AnimalsListItemsPage
            data={animalsDataPages}
          />
          <ButtonNavigate className={styles.listItemNext} navigateFunc={goForward} source={arrowPages} />
          <ButtonNavigate className={styles.listItemOnEnd} navigateFunc={goEnd} source={doubleArrowPages} />
        </ul>
      </div>
    </>
  )
}

const ButtonNavigate = ({ className, navigateFunc, source }: TypesButtonNavigate) => {
  return (
    <li className={className}>
      <button onClick={navigateFunc}>
        <img src={source} alt="#" />
      </button>
    </li>
  )
}

const AnimalsListItemsPage = ({ data }: { data: TypesAnimalsDataPages[] }) => {
  return data.map((item) => {
    return (
      <li className={item.class} key={item.name}>
        <NavLink onClick={item.func} style={activeClassPage} to={item.path}>{item.name}</NavLink>
      </li>
    )
  })
}
