import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

import NavigateFunction from "react-router-dom/es/Navigate"
import { get } from 'http';

type TypeLoading = (value: React.SetStateAction<boolean>) => void
type TypeStateFunc  = () => void

// 1. Функции, которые адаптированы под все блоки картин

export const goBack = (pathPictures: string, getAnimalsFirstPage: TypeStateFunc, getPrevAnimals: TypeStateFunc, setVisibleDisplay: TypeStateFunc, navigate: NavigateFunction, pathName: string, idTest: number) => {
  if (idTest - 1 <= 1) {
    navigate(pathPictures)
  } else {
    navigate(`${pathName}${idTest - 1}`)
  }
}

export const testBack = () => {

}

export const goStart = (pathPictures: string, getAnimalsFirstPage: TypeStateFunc, navigate: NavigateFunction) => {
  navigate(pathPictures)
}

// 2. Анимация показа картин
const fadeInAnimation = keyframes`${fadeIn}`
export const AnimationContainer = styled.div`
  animation: 1.5s ${fadeInAnimation};
`;

export const AnimationSinglePicture = styled.div`
  animation: 0.5s ${fadeInAnimation}
`;

// 3. Данные животных
export const animalsDataPages = (path: string, styles: string, getAnimalsFirstPage: TypeStateFunc, getAnimalsSecondPage: TypeStateFunc, getAnimalsThirdPage: TypeStateFunc, getAnimalsFourthPage: TypeStateFunc, getAnimalsFifthPage: TypeStateFunc, getAnimalsSixthPage: TypeStateFunc) => {
  return [
    { path: `${path}1`, name: 1, source: '', class: styles, func: getAnimalsFirstPage },
    { path: `${path}2`, name: 2, source: '', class: styles, func: getAnimalsSecondPage},
    { path: `${path}3`, name: 3, source: '', class: styles, func: getAnimalsThirdPage },
    { path: `${path}4`, name: 4, source: '', class: styles, func: getAnimalsFourthPage },
    { path: `${path}5`, name: 5, source: '', class: styles, func: getAnimalsFifthPage },
    { path: `${path}6`, name: 6, source: '', class: styles, func: getAnimalsSixthPage },
  ]
}

// Функции виджета животных
export const animalsForward = (pathPictures: string, getNextAnimals: TypeStateFunc, setVisibleDisplay: TypeStateFunc, navigate: NavigateFunction, pathName: string, idTest: number, getAnimalsSixthPage: TypeStateFunc) => {
  if (idTest + 1 >= 6) {
    getAnimalsSixthPage()
    navigate(pathPictures)
  } else {
    /* setNextPage(); */
    setVisibleDisplay()
    navigate(`${pathName}${idTest + 1}`)
  }
}

export const animalsEnd = (pathPictures: string, getAnimalsSixthPage: TypeStateFunc, navigate: NavigateFunction) => {
  navigate(pathPictures)
  getAnimalsSixthPage();
}

// 4. Данные цветов
export const flowersDataPages = (path: string, styles: string, getFlowersFirstPage: TypeStateFunc, getFlowersSecondPage: TypeStateFunc, getFlowersThirdPage: TypeStateFunc) => {
  return [
    { path: `${path}1`, name: 1, source: '', class: styles, func: getFlowersFirstPage },
    { path: `${path}2`, name: 2, source: '', class: styles, func: getFlowersSecondPage },
    { path: `${path}3`, name: 3, source: '', class: styles, func: getFlowersThirdPage },
  ]
}

// Функции виджета цветов
export const flowersForward = (pathPictures: string, getNextFlowers: TypeStateFunc, setVisibleDisplay: TypeStateFunc, navigate: NavigateFunction, pathName: string, idTest: number, getFlowersThirdPage: TypeStateFunc) => {
  if (idTest + 1 >= 3) {
    getFlowersThirdPage()
    navigate(pathPictures)
  } else {
    /* getNextFlowers(); */
    setVisibleDisplay()
    navigate(`${pathName}${idTest + 1}`)
  }
}

export const flowersEnd = (pathPictures: string, getFlowersThirdPage: TypeStateFunc, navigate: NavigateFunction) => {
  navigate(pathPictures)
  getFlowersThirdPage();
}


