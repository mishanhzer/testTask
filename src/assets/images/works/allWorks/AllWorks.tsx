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

interface TypesDataWorks {
  category: string
  name: string
  source: string
  class: string
}

interface TypesContent {
  works: TypesDataWorks[]
}

const dataWorks: TypesDataWorks[] = [
  { category: 'animal', name: 'akitoInu', source: akitoInuImg, class: '' },
  { category: 'animal', name: 'beagle', source: beagleImg, class: '' },
  { category: 'animal', name: 'blueAndYellowMacaw', source: blueAndYellowMacawImg, class: '' },
  { category: 'animal', name: 'blueBirds', source: blueBirdsOnFloweringBranchImg, class: '' },
  { category: 'animal', name: 'cat', source: catImg, class: '' },
  { category: 'animal', name: 'catMischievous', source: catMischievousImg, class: '' },
  { category: 'animal', name: 'catsInLibrary', source: catsInLibraryImg, class: '' },
  { category: 'animal', name: 'catWithGreenEyes', source: catWithGreenEyesImg, class: '' },
  { category: 'animal', name: 'domesticCat', source: domesticCatImg, class: '' },
  { category: 'animal', name: 'flight', source: flightImg, class: '' },
  { category: 'animal', name: 'fluffyJoy', source: fluffyJoyImg, class: '' },
  { category: 'animal', name: 'fox', source: foxImg, class: '' },
  { category: 'animal', name: 'goldfish', source: goldfishImg, class: '' },
  { category: 'animal', name: 'greenWingedMacaw', source: greenWingedMacawImg, class: '' },
  { category: 'animal', name: 'hedgehog', source: hedgehogImg, class: '' },
  { category: 'animal', name: 'horse', source: horseImg, class: '' },
  { category: 'animal', name: 'horseAndFoal', source: horseAndFoalImg, class: '' },
  { category: 'animal', name: 'junonia', source: junoniaImg, class: '' },
  { category: 'animal', name: 'ladybug', source: ladybugImg, class: '' },
  { category: 'animal', name: 'ladybugs', source: ladybugsImg, class: '' },
  { category: 'animal', name: 'leopard', source: leopardImg, class: '' },
  { category: 'animal', name: 'leopardAtWateringHole', source: leopardAtWateringHoleImg, class: '' },
  { category: 'animal', name: 'leopardsAtSunset', source: leopardsAtSunsetImg, class: '' },
  { category: 'animal', name: 'leopardsGaze', source: leopardsGazeImg, class: '' },
  { category: 'animal', name: 'lionessAndLionCub', source: lionessAndLionCubImg, class: '' },
  { category: 'animal', name: 'lionFamily', source: lionFamilyImg, class: '' },
  { category: 'animal', name: 'littleRedPanda', source: littleRedPandaImg, class: '' },
  { category: 'animal', name: 'lynx', source: lynxImg, class: '' },
  { category: 'animal', name: 'makhaon', source: makhaonImg, class: '' },
  { category: 'animal', name: 'monarch', source: monarchImg, class: '' },
  { category: 'animal', name: 'ocelot', source: ocelotImg, class: '' },
  { category: 'animal', name: 'peacocksEye', source: peacocksEyeImg, class: '' },
  { category: 'animal', name: 'pomeranian', source: pomeranianImg, class: '' },
  { category: 'animal', name: 'puma', source: pumaImg, class: '' },
  { category: 'animal', name: 'redCatOnTheFence', source: redCatOnTheFenceImg, class: '' },
  { category: 'animal', name: 'redHorse', source: redHorseImg, class: '' },
  { category: 'animal', name: 'snailOnStrawberry', source: snailOnStrawberryImg, class: '' },
  { category: 'animal', name: 'snowLeopard', source: snowLeopardImg, class: '' },
  { category: 'animal', name: 'spaniel', source: spanielImg, class: '' },
  { category: 'animal', name: 'squirell', source: squirrelImg, class: '' },
  { category: 'animal', name: 'swans', source: swansImg, class: '' },
  { category: 'animal', name: 'tiger', source: tigerImg, class: '' },
  { category: 'animal', name: 'tigerGaze', source: tigerGazeImg, class: '' },
  { category: 'animal', name: 'tigerHost', source: tigerHostImg, class: '' },
  { category: 'animal', name: 'tigerInTheTicket', source: tigerInTheTicketImg, class: '' },
  { category: 'animal', name: 'toyger', source: toygerImg, class: '' },
  { category: 'animal', name: 'whiteEagle', source: whiteEagleImg, class: '' },
  { category: 'animal', name: 'wolf', source: wolfImg, class: '' },

  { category: 'peopleAndAnimals', name: 'belovedBaby', source: belovedBabyImg, class: '' },
  { category: 'peopleAndAnimals', name: 'bestFriends', source: bestFriendImg, class: '' },
  { category: 'peopleAndAnimals', name: 'girlAndCat', source: girlAndCatImg, class: '' },
  { category: 'peopleAndAnimals', name: 'girlAndDucklings', source: girlAndDucklingsImg, class: '' },
  { category: 'peopleAndAnimals', name: 'girlWithDog', source: girlWithDogImg, class: '' },
  { category: 'peopleAndAnimals', name: 'girlWithHorse', source: girlWithHorseImg, class: '' },
  { category: 'peopleAndAnimals', name: 'letsSingMyFriend', source: letsSingMyFriendImg, class: '' },
  { category: 'peopleAndAnimals', name: 'theGirlWithTheWhiteRabbits', source: theGirlWithTheWhiteRabbitsImg, class: '' },

  { category: 'flowers', name: 'blueIrises', source: blueIrisesImg, class: '' },
  { category: 'flowers', name: 'branchOfLiliac', source: branchOfLilacImg, class: '' },
  { category: 'flowers', name: 'brightPeonies', source: brightPeoniesImg, class: '' },
  { category: 'flowers', name: 'brightTulips', source: brightTulipsImg, class: '' },
  { category: 'flowers', name: 'delicateHydrangea', source: delicateHydrangeaImg, class: '' },
  { category: 'flowers', name: 'delicateRose', source: delicateRoseImg, class: '' },
  { category: 'flowers', name: 'delicateScentOfPeonies', source: delicateScentOfPeoniesImg, class: '' },
  { category: 'flowers', name: 'delicateTulips', source: delicateTulipsImg, class: '' },
  { category: 'flowers', name: 'eveningFlowers', source: eveningFlowersImg, class: '' },
  { category: 'flowers', name: 'flowersForBeloved', source: flowersForBelovedImg, class: '' },
  { category: 'flowers', name: 'flowersMood', source: flowersMoodImg, class: '' },
  { category: 'flowers', name: 'hydrangea', source: hydrangeaImg, class: '' },
  { category: 'flowers', name: 'irises', source: irisesImg, class: '' },
  { category: 'flowers', name: 'largePeonies', source: largePeoniesImg, class: '' },
  { category: 'flowers', name: 'luxuriousPeonies', source: luxuriousPeoniesImg, class: '' },
  { category: 'flowers', name: 'narcissists', source: narcissistsImg, class: '' },
  { category: 'flowers', name: 'peonyFestival', source: peonyFestivalImg, class: '' },
  { category: 'flowers', name: 'pinkBlooming', source: pinkBloomingImg, class: '' },
  { category: 'flowers', name: 'pinkPeonies', source: pinkPeoniesImg, class: '' },
  { category: 'flowers', name: 'pinkTenderness', source: pinkTendernessImg, class: '' },
  { category: 'flowers', name: 'redFowersAtSunset', source: redFlowersOnSunsetImg, class: '' },
  { category: 'flowers', name: 'roseInGarden', source: roseInGardenImg, class: '' },
  { category: 'flowers', name: 'yellowRose', source: yellowRoseImg, class: '' },

  { category: 'stillLife', name: 'daisiesOnOldSuitcase', source: daisiesOnOldSuitcaseImg, class: '' },
  { category: 'stillLife', name: 'grapefruits', source: grapefruitsImg, class: '' },
  { category: 'stillLife', name: 'lemonsOrangesLimes', source: lemonsOrangesLimesImg, class: '' },
  { category: 'stillLife', name: 'orangeJuiceFresh', source: orangeJuiceFreshImg, class: '' },
  { category: 'stillLife', name: 'peoniesByTheWindow', source: peoniesByTheWindowImg, class: '' },
  { category: 'stillLife', name: 'stillLifeWithBookAndKeys', source: stillLifeWithBookAndKeysImg, class: '' },
  { category: 'stillLife', name: 'stillLifeWithChamomileAndStrawberry', source: stillLifeWithChamomileAndStrawberryImg, class: '' },
  { category: 'stillLife', name: 'stillLifeWithChrysanthemumsAndFruits', source: stillLifeWithChrysanthemumsAndFruitsImg, class: '' },
  { category: 'stillLife', name: 'stillLifeWithFigsAndGrapes', source: stillLifeWithFigsAndGrapesImg, class: '' },
  { category: 'stillLife', name: 'stillLifeWithGreenGrapes', source: stillLifeWithGreenGrapesImg, class: '' },
  { category: 'stillLife', name: 'stillLifeWithLemons', source: stillLifeWithLemonsImg, class: '' },
  { category: 'stillLife', name: 'stillLifeWithPeach', source: stillLifeWithPeachImg, class: '' },
  { category: 'stillLife', name: 'stillLifeWithPomegranates', source: stillLifeWithPomegranatesImg, class: '' },
  { category: 'stillLife', name: 'stillLifeWithSamovar', source: stillLifeWithSamovarImg, class: '' },
  { category: 'stillLife', name: 'wildflowers', source: wildflowersImg, class: '' },
  { category: 'stillLife', name: 'wineAndFruits', source: wineAndFruitsImg, class: '' },
]

export const filterAnimals = dataWorks.filter(item => item.category === 'animal')
export const filterFlowers = dataWorks.filter(item => item.category === 'flowers')
export const filterPeopleAndAnimals = dataWorks.filter(item => item.category === 'peopleAndAnimals')
export const filterStillLife = dataWorks.filter(item => item.category === 'stillLife')

export const Content = ({ works }: TypesContent) => {
  return (
    works.map(item => {
      return <img className={`w-56 h-56 lozad`} src={item.source} key={item.name} alt={item.name} />
    })
  )
}

const test = <img className="lozad" data-src="img.jpg"></img>

