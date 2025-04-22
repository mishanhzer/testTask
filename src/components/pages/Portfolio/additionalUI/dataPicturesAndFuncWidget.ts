import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

type TypeStateFunc  = () => void

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

// 4. Данные цветов
export const flowersDataPages = (path: string, styles: string, getFlowersFirstPage: TypeStateFunc, getFlowersSecondPage: TypeStateFunc, getFlowersThirdPage: TypeStateFunc) => {
  return [
    { path: `${path}1`, name: 1, source: '', class: styles, func: getFlowersFirstPage },
    { path: `${path}2`, name: 2, source: '', class: styles, func: getFlowersSecondPage },
    { path: `${path}3`, name: 3, source: '', class: styles, func: getFlowersThirdPage },
  ]
}

// 5. Данные люди и животные
export const peopleAndAnimalsDataPages = (path: string, styles: string, setOnePage: TypeStateFunc) => {
  return [
    { path: `${path}1`, name: 1, source: '', class: styles, func: setOnePage },
  ]
}

// 6. Данные натюрморт
export const stillLifeDataPages = (path: string, styles: string, setOnePage: TypeStateFunc, setTwoPage: TypeStateFunc) => {
  return [
    { path: `${path}1`, name: 1, source: '', class: styles, func: setOnePage },
    { path: `${path}2`, name: 2, source: '', class: styles, func: setTwoPage },
  ]
}
