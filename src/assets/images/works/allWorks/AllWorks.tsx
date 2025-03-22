import React from 'react';
import lozad from 'lozad';

import akitoInuImg from './akitoInu.jpg' // +
import beagleImg from './beagle.jpg' // +
import belovedBabyImg from './belovedBaby.jpg' // +
import bestFriendImg from './bestFriend.jpg' // +
import blueAndYellowMacawImg from './blueAndYellowMacaw.jpg' // +
import blueBirdsOnFloweringBranchImg from './bluebirdsOnFloweringBranch.jpg' // +
import blueIrisesImg from './blueIrises.jpg' // +
import branchOfLilacImg from './branchOfLilac.jpg'
import brightPeoniesImg from './brightPeonies.jpg'
import brightTulipsImg from './brightTulips.jpg'
import catImg from './cat.jpg'
import catMischievousImg from './catMischievous.jpg'
import catsInLibraryImg from './catsInLibrary.jpg'
import catWithGreenEyesImg from './catWithGreenEyes.jpg'
import daisiesOnOldSuitcaseImg from './daisiesOnOldSuitcase.jpg'
import delicateHydrangeaImg from './delicateHydrangea.jpg'
import delicateRoseImg from './delicateRose.jpg'
import delicateScentOfPeoniesImg from './delicateScentOfPeonies.jpg'
import delicateTulipsImg from './delicateTulips.jpg'
import domesticCatImg from './domesticCat.jpg'
import eveningFlowersImg from './eveningFlowers.jpg'
import flightImg from './flight.jpg'
import flowersForBelovedImg from './flowersForBeloved.jpg'
import flowersMoodImg from './flowersMood.jpg'
import fluffyJoyImg from './fluffyJoy.jpg'
import foxImg from './fox.jpg'
import girlAndCatImg from './girlAndCat.jpg'
import girlAndDucklingsImg from './girlAndDucklings.jpg'
import goldfishImg from './goldfish.jpg'
import grapefruitsImg from './grapefruits.jpg'
import greenWingedMacawImg from './greenWingedMacaw.jpg'
import hedgehogImg from './hedgehog.jpg'
import horseImg from './horse.jpg'
import horseAndFoalImg from './horseAndFoal.jpg'
import hydrangeaImg from './hydrangea.jpg'
import irisesImg from './irises.jpg'
import junoniaImg from './junonia.jpg'
import ladybugImg from './ladybugOnForgetMeNots.jpg'
import ladybugsImg from './ladybugs.jpg'
import largePeoniesImg from './largePeonies.jpg'
import leopardImg from './leopard.jpg'
import leopardAtWateringHoleImg from './leopardAtWateringHole.jpg'
import leopardsAtSunsetImg from './leopardsAtSunset.jpg'
import leopardsGazeImg from './leopardsGaze.jpg'
import letsSingMyFriendImg from './letsSingMyFriend.jpg'
import lionessAndLionCubImg from './lionessAndLionCub.jpg'
import lionFamilyImg from './lionFamily.jpg'
import littleRedPandaImg from './littleRedPanda.jpg'
import luxuriousPeoniesImg from './luxuriousPeonies.jpg'
import lynxImg from './lynx.jpg'
import makhaonImg from './makhaon.jpg'
import monarchImg from './monarch.jpg'
import narcissistsImg from './narcissists.jpg'
import ocelotImg from './ocelot.jpg'
import orangeJuiceFreshImg from './orangeJuiceFresh.jpg'
import peacocksEyeImg from './peacocksEye.jpg'
import peoniesByTheWindowImg from './peoniesByTheWindow.jpg'
import peonyFestivalImg from './peonyFestival.jpg'
import pinkBloomingImg from './pinkBlooming.jpg'
import pinkPeoniesImg from './pinkPeonies.jpg'
import pinkTendernessImg from './pinkTenderness.jpg'
import pomeranianImg from './pomeranian.jpg'
import pumaImg from './puma.jpg'
import redCatOnTheFenceImg from './redCatOnTheFence.jpg'
import redFlowersOnSunsetImg from './redFowersAtSunset.jpg'
import redHorseImg from './redHorse.jpg'
import roseInGardenImg from './roseInGarden.jpg'
import snailOnStrawberryImg from './snailOnStrawberry.jpg'
import snowLeopardImg from './snowLeopard.jpg'
import spanielImg from './spaniel.jpg'
import squirrelImg from './squirrel.jpg'
import stillLifeWithBookAndKeysImg from './stillLifeWithBookAndKeys.jpg'
import stillLifeWithChamomileAndStrawberryImg from './stillLifeWithChamomileAndStrawberry.jpg'
import stillLifeWithChrysanthemumsAndFruitsImg from './stillLifeWithChrysanthemumsAndFruits.jpg'
import stillLifeWithFigsAndGrapesImg from './stillLifeWithFigsAndGrapes.jpg'
import stillLifeWithGreenGrapesImg from './stillLifeWithGreenGrapes.jpg'
import stillLifeWithLemonsImg from './stillLifeWithLemons.jpg'
import stillLifeWithPeachImg from './stillLifeWithPeach.jpg'
import stillLifeWithPomegranatesImg from './stillLifeWithPomegranates.jpg'
import stillLifeWithSamovarImg from './stillLifeWithSamovar.jpg'
import swansImg from './swans.jpg'
import theGirlWithTheWhiteRabbitsImg from './theGirlWithTheWhiteRabbits.jpg'
import tigerImg from './tiger.jpg'
import tigerGazeImg from './tigerGaze.jpg'
import tigerHostImg from './tigerHost.jpg'
import tigerInTheTicketImg from './tigerInTheTicket.jpg'
import toygerImg from './toyger.jpg'
import whiteEagleImg from './whiteEagle.jpg'
import wildflowersImg from './wildflowersInAVase.jpg'
import wineAndFruitsImg from './wineAndFruits.jpg'
import wolfImg from './wolf.jpg'
import yellowRoseImg from './yellowRose.jpg'
import lemonsOrangesLimesImg from './lemonsOrangesLimes.jpg'
import girlWithDogImg from './girlWithDog.jpg'
import girlWithHorseImg from './girlWithHorse.jpg'

