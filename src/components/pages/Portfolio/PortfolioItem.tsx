import React from "react";
import { Link, Outlet, useOutlet } from 'react-router-dom';

import { Animals } from "./Animals/Animals.tsx";

import styles from './styles/portfolio.module.scss'
import { PortfolioAnimals, PortfolioFlowers, PortfolioStillLife } from "../../../assets/images/Images";
import { descriptionAnimals, descriptionFlowers, descriptionStillLife } from './descriptionGroupsPicture.ts'
import { Portfolio } from "./Portfolio.tsx";


interface TypesPortfolioItem {
  Component: React.ReactNode
  headText: string
  text: string
}

export const dataPortfolioItem = [
  { Component: <PortfolioAnimals />, headText: 'Animals', text: descriptionAnimals, id: 0 },
  { Component: <PortfolioFlowers />, headText: 'Flowers', text: descriptionFlowers, id: 1 },
  { Component: <PortfolioStillLife />, headText: 'StillLife', text: descriptionStillLife, id: 2 }
]

export const PortfolioItem = ({ Component, headText, text }: TypesPortfolioItem) => {
  const outlet = useOutlet()
  return (
    <>
      <div className={`flex my-8`}>
        <Link to='/portfolio/animals'>{Component}</Link>
        <div className={`flex flex-col ml-5`}>
          <a className={`text-center ${styles.portfolioHeadTextStyle}`} href='#'>{headText}</a>
          <div className={`text-center leading-7 w-1200 ${styles.portfolioTextStyle}`}><span className={`${styles.portfolioMainTextBold}`}>{headText}</span> {text}</div>
        </div>
      </div>
      <Outlet />
      {/* {outlet ? <Outlet /> : <Portfolio />} */}
    </>
  )
}