// 5. Данные люди и животные
export const peopleAndAnimalsDataPages = (path: string, styles: string, setOnePage: TypeStateFunc) => {
  return [
    { path: `${path}1`, name: 1, source: '', class: styles, func: setOnePage },
  ]
}

// Функции виджета люди и животные
export const peopleAndAnimalsFunc = (idTest: number, setOnePage: TypeStateFunc) => { // экспериментальная функция расчитана на одну страницу, когда будет больше страниц необходимо изменить функционал
  if (idTest) {
    setOnePage()
  }
}

// 6. Данные натюрморт
export const stillLifeDataPages = (path: string, styles: string, setOnePage: TypeStateFunc, setTwoPage: TypeStateFunc) => {
  return [
    { path: `${path}1`, name: 1, source: '', class: styles, func: setOnePage },
    { path: `${path}2`, name: 2, source: '', class: styles, func: setTwoPage },
  ]
}

// Функции виджета натюрморт
export const stillLifeForward = (pathPictures: string, setNextPage: TypeStateFunc, setVisibleDisplay: TypeStateFunc, navigate: NavigateFunction, pathName: string, idTest: number, setTwoPage: TypeStateFunc) => {
  if (idTest + 1 >= 2) {
    setTwoPage()
    navigate(pathPictures)
  } else {
    setNextPage();
    setVisibleDisplay()
    navigate(`${pathName}${idTest + 1}`)
  }
}

export const stillLifeEnd = (pathPictures: string, setTwoPage: TypeStateFunc, navigate: NavigateFunction) => {
  navigate(pathPictures)
  setTwoPage();
}



// import styled, { keyframes } from 'styled-components';
// import { fadeIn } from 'react-animations';

// import NavigateFunction from "react-router-dom/es/Navigate"

// type TypeLoading = (value: React.SetStateAction<boolean>) => void
// type TypeStateFunc  = () => void

// // 1. Функции, которые адаптированы под все блоки картин
// export const callFuncLoading = (setLoading: TypeLoading) => {
//   setLoading(true)
//   setTimeout(() => { setLoading(false) }, 200)
// }

// export const goBack = (setLoading: TypeLoading, pathPictures: string, setOnePage: TypeStateFunc, setPrevPage: TypeStateFunc, setVisibleDisplay: TypeStateFunc, navigate: NavigateFunction, pathName: string, idTest: number) => {
//   callFuncLoading(setLoading)
//   if (idTest - 1 <= 1) {
//     setOnePage()
//     navigate(pathPictures)
//   } else {
//     setPrevPage()
//     setVisibleDisplay()
//     navigate(`${pathName}${idTest - 1}`)
//   }
// }

// export const goStart = (setLoading: TypeLoading, pathPictures: string, setOnePage: TypeStateFunc, navigate: NavigateFunction) => {
//   callFuncLoading(setLoading)
//   navigate(pathPictures)
//   setOnePage()
// }

// // 2. Анимация показа картин
// const fadeInAnimation = keyframes`${fadeIn}`
// export const AnimationContainer = styled.div`
//   animation: 1.5s ${fadeInAnimation};
// `;

// export const AnimationSinglePicture = styled.div`
//   animation: 0.5s ${fadeInAnimation}
// `;

// // 3. Данные животных
// export const animalsDataPages = (path: string, styles: string, setOnePage: TypeStateFunc, setTwoPage: TypeStateFunc, setThreePage: TypeStateFunc, setFourPage: TypeStateFunc, setFivePage: TypeStateFunc, setSixPage: TypeStateFunc) => {
//   return [
//     { path: `${path}1`, name: 1, source: '', class: styles, func: setOnePage },
//     { path: `${path}2`, name: 2, source: '', class: styles, func: setTwoPage },
//     { path: `${path}3`, name: 3, source: '', class: styles, func: setThreePage },
//     { path: `${path}4`, name: 4, source: '', class: styles, func: setFourPage },
//     { path: `${path}5`, name: 5, source: '', class: styles, func: setFivePage },
//     { path: `${path}6`, name: 6, source: '', class: styles, func: setSixPage },
//   ]
// }