const observer = lozad();
observer.observe();

export interface TypesDataWorks {
  category: string
  name: string
  source: string
  class: string
  id: number
}

export interface TypesContent {
  works: TypesDataWorks[]
}

export const dataWorks: TypesDataWorks[] = [
  { category: 'animal', name: 'akitoInu', source: akitoInuImg, class: '', id: 0 },
  { category: 'animal', name: 'beagle', source: beagleImg, class: '', id: 1 },
  { category: 'animal', name: 'blueAndYellowMacaw', source: blueAndYellowMacawImg, class: '', id: 2 },
  { category: 'animal', name: 'blueBirds', source: blueBirdsOnFloweringBranchImg, class: '', id: 3 },
  { category: 'animal', name: 'cat', source: catImg, class: '', id: 4 },
  { category: 'animal', name: 'catMischievous', source: catMischievousImg, class: '', id: 5 },
  { category: 'animal', name: 'catsInLibrary', source: catsInLibraryImg, class: '', id: 6 },
  { category: 'animal', name: 'catWithGreenEyes', source: catWithGreenEyesImg, class: '', id: 7 },
  { category: 'animal', name: 'domesticCat', source: domesticCatImg, class: '', id: 8 },
  { category: 'animal', name: 'flight', source: flightImg, class: '', id: 9 },
  { category: 'animal', name: 'fluffyJoy', source: fluffyJoyImg, class: '', id: 10 },
  { category: 'animal', name: 'fox', source: foxImg, class: '', id: 11 },
  { category: 'animal', name: 'goldfish', source: goldfishImg, class: '', id: 12 },
  { category: 'animal', name: 'greenWingedMacaw', source: greenWingedMacawImg, class: '', id: 13 },
  { category: 'animal', name: 'hedgehog', source: hedgehogImg, class: '', id: 14 },
  { category: 'animal', name: 'horse', source: horseImg, class: '', id: 15 },
  { category: 'animal', name: 'horseAndFoal', source: horseAndFoalImg, class: '', id: 16 },
  { category: 'animal', name: 'junonia', source: junoniaImg, class: '', id: 17 },
  { category: 'animal', name: 'ladybug', source: ladybugImg, class: '', id: 18 },
  { category: 'animal', name: 'ladybugs', source: ladybugsImg, class: '', id: 19 },
  { category: 'animal', name: 'leopard', source: leopardImg, class: '', id: 20 },
  { category: 'animal', name: 'leopardAtWateringHole', source: leopardAtWateringHoleImg, class: '', id: 21 },
  { category: 'animal', name: 'leopardsAtSunset', source: leopardsAtSunsetImg, class: '', id: 22 },
  { category: 'animal', name: 'leopardsGaze', source: leopardsGazeImg, class: '', id: 23 },
  { category: 'animal', name: 'lionessAndLionCub', source: lionessAndLionCubImg, class: '', id: 24 },
  { category: 'animal', name: 'lionFamily', source: lionFamilyImg, class: '', id: 25 },
  { category: 'animal', name: 'littleRedPanda', source: littleRedPandaImg, class: '', id: 26 },
  { category: 'animal', name: 'lynx', source: lynxImg, class: '', id: 27 },
  { category: 'animal', name: 'makhaon', source: makhaonImg, class: '', id: 28 },
  { category: 'animal', name: 'monarch', source: monarchImg, class: '', id: 29 },
  { category: 'animal', name: 'ocelot', source: ocelotImg, class: '', id: 30 },
  { category: 'animal', name: 'peacocksEye', source: peacocksEyeImg, class: '', id: 31 },
  { category: 'animal', name: 'pomeranian', source: pomeranianImg, class: '', id: 32 },
  { category: 'animal', name: 'puma', source: pumaImg, class: '', id: 33 },
  { category: 'animal', name: 'redCatOnTheFence', source: redCatOnTheFenceImg, class: '', id: 34 },
  { category: 'animal', name: 'redHorse', source: redHorseImg, class: '', id: 35 },
  { category: 'animal', name: 'snailOnStrawberry', source: snailOnStrawberryImg, class: '', id: 36 },
  { category: 'animal', name: 'snowLeopard', source: snowLeopardImg, class: '', id: 37 },
  { category: 'animal', name: 'spaniel', source: spanielImg, class: '', id: 38 },
  { category: 'animal', name: 'squirell', source: squirrelImg, class: '', id: 39 },
  { category: 'animal', name: 'swans', source: swansImg, class: '', id: 40 },
  { category: 'animal', name: 'tiger', source: tigerImg, class: '', id: 41 },
  { category: 'animal', name: 'tigerGaze', source: tigerGazeImg, class: '', id: 42 },
  { category: 'animal', name: 'tigerHost', source: tigerHostImg, class: '', id: 43 },
  { category: 'animal', name: 'tigerInTheTicket', source: tigerInTheTicketImg, class: '', id: 44 },
  { category: 'animal', name: 'toyger', source: toygerImg, class: '', id: 45 },
  { category: 'animal', name: 'whiteEagle', source: whiteEagleImg, class: '', id: 46 },
  { category: 'animal', name: 'wolf', source: wolfImg, class: '', id: 47 },


  { category: 'peopleAndAnimals', name: 'belovedBaby', source: belovedBabyImg, class: '', id: 48 },
  { category: 'peopleAndAnimals', name: 'bestFriends', source: bestFriendImg, class: '', id: 49 },
  { category: 'peopleAndAnimals', name: 'girlAndCat', source: girlAndCatImg, class: '', id: 50 },
  { category: 'peopleAndAnimals', name: 'girlAndDucklings', source: girlAndDucklingsImg, class: '', id: 51 },
  { category: 'peopleAndAnimals', name: 'girlWithDog', source: girlWithDogImg, class: '', id: 52 },
  { category: 'peopleAndAnimals', name: 'girlWithHorse', source: girlWithHorseImg, class: '', id: 53 },
  { category: 'peopleAndAnimals', name: 'letsSingMyFriend', source: letsSingMyFriendImg, class: '', id: 54 },
  { category: 'peopleAndAnimals', name: 'theGirlWithTheWhiteRabbits', source: theGirlWithTheWhiteRabbitsImg, class: '', id: 55 },

  { category: 'flowers', name: 'blueIrises', source: blueIrisesImg, class: '', id: 56 },
  { category: 'flowers', name: 'branchOfLiliac', source: branchOfLilacImg, class: '', id: 57 },
  { category: 'flowers', name: 'brightPeonies', source: brightPeoniesImg, class: '', id: 58 },
  { category: 'flowers', name: 'brightTulips', source: brightTulipsImg, class: '', id: 59 },
  { category: 'flowers', name: 'delicateHydrangea', source: delicateHydrangeaImg, class: '', id: 60 },
  { category: 'flowers', name: 'delicateRose', source: delicateRoseImg, class: '', id: 61 },
  { category: 'flowers', name: 'delicateScentOfPeonies', source: delicateScentOfPeoniesImg, class: '', id: 62 },
  { category: 'flowers', name: 'delicateTulips', source: delicateTulipsImg, class: '', id: 63 },
  { category: 'flowers', name: 'eveningFlowers', source: eveningFlowersImg, class: '', id: 64 },
  { category: 'flowers', name: 'flowersForBeloved', source: flowersForBelovedImg, class: '', id: 65 },
  { category: 'flowers', name: 'flowersMood', source: flowersMoodImg, class: '', id: 66 },
  { category: 'flowers', name: 'hydrangea', source: hydrangeaImg, class: '', id: 67 },
  { category: 'flowers', name: 'irises', source: irisesImg, class: '', id: 68 },
  { category: 'flowers', name: 'largePeonies', source: largePeoniesImg, class: '', id: 69 },
  { category: 'flowers', name: 'luxuriousPeonies', source: luxuriousPeoniesImg, class: '', id: 70 },
  { category: 'flowers', name: 'narcissists', source: narcissistsImg, class: '', id: 71 },
  { category: 'flowers', name: 'peonyFestival', source: peonyFestivalImg, class: '', id: 72 },
  { category: 'flowers', name: 'pinkBlooming', source: pinkBloomingImg, class: '', id: 73 },
  { category: 'flowers', name: 'pinkPeonies', source: pinkPeoniesImg, class: '', id: 74 },
  { category: 'flowers', name: 'pinkTenderness', source: pinkTendernessImg, class: '', id: 75 },
  { category: 'flowers', name: 'redFowersAtSunset', source: redFlowersOnSunsetImg, class: '', id: 76 },
  { category: 'flowers', name: 'roseInGarden', source: roseInGardenImg, class: '', id: 77 },
  { category: 'flowers', name: 'yellowRose', source: yellowRoseImg, class: '', id: 78 },

  { category: 'stillLife', name: 'daisiesOnOldSuitcase', source: daisiesOnOldSuitcaseImg, class: '', id: 79 },
  { category: 'stillLife', name: 'grapefruits', source: grapefruitsImg, class: '', id: 80 },
  { category: 'stillLife', name: 'lemonsOrangesLimes', source: lemonsOrangesLimesImg, class: '', id: 81 },
  { category: 'stillLife', name: 'orangeJuiceFresh', source: orangeJuiceFreshImg, class: '', id: 82 },
  { category: 'stillLife', name: 'peoniesByTheWindow', source: peoniesByTheWindowImg, class: '', id: 83 },
  { category: 'stillLife', name: 'stillLifeWithBookAndKeys', source: stillLifeWithBookAndKeysImg, class: '', id: 84 },
  { category: 'stillLife', name: 'stillLifeWithChamomileAndStrawberry', source: stillLifeWithChamomileAndStrawberryImg, class: '', id: 85 },
  { category: 'stillLife', name: 'stillLifeWithChrysanthemumsAndFruits', source: stillLifeWithChrysanthemumsAndFruitsImg, class: '', id: 86 },
  { category: 'stillLife', name: 'stillLifeWithFigsAndGrapes', source: stillLifeWithFigsAndGrapesImg, class: '', id: 87 },
  { category: 'stillLife', name: 'stillLifeWithGreenGrapes', source: stillLifeWithGreenGrapesImg, class: '', id: 88 },
  { category: 'stillLife', name: 'stillLifeWithLemons', source: stillLifeWithLemonsImg, class: '', id: 89 },
  { category: 'stillLife', name: 'stillLifeWithPeach', source: stillLifeWithPeachImg, class: '', id: 90 },
  { category: 'stillLife', name: 'stillLifeWithPomegranates', source: stillLifeWithPomegranatesImg, class: '', id: 91 },
  { category: 'stillLife', name: 'stillLifeWithSamovar', source: stillLifeWithSamovarImg, class: '', id: 92 },
  { category: 'stillLife', name: 'wildflowers', source: wildflowersImg, class: '', id: 93 },
  { category: 'stillLife', name: 'wineAndFruits', source: wineAndFruitsImg, class: '', id: 94 },
]

// export const filterAnimals = dataWorks.filter(item => item.category === 'animal')
// export const filterFlowers = dataWorks.filter(item => item.category === 'flowers')
// export const filterPeopleAndAnimals = dataWorks.filter(item => item.category === 'peopleAndAnimals')
// export const filterStillLife = dataWorks.filter(item => item.category === 'stillLife')

// export const Content = ({ works }: TypesContent) => {
//   return (
//     works.map(item => {
//       return <img className={`w-56 h-56 lozad`} src={item.source} key={item.name} alt={item.name} />
//     })
//   )
// }

// const test = <img className="lozad" data-src="img.jpg"></img>

