import React from "react";
import { Link } from 'react-router-dom';

import styles from './styles/mainStylesPictures.module.scss'

interface TypesPortfolioItem {
  Component: React.ReactNode
  headText: string
  path: string
  text: string
}

export const PortfolioItem = ({ Component, headText, text, path }: TypesPortfolioItem) => {
  return (
    <>
      <div className={`flex my-8`}>
        <Link to={path}>{Component}</Link>
        <div className={`flex flex-col ml-5`}>
          <Link className={`min-w-[100px] text-[45px] text-[#192e2f] self-center text-center`} to={path}>{headText}</Link>
          <div className={`font-[400] text-[#777777] ${styles.styleAdittionTextStyle}`}>
            <span className={`font-bold`}>{headText}</span> {text}</div>
        </div>
      </div>
    </>
  )
}