// // Функции виджета животных
// export const animalsForward = (setLoading: TypeLoading, pathPictures: string, setNextPage: TypeStateFunc, setVisibleDisplay: TypeStateFunc, navigate: NavigateFunction, pathName: string, idTest: number, setSixPage: TypeStateFunc) => {
//   callFuncLoading(setLoading)
//   if (idTest + 1 >= 6) {
//     setSixPage()
//     navigate(pathPictures)
//   } else {
//     setNextPage();
//     setVisibleDisplay()
//     navigate(`${pathName}${idTest + 1}`)
//   }
// }

// export const animalsEnd = (setLoading: TypeLoading, pathPictures: string, setSixPage: TypeStateFunc, navigate: NavigateFunction) => {
//   callFuncLoading(setLoading)
//   navigate(pathPictures)
//   setSixPage();
// }

// // 4. Данные цветов
// export const flowersDataPages = (path: string, styles: string, setOnePage: TypeStateFunc, setTwoPage: TypeStateFunc, setThreePage: TypeStateFunc) => {
//   return [
//     { path: `${path}1`, name: 1, source: '', class: styles, func: setOnePage },
//     { path: `${path}2`, name: 2, source: '', class: styles, func: setTwoPage },
//     { path: `${path}3`, name: 3, source: '', class: styles, func: setThreePage },
//   ]
// }

// // Функции виджета цветов
// export const flowersForward = (setLoading: TypeLoading, pathPictures: string, setNextPage: TypeStateFunc, setVisibleDisplay: TypeStateFunc, navigate: NavigateFunction, pathName: string, idTest: number, setThreePage: TypeStateFunc) => {
//   callFuncLoading(setLoading)
//   if (idTest + 1 >= 3) {
//     setThreePage()
//     navigate(pathPictures)
//   } else {
//     setNextPage();
//     setVisibleDisplay()
//     navigate(`${pathName}${idTest + 1}`)
//   }
// }

// export const flowersEnd = (setLoading: TypeLoading, pathPictures: string, setThreePage: TypeStateFunc, navigate: NavigateFunction) => {
//   callFuncLoading(setLoading)
//   navigate(pathPictures)
//   setThreePage();
// }


// // 5. Данные люди и животные
// export const peopleAndAnimalsDataPages = (path: string, styles: string, setOnePage: TypeStateFunc) => {
//   return [
//     { path: `${path}1`, name: 1, source: '', class: styles, func: setOnePage },
//   ]
// }

// // Функции виджета люди и животные
// export const peopleAndAnimalsFunc = (setLoading: TypeLoading, idTest: number, setOnePage: TypeStateFunc) => { // экспериментальная функция расчитана на одну страницу, когда будет больше страниц необходимо изменить функционал
//   callFuncLoading(setLoading)
//   if (idTest) {
//     setOnePage()
//   }
// }

// // 6. Данные натюрморт
// export const stillLifeDataPages = (path: string, styles: string, setOnePage: TypeStateFunc, setTwoPage: TypeStateFunc) => {
//   return [
//     { path: `${path}1`, name: 1, source: '', class: styles, func: setOnePage },
//     { path: `${path}2`, name: 2, source: '', class: styles, func: setTwoPage },
//   ]
// }

// // Функции виджета натюрморт
// export const stillLifeForward = (setLoading: TypeLoading, pathPictures: string, setNextPage: TypeStateFunc, setVisibleDisplay: TypeStateFunc, navigate: NavigateFunction, pathName: string, idTest: number, setTwoPage: TypeStateFunc) => {
//   callFuncLoading(setLoading)
//   if (idTest + 1 >= 2) {
//     setTwoPage()
//     navigate(pathPictures)
//   } else {
//     setNextPage();
//     setVisibleDisplay()
//     navigate(`${pathName}${idTest + 1}`)
//   }
// }

// export const stillLifeEnd = (setLoading: TypeLoading, pathPictures: string, setTwoPage: TypeStateFunc, navigate: NavigateFunction) => {
//   callFuncLoading(setLoading)
//   navigate(pathPictures)
//   setTwoPage();
// }
