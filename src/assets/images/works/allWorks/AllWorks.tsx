import React from 'react';
import lozad from 'lozad';

const akitoInuSrc = 'https://ibb.co/5gJ6n9yY'
const beagleSrc = 'https://ibb.co/Zzjk4QkW'
const belovedBabySrc = 'https://ibb.co/NbdRsFG'
const bestFriendsSrc = 'https://ibb.co/q3g4nPm9'
const blueAndYellowMacawSrc = 'https://ibb.co/BKVfwVs9'
const blueBirdsSrc = 'https://ibb.co/hRq34YJF'
const blueIrisesSrc = 'https://ibb.co/MD0t3JZN'
const branchOfLiliacSrc = 'https://ibb.co/Crf9192'
const brightPeoniesSrc = 'https://ibb.co/QFkL8Brz'
const brightTulipsSrc = 'https://ibb.co/ycyknwTS'
const catSrc = 'https://ibb.co/DggH39Pm'
const catMischievousSrc = 'https://ibb.co/YBrH8DRN'
const catsInLibrarySrc = 'https://ibb.co/FLrdy9mY'
const catWithGreenEyesSrc = 'https://ibb.co/c9NQ8Kn'
const daisiesOnOldSuitcaseSrc = 'https://ibb.co/JR5R6Sk4'
const delicateHydrangeaSrc = 'https://ibb.co/hx1NJBmW'
const delicateRoseSrc = 'https://ibb.co/tPZfNZ4X'
const delicateScentOfPeoniesSrc = 'https://ibb.co/Kx2dHWJz'
const delicateTulipsSrc = 'https://ibb.co/Hftwpz7r'
const domesticCatSrc = 'https://ibb.co/zvm6MWt'
const eveningFlowersSrc = 'https://ibb.co/HTw0MYnn'
const flightSrc = 'https://ibb.co/84nXsLYk'
const flowersForBelovedSrc = 'https://ibb.co/svLMt0Ww'
const flowersMoodSrc = 'https://ibb.co/gbXyfsQq'
const fluffyJoySrc = 'https://ibb.co/CK6VyZLM'
const foxSrc = 'https://ibb.co/9kXRHCb8'
const girlAndCatSrc = 'https://ibb.co/rGJP4tnW'
const girlAndDucklingsSrc = 'https://ibb.co/yFyWjMfx'
const girlWithDogSrc = 'https://ibb.co/YF3VB5v5'
const girlWithHorseSrc = 'https://ibb.co/knNcrws'
const goldfishSrc = 'https://ibb.co/W4Gdyz24'
const grapefruitsSrc = 'https://ibb.co/RpGWCzXV'
const greenWingedMacawSrc = 'https://ibb.co/tTMH66v9'
const hedgehogSrc = 'https://ibb.co/LdN0Z5jK'
const horseSrc = 'https://ibb.co/twSVGRrC'
const horseAndFoalSrc = 'https://ibb.co/NdmBm1XF'
const hydrangeaSrc = 'https://ibb.co/zHDSMJ84'
const irisesSrc = 'https://ibb.co/KjLghmKM'
const junoniaSrc = 'https://ibb.co/9HGC3BLg'
const ladybugSrc = 'https://ibb.co/Ps5LQTmK'
const ladybugsSrc = 'https://ibb.co/GfP741pF'
const largePeoniesSrc = 'https://ibb.co/wNTXt4fJ'
const lemonsOrangesLimesSrc = 'https://ibb.co/QwHXSNf'
const leopardSrc = 'https://ibb.co/q3y3b3N2'
const leopardAtWateringHoleSrc = 'https://ibb.co/gLZjSjXB'
const leopardsAtSunsetSrc = 'https://ibb.co/pvkHVJyj'
const leopardsGazeSrc = 'https://ibb.co/SDKHNbJF'
const letsSingMyFriendSrc = 'https://ibb.co/Qjm8rWsb'
const lionessAndLionCubSrc = 'https://ibb.co/S7ccZ2zQ'
const lionFamilySrc = 'https://ibb.co/ZRp6N07g'
const littleRedPandaSrc = 'https://ibb.co/zW1TbNcS'
const luxuriousPeoniesSrc = 'https://ibb.co/d03R6FL8'
const lynxSrc = 'https://ibb.co/fdN73djg'
const makhaonSrc = 'https://ibb.co/S7B3Gz6G'
const monarchSrc = 'https://ibb.co/NgRT3b0P'
const narcissistsSrc = 'https://ibb.co/tTTkk6CL'
const ocelotSrc = 'https://ibb.co/qLsvvjpB'
const orangeJuiceFreshSrc = 'https://ibb.co/SXfxf1yD'
const peacocksEyeSrc = 'https://ibb.co/SwSycdR1'
const peoniesByTheWindowSrc = 'https://ibb.co/m52zv8vM'
const peonyFestivalSrc = 'https://ibb.co/8DZW2NX7'
const pinkBloomingSrc = 'https://ibb.co/VcJnf9Tq'
const pinkPeoniesSrc = 'https://ibb.co/HpkZjVBQ'
const pinkTendernessSrc = 'https://ibb.co/tpB6hHg4'
const pomeranianSrc = 'https://ibb.co/jP6qwfkh'
const pumaSrc = 'https://ibb.co/JW8nfZJ2'
const redCatOnTheFenceSrc = 'https://ibb.co/Xrv4L7M0'
const redFowersAtSunsetSrc = 'https://ibb.co/n83BZkVZ'
const redHorseSrc = 'https://ibb.co/BHy8Hfb0'
const roseInGardenSrc = 'https://ibb.co/7xKfG1XR'
const snailOnStrawberrySrc = 'https://ibb.co/HTy9StKy'
const snowLeopardSrc = 'https://ibb.co/n8kmJtXn'
const spanielSrc = 'https://ibb.co/mV4PJhTW'
const squirellSrc = 'https://ibb.co/ccG88jKM'
const stillLifeWithBookAndKeysSrc = 'https://ibb.co/V0qMDc7X'
const stillLifeWithChamomileAndStrawberrySrc = 'https://ibb.co/zTkR6qsL'
const stillLifeWithChrysanthemumsAndFruitsSrc = 'https://ibb.co/Q7D0S26w'
const stillLifeWithFigsAndGrapesSrc = 'https://ibb.co/JjWWWKcw'
const stillLifeWithGreenGrapesSrc = 'https://ibb.co/DHpvRxwH'
const stillLifeWithLemonsSrc = 'https://ibb.co/1GCy5pv2'
const stillLifeWithPeachSrc = 'https://ibb.co/7xK3fPb7'
const stillLifeWithPomegranatesSrc = 'https://ibb.co/20JGr7bM'
const stillLifeWithSamovarSrc = 'https://ibb.co/sJ91LqRr'
const swansSrc = 'https://ibb.co/1GxMDDzv'
const theGirlWithTheWhiteRabbitsSrc = 'https://ibb.co/qFxkcd7T'
const tigerSrc = 'https://ibb.co/LzLBsX9t'
const tigerGazeSrc = 'https://ibb.co/HL6jWGbF'
const tigerHostSrc = 'https://ibb.co/Sw3sBv7n'
const tigerInTheTicketSrc = 'https://ibb.co/Y7rfX8SS'
const toygerSrc = 'https://ibb.co/TDY2xs92'
const whiteEagleSrc = 'https://ibb.co/rfzhBsbc'
const wildflowersSrc = 'https://ibb.co/8gfnnpqb'
const wineAndFruitsSrc = 'https://ibb.co/Ndw1w8hN'
const wolfSrc = 'https://ibb.co/LVXQZf7'
const yellowRoseSrc = 'https://ibb.co/4Rm1GL2d'

