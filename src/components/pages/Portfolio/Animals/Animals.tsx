import React from "react";
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

import { useAnimalStore } from '../../../../store/store'

import { classNamesLinkAndButton } from '../../../UI_kits/stylesUI_kits'
import { arrowPages, doubleArrowPages } from "../../../../assets/logo/logo";
import { TypesDataWorks } from "../../../../assets/images/works/allWorks/AllWorks";

import styles from './styles/animals.module.scss'

interface TypesAnimals {
  animalWorks: TypesDataWorks[]
  animalDisplayedData: TypesDataWorks[]
  handleAnimalLoadMore: () => void
}

export const Animals = ({ animalWorks, handleAnimalLoadMore }: TypesAnimals) => {
  const animalDisplayedData = useAnimalStore(state => state.animalDisplayedData);
  console.log(animalDisplayedData)
  const setTestPrev = useAnimalStore(state => state.setTestPrev)
  const setTestNext = useAnimalStore(state => state.setTestNext)
  const setTestDisplay = useAnimalStore(state => state.setTestDisplay)
  const setTestDisplayTest = useAnimalStore(state => state.setTestDisplayTest)
  const setTestDisplayTestik = useAnimalStore(state => state.setTestDisplayTestik)
  const setTestOne = useAnimalStore(state => state.setTestOne)

  const disableCondition = animalDisplayedData[animalDisplayedData.length - 1].category === 'animal' && animalDisplayedData.length - 1 === animalWorks.length - 1

  const location = useLocation()
  const pathName = location.pathname.slice(0, 19)
  const idTest = +location.pathname.slice(19, 21)

  const navigate = useNavigate()

  const goBack = () => {
    if (idTest <= 1) {
      // setTestDisplayTest()
      navigate('/portfolio/animals/1')
    } else {
      setTestPrev()
      setTestDisplay()
      navigate(`${pathName}${idTest - 1}`)
    }
  }

  const goForward = () => {
    if (idTest >= 6) {
      // setTestDisplayTestik()
      navigate('/portfolio/animals/6')
    } else {
      setTestNext()
      setTestDisplay()
      navigate(`${pathName}${idTest + 1}`)
    }
  }

  const goStart = () => {
    navigate('/portfolio/animals/1')
  }

  const goEnd = () => {
    navigate('/portfolio/animals/6')
  }

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
          <AnimalsListItemsPage />
          <ButtonNavigate className={styles.listItemNext} navigateFunc={goForward} source={arrowPages} />
          <ButtonNavigate className={styles.listItemOnEnd} navigateFunc={goEnd} source={doubleArrowPages} />
        </ul>
      </div>
    </>
  )
}

const animalsDataPages = [
  { path: '/portfolio/animals/1', name: 1, source: '', class: styles.listItems },
  { path: '/portfolio/animals/2', name: 2, source: '', class: styles.listItems },
  { path: '/portfolio/animals/3', name: 3, source: '', class: styles.listItems },
  { path: '/portfolio/animals/4', name: 4, source: '', class: styles.listItems },
  { path: '/portfolio/animals/5', name: 5, source: '', class: styles.listItems },
  { path: '/portfolio/animals/6', name: 6, source: '', class: styles.listItems },
]

interface TypesButtonNavigate {
  className: string
  navigateFunc: () => void
  source: string
}

const ButtonNavigate = ({ className, navigateFunc, source }: TypesButtonNavigate) => {
  return (
    <li className={className}>
      <button onClick={navigateFunc}>
        <img src={source} alt="" />
      </button>
    </li>
  )
}

const AnimalsListItemsPage = () => {
  return animalsDataPages.map((item) => {
    return (
      <li className={item.class} key={item.name}>
        <NavLink to={item.path}>{item.name}</NavLink>
      </li>
    )
  })
}



// import React from "react";
// import { NavLink, useNavigate, useLocation, Outlet } from 'react-router-dom';

// import { useAnimalStore } from '../../../../store/store'

