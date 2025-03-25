import React from 'react'

import mainPicture from './formImage/formPicture.jpg'
import homePicture from './homeImages/homePicture.jpg'

import portfolioAnimals from './portfolioImages/portfolioAnimals.jpg'
import portfolioFlowers from './portfolioImages/portfolioFlowers.jpg'
import portfolioStillLife from './portfolioImages/portfolioStillLife.jpg'

export { mainPicture }

interface TypesImagePortfolio {
  source: string
  alt: string
}

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

const ImagePortfolio = ({ source, alt }: TypesImagePortfolio) => {
  return (
    <img
      className={`min-w-min w-350 h-350`}
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