const dataWorks = [
  { category: 'animal', name: 'akitoInu', source: akitoInuSrc, class: '' },
  { category: 'animal', name: 'beagle', source: beagleSrc, class: '' },
  { category: 'animal', name: 'blueAndYellowMacaw', source: blueAndYellowMacawSrc, class: '' },
  { category: 'animal', name: 'blueBirds', source: blueBirdsSrc, class: '' },
  { category: 'animal', name: 'cat', source: catSrc, class: '' },
  { category: 'animal', name: 'catMischievous', source: catMischievousSrc, class: '' },
  { category: 'animal', name: 'catsInLibrary', source: catsInLibrarySrc, class: '' },
  { category: 'animal', name: 'catWithGreenEyes', source: catWithGreenEyesSrc, class: '' },
  { category: 'animal', name: 'domesticCat', source: domesticCatSrc, class: '' },
  { category: 'animal', name: 'flight', source: flightSrc, class: '' },
  { category: 'animal', name: 'fluffyJoy', source: fluffyJoySrc, class: '' },
  { category: 'animal', name: 'fox', source: foxSrc, class: '' },
  { category: 'animal', name: 'goldfish', source: goldfishSrc, class: '' },
  { category: 'animal', name: 'greenWingedMacaw', source: greenWingedMacawSrc, class: '' },
  { category: 'animal', name: 'hedgehog', source: hedgehogSrc, class: '' },
  { category: 'animal', name: 'horse', source: horseSrc, class: '' },
  { category: 'animal', name: 'horseAndFoal', source: horseAndFoalSrc, class: '' },
  { category: 'animal', name: 'junonia', source: junoniaSrc, class: '' },
  { category: 'animal', name: 'ladybug', source: ladybugSrc, class: '' },
  { category: 'animal', name: 'ladybugs', source: ladybugsSrc, class: '' },
  { category: 'animal', name: 'leopard', source: leopardSrc, class: '' },
  { category: 'animal', name: 'leopardAtWateringHole', source: leopardAtWateringHoleSrc, class: '' },
  { category: 'animal', name: 'leopardsAtSunset', source: leopardsAtSunsetSrc, class: '' },
  { category: 'animal', name: 'leopardsGaze', source: leopardsGazeSrc, class: '' },
  { category: 'animal', name: 'lionessAndLionCub', source: lionessAndLionCubSrc, class: '' },
  { category: 'animal', name: 'lionFamily', source: lionFamilySrc, class: '' },
  { category: 'animal', name: 'littleRedPanda', source: littleRedPandaSrc, class: '' },
  { category: 'animal', name: 'lynx', source: lynxSrc, class: '' },
  { category: 'animal', name: 'makhaon', source: makhaonSrc, class: '' },
  { category: 'animal', name: 'monarch', source: monarchSrc, class: '' },
  { category: 'animal', name: 'ocelot', source: ocelotSrc, class: '' },
  { category: 'animal', name: 'peacocksEye', source: peacocksEyeSrc, class: '' },
  { category: 'animal', name: 'pomeranian', source: pomeranianSrc, class: '' },
  { category: 'animal', name: 'puma', source: pumaSrc, class: '' },
  { category: 'animal', name: 'redCatOnTheFence', source: redCatOnTheFenceSrc, class: '' },
  { category: 'animal', name: 'redHorse', source: redHorseSrc, class: '' },
  { category: 'animal', name: 'snailOnStrawberry', source: snailOnStrawberrySrc, class: '' },
  { category: 'animal', name: 'snowLeopard', source: snowLeopardSrc, class: '' },
  { category: 'animal', name: 'spaniel', source: spanielSrc, class: '' },
  { category: 'animal', name: 'squirell', source: squirellSrc, class: '' },
  { category: 'animal', name: 'swans', source: swansSrc, class: '' },
  { category: 'animal', name: 'tiger', source: tigerSrc, class: '' },
  { category: 'animal', name: 'tigerGaze', source: tigerGazeSrc, class: '' },
  { category: 'animal', name: 'tigerHost', source: tigerHostSrc, class: '' },
  { category: 'animal', name: 'tigerInTheTicket', source: tigerInTheTicketSrc, class: '' },
  { category: 'animal', name: 'toyger', source: toygerSrc, class: '' },
  { category: 'animal', name: 'whiteEagle', source: whiteEagleSrc, class: '' },
  { category: 'animal', name: 'wolf', source: wolfSrc, class: '' },

  { category: 'peopleAndAnimals', name: 'belovedBaby', source: belovedBabySrc, class: '' },
  { category: 'peopleAndAnimals', name: 'bestFriends', source: bestFriendsSrc, class: '' },
  { category: 'peopleAndAnimals', name: 'girlAndCat', source: girlAndCatSrc, class: '' },
  { category: 'peopleAndAnimals', name: 'girlAndDucklings', source: girlAndDucklingsSrc, class: '' },
  { category: 'peopleAndAnimals', name: 'girlWithDog', source: girlWithDogSrc, class: '' },
  { category: 'peopleAndAnimals', name: 'girlWithHorse', source: girlWithHorseSrc, class: '' },
  { category: 'peopleAndAnimals', name: 'letsSingMyFriend', source: letsSingMyFriendSrc, class: '' },
  { category: 'peopleAndAnimals', name: 'theGirlWithTheWhiteRabbits', source: theGirlWithTheWhiteRabbitsSrc, class: '' },

  { category: 'flowers', name: 'blueIrises', source: blueIrisesSrc, class: '' },
  { category: 'flowers', name: 'branchOfLiliac', source: branchOfLiliacSrc, class: '' },
  { category: 'flowers', name: 'brightPeonies', source: brightPeoniesSrc, class: '' },
  { category: 'flowers', name: 'brightTulips', source: brightTulipsSrc, class: '' },
  { category: 'flowers', name: 'delicateHydrangea', source: delicateHydrangeaSrc, class: '' },
  { category: 'flowers', name: 'delicateRose', source: delicateRoseSrc, class: '' },
  { category: 'flowers', name: 'delicateScentOfPeonies', source: delicateScentOfPeoniesSrc, class: '' },
  { category: 'flowers', name: 'delicateTulips', source: delicateTulipsSrc, class: '' },
  { category: 'flowers', name: 'eveningFlowers', source: eveningFlowersSrc, class: '' },
  { category: 'flowers', name: 'flowersForBeloved', source: flowersForBelovedSrc, class: '' },
  { category: 'flowers', name: 'flowersMood', source: flowersMoodSrc, class: '' },
  { category: 'flowers', name: 'hydrangea', source: hydrangeaSrc, class: '' },
  { category: 'flowers', name: 'irises', source: irisesSrc, class: '' },
  { category: 'flowers', name: 'largePeonies', source: largePeoniesSrc, class: '' },
  { category: 'flowers', name: 'luxuriousPeonies', source: luxuriousPeoniesSrc, class: '' },
  { category: 'flowers', name: 'narcissists', source: narcissistsSrc, class: '' },
  { category: 'flowers', name: 'peonyFestival', source: peonyFestivalSrc, class: '' },
  { category: 'flowers', name: 'pinkBlooming', source: pinkBloomingSrc, class: '' },
  { category: 'flowers', name: 'pinkPeonies', source: pinkPeoniesSrc, class: '' },
  { category: 'flowers', name: 'pinkTenderness', source: pinkTendernessSrc, class: '' },
  { category: 'flowers', name: 'redFowersAtSunset', source: redFowersAtSunsetSrc, class: '' },
  { category: 'flowers', name: 'roseInGarden', source: roseInGardenSrc, class: '' },
  { category: 'flowers', name: 'yellowRose', source: yellowRoseSrc, class: '' },

  { category: 'stillLife', name: 'daisiesOnOldSuitcase', source: daisiesOnOldSuitcaseSrc, class: '' },
  { category: 'stillLife', name: 'grapefruits', source: grapefruitsSrc, class: '' },
  { category: 'stillLife', name: 'lemonsOrangesLimes', source: lemonsOrangesLimesSrc, class: '' },
  { category: 'stillLife', name: 'orangeJuiceFresh', source: orangeJuiceFreshSrc, class: '' },
  { category: 'stillLife', name: 'peoniesByTheWindow', source: peoniesByTheWindowSrc, class: '' },
  { category: 'stillLife', name: 'stillLifeWithBookAndKeys', source: stillLifeWithBookAndKeysSrc, class: '' },
  { category: 'stillLife', name: 'stillLifeWithChamomileAndStrawberry', source: stillLifeWithChamomileAndStrawberrySrc, class: '' },
  { category: 'stillLife', name: 'stillLifeWithChrysanthemumsAndFruits', source: stillLifeWithChrysanthemumsAndFruitsSrc, class: '' },
  { category: 'stillLife', name: 'stillLifeWithFigsAndGrapes', source: stillLifeWithFigsAndGrapesSrc, class: '' },
  { category: 'stillLife', name: 'stillLifeWithGreenGrapes', source: stillLifeWithGreenGrapesSrc, class: '' },
  { category: 'stillLife', name: 'stillLifeWithLemons', source: stillLifeWithLemonsSrc, class: '' },
  { category: 'stillLife', name: 'stillLifeWithPeach', source: stillLifeWithPeachSrc, class: '' },
  { category: 'stillLife', name: 'stillLifeWithPomegranates', source: stillLifeWithPomegranatesSrc, class: '' },
  { category: 'stillLife', name: 'stillLifeWithSamovar', source: stillLifeWithSamovarSrc, class: '' },
  { category: 'stillLife', name: 'wildflowers', source: wildflowersSrc, class: '' },
  { category: 'stillLife', name: 'wineAndFruits', source: wineAndFruitsSrc, class: '' },
]

const test = <img className="lozad" data-src="img.jpg"></img>

const observer = lozad();
observer.observe();