// import { classNamesLinkAndButton } from '../../../UI_kits/stylesUI_kits'
// import { arrowPages, doubleArrowPages } from "../../../../assets/logo/logo";
// import { TypesDataWorks } from "../../../../assets/images/works/allWorks/AllWorks";

// import styles from './styles/animals.module.scss'

// interface TypesAnimals {
//   animalWorks: TypesDataWorks[]
//   animalDisplayedData: TypesDataWorks[]
//   handleAnimalLoadMore: () => void
// }

// export const Animals = ({ animalWorks, animalDisplayedData, handleAnimalLoadMore }: TypesAnimals) => {
//   const disableCondition = animalDisplayedData[animalDisplayedData.length - 1].category === 'animal' && animalDisplayedData.length - 1 === animalWorks.length - 1
//   console.log(animalDisplayedData)
//   const location = useLocation()
//   const pathName = location.pathname.slice(0, 19)
//   const idTest = +location.pathname.slice(19, 21)

//   const navigate = useNavigate()

//   const goBack = () => {
//     if (idTest <= 1) {
//       navigate('/portfolio/animals/')
//     } else {
//       navigate(`${pathName}${idTest - 1}`)
//     }
//   }

//   const goForward = () => {
//     if (idTest >= 6) {
//       navigate('/portfolio/animals/6')
//     } else {
//       navigate(`${pathName}${idTest + 1}`)
//     }
//   }

//   const goStart = () => {
//     navigate('/portfolio/animals/')
//   }

//   const goEnd = () => {
//     navigate('/portfolio/animals/6')
//   }

//   return (
//     <>
//       <Outlet />
//       <div className={styles.container}>
//         {animalDisplayedData.map((item, i) => (
//           <img className={`w-56 h-56 lozad`} src={item.source} key={i} alt={item.name} />
//         ))}
//         <button
//           disabled={disableCondition ? true : false}
//           onClick={handleAnimalLoadMore}
//           className={`${styles.btn} ${classNamesLinkAndButton} mt-8 px-4 w-48 justify-center text-2xl`}
//         >Показать еще
//         </button>

//         <ul className={styles.links}>
//           <ButtonNavigate className={styles.listItemOnStart} navigateFunc={goStart} source={doubleArrowPages} />
//           <ButtonNavigate className={styles.listItemPrev} navigateFunc={goBack} source={arrowPages} />
//           <AnimalsListItemsPage />
//           <ButtonNavigate className={styles.listItemNext} navigateFunc={goForward} source={arrowPages} />
//           <ButtonNavigate className={styles.listItemOnEnd} navigateFunc={goEnd} source={doubleArrowPages} />
//         </ul>
//       </div>
//     </>
//   )
// }

// const animalsDataPages = [
//   { path: '/portfolio/animals/1', name: 1, source: '', class: styles.listItems },
//   { path: '/portfolio/animals/2', name: 2, source: '', class: styles.listItems },
//   { path: '/portfolio/animals/3', name: 3, source: '', class: styles.listItems },
//   { path: '/portfolio/animals/4', name: 4, source: '', class: styles.listItems },
//   { path: '/portfolio/animals/5', name: 5, source: '', class: styles.listItems },
//   { path: '/portfolio/animals/6', name: 6, source: '', class: styles.listItems },
// ]

// interface TypesButtonNavigate {
//   className: string
//   navigateFunc: () => void
//   source: string
// }

// const ButtonNavigate = ({ className, navigateFunc, source }: TypesButtonNavigate) => {
//   return (
//     <li className={className}>
//       <button onClick={navigateFunc}>
//         <img src={source} alt="" />
//       </button>
//     </li>
//   )
// }

// const AnimalsListItemsPage = () => {
//   return animalsDataPages.map((item) => {
//     return (
//       <li className={item.class} key={item.name}>
//         <NavLink to={item.path}>{item.name}</NavLink>
//       </li>
//     )
//   })
// }