import React from 'react'

import mainPicture from './formImage/formPicture.jpg'

import portfolioAnimals from './portfolioImages/portfolioAnimals.jpg'
import portfolioFlowers from './portfolioImages/portfolioFlowers.jpg'
import portfolioStillLife from './portfolioImages/portfolioStillLife.jpg'
import portfolioPeopleAndAnimals from './portfolioImages/portfolioPeopleAndAnimals.jpg'

import vkImg from '../logo/logoHeader/linkSocialMedia/vk.svg'
import instImg from '../logo/logoHeader/linkSocialMedia/inst.png'
import liveImg from '../logo/logoHeader/linkSocialMedia/live.png'

export { mainPicture }

export interface TypesSizes {
  name: string
  url: string
}

export interface TypesDataWorks {
  file: string
  name: string
  path: string
  preview: string
  sizes: TypesSizes[]
}

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

export const PortfolioPeopleAndAnimals = () => {
  return (
    <ImagePortfolio source={portfolioPeopleAndAnimals} alt='portfolioPeopleAndAnimals' />
  )
}

export const likeCart = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="ag100-b2"><path fill="currentColor" d="M16 6.022C16 3.457 14.052 1.5 11.5 1.5c-1.432 0-2.665.799-3.5 1.926C7.165 2.299 5.932 1.5 4.5 1.5 1.948 1.5 0 3.457 0 6.022c0 2.457 1.66 4.415 3.241 5.743 1.617 1.358 3.387 2.258 4.062 2.577.444.21.95.21 1.394 0 .675-.32 2.445-1.219 4.062-2.577C14.339 10.437 16 8.479 16 6.022"></path></svg>
  )
}

export const deleteCart = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="ag100-b2"><path fill="currentColor" d="m4.888 3.035.275-.826A2.5 2.5 0 0 1 7.535.5h.93a2.5 2.5 0 0 1 2.372 1.71l.275.825c2.267.09 3.555.406 3.555 1.527 0 .938-.417.938-1.25.938H2.583c-.833 0-1.25 0-1.25-.937 0-1.122 1.288-1.438 3.555-1.528m1.856-.299-.088.266Q7.295 3 8 3t1.345.002l-.089-.266a.83.83 0 0 0-.79-.57h-.931a.83.83 0 0 0-.79.57M2.167 7.167c0-.6.416-.834.833-.834h10c.417 0 .833.235.833.834 0 6.666-.416 8.333-5.833 8.333s-5.833-1.667-5.833-8.333m4.166 1.666a.833.833 0 0 0-.833.834v1.666a.833.833 0 1 0 1.667 0V9.667a.833.833 0 0 0-.834-.834m4.167.834a.833.833 0 1 0-1.667 0v1.666a.833.833 0 1 0 1.667 0z"></path></svg>
  )
}

export const cartInBtn = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" fill="none">
      <path d="M2.925.488a.833.833 0 0 0-1.517.691l4.295 9.416v.001c.005.008.023.05.046.09a.9.9 0 0 0 .979.446c.045-.01.089-.023.098-.026l6.22-1.853.105-.031c.44-.13.867-.256 1.201-.523.29-.232.517-.535.657-.88.16-.396.159-.842.158-1.3V4.105c0-.01 0-.06-.004-.11a.901.901 0 0 0-.488-.73.9.9 0 0 0-.447-.098H4.147L2.925.487ZM11.833 12a1.333 1.333 0 0 0 0 2.667h.007a1.333 1.333 0 0 0 0-2.667h-.007ZM3.167 13.334c0-.737.597-1.334 1.333-1.334h.007a1.333 1.333 0 0 1 0 2.667H4.5a1.333 1.333 0 0 1-1.333-1.333Z" fill="#fff" />
    </svg>
  )
}

interface TypesLogo {
  name: string;
  src: string;
  link: string
}

export const images: TypesLogo[] = [
  {
    name: "vkLogo",
    src: vkImg,
    link: 'https://vk.com/id264614153',
  },
  {
    name: "instLogo",
    src: instImg,
    link: 'https://www.instagram.com/elena_kozyutenko_art/'
  },
  {
    name: "liveLogo",
    src: liveImg,
    link: 'https://www.livemaster.ru/elenakozyutenko',
  },
];

interface TypesImagesAppHeader {
  source: string
  name: string
  link: string
}

export const ImagesAppheader = ({ source, name, link }: TypesImagesAppHeader) => {
  return (
    <a href={link}>
      <img className={`w-5 rounded-md`} src={source} alt={name} />
    </a>
  );
};



