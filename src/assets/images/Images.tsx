import React from 'react'

import testImgForm from './testImgForm.png'
import mainPicture from './mainPicture.jpg'
import homePicture from './homePicture.jpg'

import portfolioAnimals from './portfolioAnimals.jpg'
import portfolioFlowers from './portfolioFlowers.jpg'
import portfolioStillLife from './portfolioStillLife.jpg'

export { testImgForm, mainPicture }

export const MainPicture = () => {
  return (
    <img
      className={`w-128 h-15`}
      src={mainPicture}
      alt="mainPicture" />
  )
}

export const HomePicture = () => {
  return (
    <img
      className={`w-196 h-15`}
      src={homePicture}
      alt="homePicture" />
  )
}

const ImagePortfolio = ({ source, alt }) => {
  return (
    <img
      className={`w-350 h-350`}
      src={source}
      alt={alt} />
  )
}

export const PortfolioAnimals = () => {
  return (
    <ImagePortfolio source={portfolioAnimals} alt='porfolioAnimals' />
  )
}

export const PortfolioFlowers = () => {
  return (
    <ImagePortfolio source={portfolioFlowers} alt='porfolioFlowers' />
  )
}
export const PortfolioStillLife = () => {
  return (
    <ImagePortfolio source={portfolioStillLife} alt='porfolioStillLife' />
  )
}

