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

export const positionModalTest = (style: string, position: string) => {
    switch (position) {
      case 'akitoInu.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'beagle.jpg': return `${style} scale-[1.4]`
      case 'blueAndYellowMacaw.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'bluebirdsOnFloweringBranch.jpg': return `${style} scale-[1.4]`
      case 'cat.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'catMischievous.jpg': return `${style} scale-[1.4]`
      case 'catWithGreenEyes.jpg': return `${style} scale-[1.4]`
      case 'catsInLibrary.jpg': return `${style} scale-[1.4]`
      case 'domesticCat.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'flight.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'fluffyJoy.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'fox.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'goldfish.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'greenWingedMacaw.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'hedgehog.jpg': return `${style} mt-[-75px] scale-[1.4]`
      case 'horse.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'horseAndFoal.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'junonia.jpg': return `${style} scale-[1.4]`
      case 'ladybugOnForgetMeNots.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'ladybugs.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'leopard.jpg': return `${style} scale-[1.4]`
      case 'leopardAtWateringHole.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'leopardsAtSunset.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'leopardsGaze.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'lionFamily.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'lionessAndLionCub.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'littleRedPanda.jpg': return `${style} scale-[1.4]`
      case 'lynx.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'makhaon.jpg': return `${style} scale-[1.4]`
      case 'monarch.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'ocelot.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'peacocksEye.jpg': return `${style} scale-[1.4]`
      case 'pomeranian.jpg': return `${style} scale-[1.4]`
      case 'puma.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'redCatOnTheFence.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'redHorse.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'snailOnStrawberry.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'snowLeopard.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'spaniel.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'squirrel.jpg': return `${style} scale-[1.4]`
      case 'swans.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'tiger.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'tigerGaze.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'tigerHost.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'tigerInTheTicket.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'toyger.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'whiteEagle.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'wolf.jpg': return `${style} mt-[-150px] scale-[1.2]`

      case 'blueIrises.jpg': return `${style} mt-[-175px] scale-[1.1]`
      case 'branchOfLilac.jpg': return `${style} mt-[-50px] scale-[1.4]`
      case 'brightPeonies.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'brightTulips.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'delicateRose.jpg': return `${style} mt-[-100px] scale-[1.4]`
      case 'delicateScentOfPeonies.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'delicateTulips.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'eveningFlowers.jpg': return `${style} mt-[-175px] scale-[1.1]`
      case 'flowersForBeloved.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'flowersMood.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'irises.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'largePeonies.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'luxuriousPeonies.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'narcissists.jpg': return `${style} mt-[-50px] scale-[1.4]`
      case 'peoniesByTheWindow.jpg': return `${style} scale-[1.4]`
      case 'peonyFestival.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'pinkBlooming.jpg': return `${style} scale-[1.4]`
      case 'pinkPeonies.jpg': return `${style} scale-[1.4]`
      case 'pinkTenderness.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'redFowersAtSunset.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'roseInGarden.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'yellowRose.jpg': return `${style} scale-[1.4]`

      case 'daisiesOnOldSuitcase.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'delicateHydrangea.jpg': return `${style} mt-[-125px] scale-[1.2]`
      case 'grapefruits.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'hydrangea.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'lemonsOrangesLimes.jpg': return `${style} scale-[1.4]`
      case 'orangeJuiceFresh.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'peoniesByTheWindow.jpg': return `${style} scale-[1.4]`
      case 'stillLifeWithBookAndKeys.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'stillLifeWithChamomileAndStrawberry.jpg': return `${style} scale-[1.4]`
      case 'stillLifeWithChrysanthemumsAndFruits.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'stillLifeWithFigsAndGrapes.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'stillLifeWithGreenGrapes.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'stillLifeWithLemons.jpg': return `${style} scale-[1.4]`
      case 'stillLifeWithPeach.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'stillLifeWithPomegranates.jpg': return `${style} mt-[-175px] scale-[1.2]`
      case 'stillLifeWithSamovar.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'wildflowersInAVase.jpg': return `${style} scale-[1.4]`
      case 'wineAndFruits.jpg': return `${style} mt-[-175px] scale-[1.2]`

      case 'belovedBaby.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'bestFriend.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'girlAndCat.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'girlAndDucklings.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'girlWithDog.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'girlWithHorse.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'letsSingMyFriend.jpg': return `${style} mt-[-150px] scale-[1.2]`
      case 'theGirlWithTheWhiteRabbits.jpg': return `${style} mt-[-150px] scale-[1.2]`
    }
  }
